<script setup lang="ts">
import { LngLatBounds, Map } from 'maplibre-gl'
import { trainStations } from '~/assets/data/train-stations'

onMounted(() => {
  const map = new Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    zoom: 1,
  })

  const coordinates = trainStations.features.map(({ geometry }) => geometry.coordinates)

  const bounds = coordinates.reduce((bounds, coord) => {
    return bounds.extend(coord)
  }, new LngLatBounds(coordinates[0], coordinates[1]))

  map.fitBounds(bounds, { padding: 20 })

  map.on('load', async () => {
    // data
    map.addSource('train-stations', {
      type: 'geojson',
      data: trainStations,
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50,
    })

    // clusters
    map.addLayer({
      id: 'clusters',
      type: 'circle',
      source: 'train-stations',
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

    map.addLayer({
      id: 'cluster-count',
      type: 'symbol',
      source: 'train-stations',
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-size': 12,
      },
    })

    // details
    map.addLayer({
      id: 'unclustered-train-stations',
      type: 'circle',
      source: 'train-stations',
      filter: ['!', ['has', 'point_count']],
      paint: {
        'circle-color': 'tomato',
        'circle-radius': 4,
        'circle-stroke-width': 1,
        'circle-stroke-color': '#fff',
      },
    })

    map.addLayer({
      id: 'unclustered-train-stations-name',
      type: 'symbol',
      source: 'train-stations',
      filter: ['!', ['has', 'point_count']],
      layout: {
        'text-field': ['get', 'nom'],
        'text-variable-anchor-offset': ['top', [0, 1], 'bottom', [0, -2], 'left', [1, 0], 'right', [-2, 0]],
        'text-justify': 'auto',
        'text-size': 12,
      },
    })
  })
})
</script>

<template>
  <div class="relative h-dvh">
    <div
      id="map"
      class="h-full w-full"
    />
  </div>
</template>
