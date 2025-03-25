<script setup lang="ts">
import type { GeoJSONSource } from 'maplibre-gl'
import { LngLatBounds, Map as MapLibre } from 'maplibre-gl'
import { trainStations } from '~/assets/data/train-stations'

const { maptilerKey } = useRuntimeConfig().public

const enum SOURCES {
  TRAIN_STATIONS = 'TRAIN_STATIONS',
  TRAIN_STATIONS_AREA = 'TRAIN_STATIONS_BUFFER',
}

const enum LAYERS {
  TRAIN_STATIONS_CLUSTERS = 'TRAIN_STATIONS_CLUSTERS',
  TRAIN_STATIONS_CLUSTERS_COUNT = 'TRAIN_STATIONS_CLUSTERS_COUNT',
  TRAIN_STATIONS = 'TRAIN_STATIONS',
  TRAIN_STATIONS_NAME = 'TRAIN_STATIONS_NAME',
  TRAIN_STATIONS_BUFFER = 'TRAIN_STATIONS_BUFFER',
}

const map = ref<MapLibre>()
const coordinates = trainStations.features.map(({ geometry }) => geometry.coordinates)
const computing = ref<boolean>(false)

const trainStationBounds = coordinates.reduce((bounds, coord) => {
  return bounds.extend(coord)
}, new LngLatBounds(coordinates[0], coordinates[1]))

const updateTrainStationsArea = async (radius: number) => {
  if (!map.value || computing.value) {
    return
  }

  computing.value = true
  const source = map.value.getSource(SOURCES.TRAIN_STATIONS_AREA) as GeoJSONSource
  if (!source) {
    computing.value = false
    return
  }

  const buffered = await bufferTrainStations(trainStations, radius, { units: 'kilometers' })
  if (!buffered) {
    computing.value = false
    return
  }

  source.setData(buffered)
  computing.value = false
}

const radius = ref<number>(0)
watchDebounced(radius, (val) => {
  updateTrainStationsArea(val)
}, {
  debounce: 500,
})

onMounted(() => {
  map.value = new MapLibre({
    container: 'map',
    style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${maptilerKey}`,
    zoom: 1,
  })

  map.value.fitBounds(trainStationBounds, { padding: 20 })

  map.value.on('load', async () => {
    if (!map.value) {
      return
    }
    // data
    map.value.addSource(SOURCES.TRAIN_STATIONS, {
      type: 'geojson',
      data: trainStations,
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50,
    })

    // clusters
    map.value.addLayer({
      id: LAYERS.TRAIN_STATIONS_CLUSTERS,
      type: 'circle',
      source: SOURCES.TRAIN_STATIONS,
      filter: ['has', 'point_count'],
      paint: {
        // Use step expressions (https://maplibre.org/maplibre-style-spec/#expressions-step)
        // with three steps to implement three types of circles:
        //   * Blue, 20px circles when point count is less than 100
        //   * Yellow, 30px circles when point count is between 100 and 750
        //   * Pink, 40px circles when point count is greater than or equal to 750
        'circle-color': [
          'step',
          ['get', 'point_count'],
          '#51bbd6',
          100,
          '#f1f075',
          750,
          '#f28cb1',
        ],
        'circle-radius': [
          'step',
          ['get', 'point_count'],
          20,
          100,
          30,
          750,
          40,
        ],
      },
    })

    map.value.addLayer({
      id: LAYERS.TRAIN_STATIONS_CLUSTERS_COUNT,
      type: 'symbol',
      source: SOURCES.TRAIN_STATIONS,
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-size': 12,
      },
    })

    // details
    map.value.addLayer({
      id: LAYERS.TRAIN_STATIONS,
      type: 'circle',
      source: SOURCES.TRAIN_STATIONS,
      filter: ['!', ['has', 'point_count']],
      paint: {
        'circle-color': 'tomato',
        'circle-radius': 4,
        'circle-stroke-width': 1,
        'circle-stroke-color': '#fff',
      },
    })

    map.value.addLayer({
      id: LAYERS.TRAIN_STATIONS_NAME,
      type: 'symbol',
      source: SOURCES.TRAIN_STATIONS,
      filter: ['!', ['has', 'point_count']],
      layout: {
        'text-field': ['get', 'nom'],
        'text-variable-anchor-offset': ['top', [0, 1], 'bottom', [0, -2], 'left', [1, 0], 'right', [-2, 0]],
        'text-justify': 'auto',
        'text-size': 12,
      },
    })

    // add empty area
    map.value.addSource(SOURCES.TRAIN_STATIONS_AREA, {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          coordinates: [],
          type: 'MultiPolygon',
        },
        properties: {},
      },
    })

    // Ajouter le cercle comme une couche de remplissage
    map.value.addLayer(
      {
        id: LAYERS.TRAIN_STATIONS_BUFFER,
        type: 'fill',
        source: SOURCES.TRAIN_STATIONS_AREA,
        paint: {
          'fill-color': 'black',
          'fill-opacity': 0.1,
        },
      },
      LAYERS.TRAIN_STATIONS_CLUSTERS,
    )

    // purge
    await nextTick()

    radius.value = 1.5
  })
})
</script>

<template>
  <div class="relative h-dvh">
    <UCard class="absolute z-10 top-0 left-0 m-3">
      <UFormField :ui="{ label: 'flex items-start gap-2' }">
        <template #label>
          <span>{{ `Zone de ${radius}km de rayon` }}</span>
          <span
            v-if="computing"
            class="flex items-center h-[1lh]"
          ><UIcon name="svg-spinners:180-ring" /></span>
        </template>
        <UInputNumber
          v-model="radius"
          :step="0.5"
        />
      </UFormField>
    </UCard>

    <div
      id="map"
      class="h-full w-full"
    />
  </div>
</template>
