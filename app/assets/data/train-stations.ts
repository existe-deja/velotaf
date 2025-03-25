import type { FeatureCollection } from 'geojson'

export type TrainStation = {
  nom: string
  libellecourt: string
  segment_drg: string
  codeinsee: string
  codes_uic: string
}

export type TrainStationPoint = {
  type: 'Point'
  coordinates: [number, number]
}

export const trainStations: FeatureCollection<TrainStationPoint, TrainStation> = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7743058,
          49.6852237,
        ],
      },
      properties: {
        nom: `Abancourt`,
        libellecourt: 'ABT',
        segment_drg: 'C',
        codeinsee: '60001',
        codes_uic: '87313759',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.5244159,
          47.5546432,
        ],
      },
      properties: {
        nom: `Abbaretz`,
        libellecourt: 'AAR',
        segment_drg: 'C',
        codeinsee: '44001',
        codes_uic: '87481614',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.82449,
          50.10221,
        ],
      },
      properties: {
        nom: `Abbeville`,
        libellecourt: 'ABB',
        segment_drg: 'B',
        codeinsee: '80001',
        codes_uic: '87317362',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.419151,
          48.725468,
        ],
      },
      properties: {
        nom: `Ablon-sur-Seine`,
        libellecourt: 'ABL',
        segment_drg: 'B',
        codeinsee: '94001',
        codes_uic: '87545269',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0919031,
          48.9551835,
        ],
      },
      properties: {
        nom: `Achères Grand Cormier`,
        libellecourt: 'GCR',
        segment_drg: 'B',
        codeinsee: '78551',
        codes_uic: '87386052',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.07739,
          48.97011,
        ],
      },
      properties: {
        nom: `Achères Ville`,
        libellecourt: 'ACW',
        segment_drg: 'B',
        codeinsee: '78005',
        codes_uic: '87381657',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.780168,
          50.1317525,
        ],
      },
      properties: {
        nom: `Achiet-le-Grand`,
        libellecourt: 'ACT',
        segment_drg: 'C',
        codeinsee: '62005',
        codes_uic: '87342048',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.56135,
          49.00956,
        ],
      },
      properties: {
        nom: `Aéroport Charles de Gaulle 1`,
        libellecourt: 'RSY',
        segment_drg: 'B',
        codeinsee: '93073',
        codes_uic: '87271460',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.570892,
          49.003652,
        ],
      },
      properties: {
        nom: `Aéroport Charles de Gaulle 2 TGV`,
        libellecourt: 'RYT',
        segment_drg: 'A;A',
        codeinsee: '93073',
        codes_uic: '87271494;87001479',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8564997,
          43.4313701,
        ],
      },
      properties: {
        nom: `Agay`,
        libellecourt: 'AGH',
        segment_drg: 'C',
        codeinsee: '83118',
        codes_uic: '87757559',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.466203,
          43.31728,
        ],
      },
      properties: {
        nom: `Agde`,
        libellecourt: 'AGD',
        segment_drg: 'B',
        codeinsee: '34003',
        codes_uic: '87781278',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.620932,
          44.208311,
        ],
      },
      properties: {
        nom: `Agen`,
        libellecourt: 'AGN',
        segment_drg: 'A',
        codeinsee: '47001',
        codes_uic: '87586008',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7486706,
          45.2865966,
        ],
      },
      properties: {
        nom: `Agonac`,
        libellecourt: 'AGA',
        segment_drg: 'C',
        codeinsee: '24002',
        codes_uic: '87595157',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.973137,
          49.408017,
        ],
      },
      properties: {
        nom: `Aguilcourt - Variscourt`,
        libellecourt: 'AGK',
        segment_drg: 'C',
        codeinsee: '02761',
        codes_uic: '87171702',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.95168,
          46.09402,
        ],
      },
      properties: {
        nom: `Aigrefeuille le Thou`,
        libellecourt: 'AGR',
        segment_drg: 'C',
        codeinsee: '17447',
        codes_uic: '87485193',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.8131468,
          45.5363048,
        ],
      },
      properties: {
        nom: `Aiguebelette-le-Lac`,
        libellecourt: 'AGQ',
        segment_drg: 'C',
        codeinsee: '73001',
        codes_uic: '87741421',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3067175,
          45.5437225,
        ],
      },
      properties: {
        nom: `Aiguebelle`,
        libellecourt: 'AEB',
        segment_drg: 'C',
        codeinsee: '73002',
        codes_uic: '87741256',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1982621,
          46.0147884,
        ],
      },
      properties: {
        nom: `Aigueperse`,
        libellecourt: 'AGE',
        segment_drg: 'C',
        codeinsee: '63001',
        codes_uic: '87734129',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.1912102,
          43.5709008,
        ],
      },
      properties: {
        nom: `Aigues-Mortes`,
        libellecourt: 'AIM',
        segment_drg: 'C',
        codeinsee: '30003',
        codes_uic: '87775858',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3352388,
          44.2987224,
        ],
      },
      properties: {
        nom: `Aiguillon`,
        libellecourt: 'AIN',
        segment_drg: 'C',
        codeinsee: '47004',
        codes_uic: '87586693',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3372988,
          47.9138876,
        ],
      },
      properties: {
        nom: `Aillevillers`,
        libellecourt: 'AIP',
        segment_drg: 'C',
        codeinsee: '70171',
        codes_uic: '87185629',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.36419,
          49.75448,
        ],
      },
      properties: {
        nom: `Ailly-sur-Noye`,
        libellecourt: 'ASN',
        segment_drg: 'B',
        codeinsee: '80010',
        codes_uic: '87313221',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.20059,
          49.92838,
        ],
      },
      properties: {
        nom: `Ailly-sur-Somme`,
        libellecourt: 'AYS',
        segment_drg: 'B',
        codeinsee: '80011',
        codes_uic: '87313098',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2082933,
          43.6786107,
        ],
      },
      properties: {
        nom: `Aimargues`,
        libellecourt: 'AIA',
        segment_drg: 'C',
        codeinsee: '30006',
        codes_uic: '87775833',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.648646,
          45.5544,
        ],
      },
      properties: {
        nom: `Aime - La Plagne`,
        libellecourt: 'ANJ',
        segment_drg: 'C',
        codeinsee: '73006',
        codes_uic: '87741769',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1582447,
          47.170501,
        ],
      },
      properties: {
        nom: `Aiserey`,
        libellecourt: 'ASI',
        segment_drg: 'C',
        codeinsee: '21005',
        codes_uic: '87713636',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.445345,
          43.522912,
        ],
      },
      properties: {
        nom: `Aix-en-Provence`,
        libellecourt: 'AXP',
        segment_drg: 'B',
        codeinsee: '13001',
        codes_uic: '87751404',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.317534,
          43.455237,
        ],
      },
      properties: {
        nom: `Aix-en-Provence TGV`,
        libellecourt: 'AXV',
        segment_drg: 'A',
        codeinsee: '13001',
        codes_uic: '87319012',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.909371,
          45.688161,
        ],
      },
      properties: {
        nom: `Aix-les-Bains le Revard`,
        libellecourt: 'AIX',
        segment_drg: 'B',
        codeinsee: '73008',
        codes_uic: '87741132',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1456892,
          45.7965002,
        ],
      },
      properties: {
        nom: `Aixe-sur-Vienne`,
        libellecourt: 'ASV',
        segment_drg: 'C',
        codeinsee: '87001',
        codes_uic: '87592667',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7717824,
          45.7521198,
        ],
      },
      properties: {
        nom: `Alaï`,
        libellecourt: 'ALA',
        segment_drg: 'C',
        codeinsee: '69244',
        codes_uic: '87722744',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9483418,
          45.785946,
        ],
      },
      properties: {
        nom: `Albens`,
        libellecourt: 'ABN',
        segment_drg: 'C',
        codeinsee: '73010',
        codes_uic: '87746115',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.64453,
          50.00546,
        ],
      },
      properties: {
        nom: `Albert`,
        libellecourt: 'ALJ',
        segment_drg: 'B',
        codeinsee: '80016',
        codes_uic: '87313072',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.383167,
          45.672977,
        ],
      },
      properties: {
        nom: `Albertville`,
        libellecourt: 'ALV',
        segment_drg: 'B',
        codeinsee: '73011',
        codes_uic: '87741645',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.137958,
          43.92238,
        ],
      },
      properties: {
        nom: `Albi`,
        libellecourt: 'ALB',
        segment_drg: 'B',
        codeinsee: '81004',
        codes_uic: '87615005',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1409629,
          43.938011,
        ],
      },
      properties: {
        nom: `Albi Madeleine`,
        libellecourt: 'ALM',
        segment_drg: 'C',
        codeinsee: '81004',
        codes_uic: '87615195',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4448012,
          44.0919078,
        ],
      },
      properties: {
        nom: `Albias`,
        libellecourt: 'ALE',
        segment_drg: 'C',
        codeinsee: '82002',
        codes_uic: '87613398',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.832874,
          45.874921,
        ],
      },
      properties: {
        nom: `Albigny - Neuville`,
        libellecourt: 'VVN',
        segment_drg: 'B',
        codeinsee: '69003',
        codes_uic: '87721266',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.098531,
          48.433884,
        ],
      },
      properties: {
        nom: `Alençon`,
        libellecourt: 'ALN',
        segment_drg: 'B',
        codeinsee: '61001',
        codes_uic: '87444711',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.084948,
          44.127825,
        ],
      },
      properties: {
        nom: `Alès`,
        libellecourt: 'ALS',
        segment_drg: 'B',
        codeinsee: '30007',
        codes_uic: '87775288',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4731471,
          45.2589385,
        ],
      },
      properties: {
        nom: `Allassac`,
        libellecourt: 'AAA',
        segment_drg: 'C',
        codeinsee: '19005',
        codes_uic: '87594234',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.506475,
          48.897109,
        ],
      },
      properties: {
        nom: `Allée de la Tour Rendez-Vous`,
        libellecourt: 'AET',
        segment_drg: 'B',
        codeinsee: '93057',
        codes_uic: '87113878',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6638926,
          44.541296,
        ],
      },
      properties: {
        nom: `Allenc`,
        libellecourt: 'AEN',
        segment_drg: 'C',
        codeinsee: '48003',
        codes_uic: '87783654',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.673517,
          44.919217,
        ],
      },
      properties: {
        nom: `Alleyras`,
        libellecourt: 'AES',
        segment_drg: 'C',
        codeinsee: '43005',
        codes_uic: '87731885',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2392493,
          47.6270174,
        ],
      },
      properties: {
        nom: `Altkirch`,
        libellecourt: 'ALK',
        segment_drg: 'B',
        codeinsee: '68004',
        codes_uic: '87182238',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.4738775,
          49.5238187,
        ],
      },
      properties: {
        nom: `Amagne - Lucquy`,
        libellecourt: 'AMA',
        segment_drg: 'C',
        codeinsee: '08008',
        codes_uic: '87172262',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.406501,
          45.9529056,
        ],
      },
      properties: {
        nom: `Ambazac`,
        libellecourt: 'ABZ',
        segment_drg: 'C',
        codeinsee: '87002',
        codes_uic: '87592311',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.342388,
          45.954008,
        ],
      },
      properties: {
        nom: `Ambérieu-en-Bugey`,
        libellecourt: 'AMB',
        segment_drg: 'B',
        codeinsee: '01004',
        codes_uic: '87743716',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.981299,
          47.42148,
        ],
      },
      properties: {
        nom: `Amboise`,
        libellecourt: 'AMQ',
        segment_drg: 'B',
        codeinsee: '37003',
        codes_uic: '87574343',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3382579,
          46.0115941,
        ],
      },
      properties: {
        nom: `Ambronay - Priay`,
        libellecourt: 'AAI',
        segment_drg: 'C',
        codeinsee: '01007',
        codes_uic: '87743146',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.312592,
          49.890746,
        ],
      },
      properties: {
        nom: `Amiens`,
        libellecourt: 'AMS',
        segment_drg: 'A',
        codeinsee: '80021',
        codes_uic: '87313874',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9105811,
          49.4847322,
        ],
      },
      properties: {
        nom: `Amifontaine`,
        libellecourt: 'AMF',
        segment_drg: 'C',
        codeinsee: '02013',
        codes_uic: '87171744',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3892882,
          48.4381825,
        ],
      },
      properties: {
        nom: `Amilly Ouerray`,
        libellecourt: 'AMY',
        segment_drg: 'C',
        codeinsee: '28006',
        codes_uic: '87394205',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.326844,
          45.970982,
        ],
      },
      properties: {
        nom: `Amplepuis`,
        libellecourt: 'AMP',
        segment_drg: 'B',
        codeinsee: '69006',
        codes_uic: '87721035',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.177763,
          47.369334,
        ],
      },
      properties: {
        nom: `Ancenis`,
        libellecourt: 'ANC',
        segment_drg: 'B',
        codeinsee: '44003',
        codes_uic: '87481192',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.6702434,
          49.9307448,
        ],
      },
      properties: {
        nom: `Anchamps`,
        libellecourt: 'ACP',
        segment_drg: 'C',
        codeinsee: '08011',
        codes_uic: '87172858',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2503424,
          46.3496187,
        ],
      },
      properties: {
        nom: `Anché - Voulon`,
        libellecourt: 'ACV',
        segment_drg: 'C',
        codeinsee: '86003',
        codes_uic: '87575332',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0627661,
          49.0575093,
        ],
      },
      properties: {
        nom: `Ancy-sur-Moselle`,
        libellecourt: 'AYM',
        segment_drg: 'C',
        codeinsee: '57021',
        codes_uic: '87192419',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.923584,
          46.8594671,
        ],
      },
      properties: {
        nom: `Andelot-en-Montagne`,
        libellecourt: 'AND',
        segment_drg: 'C',
        codeinsee: '39009',
        codes_uic: '87715102',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.04928,
          48.9747,
        ],
      },
      properties: {
        nom: `Andrésy`,
        libellecourt: 'ACY',
        segment_drg: 'B',
        codeinsee: '78015',
        codes_uic: '87381491',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.254834,
          45.5217037,
        ],
      },
      properties: {
        nom: `Andrézieux-Bouthéon`,
        libellecourt: 'ANZ',
        segment_drg: 'C',
        codeinsee: '42005',
        codes_uic: '87726406',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.531894,
          47.4670899,
        ],
      },
      properties: {
        nom: `Angers Maître École`,
        libellecourt: 'AME',
        segment_drg: 'C',
        codeinsee: '49007',
        codes_uic: '87484048',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.55682,
          47.464647,
        ],
      },
      properties: {
        nom: `Angers Saint-Laud`,
        libellecourt: 'ASL',
        segment_drg: 'A',
        codeinsee: '49007',
        codes_uic: '87484006',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0034931,
          48.3112062,
        ],
      },
      properties: {
        nom: `Angerville`,
        libellecourt: 'AGV',
        segment_drg: 'B',
        codeinsee: '91016',
        codes_uic: '87543090',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.164608,
          45.653572,
        ],
      },
      properties: {
        nom: `Angoulême`,
        libellecourt: 'ANG',
        segment_drg: 'A',
        codeinsee: '16015',
        codes_uic: '87583005',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.1154503,
          46.108057,
        ],
      },
      properties: {
        nom: `Angoulins sur Mer`,
        libellecourt: 'AOM',
        segment_drg: 'C',
        codeinsee: '17010',
        codes_uic: '87485102',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4487637,
          49.4960073,
        ],
      },
      properties: {
        nom: `Anizy - Pinon`,
        libellecourt: 'API',
        segment_drg: 'C',
        codeinsee: '02602',
        codes_uic: '87296566',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1475351,
          50.6227708,
        ],
      },
      properties: {
        nom: `Annappes`,
        libellecourt: 'ANP',
        segment_drg: 'C',
        codeinsee: '59009',
        codes_uic: '87286856',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.121835,
          45.901965,
        ],
      },
      properties: {
        nom: `Annecy`,
        libellecourt: 'ANY',
        segment_drg: 'A',
        codeinsee: '74010',
        codes_uic: '87746008',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.23652,
          46.199222,
        ],
      },
      properties: {
        nom: `Annemasse`,
        libellecourt: 'ANE',
        segment_drg: 'B',
        codeinsee: '74012',
        codes_uic: '87745497',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0929803,
          49.984892,
        ],
      },
      properties: {
        nom: `Anor`,
        libellecourt: 'ANO',
        segment_drg: 'C',
        codeinsee: '59012',
        codes_uic: '87295055',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.71987,
          45.93929,
        ],
      },
      properties: {
        nom: `Anse Halte`,
        libellecourt: 'AHA',
        segment_drg: 'B',
        codeinsee: '69009',
        codes_uic: '87721324',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8921036,
          43.4349641,
        ],
      },
      properties: {
        nom: `Anthéor Cap Roux`,
        libellecourt: 'AHC',
        segment_drg: 'C',
        codeinsee: '83118',
        codes_uic: '87757567',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.119498,
          43.585784,
        ],
      },
      properties: {
        nom: `Antibes`,
        libellecourt: 'ATB',
        segment_drg: 'A',
        codeinsee: '06004',
        codes_uic: '87757674',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.25494,
          50.446845,
        ],
      },
      properties: {
        nom: `Anvin`,
        libellecourt: 'ANV',
        segment_drg: 'C',
        codeinsee: '62036',
        codes_uic: '87317255',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.371972,
          49.458836,
        ],
      },
      properties: {
        nom: `Apach`,
        libellecourt: 'APJ',
        segment_drg: 'C',
        codeinsee: '57026',
        codes_uic: '87191643',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1221903,
          49.5808826,
        ],
      },
      properties: {
        nom: `Appilly`,
        libellecourt: 'APP',
        segment_drg: 'C',
        codeinsee: '60021',
        codes_uic: '87296459',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.3954517,
          44.6743555,
        ],
      },
      properties: {
        nom: `Arbanats`,
        libellecourt: 'ABH',
        segment_drg: 'C',
        codeinsee: '33007',
        codes_uic: '87582726',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7648273,
          46.912509,
        ],
      },
      properties: {
        nom: `Arbois`,
        libellecourt: 'AOI',
        segment_drg: 'C',
        codeinsee: '39013',
        codes_uic: '87718155',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7767843,
          47.0303516,
        ],
      },
      properties: {
        nom: `Arc-et-Senans`,
        libellecourt: 'ACA',
        segment_drg: 'C',
        codeinsee: '25021',
        codes_uic: '87718841',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.16523,
          44.659009,
        ],
      },
      properties: {
        nom: `Arcachon`,
        libellecourt: 'ARC',
        segment_drg: 'B',
        codeinsee: '33009',
        codes_uic: '87582668',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.5283085,
          48.1198133,
        ],
      },
      properties: {
        nom: `Arches`,
        libellecourt: 'ARH',
        segment_drg: 'C',
        codeinsee: '88011',
        codes_uic: '87144410',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.7668885,
          47.6008461,
        ],
      },
      properties: {
        nom: `Arcy-sur-Cure`,
        libellecourt: 'ACU',
        segment_drg: 'C',
        codeinsee: '89015',
        codes_uic: '87683680',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3676221,
          43.3132339,
        ],
      },
      properties: {
        nom: `Arenc Euroméditerranée`,
        libellecourt: 'AEM',
        segment_drg: 'C',
        codeinsee: '13202',
        codes_uic: '87580340',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.8093835,
          44.0069764,
        ],
      },
      properties: {
        nom: `Arengosse`,
        libellecourt: 'ARO',
        segment_drg: 'C',
        codeinsee: '40006',
        codes_uic: '87671479',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.022349,
          42.54397,
        ],
      },
      properties: {
        nom: `Argelès-sur-Mer`,
        libellecourt: 'AMR',
        segment_drg: 'B',
        codeinsee: '66008',
        codes_uic: '87784231',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.025291,
          48.738545,
        ],
      },
      properties: {
        nom: `Argentan`,
        libellecourt: 'ARG',
        segment_drg: 'B',
        codeinsee: '61006',
        codes_uic: '87444539',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.25727,
          48.94686,
        ],
      },
      properties: {
        nom: `Argenteuil`,
        libellecourt: 'ARW',
        segment_drg: 'B',
        codeinsee: '95018',
        codes_uic: '87381848',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9264844,
          45.9819438,
        ],
      },
      properties: {
        nom: `Argentière`,
        libellecourt: 'AGI',
        segment_drg: 'C',
        codeinsee: '74056',
        codes_uic: '87746859',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.518305,
          46.592248,
        ],
      },
      properties: {
        nom: `Argenton-sur-Creuse`,
        libellecourt: 'AGC',
        segment_drg: 'B',
        codeinsee: '36006',
        codes_uic: '87597120',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.63203,
          43.684853,
        ],
      },
      properties: {
        nom: `Arles`,
        libellecourt: 'ARS',
        segment_drg: 'B',
        codeinsee: '13004',
        codes_uic: '87753657',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1208073,
          50.2863204,
        ],
      },
      properties: {
        nom: `Arleux`,
        libellecourt: 'ARX',
        segment_drg: 'C',
        codeinsee: '59015',
        codes_uic: '87345421',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.87763,
          50.68084,
        ],
      },
      properties: {
        nom: `Armentières`,
        libellecourt: 'ARM',
        segment_drg: 'B',
        codeinsee: '59017',
        codes_uic: '87286146',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1898826,
          47.9285663,
        ],
      },
      properties: {
        nom: `Arnage`,
        libellecourt: 'AAG',
        segment_drg: 'C',
        codeinsee: '72008',
        codes_uic: '87396549',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4083063,
          50.831522,
        ],
      },
      properties: {
        nom: `Arnèke`,
        libellecourt: 'ARN',
        segment_drg: 'C',
        codeinsee: '59018',
        codes_uic: '87281121',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.24112,
          48.58617,
        ],
      },
      properties: {
        nom: `Arpajon`,
        libellecourt: 'ARP',
        segment_drg: 'B',
        codeinsee: '91021',
        codes_uic: '87545467',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.781942,
          50.286673,
        ],
      },
      properties: {
        nom: `Arras`,
        libellecourt: 'ARR',
        segment_drg: 'A',
        codeinsee: '62041',
        codes_uic: '87342014',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1285567,
          48.0997945,
        ],
      },
      properties: {
        nom: `Arrou`,
        libellecourt: 'AOU',
        segment_drg: 'C',
        codeinsee: '28012',
        codes_uic: '87394486',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0776461,
          49.0744745,
        ],
      },
      properties: {
        nom: `Ars-sur-Moselle`,
        libellecourt: 'ASM',
        segment_drg: 'C',
        codeinsee: '57032',
        codes_uic: '87192401',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8833705,
          48.0808761,
        ],
      },
      properties: {
        nom: `Artenay`,
        libellecourt: 'ATY',
        segment_drg: 'C',
        codeinsee: '45008',
        codes_uic: '87543058',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5701881,
          43.3931062,
        ],
      },
      properties: {
        nom: `Artix`,
        libellecourt: 'ATI',
        segment_drg: 'C',
        codeinsee: '64061',
        codes_uic: '87672212',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3106747,
          45.3653797,
        ],
      },
      properties: {
        nom: `Arvant`,
        libellecourt: 'ARV',
        segment_drg: 'C',
        codeinsee: '43038',
        codes_uic: '87734251',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1598992,
          50.6218591,
        ],
      },
      properties: {
        nom: `Ascq`,
        libellecourt: 'ASC',
        segment_drg: 'C',
        codeinsee: '59009',
        codes_uic: '87286864',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.28324,
          48.9058,
        ],
      },
      properties: {
        nom: `Asnières-sur-Seine`,
        libellecourt: 'AEE',
        segment_drg: 'B',
        codeinsee: '92004',
        codes_uic: '87381137',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7545655,
          44.519428,
        ],
      },
      properties: {
        nom: `Aspres-sur-Buëch`,
        libellecourt: 'ASH',
        segment_drg: 'C',
        codeinsee: '05010',
        codes_uic: '87763250',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.2950176,
          43.2543993,
        ],
      },
      properties: {
        nom: `Assat`,
        libellecourt: 'ATK',
        segment_drg: 'C',
        codeinsee: '64067',
        codes_uic: '87672162',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8697681,
          44.6746197,
        ],
      },
      properties: {
        nom: `Assier`,
        libellecourt: 'AER',
        segment_drg: 'C',
        codeinsee: '46009',
        codes_uic: '87613075',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.403749,
          48.712557,
        ],
      },
      properties: {
        nom: `Athis-Mons`,
        libellecourt: 'ATH',
        segment_drg: 'B',
        codeinsee: '91027',
        codes_uic: '87545251',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.56658,
          43.296045,
        ],
      },
      properties: {
        nom: `Aubagne`,
        libellecourt: 'AUB',
        segment_drg: 'B',
        codeinsee: '13005',
        codes_uic: '87751750',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6412346,
          45.1816781,
        ],
      },
      properties: {
        nom: `Aubazines - Saint-Hilaire`,
        libellecourt: 'ABA',
        segment_drg: 'C',
        codeinsee: '19211',
        codes_uic: '87594465',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8484987,
          48.971825,
        ],
      },
      properties: {
        nom: `Aubergenville Élisabethville`,
        libellecourt: 'AEH',
        segment_drg: 'B',
        codeinsee: '78029',
        codes_uic: '87386730',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1605115,
          45.983812,
        ],
      },
      properties: {
        nom: `Aubiat`,
        libellecourt: 'AUK',
        segment_drg: 'C',
        codeinsee: '63013',
        codes_uic: '87734111',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4198843,
          45.0151419,
        ],
      },
      properties: {
        nom: `Aubie - Saint-Antoine`,
        libellecourt: 'ATX',
        segment_drg: 'C',
        codeinsee: '33018',
        codes_uic: '87491233',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7891179,
          43.6502068,
        ],
      },
      properties: {
        nom: `Aubiet`,
        libellecourt: 'AIT',
        segment_drg: 'C',
        codeinsee: '32012',
        codes_uic: '87611764',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2657714,
          47.686945,
        ],
      },
      properties: {
        nom: `Aubigné-Racan`,
        libellecourt: 'ABG',
        segment_drg: 'C',
        codeinsee: '72013',
        codes_uic: '87396572',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.158706,
          50.2685315,
        ],
      },
      properties: {
        nom: `Aubigny-au-Bac`,
        libellecourt: 'AAB',
        segment_drg: 'C',
        codeinsee: '59026',
        codes_uic: '87345447',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5928045,
          50.35297,
        ],
      },
      properties: {
        nom: `Aubigny-en-Artois`,
        libellecourt: 'ABI',
        segment_drg: 'C',
        codeinsee: '62045',
        codes_uic: '87342246',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2393128,
          44.5272762,
        ],
      },
      properties: {
        nom: `Aubin`,
        libellecourt: 'AVB',
        segment_drg: 'C',
        codeinsee: '12013',
        codes_uic: '87613224',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9705382,
          50.3946137,
        ],
      },
      properties: {
        nom: `Aubin-Saint-Vaast`,
        libellecourt: 'AUV',
        segment_drg: 'C',
        codeinsee: '62046',
        codes_uic: '87316604',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9714608,
          49.216163,
        ],
      },
      properties: {
        nom: `Auboué`,
        libellecourt: 'ABE',
        segment_drg: 'C',
        codeinsee: '54028',
        codes_uic: '87191684',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7616512,
          50.1044507,
        ],
      },
      properties: {
        nom: `Aubrives`,
        libellecourt: 'ARI',
        segment_drg: 'C',
        codeinsee: '08028',
        codes_uic: '87172122',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1617231,
          45.9596691,
        ],
      },
      properties: {
        nom: `Aubusson`,
        libellecourt: 'AOO',
        segment_drg: 'C',
        codeinsee: '23008',
        codes_uic: '87597823',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.596661,
          43.647488,
        ],
      },
      properties: {
        nom: `Auch`,
        libellecourt: 'AUH',
        segment_drg: 'B',
        codeinsee: '32013',
        codes_uic: '87611749',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1022448,
          50.3963631,
        ],
      },
      properties: {
        nom: `Auchy-lès-Hesdin`,
        libellecourt: 'AHH',
        segment_drg: 'C',
        codeinsee: '62050',
        codes_uic: '87317230',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5960138,
          49.2161315,
        ],
      },
      properties: {
        nom: `Audrieu`,
        libellecourt: 'ADR',
        segment_drg: 'C',
        codeinsee: '14026',
        codes_uic: '87444059',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.07636,
          50.87567,
        ],
      },
      properties: {
        nom: `Audruicq`,
        libellecourt: 'ADQ',
        segment_drg: 'B',
        codeinsee: '62057',
        codes_uic: '87281428',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.89139,
          49.36682,
        ],
      },
      properties: {
        nom: `Audun-le-Roman`,
        libellecourt: 'ALR',
        segment_drg: 'C',
        codeinsee: '54029',
        codes_uic: '87194357',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.098441,
          49.716044,
        ],
      },
      properties: {
        nom: `Auffay`,
        libellecourt: 'AUF',
        segment_drg: 'B',
        codeinsee: '76034',
        codes_uic: '87415158',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1614332,
          45.7920571,
        ],
      },
      properties: {
        nom: `Aulnat Aéroport`,
        libellecourt: 'AUL',
        segment_drg: 'C',
        codeinsee: '63019',
        codes_uic: '87562421',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.49431,
          48.93179,
        ],
      },
      properties: {
        nom: `Aulnay-sous-Bois`,
        libellecourt: 'ABM',
        segment_drg: 'B',
        codeinsee: '93005',
        codes_uic: '87271411',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.84337,
          50.19749,
        ],
      },
      properties: {
        nom: `Aulnoye-Aymeries`,
        libellecourt: 'AYE',
        segment_drg: 'B',
        codeinsee: '59033',
        codes_uic: '87295600',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7560425,
          49.7650371,
        ],
      },
      properties: {
        nom: `Aumale`,
        libellecourt: 'AUM',
        segment_drg: 'C',
        codeinsee: '76035',
        codes_uic: '87313767',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2835489,
          44.7181699,
        ],
      },
      properties: {
        nom: `Aumont-Aubrac`,
        libellecourt: 'AAU',
        segment_drg: 'C',
        codeinsee: '48009',
        codes_uic: '87783266',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.77998,
          48.4458242,
        ],
      },
      properties: {
        nom: `Auneau`,
        libellecourt: 'AUN',
        segment_drg: 'C',
        codeinsee: '28317',
        codes_uic: '87545657',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.999995,
          47.68022,
        ],
      },
      properties: {
        nom: `Auray`,
        libellecourt: 'ARY',
        segment_drg: 'A',
        codeinsee: '56007',
        codes_uic: '87476200',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.1983439,
          45.3711611,
        ],
      },
      properties: {
        nom: `Aurec-sur-Loire`,
        libellecourt: 'AEC',
        segment_drg: 'C',
        codeinsee: '43012',
        codes_uic: '87726760',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.435655,
          44.921092,
        ],
      },
      properties: {
        nom: `Aurillac`,
        libellecourt: 'AUC',
        segment_drg: 'C',
        codeinsee: '15014',
        codes_uic: '87645002',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.468831,
          43.348993,
        ],
      },
      properties: {
        nom: `Auterive`,
        libellecourt: 'AIE',
        segment_drg: 'B',
        codeinsee: '31033',
        codes_uic: '87611384',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2929079,
          46.9548746,
        ],
      },
      properties: {
        nom: `Autun`,
        libellecourt: 'AUP',
        segment_drg: 'C',
        codeinsee: '71014',
        codes_uic: '87694570',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.17526,
          49.07062,
        ],
      },
      properties: {
        nom: `Auvers-sur-Oise`,
        libellecourt: 'AUW',
        segment_drg: 'C',
        codeinsee: '95039',
        codes_uic: '87276543',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.58514,
          47.797645,
        ],
      },
      properties: {
        nom: `Auxerre Saint-Gervais`,
        libellecourt: 'AUX',
        segment_drg: 'B',
        codeinsee: '89024',
        codes_uic: '87683573',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.37737,
          47.192663,
        ],
      },
      properties: {
        nom: `Auxonne`,
        libellecourt: 'AXO',
        segment_drg: 'B',
        codeinsee: '21639',
        codes_uic: '87713347',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9124463,
          47.4957553,
        ],
      },
      properties: {
        nom: `Avallon`,
        libellecourt: 'AVA',
        segment_drg: 'C',
        codeinsee: '89025',
        codes_uic: '87683789',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.043689,
          49.0647826,
        ],
      },
      properties: {
        nom: `Avenay`,
        libellecourt: 'AAY',
        segment_drg: 'C',
        codeinsee: '51028',
        codes_uic: '87171579',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.279969,
          48.853322,
        ],
      },
      properties: {
        nom: `Avenue du Président Kennedy Maison de Radio France`,
        libellecourt: 'APK',
        segment_drg: 'B',
        codeinsee: '75116',
        codes_uic: '87543207',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2756167,
          48.870971,
        ],
      },
      properties: {
        nom: `Avenue Foch`,
        libellecourt: 'AVF',
        segment_drg: 'B',
        codeinsee: '75116',
        codes_uic: '87381038',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.272238,
          48.8644077,
        ],
      },
      properties: {
        nom: `Avenue Henri Martin`,
        libellecourt: 'AHM',
        segment_drg: 'B',
        codeinsee: '75116',
        codes_uic: '87381046',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9485876,
          50.1185513,
        ],
      },
      properties: {
        nom: `Avesnelles`,
        libellecourt: 'AVS',
        segment_drg: 'C',
        codeinsee: '59035',
        codes_uic: '87295725',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.93295,
          50.12674,
        ],
      },
      properties: {
        nom: `Avesnes-sur-Helpe`,
        libellecourt: 'AVN',
        segment_drg: 'B',
        codeinsee: '59036',
        codes_uic: '87295733',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.805281,
          43.9419,
        ],
      },
      properties: {
        nom: `Avignon Centre`,
        libellecourt: 'AVI',
        segment_drg: 'B',
        codeinsee: '84007',
        codes_uic: '87765008',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.786079,
          43.921586,
        ],
      },
      properties: {
        nom: `Avignon TGV`,
        libellecourt: 'AVV',
        segment_drg: 'A;A',
        codeinsee: '84007',
        codes_uic: '87318964;87981902',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7872687,
          43.3638769,
        ],
      },
      properties: {
        nom: `Avignonet-Lauragais`,
        libellecourt: 'AWG',
        segment_drg: 'C',
        codeinsee: '31037',
        codes_uic: '87616011',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.83365,
          50.40723,
        ],
      },
      properties: {
        nom: `Avion`,
        libellecourt: 'AON',
        segment_drg: 'C',
        codeinsee: '62065',
        codes_uic: '87342584',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6523757,
          47.0349061,
        ],
      },
      properties: {
        nom: `Avord`,
        libellecourt: 'ADG',
        segment_drg: 'C',
        codeinsee: '18018',
        codes_uic: '87576439',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.434573,
          47.1298359,
        ],
      },
      properties: {
        nom: `Avoudrey`,
        libellecourt: 'AVO',
        segment_drg: 'C',
        codeinsee: '25039',
        codes_uic: '87718551',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3700755,
          48.6902445,
        ],
      },
      properties: {
        nom: `Avranches`,
        libellecourt: 'AVR',
        segment_drg: 'C',
        codeinsee: '50025',
        codes_uic: '87448514',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4179608,
          49.4446439,
        ],
      },
      properties: {
        nom: `Avrechy`,
        libellecourt: 'AVY',
        segment_drg: 'C',
        codeinsee: '60034',
        codes_uic: '87313296',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8332516,
          42.7247967,
        ],
      },
      properties: {
        nom: `Ax-les-Thermes`,
        libellecourt: 'AXN',
        segment_drg: 'C',
        codeinsee: '09032',
        codes_uic: '87611533',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0015644,
          49.0487318,
        ],
      },
      properties: {
        nom: `Ay`,
        libellecourt: 'AYN',
        segment_drg: 'C',
        codeinsee: '51030',
        codes_uic: '87171561',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.1280462,
          46.1273815,
        ],
      },
      properties: {
        nom: `Aytré Plage`,
        libellecourt: 'ATL',
        segment_drg: 'C',
        codeinsee: '17028',
        codes_uic: '87437806',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.4475388,
          47.2663383,
        ],
      },
      properties: {
        nom: `Azay-le-Rideau`,
        libellecourt: 'AZR',
        segment_drg: 'C',
        codeinsee: '37014',
        codes_uic: '87571638',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8599885,
          47.3652695,
        ],
      },
      properties: {
        nom: `Azay-sur-Cher`,
        libellecourt: 'EUR',
        segment_drg: 'C',
        codeinsee: '37156',
        codes_uic: '87574442',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.695778,
          48.4913355,
        ],
      },
      properties: {
        nom: `Azerailles`,
        libellecourt: 'AZE',
        segment_drg: 'C',
        codeinsee: '54038',
        codes_uic: '87141408',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.544928378,
          47.25875274,
        ],
      },
      properties: {
        nom: `Babinière`,
        libellecourt: 'BBR',
        segment_drg: 'C',
        codeinsee: '44035',
        codes_uic: '87590349',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.74383,
          48.452405,
        ],
      },
      properties: {
        nom: `Baccarat`,
        libellecourt: 'BAC',
        segment_drg: 'C',
        codeinsee: '54039',
        codes_uic: '87141416',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1602503,
          44.6652105,
        ],
      },
      properties: {
        nom: `Bagnac-sur-Célé`,
        libellecourt: 'BAG',
        segment_drg: 'C',
        codeinsee: '46015',
        codes_uic: '87613604',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7033327,
          48.2304802,
        ],
      },
      properties: {
        nom: `Bagneaux-sur-Loing`,
        libellecourt: 'BXN',
        segment_drg: 'C',
        codeinsee: '77016',
        codes_uic: '87684191',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.628178,
          44.5286125,
        ],
      },
      properties: {
        nom: `Bagnols - Chadenet`,
        libellecourt: 'BCT',
        segment_drg: 'C',
        codeinsee: '48037',
        codes_uic: '87783647',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.627032,
          44.161626,
        ],
      },
      properties: {
        nom: `Bagnols-sur-Cèze`,
        libellecourt: 'BSC',
        segment_drg: 'C',
        codeinsee: '30028',
        codes_uic: '87764571',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0071585,
          43.6533234,
        ],
      },
      properties: {
        nom: `Baillargues`,
        libellecourt: 'BGU',
        segment_drg: 'B',
        codeinsee: '34022',
        codes_uic: '87773457',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3248851,
          48.3668028,
        ],
      },
      properties: {
        nom: `Bailleau-le-Pin`,
        libellecourt: 'BAP',
        segment_drg: 'C',
        codeinsee: '28021',
        codes_uic: '87394411',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.73445,
          50.72916,
        ],
      },
      properties: {
        nom: `Bailleul`,
        libellecourt: 'BIU',
        segment_drg: 'B',
        codeinsee: '59043',
        codes_uic: '87286179',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8409809,
          50.3351257,
        ],
      },
      properties: {
        nom: `Bailleul-Sir-Berthoult`,
        libellecourt: 'BSH',
        segment_drg: 'C',
        codeinsee: '62073',
        codes_uic: '87342592',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2952683,
          47.9811282,
        ],
      },
      properties: {
        nom: `Bains-les-Bains`,
        libellecourt: 'BNS',
        segment_drg: 'C',
        codeinsee: '88108',
        codes_uic: '87144147',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.099327,
          48.5863794,
        ],
      },
      properties: {
        nom: `Bainville-sur-Madon`,
        libellecourt: 'BNK',
        segment_drg: 'C',
        codeinsee: '54043',
        codes_uic: '87141531',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2347796,
          50.61845,
        ],
      },
      properties: {
        nom: `Baisieux`,
        libellecourt: 'BAI',
        segment_drg: 'C',
        codeinsee: '59044',
        codes_uic: '87286872',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3441977,
          49.2942448,
        ],
      },
      properties: {
        nom: `Balagny Saint-Épin`,
        libellecourt: 'BXE',
        segment_drg: 'C',
        codeinsee: '60044',
        codes_uic: '87313569',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.187443,
          45.817858,
        ],
      },
      properties: {
        nom: `Balbigny`,
        libellecourt: 'BBY',
        segment_drg: 'C',
        codeinsee: '42011',
        codes_uic: '87726869',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.6188975,
          47.3369919,
        ],
      },
      properties: {
        nom: `Ballan-Miré`,
        libellecourt: 'BME',
        segment_drg: 'C',
        codeinsee: '37018',
        codes_uic: '87571604',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.371274,
          48.532114,
        ],
      },
      properties: {
        nom: `Ballancourt-sur-Essonne`,
        libellecourt: 'BUR',
        segment_drg: 'B',
        codeinsee: '91045',
        codes_uic: '87681437',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4560976,
          44.4820108,
        ],
      },
      properties: {
        nom: `Balsièges`,
        libellecourt: 'BKB',
        segment_drg: 'C',
        codeinsee: '48016',
        codes_uic: '87111864',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1958518,
          44.4477632,
        ],
      },
      properties: {
        nom: `Banassac - La Canourgue`,
        libellecourt: 'BAA',
        segment_drg: 'C',
        codeinsee: '48017',
        codes_uic: '87783324',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.750118,
          43.140344,
        ],
      },
      properties: {
        nom: `Bandol`,
        libellecourt: 'BND',
        segment_drg: 'B',
        codeinsee: '83009',
        codes_uic: '87755223',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.7065268,
          47.9267473,
        ],
      },
      properties: {
        nom: `Bannalec`,
        libellecourt: 'BNC',
        segment_drg: 'C',
        codeinsee: '29004',
        codes_uic: '87474189',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.5038675,
          47.8109675,
        ],
      },
      properties: {
        nom: `Bantzenheim`,
        libellecourt: 'BTZ',
        segment_drg: 'C',
        codeinsee: '68020',
        codes_uic: '87182840',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1250496,
          42.4829582,
        ],
      },
      properties: {
        nom: `Banyuls-sur-Mer`,
        libellecourt: 'BAN',
        segment_drg: 'C',
        codeinsee: '66016',
        codes_uic: '87784298',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.166822,
          48.773308,
        ],
      },
      properties: {
        nom: `Bar-le-Duc`,
        libellecourt: 'BLD',
        segment_drg: 'B',
        codeinsee: '55029',
        codes_uic: '87175042',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7066708,
          48.2385399,
        ],
      },
      properties: {
        nom: `Bar-sur-Aube`,
        libellecourt: 'BRB',
        segment_drg: 'C',
        codeinsee: '10033',
        codes_uic: '87118299',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4275453,
          44.2704368,
        ],
      },
      properties: {
        nom: `Baraqueville Carcenac Peyralès`,
        libellecourt: 'BAQ',
        segment_drg: 'C',
        codeinsee: '12056',
        codes_uic: '87615757',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.953517,
          49.549123,
        ],
      },
      properties: {
        nom: `Barentin`,
        libellecourt: 'BTM',
        segment_drg: 'B',
        codeinsee: '76057',
        codes_uic: '87411264',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6559914,
          49.6307907,
        ],
      },
      properties: {
        nom: `Barenton-Bugny`,
        libellecourt: 'BJB',
        segment_drg: 'C',
        codeinsee: '02046',
        codes_uic: '87297291',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4109786,
          44.4992638,
        ],
      },
      properties: {
        nom: `Barjac`,
        libellecourt: 'BJC',
        segment_drg: 'C',
        codeinsee: '48018',
        codes_uic: '87783563',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.6997387,
          49.2845332,
        ],
      },
      properties: {
        nom: `Baroncourt`,
        libellecourt: 'BTS',
        segment_drg: 'C',
        codeinsee: '55158',
        codes_uic: '87192658',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.4565189,
          48.4032933,
        ],
      },
      properties: {
        nom: `Barr`,
        libellecourt: 'BAR',
        segment_drg: 'B',
        codeinsee: '67021',
        codes_uic: '87214247',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.3215775,
          44.6054306,
        ],
      },
      properties: {
        nom: `Barsac`,
        libellecourt: 'BSQ',
        segment_drg: 'C',
        codeinsee: '33030',
        codes_uic: '87582759',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.4872561,
          47.6349313,
        ],
      },
      properties: {
        nom: `Bartenheim`,
        libellecourt: 'BTK',
        segment_drg: 'C',
        codeinsee: '68021',
        codes_uic: '87182113',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.139602,
          45.297596,
        ],
      },
      properties: {
        nom: `Bas - Monistrol-sur-Loire`,
        libellecourt: 'BMO',
        segment_drg: 'C',
        codeinsee: '43020',
        codes_uic: '87726778',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8068494,
          47.6810089,
        ],
      },
      properties: {
        nom: `Bas Évette`,
        libellecourt: 'BEV',
        segment_drg: 'C',
        codeinsee: '90042',
        codes_uic: '87184200',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.681869,
          47.320184,
        ],
      },
      properties: {
        nom: `Base Aérienne`,
        libellecourt: 'BAE',
        segment_drg: 'C',
        codeinsee: '41194',
        codes_uic: '87699223',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2348709,
          49.3805708,
        ],
      },
      properties: {
        nom: `Basse-Ham`,
        libellecourt: 'BHD',
        segment_drg: 'C',
        codeinsee: '57287',
        codes_uic: '87191601',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5223144,
          44.9012933,
        ],
      },
      properties: {
        nom: `Bassens`,
        libellecourt: 'BAS',
        segment_drg: 'C',
        codeinsee: '33032',
        codes_uic: '87581850',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.4789866,
          47.2809541,
        ],
      },
      properties: {
        nom: `Batz-sur-Mer`,
        libellecourt: 'BSK',
        segment_drg: 'C',
        codeinsee: '44010',
        codes_uic: '87481770',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.668127,
          47.8117535,
        ],
      },
      properties: {
        nom: `Baule`,
        libellecourt: 'BLJ',
        segment_drg: 'C',
        codeinsee: '45024',
        codes_uic: '87574152',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.359603,
          47.353937,
        ],
      },
      properties: {
        nom: `Baume-les-Dames`,
        libellecourt: 'BDA',
        segment_drg: 'B',
        codeinsee: '25047',
        codes_uic: '87718460',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9054,
          50.51168,
        ],
      },
      properties: {
        nom: `Bauvin - Provin`,
        libellecourt: 'BVP',
        segment_drg: 'C',
        codeinsee: '59052',
        codes_uic: '87345280',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.0754439,
          48.5520296,
        ],
      },
      properties: {
        nom: `Bayard`,
        libellecourt: 'BYD',
        segment_drg: 'C',
        codeinsee: '52265',
        codes_uic: '87175133',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.698056,
          49.269836,
        ],
      },
      properties: {
        nom: `Bayeux`,
        libellecourt: 'BAY',
        segment_drg: 'B',
        codeinsee: '14047',
        codes_uic: '87444067',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.322569,
          48.468046,
        ],
      },
      properties: {
        nom: `Bayon`,
        libellecourt: 'BYN',
        segment_drg: 'B',
        codeinsee: '54585',
        codes_uic: '87141218',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.470306,
          43.496801,
        ],
      },
      properties: {
        nom: `Bayonne`,
        libellecourt: 'BYE',
        segment_drg: 'A',
        codeinsee: '64102',
        codes_uic: '87673004',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.173887,
          49.361202,
        ],
      },
      properties: {
        nom: `Bazancourt`,
        libellecourt: 'BZT',
        segment_drg: 'B',
        codeinsee: '51043',
        codes_uic: '87171462',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6205019,
          43.4535696,
        ],
      },
      properties: {
        nom: `Baziège`,
        libellecourt: 'BAZ',
        segment_drg: 'C',
        codeinsee: '31048',
        codes_uic: '87611723',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3179944,
          46.8652207,
        ],
      },
      properties: {
        nom: `Béard`,
        libellecourt: 'BVE',
        segment_drg: 'C',
        codeinsee: '58025',
        codes_uic: '87696468',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8983301,
          50.945371,
        ],
      },
      properties: {
        nom: `Beau Marais`,
        libellecourt: 'BMQ',
        segment_drg: 'C',
        codeinsee: '62193',
        codes_uic: '87317610',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.6470865,
          43.80209,
        ],
      },
      properties: {
        nom: `Beaucaire`,
        libellecourt: 'BCK',
        segment_drg: 'C',
        codeinsee: '30032',
        codes_uic: '87775023',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.625938,
          47.778365,
        ],
      },
      properties: {
        nom: `Beaugency`,
        libellecourt: 'BGY',
        segment_drg: 'B',
        codeinsee: '45028',
        codes_uic: '87574160',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.331545,
          43.706651,
        ],
      },
      properties: {
        nom: `Beaulieu-sur-Mer`,
        libellecourt: 'BUM',
        segment_drg: 'B',
        codeinsee: '06011',
        codes_uic: '87756379',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7727865,
          49.0741722,
        ],
      },
      properties: {
        nom: `Beaumont-le-Roger`,
        libellecourt: 'BLR',
        segment_drg: 'C',
        codeinsee: '27051',
        codes_uic: '87387183',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.848379,
          47.023053,
        ],
      },
      properties: {
        nom: `Beaune`,
        libellecourt: 'BEA',
        segment_drg: 'B',
        codeinsee: '21054',
        codes_uic: '87713545',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.895345,
          50.422891,
        ],
      },
      properties: {
        nom: `Beaurainville`,
        libellecourt: 'BIV',
        segment_drg: 'C',
        codeinsee: '62100',
        codes_uic: '87317198',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.45017,
          44.701041,
        ],
      },
      properties: {
        nom: `Beautiran`,
        libellecourt: 'BIR',
        segment_drg: 'B',
        codeinsee: '33037',
        codes_uic: '87582700',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.08869,
          49.42648,
        ],
      },
      properties: {
        nom: `Beauvais`,
        libellecourt: 'BVS',
        segment_drg: 'B',
        codeinsee: '60057',
        codes_uic: '87313510',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4687544,
          46.1768857,
        ],
      },
      properties: {
        nom: `Beauvoir-sur-Niort`,
        libellecourt: 'BVK',
        segment_drg: 'C',
        codeinsee: '79031',
        codes_uic: '87485342',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3212178,
          43.7245026,
        ],
      },
      properties: {
        nom: `Beauvoisin`,
        libellecourt: 'BVW',
        segment_drg: 'C',
        codeinsee: '30033',
        codes_uic: '87775809',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.26838,
          48.90592,
        ],
      },
      properties: {
        nom: `Bécon les Bruyères`,
        libellecourt: 'BEC',
        segment_drg: 'B',
        codeinsee: '92026',
        codes_uic: '87382002',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1495688,
          43.6086972,
        ],
      },
      properties: {
        nom: `Bédarieux`,
        libellecourt: 'BED',
        segment_drg: 'C',
        codeinsee: '34028',
        codes_uic: '87781609',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8931321,
          44.0407636,
        ],
      },
      properties: {
        nom: `Bédarrides`,
        libellecourt: 'BDR',
        segment_drg: 'C',
        codeinsee: '84016',
        codes_uic: '87765198',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.60348,
          42.99589,
        ],
      },
      properties: {
        nom: `Bedous`,
        libellecourt: 'GGM',
        segment_drg: 'C',
        codeinsee: '64104',
        codes_uic: '87672774',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5552495,
          44.7995389,
        ],
      },
      properties: {
        nom: `Bègles`,
        libellecourt: 'BGL',
        segment_drg: 'C',
        codeinsee: '33039',
        codes_uic: '87581801',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5265079,
          45.7007999,
        ],
      },
      properties: {
        nom: `Beillant`,
        libellecourt: 'BIL',
        segment_drg: 'C',
        codeinsee: '17400',
        codes_uic: '87491076',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.853956,
          47.633284,
        ],
      },
      properties: {
        nom: `Belfort`,
        libellecourt: 'BFT',
        segment_drg: 'B',
        codeinsee: '90010',
        codes_uic: '87184002',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.897687,
          47.585937,
        ],
      },
      properties: {
        nom: `Belfort - Montbéliard TGV`,
        libellecourt: 'BFB',
        segment_drg: 'A',
        codeinsee: '90068',
        codes_uic: '87300822',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0461168,
          46.1252044,
        ],
      },
      properties: {
        nom: `Bellac`,
        libellecourt: 'BLL',
        segment_drg: 'C',
        codeinsee: '87011',
        codes_uic: '87592485',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.3228532,
          48.5935901,
        ],
      },
      properties: {
        nom: `Belle-Isle - Bégard`,
        libellecourt: 'BIB',
        segment_drg: 'C',
        codeinsee: '22135',
        codes_uic: '87473165',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.823483,
          46.109425,
        ],
      },
      properties: {
        nom: `Bellegarde-sur-Valserine`,
        libellecourt: 'BGD',
        segment_drg: 'A',
        codeinsee: '01033',
        codes_uic: '87745000',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0665239,
          46.199256,
        ],
      },
      properties: {
        nom: `Bellenaves`,
        libellecourt: 'BLE',
        segment_drg: 'C',
        codeinsee: '03022',
        codes_uic: '87641068',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.4346673,
          46.788316,
        ],
      },
      properties: {
        nom: `Bellevigny`,
        libellecourt: 'BVD',
        segment_drg: 'C',
        codeinsee: '85019',
        codes_uic: '87486142',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1018641,
          48.8195721,
        ],
      },
      properties: {
        nom: `Belleville`,
        libellecourt: 'BEE',
        segment_drg: 'C',
        codeinsee: '54060',
        codes_uic: '87141804',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.729028,
          46.111917,
        ],
      },
      properties: {
        nom: `Belleville sur Sâone`,
        libellecourt: 'BVL',
        segment_drg: 'B',
        codeinsee: '69019',
        codes_uic: '87721357',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2296743,
          48.8190033,
        ],
      },
      properties: {
        nom: `Bellevue`,
        libellecourt: 'BLU',
        segment_drg: 'B',
        codeinsee: '92048',
        codes_uic: '87393116',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.6298849,
          46.2381265,
        ],
      },
      properties: {
        nom: `Bellignat`,
        libellecourt: 'BNI',
        segment_drg: 'C',
        codeinsee: '01031',
        codes_uic: '87743526',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.36135,
          49.09807,
        ],
      },
      properties: {
        nom: `Belloy - Saint-Martin`,
        libellecourt: 'BSW',
        segment_drg: 'B',
        codeinsee: '95056',
        codes_uic: '87276550',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0118831,
          44.7773978,
        ],
      },
      properties: {
        nom: `Belvès`,
        libellecourt: 'BES',
        segment_drg: 'C',
        codeinsee: '24035',
        codes_uic: '87595876',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.7518919,
          44.5617971,
        ],
      },
      properties: {
        nom: `Belvezet`,
        libellecourt: 'BVZ',
        segment_drg: 'C',
        codeinsee: '48023',
        codes_uic: '87783670',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.0721919,
          47.652466,
        ],
      },
      properties: {
        nom: `Belz - Ploemel`,
        libellecourt: 'BZP',
        segment_drg: 'C',
        codeinsee: '56161',
        codes_uic: '87476408',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9167264,
          42.4580782,
        ],
      },
      properties: {
        nom: `Bena Fanes`,
        libellecourt: 'BFA',
        segment_drg: 'C',
        codeinsee: '66066',
        codes_uic: '87784892',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3698505,
          43.6277484,
        ],
      },
      properties: {
        nom: `Bénesse-Maremne`,
        libellecourt: 'BMX',
        segment_drg: 'C',
        codeinsee: '40036',
        codes_uic: '87673285',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.75266,
          48.90656,
        ],
      },
      properties: {
        nom: `Bénestroff`,
        libellecourt: 'BEN',
        segment_drg: 'C',
        codeinsee: '57060',
        codes_uic: '87192302',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.584125,
          48.3735367,
        ],
      },
      properties: {
        nom: `Benfeld`,
        libellecourt: 'BFD',
        segment_drg: 'B',
        codeinsee: '67028',
        codes_uic: '87214122',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7492361,
          47.0004698,
        ],
      },
      properties: {
        nom: `Bengy-sur-Craon`,
        libellecourt: 'BNH',
        segment_drg: 'C',
        codeinsee: '18027',
        codes_uic: '87576447',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8282982,
          49.1379541,
        ],
      },
      properties: {
        nom: `Béning-lès-Saint-Avold`,
        libellecourt: 'BNG',
        segment_drg: 'C',
        codeinsee: '57061',
        codes_uic: '87193250',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.489174,
          44.857061,
        ],
      },
      properties: {
        nom: `Bergerac`,
        libellecourt: 'BGC',
        segment_drg: 'B',
        codeinsee: '24037',
        codes_uic: '87584268',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.42574,
          50.96901,
        ],
      },
      properties: {
        nom: `Bergues`,
        libellecourt: 'BEG',
        segment_drg: 'B',
        codeinsee: '59067',
        codes_uic: '87281105',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.8105316,
          50.1980095,
        ],
      },
      properties: {
        nom: `Berlaimont`,
        libellecourt: 'BER',
        segment_drg: 'C',
        codeinsee: '59068',
        codes_uic: '87295808',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.595634,
          49.087102,
        ],
      },
      properties: {
        nom: `Bernay`,
        libellecourt: 'BEY',
        segment_drg: 'B',
        codeinsee: '27056',
        codes_uic: '87444299',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4321682,
          46.0837459,
        ],
      },
      properties: {
        nom: `Bersac-sur-Rivalier`,
        libellecourt: 'BHA',
        segment_drg: 'C',
        codeinsee: '87013',
        codes_uic: '87592352',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0087859,
          48.8096475,
        ],
      },
      properties: {
        nom: `Berthelming`,
        libellecourt: 'BHN',
        segment_drg: 'C',
        codeinsee: '57066',
        codes_uic: '87215335',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.7912343,
          48.4283359,
        ],
      },
      properties: {
        nom: `Bertrichamps`,
        libellecourt: 'BHZ',
        segment_drg: 'C',
        codeinsee: '54065',
        codes_uic: '87141424',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4489955,
          50.0911265,
        ],
      },
      properties: {
        nom: `Bertry`,
        libellecourt: 'BTD',
        segment_drg: 'C',
        codeinsee: '59074',
        codes_uic: '87345553',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.953195095062256,
          47.307361058531725,
        ],
      },
      properties: {
        nom: `Besançon Franche-Comté TGV`,
        libellecourt: 'BFC',
        segment_drg: 'A',
        codeinsee: '25035',
        codes_uic: '87300863',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.03391,
          47.240372,
        ],
      },
      properties: {
        nom: `Besançon Mouillère`,
        libellecourt: 'BNM',
        segment_drg: 'C',
        codeinsee: '25056',
        codes_uic: '87718015',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.022003,
          47.247019,
        ],
      },
      properties: {
        nom: `Besançon Viotte`,
        libellecourt: 'BNV',
        segment_drg: 'A',
        codeinsee: '25056',
        codes_uic: '87718007',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.8706374,
          47.6988788,
        ],
      },
      properties: {
        nom: `Beslé`,
        libellecourt: 'BIQ',
        segment_drg: 'C',
        codeinsee: '44067',
        codes_uic: '87471219',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.21004,
          49.03576,
        ],
      },
      properties: {
        nom: `Bessancourt`,
        libellecourt: 'BSR',
        segment_drg: 'B',
        codeinsee: '95060',
        codes_uic: '87276642',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3606477,
          46.4435849,
        ],
      },
      properties: {
        nom: `Bessay-sur-Allier`,
        libellecourt: 'BSS',
        segment_drg: 'C',
        codeinsee: '03025',
        codes_uic: '87696336',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7344108,
          44.9424281,
        ],
      },
      properties: {
        nom: `Bétaille`,
        libellecourt: 'BIK',
        segment_drg: 'C',
        codeinsee: '46028',
        codes_uic: '87594747',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.64055,
          50.52144,
        ],
      },
      properties: {
        nom: `Béthune`,
        libellecourt: 'BET',
        segment_drg: 'B',
        codeinsee: '62119',
        codes_uic: '87342006',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.6344745,
          48.1814803,
        ],
      },
      properties: {
        nom: `Betton`,
        libellecourt: 'BTN',
        segment_drg: 'C',
        codeinsee: '35024',
        codes_uic: '87471045',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.5061396,
          50.3894892,
        ],
      },
      properties: {
        nom: `Beuvrages`,
        libellecourt: 'BUS',
        segment_drg: 'C',
        codeinsee: '59079',
        codes_uic: '87343160',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6924093,
          50.5356021,
        ],
      },
      properties: {
        nom: `Beuvry lès Béthune`,
        libellecourt: 'BVR',
        segment_drg: 'C',
        codeinsee: '62126',
        codes_uic: '87342402',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8755696,
          48.8593599,
        ],
      },
      properties: {
        nom: `Beynes`,
        libellecourt: 'BYS',
        segment_drg: 'B',
        codeinsee: '78062',
        codes_uic: '87393363',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.006969,
          45.833915,
        ],
      },
      properties: {
        nom: `Beynost`,
        libellecourt: 'BNO',
        segment_drg: 'B',
        codeinsee: '01043',
        codes_uic: '87723544',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.218873,
          43.33633,
        ],
      },
      properties: {
        nom: `Béziers`,
        libellecourt: 'BZS',
        segment_drg: 'A',
        codeinsee: '34032',
        codes_uic: '87781005',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9414975,
          50.3162525,
        ],
      },
      properties: {
        nom: `Biache-Saint-Vaast`,
        libellecourt: 'BIA',
        segment_drg: 'C',
        codeinsee: '62128',
        codes_uic: '87342097',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.545915,
          43.459397,
        ],
      },
      properties: {
        nom: `Biarritz`,
        libellecourt: 'BIZ',
        segment_drg: 'A',
        codeinsee: '64122',
        codes_uic: '87673400',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.37684,
          48.82984,
        ],
      },
      properties: {
        nom: `Bibliothèque François Mitterrand`,
        libellecourt: 'BFM',
        segment_drg: 'B',
        codeinsee: '75113',
        codes_uic: '87328328',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3453233,
          43.2682991,
        ],
      },
      properties: {
        nom: `Bidarray Pont Noblia`,
        libellecourt: 'PBJ',
        segment_drg: 'C',
        codeinsee: '64124',
        codes_uic: '87673699',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6069,
          43.17892,
        ],
      },
      properties: {
        nom: `Bidos`,
        libellecourt: 'EON',
        segment_drg: 'C',
        codeinsee: '64126',
        codes_uic: '87691949',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2157279,
          48.7513289,
        ],
      },
      properties: {
        nom: `Bièvres`,
        libellecourt: 'BSI',
        segment_drg: 'B',
        codeinsee: '91064',
        codes_uic: '87393546',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8071811,
          48.2059398,
        ],
      },
      properties: {
        nom: `Biffontaine`,
        libellecourt: 'BFF',
        segment_drg: 'C',
        codeinsee: '88059',
        codes_uic: '87144188',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.96621,
          44.637384,
        ],
      },
      properties: {
        nom: `Biganos Facture`,
        libellecourt: 'FAT',
        segment_drg: 'B',
        codeinsee: '33051',
        codes_uic: '87582478',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.368638,
          46.8015763,
        ],
      },
      properties: {
        nom: `Bigny`,
        libellecourt: 'BIG',
        segment_drg: 'C',
        codeinsee: '18270',
        codes_uic: '87576306',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.91206,
          50.41556,
        ],
      },
      properties: {
        nom: `Billy-Montigny`,
        libellecourt: 'BYM',
        segment_drg: 'B',
        codeinsee: '62133',
        codes_uic: '87345140',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.12609,
          43.610951,
        ],
      },
      properties: {
        nom: `Biot`,
        libellecourt: 'BJO',
        segment_drg: 'B',
        codeinsee: '06004',
        codes_uic: '87757690',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.7422165,
          48.6118352,
        ],
      },
      properties: {
        nom: `Bischheim`,
        libellecourt: 'BHM',
        segment_drg: 'C',
        codeinsee: '67043',
        codes_uic: '87212308',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.49772,
          48.48701,
        ],
      },
      properties: {
        nom: `Bischoffsheim`,
        libellecourt: 'BFH',
        segment_drg: 'C',
        codeinsee: '67045',
        codes_uic: '87214296',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.8516536,
          48.765753,
        ],
      },
      properties: {
        nom: `Bischwiller`,
        libellecourt: 'BHW',
        segment_drg: 'B',
        codeinsee: '67046',
        codes_uic: '87213611',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.078514,
          47.8273719,
        ],
      },
      properties: {
        nom: `Bitschwiller-lès-Thann`,
        libellecourt: 'BWP',
        segment_drg: 'C',
        codeinsee: '68040',
        codes_uic: '87182576',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.386953,
          48.564971,
        ],
      },
      properties: {
        nom: `Blainville - Damelevières`,
        libellecourt: 'BLV',
        segment_drg: 'B',
        codeinsee: '54152',
        codes_uic: '87141135',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7410755,
          47.3734427,
        ],
      },
      properties: {
        nom: `Blaisy-Bas`,
        libellecourt: 'BSB',
        segment_drg: 'C',
        codeinsee: '21080',
        codes_uic: '87713073',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6259074,
          49.9326071,
        ],
      },
      properties: {
        nom: `Blangy-sur-Bresle`,
        libellecourt: 'BBM',
        segment_drg: 'C',
        codeinsee: '76101',
        codes_uic: '87313809',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1721585,
          50.424669,
        ],
      },
      properties: {
        nom: `Blangy-sur-Ternoise`,
        libellecourt: 'BIP',
        segment_drg: 'C',
        codeinsee: '62138',
        codes_uic: '87317248',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.62392,
          44.917556,
        ],
      },
      properties: {
        nom: `Blanquefort`,
        libellecourt: 'BQF',
        segment_drg: 'B',
        codeinsee: '33056',
        codes_uic: '87581728',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3913585,
          46.694064,
        ],
      },
      properties: {
        nom: `Blanzy`,
        libellecourt: 'BYK',
        segment_drg: 'C',
        codeinsee: '71040',
        codes_uic: '87694612',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9877583,
          47.3377228,
        ],
      },
      properties: {
        nom: `Bléré - La Croix`,
        libellecourt: 'BCX',
        segment_drg: 'B',
        codeinsee: '37091',
        codes_uic: '87574475',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.323823,
          47.585445,
        ],
      },
      properties: {
        nom: `Blois - Chambord`,
        libellecourt: 'BLO',
        segment_drg: 'B',
        codeinsee: '41018',
        codes_uic: '87574004',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.0356856,
          49.3313919,
        ],
      },
      properties: {
        nom: `Blonville-sur-Mer - Benerville`,
        libellecourt: 'BWB',
        segment_drg: 'C',
        codeinsee: '14079',
        codes_uic: '87444380',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0051544,
          45.7413612,
        ],
      },
      properties: {
        nom: `Boën-sur-Lignon`,
        libellecourt: 'BOE',
        segment_drg: 'C',
        codeinsee: '42019',
        codes_uic: '87726471',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7632317,
          49.8583117,
        ],
      },
      properties: {
        nom: `Bogny-sur-Meuse`,
        libellecourt: 'BYU',
        segment_drg: 'C',
        codeinsee: '08081',
        codes_uic: '87172049',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4431289,
          49.9884143,
        ],
      },
      properties: {
        nom: `Bohain-en-Vermandois`,
        libellecourt: 'BHI',
        segment_drg: 'B',
        codeinsee: '02095',
        codes_uic: '87296269',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3789793,
          48.342078,
        ],
      },
      properties: {
        nom: `Boigneville`,
        libellecourt: 'BWI',
        segment_drg: 'C',
        codeinsee: '91069',
        codes_uic: '87684407',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.27256,
          48.91348,
        ],
      },
      properties: {
        nom: `Bois-Colombes`,
        libellecourt: 'BCO',
        segment_drg: 'B',
        codeinsee: '92009',
        codes_uic: '87381079',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.575043,
          45.9065839,
        ],
      },
      properties: {
        nom: `Bois-d'Oingt - Légny`,
        libellecourt: 'BDO',
        segment_drg: 'C',
        codeinsee: '69111',
        codes_uic: '87721787',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.691606,
          48.475567,
        ],
      },
      properties: {
        nom: `Bois-le-Roi`,
        libellecourt: 'BJR',
        segment_drg: 'B',
        codeinsee: '77037',
        codes_uic: '87682203',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.771855,
          50.2104665,
        ],
      },
      properties: {
        nom: `Boisleux-au-Mont`,
        libellecourt: 'BLX',
        segment_drg: 'C',
        codeinsee: '62151',
        codes_uic: '87342071',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9727681,
          48.2566238,
        ],
      },
      properties: {
        nom: `Boisseaux`,
        libellecourt: 'BAX',
        segment_drg: 'C',
        codeinsee: '45037',
        codes_uic: '87543082',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2497669,
          44.786038,
        ],
      },
      properties: {
        nom: `Boisset`,
        libellecourt: 'BCL',
        segment_drg: 'C',
        codeinsee: '15021',
        codes_uic: '87645184',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.572953,
          48.529319,
        ],
      },
      properties: {
        nom: `Boissise-le-Roi`,
        libellecourt: 'BKR',
        segment_drg: 'C',
        codeinsee: '77040',
        codes_uic: '87682518',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.02513,
          49.07598,
        ],
      },
      properties: {
        nom: `Boissy-l'Aillerie`,
        libellecourt: 'BLA',
        segment_drg: 'B',
        codeinsee: '95078',
        codes_uic: '87381152',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.707908,
          44.271525,
        ],
      },
      properties: {
        nom: `Bollène La Croisière`,
        libellecourt: 'BLN',
        segment_drg: 'B',
        codeinsee: '84019',
        codes_uic: '87764357',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2672555,
          47.8569694,
        ],
      },
      properties: {
        nom: `Bollwiller`,
        libellecourt: 'BOW',
        segment_drg: 'B',
        codeinsee: '68043',
        codes_uic: '87182709',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1342228,
          48.1986877,
        ],
      },
      properties: {
        nom: `Bologne`,
        libellecourt: 'BOG',
        segment_drg: 'C',
        codeinsee: '52058',
        codes_uic: '87142224',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0875591,
          42.4978734,
        ],
      },
      properties: {
        nom: `Bolquère - Eyne`,
        libellecourt: 'BQE',
        segment_drg: 'C',
        codeinsee: '66020',
        codes_uic: '87784801',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4786,
          48.894208,
        ],
      },
      properties: {
        nom: `Bondy`,
        libellecourt: 'BDY',
        segment_drg: 'B',
        codeinsee: '93010',
        codes_uic: '87113407',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.7654125,
          48.4764049,
        ],
      },
      properties: {
        nom: `Bonnemain`,
        libellecourt: 'BMV',
        segment_drg: 'C',
        codeinsee: '35029',
        codes_uic: '87478065',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3861845,
          48.1862958,
        ],
      },
      properties: {
        nom: `Bonneval`,
        libellecourt: 'BOJ',
        segment_drg: 'C',
        codeinsee: '28051',
        codes_uic: '87545731',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.416524,
          46.077772,
        ],
      },
      properties: {
        nom: `Bonneville`,
        libellecourt: 'BON',
        segment_drg: 'B',
        codeinsee: '74042',
        codes_uic: '87746339',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.582205,
          49.038788,
        ],
      },
      properties: {
        nom: `Bonnières-sur-Seine`,
        libellecourt: 'BNR',
        segment_drg: 'B',
        codeinsee: '78089',
        codes_uic: '87415893',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.366246,
          46.270046,
        ],
      },
      properties: {
        nom: `Bons-en-Chablais`,
        libellecourt: 'BAB',
        segment_drg: 'B',
        codeinsee: '74043',
        codes_uic: '87745596',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2163084,
          45.5221941,
        ],
      },
      properties: {
        nom: `Bonson`,
        libellecourt: 'BSN',
        segment_drg: 'C',
        codeinsee: '42022',
        codes_uic: '87726414',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.362537,
          49.1671348,
        ],
      },
      properties: {
        nom: `Boran-sur-Oise`,
        libellecourt: 'BRN',
        segment_drg: 'C',
        codeinsee: '60086',
        codes_uic: '87276444',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.556697,
          44.825873,
        ],
      },
      properties: {
        nom: `Bordeaux Saint-Jean`,
        libellecourt: 'BXJ',
        segment_drg: 'A',
        codeinsee: '33063',
        codes_uic: '87581009',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.7985436,
          45.8944625,
        ],
      },
      properties: {
        nom: `Bords`,
        libellecourt: 'BOR',
        segment_drg: 'C',
        codeinsee: '17053',
        codes_uic: '87491019',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.20717,
          49.19471,
        ],
      },
      properties: {
        nom: `Bornel - Belle-Église`,
        libellecourt: 'BBI',
        segment_drg: 'B',
        codeinsee: '60088',
        codes_uic: '87276717',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.6810992,
          47.1380806,
        ],
      },
      properties: {
        nom: `Bouaye`,
        libellecourt: 'BLQ',
        segment_drg: 'C',
        codeinsee: '44018',
        codes_uic: '87481200',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.4905872,
          43.5234217,
        ],
      },
      properties: {
        nom: `Boucau`,
        libellecourt: 'BUU',
        segment_drg: 'C',
        codeinsee: '64140',
        codes_uic: '87673095',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3319096,
          50.2780892,
        ],
      },
      properties: {
        nom: `Bouchain`,
        libellecourt: 'BAK',
        segment_drg: 'C',
        codeinsee: '59092',
        codes_uic: '87345389',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.187634,
          43.9926943,
        ],
      },
      properties: {
        nom: `Boucoiran-et-Nozières`,
        libellecourt: 'BKW',
        segment_drg: 'C',
        codeinsee: '30046',
        codes_uic: '87775346',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.32272,
          49.04514,
        ],
      },
      properties: {
        nom: `Bouffémont - Moisselles`,
        libellecourt: 'BOF',
        segment_drg: 'B',
        codeinsee: '95091',
        codes_uic: '87276485',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1323749,
          48.8542135,
        ],
      },
      properties: {
        nom: `Bougival`,
        libellecourt: 'BGV',
        segment_drg: 'B',
        codeinsee: '78126',
        codes_uic: '87382440',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.275149,
          48.85645,
        ],
      },
      properties: {
        nom: `Boulainvilliers`,
        libellecourt: 'BWR',
        segment_drg: 'B',
        codeinsee: '75116',
        codes_uic: '87543181',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.772645,
          45.172291,
        ],
      },
      properties: {
        nom: `Boulazac`,
        libellecourt: 'BZC',
        segment_drg: 'C',
        codeinsee: '24053',
        codes_uic: '87725473',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.60904,
          50.72729,
        ],
      },
      properties: {
        nom: `Boulogne Tintelleries`,
        libellecourt: 'BKI',
        segment_drg: 'B',
        codeinsee: '62160',
        codes_uic: '87317016',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.60964,
          50.7157,
        ],
      },
      properties: {
        nom: `Boulogne-sur-Mer`,
        libellecourt: 'BEM',
        segment_drg: 'B',
        codeinsee: '62160',
        codes_uic: '87317586',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8082519,
          43.4163471,
        ],
      },
      properties: {
        nom: `Boulouris sur Mer`,
        libellecourt: 'BOU',
        segment_drg: 'C',
        codeinsee: '83118',
        codes_uic: '87757534',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.290596,
          48.533149,
        ],
      },
      properties: {
        nom: `Bouray`,
        libellecourt: 'BSO',
        segment_drg: 'B',
        codeinsee: '91330',
        codes_uic: '87545178',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1942305,
          50.952267,
        ],
      },
      properties: {
        nom: `Bourbourg`,
        libellecourt: 'BBU',
        segment_drg: 'C',
        codeinsee: '59094',
        codes_uic: '87281279',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1371919,
          48.3598566,
        ],
      },
      properties: {
        nom: `Bourg-Bruche`,
        libellecourt: 'BFZ',
        segment_drg: 'C',
        codeinsee: '67059',
        codes_uic: '87214775',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.215063,
          46.200351,
        ],
      },
      properties: {
        nom: `Bourg-en-Bresse`,
        libellecourt: 'BGB',
        segment_drg: 'B',
        codeinsee: '01053',
        codes_uic: '87743005',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9486704,
          42.4324069,
        ],
      },
      properties: {
        nom: `Bourg-Madame`,
        libellecourt: 'BMD',
        segment_drg: 'C',
        codeinsee: '66025',
        codes_uic: '87784876',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.771273,
          45.619036,
        ],
      },
      properties: {
        nom: `Bourg-Saint-Maurice`,
        libellecourt: 'BSM',
        segment_drg: 'B',
        codeinsee: '73054',
        codes_uic: '87741793',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.394255,
          47.094145,
        ],
      },
      properties: {
        nom: `Bourges`,
        libellecourt: 'BGS',
        segment_drg: 'B',
        codeinsee: '18033',
        codes_uic: '87576207',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.9551942,
          47.0469634,
        ],
      },
      properties: {
        nom: `Bourgneuf-en-Retz`,
        libellecourt: 'BGZ',
        segment_drg: 'C',
        codeinsee: '44021',
        codes_uic: '87481242',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.273401,
          45.583954,
        ],
      },
      properties: {
        nom: `Bourgoin-Jallieu`,
        libellecourt: 'BRG',
        segment_drg: 'B',
        codeinsee: '38053',
        codes_uic: '87723429',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8383198,
          49.3174381,
        ],
      },
      properties: {
        nom: `Bourgtheroulde - Thuit-Hébert`,
        libellecourt: 'BGT',
        segment_drg: 'C',
        codeinsee: '27637',
        codes_uic: '87415323',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.1806169,
          46.6518258,
        ],
      },
      properties: {
        nom: `Bournezeau`,
        libellecourt: 'BNZ',
        segment_drg: 'C',
        codeinsee: '85034',
        codes_uic: '87486324',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6924552,
          48.3326884,
        ],
      },
      properties: {
        nom: `Bourron-Marlotte - Grez`,
        libellecourt: 'BOM',
        segment_drg: 'B',
        codeinsee: '77048',
        codes_uic: '87684118',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.1828046,
          47.0505741,
        ],
      },
      properties: {
        nom: `Boussay - La Bruffière`,
        libellecourt: 'BBF',
        segment_drg: 'C',
        codeinsee: '44022',
        codes_uic: '87481176',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.972543,
          43.179617,
        ],
      },
      properties: {
        nom: `Boussens`,
        libellecourt: 'BQY',
        segment_drg: 'B',
        codeinsee: '31084',
        codes_uic: '87611095',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.532726,
          48.680893,
        ],
      },
      properties: {
        nom: `Boussy-Saint-Antoine`,
        libellecourt: 'BXI',
        segment_drg: 'B',
        codeinsee: '91097',
        codes_uic: '87682138',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2777187,
          45.5246289,
        ],
      },
      properties: {
        nom: `Bouthéon`,
        libellecourt: 'BOH',
        segment_drg: 'C',
        codeinsee: '42005',
        codes_uic: '87726216',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.37636,
          48.43495,
        ],
      },
      properties: {
        nom: `Boutigny-sur-Essonne`,
        libellecourt: 'BJN',
        segment_drg: 'B',
        codeinsee: '91099',
        codes_uic: '87681478',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.5293736,
          49.2899739,
        ],
      },
      properties: {
        nom: `Bouzonville`,
        libellecourt: 'BZV',
        segment_drg: 'C',
        codeinsee: '57106',
        codes_uic: '87193177',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3981165,
          49.8462355,
        ],
      },
      properties: {
        nom: `Boves`,
        libellecourt: 'BOV',
        segment_drg: 'C',
        codeinsee: '80131',
        codes_uic: '87313213',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1191467,
          43.2441014,
        ],
      },
      properties: {
        nom: `Bram`,
        libellecourt: 'BRA',
        segment_drg: 'C',
        codeinsee: '11049',
        codes_uic: '87615054',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.1940402,
          47.7823179,
        ],
      },
      properties: {
        nom: `Brandérion`,
        libellecourt: 'BPZ',
        segment_drg: 'C',
        codeinsee: '56021',
        codes_uic: '87476242',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.330167,
          45.414246,
        ],
      },
      properties: {
        nom: `Brassac-les-Mines - Sainte-Florine`,
        libellecourt: 'BLM',
        segment_drg: 'C',
        codeinsee: '63050',
        codes_uic: '87734244',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.236922,
          43.614887,
        ],
      },
      properties: {
        nom: `Brax - Léguevin`,
        libellecourt: 'BXL',
        segment_drg: 'B',
        codeinsee: '31088',
        codes_uic: '87611822',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.2121276,
          47.1314549,
        ],
      },
      properties: {
        nom: `Brazey-en-Plaine`,
        libellecourt: 'BEP',
        segment_drg: 'C',
        codeinsee: '21103',
        codes_uic: '87713644',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.417489,
          49.603396,
        ],
      },
      properties: {
        nom: `Bréauté - Beuzeville`,
        libellecourt: 'BTB',
        segment_drg: 'B',
        codeinsee: '76141',
        codes_uic: '87413344',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0142,
          50.33624,
        ],
      },
      properties: {
        nom: `Brebières`,
        libellecourt: 'BSU',
        segment_drg: 'C',
        codeinsee: '62173',
        codes_uic: '87345108',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.5163276,
          43.944039,
        ],
      },
      properties: {
        nom: `Breil-sur-Roya`,
        libellecourt: 'BRE',
        segment_drg: 'C',
        codeinsee: '06023',
        codes_uic: '87756833',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1040522,
          48.0285326,
        ],
      },
      properties: {
        nom: `Breitenbach`,
        libellecourt: 'BHH',
        segment_drg: 'C',
        codeinsee: '68051',
        codes_uic: '87182659',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.196269,
          48.669204,
        ],
      },
      properties: {
        nom: `Brélidy - Plouëc`,
        libellecourt: 'BYP',
        segment_drg: 'C',
        codeinsee: '22212',
        codes_uic: '87473827',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4963269,
          46.8384462,
        ],
      },
      properties: {
        nom: `Bressuire`,
        libellecourt: 'BRS',
        segment_drg: 'C',
        codeinsee: '79049',
        codes_uic: '87487249',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -4.478903,
          48.38811,
        ],
      },
      properties: {
        nom: `Brest`,
        libellecourt: 'BRT',
        segment_drg: 'A',
        codeinsee: '29019',
        codes_uic: '87474007',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.8972095,
          48.1405713,
        ],
      },
      properties: {
        nom: `Breteil`,
        libellecourt: 'BTU',
        segment_drg: 'C',
        codeinsee: '35040',
        codes_uic: '87471102',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8436871,
          44.9273692,
        ],
      },
      properties: {
        nom: `Bretenoux - Biars`,
        libellecourt: 'BXB',
        segment_drg: 'C',
        codeinsee: '46029',
        codes_uic: '87594762',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3845164,
          49.626389,
        ],
      },
      properties: {
        nom: `Breteuil`,
        libellecourt: 'BEB',
        segment_drg: 'C',
        codeinsee: '60039',
        codes_uic: '87313247',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1105838,
          47.390044,
        ],
      },
      properties: {
        nom: `Bretigny - Norges`,
        libellecourt: 'BTQ',
        segment_drg: 'C',
        codeinsee: '21107',
        codes_uic: '87712265',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.302378,
          48.606683,
        ],
      },
      properties: {
        nom: `Brétigny-sur-Orge`,
        libellecourt: 'BYR',
        segment_drg: 'B',
        codeinsee: '91103',
        codes_uic: '87545194',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8923825,
          48.4326737,
        ],
      },
      properties: {
        nom: `Bretoncelles`,
        libellecourt: 'BTO',
        segment_drg: 'C',
        codeinsee: '61061',
        codes_uic: '87394270',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5127396,
          49.2034112,
        ],
      },
      properties: {
        nom: `Bretteville - Norrey`,
        libellecourt: 'BVO',
        segment_drg: 'C',
        codeinsee: '14098',
        codes_uic: '87444042',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.7665322,
          49.3084141,
        ],
      },
      properties: {
        nom: `Breuil - Romain`,
        libellecourt: 'BPR',
        segment_drg: 'C',
        codeinsee: '51086',
        codes_uic: '87171322',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.191721,
          48.577228,
        ],
      },
      properties: {
        nom: `Breuillet - Bruyères-le-Châtel`,
        libellecourt: 'BIH',
        segment_drg: 'B',
        codeinsee: '91105',
        codes_uic: '87545483',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.171207,
          48.564776,
        ],
      },
      properties: {
        nom: `Breuillet Village`,
        libellecourt: 'BRW',
        segment_drg: 'B',
        codeinsee: '91105',
        codes_uic: '87545491',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.54191,
          48.94336,
        ],
      },
      properties: {
        nom: `Bréval`,
        libellecourt: 'BVA',
        segment_drg: 'B',
        codeinsee: '78107',
        codes_uic: '87381624',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.633007,
          44.889853,
        ],
      },
      properties: {
        nom: `Briançon`,
        libellecourt: 'BRI',
        segment_drg: 'B',
        codeinsee: '05023',
        codes_uic: '87763607',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7337154,
          47.6464312,
        ],
      },
      properties: {
        nom: `Briare`,
        libellecourt: 'BEW',
        segment_drg: 'C',
        codeinsee: '45053',
        codes_uic: '87696088',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4406315,
          45.8635812,
        ],
      },
      properties: {
        nom: `Brignac`,
        libellecourt: 'BKX',
        segment_drg: 'C',
        codeinsee: '87129',
        codes_uic: '87592063',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7636596,
          45.6737721,
        ],
      },
      properties: {
        nom: `Brignais`,
        libellecourt: 'BGN',
        segment_drg: 'B',
        codeinsee: '69027',
        codes_uic: '87722728',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.901472,
          45.26245,
        ],
      },
      properties: {
        nom: `Brignoud`,
        libellecourt: 'BNU',
        segment_drg: 'B',
        codeinsee: '38547',
        codes_uic: '87747451',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8313826,
          50.4470409,
        ],
      },
      properties: {
        nom: `Brimeux`,
        libellecourt: 'BWM',
        segment_drg: 'C',
        codeinsee: '62177',
        codes_uic: '87317180',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2069898,
          46.9085776,
        ],
      },
      properties: {
        nom: `Brion - Laizy`,
        libellecourt: 'BUJ',
        segment_drg: 'C',
        codeinsee: '71251',
        codes_uic: '87694596',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.5585203,
          46.1757013,
        ],
      },
      properties: {
        nom: `Brion - Montréal-la-Cluse`,
        libellecourt: 'BMC',
        segment_drg: 'C',
        codeinsee: '01063',
        codes_uic: '87131961',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7115304,
          49.1964187,
        ],
      },
      properties: {
        nom: `Brionne`,
        libellecourt: 'BEU',
        segment_drg: 'C',
        codeinsee: '27116',
        codes_uic: '87415364',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3786344,
          45.3006493,
        ],
      },
      properties: {
        nom: `Brioude`,
        libellecourt: 'BRD',
        segment_drg: 'C',
        codeinsee: '43040',
        codes_uic: '87734269',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.3682036,
          48.7018622,
        ],
      },
      properties: {
        nom: `Briouze`,
        libellecourt: 'BZN',
        segment_drg: 'C',
        codeinsee: '61063',
        codes_uic: '87448084',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.528655,
          45.152618,
        ],
      },
      properties: {
        nom: `Brive-la-Gaillarde`,
        libellecourt: 'BLG',
        segment_drg: 'A',
        codeinsee: '19031',
        codes_uic: '87594002',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.2356578,
          48.3332957,
        ],
      },
      properties: {
        nom: `Broons`,
        libellecourt: 'BOS',
        segment_drg: 'C',
        codeinsee: '22020',
        codes_uic: '87473074',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1606705,
          48.2157588,
        ],
      },
      properties: {
        nom: `Brou`,
        libellecourt: 'BRO',
        segment_drg: 'C',
        codeinsee: '28061',
        codes_uic: '87394452',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2960996,
          46.8619444,
        ],
      },
      properties: {
        nom: `Broye`,
        libellecourt: 'BQK',
        segment_drg: 'C',
        codeinsee: '71063',
        codes_uic: '87694166',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.609445,
          44.8870124,
        ],
      },
      properties: {
        nom: `Bruges`,
        libellecourt: 'BGH',
        segment_drg: 'C',
        codeinsee: '33075',
        codes_uic: '87581736',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.7004016,
          48.7331082,
        ],
      },
      properties: {
        nom: `Brumath`,
        libellecourt: 'BAH',
        segment_drg: 'B',
        codeinsee: '67067',
        codes_uic: '87212134',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1453509,
          50.2783197,
        ],
      },
      properties: {
        nom: `Brunémont`,
        libellecourt: 'BPN',
        segment_drg: 'C',
        codeinsee: '59115',
        codes_uic: '87345439',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.506422,
          48.699112,
        ],
      },
      properties: {
        nom: `Brunoy`,
        libellecourt: 'BNY',
        segment_drg: 'B',
        codeinsee: '91114',
        codes_uic: '87682120',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.7187638,
          48.204895,
        ],
      },
      properties: {
        nom: `Bruyères`,
        libellecourt: 'BUY',
        segment_drg: 'C',
        codeinsee: '88078',
        codes_uic: '87144154',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3259636,
          49.1552098,
        ],
      },
      properties: {
        nom: `Bruyères-sur-Oise`,
        libellecourt: 'BRK',
        segment_drg: 'C',
        codeinsee: '95116',
        codes_uic: '87276451',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.7518088,
          48.0286,
        ],
      },
      properties: {
        nom: `Bruz`,
        libellecourt: 'BRZ',
        segment_drg: 'B',
        codeinsee: '35047',
        codes_uic: '87471037',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4435896,
          48.9253816,
        ],
      },
      properties: {
        nom: `Bueil`,
        libellecourt: 'BUE',
        segment_drg: 'C',
        codeinsee: '27119',
        codes_uic: '87387092',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9248147,
          45.6005968,
        ],
      },
      properties: {
        nom: `Bugeat`,
        libellecourt: 'BUG',
        segment_drg: 'C',
        codeinsee: '19033',
        codes_uic: '87592162',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5981885,
          49.9647735,
        ],
      },
      properties: {
        nom: `Buire-sur-l'Ancre`,
        libellecourt: 'BXA',
        segment_drg: 'C',
        codeinsee: '80151',
        codes_uic: '87316067',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.73317,
          50.44843,
        ],
      },
      properties: {
        nom: `Bully - Grenay`,
        libellecourt: 'BGF',
        segment_drg: 'B',
        codeinsee: '62186',
        codes_uic: '87342105',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3871153,
          48.370847,
        ],
      },
      properties: {
        nom: `Buno - Gironville`,
        libellecourt: 'BQV',
        segment_drg: 'C',
        codeinsee: '91121',
        codes_uic: '87681510',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4461174,
          50.0397236,
        ],
      },
      properties: {
        nom: `Busigny`,
        libellecourt: 'BSY',
        segment_drg: 'C',
        codeinsee: '59118',
        codes_uic: '87296244',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.3682457,
          45.211928,
        ],
      },
      properties: {
        nom: `Bussac-Forêt`,
        libellecourt: 'BMR',
        segment_drg: 'C',
        codeinsee: '17074',
        codes_uic: '87491191',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0229244,
          46.1230257,
        ],
      },
      properties: {
        nom: `Busseau sur Creuse`,
        libellecourt: 'BUC',
        segment_drg: 'C',
        codeinsee: '23001',
        codes_uic: '87597708',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0261372,
          45.6076224,
        ],
      },
      properties: {
        nom: `Bussière-Galant`,
        libellecourt: 'BGA',
        segment_drg: 'C',
        codeinsee: '87027',
        codes_uic: '87592741',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4558864,
          43.1482723,
        ],
      },
      properties: {
        nom: `Buzy en Béarn`,
        libellecourt: 'BUZ',
        segment_drg: 'C',
        codeinsee: '64157',
        codes_uic: '87672634',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.8520589,
          47.1185334,
        ],
      },
      properties: {
        nom: `Byans-sur-Doubs`,
        libellecourt: 'BYB',
        segment_drg: 'C',
        codeinsee: '25105',
        codes_uic: '87718122',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5376186,
          44.7520628,
        ],
      },
      properties: {
        nom: `Cadaujac`,
        libellecourt: 'CDJ',
        segment_drg: 'C',
        codeinsee: '33080',
        codes_uic: '87582684',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.347613,
          49.176354,
        ],
      },
      properties: {
        nom: `Caen`,
        libellecourt: 'CAE',
        segment_drg: 'A',
        codeinsee: '14118',
        codes_uic: '87444000',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8120345,
          50.8500679,
        ],
      },
      properties: {
        nom: `Caffiers`,
        libellecourt: 'CAF',
        segment_drg: 'C',
        codeinsee: '62191',
        codes_uic: '87317321',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.14864,
          43.65813,
        ],
      },
      properties: {
        nom: `Cagnes-sur-Mer`,
        libellecourt: 'CGM',
        segment_drg: 'B',
        codeinsee: '06027',
        codes_uic: '87756320',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.433325,
          44.449275,
        ],
      },
      properties: {
        nom: `Cahors`,
        libellecourt: 'CAH',
        segment_drg: 'B',
        codeinsee: '46042',
        codes_uic: '87613000',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.850819,
          50.953481,
        ],
      },
      properties: {
        nom: `Calais`,
        libellecourt: 'CSV',
        segment_drg: 'B',
        codeinsee: '62193',
        codes_uic: '87317263',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.810891,
          50.901221,
        ],
      },
      properties: {
        nom: `Calais - Fréthun`,
        libellecourt: 'FHS',
        segment_drg: 'B',
        codeinsee: '62360',
        codes_uic: '87281071',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.419782,
          48.4062201,
        ],
      },
      properties: {
        nom: `Callac`,
        libellecourt: 'CCF',
        segment_drg: 'C',
        codeinsee: '22025',
        codes_uic: '87473546',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4812098,
          50.4827036,
        ],
      },
      properties: {
        nom: `Calonne-Ricouart`,
        libellecourt: 'CPC',
        segment_drg: 'C',
        codeinsee: '62194',
        codes_uic: '87342543',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3966849,
          43.3656242,
        ],
      },
      properties: {
        nom: `Cambo-les-Bains`,
        libellecourt: 'CPQ',
        segment_drg: 'C',
        codeinsee: '64160',
        codes_uic: '87673657',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.24118,
          50.17662,
        ],
      },
      properties: {
        nom: `Cambrai`,
        libellecourt: 'CAM',
        segment_drg: 'B',
        codeinsee: '59122',
        codes_uic: '87345520',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0664008,
          44.4219559,
        ],
      },
      properties: {
        nom: `Campagnac - Saint-Geniez`,
        libellecourt: 'CNT',
        segment_drg: 'C',
        codeinsee: '12047',
        codes_uic: '87783340',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.019682,
          43.553839,
        ],
      },
      properties: {
        nom: `Cannes`,
        libellecourt: 'CAN',
        segment_drg: 'A',
        codeinsee: '06029',
        codes_uic: '87757625',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.986601,
          43.548787,
        ],
      },
      properties: {
        nom: `Cannes La Bocca`,
        libellecourt: 'CAB',
        segment_drg: 'B',
        codeinsee: '06029',
        codes_uic: '87757617',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.121943,
          50.3124545,
        ],
      },
      properties: {
        nom: `Cantin`,
        libellecourt: 'CNK',
        segment_drg: 'C',
        codeinsee: '59126',
        codes_uic: '87345413',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3943362,
          43.7205382,
        ],
      },
      properties: {
        nom: `Cap-d'Ail`,
        libellecourt: 'KAI',
        segment_drg: 'C',
        codeinsee: '06032',
        codes_uic: '87756395',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0779632,
          44.5782458,
        ],
      },
      properties: {
        nom: `Capdenac`,
        libellecourt: 'CDC',
        segment_drg: 'B',
        codeinsee: '12052',
        codes_uic: '87613109',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3296393,
          43.1033454,
        ],
      },
      properties: {
        nom: `Capvern`,
        libellecourt: 'CPN',
        segment_drg: 'C',
        codeinsee: '65127',
        codes_uic: '87671156',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.212531,
          43.298206,
        ],
      },
      properties: {
        nom: `Carbonne`,
        libellecourt: 'COA',
        segment_drg: 'B',
        codeinsee: '31107',
        codes_uic: '87611061',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.351824,
          43.218029,
        ],
      },
      properties: {
        nom: `Carcassonne`,
        libellecourt: 'CNE',
        segment_drg: 'A',
        codeinsee: '11069',
        codes_uic: '87615286',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.244938,
          49.302482,
        ],
      },
      properties: {
        nom: `Carentan`,
        libellecourt: 'CAR',
        segment_drg: 'B',
        codeinsee: '50099',
        codes_uic: '87447243',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.5622173,
          48.2780022,
        ],
      },
      properties: {
        nom: `Carhaix-Plouguer`,
        libellecourt: 'CRX',
        segment_drg: 'C',
        codeinsee: '29024',
        codes_uic: '87473504',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1684754,
          49.6285736,
        ],
      },
      properties: {
        nom: `Carignan`,
        libellecourt: 'CAG',
        segment_drg: 'C',
        codeinsee: '08090',
        codes_uic: '87172353',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.152401,
          44.048782,
        ],
      },
      properties: {
        nom: `Carmaux`,
        libellecourt: 'CMX',
        segment_drg: 'C',
        codeinsee: '81060',
        codes_uic: '87615625',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.4908822,
          48.3405242,
        ],
      },
      properties: {
        nom: `Carnoët - Locarn`,
        libellecourt: 'CCN',
        segment_drg: 'C',
        codeinsee: '22128',
        codes_uic: '87473561',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.48139,
          43.76203,
        ],
      },
      properties: {
        nom: `Carnoles`,
        libellecourt: 'KRL',
        segment_drg: 'B',
        codeinsee: '06104',
        codes_uic: '87756478',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1862531,
          43.2974104,
        ],
      },
      properties: {
        nom: `Carnoules`,
        libellecourt: 'CNS',
        segment_drg: 'C',
        codeinsee: '83033',
        codes_uic: '87755371',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.044141,
          44.0499488,
        ],
      },
      properties: {
        nom: `Carpentras`,
        libellecourt: 'IIM',
        segment_drg: 'B',
        codeinsee: '84031',
        codes_uic: '87765735',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.153594,
          43.336592,
        ],
      },
      properties: {
        nom: `Carry-le-Rouet`,
        libellecourt: 'CRR',
        segment_drg: 'C',
        codeinsee: '13021',
        codes_uic: '87753566',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7309383,
          45.7878115,
        ],
      },
      properties: {
        nom: `Casino Lacroix Laval`,
        libellecourt: 'CCL',
        segment_drg: 'C',
        codeinsee: '69250',
        codes_uic: '87208553',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4599722,
          50.7875916,
        ],
      },
      properties: {
        nom: `Cassel`,
        libellecourt: 'CRD',
        segment_drg: 'C',
        codeinsee: '59054',
        codes_uic: '87281139',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.553055,
          43.23406,
        ],
      },
      properties: {
        nom: `Cassis`,
        libellecourt: 'CSI',
        segment_drg: 'B',
        codeinsee: '13022',
        codes_uic: '87751776',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.341761,
          43.786196,
        ],
      },
      properties: {
        nom: `Castelnau-d'Estrétefonds`,
        libellecourt: 'CDF',
        segment_drg: 'B',
        codeinsee: '31118',
        codes_uic: '87611665',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.95039,
          43.312292,
        ],
      },
      properties: {
        nom: `Castelnaudary`,
        libellecourt: 'CTY',
        segment_drg: 'B',
        codeinsee: '11076',
        codes_uic: '87615039',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1143954,
          44.0403503,
        ],
      },
      properties: {
        nom: `Castelsarrasin`,
        libellecourt: 'CTN',
        segment_drg: 'C',
        codeinsee: '82033',
        codes_uic: '87611897',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.04066,
          44.856999,
        ],
      },
      properties: {
        nom: `Castillon-la-Bataille`,
        libellecourt: 'CIO',
        segment_drg: 'B',
        codeinsee: '33108',
        codes_uic: '87584136',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.231223,
          43.599131,
        ],
      },
      properties: {
        nom: `Castres`,
        libellecourt: 'CTR',
        segment_drg: 'B',
        codeinsee: '81065',
        codes_uic: '87615468',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3337877,
          50.1280738,
        ],
      },
      properties: {
        nom: `Cattenières`,
        libellecourt: 'CTT',
        segment_drg: 'C',
        codeinsee: '59138',
        codes_uic: '87345587',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6274337,
          44.84288,
        ],
      },
      properties: {
        nom: `Caudéran Mérignac`,
        libellecourt: 'CUD',
        segment_drg: 'C',
        codeinsee: '33063',
        codes_uic: '87581538',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.1452784,
          44.5801152,
        ],
      },
      properties: {
        nom: `Caudrot`,
        libellecourt: 'KDT',
        segment_drg: 'C',
        codeinsee: '33111',
        codes_uic: '87582841',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.40983,
          50.11146,
        ],
      },
      properties: {
        nom: `Caudry`,
        libellecourt: 'CAU',
        segment_drg: 'C',
        codeinsee: '59139',
        codes_uic: '87345561',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.155593,
          48.2844264,
        ],
      },
      properties: {
        nom: `Caulnes`,
        libellecourt: 'CUL',
        segment_drg: 'C',
        codeinsee: '22032',
        codes_uic: '87473066',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5336541,
          44.1622668,
        ],
      },
      properties: {
        nom: `Caussade`,
        libellecourt: 'CSD',
        segment_drg: 'C',
        codeinsee: '82037',
        codes_uic: '87613356',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.043613,
          43.834554,
        ],
      },
      properties: {
        nom: `Cavaillon`,
        libellecourt: 'CVN',
        segment_drg: 'B',
        codeinsee: '84035',
        codes_uic: '87765503',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.382243,
          45.105163,
        ],
      },
      properties: {
        nom: `Cavignac`,
        libellecourt: 'CGC',
        segment_drg: 'C',
        codeinsee: '33114',
        codes_uic: '87491217',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.083106,
          43.212834,
        ],
      },
      properties: {
        nom: `Cazères`,
        libellecourt: 'CZG',
        segment_drg: 'B',
        codeinsee: '31135',
        codes_uic: '87611079',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1551583,
          43.8122656,
        ],
      },
      properties: {
        nom: `Ceilhes - Roqueredonde`,
        libellecourt: 'COQ',
        segment_drg: 'C',
        codeinsee: '34233',
        codes_uic: '87781542',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1572868,
          48.523865,
        ],
      },
      properties: {
        nom: `Ceintrey`,
        libellecourt: 'CIT',
        segment_drg: 'C',
        codeinsee: '54109',
        codes_uic: '87141572',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5336487,
          44.8563465,
        ],
      },
      properties: {
        nom: `Cenon`,
        libellecourt: 'CBX',
        segment_drg: 'B',
        codeinsee: '33119',
        codes_uic: '87581595',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1634033,
          42.4417732,
        ],
      },
      properties: {
        nom: `Cerbère`,
        libellecourt: 'CER',
        segment_drg: 'C',
        codeinsee: '66048',
        codes_uic: '87785006',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8849813,
          47.9861553,
        ],
      },
      properties: {
        nom: `Cercottes`,
        libellecourt: 'CCT',
        segment_drg: 'C',
        codeinsee: '45062',
        codes_uic: '87543033',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6452029,
          46.8578816,
        ],
      },
      properties: {
        nom: `Cercy-la-Tour`,
        libellecourt: 'CLT',
        segment_drg: 'C',
        codeinsee: '58046',
        codes_uic: '87696492',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0118725,
          49.0484932,
        ],
      },
      properties: {
        nom: `Cergy le Haut`,
        libellecourt: 'CJV',
        segment_drg: 'B',
        codeinsee: '95127',
        codes_uic: '87382655',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.07982,
          49.03639,
        ],
      },
      properties: {
        nom: `Cergy Préfecture`,
        libellecourt: 'CYP',
        segment_drg: 'B',
        codeinsee: '95127',
        codes_uic: '87381905',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0343975,
          49.0496151,
        ],
      },
      properties: {
        nom: `Cergy Saint-Christophe`,
        libellecourt: 'CYC',
        segment_drg: 'B',
        codeinsee: '95127',
        codes_uic: '87382499',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6689931,
          46.8176878,
        ],
      },
      properties: {
        nom: `Cerizay`,
        libellecourt: 'CEZ',
        segment_drg: 'C',
        codeinsee: '79062',
        codes_uic: '87487280',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1737,
          47.802,
        ],
      },
      properties: {
        nom: `Cernay (Haut-Rhin)`,
        libellecourt: 'CEF',
        segment_drg: 'B',
        codeinsee: '68063',
        codes_uic: '87182410',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2568,
          48.98539,
        ],
      },
      properties: {
        nom: `Cernay (Val-d'Oise) `,
        libellecourt: 'CEJ',
        segment_drg: 'B',
        codeinsee: '95219',
        codes_uic: '87276063',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.340526,
          44.632346,
        ],
      },
      properties: {
        nom: `Cérons`,
        libellecourt: 'CGD',
        segment_drg: 'B',
        codeinsee: '33120',
        codes_uic: '87582742',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3761179,
          45.5611596,
        ],
      },
      properties: {
        nom: `Cessieu`,
        libellecourt: 'CIU',
        segment_drg: 'C',
        codeinsee: '38064',
        codes_uic: '87723452',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5938,
          48.56563,
        ],
      },
      properties: {
        nom: `Cesson`,
        libellecourt: 'CES',
        segment_drg: 'B',
        codeinsee: '77067',
        codes_uic: '87682161',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.60211,
          48.11281,
        ],
      },
      properties: {
        nom: `Cesson-Sévigné`,
        libellecourt: 'CGT',
        segment_drg: 'B',
        codeinsee: '35051',
        codes_uic: '87334490',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3258417,
          46.1834877,
        ],
      },
      properties: {
        nom: `Ceyzériat`,
        libellecourt: 'CZR',
        segment_drg: 'C',
        codeinsee: '01072',
        codes_uic: '87743302',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5076773,
          46.6265259,
        ],
      },
      properties: {
        nom: `Chabenet`,
        libellecourt: 'CBQ',
        segment_drg: 'C',
        codeinsee: '36161',
        codes_uic: '87597112',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.4281009,
          45.4383566,
        ],
      },
      properties: {
        nom: `Châbons`,
        libellecourt: 'CKN',
        segment_drg: 'C',
        codeinsee: '38065',
        codes_uic: '87747212',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6459424,
          47.2549836,
        ],
      },
      properties: {
        nom: `Chabris`,
        libellecourt: 'CGY',
        segment_drg: 'C',
        codeinsee: '36034',
        codes_uic: '87576223',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.749682,
          46.907269,
        ],
      },
      properties: {
        nom: `Chagny`,
        libellecourt: 'CHY',
        segment_drg: 'B',
        codeinsee: '71073',
        codes_uic: '87713578',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.782422,
          47.8770705,
        ],
      },
      properties: {
        nom: `Chaingy Fourneaux Plage`,
        libellecourt: 'CFX',
        segment_drg: 'C',
        codeinsee: '45067',
        codes_uic: '87574111',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.0435966,
          45.2708327,
        ],
      },
      properties: {
        nom: `Chalais`,
        libellecourt: 'CIC',
        segment_drg: 'C',
        codeinsee: '16073',
        codes_uic: '87583690',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.871879,
          46.843962,
        ],
      },
      properties: {
        nom: `Challans`,
        libellecourt: 'CLS',
        segment_drg: 'B',
        codeinsee: '85047',
        codes_uic: '87481390',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.843454,
          46.781612,
        ],
      },
      properties: {
        nom: `Chalon-sur-Saône`,
        libellecourt: 'CSS',
        segment_drg: 'B',
        codeinsee: '71076',
        codes_uic: '87725002',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.74306,
          47.34306,
        ],
      },
      properties: {
        nom: `Chalonnes-sur-Loire`,
        libellecourt: 'CCE',
        segment_drg: 'B',
        codeinsee: '49063',
        codes_uic: '87484204',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.348656,
          48.955252,
        ],
      },
      properties: {
        nom: `Châlons-en-Champagne`,
        libellecourt: 'CMP',
        segment_drg: 'B',
        codeinsee: '51108',
        codes_uic: '87174003',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9909202,
          45.2047385,
        ],
      },
      properties: {
        nom: `Chamalières-sur-Loire`,
        libellecourt: 'CML',
        segment_drg: 'C',
        codeinsee: '43049',
        codes_uic: '87734731',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.215854,
          48.514244,
        ],
      },
      properties: {
        nom: `Chamarande`,
        libellecourt: 'CHK',
        segment_drg: 'B',
        codeinsee: '91132',
        codes_uic: '87545152',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.919547,
          45.571302,
        ],
      },
      properties: {
        nom: `Chambéry - Challes-les-Eaux`,
        libellecourt: 'CRL',
        segment_drg: 'A',
        codeinsee: '73065',
        codes_uic: '87741009',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.24048,
          49.16362,
        ],
      },
      properties: {
        nom: `Chambly`,
        libellecourt: 'CVK',
        segment_drg: 'B',
        codeinsee: '60139',
        codes_uic: '87276725',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9793332,
          44.3002429,
        ],
      },
      properties: {
        nom: `Chamborigaud`,
        libellecourt: 'CBO',
        segment_drg: 'C',
        codeinsee: '30080',
        codes_uic: '87775221',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9648363,
          47.1821629,
        ],
      },
      properties: {
        nom: `Chambourg-sur-Indre`,
        libellecourt: 'CMG',
        segment_drg: 'C',
        codeinsee: '37049',
        codes_uic: '87571463',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.5069346,
          45.9816414,
        ],
      },
      properties: {
        nom: `Chamelet`,
        libellecourt: 'CWE',
        segment_drg: 'C',
        codeinsee: '69039',
        codes_uic: '87721829',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8667152,
          45.91993,
        ],
      },
      properties: {
        nom: `Chamonix Aiguille du Midi`,
        libellecourt: 'CHW',
        segment_drg: 'C',
        codeinsee: '74056',
        codes_uic: '87462085',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.87363,
          45.92277,
        ],
      },
      properties: {
        nom: `Chamonix-Mont-Blanc`,
        libellecourt: 'CHX',
        segment_drg: 'B',
        codeinsee: '74056',
        codes_uic: '87746784',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2067432,
          45.5575744,
        ],
      },
      properties: {
        nom: `Chamousset`,
        libellecourt: 'CSK',
        segment_drg: 'C',
        codeinsee: '73068',
        codes_uic: '87741231',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.29189,
          48.97975,
        ],
      },
      properties: {
        nom: `Champ de Courses d'Enghien`,
        libellecourt: 'CEG',
        segment_drg: 'B',
        codeinsee: '95598',
        codes_uic: '87276030',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2892141,
          48.8551134,
        ],
      },
      properties: {
        nom: `Champ de Mars Tour Eiffel`,
        libellecourt: 'CPM',
        segment_drg: 'B',
        codeinsee: '75115',
        codes_uic: '87393058',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3352253,
          48.0197118,
        ],
      },
      properties: {
        nom: `Champagné`,
        libellecourt: 'CGZ',
        segment_drg: 'C',
        codeinsee: '72054',
        codes_uic: '87396275',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.994632,
          49.214806,
        ],
      },
      properties: {
        nom: `Champagne-Ardenne TGV`,
        libellecourt: 'CGV',
        segment_drg: 'A',
        codeinsee: '51058',
        codes_uic: '87171926',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.24156,
          49.13573,
        ],
      },
      properties: {
        nom: `Champagne-sur-Oise`,
        libellecourt: 'CPI',
        segment_drg: 'B',
        codeinsee: '95134',
        codes_uic: '87276519',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.799184,
          48.406531,
        ],
      },
      properties: {
        nom: `Champagne-sur-Seine`,
        libellecourt: 'CME',
        segment_drg: 'B',
        codeinsee: '77079',
        codes_uic: '87682450',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.7012773,
          47.7031399,
        ],
      },
      properties: {
        nom: `Champagney`,
        libellecourt: 'CPY',
        segment_drg: 'C',
        codeinsee: '70120',
        codes_uic: '87185348',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9100314,
          46.7492981,
        ],
      },
      properties: {
        nom: `Champagnole`,
        libellecourt: 'CPG',
        segment_drg: 'C',
        codeinsee: '39097',
        codes_uic: '87715326',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9198128,
          46.742483,
        ],
      },
      properties: {
        nom: `Champagnole Paul-Émile Victor`,
        libellecourt: 'PVT',
        segment_drg: 'C',
        codeinsee: '39097',
        codes_uic: '87352047',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.287434,
          48.545567,
        ],
      },
      properties: {
        nom: `Champbenoist - Poigny`,
        libellecourt: 'CPK',
        segment_drg: 'B',
        codeinsee: '77368',
        codes_uic: '87115873',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.16913,
          48.73499,
        ],
      },
      properties: {
        nom: `Champigneulles`,
        libellecourt: 'CHG',
        segment_drg: 'C',
        codeinsee: '54115',
        codes_uic: '87141085',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1305718,
          48.3237418,
        ],
      },
      properties: {
        nom: `Champigny sur Yonne`,
        libellecourt: 'CSY',
        segment_drg: 'C',
        codeinsee: '89074',
        codes_uic: '87683128',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.28073,
          48.70804,
        ],
      },
      properties: {
        nom: `Champlan`,
        libellecourt: 'CPL',
        segment_drg: 'B',
        codeinsee: '91136',
        codes_uic: '87725457',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6034756,
          47.7388182,
        ],
      },
      properties: {
        nom: `Champs - Saint-Bris`,
        libellecourt: 'CAI',
        segment_drg: 'C',
        codeinsee: '89077',
        codes_uic: '87683615',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.8685747,
          47.4102457,
        ],
      },
      properties: {
        nom: `Champtocé-sur-Loire`,
        libellecourt: 'CWL',
        segment_drg: 'C',
        codeinsee: '49068',
        codes_uic: '87484352',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3454117,
          44.4739786,
        ],
      },
      properties: {
        nom: `Chanac`,
        libellecourt: 'CNA',
        segment_drg: 'C',
        codeinsee: '48056',
        codes_uic: '87783530',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.025394,
          48.95936,
        ],
      },
      properties: {
        nom: `Changis - Saint-Jean`,
        libellecourt: 'CJN',
        segment_drg: 'B',
        codeinsee: '77084',
        codes_uic: '87116509',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.02771,
          48.97095,
        ],
      },
      properties: {
        nom: `Chanteloup-les-Vignes`,
        libellecourt: 'CVF',
        segment_drg: 'B',
        codeinsee: '78138',
        codes_uic: '87381475',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.5943634,
          47.1971227,
        ],
      },
      properties: {
        nom: `Chantenay`,
        libellecourt: 'CHA',
        segment_drg: 'C',
        codeinsee: '44109',
        codes_uic: '87481051',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1720842,
          46.7283203,
        ],
      },
      properties: {
        nom: `Chantenay-Saint-Imbert`,
        libellecourt: 'CXI',
        segment_drg: 'C',
        codeinsee: '58057',
        codes_uic: '87696302',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.45979,
          49.18724,
        ],
      },
      properties: {
        nom: `Chantilly - Gouvieux`,
        libellecourt: 'CLY',
        segment_drg: 'B',
        codeinsee: '60141',
        codes_uic: '87276113',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.0544144,
          46.6898472,
        ],
      },
      properties: {
        nom: `Chantonnay`,
        libellecourt: 'CTO',
        segment_drg: 'C',
        codeinsee: '85051',
        codes_uic: '87486332',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.741923,
          44.8380008,
        ],
      },
      properties: {
        nom: `Chapeauroux`,
        libellecourt: 'CPX',
        segment_drg: 'C',
        codeinsee: '48139',
        codes_uic: '87734343',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7643014,
          45.6984889,
        ],
      },
      properties: {
        nom: `Chaponost`,
        libellecourt: 'CPT',
        segment_drg: 'C',
        codeinsee: '69043',
        codes_uic: '87722710',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1423781,
          49.0694825,
        ],
      },
      properties: {
        nom: `Chaponval`,
        libellecourt: 'CPW',
        segment_drg: 'C',
        codeinsee: '95039',
        codes_uic: '87276162',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.735912,
          45.782142,
        ],
      },
      properties: {
        nom: `Charbonnières-les-Bains`,
        libellecourt: 'CRB',
        segment_drg: 'B',
        codeinsee: '69044',
        codes_uic: '87721530',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.724952,
          49.767915,
        ],
      },
      properties: {
        nom: `Charleville-Mézières`,
        libellecourt: 'CMZ',
        segment_drg: 'B',
        codeinsee: '08105',
        codes_uic: '87172007',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.301537,
          48.378483,
        ],
      },
      properties: {
        nom: `Charmes`,
        libellecourt: 'CHS',
        segment_drg: 'B',
        codeinsee: '88090',
        codes_uic: '87144055',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.93671,
          49.16268,
        ],
      },
      properties: {
        nom: `Chars`,
        libellecourt: 'CHR',
        segment_drg: 'B',
        codeinsee: '95142',
        codes_uic: '87381194',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4813128,
          48.4482023,
        ],
      },
      properties: {
        nom: `Chartres`,
        libellecourt: 'CHH',
        segment_drg: 'B',
        codeinsee: '28085',
        codes_uic: '87394007',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6950059,
          48.4870771,
        ],
      },
      properties: {
        nom: `Chartrettes`,
        libellecourt: 'CJR',
        segment_drg: 'C',
        codeinsee: '77096',
        codes_uic: '87682419',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.794843,
          45.58237,
        ],
      },
      properties: {
        nom: `Chasse-sur-Rhône`,
        libellecourt: 'CSR',
        segment_drg: 'B',
        codeinsee: '38087',
        codes_uic: '87722561',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3730275,
          46.6517702,
        ],
      },
      properties: {
        nom: `Chasseneuil-du-Poitou`,
        libellecourt: 'CHN',
        segment_drg: 'C',
        codeinsee: '86062',
        codes_uic: '87575225',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.4535528,
          45.8244091,
        ],
      },
      properties: {
        nom: `Chasseneuil-sur-Bonnieure`,
        libellecourt: 'CBN',
        segment_drg: 'C',
        codeinsee: '16085',
        codes_uic: '87583443',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.8399319,
          44.5539847,
        ],
      },
      properties: {
        nom: `Chasseradès`,
        libellecourt: 'CJD',
        segment_drg: 'C',
        codeinsee: '48040',
        codes_uic: '87775148',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9973734,
          44.0615651,
        ],
      },
      properties: {
        nom: `Château-Arnoux-Saint-Auban`,
        libellecourt: 'SAU',
        segment_drg: 'C',
        codeinsee: '04049',
        codes_uic: '87751230',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.414912,
          47.683392,
        ],
      },
      properties: {
        nom: `Château-du-Loir`,
        libellecourt: 'CDL',
        segment_drg: 'C',
        codeinsee: '72071',
        codes_uic: '87396606',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9128148,
          48.1416904,
        ],
      },
      properties: {
        nom: `Château-Gaillard`,
        libellecourt: 'CGK',
        segment_drg: 'C',
        codeinsee: '28367',
        codes_uic: '87543066',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.6882106,
          45.2445887,
        ],
      },
      properties: {
        nom: `Château-l'Évêque`,
        libellecourt: 'CEQ',
        segment_drg: 'C',
        codeinsee: '24115',
        codes_uic: '87595165',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9015238,
          47.5877961,
        ],
      },
      properties: {
        nom: `Château-Renault`,
        libellecourt: 'CTI',
        segment_drg: 'C',
        codeinsee: '37063',
        codes_uic: '87574665',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.409514,
          49.038224,
        ],
      },
      properties: {
        nom: `Château-Thierry`,
        libellecourt: 'CTH',
        segment_drg: 'B',
        codeinsee: '02168',
        codes_uic: '87116582',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.405159,
          48.106361,
        ],
      },
      properties: {
        nom: `Châteaubourg`,
        libellecourt: 'CTG',
        segment_drg: 'B',
        codeinsee: '35068',
        codes_uic: '87471524',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3715152,
          47.7175212,
        ],
      },
      properties: {
        nom: `Châteaubriant`,
        libellecourt: 'CTB',
        segment_drg: 'C;C',
        codeinsee: '44036',
        codes_uic: '87481648;87590372',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.338133,
          48.073463,
        ],
      },
      properties: {
        nom: `Châteaudun`,
        libellecourt: 'CUN',
        segment_drg: 'B',
        codeinsee: '28088',
        codes_uic: '87545756',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -4.094308,
          48.2016033,
        ],
      },
      properties: {
        nom: `Châteaulin`,
        libellecourt: 'CEM',
        segment_drg: 'C',
        codeinsee: '29026',
        codes_uic: '87474064',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6453027,
          45.759316,
        ],
      },
      properties: {
        nom: `Châteauneuf - Bujaleuf`,
        libellecourt: 'CBF',
        segment_drg: 'C',
        codeinsee: '87105',
        codes_uic: '87592105',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.0502,
          45.599836,
        ],
      },
      properties: {
        nom: `Châteauneuf-sur-Charente`,
        libellecourt: 'CSC',
        segment_drg: 'C',
        codeinsee: '16090',
        codes_uic: '87491506',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3103826,
          46.8568144,
        ],
      },
      properties: {
        nom: `Châteauneuf-sur-Cher`,
        libellecourt: 'CHC',
        segment_drg: 'C',
        codeinsee: '18058',
        codes_uic: '87576298',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.699536,
          46.809737,
        ],
      },
      properties: {
        nom: `Châteauroux`,
        libellecourt: 'CTX',
        segment_drg: 'B',
        codeinsee: '36044',
        codes_uic: '87597005',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.387807,
          48.307156,
        ],
      },
      properties: {
        nom: `Châtel - Nomexy`,
        libellecourt: 'CEO',
        segment_drg: 'B',
        codeinsee: '88327',
        codes_uic: '87144071',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6350455,
          47.5377695,
        ],
      },
      properties: {
        nom: `Châtel-Censoir`,
        libellecourt: 'CAL',
        segment_drg: 'C',
        codeinsee: '89091',
        codes_uic: '87696856',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.0908909,
          46.0783303,
        ],
      },
      properties: {
        nom: `Châtelaillon-Plage`,
        libellecourt: 'CTL',
        segment_drg: 'C',
        codeinsee: '17094',
        codes_uic: '87485110',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.9746782,
          48.5332189,
        ],
      },
      properties: {
        nom: `Châtelaudren - Plouagat`,
        libellecourt: 'CDN',
        segment_drg: 'C',
        codeinsee: '22206',
        codes_uic: '87473140',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.549279,
          46.818594,
        ],
      },
      properties: {
        nom: `Châtellerault`,
        libellecourt: 'CRT',
        segment_drg: 'B',
        codeinsee: '86066',
        codes_uic: '87575142',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.6451164,
          45.8751815,
        ],
      },
      properties: {
        nom: `Châtillon d'Azergues`,
        libellecourt: 'CDZ',
        segment_drg: 'C',
        codeinsee: '03069',
        codes_uic: '87721753',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3454278,
          46.2074552,
        ],
      },
      properties: {
        nom: `Chauffailles`,
        libellecourt: 'CHF',
        segment_drg: 'C',
        codeinsee: '71120',
        codes_uic: '87694778',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.2551914,
          47.0872036,
        ],
      },
      properties: {
        nom: `Chaugey`,
        libellecourt: 'CFJ',
        segment_drg: 'C',
        codeinsee: '21356',
        codes_uic: '87712679',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8011421,
          49.8076201,
        ],
      },
      properties: {
        nom: `Chaulnes`,
        libellecourt: 'CHL',
        segment_drg: 'C',
        codeinsee: '80186',
        codes_uic: '87313478',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1346,
          48.10976,
        ],
      },
      properties: {
        nom: `Chaumont`,
        libellecourt: 'CHM',
        segment_drg: 'B',
        codeinsee: '52121',
        codes_uic: '87142000',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.87274,
          49.26139,
        ],
      },
      properties: {
        nom: `Chaumont-en-Vexin`,
        libellecourt: 'CEV',
        segment_drg: 'B',
        codeinsee: '60143',
        codes_uic: '87381228',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.22354,
          49.61119,
        ],
      },
      properties: {
        nom: `Chauny`,
        libellecourt: 'CNY',
        segment_drg: 'B',
        codeinsee: '02173',
        codes_uic: '87296616',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9438595,
          46.6545926,
        ],
      },
      properties: {
        nom: `Chaux-des-Crotenay`,
        libellecourt: 'LXR',
        segment_drg: 'C',
        codeinsee: '39129',
        codes_uic: '87715383',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1845267,
          48.7998005,
        ],
      },
      properties: {
        nom: `Chaville - Vélizy`,
        libellecourt: 'CHV',
        segment_drg: 'B',
        codeinsee: '78686',
        codes_uic: '87393173',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.18785,
          48.81213,
        ],
      },
      properties: {
        nom: `Chaville Rive Droite`,
        libellecourt: 'CWJ',
        segment_drg: 'B',
        codeinsee: '92022',
        codes_uic: '87382333',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1882472,
          48.8047497,
        ],
      },
      properties: {
        nom: `Chaville Rive Gauche`,
        libellecourt: 'CVI',
        segment_drg: 'B',
        codeinsee: '92022',
        codes_uic: '87393207',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7252221,
          45.8729618,
        ],
      },
      properties: {
        nom: `Chazay - Marcilly`,
        libellecourt: 'CZM',
        segment_drg: 'C',
        codeinsee: '69125',
        codes_uic: '87721415',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.7197662,
          45.9263464,
        ],
      },
      properties: {
        nom: `Chedde`,
        libellecourt: 'CED',
        segment_drg: 'C',
        codeinsee: '74208',
        codes_uic: '87746701',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.6758424,
          46.8924768,
        ],
      },
      properties: {
        nom: `Cheilly-lès-Maranges`,
        libellecourt: 'CJL',
        segment_drg: 'C',
        codeinsee: '71122',
        codes_uic: '87694398',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.582484,
          48.874128,
        ],
      },
      properties: {
        nom: `Chelles - Gournay`,
        libellecourt: 'CSG',
        segment_drg: 'B',
        codeinsee: '77108',
        codes_uic: '87116111',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.731989,
          47.217748,
        ],
      },
      properties: {
        nom: `Chemillé-en-Anjou`,
        libellecourt: 'CHE',
        segment_drg: 'B',
        codeinsee: '49092',
        codes_uic: '87484246',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.5543936,
          47.8972366,
        ],
      },
      properties: {
        nom: `Chemilly - Appoigny`,
        libellecourt: 'CAP',
        segment_drg: 'C',
        codeinsee: '89096',
        codes_uic: '87683532',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3126207,
          48.748143,
        ],
      },
      properties: {
        nom: `Chemin d'Antony`,
        libellecourt: 'CHQ',
        segment_drg: 'B',
        codeinsee: '92002',
        codes_uic: '87546317',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.6325613,
          48.5195062,
        ],
      },
      properties: {
        nom: `Chenevières`,
        libellecourt: 'CKY',
        segment_drg: 'C',
        codeinsee: '54125',
        codes_uic: '87141382',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0661,
          47.330554,
        ],
      },
      properties: {
        nom: `Chenonceaux`,
        libellecourt: 'CQH',
        segment_drg: 'C',
        codeinsee: '37073',
        codes_uic: '87574491',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6358275,
          50.0682219,
        ],
      },
      properties: {
        nom: `Chépy - Valines`,
        libellecourt: 'CYA',
        segment_drg: 'C',
        codeinsee: '80190',
        codes_uic: '87317495',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.621515,
          49.633505,
        ],
      },
      properties: {
        nom: `Cherbourg-en-Cotentin`,
        libellecourt: 'CBU',
        segment_drg: 'B',
        codeinsee: '50129',
        codes_uic: '87444877',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.6222625,
          45.885545,
        ],
      },
      properties: {
        nom: `Chessy`,
        libellecourt: 'CZI',
        segment_drg: 'C',
        codeinsee: '69056',
        codes_uic: '87721761',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.6307622,
          48.2089042,
        ],
      },
      properties: {
        nom: `Chevaigné`,
        libellecourt: 'CWH',
        segment_drg: 'C',
        codeinsee: '35079',
        codes_uic: '87471458',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1117843,
          48.5245505,
        ],
      },
      properties: {
        nom: `Chevillon`,
        libellecourt: 'CIN',
        segment_drg: 'C',
        codeinsee: '52123',
        codes_uic: '87175117',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8793013,
          48.0266215,
        ],
      },
      properties: {
        nom: `Chevilly`,
        libellecourt: 'CVY',
        segment_drg: 'C',
        codeinsee: '45093',
        codes_uic: '87543041',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6828025,
          49.3373064,
        ],
      },
      properties: {
        nom: `Chevrières`,
        libellecourt: 'CGB',
        segment_drg: 'C',
        codeinsee: '60149',
        codes_uic: '87276311',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3644624,
          48.9919109,
        ],
      },
      properties: {
        nom: `Chézy-sur-Marne`,
        libellecourt: 'CYZ',
        segment_drg: 'C',
        codeinsee: '02186',
        codes_uic: '87116574',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3081837,
          48.7004413,
        ],
      },
      properties: {
        nom: `Chilly-Mazarin`,
        libellecourt: 'CAZ',
        segment_drg: 'B',
        codeinsee: '91161',
        codes_uic: '87393637',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.8468876,
          45.8034376,
        ],
      },
      properties: {
        nom: `Chindrieux`,
        libellecourt: 'CWX',
        segment_drg: 'C',
        codeinsee: '73085',
        codes_uic: '87741116',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.251538,
          47.163047,
        ],
      },
      properties: {
        nom: `Chinon`,
        libellecourt: 'CHI',
        segment_drg: 'B',
        codeinsee: '37072',
        codes_uic: '87571687',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2638181,
          44.5246607,
        ],
      },
      properties: {
        nom: `Chirac`,
        libellecourt: 'CAC',
        segment_drg: 'C',
        codeinsee: '48049',
        codes_uic: '87783290',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1333044,
          47.3349004,
        ],
      },
      properties: {
        nom: `Chissay-en-Touraine`,
        libellecourt: 'CXT',
        segment_drg: 'C',
        codeinsee: '41051',
        codes_uic: '87574848',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.564749,
          50.5382038,
        ],
      },
      properties: {
        nom: `Chocques`,
        libellecourt: 'CRG',
        segment_drg: 'C',
        codeinsee: '62224',
        codes_uic: '87342220',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.411102,
          48.763974,
        ],
      },
      properties: {
        nom: `Choisy-le-Roi`,
        libellecourt: 'CLR',
        segment_drg: 'B',
        codeinsee: '94022',
        codes_uic: '87545285',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.869583,
          47.065698,
        ],
      },
      properties: {
        nom: `Cholet`,
        libellecourt: 'CHT',
        segment_drg: 'B',
        codeinsee: '49099',
        codes_uic: '87484303',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2718887,
          44.5458415,
        ],
      },
      properties: {
        nom: `Chorges`,
        libellecourt: 'CHO',
        segment_drg: 'C',
        codeinsee: '05040',
        codes_uic: '87763425',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.247846,
          47.5203249,
        ],
      },
      properties: {
        nom: `Chouzy-sur-Cisse`,
        libellecourt: 'CZV',
        segment_drg: 'C',
        codeinsee: '41055',
        codes_uic: '87574301',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.4604878,
          47.3452264,
        ],
      },
      properties: {
        nom: `Cinq-Mars-la-Pile`,
        libellecourt: 'CQM',
        segment_drg: 'B',
        codeinsee: '37077',
        codes_uic: '87571836',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5204268,
          43.3054202,
        ],
      },
      properties: {
        nom: `Cintegabelle`,
        libellecourt: 'CBT',
        segment_drg: 'C',
        codeinsee: '31145',
        codes_uic: '87611376',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3601903,
          49.2717956,
        ],
      },
      properties: {
        nom: `Cires-lès-Mello`,
        libellecourt: 'CIW',
        segment_drg: 'C',
        codeinsee: '60155',
        codes_uic: '87313551',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2997146,
          46.6040913,
        ],
      },
      properties: {
        nom: `Ciry-le-Noble`,
        libellecourt: 'CYL',
        segment_drg: 'C',
        codeinsee: '71132',
        codes_uic: '87694646',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7182413,
          45.8591831,
        ],
      },
      properties: {
        nom: `Civrieux-d'Azergues`,
        libellecourt: 'CZK',
        segment_drg: 'C',
        codeinsee: '69059',
        codes_uic: '87721746',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.4540677,
          46.2134803,
        ],
      },
      properties: {
        nom: `Cize - Bolozon`,
        libellecourt: 'CZQ',
        segment_drg: 'C',
        codeinsee: '01051',
        codes_uic: '87743344',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.5766816,
          49.5439229,
        ],
      },
      properties: {
        nom: `Clacy - Mons`,
        libellecourt: 'ONS',
        segment_drg: 'C',
        codeinsee: '02196',
        codes_uic: '87296178',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2733273,
          48.813844,
        ],
      },
      properties: {
        nom: `Clamart`,
        libellecourt: 'CMA',
        segment_drg: 'B',
        codeinsee: '92023',
        codes_uic: '87391565',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.5207672,
          47.4666984,
        ],
      },
      properties: {
        nom: `Clamecy`,
        libellecourt: 'CLA',
        segment_drg: 'C',
        codeinsee: '58079',
        codes_uic: '87696807',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.6050622,
          44.8272443,
        ],
      },
      properties: {
        nom: `Clelles - Mens`,
        libellecourt: 'CMS',
        segment_drg: 'C',
        codeinsee: '38113',
        codes_uic: '87747626',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.106184,
          49.598964,
        ],
      },
      properties: {
        nom: `Clères`,
        libellecourt: 'CRS',
        segment_drg: 'B',
        codeinsee: '76179',
        codes_uic: '87411819',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.41767,
          49.38531,
        ],
      },
      properties: {
        nom: `Clermont de l'Oise`,
        libellecourt: 'CDO',
        segment_drg: 'B',
        codeinsee: '60157',
        codes_uic: '87313304',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.134163,
          45.766947,
        ],
      },
      properties: {
        nom: `Clermont La Pardieu`,
        libellecourt: 'COP',
        segment_drg: 'B',
        codeinsee: '63113',
        codes_uic: '87782607',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0909704,
          45.7680954,
        ],
      },
      properties: {
        nom: `Clermont La Rotonde`,
        libellecourt: 'RTD',
        segment_drg: 'C',
        codeinsee: '63113',
        codes_uic: '87396895',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.06506,
          49.10645,
        ],
      },
      properties: {
        nom: `Clermont-en-Argonne`,
        libellecourt: 'CTA',
        segment_drg: 'C',
        codeinsee: '55117',
        codes_uic: '87175737',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.100543,
          45.778945,
        ],
      },
      properties: {
        nom: `Clermont-Ferrand`,
        libellecourt: 'CLF',
        segment_drg: 'A',
        codeinsee: '63113',
        codes_uic: '87734004',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.4920574,
          47.3966577,
        ],
      },
      properties: {
        nom: `Clerval`,
        libellecourt: 'CVL',
        segment_drg: 'C',
        codeinsee: '25156',
        codes_uic: '87184622',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2982,
          48.89678,
        ],
      },
      properties: {
        nom: `Clichy - Levallois`,
        libellecourt: 'CLL',
        segment_drg: 'B',
        codeinsee: '75117',
        codes_uic: '87381129',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.286172,
          47.086142,
        ],
      },
      properties: {
        nom: `Clisson`,
        libellecourt: 'CLI',
        segment_drg: 'B',
        codeinsee: '44043',
        codes_uic: '87481440',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2433542,
          47.9921032,
        ],
      },
      properties: {
        nom: `Cloyes-sur-le-Loir`,
        libellecourt: 'CLO',
        segment_drg: 'C',
        codeinsee: '28103',
        codes_uic: '87574509',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.582663,
          46.061447,
        ],
      },
      properties: {
        nom: `Cluses`,
        libellecourt: 'CLU',
        segment_drg: 'B',
        codeinsee: '74081',
        codes_uic: '87746370',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.2416429,
          43.1818351,
        ],
      },
      properties: {
        nom: `Coarraze - Nay`,
        libellecourt: 'CZN',
        segment_drg: 'C',
        codeinsee: '64191',
        codes_uic: '87672139',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.2738023,
          48.4803156,
        ],
      },
      properties: {
        nom: `Coat Guégan`,
        libellecourt: 'CQG',
        segment_drg: 'C',
        codeinsee: '22249',
        codes_uic: '87473579',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.326112,
          45.684682,
        ],
      },
      properties: {
        nom: `Cognac`,
        libellecourt: 'COG',
        segment_drg: 'C',
        codeinsee: '16102',
        codes_uic: '87491449',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.920809,
          48.7437672,
        ],
      },
      properties: {
        nom: `Coignières`,
        libellecourt: 'CGW',
        segment_drg: 'B',
        codeinsee: '78168',
        codes_uic: '87393272',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0782319,
          42.5269437,
        ],
      },
      properties: {
        nom: `Collioure`,
        libellecourt: 'COX',
        segment_drg: 'C',
        codeinsee: '66053',
        codes_uic: '87784256',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8466136,
          45.8291102,
        ],
      },
      properties: {
        nom: `Collonges - Fontaines`,
        libellecourt: 'COF',
        segment_drg: 'C',
        codeinsee: '69063',
        codes_uic: '87721225',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.2653478,
          47.2212533,
        ],
      },
      properties: {
        nom: `Collonges-lès-Premières`,
        libellecourt: 'CLG',
        segment_drg: 'C',
        codeinsee: '21183',
        codes_uic: '87713321',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.346967,
          48.073201,
        ],
      },
      properties: {
        nom: `Colmar`,
        libellecourt: 'CMR',
        segment_drg: 'B',
        codeinsee: '68066',
        codes_uic: '87182014',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3336703,
          48.0860048,
        ],
      },
      properties: {
        nom: `Colmar Mésanges`,
        libellecourt: 'CXM',
        segment_drg: 'C',
        codeinsee: '68066',
        codes_uic: '87402297',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3453397,
          48.0816399,
        ],
      },
      properties: {
        nom: `Colmar Saint-Joseph`,
        libellecourt: 'CXJ',
        segment_drg: 'C',
        codeinsee: '68066',
        codes_uic: '87181222',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.25939,
          48.92383,
        ],
      },
      properties: {
        nom: `Colombes`,
        libellecourt: 'CBK',
        segment_drg: 'B',
        codeinsee: '92025',
        codes_uic: '87381087',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.6890071,
          47.4554849,
        ],
      },
      properties: {
        nom: `Colombier-Fontaine`,
        libellecourt: 'CFT',
        segment_drg: 'C',
        codeinsee: '25159',
        codes_uic: '87184556',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.334221,
          43.603734,
        ],
      },
      properties: {
        nom: `Colomiers`,
        libellecourt: 'COL',
        segment_drg: 'B',
        codeinsee: '31149',
        codes_uic: '87611467',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3141157,
          43.6163055,
        ],
      },
      properties: {
        nom: `Colomiers Lycée International`,
        libellecourt: 'LYF',
        segment_drg: 'B',
        codeinsee: '31149',
        codes_uic: '87611921',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.72792,
          48.41609,
        ],
      },
      properties: {
        nom: `Combourg`,
        libellecourt: 'CUG',
        segment_drg: 'B',
        codeinsee: '35085',
        codes_uic: '87478057',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.547798,
          48.667179,
        ],
      },
      properties: {
        nom: `Combs-la-Ville - Quincy`,
        libellecourt: 'CBV',
        segment_drg: 'B',
        codeinsee: '77122',
        codes_uic: '87682146',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0096253,
          50.7608973,
        ],
      },
      properties: {
        nom: `Comines`,
        libellecourt: 'CIS',
        segment_drg: 'C',
        codeinsee: '59152',
        codes_uic: '87286260',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.739949,
          46.295102,
        ],
      },
      properties: {
        nom: `Commentry`,
        libellecourt: 'CMY',
        segment_drg: 'C',
        codeinsee: '03082',
        codes_uic: '87641415',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.58861,
          48.765749,
        ],
      },
      properties: {
        nom: `Commercy`,
        libellecourt: 'CCY',
        segment_drg: 'B',
        codeinsee: '55122',
        codes_uic: '87175257',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6652718,
          48.9915767,
        ],
      },
      properties: {
        nom: `Compans`,
        libellecourt: 'COJ',
        segment_drg: 'C',
        codeinsee: '77123',
        codes_uic: '87272047',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.823679,
          49.422005,
        ],
      },
      properties: {
        nom: `Compiègne`,
        libellecourt: 'CPE',
        segment_drg: 'B',
        codeinsee: '60382',
        codes_uic: '87276691',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9378895,
          48.9623603,
        ],
      },
      properties: {
        nom: `Conches-en-Ouche`,
        libellecourt: 'CCH',
        segment_drg: 'C',
        codeinsee: '27165',
        codes_uic: '87387159',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2267493,
          45.1267128,
        ],
      },
      properties: {
        nom: `Condat - Le Lardin`,
        libellecourt: 'CDT',
        segment_drg: 'C',
        codeinsee: '24229',
        codes_uic: '87594382',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8487023,
          48.3834826,
        ],
      },
      properties: {
        nom: `Condé-sur-Huisne`,
        libellecourt: 'CDH',
        segment_drg: 'C',
        codeinsee: '61116',
        codes_uic: '87394288',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.8681853,
          49.1662895,
        ],
      },
      properties: {
        nom: `Conflans - Jarny`,
        libellecourt: 'CJJ',
        segment_drg: 'C',
        codeinsee: '54273',
        codes_uic: '87192666',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.07465,
          48.98931,
        ],
      },
      properties: {
        nom: `Conflans Fin d'Oise`,
        libellecourt: 'CFD',
        segment_drg: 'B',
        codeinsee: '78172',
        codes_uic: '87381459',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.09783,
          48.99646,
        ],
      },
      properties: {
        nom: `Conflans-Sainte-Honorine`,
        libellecourt: 'CSH',
        segment_drg: 'B',
        codeinsee: '78172',
        codes_uic: '87381897',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.0113736,
          48.1272909,
        ],
      },
      properties: {
        nom: `Conlie`,
        libellecourt: 'CIE',
        segment_drg: 'C',
        codeinsee: '72089',
        codes_uic: '87396218',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.48687,
          48.0735,
        ],
      },
      properties: {
        nom: `Connerré - Beillé`,
        libellecourt: 'COB',
        segment_drg: 'C',
        codeinsee: '72031',
        codes_uic: '87396309',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.890633,
          48.1796129,
        ],
      },
      properties: {
        nom: `Contrexéville`,
        libellecourt: 'CXC',
        segment_drg: 'C',
        codeinsee: '88114',
        codes_uic: '87144287',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0405375,
          50.3428545,
        ],
      },
      properties: {
        nom: `Corbehem`,
        libellecourt: 'COR',
        segment_drg: 'C',
        codeinsee: '62240',
        codes_uic: '87345116',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.47401,
          48.61403,
        ],
      },
      properties: {
        nom: `Corbeil-Essonnes`,
        libellecourt: 'COE',
        segment_drg: 'B',
        codeinsee: '91174',
        codes_uic: '87681007',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4996846,
          49.9116183,
        ],
      },
      properties: {
        nom: `Corbie`,
        libellecourt: 'CBI',
        segment_drg: 'B',
        codeinsee: '80212',
        codes_uic: '87313056',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6773226,
          47.254807,
        ],
      },
      properties: {
        nom: `Corbigny`,
        libellecourt: 'CBY',
        segment_drg: 'C',
        codeinsee: '58083',
        codes_uic: '87696617',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8772915,
          48.1982842,
        ],
      },
      properties: {
        nom: `Corcieux Vanémont`,
        libellecourt: 'CXV',
        segment_drg: 'C',
        codeinsee: '88244',
        codes_uic: '87144196',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2157221,
          49.2550929,
        ],
      },
      properties: {
        nom: `Corcy`,
        libellecourt: 'CKX',
        segment_drg: 'C',
        codeinsee: '02216',
        codes_uic: '87272286',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.8466771,
          47.3021502,
        ],
      },
      properties: {
        nom: `Cordemais`,
        libellecourt: 'CDQ',
        segment_drg: 'C',
        codeinsee: '44045',
        codes_uic: '87481820',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.900229,
          44.067189,
        ],
      },
      properties: {
        nom: `Cordes - Vindrac`,
        libellecourt: 'VDC',
        segment_drg: 'C',
        codeinsee: '81320',
        codes_uic: '87613802',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9171231,
          47.0841982,
        ],
      },
      properties: {
        nom: `Corgoloin`,
        libellecourt: 'CGO',
        segment_drg: 'C',
        codeinsee: '21194',
        codes_uic: '87713537',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.19358,
          48.96864,
        ],
      },
      properties: {
        nom: `Cormeilles-en-Parisis`,
        libellecourt: 'CPA',
        segment_drg: 'B',
        codeinsee: '95176',
        codes_uic: '87381863',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.833953,
          47.26254,
        ],
      },
      properties: {
        nom: `Cormery`,
        libellecourt: 'CEY',
        segment_drg: 'C',
        codeinsee: '37083',
        codes_uic: '87571430',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6978482,
          45.2151758,
        ],
      },
      properties: {
        nom: `Cornil`,
        libellecourt: 'CIL',
        segment_drg: 'C',
        codeinsee: '19061',
        codes_uic: '87594481',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8854084,
          50.4150048,
        ],
      },
      properties: {
        nom: `Coron de Méricourt`,
        libellecourt: 'CQW',
        segment_drg: 'C',
        codeinsee: '62570',
        codes_uic: '87345132',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.5754724,
          47.9851669,
        ],
      },
      properties: {
        nom: `Corps-Nuds`,
        libellecourt: 'CPS',
        segment_drg: 'C',
        codeinsee: '35088',
        codes_uic: '87471326',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8810793,
          45.3294801,
        ],
      },
      properties: {
        nom: `Corrèze`,
        libellecourt: 'CZE',
        segment_drg: 'C',
        codeinsee: '19236',
        codes_uic: '87594119',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.1414331,
          48.4960574,
        ],
      },
      properties: {
        nom: `Corseul - Languenan`,
        libellecourt: 'CFA',
        segment_drg: 'C',
        codeinsee: '22105',
        codes_uic: '87478180',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.931981,
          47.413996,
        ],
      },
      properties: {
        nom: `Cosne-Cours-sur-Loire`,
        libellecourt: 'COS',
        segment_drg: 'B',
        codeinsee: '58086',
        codes_uic: '87696146',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.7748209,
          49.556282,
        ],
      },
      properties: {
        nom: `Coucy-lès-Eppes`,
        libellecourt: 'CCP',
        segment_drg: 'C',
        codeinsee: '02218',
        codes_uic: '87171769',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3751425,
          51.0177069,
        ],
      },
      properties: {
        nom: `Coudekerque-Branche`,
        libellecourt: 'CDK',
        segment_drg: 'C',
        codeinsee: '59155',
        codes_uic: '87281402',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.7235014,
          47.2220412,
        ],
      },
      properties: {
        nom: `Couëron`,
        libellecourt: 'CNQ',
        segment_drg: 'C',
        codeinsee: '44047',
        codes_uic: '87481804',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3161754,
          43.1555365,
        ],
      },
      properties: {
        nom: `Couffoulens - Leuc`,
        libellecourt: 'CFW',
        segment_drg: 'C',
        codeinsee: '11102',
        codes_uic: '87615120',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.854057,
          48.8830205,
        ],
      },
      properties: {
        nom: `Couilly - Saint-Germain - Quincy`,
        libellecourt: 'CYQ',
        segment_drg: 'C',
        codeinsee: '77413',
        codes_uic: '87116731',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.5472388,
          47.5270546,
        ],
      },
      properties: {
        nom: `Coulanges-sur-Yonne`,
        libellecourt: 'CAO',
        segment_drg: 'C',
        codeinsee: '89129',
        codes_uic: '87696831',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.08225,
          48.808006,
        ],
      },
      properties: {
        nom: `Coulommiers`,
        libellecourt: 'CQU',
        segment_drg: 'B',
        codeinsee: '77131',
        codes_uic: '87116301',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.24804,
          48.89831,
        ],
      },
      properties: {
        nom: `Courbevoie`,
        libellecourt: 'KOU',
        segment_drg: 'B',
        codeinsee: '92026',
        codes_uic: '87382200',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.867867,
          47.2377076,
        ],
      },
      properties: {
        nom: `Courcay - Tauxigny`,
        libellecourt: 'KYY',
        segment_drg: 'C',
        codeinsee: '37085',
        codes_uic: '87571448',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7880351,
          50.1694124,
        ],
      },
      properties: {
        nom: `Courcelles-le-Comte`,
        libellecourt: 'COK',
        segment_drg: 'C',
        codeinsee: '62248',
        codes_uic: '87342063',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3109926,
          49.0634035,
        ],
      },
      properties: {
        nom: `Courcelles-sur-Nied`,
        libellecourt: 'CCD',
        segment_drg: 'C',
        codeinsee: '57156',
        codes_uic: '87192211',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0134623,
          49.3296003,
        ],
      },
      properties: {
        nom: `Courcy - Brimont`,
        libellecourt: 'CIM',
        segment_drg: 'C',
        codeinsee: '51183',
        codes_uic: '87171710',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0510465,
          43.23369,
        ],
      },
      properties: {
        nom: `Coursan`,
        libellecourt: 'KOS',
        segment_drg: 'C',
        codeinsee: '11106',
        codes_uic: '87781161',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1270043,
          48.0735988,
        ],
      },
      properties: {
        nom: `Courtalain - Saint-Pellerin`,
        libellecourt: 'CWP',
        segment_drg: 'C',
        codeinsee: '28356',
        codes_uic: '87394494',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8881802,
          44.0899478,
        ],
      },
      properties: {
        nom: `Courthézon`,
        libellecourt: 'CTZ',
        segment_drg: 'C',
        codeinsee: '84039',
        codes_uic: '87765180',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.234836,
          48.451236,
        ],
      },
      properties: {
        nom: `Courville-sur-Eure`,
        libellecourt: 'CVB',
        segment_drg: 'B',
        codeinsee: '28116',
        codes_uic: '87394221',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3868216,
          46.5353569,
        ],
      },
      properties: {
        nom: `Cousance`,
        libellecourt: 'CSJ',
        segment_drg: 'C',
        codeinsee: '39173',
        codes_uic: '87718270',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.441726,
          49.042928,
        ],
      },
      properties: {
        nom: `Coutances`,
        libellecourt: 'CCS',
        segment_drg: 'B',
        codeinsee: '50147',
        codes_uic: '87447110',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.13169,
          45.03661,
        ],
      },
      properties: {
        nom: `Coutras`,
        libellecourt: 'COU',
        segment_drg: 'B',
        codeinsee: '33138',
        codes_uic: '87584516',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7036282,
          44.836574,
        ],
      },
      properties: {
        nom: `Couze`,
        libellecourt: 'CZD',
        segment_drg: 'C',
        codeinsee: '24223',
        codes_uic: '87584425',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8294786,
          45.8486737,
        ],
      },
      properties: {
        nom: `Couzon-au-Mont-d'Or`,
        libellecourt: 'KMD',
        segment_drg: 'C',
        codeinsee: '69068',
        codes_uic: '87721241',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.40489,
          49.256625,
        ],
      },
      properties: {
        nom: `Cramoisy`,
        libellecourt: 'CYO',
        segment_drg: 'C',
        codeinsee: '60173',
        codes_uic: '87313544',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2718666,
          44.522951,
        ],
      },
      properties: {
        nom: `Cransac`,
        libellecourt: 'CRZ',
        segment_drg: 'C',
        codeinsee: '12083',
        codes_uic: '87613232',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6811741,
          47.6785079,
        ],
      },
      properties: {
        nom: `Cravant - Bazarnes`,
        libellecourt: 'CBZ',
        segment_drg: 'C',
        codeinsee: '89030',
        codes_uic: '87683649',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7840233,
          46.2461762,
        ],
      },
      properties: {
        nom: `Crêches-sur-Saône`,
        libellecourt: 'KSA',
        segment_drg: 'C',
        codeinsee: '71150',
        codes_uic: '87725713',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.905748,
          48.859391,
        ],
      },
      properties: {
        nom: `Crécy-la-Chapelle`,
        libellecourt: 'CLC',
        segment_drg: 'B',
        codeinsee: '77142',
        codes_uic: '87116772',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4692439,
          49.263757,
        ],
      },
      properties: {
        nom: `Creil`,
        libellecourt: 'CLH',
        segment_drg: 'B',
        codeinsee: '60175',
        codes_uic: '87276006',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8922918,
          45.8038348,
        ],
      },
      properties: {
        nom: `Crépieux la Pape`,
        libellecourt: 'CLP',
        segment_drg: 'C',
        codeinsee: '69286',
        codes_uic: '87723502',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.5167165,
          49.6233401,
        ],
      },
      properties: {
        nom: `Crépy - Couvron`,
        libellecourt: 'CYU',
        segment_drg: 'C',
        codeinsee: '02238',
        codes_uic: '87296152',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8864694,
          49.231235,
        ],
      },
      properties: {
        nom: `Crépy-en-Valois`,
        libellecourt: 'CYV',
        segment_drg: 'B',
        codeinsee: '60176',
        codes_uic: '87271593',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.0160968,
          44.7301546,
        ],
      },
      properties: {
        nom: `Crest`,
        libellecourt: 'CRE',
        segment_drg: 'C',
        codeinsee: '26108',
        codes_uic: '87761783',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4352763,
          48.7715403,
        ],
      },
      properties: {
        nom: `Créteil Pompadour`,
        libellecourt: 'CTP',
        segment_drg: 'B',
        codeinsee: '94028',
        codes_uic: '87608802',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1380315,
          50.6785574,
        ],
      },
      properties: {
        nom: `Croix - Wasquehal`,
        libellecourt: 'CRW',
        segment_drg: 'C',
        codeinsee: '59646',
        codes_uic: '87286716',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.3791261,
          43.2857104,
        ],
      },
      properties: {
        nom: `Croix du Prince`,
        libellecourt: 'XDP',
        segment_drg: 'C',
        codeinsee: '64445',
        codes_uic: '87672600',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1516591,
          50.6872009,
        ],
      },
      properties: {
        nom: `Croix L'Allumette`,
        libellecourt: 'CIX',
        segment_drg: 'C',
        codeinsee: '59163',
        codes_uic: '87281055',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.0196445,
          43.4088317,
        ],
      },
      properties: {
        nom: `Croix Sainte`,
        libellecourt: 'XST',
        segment_drg: 'C',
        codeinsee: '13056',
        codes_uic: '87753491',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.167111,
          43.660465,
        ],
      },
      properties: {
        nom: `Cros de Cagnes`,
        libellecourt: 'CKG',
        segment_drg: 'B',
        codeinsee: '06027',
        codes_uic: '87756338',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3569138,
          49.4037093,
        ],
      },
      properties: {
        nom: `Crouy`,
        libellecourt: 'CRU',
        segment_drg: 'C',
        codeinsee: '02243',
        codes_uic: '87271874',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.063081,
          49.091821,
        ],
      },
      properties: {
        nom: `Crouy-sur-Ourcq`,
        libellecourt: 'CQQ',
        segment_drg: 'B',
        codeinsee: '77148',
        codes_uic: '87116640',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4590937,
          44.9729407,
        ],
      },
      properties: {
        nom: `Cubzac-les-Ponts`,
        libellecourt: 'KBZ',
        segment_drg: 'C',
        codeinsee: '33143',
        codes_uic: '87491266',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0856855,
          43.2364281,
        ],
      },
      properties: {
        nom: `Cuers - Pierrefeu`,
        libellecourt: 'CFU',
        segment_drg: 'C',
        codeinsee: '83049',
        codes_uic: '87755355',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.253301,
          47.0582602,
        ],
      },
      properties: {
        nom: `Cugand`,
        libellecourt: 'KUG',
        segment_drg: 'C',
        codeinsee: '85076',
        codes_uic: '87481457',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7473533,
          50.5219693,
        ],
      },
      properties: {
        nom: `Cuinchy`,
        libellecourt: 'CUH',
        segment_drg: 'C',
        codeinsee: '62262',
        codes_uic: '87342410',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.4432217,
          47.8100902,
        ],
      },
      properties: {
        nom: `Culmont - Chalindrey`,
        libellecourt: 'CYN',
        segment_drg: 'C',
        codeinsee: '52155',
        codes_uic: '87142125',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.778784,
          45.843264,
        ],
      },
      properties: {
        nom: `Culoz`,
        libellecourt: 'CUZ',
        segment_drg: 'B',
        codeinsee: '01138',
        codes_uic: '87741074',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.5330038,
          48.5428546,
        ],
      },
      properties: {
        nom: `Dachstein`,
        libellecourt: 'DCN',
        segment_drg: 'C',
        codeinsee: '67300',
        codes_uic: '87214551',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.4355565,
          48.3216345,
        ],
      },
      properties: {
        nom: `Dambach-la-Ville`,
        libellecourt: 'DMB',
        segment_drg: 'C',
        codeinsee: '67084',
        codes_uic: '87214213',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9733585,
          43.6566194,
        ],
      },
      properties: {
        nom: `Damiatte - Saint-Paul`,
        libellecourt: 'DSP',
        segment_drg: 'C',
        codeinsee: '81078',
        codes_uic: '87615484',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.69887,
          49.03219,
        ],
      },
      properties: {
        nom: `Dammartin - Juilly - Saint-Mard`,
        libellecourt: 'DAM',
        segment_drg: 'B',
        codeinsee: '77420',
        codes_uic: '87271536',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.6087754,
          46.9378397,
        ],
      },
      properties: {
        nom: `Dangé-Saint-Romain`,
        libellecourt: 'DGE',
        segment_drg: 'C',
        codeinsee: '86092',
        codes_uic: '87575126',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.86919,
          47.6175,
        ],
      },
      properties: {
        nom: `Danjoutin`,
        libellecourt: 'DGI',
        segment_drg: 'C',
        codeinsee: '90010',
        codes_uic: '87700146',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.124907,
          47.6275771,
        ],
      },
      properties: {
        nom: `Dannemarie`,
        libellecourt: 'DAN',
        segment_drg: 'C',
        codeinsee: '68068',
        codes_uic: '87182253',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.8738348,
          47.2038599,
        ],
      },
      properties: {
        nom: `Dannemarie - Velesmes`,
        libellecourt: 'DNV',
        segment_drg: 'C',
        codeinsee: '25195',
        codes_uic: '87718312',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.614825,
          50.5759062,
        ],
      },
      properties: {
        nom: `Dannes - Camiers`,
        libellecourt: 'DCQ',
        segment_drg: 'C',
        codeinsee: '62201',
        codes_uic: '87317081',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4590533,
          49.899267,
        ],
      },
      properties: {
        nom: `Daours`,
        libellecourt: 'DAO',
        segment_drg: 'C',
        codeinsee: '80036',
        codes_uic: '87315044',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7613451,
          45.815143,
        ],
      },
      properties: {
        nom: `Dardilly Le Jubin`,
        libellecourt: 'DDJ',
        segment_drg: 'C',
        codeinsee: '69072',
        codes_uic: '87721449',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7600288,
          45.7967409,
        ],
      },
      properties: {
        nom: `Dardilly Les Mouilles`,
        libellecourt: 'DDY',
        segment_drg: 'C',
        codeinsee: '69072',
        codes_uic: '87721480',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.7365537,
          45.14211,
        ],
      },
      properties: {
        nom: `Darsac`,
        libellecourt: 'DAR',
        segment_drg: 'C',
        codeinsee: '43259',
        codes_uic: '87734673',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.050301,
          43.720472,
        ],
      },
      properties: {
        nom: `Dax`,
        libellecourt: 'DAX',
        segment_drg: 'A',
        codeinsee: '40088',
        codes_uic: '87673202',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.467274,
          46.837362,
        ],
      },
      properties: {
        nom: `Decize`,
        libellecourt: 'DZE',
        segment_drg: 'C',
        codeinsee: '58095',
        codes_uic: '87696484',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3400861,
          44.6534974,
        ],
      },
      properties: {
        nom: `Dégagnac`,
        libellecourt: 'DEG',
        segment_drg: 'C',
        codeinsee: '46087',
        codes_uic: '87613174',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.00962,
          47.50593,
        ],
      },
      properties: {
        nom: `Delle`,
        libellecourt: 'DEL',
        segment_drg: 'C',
        codeinsee: '90033',
        codes_uic: '87184440',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.199733,
          47.2925132,
        ],
      },
      properties: {
        nom: `Deluz`,
        libellecourt: 'DLZ',
        segment_drg: 'C',
        codeinsee: '25197',
        codes_uic: '87718429',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.388699,
          50.3345415,
        ],
      },
      properties: {
        nom: `Denain`,
        libellecourt: 'DEN',
        segment_drg: 'C',
        codeinsee: '59172',
        codes_uic: '87343459',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6918473,
          49.7025404,
        ],
      },
      properties: {
        nom: `Dercy - Froidmont`,
        libellecourt: 'DER',
        segment_drg: 'C',
        codeinsee: '02261',
        codes_uic: '87297143',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.4652459,
          48.7518969,
        ],
      },
      properties: {
        nom: `Dettwiller`,
        libellecourt: 'DEE',
        segment_drg: 'B',
        codeinsee: '67089',
        codes_uic: '87212183',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.33785,
          48.97589,
        ],
      },
      properties: {
        nom: `Deuil - Montmagny`,
        libellecourt: 'DEU',
        segment_drg: 'B',
        codeinsee: '95197',
        codes_uic: '87276345',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9933077,
          50.7159172,
        ],
      },
      properties: {
        nom: `Deûlémont`,
        libellecourt: 'DLO',
        segment_drg: 'C',
        codeinsee: '59482',
        codes_uic: '87287185',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7072062,
          49.8796028,
        ],
      },
      properties: {
        nom: `Deville`,
        libellecourt: 'DVI',
        segment_drg: 'C',
        codeinsee: '08139',
        codes_uic: '87172064',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1264922,
          48.3975653,
        ],
      },
      properties: {
        nom: `Diarville`,
        libellecourt: 'DVL',
        segment_drg: 'C',
        codeinsee: '54268',
        codes_uic: '87141648',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3632053,
          44.7582549,
        ],
      },
      properties: {
        nom: `Die`,
        libellecourt: 'DIE',
        segment_drg: 'C',
        codeinsee: '26113',
        codes_uic: '87761841',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.18529,
          48.9405,
        ],
      },
      properties: {
        nom: `Diemeringen`,
        libellecourt: 'DRI',
        segment_drg: 'C',
        codeinsee: '67095',
        codes_uic: '87215665',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.081133,
          49.921788,
        ],
      },
      properties: {
        nom: `Dieppe`,
        libellecourt: 'DEV',
        segment_drg: 'B',
        codeinsee: '76217',
        codes_uic: '87415018',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.071489,
          48.843367,
        ],
      },
      properties: {
        nom: `Dieulouard`,
        libellecourt: 'DID',
        segment_drg: 'C',
        codeinsee: '54157',
        codes_uic: '87141812',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2760011,
          43.8654687,
        ],
      },
      properties: {
        nom: `Dieupentale`,
        libellecourt: 'DIP',
        segment_drg: 'C',
        codeinsee: '82048',
        codes_uic: '87611681',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9876537,
          46.4851604,
        ],
      },
      properties: {
        nom: `Digoin`,
        libellecourt: 'DIG',
        segment_drg: 'C',
        codeinsee: '71176',
        codes_uic: '87694695',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.027208,
          47.32337,
        ],
      },
      properties: {
        nom: `Dijon`,
        libellecourt: 'DJV',
        segment_drg: 'A',
        codeinsee: '21231',
        codes_uic: '87713040',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.054872,
          47.322806,
        ],
      },
      properties: {
        nom: `Dijon Porte Neuve`,
        libellecourt: 'DJP',
        segment_drg: 'C',
        codeinsee: '21231',
        codes_uic: '87713008',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.053542,
          48.456764,
        ],
      },
      properties: {
        nom: `Dinan`,
        libellecourt: 'DIN',
        segment_drg: 'C',
        codeinsee: '22050',
        codes_uic: '87478164',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.6859729,
          48.3507382,
        ],
      },
      properties: {
        nom: `Dingé`,
        libellecourt: 'DNE',
        segment_drg: 'C',
        codeinsee: '35094',
        codes_uic: '87478040',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -4.2855034,
          48.3926343,
        ],
      },
      properties: {
        nom: `Dirinon`,
        libellecourt: 'DIR',
        segment_drg: 'C',
        codeinsee: '29140',
        codes_uic: '87474015',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.4210161,
          46.703544,
        ],
      },
      properties: {
        nom: `Dissay`,
        libellecourt: 'DIF',
        segment_drg: 'C',
        codeinsee: '86095',
        codes_uic: '87575191',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.1074996,
          49.2864776,
        ],
      },
      properties: {
        nom: `Dives-sur-Mer - Cabourg`,
        libellecourt: 'DVQ',
        segment_drg: 'C',
        codeinsee: '14225',
        codes_uic: '87444414',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.1008455,
          49.2910882,
        ],
      },
      properties: {
        nom: `Dives-sur-Mer Port Guillaume`,
        libellecourt: 'DSU',
        segment_drg: 'C',
        codeinsee: '14225',
        codes_uic: '87337378',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.6104793,
          48.1436134,
        ],
      },
      properties: {
        nom: `Docelles - Cheniménil`,
        libellecourt: 'DOC',
        segment_drg: 'C',
        codeinsee: '88101',
        codes_uic: '87144030',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.750536,
          48.54425,
        ],
      },
      properties: {
        nom: `Dol-de-Bretagne`,
        libellecourt: 'DOL',
        segment_drg: 'B',
        codeinsee: '35095',
        codes_uic: '87478073',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.488105,
          47.096084,
        ],
      },
      properties: {
        nom: `Dole`,
        libellecourt: 'DLE',
        segment_drg: 'B',
        codeinsee: '39198',
        codes_uic: '87713412',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.343478,
          48.623275,
        ],
      },
      properties: {
        nom: `Dombasle-sur-Meurthe`,
        libellecourt: 'DBS',
        segment_drg: 'B',
        codeinsee: '54159',
        codes_uic: '87141119',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.5977462,
          46.7627809,
        ],
      },
      properties: {
        nom: `Domblans - Voiteur`,
        libellecourt: 'DBV',
        segment_drg: 'C',
        codeinsee: '39199',
        codes_uic: '87718213',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.0262592,
          48.1076766,
        ],
      },
      properties: {
        nom: `Domfront-en-Champagne`,
        libellecourt: 'DFO',
        segment_drg: 'C',
        codeinsee: '72119',
        codes_uic: '87396200',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7344831,
          45.8397811,
        ],
      },
      properties: {
        nom: `Dommartin - Lissieu`,
        libellecourt: 'DLU',
        segment_drg: 'C',
        codeinsee: '69076',
        codes_uic: '87721738',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3926625,
          49.7996523,
        ],
      },
      properties: {
        nom: `Dommartin - Remiencourt`,
        libellecourt: 'DMM',
        segment_drg: 'C',
        codeinsee: '80246',
        codes_uic: '87316109',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.33746,
          49.03268,
        ],
      },
      properties: {
        nom: `Domont`,
        libellecourt: 'DMO',
        segment_drg: 'B',
        codeinsee: '95199',
        codes_uic: '87276436',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6749309,
          46.5263166,
        ],
      },
      properties: {
        nom: `Dompierre Sept Fons`,
        libellecourt: 'DOP',
        segment_drg: 'C',
        codeinsee: '03102',
        codes_uic: '87696427',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.871144,
          50.146144,
        ],
      },
      properties: {
        nom: `Dompierre-sur-Helpe`,
        libellecourt: 'DMR',
        segment_drg: 'C',
        codeinsee: '59177',
        codes_uic: '87295774',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.91458,
          50.55176,
        ],
      },
      properties: {
        nom: `Don - Sainghin`,
        libellecourt: 'DON',
        segment_drg: 'B',
        codeinsee: '59524',
        codes_uic: '87286435',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8747529,
          49.6981267,
        ],
      },
      properties: {
        nom: `Donchery`,
        libellecourt: 'DEY',
        segment_drg: 'C',
        codeinsee: '08142',
        codes_uic: '87172239',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.07236,
          47.3151,
        ],
      },
      properties: {
        nom: `Donges`,
        libellecourt: 'DNG',
        segment_drg: 'C',
        codeinsee: '44052',
        codes_uic: '87481721',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1482245,
          48.3658544,
        ],
      },
      properties: {
        nom: `Donjeux`,
        libellecourt: 'DNJ',
        segment_drg: 'C',
        codeinsee: '52175',
        codes_uic: '87142273',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7046262,
          44.4433646,
        ],
      },
      properties: {
        nom: `Donzère`,
        libellecourt: 'DOE',
        segment_drg: 'C',
        codeinsee: '26116',
        codes_uic: '87764290',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7628787,
          48.1471796,
        ],
      },
      properties: {
        nom: `Dordives`,
        libellecourt: 'DDI',
        segment_drg: 'C',
        codeinsee: '45127',
        codes_uic: '87684233',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.4930546,
          48.5249915,
        ],
      },
      properties: {
        nom: `Dorlisheim`,
        libellecourt: 'DHM',
        segment_drg: 'C',
        codeinsee: '67101',
        codes_uic: '87214338',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.641709,
          49.0791611,
        ],
      },
      properties: {
        nom: `Dormans`,
        libellecourt: 'DOR',
        segment_drg: 'C',
        codeinsee: '51217',
        codes_uic: '87171512',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.089986,
          50.371677,
        ],
      },
      properties: {
        nom: `Douai`,
        libellecourt: 'DOI',
        segment_drg: 'B',
        codeinsee: '59178',
        codes_uic: '87345009',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.009643,
          48.533466,
        ],
      },
      properties: {
        nom: `Dourdan`,
        libellecourt: 'DHY',
        segment_drg: 'B',
        codeinsee: '91200',
        codes_uic: '87545525',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.994908,
          48.535314,
        ],
      },
      properties: {
        nom: `Dourdan La Forêt`,
        libellecourt: 'DAQ',
        segment_drg: 'B',
        codeinsee: '91200',
        codes_uic: '87540179',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.98697,
          50.43192,
        ],
      },
      properties: {
        nom: `Dourges`,
        libellecourt: 'DOU',
        segment_drg: 'B',
        codeinsee: '62274',
        codes_uic: '87345165',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.45497,
          48.93298,
        ],
      },
      properties: {
        nom: `Drancy`,
        libellecourt: 'DRN',
        segment_drg: 'B',
        codeinsee: '93029',
        codes_uic: '87271403',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3168739,
          43.7599599,
        ],
      },
      properties: {
        nom: `Drap - Cantaron`,
        libellecourt: 'DRA',
        segment_drg: 'C',
        codeinsee: '06031',
        codes_uic: '87756775',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.0503661,
          47.4817568,
        ],
      },
      properties: {
        nom: `Drefféac`,
        libellecourt: 'DRF',
        segment_drg: 'C',
        codeinsee: '44053',
        codes_uic: '87476770',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.23091,
          49.91444,
        ],
      },
      properties: {
        nom: `Dreuil-lès-Amiens`,
        libellecourt: 'DAS',
        segment_drg: 'C',
        codeinsee: '80256',
        codes_uic: '87316075',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3701604,
          48.7314561,
        ],
      },
      properties: {
        nom: `Dreux`,
        libellecourt: 'DRX',
        segment_drg: 'B',
        codeinsee: '28134',
        codes_uic: '87393488',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.9478463,
          48.7659128,
        ],
      },
      properties: {
        nom: `Drusenheim`,
        libellecourt: 'DRS',
        segment_drg: 'C',
        codeinsee: '67106',
        codes_uic: '87212357',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.5354805,
          47.3070191,
        ],
      },
      properties: {
        nom: `Druye`,
        libellecourt: 'DRY',
        segment_drg: 'C',
        codeinsee: '37099',
        codes_uic: '87571612',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4115,
          48.9439,
        ],
      },
      properties: {
        nom: `Dugny - La Courneuve T11`,
        libellecourt: 'DLC',
        segment_drg: 'B',
        codeinsee: '93027',
        codes_uic: '87697342',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.368961,
          51.03047,
        ],
      },
      properties: {
        nom: `Dunkerque`,
        libellecourt: 'DKQ',
        segment_drg: 'B',
        codeinsee: '59183',
        codes_uic: '87281006',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.5868091,
          48.5439674,
        ],
      },
      properties: {
        nom: `Duppigheim`,
        libellecourt: 'DUP',
        segment_drg: 'C',
        codeinsee: '67108',
        codes_uic: '87214536',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.048557,
          45.7947707,
        ],
      },
      properties: {
        nom: `Durtol - Nohanent`,
        libellecourt: 'DUR',
        segment_drg: 'C',
        codeinsee: '63141',
        codes_uic: '87641449',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.5661529,
          48.5453531,
        ],
      },
      properties: {
        nom: `Duttlenheim`,
        libellecourt: 'DTM',
        segment_drg: 'B',
        codeinsee: '67080',
        codes_uic: '87214544',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.409148,
          50.7306459,
        ],
      },
      properties: {
        nom: `Ebblinghem`,
        libellecourt: 'EBB',
        segment_drg: 'C',
        codeinsee: '59184',
        codes_uic: '87281469',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.494471,
          48.3099953,
        ],
      },
      properties: {
        nom: `Ebersheim`,
        libellecourt: 'EBH',
        segment_drg: 'C',
        codeinsee: '67115',
        codes_uic: '87214106',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.718943,
          45.153022,
        ],
      },
      properties: {
        nom: `Échirolles`,
        libellecourt: 'EHR',
        segment_drg: 'B',
        codeinsee: '38151',
        codes_uic: '87725895',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9944745,
          47.2749834,
        ],
      },
      properties: {
        nom: `École-Valentin`,
        libellecourt: 'ECV',
        segment_drg: 'C',
        codeinsee: '25212',
        codes_uic: '87710731',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2691867,
          47.8246286,
        ],
      },
      properties: {
        nom: `Écommoy`,
        libellecourt: 'ECO',
        segment_drg: 'C',
        codeinsee: '72124',
        codes_uic: '87396564',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.1209574,
          48.7151009,
        ],
      },
      properties: {
        nom: `Écouché`,
        libellecourt: 'ECC',
        segment_drg: 'C',
        codeinsee: '61153',
        codes_uic: '87444547',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.36325,
          49.02273,
        ],
      },
      properties: {
        nom: `Écouen - Ézanville`,
        libellecourt: 'ECZ',
        segment_drg: 'B',
        codeinsee: '95229',
        codes_uic: '87276394',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7795238,
          45.7657162,
        ],
      },
      properties: {
        nom: `Ecully - Tassin`,
        libellecourt: 'ECY',
        segment_drg: 'B',
        codeinsee: '69244',
        codes_uic: '87721506',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0651243,
          45.4023816,
        ],
      },
      properties: {
        nom: `Égletons`,
        libellecourt: 'EGL',
        segment_drg: 'C',
        codeinsee: '19073',
        codes_uic: '87594168',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.222138,
          48.582364,
        ],
      },
      properties: {
        nom: `Égly`,
        libellecourt: 'ELY',
        segment_drg: 'B',
        codeinsee: '91207',
        codes_uic: '87545475',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5521707,
          46.4397694,
        ],
      },
      properties: {
        nom: `Éguzon-Chantôme`,
        libellecourt: 'EGU',
        segment_drg: 'C',
        codeinsee: '36070',
        codes_uic: '87597153',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.4495524,
          48.3824829,
        ],
      },
      properties: {
        nom: `Eichhoffen`,
        libellecourt: 'ECF',
        segment_drg: 'C',
        codeinsee: '67120',
        codes_uic: '87214239',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3932959,
          48.5034859,
        ],
      },
      properties: {
        nom: `Einvaux`,
        libellecourt: 'EIN',
        segment_drg: 'C',
        codeinsee: '54175',
        codes_uic: '87141200',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.00993,
          49.302766,
        ],
      },
      properties: {
        nom: `Elbeuf - Saint-Aubin`,
        libellecourt: 'ESA',
        segment_drg: 'B',
        codeinsee: '76561',
        codes_uic: '87411173',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9635851,
          42.5971138,
        ],
      },
      properties: {
        nom: `Elne`,
        libellecourt: 'ELN',
        segment_drg: 'C',
        codeinsee: '66065',
        codes_uic: '87784207',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.6001593,
          48.087067,
        ],
      },
      properties: {
        nom: `Éloyes`,
        libellecourt: 'ELS',
        segment_drg: 'C',
        codeinsee: '88158',
        codes_uic: '87144436',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.496773,
          44.567008,
        ],
      },
      properties: {
        nom: `Embrun`,
        libellecourt: 'EMB',
        segment_drg: 'C',
        codeinsee: '05046',
        codes_uic: '87763466',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.618004,
          48.806034,
        ],
      },
      properties: {
        nom: `Émerainville - Pontault-Combault`,
        libellecourt: 'EMR',
        segment_drg: 'B',
        codeinsee: '77169',
        codes_uic: '87116046',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.30699,
          48.97309,
        ],
      },
      properties: {
        nom: `Enghien-les-Bains`,
        libellecourt: 'ENK',
        segment_drg: 'B',
        codeinsee: '95210',
        codes_uic: '87276022',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1586612,
          50.5492981,
        ],
      },
      properties: {
        nom: `Ennevelin`,
        libellecourt: 'ENN',
        segment_drg: 'C',
        codeinsee: '59197',
        codes_uic: '87287276',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9226971,
          44.0054278,
        ],
      },
      properties: {
        nom: `Entraigues-sur-la-Sorgue`,
        libellecourt: 'ENR',
        segment_drg: 'C',
        codeinsee: '84043',
        codes_uic: '87765826',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.62794,
          48.54699,
        ],
      },
      properties: {
        nom: `Entzheim Aéroport`,
        libellecourt: 'ENZ',
        segment_drg: 'B',
        codeinsee: '67124',
        codes_uic: '87214528',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2357576,
          46.2254951,
        ],
      },
      properties: {
        nom: `Épanvilliers`,
        libellecourt: 'EPI',
        segment_drg: 'C',
        codeinsee: '86029',
        codes_uic: '87575357',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.959798,
          49.046289,
        ],
      },
      properties: {
        nom: `Épernay`,
        libellecourt: 'EPR',
        segment_drg: 'B',
        codeinsee: '51230',
        codes_uic: '87171553',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6812578,
          48.6052471,
        ],
      },
      properties: {
        nom: `Épernon`,
        libellecourt: 'EPN',
        segment_drg: 'B',
        codeinsee: '28140',
        codes_uic: '87394114',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.4504053,
          48.3637643,
        ],
      },
      properties: {
        nom: `Epfig`,
        libellecourt: 'EFG',
        segment_drg: 'C',
        codeinsee: '67125',
        codes_uic: '87214221',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.292521,
          45.457027,
        ],
      },
      properties: {
        nom: `Épierre - Saint-Léger`,
        libellecourt: 'MEE',
        segment_drg: 'C',
        codeinsee: '73109',
        codes_uic: '87741280',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.441787,
          48.178005,
        ],
      },
      properties: {
        nom: `Épinal`,
        libellecourt: 'ELP',
        segment_drg: 'B',
        codeinsee: '88160',
        codes_uic: '87144006',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.32865,
          48.95838,
        ],
      },
      properties: {
        nom: `Épinay - Villetaneuse`,
        libellecourt: 'EPV',
        segment_drg: 'B',
        codeinsee: '93031',
        codes_uic: '87271122',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.33182,
          48.66952,
        ],
      },
      properties: {
        nom: `Épinay-sur-Orge`,
        libellecourt: 'EYO',
        segment_drg: 'B',
        codeinsee: '91216',
        codes_uic: '87545228',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3026142,
          48.9542084,
        ],
      },
      properties: {
        nom: `Épinay-sur-Seine`,
        libellecourt: 'EYS',
        segment_drg: 'B',
        codeinsee: '93031',
        codes_uic: '87271148',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1225973,
          49.0549329,
        ],
      },
      properties: {
        nom: `Épluches`,
        libellecourt: 'EPL',
        segment_drg: 'C',
        codeinsee: '95572',
        codes_uic: '87276147',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8085932,
          48.9631225,
        ],
      },
      properties: {
        nom: `Épône - Mézières`,
        libellecourt: 'EPO',
        segment_drg: 'B',
        codeinsee: '78217',
        codes_uic: '87386763',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2236662,
          49.563814,
        ],
      },
      properties: {
        nom: `Épouville`,
        libellecourt: 'EPU',
        segment_drg: 'C',
        codeinsee: '76238',
        codes_uic: '87413732',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.09104,
          49.01824,
        ],
      },
      properties: {
        nom: `Éragny - Neuville`,
        libellecourt: 'ERA',
        segment_drg: 'B',
        codeinsee: '95218',
        codes_uic: '87381418',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.544552,
          47.282902,
        ],
      },
      properties: {
        nom: `Erdre Active`,
        libellecourt: 'ERD',
        segment_drg: 'C',
        codeinsee: '44035',
        codes_uic: '87590356',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.27176,
          48.98032,
        ],
      },
      properties: {
        nom: `Ermont - Eaubonne`,
        libellecourt: 'ERT',
        segment_drg: 'B;B',
        codeinsee: '95219',
        codes_uic: '87534131;87276055',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.26323,
          48.9898,
        ],
      },
      properties: {
        nom: `Ermont Halte`,
        libellecourt: 'ERM',
        segment_drg: 'B',
        codeinsee: '95219',
        codes_uic: '87276584',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0290375,
          42.442777,
        ],
      },
      properties: {
        nom: `Err`,
        libellecourt: 'ERR',
        segment_drg: 'C',
        codeinsee: '66067',
        codes_uic: '87784843',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.6387869,
          48.4229857,
        ],
      },
      properties: {
        nom: `Erstein`,
        libellecourt: 'EEN',
        segment_drg: 'B',
        codeinsee: '67130',
        codes_uic: '87214148',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.81059946,
          48.90314191,
        ],
      },
      properties: {
        nom: `Esbly`,
        libellecourt: 'EYA',
        segment_drg: 'B',
        codeinsee: '77171',
        codes_uic: '87116327',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5422774,
          43.5170958,
        ],
      },
      properties: {
        nom: `Escalquens`,
        libellecourt: 'EQA',
        segment_drg: 'C',
        codeinsee: '31169',
        codes_uic: '87611707',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2754949,
          50.1918249,
        ],
      },
      properties: {
        nom: `Escaudœuvres`,
        libellecourt: 'EDV',
        segment_drg: 'C',
        codeinsee: '59206',
        codes_uic: '87345496',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1708125,
          49.2125205,
        ],
      },
      properties: {
        nom: `Esches`,
        libellecourt: 'ESC',
        segment_drg: 'C',
        codeinsee: '60218',
        codes_uic: '87272096',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4121536,
          50.8894369,
        ],
      },
      properties: {
        nom: `Esquelbecq`,
        libellecourt: 'ESQ',
        segment_drg: 'B',
        codeinsee: '59210',
        codes_uic: '87281113',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.463701,
          48.606095,
        ],
      },
      properties: {
        nom: `Essonnes Robinson`,
        libellecourt: 'ESO',
        segment_drg: 'B',
        codeinsee: '91174',
        codes_uic: '87681601',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0179071,
          42.4632434,
        ],
      },
      properties: {
        nom: `Estavar`,
        libellecourt: 'EAA',
        segment_drg: 'C',
        codeinsee: '66072',
        codes_uic: '87784827',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.642402,
          49.4382161,
        ],
      },
      properties: {
        nom: `Estrées-Saint-Denis`,
        libellecourt: 'ESD',
        segment_drg: 'C',
        codeinsee: '60223',
        codes_uic: '87313387',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.868273,
          45.540285,
        ],
      },
      properties: {
        nom: `Estressin`,
        libellecourt: 'ESN',
        segment_drg: 'C',
        codeinsee: '38544',
        codes_uic: '87722579',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7816519,
          47.2841016,
        ],
      },
      properties: {
        nom: `Esvres sur Indre`,
        libellecourt: 'ESV',
        segment_drg: 'C',
        codeinsee: '37104',
        codes_uic: '87571422',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.6398079,
          49.2074907,
        ],
      },
      properties: {
        nom: `Étain`,
        libellecourt: 'ETM',
        segment_drg: 'C',
        codeinsee: '55181',
        codes_uic: '87175794',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3310234,
          49.5612151,
        ],
      },
      properties: {
        nom: `Étainhus - Saint-Romain`,
        libellecourt: 'EAH',
        segment_drg: 'C',
        codeinsee: '76250',
        codes_uic: '87413328',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2706173,
          47.155884,
        ],
      },
      properties: {
        nom: `Étalans`,
        libellecourt: 'EAS',
        segment_drg: 'C',
        codeinsee: '25222',
        codes_uic: '87718536',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.159468,
          48.436661,
        ],
      },
      properties: {
        nom: `Étampes`,
        libellecourt: 'ETP',
        segment_drg: 'B',
        codeinsee: '91223',
        codes_uic: '87545137',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.1838415,
          46.8679082,
        ],
      },
      properties: {
        nom: `Étang-sur-Arroux`,
        libellecourt: 'ETG',
        segment_drg: 'C',
        codeinsee: '71192',
        codes_uic: '87694141',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.64231,
          50.51686,
        ],
      },
      properties: {
        nom: `Étaples - Le Touquet`,
        libellecourt: 'ETA',
        segment_drg: 'B',
        codeinsee: '62318',
        codes_uic: '87317065',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2904186,
          48.1386835,
        ],
      },
      properties: {
        nom: `Étigny - Véron`,
        libellecourt: 'EYV',
        segment_drg: 'C',
        codeinsee: '89160',
        codes_uic: '87683201',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8769607,
          48.3671987,
        ],
      },
      properties: {
        nom: `Étival-Clairefontaine`,
        libellecourt: 'ETL',
        segment_drg: 'C',
        codeinsee: '88165',
        codes_uic: '87144642',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.194323,
          48.493727,
        ],
      },
      properties: {
        nom: `Étréchy`,
        libellecourt: 'ETY',
        segment_drg: 'B',
        codeinsee: '91226',
        codes_uic: '87545145',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4608993,
          47.6567082,
        ],
      },
      properties: {
        nom: `Étriché - Châteauneuf`,
        libellecourt: 'EEF',
        segment_drg: 'C',
        codeinsee: '49132',
        codes_uic: '87484154',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.416837,
          50.0541988,
        ],
      },
      properties: {
        nom: `Eu`,
        libellecourt: 'EUW',
        segment_drg: 'C',
        codeinsee: '76255',
        codes_uic: '87317537',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.577457,
          46.397915,
        ],
      },
      properties: {
        nom: `Évian-les-Bains`,
        libellecourt: 'EVI',
        segment_drg: 'B',
        codeinsee: '74119',
        codes_uic: '87745679',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.149629,
          49.018748,
        ],
      },
      properties: {
        nom: `Évreux Normandie`,
        libellecourt: 'EVX',
        segment_drg: 'A',
        codeinsee: '27229',
        codes_uic: '87387001',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.397338,
          48.155501,
        ],
      },
      properties: {
        nom: `Évron`,
        libellecourt: 'EVN',
        segment_drg: 'B',
        codeinsee: '53097',
        codes_uic: '87478552',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.45209,
          48.63442,
        ],
      },
      properties: {
        nom: `Évry Val de Seine`,
        libellecourt: 'EVR',
        segment_drg: 'B',
        codeinsee: '91228',
        codes_uic: '87681361',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.428581,
          48.625507,
        ],
      },
      properties: {
        nom: `Évry-Courcouronnes`,
        libellecourt: 'EVC',
        segment_drg: 'B',
        codeinsee: '91228',
        codes_uic: '87681387',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7412237,
          45.7397876,
        ],
      },
      properties: {
        nom: `Eymoutiers Vassivière`,
        libellecourt: 'EYM',
        segment_drg: 'C',
        codeinsee: '87064',
        codes_uic: '87592121',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3568031,
          43.7221842,
        ],
      },
      properties: {
        nom: `Èze`,
        libellecourt: 'EZZ',
        segment_drg: 'C',
        codeinsee: '06059',
        codes_uic: '87756387',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8310408,
          50.357641,
        ],
      },
      properties: {
        nom: `Farbus`,
        libellecourt: 'FAU',
        segment_drg: 'C',
        codeinsee: '62324',
        codes_uic: '87342527',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8618926,
          49.1181603,
        ],
      },
      properties: {
        nom: `Farébersviller`,
        libellecourt: 'FBR',
        segment_drg: 'C',
        codeinsee: '57207',
        codes_uic: '87193516',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.993109,
          48.808494,
        ],
      },
      properties: {
        nom: `Faremoutiers - Pommeuse`,
        libellecourt: 'FMP',
        segment_drg: 'B',
        codeinsee: '77371',
        codes_uic: '87116277',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9080815,
          49.0878773,
        ],
      },
      properties: {
        nom: `Farschviller`,
        libellecourt: 'FWR',
        segment_drg: 'C',
        codeinsee: '57208',
        codes_uic: '87193524',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7403794,
          47.3669948,
        ],
      },
      properties: {
        nom: `Faubourg d'Orléans`,
        libellecourt: 'FBL',
        segment_drg: 'B',
        codeinsee: '41194',
        codes_uic: '87576173',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.6039774,
          49.0453391,
        ],
      },
      properties: {
        nom: `Faulquemont`,
        libellecourt: 'FAQ',
        segment_drg: 'B',
        codeinsee: '57209',
        codes_uic: '87193359',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.375287,
          49.759277,
        ],
      },
      properties: {
        nom: `Fécamp`,
        libellecourt: 'FEC',
        segment_drg: 'B',
        codeinsee: '76259',
        codes_uic: '87413542',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.6724806,
          48.4905892,
        ],
      },
      properties: {
        nom: `Fegersheim - Lipsheim`,
        libellecourt: 'FHM',
        segment_drg: 'C',
        codeinsee: '67268',
        codes_uic: '87212266',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9871347,
          47.8975893,
        ],
      },
      properties: {
        nom: `Fellering`,
        libellecourt: 'FRG',
        segment_drg: 'C',
        codeinsee: '68089',
        codes_uic: '87182626',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.169543,
          45.8864021,
        ],
      },
      properties: {
        nom: `Felletin`,
        libellecourt: 'FEL',
        segment_drg: 'C',
        codeinsee: '23079',
        codes_uic: '87597849',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4018103,
          43.6840517,
        ],
      },
      properties: {
        nom: `Fenouillet - Saint-Alban`,
        libellecourt: 'FEX',
        segment_drg: 'C',
        codeinsee: '31182',
        codes_uic: '87611962',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7266156,
          50.0234644,
        ],
      },
      properties: {
        nom: `Fépin`,
        libellecourt: 'FEP',
        segment_drg: 'C',
        codeinsee: '08166',
        codes_uic: '87172874',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7726332,
          48.0964767,
        ],
      },
      properties: {
        nom: `Ferrières - Fontenay`,
        libellecourt: 'FFY',
        segment_drg: 'C',
        codeinsee: '45148',
        codes_uic: '87684241',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8305169,
          49.6545751,
        ],
      },
      properties: {
        nom: `Feuquières - Broquiers`,
        libellecourt: 'FBS',
        segment_drg: 'C',
        codeinsee: '60233',
        codes_uic: '87313742',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5890574,
          50.0632646,
        ],
      },
      properties: {
        nom: `Feuquières - Fressenneville`,
        libellecourt: 'FEF',
        segment_drg: 'C',
        codeinsee: '80308',
        codes_uic: '87317503',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.230573,
          45.744156,
        ],
      },
      properties: {
        nom: `Feurs`,
        libellecourt: 'FEU',
        segment_drg: 'B',
        codeinsee: '42094',
        codes_uic: '87726877',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8531349,
          45.6658584,
        ],
      },
      properties: {
        nom: `Feyzin`,
        libellecourt: 'FEY',
        segment_drg: 'C',
        codeinsee: '69276',
        codes_uic: '87722538',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.037355,
          44.603515,
        ],
      },
      properties: {
        nom: `Figeac`,
        libellecourt: 'FIG',
        segment_drg: 'B',
        codeinsee: '46102',
        codes_uic: '87613091',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.28643,
          45.391625,
        ],
      },
      properties: {
        nom: `Firminy`,
        libellecourt: 'FNY',
        segment_drg: 'B',
        codeinsee: '42095',
        codes_uic: '87726729',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.68213,
          49.310665,
        ],
      },
      properties: {
        nom: `Fismes`,
        libellecourt: 'FIO',
        segment_drg: 'B',
        codeinsee: '51250',
        codes_uic: '87171330',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1905076,
          49.7187375,
        ],
      },
      properties: {
        nom: `Flavy-le-Martel`,
        libellecourt: 'FAM',
        segment_drg: 'C',
        codeinsee: '02315',
        codes_uic: '87296871',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3044703,
          47.6986924,
        ],
      },
      properties: {
        nom: `Flaxlanden`,
        libellecourt: 'FXL',
        segment_drg: 'C',
        codeinsee: '68384',
        codes_uic: '87181040',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.573216,
          48.744785,
        ],
      },
      properties: {
        nom: `Flers`,
        libellecourt: 'FLS',
        segment_drg: 'C',
        codeinsee: '61169',
        codes_uic: '87448001',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.6603815,
          45.8449944,
        ],
      },
      properties: {
        nom: `Fleurieux-sur-l'Arbresle`,
        libellecourt: 'FSL',
        segment_drg: 'C',
        codeinsee: '69086',
        codes_uic: '87721563',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8840722,
          46.4509279,
        ],
      },
      properties: {
        nom: `Fleurville - Pont-de-Vaux`,
        libellecourt: 'FLV',
        segment_drg: 'C',
        codeinsee: '71591',
        codes_uic: '87725663',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6149926,
          47.3630583,
        ],
      },
      properties: {
        nom: `Flez-Cuzy - Tannay`,
        libellecourt: 'FEZ',
        segment_drg: 'C',
        codeinsee: '58286',
        codes_uic: '87696633',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1625062,
          47.1756905,
        ],
      },
      properties: {
        nom: `Foëcy`,
        libellecourt: 'FCY',
        segment_drg: 'C',
        codeinsee: '18096',
        codes_uic: '87576108',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.607147,
          42.969746,
        ],
      },
      properties: {
        nom: `Foix`,
        libellecourt: 'FXE',
        segment_drg: 'B',
        codeinsee: '09122',
        codes_uic: '87611616',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.4072231,
          48.8299461,
        ],
      },
      properties: {
        nom: `Folligny`,
        libellecourt: 'FOL',
        segment_drg: 'C',
        codeinsee: '50188',
        codes_uic: '87447649',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2066687,
          43.9073195,
        ],
      },
      properties: {
        nom: `Fons - Saint-Mamert`,
        libellecourt: 'FMS',
        segment_drg: 'C',
        codeinsee: '30112',
        codes_uic: '87775379',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0383917,
          42.4912317,
        ],
      },
      properties: {
        nom: `Font-Romeu-Odeillo-Via`,
        libellecourt: 'FRM',
        segment_drg: 'C',
        codeinsee: '66124',
        codes_uic: '87784819',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7514043,
          48.4871358,
        ],
      },
      properties: {
        nom: `Fontaine-le-Port`,
        libellecourt: 'FPO',
        segment_drg: 'C',
        codeinsee: '77188',
        codes_uic: '87682427',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.72634,
          48.416371,
        ],
      },
      properties: {
        nom: `Fontainebleau - Avon`,
        libellecourt: 'FON',
        segment_drg: 'B',
        codeinsee: '77014',
        codes_uic: '87682211',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7750693,
          46.8512109,
        ],
      },
      properties: {
        nom: `Fontaines - Mercurey`,
        libellecourt: 'FAE',
        segment_drg: 'C',
        codeinsee: '71202',
        codes_uic: '87713586',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.5516262,
          43.9966378,
        ],
      },
      properties: {
        nom: `Fontan - Saorge`,
        libellecourt: 'FTO',
        segment_drg: 'C',
        codeinsee: '06062',
        codes_uic: '87756858',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0404603,
          48.8074032,
        ],
      },
      properties: {
        nom: `Fontenay-le-Fleury`,
        libellecourt: 'FAF',
        segment_drg: 'B',
        codeinsee: '78242',
        codes_uic: '87393405',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9803654,
          48.711721,
        ],
      },
      properties: {
        nom: `Fontenoy-sur-Moselle`,
        libellecourt: 'FBE',
        segment_drg: 'C',
        codeinsee: '54202',
        codes_uic: '87141051',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1886585,
          42.5138062,
        ],
      },
      properties: {
        nom: `Fontpédrouse`,
        libellecourt: 'FTB',
        segment_drg: 'C',
        codeinsee: '66080',
        codes_uic: '87784769',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9013184,
          49.1892278,
        ],
      },
      properties: {
        nom: `Forbach`,
        libellecourt: 'FOB',
        segment_drg: 'B',
        codeinsee: '57227',
        codes_uic: '87193003',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7229081,
          49.6542178,
        ],
      },
      properties: {
        nom: `Formerie`,
        libellecourt: 'FMR',
        segment_drg: 'C',
        codeinsee: '60245',
        codes_uic: '87313833',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4069449,
          46.2345203,
        ],
      },
      properties: {
        nom: `Fors`,
        libellecourt: 'FOW',
        segment_drg: 'C',
        codeinsee: '79125',
        codes_uic: '87485326',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.974579,
          43.428029,
        ],
      },
      properties: {
        nom: `Fos-sur-Mer`,
        libellecourt: 'FOS',
        segment_drg: 'C',
        codeinsee: '13077',
        codes_uic: '87753442',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.5969601,
          49.608289,
        ],
      },
      properties: {
        nom: `Foucart - Alvimare`,
        libellecourt: 'FTA',
        segment_drg: 'C',
        codeinsee: '76279',
        codes_uic: '87413377',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1874246,
          48.4248874,
        ],
      },
      properties: {
        nom: `Fouday`,
        libellecourt: 'FDY',
        segment_drg: 'C',
        codeinsee: '67144',
        codes_uic: '87214734',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7912761,
          48.6792561,
        ],
      },
      properties: {
        nom: `Foug`,
        libellecourt: 'FUG',
        segment_drg: 'C',
        codeinsee: '54205',
        codes_uic: '87141036',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.8510921,
          47.7297956,
        ],
      },
      properties: {
        nom: `Fougeray - Langon`,
        libellecourt: 'FGL',
        segment_drg: 'C',
        codeinsee: '35145',
        codes_uic: '87471201',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.2319718,
          46.6653044,
        ],
      },
      properties: {
        nom: `Fougeré`,
        libellecourt: 'FUE',
        segment_drg: 'C',
        codeinsee: '49143',
        codes_uic: '87486316',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8260404,
          49.7366368,
        ],
      },
      properties: {
        nom: `Fouilloy`,
        libellecourt: 'FIY',
        segment_drg: 'C',
        codeinsee: '60248',
        codes_uic: '87313841',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6074449,
          50.5255091,
        ],
      },
      properties: {
        nom: `Fouquereuil`,
        libellecourt: 'FQE',
        segment_drg: 'C',
        codeinsee: '62349',
        codes_uic: '87342204',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0873673,
          47.0189684,
        ],
      },
      properties: {
        nom: `Fourchambault`,
        libellecourt: 'FLT',
        segment_drg: 'C',
        codeinsee: '58117',
        codes_uic: '87696229',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.05357,
          50.01541,
        ],
      },
      properties: {
        nom: `Fourmies`,
        libellecourt: 'FMI',
        segment_drg: 'B',
        codeinsee: '59249',
        codes_uic: '87295048',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2610375,
          45.3948228,
        ],
      },
      properties: {
        nom: `Fraisses - Unieux`,
        libellecourt: 'FRU',
        segment_drg: 'C',
        codeinsee: '42099',
        codes_uic: '87726737',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.013869,
          49.2425356,
        ],
      },
      properties: {
        nom: `Franchet d'Esperey`,
        libellecourt: 'FRP',
        segment_drg: 'C',
        codeinsee: '51454',
        codes_uic: '87417444',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7693729,
          45.7336473,
        ],
      },
      properties: {
        nom: `Francheville`,
        libellecourt: 'FRW',
        segment_drg: 'C',
        codeinsee: '69089',
        codes_uic: '87722702',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.23514,
          48.99358,
        ],
      },
      properties: {
        nom: `Franconville - Le Plessis-Bouchard`,
        libellecourt: 'FPB',
        segment_drg: 'B',
        codeinsee: '95252',
        codes_uic: '87276071',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.937498,
          47.2273609,
        ],
      },
      properties: {
        nom: `Franois`,
        libellecourt: 'FOI',
        segment_drg: 'C',
        codeinsee: '25258',
        codes_uic: '87718304',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.157767,
          46.857596,
        ],
      },
      properties: {
        nom: `Frasne`,
        libellecourt: 'FRA',
        segment_drg: 'B',
        codeinsee: '25259',
        codes_uic: '87715136',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.519019,
          48.926637,
        ],
      },
      properties: {
        nom: `Freinville Sevran`,
        libellecourt: 'FSV',
        segment_drg: 'B',
        codeinsee: '93071',
        codes_uic: '87113894',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.732941,
          43.432032,
        ],
      },
      properties: {
        nom: `Fréjus`,
        libellecourt: 'FRJ',
        segment_drg: 'B',
        codeinsee: '83061',
        codes_uic: '87757500',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.7551022,
          43.4288632,
        ],
      },
      properties: {
        nom: `Fréjus - Saint-Raphael Autotrain`,
        libellecourt: 'FRT',
        segment_drg: 'C',
        codeinsee: '83061',
        codes_uic: '87757518',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.2603256,
          49.1411192,
        ],
      },
      properties: {
        nom: `Frénouville - Cagny`,
        libellecourt: 'FVL',
        segment_drg: 'C',
        codeinsee: '14287',
        codes_uic: '87444182',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.19717,
          49.0462,
        ],
      },
      properties: {
        nom: `Frépillon`,
        libellecourt: 'FPN',
        segment_drg: 'B',
        codeinsee: '95256',
        codes_uic: '87276659',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.43268,
          49.9501964,
        ],
      },
      properties: {
        nom: `Fresnoy-le-Grand`,
        libellecourt: 'FEG',
        segment_drg: 'C',
        codeinsee: '02334',
        codes_uic: '87296293',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.211813,
          47.8919172,
        ],
      },
      properties: {
        nom: `Fréteval - Morée`,
        libellecourt: 'FRE',
        segment_drg: 'C',
        codeinsee: '41095',
        codes_uic: '87574533',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1495133,
          50.5599254,
        ],
      },
      properties: {
        nom: `Fretin`,
        libellecourt: 'FRI',
        segment_drg: 'C',
        codeinsee: '59256',
        codes_uic: '87286641',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6338262,
          50.3473177,
        ],
      },
      properties: {
        nom: `Frévin-Capelle`,
        libellecourt: 'FVK',
        segment_drg: 'C',
        codeinsee: '62363',
        codes_uic: '87342212',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4324317,
          46.1715646,
        ],
      },
      properties: {
        nom: `Fromental`,
        libellecourt: 'FRO',
        segment_drg: 'C',
        codeinsee: '87068',
        codes_uic: '87592360',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.14156,
          48.29674,
        ],
      },
      properties: {
        nom: `Froncles Buxières`,
        libellecourt: 'FCB',
        segment_drg: 'C',
        codeinsee: '52211',
        codes_uic: '87142240',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3140556,
          45.6305461,
        ],
      },
      properties: {
        nom: `Frontenex`,
        libellecourt: 'TFF',
        segment_drg: 'C',
        codeinsee: '73121',
        codes_uic: '87741629',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.758689,
          43.444934,
        ],
      },
      properties: {
        nom: `Frontignan`,
        libellecourt: 'FRN',
        segment_drg: 'B',
        codeinsee: '34108',
        codes_uic: '87773556',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.14411,
          48.75545,
        ],
      },
      properties: {
        nom: `Frouard`,
        libellecourt: 'FRD',
        segment_drg: 'C',
        codeinsee: '54215',
        codes_uic: '87141077',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.1284527,
          48.7275919,
        ],
      },
      properties: {
        nom: `Frynaudour`,
        libellecourt: 'FYD',
        segment_drg: 'C',
        codeinsee: '22233',
        codes_uic: '87473876',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.6926,
          49.986048,
        ],
      },
      properties: {
        nom: `Fumay`,
        libellecourt: 'FUY',
        segment_drg: 'C',
        codeinsee: '08185',
        codes_uic: '87172098',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.377209,
          46.669918,
        ],
      },
      properties: {
        nom: `Futuroscope`,
        libellecourt: 'FTU',
        segment_drg: 'C',
        codeinsee: '86062',
        codes_uic: '87324095',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9568087,
          43.9296817,
        ],
      },
      properties: {
        nom: `Gadagne`,
        libellecourt: 'GDA',
        segment_drg: 'C',
        codeinsee: '84036',
        codes_uic: '87765446',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.527106,
          48.883125,
        ],
      },
      properties: {
        nom: `Gagny`,
        libellecourt: 'GNQ',
        segment_drg: 'B',
        codeinsee: '93032',
        codes_uic: '87113514',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.894855,
          43.905969,
        ],
      },
      properties: {
        nom: `Gaillac`,
        libellecourt: 'GAI',
        segment_drg: 'B',
        codeinsee: '81099',
        codes_uic: '87615252',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.352461,
          49.174626,
        ],
      },
      properties: {
        nom: `Gaillon - Aubevoye`,
        libellecourt: 'GAA',
        segment_drg: 'B',
        codeinsee: '27022',
        codes_uic: '87415620',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.1715027,
          43.716229,
        ],
      },
      properties: {
        nom: `Gallargues-le-Montueux`,
        libellecourt: 'GGE',
        segment_drg: 'C',
        codeinsee: '30123',
        codes_uic: '87775130',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4195801,
          43.5730877,
        ],
      },
      properties: {
        nom: `Gallieni Cancéropôle`,
        libellecourt: 'OGI',
        segment_drg: 'C',
        codeinsee: '31555',
        codes_uic: '87497461',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3300578,
          46.6421069,
        ],
      },
      properties: {
        nom: `Galuzot`,
        libellecourt: 'GLZ',
        segment_drg: 'C',
        codeinsee: '71486',
        codes_uic: '87694638',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.8791884,
          48.6948699,
        ],
      },
      properties: {
        nom: `Gambsheim`,
        libellecourt: 'GHM',
        segment_drg: 'B',
        codeinsee: '67151',
        codes_uic: '87212332',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.391462,
          43.2335932,
        ],
      },
      properties: {
        nom: `Gan`,
        libellecourt: 'GNJ',
        segment_drg: 'C',
        codeinsee: '64230',
        codes_uic: '87672618',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1358897,
          49.2608222,
        ],
      },
      properties: {
        nom: `Gandrange - Amnéville`,
        libellecourt: 'GDG',
        segment_drg: 'C',
        codeinsee: '57019',
        codes_uic: '87191742',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2047514,
          46.0975964,
        ],
      },
      properties: {
        nom: `Gannat`,
        libellecourt: 'GAN',
        segment_drg: 'C',
        codeinsee: '03118',
        codes_uic: '87732404',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4370074,
          49.5723315,
        ],
      },
      properties: {
        nom: `Gannes`,
        libellecourt: 'GNS',
        segment_drg: 'C',
        codeinsee: '60268',
        codes_uic: '87313262',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.085638,
          44.563693,
        ],
      },
      properties: {
        nom: `Gap`,
        libellecourt: 'GAP',
        segment_drg: 'B',
        codeinsee: '05061',
        codes_uic: '87763003',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7647546,
          48.8106338,
        ],
      },
      properties: {
        nom: `Garancières - La Queue`,
        libellecourt: 'GAQ',
        segment_drg: 'B',
        codeinsee: '78265',
        codes_uic: '87393439',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.18692,
          48.83839,
        ],
      },
      properties: {
        nom: `Garches - Marnes-la-Coquette`,
        libellecourt: 'GMC',
        segment_drg: 'B',
        codeinsee: '92064',
        codes_uic: '87382259',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0858769,
          47.0429987,
        ],
      },
      properties: {
        nom: `Garchizy`,
        libellecourt: 'GZY',
        segment_drg: 'C',
        codeinsee: '58121',
        codes_uic: '87691436',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.463332,
          43.455992,
        ],
      },
      properties: {
        nom: `Gardanne`,
        libellecourt: 'GDN',
        segment_drg: 'B',
        codeinsee: '13041',
        codes_uic: '87751420',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3319427,
          44.8347538,
        ],
      },
      properties: {
        nom: `Gardonne`,
        libellecourt: 'GAO',
        segment_drg: 'C',
        codeinsee: '24194',
        codes_uic: '87584235',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.517109,
          48.908159,
        ],
      },
      properties: {
        nom: `Gargan`,
        libellecourt: 'GAF',
        segment_drg: 'B',
        codeinsee: '93057',
        codes_uic: '87113860',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8089,
          48.98318,
        ],
      },
      properties: {
        nom: `Gargenville`,
        libellecourt: 'GGV',
        segment_drg: 'B',
        codeinsee: '78267',
        codes_uic: '87381566',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.39078,
          48.97663,
        ],
      },
      properties: {
        nom: `Garges - Sarcelles`,
        libellecourt: 'GAJ',
        segment_drg: 'B',
        codeinsee: '95268',
        codes_uic: '87276196',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.3992689,
          45.0542936,
        ],
      },
      properties: {
        nom: `Gauriaguet`,
        libellecourt: 'GGT',
        segment_drg: 'C',
        codeinsee: '33183',
        codes_uic: '87491225',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7718857,
          48.6259183,
        ],
      },
      properties: {
        nom: `Gazeran`,
        libellecourt: 'GZA',
        segment_drg: 'B',
        codeinsee: '78269',
        codes_uic: '87393348',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.69949,
          44.772218,
        ],
      },
      properties: {
        nom: `Gazinet Cestas`,
        libellecourt: 'GAZ',
        segment_drg: 'B',
        codeinsee: '33122',
        codes_uic: '87582403',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.6843578,
          48.5190515,
        ],
      },
      properties: {
        nom: `Geispolsheim`,
        libellecourt: 'GPM',
        segment_drg: 'C',
        codeinsee: '67152',
        codes_uic: '87212258',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1293074,
          47.478542,
        ],
      },
      properties: {
        nom: `Gemeaux`,
        libellecourt: 'GMX',
        segment_drg: 'C',
        codeinsee: '21290',
        codes_uic: '87713842',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2379965,
          46.5812177,
        ],
      },
      properties: {
        nom: `Génelard`,
        libellecourt: 'GEL',
        segment_drg: 'C',
        codeinsee: '71212',
        codes_uic: '87694653',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3434742,
          43.7324379,
        ],
      },
      properties: {
        nom: `Générac`,
        libellecourt: 'GEC',
        segment_drg: 'C',
        codeinsee: '30128',
        codes_uic: '87775791',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.223406,
          47.244579,
        ],
      },
      properties: {
        nom: `Genlis`,
        libellecourt: 'GLS',
        segment_drg: 'B',
        codeinsee: '21292',
        codes_uic: '87713313',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.30699,
          48.93368,
        ],
      },
      properties: {
        nom: `Gennevilliers`,
        libellecourt: 'GEN',
        segment_drg: 'B',
        codeinsee: '92036',
        codes_uic: '87271205',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9516407,
          44.3471626,
        ],
      },
      properties: {
        nom: `Génolhac`,
        libellecourt: 'GNC',
        segment_drg: 'C',
        codeinsee: '30130',
        codes_uic: '87775213',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0228976,
          49.1277634,
        ],
      },
      properties: {
        nom: `Germaine`,
        libellecourt: 'GEA',
        segment_drg: 'C',
        codeinsee: '51266',
        codes_uic: '87171587',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.4663166,
          48.4133621,
        ],
      },
      properties: {
        nom: `Gertwiller`,
        libellecourt: 'GWL',
        segment_drg: 'C',
        codeinsee: '67155',
        codes_uic: '87214254',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1431045,
          45.8335879,
        ],
      },
      properties: {
        nom: `Gerzat`,
        libellecourt: 'GEZ',
        segment_drg: 'C',
        codeinsee: '63164',
        codes_uic: '87734046',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.4431341,
          47.8029905,
        ],
      },
      properties: {
        nom: `Gestel`,
        libellecourt: 'GES',
        segment_drg: 'C',
        codeinsee: '56063',
        codes_uic: '87476309',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.999058,
          47.2274694,
        ],
      },
      properties: {
        nom: `Gevrey-Chambertin`,
        libellecourt: 'GCT',
        segment_drg: 'C',
        codeinsee: '21295',
        codes_uic: '87713503',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.636205,
          47.699088,
        ],
      },
      properties: {
        nom: `Gien`,
        libellecourt: 'GIE',
        segment_drg: 'C',
        codeinsee: '45155',
        codes_uic: '87684290',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6678267,
          47.2787925,
        ],
      },
      properties: {
        nom: `Gièvres`,
        libellecourt: 'GSN',
        segment_drg: 'C',
        codeinsee: '41097',
        codes_uic: '87576876',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4831648,
          45.0146074,
        ],
      },
      properties: {
        nom: `Gignac - Cressensac`,
        libellecourt: 'GCC',
        segment_drg: 'C',
        codeinsee: '46118',
        codes_uic: '87594325',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.4925676,
          47.0500626,
        ],
      },
      properties: {
        nom: `Gilley`,
        libellecourt: 'GIL',
        segment_drg: 'C',
        codeinsee: '25271',
        codes_uic: '87718577',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.7821607,
          46.5370137,
        ],
      },
      properties: {
        nom: `Gilly-sur-Loire`,
        libellecourt: 'GSL',
        segment_drg: 'C',
        codeinsee: '71220',
        codes_uic: '87694869',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8676246,
          43.6330525,
        ],
      },
      properties: {
        nom: `Gimont Cahuzac`,
        libellecourt: 'GAH',
        segment_drg: 'C',
        codeinsee: '32147',
        codes_uic: '87611772',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.0920127,
          44.583292,
        ],
      },
      properties: {
        nom: `Gironde-sur-Dropt`,
        libellecourt: 'GID',
        segment_drg: 'C',
        codeinsee: '33187',
        codes_uic: '87582858',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.78455,
          49.28512,
        ],
      },
      properties: {
        nom: `Gisors`,
        libellecourt: 'GIS',
        segment_drg: 'B',
        codeinsee: '27284',
        codes_uic: '87381244',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.81798595,
          50.14025067,
        ],
      },
      properties: {
        nom: `Givet`,
        libellecourt: 'GVT',
        segment_drg: 'C',
        codeinsee: '08190',
        codes_uic: '87172130',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.766086,
          45.584948,
        ],
      },
      properties: {
        nom: `Givors`,
        libellecourt: 'GIV',
        segment_drg: 'B',
        codeinsee: '69091',
        codes_uic: '87722405',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7725754,
          45.5957662,
        ],
      },
      properties: {
        nom: `Givors Canal`,
        libellecourt: 'GIC',
        segment_drg: 'C',
        codeinsee: '69091',
        codes_uic: '87722439',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.073578,
          43.566501,
        ],
      },
      properties: {
        nom: `Golfe Juan Vallauris`,
        libellecourt: 'GLF',
        segment_drg: 'B',
        codeinsee: '06155',
        codes_uic: '87757641',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.974136,
          45.341941,
        ],
      },
      properties: {
        nom: `Goncelin`,
        libellecourt: 'GOC',
        segment_drg: 'B',
        codeinsee: '38181',
        codes_uic: '87747477',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2817644,
          43.3171516,
        ],
      },
      properties: {
        nom: `Gonfaron`,
        libellecourt: 'GFR',
        segment_drg: 'C',
        codeinsee: '83067',
        codes_uic: '87755397',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3058778,
          47.1001487,
        ],
      },
      properties: {
        nom: `Gorges`,
        libellecourt: 'GOE',
        segment_drg: 'C',
        codeinsee: '44064',
        codes_uic: '87481432',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.389237,
          44.7419445,
        ],
      },
      properties: {
        nom: `Gourdon`,
        libellecourt: 'GOV',
        segment_drg: 'C',
        codeinsee: '46127',
        codes_uic: '87613141',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.1668191,
          48.5609981,
        ],
      },
      properties: {
        nom: `Gourland`,
        libellecourt: 'GUL',
        segment_drg: 'C',
        codeinsee: '22067',
        codes_uic: '87473801',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7380891,
          49.4813674,
        ],
      },
      properties: {
        nom: `Gournay - Ferrières`,
        libellecourt: 'GOF',
        segment_drg: 'C',
        codeinsee: '76260',
        codes_uic: '87381293',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4632464,
          49.0240732,
        ],
      },
      properties: {
        nom: `Goussainville`,
        libellecourt: 'GOU',
        segment_drg: 'B',
        codeinsee: '95280',
        codes_uic: '87276246',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.4787296,
          48.4327551,
        ],
      },
      properties: {
        nom: `Goxwiller`,
        libellecourt: 'GXW',
        segment_drg: 'C',
        codeinsee: '67164',
        codes_uic: '87214270',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.6897861,
          48.5324375,
        ],
      },
      properties: {
        nom: `Graffenstaden`,
        libellecourt: 'GRF',
        segment_drg: 'C',
        codeinsee: '67152',
        codes_uic: '87212241',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2247908,
          47.7808232,
        ],
      },
      properties: {
        nom: `Graffenwald`,
        libellecourt: 'GFW',
        segment_drg: 'C',
        codeinsee: '68375',
        codes_uic: '87181131',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.567731,
          43.696179,
        ],
      },
      properties: {
        nom: `Gragnague`,
        libellecourt: 'GAG',
        segment_drg: 'C',
        codeinsee: '31228',
        codes_uic: '87615377',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7223028,
          44.7734284,
        ],
      },
      properties: {
        nom: `Gramat`,
        libellecourt: 'GRT',
        segment_drg: 'C',
        codeinsee: '46128',
        codes_uic: '87613059',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.435939,
          48.648004,
        ],
      },
      properties: {
        nom: `Grand Bourg`,
        libellecourt: 'GBG',
        segment_drg: 'B',
        codeinsee: '91521',
        codes_uic: '87681353',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3133547,
          51.0026884,
        ],
      },
      properties: {
        nom: `Grande-Synthe`,
        libellecourt: 'GSV',
        segment_drg: 'C',
        codeinsee: '59271',
        codes_uic: '87281311',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9785,
          47.53763,
        ],
      },
      properties: {
        nom: `Grandvillars`,
        libellecourt: 'GND',
        segment_drg: 'C',
        codeinsee: '90053',
        codes_uic: '87184432',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9384836,
          49.6593779,
        ],
      },
      properties: {
        nom: `Grandvilliers`,
        libellecourt: 'GAR',
        segment_drg: 'C',
        codeinsee: '60286',
        codes_uic: '87313734',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.587757,
          48.838456,
        ],
      },
      properties: {
        nom: `Granville`,
        libellecourt: 'GRV',
        segment_drg: 'B',
        codeinsee: '50218',
        codes_uic: '87447680',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.925524,
          43.653317,
        ],
      },
      properties: {
        nom: `Grasse`,
        libellecourt: 'GRA',
        segment_drg: 'B',
        codeinsee: '06069',
        codes_uic: '87757724',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1232852,
          50.978736,
        ],
      },
      properties: {
        nom: `Gravelines`,
        libellecourt: 'GVL',
        segment_drg: 'C',
        codeinsee: '59273',
        codes_uic: '87281246',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.317846,
          48.6851718,
        ],
      },
      properties: {
        nom: `Gravigny Balizy`,
        libellecourt: 'GBI',
        segment_drg: 'B',
        codeinsee: '91345',
        codes_uic: '87393645',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.714584,
          45.191493,
        ],
      },
      properties: {
        nom: `Grenoble`,
        libellecourt: 'GRE',
        segment_drg: 'A',
        codeinsee: '38185',
        codes_uic: '87747006',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.78474,
          45.184877,
        ],
      },
      properties: {
        nom: `Grenoble Universités - Gières`,
        libellecourt: 'GRS',
        segment_drg: 'B',
        codeinsee: '38179',
        codes_uic: '87747402',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.42468,
          48.53334,
        ],
      },
      properties: {
        nom: `Gresswiller`,
        libellecourt: 'GEI',
        segment_drg: 'B',
        codeinsee: '67168',
        codes_uic: '87214593',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9221751,
          45.7245161,
        ],
      },
      properties: {
        nom: `Grésy-sur-Aix`,
        libellecourt: 'GAX',
        segment_drg: 'C',
        codeinsee: '73128',
        codes_uic: '87746107',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2588584,
          45.594432,
        ],
      },
      properties: {
        nom: `Grésy-sur-Isère`,
        libellecourt: 'TGG',
        segment_drg: 'C',
        codeinsee: '73129',
        codes_uic: '87741611',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.728824,
          48.74544,
        ],
      },
      properties: {
        nom: `Gretz-Armainvilliers`,
        libellecourt: 'GZT',
        segment_drg: 'B',
        codeinsee: '77215',
        codes_uic: '87116012',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.395797,
          48.65343,
        ],
      },
      properties: {
        nom: `Grigny Centre`,
        libellecourt: 'GGG',
        segment_drg: 'B',
        codeinsee: '91286',
        codes_uic: '87681379',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.796144,
          45.6072601,
        ],
      },
      properties: {
        nom: `Grigny le Sablon`,
        libellecourt: 'LSB',
        segment_drg: 'C',
        codeinsee: '69096',
        codes_uic: '87722298',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3023292,
          43.8269619,
        ],
      },
      properties: {
        nom: `Grisolles`,
        libellecourt: 'GRI',
        segment_drg: 'C',
        codeinsee: '82075',
        codes_uic: '87611673',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.17568,
          46.0111205,
        ],
      },
      properties: {
        nom: `Groisy - Thorens-Glières`,
        libellecourt: 'GTC',
        segment_drg: 'C',
        codeinsee: '74137',
        codes_uic: '87746248',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2588,
          48.99682,
        ],
      },
      properties: {
        nom: `Gros Noyer Saint-Prix`,
        libellecourt: 'GNE',
        segment_drg: 'B',
        codeinsee: '95219',
        codes_uic: '87276592',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.35358,
          48.98462,
        ],
      },
      properties: {
        nom: `Groslay`,
        libellecourt: 'GNX',
        segment_drg: 'B',
        codeinsee: '95288',
        codes_uic: '87276360',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1408271,
          48.3382279,
        ],
      },
      properties: {
        nom: `Gudmont`,
        libellecourt: 'GDM',
        segment_drg: 'C',
        codeinsee: '52230',
        codes_uic: '87142265',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.954783,
          48.810588,
        ],
      },
      properties: {
        nom: `Guérard - La Celle-sur-Morin`,
        libellecourt: 'GCM',
        segment_drg: 'C',
        codeinsee: '77219',
        codes_uic: '87116269',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8793855,
          46.1741863,
        ],
      },
      properties: {
        nom: `Guéret`,
        libellecourt: 'GTJ',
        segment_drg: 'C',
        codeinsee: '23096',
        codes_uic: '87597609',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.6098615,
          43.4253491,
        ],
      },
      properties: {
        nom: `Guéthary`,
        libellecourt: 'GTH',
        segment_drg: 'C',
        codeinsee: '64249',
        codes_uic: '87673459',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.7601845,
          47.9350963,
        ],
      },
      properties: {
        nom: `Guichen - Bourg-des-Comptes`,
        libellecourt: 'GBC',
        segment_drg: 'B',
        codeinsee: '35126',
        codes_uic: '87471151',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.961334,
          49.434862,
        ],
      },
      properties: {
        nom: `Guignicourt`,
        libellecourt: 'GUI',
        segment_drg: 'B',
        codeinsee: '02360',
        codes_uic: '87171736',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0598748,
          48.3744455,
        ],
      },
      properties: {
        nom: `Guillerval`,
        libellecourt: 'GUE',
        segment_drg: 'C',
        codeinsee: '91294',
        codes_uic: '87545129',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.9996163,
          48.4852675,
        ],
      },
      properties: {
        nom: `Guimiliau`,
        libellecourt: 'GMU',
        segment_drg: 'C',
        codeinsee: '29074',
        codes_uic: '87474296',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.143343,
          48.555659,
        ],
      },
      properties: {
        nom: `Guingamp`,
        libellecourt: 'GGP',
        segment_drg: 'B',
        codeinsee: '22070',
        codes_uic: '87473207',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.06906,
          44.640454,
        ],
      },
      properties: {
        nom: `Gujan-Mestras`,
        libellecourt: 'GUJ',
        segment_drg: 'B',
        codeinsee: '33199',
        codes_uic: '87582619',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.6535345,
          48.905261,
        ],
      },
      properties: {
        nom: `Gundershoffen`,
        libellecourt: 'GUF',
        segment_drg: 'C',
        codeinsee: '67176',
        codes_uic: '87213223',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1748407,
          48.0414908,
        ],
      },
      properties: {
        nom: `Gunsbach - Griesbach`,
        libellecourt: 'GSB',
        segment_drg: 'C',
        codeinsee: '68109',
        codes_uic: '87182386',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.417979,
          47.737691,
        ],
      },
      properties: {
        nom: `Habsheim`,
        libellecourt: 'HAB',
        segment_drg: 'B',
        codeinsee: '68118',
        codes_uic: '87182089',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.7434526,
          50.1582852,
        ],
      },
      properties: {
        nom: `Hachette`,
        libellecourt: 'HAC',
        segment_drg: 'C',
        codeinsee: '59353',
        codes_uic: '87297523',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.16448,
          49.25356,
        ],
      },
      properties: {
        nom: `Hagondange`,
        libellecourt: 'HGD',
        segment_drg: 'B',
        codeinsee: '57283',
        codes_uic: '87191114',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.7827255,
          48.8134498,
        ],
      },
      properties: {
        nom: `Haguenau`,
        libellecourt: 'HAG',
        segment_drg: 'B',
        codeinsee: '67180',
        codes_uic: '87213058',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.4279003,
          43.3781301,
        ],
      },
      properties: {
        nom: `Halsou - Larressore`,
        libellecourt: 'HLS',
        segment_drg: 'C',
        codeinsee: '64255',
        codes_uic: '87673640',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3388541,
          43.7641521,
        ],
      },
      properties: {
        nom: `Halte de Fontanil – Lycée de Drap`,
        libellecourt: 'FLA',
        segment_drg: 'C',
        codeinsee: '06054',
        codes_uic: '87565143',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.5224436,
          47.249142,
        ],
      },
      properties: {
        nom: `Haluchère Batignolles`,
        libellecourt: 'HAD',
        segment_drg: 'C',
        codeinsee: '44109',
        codes_uic: '87590331',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.07052,
          49.73985,
        ],
      },
      properties: {
        nom: `Ham`,
        libellecourt: 'HAM',
        segment_drg: 'B',
        codeinsee: '80579',
        codes_uic: '87313494',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4657764,
          50.5900401,
        ],
      },
      properties: {
        nom: `Ham-en-Artois`,
        libellecourt: 'HMA',
        segment_drg: 'C',
        codeinsee: '62407',
        codes_uic: '87342261',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0661412,
          49.9822011,
        ],
      },
      properties: {
        nom: `Hangest-sur-Somme`,
        libellecourt: 'HAS',
        segment_drg: 'C',
        codeinsee: '80416',
        codes_uic: '87313114',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1989828,
          49.5136336,
        ],
      },
      properties: {
        nom: `Harfleur`,
        libellecourt: 'HAF',
        segment_drg: 'C',
        codeinsee: '76341',
        codes_uic: '87413302',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.192085,
          49.5059181,
        ],
      },
      properties: {
        nom: `Harfleur Halte`,
        libellecourt: 'HRF',
        segment_drg: 'C',
        codeinsee: '76341',
        codes_uic: '87413708',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5317673,
          49.7138593,
        ],
      },
      properties: {
        nom: `Hargicourt - Pierrepont`,
        libellecourt: 'HGI',
        segment_drg: 'C',
        codeinsee: '80419',
        codes_uic: '87313338',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9071141,
          49.1934741,
        ],
      },
      properties: {
        nom: `Hatrize`,
        libellecourt: 'HZE',
        segment_drg: 'C',
        codeinsee: '54253',
        codes_uic: '87192724',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.990153,
          50.6070495,
        ],
      },
      properties: {
        nom: `Haubourdin`,
        libellecourt: 'HAU',
        segment_drg: 'C',
        codeinsee: '59286',
        codes_uic: '87286096',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.32862,
          48.87478,
        ],
      },
      properties: {
        nom: `Haussmann Saint-Lazare`,
        libellecourt: 'HSL',
        segment_drg: 'B',
        codeinsee: '75109',
        codes_uic: '87281899',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8319,
          49.859182,
        ],
      },
      properties: {
        nom: `Haute Picardie TGV`,
        libellecourt: 'HPI',
        segment_drg: 'A',
        codeinsee: '80002',
        codes_uic: '87313882',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.91522,
          50.25398,
        ],
      },
      properties: {
        nom: `Hautmont`,
        libellecourt: 'HAT',
        segment_drg: 'C',
        codeinsee: '59291',
        codes_uic: '87295568',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.07245,
          49.33053,
        ],
      },
      properties: {
        nom: `Hayange`,
        libellecourt: 'HAY',
        segment_drg: 'C',
        codeinsee: '57306',
        codes_uic: '87191239',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7045378,
          50.0116888,
        ],
      },
      properties: {
        nom: `Haybes`,
        libellecourt: 'HYM',
        segment_drg: 'C',
        codeinsee: '08222',
        codes_uic: '87172106',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.54129,
          50.72501,
        ],
      },
      properties: {
        nom: `Hazebrouck`,
        libellecourt: 'HZK',
        segment_drg: 'B',
        codeinsee: '59295',
        codes_uic: '87286302',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.381426,
          48.5273135,
        ],
      },
      properties: {
        nom: `Heiligenberg - Mollkirch`,
        libellecourt: 'HEG',
        segment_drg: 'C',
        codeinsee: '67299',
        codes_uic: '87214627',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2725858,
          49.340531,
        ],
      },
      properties: {
        nom: `Heilles - Mouchy`,
        libellecourt: 'HEC',
        segment_drg: 'C',
        codeinsee: '60307',
        codes_uic: '87316398',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5396593,
          49.9435191,
        ],
      },
      properties: {
        nom: `Heilly`,
        libellecourt: 'HLY',
        segment_drg: 'C',
        codeinsee: '80426',
        codes_uic: '87316059',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1149328,
          50.6226402,
        ],
      },
      properties: {
        nom: `Hellemmes`,
        libellecourt: 'HEL',
        segment_drg: 'C',
        codeinsee: '59350',
        codes_uic: '87286062',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.781724,
          43.353132,
        ],
      },
      properties: {
        nom: `Hendaye`,
        libellecourt: 'HED',
        segment_drg: 'B',
        codeinsee: '64260',
        codes_uic: '87677005',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.95211,
          50.41706,
        ],
      },
      properties: {
        nom: `Hénin-Beaumont`,
        libellecourt: 'HBE',
        segment_drg: 'B',
        codeinsee: '62427',
        codes_uic: '87345157',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.2857467,
          47.7990019,
        ],
      },
      properties: {
        nom: `Hennebont`,
        libellecourt: 'HEN',
        segment_drg: 'C',
        codeinsee: '56083',
        codes_uic: '87476259',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0801596,
          49.0138973,
        ],
      },
      properties: {
        nom: `Herbitzheim`,
        libellecourt: 'HBZ',
        segment_drg: 'C',
        codeinsee: '67191',
        codes_uic: '87193672',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.16208,
          48.99042,
        ],
      },
      properties: {
        nom: `Herblay`,
        libellecourt: 'HRY',
        segment_drg: 'B',
        codeinsee: '95306',
        codes_uic: '87381889',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0109273,
          49.4879546,
        ],
      },
      properties: {
        nom: `Herchies`,
        libellecourt: 'HEE',
        segment_drg: 'C',
        codeinsee: '60310',
        codes_uic: '87313692',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.7691977,
          47.5729701,
        ],
      },
      properties: {
        nom: `Héricourt`,
        libellecourt: 'HCT',
        segment_drg: 'B',
        codeinsee: '70285',
        codes_uic: '87184507',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7605339,
          48.4424848,
        ],
      },
      properties: {
        nom: `Héricy`,
        libellecourt: 'HER',
        segment_drg: 'C',
        codeinsee: '77226',
        codes_uic: '87682435',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2416554,
          49.3544055,
        ],
      },
      properties: {
        nom: `Hermes - Berthecourt`,
        libellecourt: 'HRB',
        segment_drg: 'C',
        codeinsee: '60065',
        codes_uic: '87313585',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.4769285,
          49.0036084,
        ],
      },
      properties: {
        nom: `Herny`,
        libellecourt: 'HYI',
        segment_drg: 'C',
        codeinsee: '57319',
        codes_uic: '87193383',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.9102594,
          48.7279056,
        ],
      },
      properties: {
        nom: `Herrlisheim`,
        libellecourt: 'HRL',
        segment_drg: 'B',
        codeinsee: '67194',
        codes_uic: '87212340',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3206381,
          48.0166417,
        ],
      },
      properties: {
        nom: `Herrlisheim-près-Colmar`,
        libellecourt: 'HRH',
        segment_drg: 'C',
        codeinsee: '68134',
        codes_uic: '87182329',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6669967,
          50.6609475,
        ],
      },
      properties: {
        nom: `Hesdigneul-lès-Boulogne`,
        libellecourt: 'HES',
        segment_drg: 'C',
        codeinsee: '62446',
        codes_uic: '87317107',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0351881,
          50.378286,
        ],
      },
      properties: {
        nom: `Hesdin`,
        libellecourt: 'HSD',
        segment_drg: 'C',
        codeinsee: '62447',
        codes_uic: '87317222',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1566738,
          49.4076754,
        ],
      },
      properties: {
        nom: `Hettange-Grande`,
        libellecourt: 'HET',
        segment_drg: 'B',
        codeinsee: '57323',
        codes_uic: '87191163',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.08432,
          49.91455,
        ],
      },
      properties: {
        nom: `Hirson`,
        libellecourt: 'HIQ',
        segment_drg: 'C',
        codeinsee: '02381',
        codes_uic: '87295063',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0861491,
          49.9288321,
        ],
      },
      properties: {
        nom: `Hirson Écoles`,
        libellecourt: 'HSO',
        segment_drg: 'C',
        codeinsee: '02381',
        codes_uic: '87324335',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.572355,
          48.7554199,
        ],
      },
      properties: {
        nom: `Hochfelden`,
        libellecourt: 'HCH',
        segment_drg: 'B',
        codeinsee: '67202',
        codes_uic: '87212167',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.8314949,
          48.9163252,
        ],
      },
      properties: {
        nom: `Hoelschloch`,
        libellecourt: 'HHH',
        segment_drg: 'C',
        codeinsee: '67487',
        codes_uic: '87213413',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.7581387,
          48.6285976,
        ],
      },
      properties: {
        nom: `Hoenheim Tram`,
        libellecourt: 'HMT',
        segment_drg: 'C',
        codeinsee: '67204',
        codes_uic: '87338517',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.7794059,
          48.7029518,
        ],
      },
      properties: {
        nom: `Hoerdt`,
        libellecourt: 'HOD',
        segment_drg: 'B',
        codeinsee: '67205',
        codes_uic: '87213686',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.933587,
          48.9312475,
        ],
      },
      properties: {
        nom: `Hoffen`,
        libellecourt: 'HFN',
        segment_drg: 'C',
        codeinsee: '67206',
        codes_uic: '87213447',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.7742703,
          49.1261085,
        ],
      },
      properties: {
        nom: `Hombourg-Haut`,
        libellecourt: 'HOH',
        segment_drg: 'C',
        codeinsee: '57332',
        codes_uic: '87193276',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9991714,
          49.2182988,
        ],
      },
      properties: {
        nom: `Homécourt`,
        libellecourt: 'HOM',
        segment_drg: 'C',
        codeinsee: '54263',
        codes_uic: '87191692',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6027371,
          48.7958005,
        ],
      },
      properties: {
        nom: `Houdan`,
        libellecourt: 'HOA',
        segment_drg: 'B',
        codeinsee: '78310',
        codes_uic: '87393462',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1797255,
          48.645478,
        ],
      },
      properties: {
        nom: `Houdemont`,
        libellecourt: 'HDT',
        segment_drg: 'C',
        codeinsee: '54265',
        codes_uic: '87141473',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1850828,
          48.9199636,
        ],
      },
      properties: {
        nom: `Houilles - Carrières-sur-Seine`,
        libellecourt: 'HAR',
        segment_drg: 'B',
        codeinsee: '78311',
        codes_uic: '87386409',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.0772276,
          49.3000711,
        ],
      },
      properties: {
        nom: `Houlgate`,
        libellecourt: 'HOE',
        segment_drg: 'C',
        codeinsee: '14338',
        codes_uic: '87444406',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9775394,
          49.1066949,
        ],
      },
      properties: {
        nom: `Hundling`,
        libellecourt: 'HDC',
        segment_drg: 'C',
        codeinsee: '57340',
        codes_uic: '87193540',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.9537409,
          48.9616379,
        ],
      },
      properties: {
        nom: `Hunspach`,
        libellecourt: 'HUS',
        segment_drg: 'C',
        codeinsee: '67213',
        codes_uic: '87213454',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4762569,
          46.3714332,
        ],
      },
      properties: {
        nom: `Huriel`,
        libellecourt: 'HIL',
        segment_drg: 'C',
        codeinsee: '03128',
        codes_uic: '87641217',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.124223,
          43.108867,
        ],
      },
      properties: {
        nom: `Hyères`,
        libellecourt: 'HYE',
        segment_drg: 'B',
        codeinsee: '83069',
        codes_uic: '87755629',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1402129,
          48.2708192,
        ],
      },
      properties: {
        nom: `Hymont - Mattaincourt`,
        libellecourt: 'HAI',
        segment_drg: 'C',
        codeinsee: '88246',
        codes_uic: '87144220',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3995463,
          48.2709639,
        ],
      },
      properties: {
        nom: `Igney`,
        libellecourt: 'IYA',
        segment_drg: 'C',
        codeinsee: '88247',
        codes_uic: '87144089',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8053062,
          48.6467012,
        ],
      },
      properties: {
        nom: `Igney - Avricourt`,
        libellecourt: 'IAZ',
        segment_drg: 'C',
        codeinsee: '54035',
        codes_uic: '87215103',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2313626,
          48.7399008,
        ],
      },
      properties: {
        nom: `Igny`,
        libellecourt: 'IGY',
        segment_drg: 'B',
        codeinsee: '91312',
        codes_uic: '87393561',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6242863,
          42.6682396,
        ],
      },
      properties: {
        nom: `Ille-sur-Têt`,
        libellecourt: 'ILL',
        segment_drg: 'C',
        codeinsee: '66088',
        codes_uic: '87784561',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2685712,
          47.6764322,
        ],
      },
      properties: {
        nom: `Illfurth`,
        libellecourt: 'IFH',
        segment_drg: 'C',
        codeinsee: '68152',
        codes_uic: '87182204',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2448745,
          48.303937,
        ],
      },
      properties: {
        nom: `Illiers-Combray`,
        libellecourt: 'ILC',
        segment_drg: 'B',
        codeinsee: '28196',
        codes_uic: '87394437',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2597113,
          46.9333537,
        ],
      },
      properties: {
        nom: `Imphy`,
        libellecourt: 'IPY',
        segment_drg: 'C',
        codeinsee: '58134',
        codes_uic: '87696450',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.29823,
          48.08883,
        ],
      },
      properties: {
        nom: `Ingersheim - Cité Scolaire`,
        libellecourt: 'ISC',
        segment_drg: 'C',
        codeinsee: '68338',
        codes_uic: '87303875',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.5691164,
          46.8746283,
        ],
      },
      properties: {
        nom: `Ingrandes sur Vienne`,
        libellecourt: 'IGR',
        segment_drg: 'C',
        codeinsee: '86111',
        codes_uic: '87575134',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.9210198,
          47.4056382,
        ],
      },
      properties: {
        nom: `Ingrandes-Le Fresne-sur-Loire`,
        libellecourt: 'IGA',
        segment_drg: 'C',
        codeinsee: '49160',
        codes_uic: '87484360',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.477155,
          48.8723277,
        ],
      },
      properties: {
        nom: `Ingwiller`,
        libellecourt: 'IGW',
        segment_drg: 'B',
        codeinsee: '67222',
        codes_uic: '87213785',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3150151,
          48.8619133,
        ],
      },
      properties: {
        nom: `Invalides`,
        libellecourt: 'INV',
        segment_drg: 'B',
        codeinsee: '75107',
        codes_uic: '87393033',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.83229,
          45.69002,
        ],
      },
      properties: {
        nom: `Irigny Yvours`,
        libellecourt: 'IRY',
        segment_drg: 'C',
        codeinsee: '69100',
        codes_uic: '87722249',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.129481,
          47.520454,
        ],
      },
      properties: {
        nom: `Is-sur-Tille`,
        libellecourt: 'IST',
        segment_drg: 'C',
        codeinsee: '21383',
        codes_uic: '87713859',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.46277,
          50.61399,
        ],
      },
      properties: {
        nom: `Isbergues`,
        libellecourt: 'BIO',
        segment_drg: 'B',
        codeinsee: '62473',
        codes_uic: '87342279',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0072998,
          48.9980994,
        ],
      },
      properties: {
        nom: `Isles - Armentières - Congis`,
        libellecourt: 'IAC',
        segment_drg: 'C',
        codeinsee: '77231',
        codes_uic: '87116616',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.45068,
          47.6268289,
        ],
      },
      properties: {
        nom: `Issé`,
        libellecourt: 'ISE',
        segment_drg: 'C',
        codeinsee: '44075',
        codes_uic: '87481622',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.25398,
          45.543884,
        ],
      },
      properties: {
        nom: `Issoire`,
        libellecourt: 'ISS',
        segment_drg: 'B',
        codeinsee: '63178',
        codes_uic: '87734202',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.78532,
          48.97931,
        ],
      },
      properties: {
        nom: `Issou - Porcheville`,
        libellecourt: 'IPO',
        segment_drg: 'B',
        codeinsee: '78314',
        codes_uic: '87381574',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.985834,
          46.948763,
        ],
      },
      properties: {
        nom: `Issoudun`,
        libellecourt: 'ISK',
        segment_drg: 'B',
        codeinsee: '36088',
        codes_uic: '87597062',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2635936,
          48.8295555,
        ],
      },
      properties: {
        nom: `Issy Val de Seine`,
        libellecourt: 'ISP',
        segment_drg: 'B',
        codeinsee: '92040',
        codes_uic: '87393306',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2593469,
          48.8201001,
        ],
      },
      properties: {
        nom: `Issy-les-Moulineaux`,
        libellecourt: 'ISY',
        segment_drg: 'B',
        codeinsee: '92040',
        codes_uic: '87393074',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9804272,
          43.5153953,
        ],
      },
      properties: {
        nom: `Istres`,
        libellecourt: 'ISR',
        segment_drg: 'C',
        codeinsee: '13047',
        codes_uic: '87753418',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3168298,
          46.4841223,
        ],
      },
      properties: {
        nom: `Iteuil`,
        libellecourt: 'ITL',
        segment_drg: 'C',
        codeinsee: '86113',
        codes_uic: '87577403',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3956111,
          43.324043,
        ],
      },
      properties: {
        nom: `Itxassou`,
        libellecourt: 'ITX',
        segment_drg: 'C',
        codeinsee: '64279',
        codes_uic: '87673665',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.39099,
          48.814371,
        ],
      },
      properties: {
        nom: `Ivry-sur-Seine`,
        libellecourt: 'IVN',
        segment_drg: 'B',
        codeinsee: '94041',
        codes_uic: '87545301',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3298634,
          50.2255015,
        ],
      },
      properties: {
        nom: `Iwuy`,
        libellecourt: 'IWY',
        segment_drg: 'C',
        codeinsee: '59322',
        codes_uic: '87345397',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1861468,
          49.5269596,
        ],
      },
      properties: {
        nom: `Jacques Monod la Demi-Lieue`,
        libellecourt: 'JAC',
        segment_drg: 'C',
        codeinsee: '76341',
        codes_uic: '87413716',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.497538,
          47.955364,
        ],
      },
      properties: {
        nom: `Janzé`,
        libellecourt: 'JZE',
        segment_drg: 'B',
        codeinsee: '35136',
        codes_uic: '87471334',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.1777613,
          45.6711292,
        ],
      },
      properties: {
        nom: `Jarnac`,
        libellecourt: 'JCB',
        segment_drg: 'C',
        codeinsee: '16153',
        codes_uic: '87491472',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7424487,
          45.0854543,
        ],
      },
      properties: {
        nom: `Jarrie - Vizille`,
        libellecourt: 'JAV',
        segment_drg: 'C',
        codeinsee: '38200',
        codes_uic: '87747535',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2024643,
          48.6698381,
        ],
      },
      properties: {
        nom: `Jarville-la-Malgrange`,
        libellecourt: 'JAR',
        segment_drg: 'C',
        codeinsee: '54274',
        codes_uic: '87141010',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1393366,
          45.5434698,
        ],
      },
      properties: {
        nom: `Jassonneix`,
        libellecourt: 'JSX',
        segment_drg: 'C',
        codeinsee: '19136',
        codes_uic: '87594085',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3816535,
          46.682044,
        ],
      },
      properties: {
        nom: `Jaunay-Clan`,
        libellecourt: 'JAU',
        segment_drg: 'C',
        codeinsee: '86115',
        codes_uic: '87575217',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.777316,
          49.3868029,
        ],
      },
      properties: {
        nom: `Jaux`,
        libellecourt: 'JAX',
        segment_drg: 'C',
        codeinsee: '60325',
        codes_uic: '87272013',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2768401,
          48.8462046,
        ],
      },
      properties: {
        nom: `Javel`,
        libellecourt: 'JVL',
        segment_drg: 'B',
        codeinsee: '75115',
        codes_uic: '87393066',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.08645,
          50.29606,
        ],
      },
      properties: {
        nom: `Jeumont`,
        libellecourt: 'JTJ',
        segment_drg: 'C',
        codeinsee: '59324',
        codes_uic: '87295014',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0177021,
          49.2250083,
        ],
      },
      properties: {
        nom: `Jœuf`,
        libellecourt: 'JOF',
        segment_drg: 'C',
        codeinsee: '54280',
        codes_uic: '87191700',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.393082,
          47.973843,
        ],
      },
      properties: {
        nom: `Joigny`,
        libellecourt: 'JOI',
        segment_drg: 'B',
        codeinsee: '89206',
        codes_uic: '87683243',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7672389,
          49.8336807,
        ],
      },
      properties: {
        nom: `Joigny-sur-Meuse`,
        libellecourt: 'JGY',
        segment_drg: 'C',
        codeinsee: '08237',
        codes_uic: '87172031',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.143503,
          48.4442977,
        ],
      },
      properties: {
        nom: `Joinville`,
        libellecourt: 'JQI',
        segment_drg: 'C',
        codeinsee: '52250',
        codes_uic: '87175091',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3111464,
          42.5615245,
        ],
      },
      properties: {
        nom: `Joncet`,
        libellecourt: 'JCT',
        segment_drg: 'C',
        codeinsee: '66193',
        codes_uic: '87784710',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9988,
          47.5262,
        ],
      },
      properties: {
        nom: `Joncherey`,
        libellecourt: 'JYE',
        segment_drg: 'C',
        codeinsee: '90056',
        codes_uic: '87700153',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.819422,
          49.290057,
        ],
      },
      properties: {
        nom: `Jonchery-sur-Vesle`,
        libellecourt: 'JYV',
        segment_drg: 'C',
        codeinsee: '51308',
        codes_uic: '87171314',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.44164,
          45.4387456,
        ],
      },
      properties: {
        nom: `Jonzac`,
        libellecourt: 'JOH',
        segment_drg: 'C',
        codeinsee: '17197',
        codes_uic: '87491142',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.6675586,
          47.3541741,
        ],
      },
      properties: {
        nom: `Joué-lès-Tours`,
        libellecourt: 'JLT',
        segment_drg: 'C',
        codeinsee: '37122',
        codes_uic: '87571885',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5573972,
          48.5102582,
        ],
      },
      properties: {
        nom: `Jouy`,
        libellecourt: 'JOY',
        segment_drg: 'C',
        codeinsee: '28201',
        codes_uic: '87394155',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1635294,
          48.7650042,
        ],
      },
      properties: {
        nom: `Jouy-en-Josas`,
        libellecourt: 'JAS',
        segment_drg: 'B',
        codeinsee: '78322',
        codes_uic: '87393512',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.11144,
          43.570896,
        ],
      },
      properties: {
        nom: `Juan les Pins`,
        libellecourt: 'JAE',
        segment_drg: 'B',
        codeinsee: '06004',
        codes_uic: '87757666',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.38267,
          48.68917,
        ],
      },
      properties: {
        nom: `Juvisy-sur-Orge`,
        libellecourt: 'JYS',
        segment_drg: 'B',
        codeinsee: '91326',
        codes_uic: '87545244',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.84579,
          48.99244,
        ],
      },
      properties: {
        nom: `Juziers`,
        libellecourt: 'JUZ',
        segment_drg: 'B',
        codeinsee: '78327',
        codes_uic: '87381558',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.125352,
          49.0350585,
        ],
      },
      properties: {
        nom: `Kalhausen`,
        libellecourt: 'KHS',
        segment_drg: 'C',
        codeinsee: '57355',
        codes_uic: '87193664',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.7398306,
          48.0429857,
        ],
      },
      properties: {
        nom: `Ker Lann`,
        libellecourt: 'KEL',
        segment_drg: 'C',
        codeinsee: '35047',
        codes_uic: '87159947',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.1363795,
          47.5369524,
        ],
      },
      properties: {
        nom: `Kerhostin`,
        libellecourt: 'KHT',
        segment_drg: 'C',
        codeinsee: '56234',
        codes_uic: '87476432',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -4.3882136,
          48.4096627,
        ],
      },
      properties: {
        nom: `Kerhuon`,
        libellecourt: 'KHO',
        segment_drg: 'C',
        codeinsee: '29235',
        codes_uic: '87474213',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0489315,
          48.9656988,
        ],
      },
      properties: {
        nom: `Keskastel`,
        libellecourt: 'KES',
        segment_drg: 'C',
        codeinsee: '67234',
        codes_uic: '87215491',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.8549031,
          48.6793065,
        ],
      },
      properties: {
        nom: `Kilstett`,
        libellecourt: 'KIL',
        segment_drg: 'C',
        codeinsee: '67237',
        codes_uic: '87212324',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2735503,
          49.3965538,
        ],
      },
      properties: {
        nom: `Koenigsmacker`,
        libellecourt: 'KER',
        segment_drg: 'C',
        codeinsee: '57370',
        codes_uic: '87191619',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.5353085,
          48.3389532,
        ],
      },
      properties: {
        nom: `Kogenheim`,
        libellecourt: 'KEN',
        segment_drg: 'C',
        codeinsee: '67246',
        codes_uic: '87214114',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.75259,
          48.56358,
        ],
      },
      properties: {
        nom: `Krimmeri Meinau`,
        libellecourt: 'KRI',
        segment_drg: 'B',
        codeinsee: '67482',
        codes_uic: '87338525',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9690938,
          47.92396,
        ],
      },
      properties: {
        nom: `Kruth`,
        libellecourt: 'KRD',
        segment_drg: 'C',
        codeinsee: '68171',
        codes_uic: '87182642',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.8130449,
          48.741862,
        ],
      },
      properties: {
        nom: `Kurtzenhouse`,
        libellecourt: 'KUR',
        segment_drg: 'C',
        codeinsee: '67252',
        codes_uic: '87213660',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.516874,
          48.922211,
        ],
      },
      properties: {
        nom: `L'Abbaye`,
        libellecourt: 'ABJ',
        segment_drg: 'B',
        codeinsee: '93046',
        codes_uic: '87113886',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.620014,
          48.766229,
        ],
      },
      properties: {
        nom: `L'Aigle`,
        libellecourt: 'LAE',
        segment_drg: 'B',
        codeinsee: '61214',
        codes_uic: '87444638',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2049024,
          45.7783702,
        ],
      },
      properties: {
        nom: `L'Aiguille`,
        libellecourt: 'AGF',
        segment_drg: 'C',
        codeinsee: '87021',
        codes_uic: '87592634',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.618319,
          45.833299,
        ],
      },
      properties: {
        nom: `L'Arbresle`,
        libellecourt: 'LBL',
        segment_drg: 'B',
        codeinsee: '69010',
        codes_uic: '87721431',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.5564162,
          44.7909802,
        ],
      },
      properties: {
        nom: `L'Argentière Les Écrins`,
        libellecourt: 'LEE',
        segment_drg: 'C',
        codeinsee: '05006',
        codes_uic: '87763557',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3025298,
          43.7343716,
        ],
      },
      properties: {
        nom: `L'Ariane La Trinité`,
        libellecourt: 'ATJ',
        segment_drg: 'C',
        codeinsee: '06149',
        codes_uic: '87751529',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3517085,
          43.8397674,
        ],
      },
      properties: {
        nom: `L'Escarène`,
        libellecourt: 'ESR',
        segment_drg: 'C',
        codeinsee: '06057',
        codes_uic: '87756809',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3213598,
          43.363628,
        ],
      },
      properties: {
        nom: `L'Estaque`,
        libellecourt: 'LES',
        segment_drg: 'C',
        codeinsee: '13216',
        codes_uic: '87751602',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3712431,
          46.9069172,
        ],
      },
      properties: {
        nom: `L'Herbergement - Les Brouzils`,
        libellecourt: 'LHB',
        segment_drg: 'C',
        codeinsee: '85108',
        codes_uic: '87486126',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.8192987,
          48.123142,
        ],
      },
      properties: {
        nom: `L'Hermitage - Mordelles`,
        libellecourt: 'LHL',
        segment_drg: 'C',
        codeinsee: '35131',
        codes_uic: '87471060',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2130861,
          47.1691016,
        ],
      },
      properties: {
        nom: `L'Hôpital - du - Grosbois`,
        libellecourt: 'LHO',
        segment_drg: 'C',
        codeinsee: '25305',
        codes_uic: '87718528',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8002635,
          42.5894535,
        ],
      },
      properties: {
        nom: `L'Hospitalet - près - l'Andorre`,
        libellecourt: 'LHT',
        segment_drg: 'C',
        codeinsee: '09139',
        codes_uic: '87611517',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.20976,
          49.11482,
        ],
      },
      properties: {
        nom: `L'Isle - Adam - Parmain`,
        libellecourt: 'IAP',
        segment_drg: 'B',
        codeinsee: '95480',
        codes_uic: '87276527',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.21969,
          45.607645,
        ],
      },
      properties: {
        nom: `L'Isle - d'Abeau`,
        libellecourt: 'ISA',
        segment_drg: 'B',
        codeinsee: '38193',
        codes_uic: '87761239',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.089829,
          43.617185,
        ],
      },
      properties: {
        nom: `L'Isle - Jourdain`,
        libellecourt: 'LIJ',
        segment_drg: 'B',
        codeinsee: '32160',
        codes_uic: '87611806',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.047615,
          43.917393,
        ],
      },
      properties: {
        nom: `L''Isle - sur - la - Sorgue - Fontaine - de - Vaucluse`,
        libellecourt: 'LFV',
        segment_drg: 'B',
        codeinsee: '84054',
        codes_uic: '87765479',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.5812614,
          47.4473777,
        ],
      },
      properties: {
        nom: `L'Isle - sur - le - Doubs`,
        libellecourt: 'ISD',
        segment_drg: 'C',
        codeinsee: '25315',
        codes_uic: '87184572',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.1335359717958777,
          47.54653639699773,
        ],
      },
      properties: {
        nom: `L'Isthme`,
        libellecourt: 'LIH',
        segment_drg: 'C',
        codeinsee: '56234',
        codes_uic: '87476275',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.4845101,
          43.2858384,
        ],
      },
      properties: {
        nom: `La Barasse`,
        libellecourt: 'LBC',
        segment_drg: 'C',
        codeinsee: '13011',
        codes_uic: '87635581',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.31688,
          48.96633,
        ],
      },
      properties: {
        nom: `La Barre Ormesson`,
        libellecourt: 'LBJ',
        segment_drg: 'B',
        codeinsee: '95197',
        codes_uic: '87271171',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.6603088,
          47.2040872,
        ],
      },
      properties: {
        nom: `La Basse Indre - Saint-Herblain`,
        libellecourt: 'LBI',
        segment_drg: 'C',
        codeinsee: '44162',
        codes_uic: '87481069',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.80482,
          50.52799,
        ],
      },
      properties: {
        nom: `La Bassée - Violaines`,
        libellecourt: 'BII',
        segment_drg: 'B',
        codeinsee: '59051',
        codes_uic: '87342436',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9042849,
          44.5934829,
        ],
      },
      properties: {
        nom: `La Bastide - Saint-Laurent-les-Bains`,
        libellecourt: 'LBS',
        segment_drg: 'C',
        codeinsee: '48021',
        codes_uic: '87775171',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.3648441,
          47.2835196,
        ],
      },
      properties: {
        nom: `La Baule Les Pins`,
        libellecourt: 'BFP',
        segment_drg: 'C',
        codeinsee: '44055',
        codes_uic: '87481697',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.389102,
          47.28869,
        ],
      },
      properties: {
        nom: `La Baule-Escoublac`,
        libellecourt: 'LBE',
        segment_drg: 'B',
        codeinsee: '44055',
        codes_uic: '87481754',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.0341408,
          47.0832616,
        ],
      },
      properties: {
        nom: `La Bernerie-en-Retz`,
        libellecourt: 'BNX',
        segment_drg: 'C',
        codeinsee: '44012',
        codes_uic: '87481267',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4000426,
          47.4342356,
        ],
      },
      properties: {
        nom: `La Bohalle`,
        libellecourt: 'WBH',
        segment_drg: 'C',
        codeinsee: '49032',
        codes_uic: '87487843',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.035014,
          48.9884615,
        ],
      },
      properties: {
        nom: `La Bonneville-sur-Iton`,
        libellecourt: 'BVU',
        segment_drg: 'C',
        codeinsee: '27082',
        codes_uic: '87387142',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5058656,
          49.126985,
        ],
      },
      properties: {
        nom: `La Borne Blanche`,
        libellecourt: 'BBN',
        segment_drg: 'B',
        codeinsee: '60482',
        codes_uic: '87276287',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9817635,
          49.8596168,
        ],
      },
      properties: {
        nom: `La Bouteille`,
        libellecourt: 'WBT',
        segment_drg: 'C',
        codeinsee: '02109',
        codes_uic: '87297085',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.6056235,
          44.0625669,
        ],
      },
      properties: {
        nom: `La Brigue`,
        libellecourt: 'WBI',
        segment_drg: 'C',
        codeinsee: '06162',
        codes_uic: '87756874',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.8923199,
          43.9247771,
        ],
      },
      properties: {
        nom: `La Brillanne - Oraison`,
        libellecourt: 'LBO',
        segment_drg: 'C',
        codeinsee: '04034',
        codes_uic: '87751271',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.110452,
          48.2134717,
        ],
      },
      properties: {
        nom: `La Brohinière`,
        libellecourt: 'LBR',
        segment_drg: 'C',
        codeinsee: '35184',
        codes_uic: '87471094',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.628305,
          45.1839595,
        ],
      },
      properties: {
        nom: `La Cave`,
        libellecourt: 'WCA',
        segment_drg: 'C',
        codeinsee: '24256',
        codes_uic: '87595215',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.13797,
          48.84259,
        ],
      },
      properties: {
        nom: `La Celle-Saint-Cloud`,
        libellecourt: 'LCB',
        segment_drg: 'B',
        codeinsee: '78126',
        codes_uic: '87382432',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.2820678,
          46.676779,
        ],
      },
      properties: {
        nom: `La Chaize-le-Vicomte`,
        libellecourt: 'CZC',
        segment_drg: 'C',
        codeinsee: '85046',
        codes_uic: '87486308',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.5415,
          47.30859,
        ],
      },
      properties: {
        nom: `La Chapelle Aulnay`,
        libellecourt: 'CVM',
        segment_drg: 'C',
        codeinsee: '44035',
        codes_uic: '87590364',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.548012,
          47.2972029,
        ],
      },
      properties: {
        nom: `La Chapelle Centre`,
        libellecourt: 'EIF',
        segment_drg: 'C',
        codeinsee: '44035',
        codes_uic: '87481564',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8268193,
          47.8929293,
        ],
      },
      properties: {
        nom: `La Chapelle-Saint-Mesmin`,
        libellecourt: 'LCS',
        segment_drg: 'C',
        codeinsee: '45075',
        codes_uic: '87543371',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2184812,
          47.251227,
        ],
      },
      properties: {
        nom: `La Chapelle-sur-Loire`,
        libellecourt: 'WSL',
        segment_drg: 'C',
        codeinsee: '37058',
        codes_uic: '87571802',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.023883,
          47.179914,
        ],
      },
      properties: {
        nom: `La Charité-sur-Loire`,
        libellecourt: 'LAT',
        segment_drg: 'B',
        codeinsee: '58059',
        codes_uic: '87696195',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9613342,
          46.6048753,
        ],
      },
      properties: {
        nom: `La Chaumusse - Fort-du-Plasne`,
        libellecourt: 'WFP',
        segment_drg: 'C',
        codeinsee: '39126',
        codes_uic: '87715391',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3537834,
          47.6127952,
        ],
      },
      properties: {
        nom: `La Chaussée-Saint-Victor`,
        libellecourt: 'WSV',
        segment_drg: 'C',
        codeinsee: '41047',
        codes_uic: '87574251',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.632647,
          43.199593,
        ],
      },
      properties: {
        nom: `La Ciotat - Ceyreste`,
        libellecourt: 'LTV',
        segment_drg: 'B',
        codeinsee: '13028',
        codes_uic: '87751784',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2984195,
          46.2881469,
        ],
      },
      properties: {
        nom: `La Clayette - Baudemont`,
        libellecourt: 'CYB',
        segment_drg: 'C',
        codeinsee: '71022',
        codes_uic: '87694737',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9744005,
          45.5408509,
        ],
      },
      properties: {
        nom: `La Coquille`,
        libellecourt: 'LCQ',
        segment_drg: 'C',
        codeinsee: '24133',
        codes_uic: '87592501',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.38443,
          48.9242,
        ],
      },
      properties: {
        nom: `La Courneuve - Aubervilliers`,
        libellecourt: 'ALC',
        segment_drg: 'B',
        codeinsee: '93027',
        codes_uic: '87271304',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1011570895580505,
          45.604570970062376,
        ],
      },
      properties: {
        nom: `La Couronne`,
        libellecourt: 'LCO',
        segment_drg: 'C',
        codeinsee: '16113',
        codes_uic: '87583617',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.0517077,
          43.3398078,
        ],
      },
      properties: {
        nom: `La Couronne Carro`,
        libellecourt: 'CRQ',
        segment_drg: 'C',
        codeinsee: '13056',
        codes_uic: '87753541',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0687663,
          43.1449352,
        ],
      },
      properties: {
        nom: `La Crau`,
        libellecourt: 'LUV',
        segment_drg: 'C',
        codeinsee: '83047',
        codes_uic: '87755611',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.2962081,
          46.3604181,
        ],
      },
      properties: {
        nom: `La Crèche`,
        libellecourt: 'CCK',
        segment_drg: 'C',
        codeinsee: '79048',
        codes_uic: '87485474',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.1932575,
          47.300426,
        ],
      },
      properties: {
        nom: `La Croix de Méan`,
        libellecourt: 'XDM',
        segment_drg: 'C',
        codeinsee: '44184',
        codes_uic: '87481689',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.23763,
          48.89308,
        ],
      },
      properties: {
        nom: `La Défense`,
        libellecourt: 'LDU',
        segment_drg: 'B',
        codeinsee: '92062',
        codes_uic: '87382218',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.6528244,
          47.3388167,
        ],
      },
      properties: {
        nom: `La Douzillère`,
        libellecourt: 'DZD',
        segment_drg: 'C',
        codeinsee: '37122',
        codes_uic: '87009696',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3485813,
          49.696527,
        ],
      },
      properties: {
        nom: `La Faloise`,
        libellecourt: 'FLO',
        segment_drg: 'C',
        codeinsee: '80299',
        codes_uic: '87313239',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.36981,
          49.65802,
        ],
      },
      properties: {
        nom: `La Fère`,
        libellecourt: 'FER',
        segment_drg: 'B',
        codeinsee: '02304',
        codes_uic: '87296632',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.35161,
          48.484876,
        ],
      },
      properties: {
        nom: `La Ferté-Alais`,
        libellecourt: 'LFA',
        segment_drg: 'B',
        codeinsee: '91232',
        codes_uic: '87681452',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.639711,
          48.1864887,
        ],
      },
      properties: {
        nom: `La Ferté-Bernard`,
        libellecourt: 'LFB',
        segment_drg: 'B',
        codeinsee: '72132',
        codes_uic: '87396325',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9580537,
          47.3835442,
        ],
      },
      properties: {
        nom: `La Ferté-Imbault`,
        libellecourt: 'FTV',
        segment_drg: 'C',
        codeinsee: '41084',
        codes_uic: '87576082',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1207223,
          49.1797269,
        ],
      },
      properties: {
        nom: `La Ferté-Milon`,
        libellecourt: 'LFM',
        segment_drg: 'C',
        codeinsee: '02307',
        codes_uic: '87116673',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.93236,
          47.720975,
        ],
      },
      properties: {
        nom: `La Ferté-Saint-Aubin`,
        libellecourt: 'LFS',
        segment_drg: 'B',
        codeinsee: '45146',
        codes_uic: '87543124',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.125577,
          48.950741,
        ],
      },
      properties: {
        nom: `La Ferté-sous-Jouarre`,
        libellecourt: 'LFJ',
        segment_drg: 'B',
        codeinsee: '77183',
        codes_uic: '87116517',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9261079,
          50.5661459,
        ],
      },
      properties: {
        nom: `La Fontaine`,
        libellecourt: 'FOK',
        segment_drg: 'C',
        codeinsee: '59653',
        codes_uic: '87286427',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -4.3074515,
          48.4263093,
        ],
      },
      properties: {
        nom: `La Forest-Landerneau`,
        libellecourt: 'FOO',
        segment_drg: 'C',
        codeinsee: '29056',
        codes_uic: '87474221',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3170839,
          45.4977675,
        ],
      },
      properties: {
        nom: `La Fouillouse`,
        libellecourt: 'LFI',
        segment_drg: 'C',
        codeinsee: '42097',
        codes_uic: '87726232',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9720902,
          43.5581088,
        ],
      },
      properties: {
        nom: `La Frayère`,
        libellecourt: 'FYS',
        segment_drg: 'C',
        codeinsee: '06029',
        codes_uic: '87757740',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.8432199,
          48.593655,
        ],
      },
      properties: {
        nom: `La Fresnais`,
        libellecourt: 'FSN',
        segment_drg: 'C',
        codeinsee: '35116',
        codes_uic: '87478081',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.18019,
          48.98035,
        ],
      },
      properties: {
        nom: `La Frette - Montigny`,
        libellecourt: 'FMY',
        segment_drg: 'B',
        codeinsee: '95257',
        codes_uic: '87381871',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0100767,
          43.1187044,
        ],
      },
      properties: {
        nom: `La Garde`,
        libellecourt: 'LGD',
        segment_drg: 'B',
        codeinsee: '83062',
        codes_uic: '87755306',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2396414,
          48.9093952,
        ],
      },
      properties: {
        nom: `La Garenne-Colombes`,
        libellecourt: 'LGK',
        segment_drg: 'B',
        codeinsee: '92025',
        codes_uic: '87386003',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4963844,
          44.9288345,
        ],
      },
      properties: {
        nom: `La Gorp`,
        libellecourt: 'GOP',
        segment_drg: 'C',
        codeinsee: '33003',
        codes_uic: '87584755',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.9058105,
          48.6144207,
        ],
      },
      properties: {
        nom: `La Gouesnière - Cancale - Saint-Méloir-des-Ondes`,
        libellecourt: 'LGO',
        segment_drg: 'C',
        codeinsee: '35299',
        codes_uic: '87478099',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0329591,
          44.2098159,
        ],
      },
      properties: {
        nom: `La Grand-Combe`,
        libellecourt: 'LGC',
        segment_drg: 'C',
        codeinsee: '30132',
        codes_uic: '87775254',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8971614,
          48.3787751,
        ],
      },
      properties: {
        nom: `La Grande-Paroisse`,
        libellecourt: 'GPA',
        segment_drg: 'C',
        codeinsee: '77210',
        codes_uic: '87682476',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.477021,
          44.9356421,
        ],
      },
      properties: {
        nom: `La Grave d'Ambarès`,
        libellecourt: 'GVA',
        segment_drg: 'C',
        codeinsee: '33003',
        codes_uic: '87491274',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9485731,
          46.9477388,
        ],
      },
      properties: {
        nom: `La Guerche-sur-l'Aubois`,
        libellecourt: 'GUA',
        segment_drg: 'C',
        codeinsee: '18108',
        codes_uic: '87576470',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1931016,
          48.1138773,
        ],
      },
      properties: {
        nom: `La Guierche`,
        libellecourt: 'GUH',
        segment_drg: 'C',
        codeinsee: '72147',
        codes_uic: '87396036',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.392195,
          47.1615899,
        ],
      },
      properties: {
        nom: `La Haie-Fouassière`,
        libellecourt: 'LHE',
        segment_drg: 'C',
        codeinsee: '44070',
        codes_uic: '87481416',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.0036608,
          48.4961248,
        ],
      },
      properties: {
        nom: `La Hisse`,
        libellecourt: 'HIZ',
        segment_drg: 'C',
        codeinsee: '22327',
        codes_uic: '87478156',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.116,
          44.639879,
        ],
      },
      properties: {
        nom: `La Hume`,
        libellecourt: 'HUE',
        segment_drg: 'B',
        codeinsee: '33199',
        codes_uic: '87582635',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1056788,
          48.303495,
        ],
      },
      properties: {
        nom: `La Hutte Coulombiers`,
        libellecourt: 'LHU',
        segment_drg: 'C',
        codeinsee: '72097',
        codes_uic: '87396093',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.02347,
          46.12045,
        ],
      },
      properties: {
        nom: `La Jarrie`,
        libellecourt: 'JAJ',
        segment_drg: 'C',
        codeinsee: '17194',
        codes_uic: '87485185',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4803853,
          45.9944577,
        ],
      },
      properties: {
        nom: `La Jonchère-Saint-Maurice`,
        libellecourt: 'JOC',
        segment_drg: 'C',
        codeinsee: '87079',
        codes_uic: '87592337',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.910179,
          45.9657075,
        ],
      },
      properties: {
        nom: `La Joux`,
        libellecourt: 'JOO',
        segment_drg: 'C',
        codeinsee: '74056',
        codes_uic: '87746842',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0102736,
          44.228602,
        ],
      },
      properties: {
        nom: `La Levade`,
        libellecourt: 'LLE',
        segment_drg: 'C',
        codeinsee: '30132',
        codes_uic: '87775247',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0109416,
          48.4737398,
        ],
      },
      properties: {
        nom: `La Loupe`,
        libellecourt: 'LLP',
        segment_drg: 'B',
        codeinsee: '28214',
        codes_uic: '87394254',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0725804,
          50.6608037,
        ],
      },
      properties: {
        nom: `La Madeleine`,
        libellecourt: 'LMA',
        segment_drg: 'C',
        codeinsee: '59368',
        codes_uic: '87286187',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0395468,
          47.1396975,
        ],
      },
      properties: {
        nom: `La Marche`,
        libellecourt: 'MKF',
        segment_drg: 'C',
        codeinsee: '58155',
        codes_uic: '87691394',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.8439358,
          48.4996127,
        ],
      },
      properties: {
        nom: `La Méaugon`,
        libellecourt: 'MHT',
        segment_drg: 'C',
        codeinsee: '22144',
        codes_uic: '87473124',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.6407872,
          47.4313179,
        ],
      },
      properties: {
        nom: `La Membrolle-sur-Choisille`,
        libellecourt: 'LRL',
        segment_drg: 'C',
        codeinsee: '37214',
        codes_uic: '87571513',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.275818,
          47.397422,
        ],
      },
      properties: {
        nom: `La Ménitré`,
        libellecourt: 'MEQ',
        segment_drg: 'C',
        codeinsee: '49201',
        codes_uic: '87487884',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2123135,
          45.6212964,
        ],
      },
      properties: {
        nom: `La Meyze`,
        libellecourt: 'MYZ',
        segment_drg: 'C',
        codeinsee: '87096',
        codes_uic: '87592808',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.6596359,
          46.6068648,
        ],
      },
      properties: {
        nom: `La Mothe-Achard`,
        libellecourt: 'LEH',
        segment_drg: 'C',
        codeinsee: '85152',
        codes_uic: '87486423',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.1298415,
          46.3807592,
        ],
      },
      properties: {
        nom: `La Mothe-Saint-Héray`,
        libellecourt: 'LHY',
        segment_drg: 'C',
        codeinsee: '79246',
        codes_uic: '87485508',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.267586,
          48.591617,
        ],
      },
      properties: {
        nom: `La Norville - Saint-Germain-lès-Arpajon`,
        libellecourt: 'NGE',
        segment_drg: 'B',
        codeinsee: '91457',
        codes_uic: '87545459',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0351027,
          43.1364769,
        ],
      },
      properties: {
        nom: `La Pauline Hyères`,
        libellecourt: 'LPH',
        segment_drg: 'B',
        codeinsee: '83062',
        codes_uic: '87755314',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.5155698,
          43.2846765,
        ],
      },
      properties: {
        nom: `La Penne-sur-Huveaune`,
        libellecourt: 'PHE',
        segment_drg: 'C',
        codeinsee: '13070',
        codes_uic: '87751743',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.36257,
          48.91839,
        ],
      },
      properties: {
        nom: `La Plaine Stade de France - Saint-Denis - Aubervilliers`,
        libellecourt: 'LPN',
        segment_drg: 'B',
        codeinsee: '93066',
        codes_uic: '87164798',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.4413152,
          43.2905165,
        ],
      },
      properties: {
        nom: `La Pomme`,
        libellecourt: 'PPO',
        segment_drg: 'C',
        codeinsee: '13211',
        codes_uic: '87751719',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5383469,
          45.5740586,
        ],
      },
      properties: {
        nom: `La Porcherie`,
        libellecourt: 'PHR',
        segment_drg: 'C',
        codeinsee: '87120',
        codes_uic: '87592295',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6917009,
          47.3713848,
        ],
      },
      properties: {
        nom: `La Possonnière`,
        libellecourt: 'LPO',
        segment_drg: 'C',
        codeinsee: '49247',
        codes_uic: '87484337',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.6307729,
          48.0923448,
        ],
      },
      properties: {
        nom: `La Poterie`,
        libellecourt: 'PTK',
        segment_drg: 'C',
        codeinsee: '35238',
        codes_uic: '87334508',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1975675,
          43.33447,
        ],
      },
      properties: {
        nom: `La Redonne Ensuès`,
        libellecourt: 'RDS',
        segment_drg: 'C',
        codeinsee: '13033',
        codes_uic: '87753574',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.03057,
          44.579742,
        ],
      },
      properties: {
        nom: `La Réole`,
        libellecourt: 'REO',
        segment_drg: 'B',
        codeinsee: '33352',
        codes_uic: '87582866',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.360686,
          45.4041516,
        ],
      },
      properties: {
        nom: `La Ricamarie`,
        libellecourt: 'LRM',
        segment_drg: 'C',
        codeinsee: '42183',
        codes_uic: '87726703',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3655086,
          45.139681,
        ],
      },
      properties: {
        nom: `La Rivière de Mansac`,
        libellecourt: 'LDZ',
        segment_drg: 'C',
        codeinsee: '19124',
        codes_uic: '87594416',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2133331,
          46.8701507,
        ],
      },
      properties: {
        nom: `La Rivière-Drugeon`,
        libellecourt: 'RIW',
        segment_drg: 'C',
        codeinsee: '25493',
        codes_uic: '87715144',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -4.2050964,
          48.4740885,
        ],
      },
      properties: {
        nom: `La Roche-Maurice`,
        libellecourt: 'ROW',
        segment_drg: 'C',
        codeinsee: '29237',
        codes_uic: '87474262',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.303885,
          46.06756,
        ],
      },
      properties: {
        nom: `La Roche-sur-Foron`,
        libellecourt: 'LRF',
        segment_drg: 'B',
        codeinsee: '74224',
        codes_uic: '87746305',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.435621,
          46.67212,
        ],
      },
      properties: {
        nom: `La Roche-sur-Yon`,
        libellecourt: 'LRY',
        segment_drg: 'B',
        codeinsee: '85191',
        codes_uic: '87486019',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3895946,
          45.7401921,
        ],
      },
      properties: {
        nom: `La Rochefoucauld`,
        libellecourt: 'LRO',
        segment_drg: 'C',
        codeinsee: '16281',
        codes_uic: '87583427',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.145305,
          46.15269,
        ],
      },
      properties: {
        nom: `La Rochelle`,
        libellecourt: 'LRE',
        segment_drg: 'A',
        codeinsee: '17300',
        codes_uic: '87485003',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.1518412,
          46.16755,
        ],
      },
      properties: {
        nom: `La Rochelle Porte Dauphine`,
        libellecourt: 'LRA',
        segment_drg: 'C',
        codeinsee: '17300',
        codes_uic: '87437798',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.876966,
          43.116959,
        ],
      },
      properties: {
        nom: `La Seyne - Six-Fours`,
        libellecourt: 'LSM',
        segment_drg: 'B',
        codeinsee: '83126',
        codes_uic: '87755264',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.492151,
          46.239792,
        ],
      },
      properties: {
        nom: `La Souterraine`,
        libellecourt: 'LST',
        segment_drg: 'B',
        codeinsee: '23176',
        codes_uic: '87592378',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.0266367,
          47.8919891,
        ],
      },
      properties: {
        nom: `La Suze-sur-Sarthe`,
        libellecourt: 'LSZ',
        segment_drg: 'C',
        codeinsee: '72346',
        codes_uic: '87396366',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3734019,
          48.4077566,
        ],
      },
      properties: {
        nom: `La Taye`,
        libellecourt: 'LTA',
        segment_drg: 'C',
        codeinsee: '28337',
        codes_uic: '87394403',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.14295,
          44.636924,
        ],
      },
      properties: {
        nom: `La Teste-de-Buch`,
        libellecourt: 'TTE',
        segment_drg: 'B',
        codeinsee: '33529',
        codes_uic: '87582643',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7164921,
          45.7998818,
        ],
      },
      properties: {
        nom: `La Tour-de-Salvagny`,
        libellecourt: 'TSW',
        segment_drg: 'B',
        codeinsee: '69250',
        codes_uic: '87721548',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.450092,
          45.560277,
        ],
      },
      properties: {
        nom: `La Tour-du-Pin`,
        libellecourt: 'LTP',
        segment_drg: 'B',
        codeinsee: '38509',
        codes_uic: '87723478',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.4412021,
          46.7288206,
        ],
      },
      properties: {
        nom: `La Tricherie`,
        libellecourt: 'LTR',
        segment_drg: 'C',
        codeinsee: '86019',
        codes_uic: '87575183',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3114604,
          43.7427854,
        ],
      },
      properties: {
        nom: `La Trinité Victor`,
        libellecourt: 'TVR',
        segment_drg: 'C',
        codeinsee: '06149',
        codes_uic: '87756767',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.124911,
          45.849225,
        ],
      },
      properties: {
        nom: `La Valbonne`,
        libellecourt: 'VAO',
        segment_drg: 'B',
        codeinsee: '01032',
        codes_uic: '87723577',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.150866,
          45.6276,
        ],
      },
      properties: {
        nom: `La Verpillière`,
        libellecourt: 'VEI',
        segment_drg: 'B',
        codeinsee: '38537',
        codes_uic: '87723395',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.943674,
          48.7556954,
        ],
      },
      properties: {
        nom: `La Verrière`,
        libellecourt: 'VYL',
        segment_drg: 'B',
        codeinsee: '78644',
        codes_uic: '87393256',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5918028,
          46.3497686,
        ],
      },
      properties: {
        nom: `La Ville Gozet`,
        libellecourt: 'GOZ',
        segment_drg: 'C',
        codeinsee: '03185',
        codes_uic: '87641191',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2149646,
          44.0355186,
        ],
      },
      properties: {
        nom: `La Ville-Dieu-du-Temple`,
        libellecourt: 'LIX',
        segment_drg: 'C',
        codeinsee: '82096',
        codes_uic: '87611459',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5228734,
          48.4827197,
        ],
      },
      properties: {
        nom: `La Villette Saint-Prest`,
        libellecourt: 'VTP',
        segment_drg: 'C',
        codeinsee: '28358',
        codes_uic: '87394171',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.8247832,
          48.6651895,
        ],
      },
      properties: {
        nom: `La Wantzenau`,
        libellecourt: 'LWL',
        segment_drg: 'C',
        codeinsee: '67519',
        codes_uic: '87212316',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5129784,
          43.5473613,
        ],
      },
      properties: {
        nom: `Labège Innopole`,
        libellecourt: 'FRV',
        segment_drg: 'B',
        codeinsee: '31254',
        codes_uic: '87612002',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5329207,
          43.5305367,
        ],
      },
      properties: {
        nom: `Labège Village`,
        libellecourt: 'LEJ',
        segment_drg: 'C',
        codeinsee: '31254',
        codes_uic: '87612028',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.4288712,
          43.5870509,
        ],
      },
      properties: {
        nom: `Labenne`,
        libellecourt: 'LBN',
        segment_drg: 'C',
        codeinsee: '40133',
        codes_uic: '87673293',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.28011,
          46.77632,
        ],
      },
      properties: {
        nom: `Labergement-Sainte-Marie`,
        libellecourt: 'GYR',
        segment_drg: 'C',
        codeinsee: '25320',
        codes_uic: '87715219',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1361486,
          49.2885368,
        ],
      },
      properties: {
        nom: `Laboissière - Le Déluge`,
        libellecourt: 'DEJ',
        segment_drg: 'C',
        codeinsee: '60330',
        codes_uic: '87313676',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.9209296,
          44.2106292,
        ],
      },
      properties: {
        nom: `Labouheyre`,
        libellecourt: 'LBH',
        segment_drg: 'C',
        codeinsee: '40134',
        codes_uic: '87582551',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2594728,
          43.5425692,
        ],
      },
      properties: {
        nom: `Labruguière`,
        libellecourt: 'LBG',
        segment_drg: 'C',
        codeinsee: '81120',
        codes_uic: '87615526',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2654689,
          44.9202424,
        ],
      },
      properties: {
        nom: `Lacapelle-Viescamp`,
        libellecourt: 'WCV',
        segment_drg: 'C',
        codeinsee: '15088',
        codes_uic: '87645150',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8264798,
          45.6412701,
        ],
      },
      properties: {
        nom: `Lacelle`,
        libellecourt: 'WCL',
        segment_drg: 'C',
        codeinsee: '19095',
        codes_uic: '87592147',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6104913,
          45.1228045,
        ],
      },
      properties: {
        nom: `Lachaud Curmilhac`,
        libellecourt: 'LDQ',
        segment_drg: 'C',
        codeinsee: '43013',
        codes_uic: '87731828',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4138687,
          43.6638838,
        ],
      },
      properties: {
        nom: `Lacourtensourt`,
        libellecourt: 'LNT',
        segment_drg: 'C',
        codeinsee: '31555',
        codes_uic: '87611434',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.130859,
          45.6338338,
        ],
      },
      properties: {
        nom: `Lafarge`,
        libellecourt: 'LAF',
        segment_drg: 'C',
        codeinsee: '87150',
        codes_uic: '87592733',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.70404228,
          48.88218325,
        ],
      },
      properties: {
        nom: `Lagny - Thorigny`,
        libellecourt: 'LGY',
        segment_drg: 'B',
        codeinsee: '77464',
        codes_uic: '87116319',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9692195,
          44.1455256,
        ],
      },
      properties: {
        nom: `Laguépie`,
        libellecourt: 'LPB',
        segment_drg: 'C',
        codeinsee: '82088',
        codes_uic: '87613471',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.6923484,
          49.911256,
        ],
      },
      properties: {
        nom: `Laifour`,
        libellecourt: 'LFU',
        segment_drg: 'C',
        codeinsee: '08242',
        codes_uic: '87172072',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2172097,
          47.8740074,
        ],
      },
      properties: {
        nom: `Laigné - Saint-Gervais`,
        libellecourt: 'LSG',
        segment_drg: 'C',
        codeinsee: '72287',
        codes_uic: '87396556',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.44894,
          49.29276,
        ],
      },
      properties: {
        nom: `Laigneville`,
        libellecourt: 'LAI',
        segment_drg: 'B',
        codeinsee: '60342',
        codes_uic: '87276204',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.7495654,
          47.9717527,
        ],
      },
      properties: {
        nom: `Laillé`,
        libellecourt: 'LLJ',
        segment_drg: 'C',
        codeinsee: '35126',
        codes_uic: '87471144',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8222251,
          44.3750307,
        ],
      },
      properties: {
        nom: `Laissac`,
        libellecourt: 'LVY',
        segment_drg: 'C',
        codeinsee: '12120',
        codes_uic: '87783761',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.23304,
          47.298723,
        ],
      },
      properties: {
        nom: `Laissey`,
        libellecourt: 'LJY',
        segment_drg: 'C',
        codeinsee: '25323',
        codes_uic: '87718437',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5116628,
          44.3332389,
        ],
      },
      properties: {
        nom: `Lalbenque - Fontanes`,
        libellecourt: 'LNQ',
        segment_drg: 'C',
        codeinsee: '46109',
        codes_uic: '87613323',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7427811,
          44.8396152,
        ],
      },
      properties: {
        nom: `Lalinde`,
        libellecourt: 'LLK',
        segment_drg: 'C',
        codeinsee: '24223',
        codes_uic: '87584441',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8255002,
          44.1267231,
        ],
      },
      properties: {
        nom: `Lamagistère`,
        libellecourt: 'LWG',
        segment_drg: 'C',
        codeinsee: '82089',
        codes_uic: '87611855',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.0913333,
          43.6999662,
        ],
      },
      properties: {
        nom: `Lamanon`,
        libellecourt: 'LMN',
        segment_drg: 'C',
        codeinsee: '13049',
        codes_uic: '87753731',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.511546,
          48.46606,
        ],
      },
      properties: {
        nom: `Lamballe`,
        libellecourt: 'LAM',
        segment_drg: 'B',
        codeinsee: '22093',
        codes_uic: '87473108',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3854609,
          44.8450247,
        ],
      },
      properties: {
        nom: `Lamonzie-Saint-Martin`,
        libellecourt: 'LZE',
        segment_drg: 'C',
        codeinsee: '24225',
        codes_uic: '87584243',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.0451406,
          44.5628433,
        ],
      },
      properties: {
        nom: `Lamothe-Landerron`,
        libellecourt: 'LOH',
        segment_drg: 'C',
        codeinsee: '33221',
        codes_uic: '87582882',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.0215683,
          44.8537384,
        ],
      },
      properties: {
        nom: `Lamothe-Montravel`,
        libellecourt: 'LMH',
        segment_drg: 'C',
        codeinsee: '24226',
        codes_uic: '87584151',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.022499,
          47.593898,
        ],
      },
      properties: {
        nom: `Lamotte-Beuvron`,
        libellecourt: 'LBQ',
        segment_drg: 'B',
        codeinsee: '41106',
        codes_uic: '87543140',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.4921137,
          46.0610834,
        ],
      },
      properties: {
        nom: `Lamure-sur-Azergues`,
        libellecourt: 'LAZ',
        segment_drg: 'C',
        codeinsee: '69107',
        codes_uic: '87721860',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.1181396,
          48.761873,
        ],
      },
      properties: {
        nom: `Lancerf`,
        libellecourt: 'LNF',
        segment_drg: 'C',
        codeinsee: '22233',
        codes_uic: '87473850',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.8809758,
          45.2344784,
        ],
      },
      properties: {
        nom: `Lancey`,
        libellecourt: 'LCW',
        segment_drg: 'B',
        codeinsee: '38547',
        codes_uic: '87417501',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.290568,
          50.4687775,
        ],
      },
      properties: {
        nom: `Landas`,
        libellecourt: 'LDD',
        segment_drg: 'C',
        codeinsee: '59330',
        codes_uic: '87286575',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.0860172,
          47.7359877,
        ],
      },
      properties: {
        nom: `Landaul - Mendon`,
        libellecourt: 'LDJ',
        segment_drg: 'C',
        codeinsee: '56096',
        codes_uic: '87476226',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.3313716,
          48.5074212,
        ],
      },
      properties: {
        nom: `Landébia`,
        libellecourt: 'LDB',
        segment_drg: 'C',
        codeinsee: '22096',
        codes_uic: '87473264',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -4.256528,
          48.453572,
        ],
      },
      properties: {
        nom: `Landerneau`,
        libellecourt: 'LDO',
        segment_drg: 'B',
        codeinsee: '29103',
        codes_uic: '87474239',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.1251313,
          47.759578,
        ],
      },
      properties: {
        nom: `Landévant`,
        libellecourt: 'LDM',
        segment_drg: 'C',
        codeinsee: '56097',
        codes_uic: '87476234',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -4.082181,
          48.496002,
        ],
      },
      properties: {
        nom: `Landivisiau`,
        libellecourt: 'LDI',
        segment_drg: 'B',
        codeinsee: '29105',
        codes_uic: '87474270',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.681997,
          50.1283138,
        ],
      },
      properties: {
        nom: `Landrecies`,
        libellecourt: 'LNR',
        segment_drg: 'C',
        codeinsee: '59331',
        codes_uic: '87295642',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.7338182,
          45.5741713,
        ],
      },
      properties: {
        nom: `Landry`,
        libellecourt: 'LAY',
        segment_drg: 'C',
        codeinsee: '73142',
        codes_uic: '87741777',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.22792,
          48.65564,
        ],
      },
      properties: {
        nom: `Laneuveville-devant-Nancy`,
        libellecourt: 'LNV',
        segment_drg: 'C',
        codeinsee: '54300',
        codes_uic: '87141093',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.490672,
          45.10125,
        ],
      },
      properties: {
        nom: `Langeac`,
        libellecourt: 'LNG',
        segment_drg: 'C',
        codeinsee: '43112',
        codes_uic: '87734319',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.410557,
          47.324114,
        ],
      },
      properties: {
        nom: `Langeais`,
        libellecourt: 'LGS',
        segment_drg: 'B',
        codeinsee: '37123',
        codes_uic: '87571828',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.8573047,
          44.732776,
        ],
      },
      properties: {
        nom: `Langogne`,
        libellecourt: 'LGG',
        segment_drg: 'C',
        codeinsee: '48080',
        codes_uic: '87734350',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.25554,
          44.555448,
        ],
      },
      properties: {
        nom: `Langon`,
        libellecourt: 'LGE',
        segment_drg: 'B',
        codeinsee: '33227',
        codes_uic: '87582775',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3444064,
          47.8769474,
        ],
      },
      properties: {
        nom: `Langres`,
        libellecourt: 'LAG',
        segment_drg: 'C',
        codeinsee: '52269',
        codes_uic: '87142091',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.387367,
          43.114273,
        ],
      },
      properties: {
        nom: `Lannemezan`,
        libellecourt: 'LNZ',
        segment_drg: 'C',
        codeinsee: '65258',
        codes_uic: '87671123',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.460353,
          48.727638,
        ],
      },
      properties: {
        nom: `Lannion`,
        libellecourt: 'LNI',
        segment_drg: 'B',
        codeinsee: '22113',
        codes_uic: '87473223',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.860963,
          47.3351085,
        ],
      },
      properties: {
        nom: `Lantenay`,
        libellecourt: 'LWP',
        segment_drg: 'C',
        codeinsee: '21339',
        codes_uic: '87712323',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.62443,
          49.57061,
        ],
      },
      properties: {
        nom: `Laon`,
        libellecourt: 'LAO',
        segment_drg: 'B',
        codeinsee: '02408',
        codes_uic: '87296012',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.893393,
          46.2267825,
        ],
      },
      properties: {
        nom: `Lapeyrouse`,
        libellecourt: 'LPY',
        segment_drg: 'C',
        codeinsee: '63187',
        codes_uic: '87641043',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.8189832,
          44.3164984,
        ],
      },
      properties: {
        nom: `Laragne-Montéglin`,
        libellecourt: 'LRN',
        segment_drg: 'C',
        codeinsee: '05070',
        codes_uic: '87763755',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3839252,
          43.5966262,
        ],
      },
      properties: {
        nom: `Lardenne`,
        libellecourt: 'KPL',
        segment_drg: 'C',
        codeinsee: '31555',
        codes_uic: '87611939',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.255739,
          48.520639,
        ],
      },
      properties: {
        nom: `Lardy`,
        libellecourt: 'LYO',
        segment_drg: 'B',
        codeinsee: '91330',
        codes_uic: '87545160',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.513191,
          47.960998,
        ],
      },
      properties: {
        nom: `Laroche - Migennes`,
        libellecourt: 'LAR',
        segment_drg: 'B',
        codeinsee: '89257',
        codes_uic: '87683268',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7497189,
          44.2875163,
        ],
      },
      properties: {
        nom: `Laroque-Timbaut`,
        libellecourt: 'LRQ',
        segment_drg: 'C',
        codeinsee: '47138',
        codes_uic: '87586412',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1929167,
          44.9641658,
        ],
      },
      properties: {
        nom: `Laroquebrou`,
        libellecourt: 'LQB',
        segment_drg: 'C',
        codeinsee: '15094',
        codes_uic: '87645135',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.965009,
          46.3380917,
        ],
      },
      properties: {
        nom: `Lathus-Saint-Rémy`,
        libellecourt: 'LHX',
        segment_drg: 'C',
        codeinsee: '86120',
        codes_uic: '87575498',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9045027,
          42.4590464,
        ],
      },
      properties: {
        nom: `Latour-de-Carol - Enveitg`,
        libellecourt: 'LTL',
        segment_drg: 'C',
        codeinsee: '66066',
        codes_uic: '87611483',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          8.1826817,
          48.9676973,
        ],
      },
      properties: {
        nom: `Lauterbourg`,
        libellecourt: 'LTG',
        segment_drg: 'C',
        codeinsee: '67261',
        codes_uic: '87212464',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.760907,
          48.076206,
        ],
      },
      properties: {
        nom: `Laval`,
        libellecourt: 'LAL',
        segment_drg: 'A',
        codeinsee: '53130',
        codes_uic: '87478404',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9317113,
          44.9512118,
        ],
      },
      properties: {
        nom: `Laval-de-Cère`,
        libellecourt: 'LLC',
        segment_drg: 'C',
        codeinsee: '46163',
        codes_uic: '87594796',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2700972,
          46.3212869,
        ],
      },
      properties: {
        nom: `Lavaufranche`,
        libellecourt: 'LVF',
        segment_drg: 'C',
        codeinsee: '23104',
        codes_uic: '87597740',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.813146,
          43.703479,
        ],
      },
      properties: {
        nom: `Lavaur`,
        libellecourt: 'LVR',
        segment_drg: 'B',
        codeinsee: '81140',
        codes_uic: '87615476',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0890801,
          46.0795307,
        ],
      },
      properties: {
        nom: `Lavaveix-les-Mines`,
        libellecourt: 'LXM',
        segment_drg: 'C',
        codeinsee: '23105',
        codes_uic: '87597781',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.7512466,
          48.185596,
        ],
      },
      properties: {
        nom: `Laveline-devant-Bruyères`,
        libellecourt: 'LVB',
        segment_drg: 'C',
        codeinsee: '88262',
        codes_uic: '87144162',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9206361,
          49.2024666,
        ],
      },
      properties: {
        nom: `Lavilletertre`,
        libellecourt: 'VWT',
        segment_drg: 'C',
        codeinsee: '60356',
        codes_uic: '87381202',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9054101,
          45.1214503,
        ],
      },
      properties: {
        nom: `Lavoûte-sur-Loire`,
        libellecourt: 'LVL',
        segment_drg: 'C',
        codeinsee: '43119',
        codes_uic: '87734707',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.47747,
          48.93248,
        ],
      },
      properties: {
        nom: `Le Blanc-Mesnil`,
        libellecourt: 'BAM',
        segment_drg: 'B',
        codeinsee: '93029',
        codes_uic: '87271478',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9816599,
          43.5515285,
        ],
      },
      properties: {
        nom: `Le Bosquet`,
        libellecourt: 'BQJ',
        segment_drg: 'C',
        codeinsee: '06029',
        codes_uic: '87757757',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.42571,
          48.93096,
        ],
      },
      properties: {
        nom: `Le Bourget`,
        libellecourt: 'LBT',
        segment_drg: 'B',
        codeinsee: '93029',
        codes_uic: '87271395',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.614049444932229,
          44.870926495346204,
        ],
      },
      properties: {
        nom: `Le Bouscat - Saint-Germaine`,
        libellecourt: 'LGM',
        segment_drg: 'C',
        codeinsee: '33069',
        codes_uic: '87738096',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1689379,
          43.6912097,
        ],
      },
      properties: {
        nom: `Le Bousquet-d'Orb`,
        libellecourt: 'LBD',
        segment_drg: 'C',
        codeinsee: '34038',
        codes_uic: '87781583',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.450625,
          48.623287,
        ],
      },
      properties: {
        nom: `Le Bras de Fer`,
        libellecourt: 'BFX',
        segment_drg: 'B',
        codeinsee: '91228',
        codes_uic: '87681395',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2621478,
          45.4670838,
        ],
      },
      properties: {
        nom: `Le Breuil-sur-Couze`,
        libellecourt: 'BCZ',
        segment_drg: 'C',
        codeinsee: '63052',
        codes_uic: '87734228',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9204119,
          46.018805,
        ],
      },
      properties: {
        nom: `Le Buet`,
        libellecourt: 'BVQ',
        segment_drg: 'C',
        codeinsee: '74290',
        codes_uic: '87746883',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.942795,
          44.9056892,
        ],
      },
      properties: {
        nom: `Le Bugue`,
        libellecourt: 'BDG',
        segment_drg: 'C',
        codeinsee: '24067',
        codes_uic: '87595744',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9081756,
          44.84723,
        ],
      },
      properties: {
        nom: `Le Buisson-de-Cadouin`,
        libellecourt: 'LBU',
        segment_drg: 'C',
        codeinsee: '24068',
        codes_uic: '87595751',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4298135,
          45.2157957,
        ],
      },
      properties: {
        nom: `Le Burg`,
        libellecourt: 'WBW',
        segment_drg: 'C',
        codeinsee: '19278',
        codes_uic: '87594614',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2354236,
          43.6834141,
        ],
      },
      properties: {
        nom: `Le Cailar`,
        libellecourt: 'LCI',
        segment_drg: 'C',
        codeinsee: '30059',
        codes_uic: '87775825',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.5400454,
          50.0914606,
        ],
      },
      properties: {
        nom: `Le Cateau-Cambrésis`,
        libellecourt: 'LCA',
        segment_drg: 'C',
        codeinsee: '59136',
        codes_uic: '87295220',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3506694,
          47.3135164,
        ],
      },
      properties: {
        nom: `Le Cellier`,
        libellecourt: 'LEI',
        segment_drg: 'C',
        codeinsee: '44028',
        codes_uic: '87481168',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.188666,
          45.723796,
        ],
      },
      properties: {
        nom: `Le Cendre - Orcet`,
        libellecourt: 'CZJ',
        segment_drg: 'B',
        codeinsee: '63069',
        codes_uic: '87734160',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3223823,
          45.3947427,
        ],
      },
      properties: {
        nom: `Le Chambon-Feugerolles`,
        libellecourt: 'LCF',
        segment_drg: 'C',
        codeinsee: '42044',
        codes_uic: '87726711',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.552692,
          48.877129,
        ],
      },
      properties: {
        nom: `Le Chénay Gagny`,
        libellecourt: 'CGG',
        segment_drg: 'B',
        codeinsee: '93032',
        codes_uic: '87113522',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.086248,
          46.023984,
        ],
      },
      properties: {
        nom: `Le Coteau`,
        libellecourt: 'LCU',
        segment_drg: 'C',
        codeinsee: '42071',
        codes_uic: '87726828',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4924649,
          48.5661679,
        ],
      },
      properties: {
        nom: `Le Coudray-Montceaux`,
        libellecourt: 'CEX',
        segment_drg: 'C',
        codeinsee: '91179',
        codes_uic: '87681635',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.4304403,
          46.807815,
        ],
      },
      properties: {
        nom: `Le Creusot`,
        libellecourt: 'LCR',
        segment_drg: 'B',
        codeinsee: '71153',
        codes_uic: '87694000',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.499513,
          46.765343,
        ],
      },
      properties: {
        nom: `Le Creusot - Montceau-les-Mines - Montchanin TGV`,
        libellecourt: 'LCM',
        segment_drg: 'A',
        codeinsee: '71187',
        codes_uic: '87694109',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.507442,
          47.289836,
        ],
      },
      properties: {
        nom: `Le Croisic`,
        libellecourt: 'LCC',
        segment_drg: 'C',
        codeinsee: '44049',
        codes_uic: '87481788',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0793364,
          46.2110908,
        ],
      },
      properties: {
        nom: `Le Dorat`,
        libellecourt: 'LDT',
        segment_drg: 'C',
        codeinsee: '87059',
        codes_uic: '87592543',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8442467,
          43.4178193,
        ],
      },
      properties: {
        nom: `Le Dramont`,
        libellecourt: 'DRW',
        segment_drg: 'C',
        codeinsee: '83118',
        codes_uic: '87757542',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2827183,
          43.4043288,
        ],
      },
      properties: {
        nom: `Le Fauga`,
        libellecourt: 'FGA',
        segment_drg: 'C',
        codeinsee: '31181',
        codes_uic: '87611046',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.8858084,
          48.0967372,
        ],
      },
      properties: {
        nom: `Le Genest-Saint-Isle`,
        libellecourt: 'GST',
        segment_drg: 'C',
        codeinsee: '53103',
        codes_uic: '87478743',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2271143,
          49.1505827,
        ],
      },
      properties: {
        nom: `Le Grand Jardin`,
        libellecourt: 'GDJ',
        segment_drg: 'C',
        codeinsee: '14366',
        codes_uic: '87444323',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.4231117,
          45.3966261,
        ],
      },
      properties: {
        nom: `Le Grand-Lemps`,
        libellecourt: 'LGL',
        segment_drg: 'C',
        codeinsee: '38182',
        codes_uic: '87747220',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.140338,
          43.5371273,
        ],
      },
      properties: {
        nom: `Le Grau-du-Roi`,
        libellecourt: 'LGR',
        segment_drg: 'B',
        codeinsee: '30133',
        codes_uic: '87775866',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7722209,
          50.8163364,
        ],
      },
      properties: {
        nom: `Le Haut Banc`,
        libellecourt: 'HTB',
        segment_drg: 'C',
        codeinsee: '62329',
        codes_uic: '87316687',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.125677,
          49.492996,
        ],
      },
      properties: {
        nom: `Le Havre`,
        libellecourt: 'LHA',
        segment_drg: 'A',
        codeinsee: '76351',
        codes_uic: '87413013',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1608551,
          49.4998007,
        ],
      },
      properties: {
        nom: `Le Havre Graville`,
        libellecourt: 'LHG',
        segment_drg: 'C',
        codeinsee: '76351',
        codes_uic: '87413203',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7533365,
          45.0905458,
        ],
      },
      properties: {
        nom: `Le Lioran`,
        libellecourt: 'LLN',
        segment_drg: 'C',
        codeinsee: '15101',
        codes_uic: '87645473',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3430972,
          43.3902379,
        ],
      },
      properties: {
        nom: `Le Luc - Le Cannet`,
        libellecourt: 'LEC',
        segment_drg: 'C',
        codeinsee: '83031',
        codes_uic: '87755405',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.192578,
          47.995689,
        ],
      },
      properties: {
        nom: `Le Mans`,
        libellecourt: 'LEN',
        segment_drg: 'A',
        codeinsee: '72181',
        codes_uic: '87396002',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.17445113,
          48.014871,
        ],
      },
      properties: {
        nom: `Le Mans Hôpital-Université`,
        libellecourt: 'LMV',
        segment_drg: 'B',
        codeinsee: '72181',
        codes_uic: '87743872',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.624116,
          48.540086,
        ],
      },
      properties: {
        nom: `Le Mée-sur-Seine`,
        libellecourt: 'WEE',
        segment_drg: 'B',
        codeinsee: '77285',
        codes_uic: '87682179',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7484432,
          45.7684995,
        ],
      },
      properties: {
        nom: `Le Méridien La Ferrière`,
        libellecourt: 'WER',
        segment_drg: 'B',
        codeinsee: '69244',
        codes_uic: '87721522',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2832169,
          48.7024888,
        ],
      },
      properties: {
        nom: `Le Merlerault`,
        libellecourt: 'LLT',
        segment_drg: 'C',
        codeinsee: '61275',
        codes_uic: '87444588',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7532645,
          49.3594029,
        ],
      },
      properties: {
        nom: `Le Meux - La Croix-Saint-Ouen`,
        libellecourt: 'LXS',
        segment_drg: 'C',
        codeinsee: '60402',
        codes_uic: '87276733',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.8809741,
          49.2493263,
        ],
      },
      properties: {
        nom: `Le Molay-Littry`,
        libellecourt: 'MLW',
        segment_drg: 'C',
        codeinsee: '14370',
        codes_uic: '87444083',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.252057,
          44.5089682,
        ],
      },
      properties: {
        nom: `Le Monastier-Pin-Moriès`,
        libellecourt: 'LMR',
        segment_drg: 'C',
        codeinsee: '48099',
        codes_uic: '87783308',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.346898,
          47.143831,
        ],
      },
      properties: {
        nom: `Le Pallet`,
        libellecourt: 'PLL',
        segment_drg: 'B',
        codeinsee: '44117',
        codes_uic: '87481424',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.795402,
          45.371797,
        ],
      },
      properties: {
        nom: `Le Péage-de-Roussillon`,
        libellecourt: 'PGR',
        segment_drg: 'B',
        codeinsee: '38298',
        codes_uic: '87722678',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.4763815,
          48.3646275,
        ],
      },
      properties: {
        nom: `Le Pénity`,
        libellecourt: 'PYV',
        segment_drg: 'C',
        codeinsee: '22052',
        codes_uic: '87473553',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.856057,
          48.6933406,
        ],
      },
      properties: {
        nom: `Le Perray-en-Yvelines`,
        libellecourt: 'LPE',
        segment_drg: 'B',
        codeinsee: '78486',
        codes_uic: '87393298',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.479586,
          48.5735652,
        ],
      },
      properties: {
        nom: `Le Plessis Chenet`,
        libellecourt: 'IBM',
        segment_drg: 'C',
        codeinsee: '91179',
        codes_uic: '87681627',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7448073,
          49.0959033,
        ],
      },
      properties: {
        nom: `Le Plessis-Belleville`,
        libellecourt: 'PLB',
        segment_drg: 'B',
        codeinsee: '60500',
        codes_uic: '87271551',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.50273,
          50.33006,
        ],
      },
      properties: {
        nom: `Le Poirier Université`,
        libellecourt: 'LEP',
        segment_drg: 'C',
        codeinsee: '59603',
        codes_uic: '87343210',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.680772,
          45.524636,
        ],
      },
      properties: {
        nom: `Le Pont-de-Beauvoisin`,
        libellecourt: 'POB',
        segment_drg: 'C',
        codeinsee: '38315',
        codes_uic: '87741470',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.6998669,
          45.1251549,
        ],
      },
      properties: {
        nom: `Le Pont-de-Claix`,
        libellecourt: 'PDC',
        segment_drg: 'C',
        codeinsee: '38317',
        codes_uic: '87747519',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.4331446,
          47.2825404,
        ],
      },
      properties: {
        nom: `Le Pouliguen`,
        libellecourt: 'LIG',
        segment_drg: 'C',
        codeinsee: '44135',
        codes_uic: '87481762',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.892421,
          45.042866,
        ],
      },
      properties: {
        nom: `Le Puy-en-Velay`,
        libellecourt: 'LPU',
        segment_drg: 'B',
        codeinsee: '43157',
        codes_uic: '87734699',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.64552,
          50.25021,
        ],
      },
      properties: {
        nom: `Le Quesnoy`,
        libellecourt: 'LQY',
        segment_drg: 'B',
        codeinsee: '59481',
        codes_uic: '87295857',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.512062,
          48.889325,
        ],
      },
      properties: {
        nom: `Le Raincy - Villemomble - Montfermeil`,
        libellecourt: 'RVM',
        segment_drg: 'B',
        codeinsee: '93062',
        codes_uic: '87113472',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2355043,
          44.8565391,
        ],
      },
      properties: {
        nom: `Le Rouget`,
        libellecourt: 'LRG',
        segment_drg: 'C',
        codeinsee: '15268',
        codes_uic: '87645192',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7930798,
          42.6787626,
        ],
      },
      properties: {
        nom: `Le Soler`,
        libellecourt: 'LSL',
        segment_drg: 'C',
        codeinsee: '66195',
        codes_uic: '87784512',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.26056,
          48.93093,
        ],
      },
      properties: {
        nom: `Le Stade`,
        libellecourt: 'LSD',
        segment_drg: 'B',
        codeinsee: '92025',
        codes_uic: '87381095',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.025556,
          44.632507,
        ],
      },
      properties: {
        nom: `Le Teich`,
        libellecourt: 'TEH',
        segment_drg: 'B',
        codeinsee: '33527',
        codes_uic: '87582601',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.685992,
          44.5525285,
        ],
      },
      properties: {
        nom: `Le Teil`,
        libellecourt: 'LTE',
        segment_drg: 'C',
        codeinsee: '07319',
        codes_uic: '87764472',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.6944581,
          48.2672964,
        ],
      },
      properties: {
        nom: `Le Theil - La Rouge`,
        libellecourt: 'LFQ',
        segment_drg: 'C',
        codeinsee: '61356',
        codes_uic: '87396333',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.4319925,
          47.918742,
        ],
      },
      properties: {
        nom: `Le Theil-de-Bretagne`,
        libellecourt: 'TIB',
        segment_drg: 'C',
        codeinsee: '35333',
        codes_uic: '87471342',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9962663,
          43.9265047,
        ],
      },
      properties: {
        nom: `Le Thor`,
        libellecourt: 'LTH',
        segment_drg: 'C',
        codeinsee: '84132',
        codes_uic: '87765453',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4014496,
          43.5956037,
        ],
      },
      properties: {
        nom: `Le Toec`,
        libellecourt: 'TOE',
        segment_drg: 'C',
        codeinsee: '31555',
        codes_uic: '87353573',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9243444,
          43.4746639,
        ],
      },
      properties: {
        nom: `Le Trayas`,
        libellecourt: 'TYA',
        segment_drg: 'C',
        codeinsee: '83118',
        codes_uic: '87757575',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3763738,
          50.0628592,
        ],
      },
      properties: {
        nom: `Le Tréport - Mers-les-Bains`,
        libellecourt: 'LTM',
        segment_drg: 'C',
        codeinsee: '76711',
        codes_uic: '87317529',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.21636,
          48.85645,
        ],
      },
      properties: {
        nom: `Le Val d'Or`,
        libellecourt: 'VDO',
        segment_drg: 'B',
        codeinsee: '92064',
        codes_uic: '87382366',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.0650925,
          45.5492065,
        ],
      },
      properties: {
        nom: `Le Verdon-sur-Mer`,
        libellecourt: 'LVD',
        segment_drg: 'C',
        codeinsee: '33544',
        codes_uic: '87581389',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6116214,
          43.1894138,
        ],
      },
      properties: {
        nom: `Le Vernet d'Ariège`,
        libellecourt: 'VVT',
        segment_drg: 'C',
        codeinsee: '09331',
        codes_uic: '87611350',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.43148,
          48.78934,
        ],
      },
      properties: {
        nom: `Le Vert de Maisons`,
        libellecourt: 'VDP',
        segment_drg: 'B',
        codeinsee: '94002',
        codes_uic: '87681247',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4829396,
          47.5739696,
        ],
      },
      properties: {
        nom: `Le Vieux Briollay`,
        libellecourt: 'VXB',
        segment_drg: 'C',
        codeinsee: '49048',
        codes_uic: '87484139',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.05977,
          50.4278,
        ],
      },
      properties: {
        nom: `Leforest`,
        libellecourt: 'LEF',
        segment_drg: 'B',
        codeinsee: '62497',
        codes_uic: '87345223',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.828254,
          50.426818,
        ],
      },
      properties: {
        nom: `Lens`,
        libellecourt: 'LNS',
        segment_drg: 'B',
        codeinsee: '62498',
        codes_uic: '87345025',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.667103,
          45.82163,
        ],
      },
      properties: {
        nom: `Lentilly`,
        libellecourt: 'LTY',
        segment_drg: 'B',
        codeinsee: '69112',
        codes_uic: '87721555',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.6824009,
          45.8165247,
        ],
      },
      properties: {
        nom: `Lentilly Charpenay`,
        libellecourt: 'CNJ',
        segment_drg: 'B',
        codeinsee: '69112',
        codes_uic: '87566919',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.6722884,
          48.1727165,
        ],
      },
      properties: {
        nom: `Lépanges`,
        libellecourt: 'LPV',
        segment_drg: 'C',
        codeinsee: '88266',
        codes_uic: '87144048',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7649834,
          45.541519,
        ],
      },
      properties: {
        nom: `Lépin-le-Lac - La Bauche`,
        libellecourt: 'LPL',
        segment_drg: 'C',
        codeinsee: '73145',
        codes_uic: '87741439',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.5387053,
          48.7972181,
        ],
      },
      properties: {
        nom: `Lérouville`,
        libellecourt: 'LEL',
        segment_drg: 'C',
        codeinsee: '55288',
        codes_uic: '87175240',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.5754876,
          45.5421091,
        ],
      },
      properties: {
        nom: `Les Abrets - Fitilieu`,
        libellecourt: 'FII',
        segment_drg: 'C',
        codeinsee: '38165',
        codes_uic: '87741496',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.482498,
          43.455524,
        ],
      },
      properties: {
        nom: `Les Arcs - Draguignan`,
        libellecourt: 'LAC',
        segment_drg: 'B',
        codeinsee: '83004',
        codes_uic: '87755447',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.409046,
          48.782945,
        ],
      },
      properties: {
        nom: `Les Ardoines`,
        libellecourt: 'LAD',
        segment_drg: 'B',
        codeinsee: '94081',
        codes_uic: '87492108',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.906629,
          47.926801,
        ],
      },
      properties: {
        nom: `Les Aubrais`,
        libellecourt: 'LAB',
        segment_drg: 'A',
        codeinsee: '45147',
        codes_uic: '87543017',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.377389,
          45.9046873,
        ],
      },
      properties: {
        nom: `Les Bardys`,
        libellecourt: 'LBY',
        segment_drg: 'C',
        codeinsee: '87178',
        codes_uic: '87592048',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.010967,
          50.2798638,
        ],
      },
      properties: {
        nom: `Les Bons Pères`,
        libellecourt: 'BJP',
        segment_drg: 'C',
        codeinsee: '59514',
        codes_uic: '87297515',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8391969,
          45.9067455,
        ],
      },
      properties: {
        nom: `Les Bossons`,
        libellecourt: 'BHS',
        segment_drg: 'C',
        codeinsee: '74056',
        codes_uic: '87746768',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.511884,
          48.824926,
        ],
      },
      properties: {
        nom: `Les Boullereaux Champigny`,
        libellecourt: 'BXP',
        segment_drg: 'B',
        codeinsee: '94017',
        codes_uic: '87113779',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6862985,
          42.7862854,
        ],
      },
      properties: {
        nom: `Les Cabannes`,
        libellecourt: 'CNB',
        segment_drg: 'C',
        codeinsee: '09070',
        codes_uic: '87611574',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1860831,
          43.779707,
        ],
      },
      properties: {
        nom: `Les Cabrils`,
        libellecourt: 'KBI',
        segment_drg: 'C',
        codeinsee: '34233',
        codes_uic: '87781559',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7546798,
          43.7340198,
        ],
      },
      properties: {
        nom: `Les Cauquillous`,
        libellecourt: 'CQO',
        segment_drg: 'C',
        codeinsee: '81140',
        codes_uic: '87328021',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.955265,
          48.9922407,
        ],
      },
      properties: {
        nom: `Les Clairières de Verneuil`,
        libellecourt: 'KVE',
        segment_drg: 'B',
        codeinsee: '78642',
        codes_uic: '87386664',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.499415,
          48.89244,
        ],
      },
      properties: {
        nom: `Les Coquetiers`,
        libellecourt: 'LQT',
        segment_drg: 'B',
        codeinsee: '93077',
        codes_uic: '87113845',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.7643532,
          43.3699568,
        ],
      },
      properties: {
        nom: `Les Deux Jumeaux`,
        libellecourt: 'HPZ',
        segment_drg: 'C',
        codeinsee: '64260',
        codes_uic: '87677104',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9108215,
          45.8746675,
        ],
      },
      properties: {
        nom: `Les Échets`,
        libellecourt: 'ECH',
        segment_drg: 'C',
        codeinsee: '01249',
        codes_uic: '87723718',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.0437576,
          45.0942299,
        ],
      },
      properties: {
        nom: `Les Églisottes-et-Chalaures`,
        libellecourt: 'EGE',
        segment_drg: 'C',
        codeinsee: '33154',
        codes_uic: '87584532',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8904047,
          48.7217171,
        ],
      },
      properties: {
        nom: `Les Essarts-le-Roi`,
        libellecourt: 'LSI',
        segment_drg: 'B',
        codeinsee: '78220',
        codes_uic: '87393280',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0081942,
          44.9411916,
        ],
      },
      properties: {
        nom: `Les Eyzies-de-Tayac-Sireuil`,
        libellecourt: 'EYZ',
        segment_drg: 'C',
        codeinsee: '24172',
        codes_uic: '87595736',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7541523,
          45.7774345,
        ],
      },
      properties: {
        nom: `Les Flachères`,
        libellecourt: 'FLD',
        segment_drg: 'C',
        codeinsee: '69044',
        codes_uic: '87721704',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8496343,
          50.940831,
        ],
      },
      properties: {
        nom: `Les Fontinettes`,
        libellecourt: 'LTS',
        segment_drg: 'C',
        codeinsee: '62193',
        codes_uic: '87317305',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.31441,
          48.92007,
        ],
      },
      properties: {
        nom: `Les Grésillons`,
        libellecourt: 'LEG',
        segment_drg: 'B',
        codeinsee: '92036',
        codes_uic: '87272146',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.796924,
          45.8935639,
        ],
      },
      properties: {
        nom: `Les Houches`,
        libellecourt: 'HOU',
        segment_drg: 'C',
        codeinsee: '74143',
        codes_uic: '87746743',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.00184,
          49.10635,
        ],
      },
      properties: {
        nom: `Les Islettes`,
        libellecourt: 'ISL',
        segment_drg: 'C',
        codeinsee: '55253',
        codes_uic: '87175711',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3208165,
          48.1094359,
        ],
      },
      properties: {
        nom: `Les Lacs`,
        libellecourt: 'LCK',
        segment_drg: 'C',
        codeinsee: '35252',
        codes_uic: '87471516',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.462602,
          47.543054,
        ],
      },
      properties: {
        nom: `Les Laumes Alésia`,
        libellecourt: 'LLA',
        segment_drg: 'B',
        codeinsee: '21663',
        codes_uic: '87713115',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.3828609,
          48.4262577,
        ],
      },
      properties: {
        nom: `Les Mais`,
        libellecourt: 'LQW',
        segment_drg: 'C',
        codeinsee: '22025',
        codes_uic: '87473587',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.193228,
          45.688155,
        ],
      },
      properties: {
        nom: `Les Martres-de-Veyre`,
        libellecourt: 'MVY',
        segment_drg: 'B',
        codeinsee: '63214',
        codes_uic: '87734178',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8589899,
          45.9166347,
        ],
      },
      properties: {
        nom: `Les Moussoux`,
        libellecourt: 'MQK',
        segment_drg: 'C',
        codeinsee: '74056',
        codes_uic: '87746818',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.0009628,
          47.0618983,
        ],
      },
      properties: {
        nom: `Les Moutiers-en-Retz`,
        libellecourt: 'MVB',
        segment_drg: 'C',
        codeinsee: '44106',
        codes_uic: '87481259',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9129871,
          48.9927897,
        ],
      },
      properties: {
        nom: `Les Mureaux`,
        libellecourt: 'LMU',
        segment_drg: 'B',
        codeinsee: '78440',
        codes_uic: '87386680',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.47633,
          49.03234,
        ],
      },
      properties: {
        nom: `Les Noues`,
        libellecourt: 'LNX',
        segment_drg: 'B',
        codeinsee: '95280',
        codes_uic: '87276238',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.6079476,
          46.9718269,
        ],
      },
      properties: {
        nom: `Les Ormes`,
        libellecourt: 'ORE',
        segment_drg: 'C',
        codeinsee: '86183',
        codes_uic: '87575118',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.511781,
          48.902418,
        ],
      },
      properties: {
        nom: `Les Pavillons-sous-Bois`,
        libellecourt: 'PVB',
        segment_drg: 'B',
        codeinsee: '93057',
        codes_uic: '87113852',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8472858,
          45.9125671,
        ],
      },
      properties: {
        nom: `Les Pélerins`,
        libellecourt: 'PKN',
        segment_drg: 'C',
        codeinsee: '74056',
        codes_uic: '87746776',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1467144,
          47.0055213,
        ],
      },
      properties: {
        nom: `Les Perrières`,
        libellecourt: 'PEF',
        segment_drg: 'C',
        codeinsee: '58303',
        codes_uic: '87691600',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.888753,
          45.9394594,
        ],
      },
      properties: {
        nom: `Les Praz de Chamonix`,
        libellecourt: 'PZI',
        segment_drg: 'C',
        codeinsee: '74056',
        codes_uic: '87746826',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7025282,
          47.3325521,
        ],
      },
      properties: {
        nom: `Les Quatre Roues`,
        libellecourt: 'QRS',
        segment_drg: 'C',
        codeinsee: '41185',
        codes_uic: '87576181',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6439067,
          44.9974864,
        ],
      },
      properties: {
        nom: `Les Quatre-Routes-du-Lot`,
        libellecourt: 'LQR',
        segment_drg: 'C',
        codeinsee: '46232',
        codes_uic: '87594564',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3528032,
          43.6024594,
        ],
      },
      properties: {
        nom: `Les Ramassiers`,
        libellecourt: 'RAM',
        segment_drg: 'C',
        codeinsee: '31555',
        codes_uic: '87353581',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.2205371,
          47.3625386,
        ],
      },
      properties: {
        nom: `Les Rosiers-sur-Loire`,
        libellecourt: 'ROR',
        segment_drg: 'C',
        codeinsee: '49261',
        codes_uic: '87487876',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.13201,
          47.57518,
        ],
      },
      properties: {
        nom: `Les Sables Blancs`,
        libellecourt: 'LSA',
        segment_drg: 'C',
        codeinsee: '56168',
        codes_uic: '87476267',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.78105,
          46.499917,
        ],
      },
      properties: {
        nom: `Les Sables-d'Olonne`,
        libellecourt: 'LSO',
        segment_drg: 'B',
        codeinsee: '85194',
        codes_uic: '87486449',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2804008,
          44.4832687,
        ],
      },
      properties: {
        nom: `Les Salelles`,
        libellecourt: 'SQL',
        segment_drg: 'C',
        codeinsee: '48185',
        codes_uic: '87783514',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.417366,
          48.7454924,
        ],
      },
      properties: {
        nom: `Les Saules`,
        libellecourt: 'LSW',
        segment_drg: 'B',
        codeinsee: '94054',
        codes_uic: '87546226',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8991603,
          45.9505693,
        ],
      },
      properties: {
        nom: `Les Tines`,
        libellecourt: 'TNJ',
        segment_drg: 'C',
        codeinsee: '74056',
        codes_uic: '87746834',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6001018,
          46.4147461,
        ],
      },
      properties: {
        nom: `Les Trillers`,
        libellecourt: 'TIS',
        segment_drg: 'C',
        codeinsee: '03301',
        codes_uic: '87641373',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.257909,
          48.913408,
        ],
      },
      properties: {
        nom: `Les Vallées`,
        libellecourt: 'LWA',
        segment_drg: 'B',
        codeinsee: '92009',
        codes_uic: '87386300',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8574682,
          45.088775,
        ],
      },
      properties: {
        nom: `Les Versannes`,
        libellecourt: 'VSJ',
        segment_drg: 'C',
        codeinsee: '24156',
        codes_uic: '87595702',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.579828,
          48.823182,
        ],
      },
      properties: {
        nom: `Les Yvris Noisy-le-Grand`,
        libellecourt: 'LYV',
        segment_drg: 'B',
        codeinsee: '93051',
        codes_uic: '87113803',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.9454015,
          45.3035166,
        ],
      },
      properties: {
        nom: `Lesparre-Médoc`,
        libellecourt: 'LSE',
        segment_drg: 'C',
        codeinsee: '33240',
        codes_uic: '87581314',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.11771,
          50.59068,
        ],
      },
      properties: {
        nom: `Lesquin`,
        libellecourt: 'LEQ',
        segment_drg: 'B',
        codeinsee: '59343',
        codes_uic: '87286849',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9132139,
          43.1188355,
        ],
      },
      properties: {
        nom: `Lestelle-de-Saint-Martory`,
        libellecourt: 'LTJ',
        segment_drg: 'C',
        codeinsee: '31296',
        codes_uic: '87611111',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0128555,
          42.9327725,
        ],
      },
      properties: {
        nom: `Leucate La Franqui`,
        libellecourt: 'LEU',
        segment_drg: 'C',
        codeinsee: '11202',
        codes_uic: '87781088',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.8366811,
          50.1845311,
        ],
      },
      properties: {
        nom: `Leval`,
        libellecourt: 'LLW',
        segment_drg: 'C',
        codeinsee: '59344',
        codes_uic: '87295790',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8851014,
          44.1423958,
        ],
      },
      properties: {
        nom: `Lexos`,
        libellecourt: 'LEX',
        segment_drg: 'C',
        codeinsee: '82187',
        codes_uic: '87613489',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0986481,
          50.6205699,
        ],
      },
      properties: {
        nom: `Lezennes`,
        libellecourt: 'LZS',
        segment_drg: 'C',
        codeinsee: '59350',
        codes_uic: '87287102',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7699635,
          43.1999609,
        ],
      },
      properties: {
        nom: `Lézignan-Corbières`,
        libellecourt: 'LZA',
        segment_drg: 'C',
        codeinsee: '11203',
        codes_uic: '87615112',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.385986,
          45.8212175,
        ],
      },
      properties: {
        nom: `Lezoux`,
        libellecourt: 'LEZ',
        segment_drg: 'C',
        codeinsee: '63195',
        codes_uic: '87734442',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.44532,
          49.32471,
        ],
      },
      properties: {
        nom: `Liancourt - Rantigny`,
        libellecourt: 'LIA',
        segment_drg: 'B',
        codeinsee: '60524',
        codes_uic: '87276212',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.905543,
          49.2204964,
        ],
      },
      properties: {
        nom: `Liancourt-Saint-Pierre`,
        libellecourt: 'LQK',
        segment_drg: 'C',
        codeinsee: '60361',
        codes_uic: '87381210',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3355138,
          49.7700597,
        ],
      },
      properties: {
        nom: `Liart`,
        libellecourt: 'LIR',
        segment_drg: 'C',
        codeinsee: '08254',
        codes_uic: '87172544',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.00867,
          50.48025,
        ],
      },
      properties: {
        nom: `Libercourt`,
        libellecourt: 'LIK',
        segment_drg: 'B',
        codeinsee: '62907',
        codes_uic: '87345256',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.236344,
          44.915888,
        ],
      },
      properties: {
        nom: `Libourne`,
        libellecourt: 'LIB',
        segment_drg: 'B',
        codeinsee: '33243',
        codes_uic: '87584052',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.8208121,
          47.0587683,
        ],
      },
      properties: {
        nom: `Liesle`,
        libellecourt: 'LJL',
        segment_drg: 'C',
        codeinsee: '25336',
        codes_uic: '87718130',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.568935,
          48.628305,
        ],
      },
      properties: {
        nom: `Lieusaint - Moissy`,
        libellecourt: 'LIU',
        segment_drg: 'B',
        codeinsee: '77251',
        codes_uic: '87682153',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7716316,
          50.434139,
        ],
      },
      properties: {
        nom: `Liévin`,
        libellecourt: 'LVW',
        segment_drg: 'C',
        codeinsee: '62510',
        codes_uic: '87345041',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3331733,
          46.5203091,
        ],
      },
      properties: {
        nom: `Ligugé`,
        libellecourt: 'LGJ',
        segment_drg: 'C',
        codeinsee: '86133',
        codes_uic: '87575274',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.03432,
          50.61432,
        ],
      },
      properties: {
        nom: `Lille CHR`,
        libellecourt: 'ECR',
        segment_drg: 'B',
        codeinsee: '59350',
        codes_uic: '87109306',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.075796,
          50.639224,
        ],
      },
      properties: {
        nom: `Lille Europe`,
        libellecourt: 'LEW',
        segment_drg: 'A',
        codeinsee: '59350',
        codes_uic: '87223263',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.06987,
          50.636577,
        ],
      },
      properties: {
        nom: `Lille Flandres`,
        libellecourt: 'LLF',
        segment_drg: 'A',
        codeinsee: '59350',
        codes_uic: '87286005',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.075837,
          50.6119054,
        ],
      },
      properties: {
        nom: `Lille Porte de Douai`,
        libellecourt: 'PED',
        segment_drg: 'C',
        codeinsee: '59350',
        codes_uic: '87287250',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.47903,
          50.56163,
        ],
      },
      properties: {
        nom: `Lillers`,
        libellecourt: 'LLL',
        segment_drg: 'B',
        codeinsee: '62516',
        codes_uic: '87342238',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.74731,
          48.9841,
        ],
      },
      properties: {
        nom: `Limay`,
        libellecourt: 'LSH',
        segment_drg: 'B',
        codeinsee: '78335',
        codes_uic: '87381582',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0499661,
          47.4502088,
        ],
      },
      properties: {
        nom: `Limeray`,
        libellecourt: 'LIZ',
        segment_drg: 'C',
        codeinsee: '37131',
        codes_uic: '87574335',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.6603581,
          48.4617328,
        ],
      },
      properties: {
        nom: `Limersheim`,
        libellecourt: 'LHJ',
        segment_drg: 'C',
        codeinsee: '67200',
        codes_uic: '87212274',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.267356,
          45.836089,
        ],
      },
      properties: {
        nom: `Limoges Bénédictins`,
        libellecourt: 'LIM',
        segment_drg: 'A',
        codeinsee: '87085',
        codes_uic: '87592006',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2514147,
          45.8384117,
        ],
      },
      properties: {
        nom: `Limoges Montjovis`,
        libellecourt: 'LMJ',
        segment_drg: 'C',
        codeinsee: '87085',
        codes_uic: '87592022',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2228288,
          43.0563831,
        ],
      },
      properties: {
        nom: `Limoux`,
        libellecourt: 'LMX',
        segment_drg: 'C',
        codeinsee: '11206',
        codes_uic: '87615161',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2182832,
          43.0684511,
        ],
      },
      properties: {
        nom: `Limoux Flassian`,
        libellecourt: 'LMF',
        segment_drg: 'C',
        codeinsee: '11206',
        codes_uic: '87598755',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.6781143,
          48.5594092,
        ],
      },
      properties: {
        nom: `Lingolsheim`,
        libellecourt: 'LGH',
        segment_drg: 'C',
        codeinsee: '67267',
        codes_uic: '87214502',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.231143,
          49.138299,
        ],
      },
      properties: {
        nom: `Lisieux`,
        libellecourt: 'LIS',
        segment_drg: 'B',
        codeinsee: '14366',
        codes_uic: '87444265',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.80823,
          43.85639,
        ],
      },
      properties: {
        nom: `Lisle-sur-Tarn`,
        libellecourt: 'LSU',
        segment_drg: 'C',
        codeinsee: '81145',
        codes_uic: '87615310',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.050339,
          49.226834,
        ],
      },
      properties: {
        nom: `Lison`,
        libellecourt: 'LSN',
        segment_drg: 'B',
        codeinsee: '14367',
        codes_uic: '87447219',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0617374,
          48.7493158,
        ],
      },
      properties: {
        nom: `Liverdun`,
        libellecourt: 'LDN',
        segment_drg: 'C',
        codeinsee: '54318',
        codes_uic: '87141069',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8305412,
          44.7796035,
        ],
      },
      properties: {
        nom: `Livron-sur-Drôme`,
        libellecourt: 'LIV',
        segment_drg: 'C',
        codeinsee: '26165',
        codes_uic: '87761247',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6788796,
          48.5104579,
        ],
      },
      properties: {
        nom: `Livry-sur-Seine`,
        libellecourt: 'LYQ',
        segment_drg: 'C',
        codeinsee: '77255',
        codes_uic: '87682401',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.031718,
          49.021929,
        ],
      },
      properties: {
        nom: `Lizy-sur-Ourcq`,
        libellecourt: 'LZO',
        segment_drg: 'B',
        codeinsee: '77257',
        codes_uic: '87116632',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.000467,
          47.130464,
        ],
      },
      properties: {
        nom: `Loches`,
        libellecourt: 'LOY',
        segment_drg: 'B',
        codeinsee: '37132',
        codes_uic: '87571471',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3206082,
          48.087299,
        ],
      },
      properties: {
        nom: `Logelbach`,
        libellecourt: 'LOJ',
        segment_drg: 'C',
        codeinsee: '68374',
        codes_uic: '87182345',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8592403,
          50.4401891,
        ],
      },
      properties: {
        nom: `Loison-sous-Lens`,
        libellecourt: 'LOO',
        segment_drg: 'C',
        codeinsee: '62523',
        codes_uic: '87345231',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9906699,
          49.3466786,
        ],
      },
      properties: {
        nom: `Loivre`,
        libellecourt: 'LXV',
        segment_drg: 'C',
        codeinsee: '51329',
        codes_uic: '87171728',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2519529,
          43.3563239,
        ],
      },
      properties: {
        nom: `Longages - Noé`,
        libellecourt: 'LNN',
        segment_drg: 'C',
        codeinsee: '31303',
        codes_uic: '87611053',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1346952,
          47.1937936,
        ],
      },
      properties: {
        nom: `Longecourt-en-Plaine`,
        libellecourt: 'LJK',
        segment_drg: 'C',
        codeinsee: '21353',
        codes_uic: '87712620',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2943957,
          48.7020364,
        ],
      },
      properties: {
        nom: `Longjumeau`,
        libellecourt: 'LJU',
        segment_drg: 'B',
        codeinsee: '91345',
        codes_uic: '87393611',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2301676,
          49.2726851,
        ],
      },
      properties: {
        nom: `Longpont`,
        libellecourt: 'LJP',
        segment_drg: 'C',
        codeinsee: '02438',
        codes_uic: '87271775',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.00277,
          50.01128,
        ],
      },
      properties: {
        nom: `Longpré-les-Corps-Saints`,
        libellecourt: 'LGP',
        segment_drg: 'B',
        codeinsee: '80488',
        codes_uic: '87313122',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5526598,
          49.9818917,
        ],
      },
      properties: {
        nom: `Longroy - Gamaches`,
        libellecourt: 'LOG',
        segment_drg: 'C',
        codeinsee: '76394',
        codes_uic: '87313817',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.35215,
          49.86344,
        ],
      },
      properties: {
        nom: `Longueau`,
        libellecourt: 'LUA',
        segment_drg: 'A',
        codeinsee: '80489',
        codes_uic: '87313049',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8634086,
          49.4672441,
        ],
      },
      properties: {
        nom: `Longueil-Annel`,
        libellecourt: 'LPK',
        segment_drg: 'C',
        codeinsee: '60368',
        codes_uic: '87272195',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7175537,
          49.3425377,
        ],
      },
      properties: {
        nom: `Longueil-Sainte-Marie`,
        libellecourt: 'LUE',
        segment_drg: 'C',
        codeinsee: '60369',
        codes_uic: '87276303',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2762275,
          49.5566781,
        ],
      },
      properties: {
        nom: `Longuerue - Vieux-Manoir`,
        libellecourt: 'LWM',
        segment_drg: 'C',
        codeinsee: '76738',
        codes_uic: '87411447',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.249822,
          48.513703,
        ],
      },
      properties: {
        nom: `Longueville`,
        libellecourt: 'LON',
        segment_drg: 'B',
        codeinsee: '77260',
        codes_uic: '87116137',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1103434,
          49.7917558,
        ],
      },
      properties: {
        nom: `Longueville-sur-Scie`,
        libellecourt: 'LEV',
        segment_drg: 'C',
        codeinsee: '76397',
        codes_uic: '87415141',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.604482,
          49.4442555,
        ],
      },
      properties: {
        nom: `Longuyon`,
        libellecourt: 'LGN',
        segment_drg: 'C',
        codeinsee: '54322',
        codes_uic: '87194274',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7696358,
          49.5129923,
        ],
      },
      properties: {
        nom: `Longwy`,
        libellecourt: 'LWY',
        segment_drg: 'B',
        codeinsee: '54323',
        codes_uic: '87194001',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.551108,
          46.66858,
        ],
      },
      properties: {
        nom: `Lons-le-Saunier`,
        libellecourt: 'LLS',
        segment_drg: 'B',
        codeinsee: '39300',
        codes_uic: '87718239',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0170581,
          50.6128165,
        ],
      },
      properties: {
        nom: `Loos lez Lille`,
        libellecourt: 'LLZ',
        segment_drg: 'C',
        codeinsee: '59360',
        codes_uic: '87286112',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7933955,
          50.4378798,
        ],
      },
      properties: {
        nom: `Loos-en-Gohelle`,
        libellecourt: 'LQG',
        segment_drg: 'C',
        codeinsee: '62498',
        codes_uic: '87345033',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8345356,
          47.3902731,
        ],
      },
      properties: {
        nom: `Loreux`,
        libellecourt: 'LXU',
        segment_drg: 'C',
        codeinsee: '41118',
        codes_uic: '87576157',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.366221,
          47.755597,
        ],
      },
      properties: {
        nom: `Lorient Bretagne Sud`,
        libellecourt: 'LRT',
        segment_drg: 'A',
        codeinsee: '56121',
        codes_uic: '87476002',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8171679,
          44.7544973,
        ],
      },
      properties: {
        nom: `Loriol-sur-Drôme`,
        libellecourt: 'LOL',
        segment_drg: 'C',
        codeinsee: '26166',
        codes_uic: '87761262',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.169838,
          48.947773,
        ],
      },
      properties: {
        nom: `Lorraine TGV`,
        libellecourt: 'TGL',
        segment_drg: 'A',
        codeinsee: '57422',
        codes_uic: '87142109',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5629763,
          46.6946801,
        ],
      },
      properties: {
        nom: `Lothiers`,
        libellecourt: 'LOT',
        segment_drg: 'C',
        codeinsee: '36219',
        codes_uic: '87597104',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.2174853,
          46.6309,
        ],
      },
      properties: {
        nom: `Louhans`,
        libellecourt: 'LHN',
        segment_drg: 'C',
        codeinsee: '71263',
        codes_uic: '87713735',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3624626,
          43.3057578,
        ],
      },
      properties: {
        nom: `Louhossoa`,
        libellecourt: 'LWV',
        segment_drg: 'C',
        codeinsee: '64350',
        codes_uic: '87673673',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5017525,
          46.0435165,
        ],
      },
      properties: {
        nom: `Loulay`,
        libellecourt: 'LLY',
        segment_drg: 'C',
        codeinsee: '17211',
        codes_uic: '87491290',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3434016,
          50.3102834,
        ],
      },
      properties: {
        nom: `Lourches`,
        libellecourt: 'LOU',
        segment_drg: 'C',
        codeinsee: '59504',
        codes_uic: '87343475',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.042174,
          43.10037,
        ],
      },
      properties: {
        nom: `Lourdes`,
        libellecourt: 'LDS',
        segment_drg: 'B',
        codeinsee: '65286',
        codes_uic: '87671339',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9849368,
          46.2241289,
        ],
      },
      properties: {
        nom: `Louroux-de-Bouble`,
        libellecourt: 'LXB',
        segment_drg: 'C',
        codeinsee: '03152',
        codes_uic: '87641050',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1230176,
          48.8610361,
        ],
      },
      properties: {
        nom: `Louveciennes`,
        libellecourt: 'LFC',
        segment_drg: 'B',
        codeinsee: '78350',
        codes_uic: '87382457',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5018967,
          49.0496573,
        ],
      },
      properties: {
        nom: `Louvres`,
        libellecourt: 'LOV',
        segment_drg: 'B',
        codeinsee: '95351',
        codes_uic: '87276253',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9535768,
          50.2683469,
        ],
      },
      properties: {
        nom: `Louvroil`,
        libellecourt: 'LWF',
        segment_drg: 'C',
        codeinsee: '59392',
        codes_uic: '87295535',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.681501,
          45.85414,
        ],
      },
      properties: {
        nom: `Lozanne`,
        libellecourt: 'LOZ',
        segment_drg: 'B',
        codeinsee: '69121',
        codes_uic: '87721423',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5901964,
          46.7357683,
        ],
      },
      properties: {
        nom: `Luant`,
        libellecourt: 'LUK',
        segment_drg: 'C',
        codeinsee: '36101',
        codes_uic: '87597096',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.8915631,
          44.654092,
        ],
      },
      properties: {
        nom: `Luc`,
        libellecourt: 'LCZ',
        segment_drg: 'C',
        codeinsee: '48086',
        codes_uic: '87734368',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.4546227,
          44.6136615,
        ],
      },
      properties: {
        nom: `Luc-en-Diois`,
        libellecourt: 'LDE',
        segment_drg: 'C',
        codeinsee: '26167',
        codes_uic: '87761874',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5544751,
          44.2913982,
        ],
      },
      properties: {
        nom: `Luc-la-Primaube`,
        libellecourt: 'LPA',
        segment_drg: 'C',
        codeinsee: '12133',
        codes_uic: '87615773',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4529681,
          48.4366725,
        ],
      },
      properties: {
        nom: `Lucé`,
        libellecourt: 'LCJ',
        segment_drg: 'C',
        codeinsee: '28218',
        codes_uic: '87394015',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.1674217,
          46.4638232,
        ],
      },
      properties: {
        nom: `Luçon`,
        libellecourt: 'LRK',
        segment_drg: 'C',
        codeinsee: '85128',
        codes_uic: '87486258',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6118009,
          44.9744015,
        ],
      },
      properties: {
        nom: `Ludon-Médoc`,
        libellecourt: 'LXN',
        segment_drg: 'C',
        codeinsee: '33256',
        codes_uic: '87581181',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1709118,
          48.6219545,
        ],
      },
      properties: {
        nom: `Ludres`,
        libellecourt: 'LUD',
        segment_drg: 'C',
        codeinsee: '54328',
        codes_uic: '87141481',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7833571,
          49.7327973,
        ],
      },
      properties: {
        nom: `Lumes`,
        libellecourt: 'LUQ',
        segment_drg: 'C',
        codeinsee: '08263',
        codes_uic: '87172189',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1948986,
          43.7095814,
        ],
      },
      properties: {
        nom: `Lunas`,
        libellecourt: 'LKH',
        segment_drg: 'C',
        codeinsee: '34144',
        codes_uic: '87781575',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.131086,
          43.679392,
        ],
      },
      properties: {
        nom: `Lunel`,
        libellecourt: 'LUN',
        segment_drg: 'B',
        codeinsee: '34145',
        codes_uic: '87773408',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0937398,
          43.6811729,
        ],
      },
      properties: {
        nom: `Lunel-Viel`,
        libellecourt: 'LWQ',
        segment_drg: 'C',
        codeinsee: '34146',
        codes_uic: '87773424',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.275014,
          46.9351795,
        ],
      },
      properties: {
        nom: `Lunery`,
        libellecourt: 'LNY',
        segment_drg: 'C',
        codeinsee: '18133',
        codes_uic: '87576280',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.49727,
          48.588233,
        ],
      },
      properties: {
        nom: `Lunéville`,
        libellecourt: 'LNE',
        segment_drg: 'B',
        codeinsee: '54329',
        codes_uic: '87141150',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.60408,
          43.12099,
        ],
      },
      properties: {
        nom: `Lurbe-Saint-Christau`,
        libellecourt: 'CLE',
        segment_drg: 'C',
        codeinsee: '64360',
        codes_uic: '87672741',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.4925787,
          47.683269,
        ],
      },
      properties: {
        nom: `Lure`,
        libellecourt: 'LUR',
        segment_drg: 'B',
        codeinsee: '70310',
        codes_uic: '87185249',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.6973678,
          44.6709898,
        ],
      },
      properties: {
        nom: `Lus-la-Croix-Haute`,
        libellecourt: 'LCX',
        segment_drg: 'C',
        codeinsee: '26168',
        codes_uic: '87747667',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.116555,
          46.4354949,
        ],
      },
      properties: {
        nom: `Lusignan`,
        libellecourt: 'LUI',
        segment_drg: 'C',
        codeinsee: '86139',
        codes_uic: '87485540',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7186918,
          46.4051106,
        ],
      },
      properties: {
        nom: `Lussac-les-Châteaux`,
        libellecourt: 'LLX',
        segment_drg: 'C',
        codeinsee: '86140',
        codes_uic: '87575845',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1186307,
          48.0352559,
        ],
      },
      properties: {
        nom: `Luttenbach-près-Munster`,
        libellecourt: 'LFZ',
        segment_drg: 'C',
        codeinsee: '68193',
        codes_uic: '87182543',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.276994,
          47.7582136,
        ],
      },
      properties: {
        nom: `Lutterbach`,
        libellecourt: 'LUT',
        segment_drg: 'C;C',
        codeinsee: '68195',
        codes_uic: '87182667;87534347',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2516808,
          48.7299065,
        ],
      },
      properties: {
        nom: `Lutzelbourg`,
        libellecourt: 'LZF',
        segment_drg: 'C',
        codeinsee: '57427',
        codes_uic: '87215160',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.29391,
          48.51812,
        ],
      },
      properties: {
        nom: `Lutzelhouse`,
        libellecourt: 'LZH',
        segment_drg: 'B',
        codeinsee: '67306',
        codes_uic: '87214650',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1094107,
          45.8873947,
        ],
      },
      properties: {
        nom: `Luxé`,
        libellecourt: 'LXC',
        segment_drg: 'C',
        codeinsee: '16196',
        codes_uic: '87583823',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3726593,
          47.8148606,
        ],
      },
      properties: {
        nom: `Luxeuil-les-Bains`,
        libellecourt: 'LXL',
        segment_drg: 'C',
        codeinsee: '70311',
        codes_uic: '87185595',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.42074,
          49.11719,
        ],
      },
      properties: {
        nom: `Luzarches`,
        libellecourt: 'LUZ',
        segment_drg: 'B',
        codeinsee: '95352',
        codes_uic: '87276576',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7531248,
          42.7642849,
        ],
      },
      properties: {
        nom: `Luzenac - Garanou`,
        libellecourt: 'LUG',
        segment_drg: 'C',
        codeinsee: '09131',
        codes_uic: '87611558',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9693245,
          46.7940793,
        ],
      },
      properties: {
        nom: `Luzy`,
        libellecourt: 'LUY',
        segment_drg: 'C',
        codeinsee: '58149',
        codes_uic: '87696534',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.51504,
          48.91646,
        ],
      },
      properties: {
        nom: `Lycée Henri Sellier`,
        libellecourt: 'LHS',
        segment_drg: 'B',
        codeinsee: '93046',
        codes_uic: '87988717',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.804631,
          45.766078,
        ],
      },
      properties: {
        nom: `Lyon Gorge de Loup`,
        libellecourt: 'LYL',
        segment_drg: 'B',
        codeinsee: '69389',
        codes_uic: '87721175',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.84139,
          45.74495,
        ],
      },
      properties: {
        nom: `Lyon Jean Macé`,
        libellecourt: 'LJC',
        segment_drg: 'B',
        codeinsee: '69387',
        codes_uic: '87282624',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.859355,
          45.760559,
        ],
      },
      properties: {
        nom: `Lyon Part Dieu`,
        libellecourt: 'LYD',
        segment_drg: 'A',
        codeinsee: '69383',
        codes_uic: '87723197',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.825733,
          45.748476,
        ],
      },
      properties: {
        nom: `Lyon Perrache`,
        libellecourt: 'LPR',
        segment_drg: 'A',
        codeinsee: '69382',
        codes_uic: '87722025',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.074969,
          45.721109,
        ],
      },
      properties: {
        nom: `Lyon Saint-Exupéry TGV`,
        libellecourt: 'SXA',
        segment_drg: 'A',
        codeinsee: '69299',
        codes_uic: '87762906',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.827057,
          45.76601,
        ],
      },
      properties: {
        nom: `Lyon Saint-Paul`,
        libellecourt: 'LSP',
        segment_drg: 'B',
        codeinsee: '69385',
        codes_uic: '87721159',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.80396,
          45.779938,
        ],
      },
      properties: {
        nom: `Lyon Vaise`,
        libellecourt: 'LVI',
        segment_drg: 'B',
        codeinsee: '69389',
        codes_uic: '87721001',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6200068,
          45.0040981,
        ],
      },
      properties: {
        nom: `Macau`,
        libellecourt: 'MCA',
        segment_drg: 'C',
        codeinsee: '33262',
        codes_uic: '87581199',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.8227524,
          46.9905038,
        ],
      },
      properties: {
        nom: `Machecoul`,
        libellecourt: 'MCC',
        segment_drg: 'C',
        codeinsee: '44087',
        codes_uic: '87481366',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3282335,
          46.2512825,
        ],
      },
      properties: {
        nom: `Machilly`,
        libellecourt: 'MCI',
        segment_drg: 'C',
        codeinsee: '74158',
        codes_uic: '87745588',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.824887,
          46.302572,
        ],
      },
      properties: {
        nom: `Mâcon`,
        libellecourt: 'MAC',
        segment_drg: 'B',
        codeinsee: '71270',
        codes_uic: '87725689',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.778876,
          46.282884,
        ],
      },
      properties: {
        nom: `Mâcon Loché TGV`,
        libellecourt: 'MLH',
        segment_drg: 'A',
        codeinsee: '71270',
        codes_uic: '87725705',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2295415,
          43.4675998,
        ],
      },
      properties: {
        nom: `Magalas`,
        libellecourt: 'MGA',
        segment_drg: 'C',
        codeinsee: '34147',
        codes_uic: '87781666',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.35835,
          48.87986,
        ],
      },
      properties: {
        nom: `Magenta`,
        libellecourt: 'MAG',
        segment_drg: 'B',
        codeinsee: '75110',
        codes_uic: '87281873',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.6215075,
          46.016945,
        ],
      },
      properties: {
        nom: `Magland`,
        libellecourt: 'MGD',
        segment_drg: 'C',
        codeinsee: '74159',
        codes_uic: '87746412',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4438445,
          45.6288007,
        ],
      },
      properties: {
        nom: `Magnac - Vicq`,
        libellecourt: 'MGQ',
        segment_drg: 'C',
        codeinsee: '87203',
        codes_uic: '87592279',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6028771,
          46.4641418,
        ],
      },
      properties: {
        nom: `Magnette`,
        libellecourt: 'MGR',
        segment_drg: 'C',
        codeinsee: '03010',
        codes_uic: '87641365',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.7331444,
          49.3100006,
        ],
      },
      properties: {
        nom: `Magneux - Courlandon`,
        libellecourt: 'MXN',
        segment_drg: 'C',
        codeinsee: '51337',
        codes_uic: '87400986',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2811066,
          48.3342906,
        ],
      },
      properties: {
        nom: `Magny - Blandainville`,
        libellecourt: 'MBW',
        segment_drg: 'C',
        codeinsee: '28225',
        codes_uic: '87394429',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.5830236,
          47.0533855,
        ],
      },
      properties: {
        nom: `Maillé`,
        libellecourt: 'MAX',
        segment_drg: 'C',
        codeinsee: '37142',
        codes_uic: '87575068',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6751472,
          47.6041692,
        ],
      },
      properties: {
        nom: `Mailly-la-Ville`,
        libellecourt: 'MIY',
        segment_drg: 'C',
        codeinsee: '89237',
        codes_uic: '87683847',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5920651,
          48.5854793,
        ],
      },
      properties: {
        nom: `Maintenon`,
        libellecourt: 'MTN',
        segment_drg: 'B',
        codeinsee: '28227',
        codes_uic: '87394130',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.426977,
          48.802071,
        ],
      },
      properties: {
        nom: `Maisons-Alfort - Alfortville`,
        libellecourt: 'MFA',
        segment_drg: 'B',
        codeinsee: '94046',
        codes_uic: '87681155',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1443153,
          48.9456394,
        ],
      },
      properties: {
        nom: `Maisons-Laffitte`,
        libellecourt: 'MLF',
        segment_drg: 'B',
        codeinsee: '78358',
        codes_uic: '87386425',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.39312,
          48.39304,
        ],
      },
      properties: {
        nom: `Maisse`,
        libellecourt: 'MSN',
        segment_drg: 'B',
        codeinsee: '91359',
        codes_uic: '87681486',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1588762,
          49.2155349,
        ],
      },
      properties: {
        nom: `Maizières-lès-Metz`,
        libellecourt: 'MMZ',
        segment_drg: 'B',
        codeinsee: '57433',
        codes_uic: '87191106',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8105362,
          47.3270025,
        ],
      },
      properties: {
        nom: `Mâlain`,
        libellecourt: 'MLI',
        segment_drg: 'C',
        codeinsee: '21373',
        codes_uic: '87713065',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.2961796,
          47.6756185,
        ],
      },
      properties: {
        nom: `Malansac`,
        libellecourt: 'MLO',
        segment_drg: 'C',
        codeinsee: '56123',
        codes_uic: '87476689',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0395776,
          49.5133331,
        ],
      },
      properties: {
        nom: `Malaunay - Le Houlme`,
        libellecourt: 'MUA',
        segment_drg: 'C',
        codeinsee: '76366',
        codes_uic: '87411256',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4012177,
          48.2934325,
        ],
      },
      properties: {
        nom: `Malesherbes`,
        libellecourt: 'MAL',
        segment_drg: 'B',
        codeinsee: '45191',
        codes_uic: '87684415',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.302207,
          49.42152,
        ],
      },
      properties: {
        nom: `Malling`,
        libellecourt: 'MKG',
        segment_drg: 'C',
        codeinsee: '57437',
        codes_uic: '87191627',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1617411,
          47.1998712,
        ],
      },
      properties: {
        nom: `Mamirolle`,
        libellecourt: 'MIJ',
        segment_drg: 'C',
        codeinsee: '25364',
        codes_uic: '87718510',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.941313,
          43.523903,
        ],
      },
      properties: {
        nom: `Mandelieu-la-Napoule`,
        libellecourt: 'MPV',
        segment_drg: 'C',
        codeinsee: '06079',
        codes_uic: '87757591',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7933241,
          43.8231945,
        ],
      },
      properties: {
        nom: `Manosque - Gréoux-les-Bains`,
        libellecourt: 'MNQ',
        segment_drg: 'C',
        codeinsee: '04112',
        codes_uic: '87751321',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.71581,
          48.98366,
        ],
      },
      properties: {
        nom: `Mantes Station`,
        libellecourt: 'MTQ',
        segment_drg: 'B',
        codeinsee: '78361',
        codes_uic: '87381590',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.70337,
          48.98984,
        ],
      },
      properties: {
        nom: `Mantes-la-Jolie`,
        libellecourt: 'MTE',
        segment_drg: 'B',
        codeinsee: '78361',
        codes_uic: '87381509',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1091755,
          48.8010405,
        ],
      },
      properties: {
        nom: `Marbache`,
        libellecourt: 'MAH',
        segment_drg: 'C',
        codeinsee: '54351',
        codes_uic: '87141796',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5819031,
          49.8532165,
        ],
      },
      properties: {
        nom: `Marcelcave`,
        libellecourt: 'MCV',
        segment_drg: 'C',
        codeinsee: '80507',
        codes_uic: '87313445',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.85381,
          44.690543,
        ],
      },
      properties: {
        nom: `Marcheprime`,
        libellecourt: 'MCP',
        segment_drg: 'B',
        codeinsee: '33555',
        codes_uic: '87582445',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.513444,
          48.7684736,
        ],
      },
      properties: {
        nom: `Marchezais - Broué`,
        libellecourt: 'MBR',
        segment_drg: 'B',
        codeinsee: '28062',
        codes_uic: '87393470',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0790676,
          48.8807466,
        ],
      },
      properties: {
        nom: `Mareil-Marly`,
        libellecourt: 'MPJ',
        segment_drg: 'C',
        codeinsee: '78367',
        codes_uic: '87382812;87733667',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8715159,
          48.8936804,
        ],
      },
      properties: {
        nom: `Mareil-sur-Mauldre`,
        libellecourt: 'MJM',
        segment_drg: 'C',
        codeinsee: '78368',
        codes_uic: '87381715',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9313418,
          50.4078186,
        ],
      },
      properties: {
        nom: `Maresquel-Ecquemicourt`,
        libellecourt: 'MQU',
        segment_drg: 'C',
        codeinsee: '62552',
        codes_uic: '87317206',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.075653,
          49.1355418,
        ],
      },
      properties: {
        nom: `Mareuil-sur-Ourcq`,
        libellecourt: 'MAQ',
        segment_drg: 'C',
        codeinsee: '60380',
        codes_uic: '87116665',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6854145,
          45.0358307,
        ],
      },
      properties: {
        nom: `Margaux`,
        libellecourt: 'MGU',
        segment_drg: 'C',
        codeinsee: '33268',
        codes_uic: '87581215',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4027491,
          49.4393862,
        ],
      },
      properties: {
        nom: `Margival`,
        libellecourt: 'MIV',
        segment_drg: 'C',
        codeinsee: '02464',
        codes_uic: '87271882',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.8231894,
          48.781863,
        ],
      },
      properties: {
        nom: `Marienthal`,
        libellecourt: 'MTK',
        segment_drg: 'C',
        codeinsee: '67180',
        codes_uic: '87213603',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.507826,
          46.0887815,
        ],
      },
      properties: {
        nom: `Marignier`,
        libellecourt: 'MRG',
        segment_drg: 'B',
        codeinsee: '74164',
        codes_uic: '87746347',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.428404,
          46.1990832,
        ],
      },
      properties: {
        nom: `Marigny`,
        libellecourt: 'MRJ',
        segment_drg: 'C',
        codeinsee: '79166',
        codes_uic: '87485334',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.7695801,
          49.747192,
        ],
      },
      properties: {
        nom: `Marle sur Serre`,
        libellecourt: 'MRO',
        segment_drg: 'C',
        codeinsee: '02468',
        codes_uic: '87296095',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.868099,
          48.733976,
        ],
      },
      properties: {
        nom: `Marles-en-Brie`,
        libellecourt: 'MLB',
        segment_drg: 'B',
        codeinsee: '77229',
        codes_uic: '87116228',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.0731097,
          46.0638765,
        ],
      },
      properties: {
        nom: `Marlieux - Châtillon`,
        libellecourt: 'MXC',
        segment_drg: 'C',
        codeinsee: '01235',
        codes_uic: '87723767',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0965436,
          48.8713084,
        ],
      },
      properties: {
        nom: `Marly-le-Roi`,
        libellecourt: 'MLR',
        segment_drg: 'B',
        codeinsee: '78372',
        codes_uic: '87382465',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2819971,
          47.1001505,
        ],
      },
      properties: {
        nom: `Marmagne`,
        libellecourt: 'MMH',
        segment_drg: 'C',
        codeinsee: '18138',
        codes_uic: '87576132',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3601911,
          46.8334607,
        ],
      },
      properties: {
        nom: `Marmagne sous Creusot`,
        libellecourt: 'MMS',
        segment_drg: 'C',
        codeinsee: '71282',
        codes_uic: '87694182',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.168044,
          44.503019,
        ],
      },
      properties: {
        nom: `Marmande`,
        libellecourt: 'MMD',
        segment_drg: 'B',
        codeinsee: '47157',
        codes_uic: '87586545',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.78272,
          48.869856,
        ],
      },
      properties: {
        nom: `Marne-la-Vallée Chessy`,
        libellecourt: 'MLV',
        segment_drg: 'A',
        codeinsee: '77111',
        codes_uic: '87111849',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6983279,
          50.322603,
        ],
      },
      properties: {
        nom: `Maroeuil`,
        libellecourt: 'MUI',
        segment_drg: 'C',
        codeinsee: '62557',
        codes_uic: '87342188',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.290327,
          48.565345,
        ],
      },
      properties: {
        nom: `Marolles-en-Hurepoix`,
        libellecourt: 'MSX',
        segment_drg: 'B',
        codeinsee: '91376',
        codes_uic: '87545186',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.050485,
          49.479935,
        ],
      },
      properties: {
        nom: `Maromme`,
        libellecourt: 'MRM',
        segment_drg: 'C',
        codeinsee: '76474',
        codes_uic: '87411249',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0510262,
          50.6724025,
        ],
      },
      properties: {
        nom: `Marquette`,
        libellecourt: 'MQT',
        segment_drg: 'C',
        codeinsee: '59386',
        codes_uic: '87287169',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8661707,
          50.5477246,
        ],
      },
      properties: {
        nom: `Marquillies`,
        libellecourt: 'MQS',
        segment_drg: 'C',
        codeinsee: '59388',
        codes_uic: '87342469',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.72988,
          50.8056635,
        ],
      },
      properties: {
        nom: `Marquise - Rinxent`,
        libellecourt: 'MRX',
        segment_drg: 'B',
        codeinsee: '62711',
        codes_uic: '87317339',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4858388,
          42.6428224,
        ],
      },
      properties: {
        nom: `Marquixanes`,
        libellecourt: 'MQG',
        segment_drg: 'C',
        codeinsee: '66103',
        codes_uic: '87784629',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.585556,
          46.0941348,
        ],
      },
      properties: {
        nom: `Marsac`,
        libellecourt: 'MRR',
        segment_drg: 'C',
        codeinsee: '23124',
        codes_uic: '87597625',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.6626174,
          45.1860541,
        ],
      },
      properties: {
        nom: `Marsac-sur-L'isle`,
        libellecourt: 'MRA',
        segment_drg: 'C',
        codeinsee: '24256',
        codes_uic: '87595207',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.5355281,
          43.3181964,
        ],
      },
      properties: {
        nom: `Marseillan Plage`,
        libellecourt: 'MPP',
        segment_drg: 'C',
        codeinsee: '34150',
        codes_uic: '87781294',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.406559,
          43.29614391,
        ],
      },
      properties: {
        nom: `Marseille Blancarde`,
        libellecourt: 'MBC',
        segment_drg: 'B',
        codeinsee: '13204',
        codes_uic: '87751081',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.380407,
          43.302666,
        ],
      },
      properties: {
        nom: `Marseille Saint-Charles`,
        libellecourt: 'MSC',
        segment_drg: 'A',
        codeinsee: '13201',
        codes_uic: '87751008',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9546349,
          49.5709066,
        ],
      },
      properties: {
        nom: `Marseille-en-Beauvaisis`,
        libellecourt: 'MAI',
        segment_drg: 'C',
        codeinsee: '60387',
        codes_uic: '87313726',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.026913,
          43.9151803,
        ],
      },
      properties: {
        nom: `Marssac-sur-Tarn`,
        libellecourt: 'MSS',
        segment_drg: 'C',
        codeinsee: '81156',
        codes_uic: '87615419',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3137943,
          47.8321302,
        ],
      },
      properties: {
        nom: `Martigné-Ferchaud`,
        libellecourt: 'MAF',
        segment_drg: 'C',
        codeinsee: '35167',
        codes_uic: '87471367',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.0257804,
          43.3929209,
        ],
      },
      properties: {
        nom: `Martigues`,
        libellecourt: 'MTG',
        segment_drg: 'C',
        codeinsee: '13056',
        codes_uic: '87753509',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0167558,
          43.1962069,
        ],
      },
      properties: {
        nom: `Martres-Tolosane`,
        libellecourt: 'MXA',
        segment_drg: 'C',
        codeinsee: '31324',
        codes_uic: '87611087',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2810718,
          44.5446819,
        ],
      },
      properties: {
        nom: `Marvejols`,
        libellecourt: 'MVJ',
        segment_drg: 'C',
        codeinsee: '48092',
        codes_uic: '87783282',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.9144441,
          47.6745316,
        ],
      },
      properties: {
        nom: `Massérac`,
        libellecourt: 'MWK',
        segment_drg: 'C',
        codeinsee: '44092',
        codes_uic: '87471227',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5415396,
          45.536175,
        ],
      },
      properties: {
        nom: `Masseret`,
        libellecourt: 'MST',
        segment_drg: 'C',
        codeinsee: '19129',
        codes_uic: '87594820',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1965518,
          45.2537695,
        ],
      },
      properties: {
        nom: `Massiac - Blesle`,
        libellecourt: 'MIA',
        segment_drg: 'C',
        codeinsee: '15119',
        codes_uic: '87734871',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2575281,
          48.7264211,
        ],
      },
      properties: {
        nom: `Massy - Palaiseau`,
        libellecourt: 'MPU',
        segment_drg: 'B',
        codeinsee: '91377',
        codes_uic: '87393579',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2736721,
          48.7343097,
        ],
      },
      properties: {
        nom: `Massy - Verrières`,
        libellecourt: 'MVW',
        segment_drg: 'B',
        codeinsee: '91377',
        codes_uic: '87383281',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.27194,
          48.72342,
        ],
      },
      properties: {
        nom: `Massy Europe`,
        libellecourt: 'MEU',
        segment_drg: 'B',
        codeinsee: '91377',
        codes_uic: '87725465',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.261254,
          48.725758,
        ],
      },
      properties: {
        nom: `Massy TGV`,
        libellecourt: 'MPW',
        segment_drg: 'A',
        codeinsee: '91377',
        codes_uic: '87393702',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.6196003,
          48.3987556,
        ],
      },
      properties: {
        nom: `Matzenheim`,
        libellecourt: 'MHW',
        segment_drg: 'C',
        codeinsee: '67285',
        codes_uic: '87214130',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.96677,
          50.27298,
        ],
      },
      properties: {
        nom: `Maubeuge`,
        libellecourt: 'MBG',
        segment_drg: 'B',
        codeinsee: '59392',
        codes_uic: '87295006',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.85708,
          48.90917,
        ],
      },
      properties: {
        nom: `Maule`,
        libellecourt: 'MAE',
        segment_drg: 'B',
        codeinsee: '78380',
        codes_uic: '87381723',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.05963,
          48.98712,
        ],
      },
      properties: {
        nom: `Maurecourt`,
        libellecourt: 'MRK',
        segment_drg: 'B',
        codeinsee: '78015',
        codes_uic: '87381483',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4562554,
          50.0674506,
        ],
      },
      properties: {
        nom: `Maurois`,
        libellecourt: 'MAK',
        segment_drg: 'C',
        codeinsee: '59311',
        codes_uic: '87345546',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1995656,
          44.7061543,
        ],
      },
      properties: {
        nom: `Maurs`,
        libellecourt: 'MRS',
        segment_drg: 'C',
        codeinsee: '15122',
        codes_uic: '87645168',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3893042,
          47.2930211,
        ],
      },
      properties: {
        nom: `Mauves-sur-Loire`,
        libellecourt: 'MUE',
        segment_drg: 'C',
        codeinsee: '44094',
        codes_uic: '87481150',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7899658,
          44.8558291,
        ],
      },
      properties: {
        nom: `Mauzac-et-Grand-Castang`,
        libellecourt: 'MZJ',
        segment_drg: 'C',
        codeinsee: '24260',
        codes_uic: '87584466',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6737264,
          46.1995881,
        ],
      },
      properties: {
        nom: `Mauzé-sur-le-Mignon`,
        libellecourt: 'MAZ',
        segment_drg: 'C',
        codeinsee: '79170',
        codes_uic: '87485250',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9571897,
          44.9768912,
        ],
      },
      properties: {
        nom: `Mauzens-et-Miremont`,
        libellecourt: 'MZX',
        segment_drg: 'C',
        codeinsee: '24261',
        codes_uic: '87595728',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2659384,
          47.7601465,
        ],
      },
      properties: {
        nom: `Mayet`,
        libellecourt: 'MYT',
        segment_drg: 'C',
        codeinsee: '72191',
        codes_uic: '87396580',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3747346,
          43.4977847,
        ],
      },
      properties: {
        nom: `Mazamet`,
        libellecourt: 'MZT',
        segment_drg: 'C',
        codeinsee: '81163',
        codes_uic: '87615542',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7005447,
          50.4608957,
        ],
      },
      properties: {
        nom: `Mazingarbe`,
        libellecourt: 'MJG',
        segment_drg: 'C',
        codeinsee: '62563',
        codes_uic: '87342121',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.874041,
          48.957759,
        ],
      },
      properties: {
        nom: `Meaux`,
        libellecourt: 'MEA',
        segment_drg: 'B',
        codeinsee: '77284',
        codes_uic: '87116103',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2071342,
          47.1394406,
        ],
      },
      properties: {
        nom: `Mehun-sur-Yèvre`,
        libellecourt: 'MHY',
        segment_drg: 'C',
        codeinsee: '18141',
        codes_uic: '87576116',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.655404,
          48.527662,
        ],
      },
      properties: {
        nom: `Melun`,
        libellecourt: 'MEL',
        segment_drg: 'B',
        codeinsee: '77288',
        codes_uic: '87682005',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.405617,
          47.6450036,
        ],
      },
      properties: {
        nom: `Menars`,
        libellecourt: 'EIR',
        segment_drg: 'C',
        codeinsee: '41134',
        codes_uic: '87574244',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.5019875,
          44.522322,
        ],
      },
      properties: {
        nom: `Mende`,
        libellecourt: 'MDE',
        segment_drg: 'C',
        codeinsee: '48095',
        codes_uic: '87783605',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.6592265,
          48.5050204,
        ],
      },
      properties: {
        nom: `Ménil Flin`,
        libellecourt: 'MFN',
        segment_drg: 'C',
        codeinsee: '54199',
        codes_uic: '87141390',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.433165,
          48.5709075,
        ],
      },
      properties: {
        nom: `Mennecy`,
        libellecourt: 'MNY',
        segment_drg: 'B',
        codeinsee: '91386',
        codes_uic: '87681411',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2711145,
          49.6915989,
        ],
      },
      properties: {
        nom: `Mennessis`,
        libellecourt: 'MKI',
        segment_drg: 'C',
        codeinsee: '02474',
        codes_uic: '87296434',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8765238,
          47.2688835,
        ],
      },
      properties: {
        nom: `Mennetou-sur-Cher`,
        libellecourt: 'MNN',
        segment_drg: 'C',
        codeinsee: '41135',
        codes_uic: '87576728',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.4933,
          43.774444,
        ],
      },
      properties: {
        nom: `Menton`,
        libellecourt: 'MEN',
        segment_drg: 'B',
        codeinsee: '06083',
        codes_uic: '87756486',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.517297,
          43.785202,
        ],
      },
      properties: {
        nom: `Menton Garavan`,
        libellecourt: 'MNJ',
        segment_drg: 'B',
        codeinsee: '06083',
        codes_uic: '87756494',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.506373,
          47.70586,
        ],
      },
      properties: {
        nom: `Mer`,
        libellecourt: 'MER',
        segment_drg: 'B',
        codeinsee: '41136',
        codes_uic: '87574194',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8371278,
          42.6594883,
        ],
      },
      properties: {
        nom: `Mérens-les-Vals`,
        libellecourt: 'MLX',
        segment_drg: 'C',
        codeinsee: '09189',
        codes_uic: '87611525',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1503303,
          43.6365051,
        ],
      },
      properties: {
        nom: `Mérenvielle`,
        libellecourt: 'MWE',
        segment_drg: 'C',
        codeinsee: '31339',
        codes_uic: '87611814',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5726254,
          49.9556384,
        ],
      },
      properties: {
        nom: `Méricourt - Ribemont`,
        libellecourt: 'MTL',
        segment_drg: 'C',
        codeinsee: '80530',
        codes_uic: '87313064',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.20528,
          49.07777,
        ],
      },
      properties: {
        nom: `Mériel`,
        libellecourt: 'MVC',
        segment_drg: 'B',
        codeinsee: '95392',
        codes_uic: '87276675',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6261402,
          44.8265601,
        ],
      },
      properties: {
        nom: `Mérignac Arlac`,
        libellecourt: 'MRF',
        segment_drg: 'C',
        codeinsee: '33281',
        codes_uic: '87278259',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.89903,
          47.58659,
        ],
      },
      properties: {
        nom: `Méroux`,
        libellecourt: 'MOX',
        segment_drg: 'A',
        codeinsee: '90068',
        codes_uic: '87184408',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.6781895,
          48.872013,
        ],
      },
      properties: {
        nom: `Mertzwiller`,
        libellecourt: 'MZW',
        segment_drg: 'C',
        codeinsee: '67291',
        codes_uic: '87213207',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.13254,
          49.23233,
        ],
      },
      properties: {
        nom: `Méru`,
        libellecourt: 'MRU',
        segment_drg: 'B',
        codeinsee: '60395',
        codes_uic: '87313668',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1794099,
          46.7988928,
        ],
      },
      properties: {
        nom: `Mervans`,
        libellecourt: 'MRV',
        segment_drg: 'C',
        codeinsee: '71295',
        codes_uic: '87713701',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3022795,
          47.9126413,
        ],
      },
      properties: {
        nom: `Merxheim`,
        libellecourt: 'MXH',
        segment_drg: 'C',
        codeinsee: '68203',
        codes_uic: '87182725',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.19074,
          49.05766,
        ],
      },
      properties: {
        nom: `Méry-sur-Oise`,
        libellecourt: 'MWO',
        segment_drg: 'B',
        codeinsee: '95394',
        codes_uic: '87276667',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.81822,
          47.82225,
        ],
      },
      properties: {
        nom: `Messac - Guipry`,
        libellecourt: 'MES',
        segment_drg: 'B',
        codeinsee: '35176',
        codes_uic: '87471185',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1378364,
          48.6128788,
        ],
      },
      properties: {
        nom: `Messein`,
        libellecourt: 'MSJ',
        segment_drg: 'C',
        codeinsee: '54366',
        codes_uic: '87141499',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0065175,
          47.2420755,
        ],
      },
      properties: {
        nom: `Mesves - Bulcy`,
        libellecourt: 'MVU',
        segment_drg: 'C',
        codeinsee: '58164',
        codes_uic: '87696187',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2449659,
          46.862799,
        ],
      },
      properties: {
        nom: `Mesvres`,
        libellecourt: 'MWB',
        segment_drg: 'C',
        codeinsee: '71297',
        codes_uic: '87694158',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.176593,
          49.109545,
        ],
      },
      properties: {
        nom: `Metz`,
        libellecourt: 'MZE',
        segment_drg: 'A',
        codeinsee: '57463',
        codes_uic: '87192039',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.16791,
          49.13673,
        ],
      },
      properties: {
        nom: `Metz Nord`,
        libellecourt: 'MZD',
        segment_drg: 'C',
        codeinsee: '57463',
        codes_uic: '87192070',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0733383,
          48.0133301,
        ],
      },
      properties: {
        nom: `Metzeral`,
        libellecourt: 'MZL',
        segment_drg: 'C',
        codeinsee: '68204',
        codes_uic: '87182816',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2410999,
          48.8147527,
        ],
      },
      properties: {
        nom: `Meudon`,
        libellecourt: 'MDN',
        segment_drg: 'B',
        codeinsee: '92048',
        codes_uic: '87393108',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2409045,
          48.8079884,
        ],
      },
      properties: {
        nom: `Meudon Val Fleury`,
        libellecourt: 'MFY',
        segment_drg: 'B',
        codeinsee: '92048',
        codes_uic: '87393082',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.90213,
          49.00564,
        ],
      },
      properties: {
        nom: `Meulan - Hardricourt`,
        libellecourt: 'MHD',
        segment_drg: 'B',
        codeinsee: '78299',
        codes_uic: '87381830',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.691928,
          47.829926,
        ],
      },
      properties: {
        nom: `Meung-sur-Loire`,
        libellecourt: 'MGL',
        segment_drg: 'B',
        codeinsee: '45203',
        codes_uic: '87574137',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8930903,
          50.4970516,
        ],
      },
      properties: {
        nom: `Meurchin`,
        libellecourt: 'MHN',
        segment_drg: 'C',
        codeinsee: '62573',
        codes_uic: '87345272',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7954444,
          46.9690497,
        ],
      },
      properties: {
        nom: `Meursault`,
        libellecourt: 'MAT',
        segment_drg: 'C',
        codeinsee: '21412',
        codes_uic: '87713560',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.270954,
          48.978549,
        ],
      },
      properties: {
        nom: `Meuse TGV`,
        libellecourt: 'TGM',
        segment_drg: 'A',
        codeinsee: '55254',
        codes_uic: '87147322',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.193534,
          45.901615,
        ],
      },
      properties: {
        nom: `Meximieux - Pérouges`,
        libellecourt: 'MEX',
        segment_drg: 'B',
        codeinsee: '01244',
        codes_uic: '87723585',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1640905,
          45.5302313,
        ],
      },
      properties: {
        nom: `Meymac`,
        libellecourt: 'MYC',
        segment_drg: 'C',
        codeinsee: '19136',
        codes_uic: '87594275',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.5395738,
          43.6440076,
        ],
      },
      properties: {
        nom: `Meyrargues`,
        libellecourt: 'MEY',
        segment_drg: 'C',
        codeinsee: '13059',
        codes_uic: '87751370',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.046622,
          46.2350502,
        ],
      },
      properties: {
        nom: `Mézériat`,
        libellecourt: 'MZF',
        segment_drg: 'C',
        codeinsee: '01246',
        codes_uic: '87725838',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.07496,
          49.071,
        ],
      },
      properties: {
        nom: `Mézidon-Canon`,
        libellecourt: 'MEZ',
        segment_drg: 'B',
        codeinsee: '14431',
        codes_uic: '87444208',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.4117391,
          46.5261427,
        ],
      },
      properties: {
        nom: `Mignaloux - Nouaillé`,
        libellecourt: 'MGX',
        segment_drg: 'C',
        codeinsee: '86157',
        codes_uic: '87575704',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3033268,
          43.7884886,
        ],
      },
      properties: {
        nom: `Milhaud`,
        libellecourt: 'MHU',
        segment_drg: 'C',
        codeinsee: '30169',
        codes_uic: '87775098',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6937502,
          42.6888961,
        ],
      },
      properties: {
        nom: `Millas`,
        libellecourt: 'MYR',
        segment_drg: 'C',
        codeinsee: '66108',
        codes_uic: '87784546',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.07457,
          44.102344,
        ],
      },
      properties: {
        nom: `Millau`,
        libellecourt: 'MAU',
        segment_drg: 'C',
        codeinsee: '12145',
        codes_uic: '87783001',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.988233,
          49.5035256,
        ],
      },
      properties: {
        nom: `Milly-sur-Thérain`,
        libellecourt: 'MYH',
        segment_drg: 'C',
        codeinsee: '60403',
        codes_uic: '87313700',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.914787,
          48.5315134,
        ],
      },
      properties: {
        nom: `Miniac-Morvan`,
        libellecourt: 'MIN',
        segment_drg: 'C',
        codeinsee: '35179',
        codes_uic: '87478131',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.919752,
          45.8966784,
        ],
      },
      properties: {
        nom: `Mionnay`,
        libellecourt: 'MIO',
        segment_drg: 'C',
        codeinsee: '01248',
        codes_uic: '87723726',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.000264,
          43.580704,
        ],
      },
      properties: {
        nom: `Miramas`,
        libellecourt: 'MAS',
        segment_drg: 'B',
        codeinsee: '13063',
        codes_uic: '87753004',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7344755,
          50.0958521,
        ],
      },
      properties: {
        nom: `Miraumont`,
        libellecourt: 'MIK',
        segment_drg: 'C',
        codeinsee: '80549',
        codes_uic: '87342030',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.129651,
          48.299243,
        ],
      },
      properties: {
        nom: `Mirecourt`,
        libellecourt: 'MIR',
        segment_drg: 'C',
        codeinsee: '88304',
        codes_uic: '87144212',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.95394,
          45.822088,
        ],
      },
      properties: {
        nom: `Miribel`,
        libellecourt: 'MIB',
        segment_drg: 'B',
        codeinsee: '01249',
        codes_uic: '87723528',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.64247,
          48.97569,
        ],
      },
      properties: {
        nom: `Mitry - Claye`,
        libellecourt: 'MYV',
        segment_drg: 'B',
        codeinsee: '77294',
        codes_uic: '87271528',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.658161,
          45.193365,
        ],
      },
      properties: {
        nom: `Modane`,
        libellecourt: 'MOD',
        segment_drg: 'B',
        codeinsee: '73157',
        codes_uic: '87742007',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.73313,
          49.752584,
        ],
      },
      properties: {
        nom: `Mohon`,
        libellecourt: 'MNH',
        segment_drg: 'C',
        codeinsee: '08105',
        codes_uic: '87172155',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.581915,
          45.322185,
        ],
      },
      properties: {
        nom: `Moirans`,
        libellecourt: 'MOA',
        segment_drg: 'B',
        codeinsee: '38239',
        codes_uic: '87747329',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.56517,
          45.324154,
        ],
      },
      properties: {
        nom: `Moirans La Galifette`,
        libellecourt: 'MFE',
        segment_drg: 'B',
        codeinsee: '38239',
        codes_uic: '87747691',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.077345,
          44.1024178,
        ],
      },
      properties: {
        nom: `Moissac`,
        libellecourt: 'MOI',
        segment_drg: 'C',
        codeinsee: '82112',
        codes_uic: '87611889',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.50044,
          48.53705,
        ],
      },
      properties: {
        nom: `Molsheim`,
        libellecourt: 'MOL',
        segment_drg: 'B',
        codeinsee: '67300',
        codes_uic: '87214577',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.6422273,
          48.7561587,
        ],
      },
      properties: {
        nom: `Mommenheim`,
        libellecourt: 'MOH',
        segment_drg: 'B',
        codeinsee: '67301',
        codes_uic: '87212142',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.6339702,
          44.911996,
        ],
      },
      properties: {
        nom: `Monestier-de-Clermont`,
        libellecourt: 'MDC',
        segment_drg: 'C',
        codeinsee: '38242',
        codes_uic: '87747592',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.5798071,
          47.8507856,
        ],
      },
      properties: {
        nom: `Monéteau - Gurgy`,
        libellecourt: 'MEG',
        segment_drg: 'C',
        codeinsee: '89263',
        codes_uic: '87683557',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6500424,
          44.9696648,
        ],
      },
      properties: {
        nom: `Monistrol-d'Allier`,
        libellecourt: 'MNR',
        segment_drg: 'C',
        codeinsee: '43136',
        codes_uic: '87734335',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7932851,
          47.4987491,
        ],
      },
      properties: {
        nom: `Monnaie`,
        libellecourt: 'MON',
        segment_drg: 'C',
        codeinsee: '37153',
        codes_uic: '87574681',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0320595,
          48.3484915,
        ],
      },
      properties: {
        nom: `Monnerville`,
        libellecourt: 'MWW',
        segment_drg: 'C',
        codeinsee: '91414',
        codes_uic: '87545111',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9412277,
          44.486631,
        ],
      },
      properties: {
        nom: `Monsempron-Libos`,
        libellecourt: 'MLS',
        segment_drg: 'C',
        codeinsee: '47179',
        codes_uic: '87586453',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0966031,
          50.6176672,
        ],
      },
      properties: {
        nom: `Mont de Terre`,
        libellecourt: 'MXT',
        segment_drg: 'C',
        codeinsee: '59350',
        codes_uic: '87287128',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.6156027,
          44.6746283,
        ],
      },
      properties: {
        nom: `Mont-Dauphin - Guillestre`,
        libellecourt: 'MOG',
        segment_drg: 'C',
        codeinsee: '05052',
        codes_uic: '87763508',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.50466,
          43.884898,
        ],
      },
      properties: {
        nom: `Mont-de-Marsan`,
        libellecourt: 'MMR',
        segment_drg: 'B',
        codeinsee: '40192',
        codes_uic: '87671016',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1131379,
          42.5020902,
        ],
      },
      properties: {
        nom: `Mont-Louis - La Cabanasse`,
        libellecourt: 'MTC',
        segment_drg: 'C',
        codeinsee: '66027',
        codes_uic: '87784793',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.4496444,
          48.5599456,
        ],
      },
      properties: {
        nom: `Mont-sur-Meurthe`,
        libellecourt: 'MMT',
        segment_drg: 'C',
        codeinsee: '54383',
        codes_uic: '87141143',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9797531,
          45.3546898,
        ],
      },
      properties: {
        nom: `Montaignac-Saint-Hippolyte`,
        libellecourt: 'MCE',
        segment_drg: 'C',
        codeinsee: '19143',
        codes_uic: '87594135',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.316236,
          46.983705,
        ],
      },
      properties: {
        nom: `Montaigu`,
        libellecourt: 'MTV',
        segment_drg: 'B',
        codeinsee: '85146',
        codes_uic: '87481465',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7339815,
          46.1367425,
        ],
      },
      properties: {
        nom: `Montaigut-le-Blanc`,
        libellecourt: 'MUF',
        segment_drg: 'C',
        codeinsee: '23132',
        codes_uic: '87597674',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.742783,
          48.006862,
        ],
      },
      properties: {
        nom: `Montargis`,
        libellecourt: 'MSR',
        segment_drg: 'A',
        codeinsee: '45208',
        codes_uic: '87684001',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5979,
          43.715985,
        ],
      },
      properties: {
        nom: `Montastruc-la-Conseillère`,
        libellecourt: 'MCL',
        segment_drg: 'B',
        codeinsee: '31358',
        codes_uic: '87615369',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4362155,
          49.2510365,
        ],
      },
      properties: {
        nom: `Montataire`,
        libellecourt: 'MOO',
        segment_drg: 'C',
        codeinsee: '60414',
        codes_uic: '87276618',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.341496,
          44.014387,
        ],
      },
      properties: {
        nom: `Montauban Ville Bourbon`,
        libellecourt: 'MBN',
        segment_drg: 'A',
        codeinsee: '82121',
        codes_uic: '87611244',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.052675,
          48.190241,
        ],
      },
      properties: {
        nom: `Montauban-de-Bretagne`,
        libellecourt: 'MDT',
        segment_drg: 'B',
        codeinsee: '35184',
        codes_uic: '87471086',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4804356,
          43.5734591,
        ],
      },
      properties: {
        nom: `Montaudran`,
        libellecourt: 'MQN',
        segment_drg: 'C',
        codeinsee: '31555',
        codes_uic: '87612010',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.1982813,
          43.1269731,
        ],
      },
      properties: {
        nom: `Montaut Bétharram`,
        libellecourt: 'MHZ',
        segment_drg: 'C',
        codeinsee: '64400',
        codes_uic: '87672113',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.33616,
          47.618747,
        ],
      },
      properties: {
        nom: `Montbard`,
        libellecourt: 'MBA',
        segment_drg: 'B',
        codeinsee: '21425',
        codes_uic: '87713131',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.6366081,
          47.0359922,
        ],
      },
      properties: {
        nom: `Montbarrey`,
        libellecourt: 'MXB',
        segment_drg: 'C',
        codeinsee: '39350',
        codes_uic: '87718866',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.264501,
          43.9241555,
        ],
      },
      properties: {
        nom: `Montbartier`,
        libellecourt: 'MNG',
        segment_drg: 'C',
        codeinsee: '82123',
        codes_uic: '87611699',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7214769,
          47.2917191,
        ],
      },
      properties: {
        nom: `Montbazon`,
        libellecourt: 'MNZ',
        segment_drg: 'C',
        codeinsee: '37154',
        codes_uic: '87571406',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8013763,
          47.5105086,
        ],
      },
      properties: {
        nom: `Montbéliard`,
        libellecourt: 'MBD',
        segment_drg: 'B',
        codeinsee: '25388',
        codes_uic: '87184523',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1908607,
          48.151513,
        ],
      },
      properties: {
        nom: `Montbizot`,
        libellecourt: 'MBZ',
        segment_drg: 'C',
        codeinsee: '72205',
        codes_uic: '87396044',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.078282,
          45.604454,
        ],
      },
      properties: {
        nom: `Montbrison`,
        libellecourt: 'MOB',
        segment_drg: 'C',
        codeinsee: '42147',
        codes_uic: '87726448',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3610264,
          46.6706636,
        ],
      },
      properties: {
        nom: `Montceau-les-Mines`,
        libellecourt: 'MMI',
        segment_drg: 'C',
        codeinsee: '71306',
        codes_uic: '87694620',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.4814867,
          46.7592649,
        ],
      },
      properties: {
        nom: `Montchanin`,
        libellecourt: 'MCH',
        segment_drg: 'C',
        codeinsee: '71310',
        codes_uic: '87694307',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.563,
          49.64147,
        ],
      },
      properties: {
        nom: `Montdidier`,
        libellecourt: 'MTD',
        segment_drg: 'B',
        codeinsee: '80561',
        codes_uic: '87313346',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.744792,
          44.559079,
        ],
      },
      properties: {
        nom: `Montélimar`,
        libellecourt: 'MTR',
        segment_drg: 'B',
        codeinsee: '26198',
        codes_uic: '87764001',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.3961726,
          45.2805457,
        ],
      },
      properties: {
        nom: `Montendre`,
        libellecourt: 'MMM',
        segment_drg: 'C',
        codeinsee: '17240',
        codes_uic: '87491183',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.942972,
          48.379934,
        ],
      },
      properties: {
        nom: `Montereau`,
        libellecourt: 'MTU',
        segment_drg: 'B',
        codeinsee: '77305',
        codes_uic: '87682302',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3347457,
          49.6031854,
        ],
      },
      properties: {
        nom: `Montérolier - Buchy`,
        libellecourt: 'MBY',
        segment_drg: 'C',
        codeinsee: '76445',
        codes_uic: '87411454',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2519756,
          49.7380842,
        ],
      },
      properties: {
        nom: `Montescourt-Lizerolles`,
        libellecourt: 'MCU',
        segment_drg: 'C',
        codeinsee: '02504',
        codes_uic: '87296418',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9947813,
          44.0374619,
        ],
      },
      properties: {
        nom: `Monteux`,
        libellecourt: 'MTX',
        segment_drg: 'C',
        codeinsee: '84080',
        codes_uic: '87765818',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.873943,
          43.932635,
        ],
      },
      properties: {
        nom: `Montfavet`,
        libellecourt: 'MFT',
        segment_drg: 'C',
        codeinsee: '84007',
        codes_uic: '87765412',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9074815,
          47.1847414,
        ],
      },
      properties: {
        nom: `Montferrand - Thoraise`,
        libellecourt: 'MFH',
        segment_drg: 'C',
        codeinsee: '25397',
        codes_uic: '87718106',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8153507,
          48.80224,
        ],
      },
      properties: {
        nom: `Montfort-l'Amaury - Méré`,
        libellecourt: 'MLM',
        segment_drg: 'B',
        codeinsee: '78389',
        codes_uic: '87393892',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.4064237,
          48.0405657,
        ],
      },
      properties: {
        nom: `Montfort-le-Gesnois`,
        libellecourt: 'MLG',
        segment_drg: 'C',
        codeinsee: '72241',
        codes_uic: '87396291',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.949141,
          48.138878,
        ],
      },
      properties: {
        nom: `Montfort-sur-Meu`,
        libellecourt: 'MFS',
        segment_drg: 'B',
        codeinsee: '35188',
        codes_uic: '87471078',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.462224,
          48.708094,
        ],
      },
      properties: {
        nom: `Montgeron - Crosne`,
        libellecourt: 'KRW',
        segment_drg: 'B',
        codeinsee: '91421',
        codes_uic: '87682104',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0034959,
          49.0805828,
        ],
      },
      properties: {
        nom: `Montgeroult - Courcelles`,
        libellecourt: 'MKU',
        segment_drg: 'C',
        codeinsee: '95422',
        codes_uic: '87381160',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.74053,
          49.865621,
        ],
      },
      properties: {
        nom: `Monthermé`,
        libellecourt: 'MME',
        segment_drg: 'B',
        codeinsee: '08081',
        codes_uic: '87172056',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.19767,
          49.00758,
        ],
      },
      properties: {
        nom: `Montigny - Beauchamp`,
        libellecourt: 'MBP',
        segment_drg: 'B',
        codeinsee: '95051',
        codes_uic: '87276089',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.18829,
          50.36151,
        ],
      },
      properties: {
        nom: `Montigny-en-Ostrevent`,
        libellecourt: 'MYO',
        segment_drg: 'B',
        codeinsee: '59414',
        codes_uic: '87345306',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.738561,
          48.33661,
        ],
      },
      properties: {
        nom: `Montigny-sur-Loing`,
        libellecourt: 'MKN',
        segment_drg: 'B',
        codeinsee: '77312',
        codes_uic: '87684100',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.189426,
          49.5429758,
        ],
      },
      properties: {
        nom: `Montivilliers`,
        libellecourt: 'MVL',
        segment_drg: 'C',
        codeinsee: '76447',
        codes_uic: '87413724',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5776454,
          43.4752405,
        ],
      },
      properties: {
        nom: `Montlaur`,
        libellecourt: 'MKJ',
        segment_drg: 'C',
        codeinsee: '31384',
        codes_uic: '87618207',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8173987,
          47.3915307,
        ],
      },
      properties: {
        nom: `Montlouis-sur-Loire`,
        libellecourt: 'NTU',
        segment_drg: 'C',
        codeinsee: '37156',
        codes_uic: '87571273',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.596159,
          46.338101,
        ],
      },
      properties: {
        nom: `Montluçon`,
        libellecourt: 'MLN',
        segment_drg: 'B',
        codeinsee: '03185',
        codes_uic: '87641001',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6115119,
          46.3355913,
        ],
      },
      properties: {
        nom: `Montluçon Rimard`,
        libellecourt: 'NTL',
        segment_drg: 'C',
        codeinsee: '03185',
        codes_uic: '87323675',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.057503,
          45.84777,
        ],
      },
      properties: {
        nom: `Montluel`,
        libellecourt: 'MLU',
        segment_drg: 'B',
        codeinsee: '01262',
        codes_uic: '87723569',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3716718,
          49.5228775,
        ],
      },
      properties: {
        nom: `Montmédy`,
        libellecourt: 'MDY',
        segment_drg: 'C',
        codeinsee: '55351',
        codes_uic: '87194209',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.043289,
          45.503059,
        ],
      },
      properties: {
        nom: `Montmélian`,
        libellecourt: 'MML',
        segment_drg: 'B',
        codeinsee: '73171',
        codes_uic: '87741181',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1380013,
          45.3982987,
        ],
      },
      properties: {
        nom: `Montmoreau`,
        libellecourt: 'MMA',
        segment_drg: 'C',
        codeinsee: '16294',
        codes_uic: '87583674',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8737467,
          46.4174979,
        ],
      },
      properties: {
        nom: `Montmorillon`,
        libellecourt: 'MMN',
        segment_drg: 'C',
        codeinsee: '86165',
        codes_uic: '87575480',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.1616777,
          47.3210164,
        ],
      },
      properties: {
        nom: `Montoir-de-Bretagne`,
        libellecourt: 'MDB',
        segment_drg: 'C',
        codeinsee: '44103',
        codes_uic: '87481713',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1097221,
          43.8685236,
        ],
      },
      properties: {
        nom: `Montpaon`,
        libellecourt: 'MNP',
        segment_drg: 'C',
        codeinsee: '12155',
        codes_uic: '87781534',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.880674,
          43.604738,
        ],
      },
      properties: {
        nom: `Montpellier Saint-Roch`,
        libellecourt: 'MPL',
        segment_drg: 'A',
        codeinsee: '34172',
        codes_uic: '87773002',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.924623,
          43.594787,
        ],
      },
      properties: {
        nom: `Montpellier Sud de France`,
        libellecourt: 'MSF',
        segment_drg: 'A',
        codeinsee: '34172',
        codes_uic: '87688887',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.159328,
          45.006326,
        ],
      },
      properties: {
        nom: `Montpon-Ménestérol`,
        libellecourt: 'MPI',
        segment_drg: 'B',
        codeinsee: '24294',
        codes_uic: '87595322',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5240482,
          43.6450204,
        ],
      },
      properties: {
        nom: `Montrabé`,
        libellecourt: 'MTB',
        segment_drg: 'C',
        codeinsee: '31389',
        codes_uic: '87611848',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.5735,
          43.078109,
        ],
      },
      properties: {
        nom: `Montréjeau - Gourdan-Polignan`,
        libellecourt: 'MTJ',
        segment_drg: 'B',
        codeinsee: '31224',
        codes_uic: '87611152',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1511693,
          48.8067323,
        ],
      },
      properties: {
        nom: `Montreuil`,
        libellecourt: 'MFL',
        segment_drg: 'B',
        codeinsee: '78646',
        codes_uic: '87382879',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7691662,
          50.4661948,
        ],
      },
      properties: {
        nom: `Montreuil sur Mer`,
        libellecourt: 'MOM',
        segment_drg: 'C',
        codeinsee: '62588',
        codes_uic: '87317164',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.1482834,
          47.1254181,
        ],
      },
      properties: {
        nom: `Montreuil-Bellay`,
        libellecourt: 'MBL',
        segment_drg: 'C',
        codeinsee: '49215',
        codes_uic: '87487637',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.674155,
          48.307292,
        ],
      },
      properties: {
        nom: `Montreuil-sur-Ille`,
        libellecourt: 'MSI',
        segment_drg: 'B',
        codeinsee: '35195',
        codes_uic: '87478032',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2002529,
          49.38152,
        ],
      },
      properties: {
        nom: `Montreuil-sur-Thérain`,
        libellecourt: 'MTF',
        segment_drg: 'C',
        codeinsee: '60685',
        codes_uic: '87316406',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0253947,
          47.6178576,
        ],
      },
      properties: {
        nom: `Montreux-Vieux`,
        libellecourt: 'MVX',
        segment_drg: 'C',
        codeinsee: '68215',
        codes_uic: '87184275',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1717596,
          47.3437658,
        ],
      },
      properties: {
        nom: `Montrichard`,
        libellecourt: 'MRD',
        segment_drg: 'C',
        codeinsee: '41151',
        codes_uic: '87574855',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9345425,
          45.996415,
        ],
      },
      properties: {
        nom: `Montroc le Planet`,
        libellecourt: 'MKZ',
        segment_drg: 'C',
        codeinsee: '74056',
        codes_uic: '87746867',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.248814,
          45.644429,
        ],
      },
      properties: {
        nom: `Montrond-les-Bains`,
        libellecourt: 'MRB',
        segment_drg: 'C',
        codeinsee: '42149',
        codes_uic: '87726885',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8262345,
          48.8908268,
        ],
      },
      properties: {
        nom: `Montry - Condé`,
        libellecourt: 'MYD',
        segment_drg: 'C',
        codeinsee: '77315',
        codes_uic: '87116400',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.65448,
          47.2818,
        ],
      },
      properties: {
        nom: `Monts`,
        libellecourt: 'MSD',
        segment_drg: 'B',
        codeinsee: '37159',
        codes_uic: '87575035',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.32229,
          49.06611,
        ],
      },
      properties: {
        nom: `Montsoult - Maffliers`,
        libellecourt: 'MSO',
        segment_drg: 'B',
        codeinsee: '95430',
        codes_uic: '87276493',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5506416,
          48.14149,
        ],
      },
      properties: {
        nom: `Montsûrs`,
        libellecourt: 'MSW',
        segment_drg: 'C',
        codeinsee: '53043',
        codes_uic: '87478537',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.070046,
          49.551284,
        ],
      },
      properties: {
        nom: `Montville`,
        libellecourt: 'MVE',
        segment_drg: 'B',
        codeinsee: '76245',
        codes_uic: '87411801',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0507631,
          47.8607454,
        ],
      },
      properties: {
        nom: `Moosch`,
        libellecourt: 'MWH',
        segment_drg: 'C',
        codeinsee: '68217',
        codes_uic: '87182592',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4179693,
          47.7390902,
        ],
      },
      properties: {
        nom: `Morannes`,
        libellecourt: 'MNS',
        segment_drg: 'C',
        codeinsee: '49220',
        codes_uic: '87484170',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0176446,
          46.5392164,
        ],
      },
      properties: {
        nom: `Morbier`,
        libellecourt: 'MKE',
        segment_drg: 'C',
        codeinsee: '39367',
        codes_uic: '87715433',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.90864,
          44.033565,
        ],
      },
      properties: {
        nom: `Morcenx`,
        libellecourt: 'MCX',
        segment_drg: 'B',
        codeinsee: '40197',
        codes_uic: '87673103',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.79941,
          48.37838,
        ],
      },
      properties: {
        nom: `Moret - Veneux-les-Sablons`,
        libellecourt: 'MOR',
        segment_drg: 'B',
        codeinsee: '77491',
        codes_uic: '87682278',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.47582,
          49.77699,
        ],
      },
      properties: {
        nom: `Moreuil`,
        libellecourt: 'MRE',
        segment_drg: 'B',
        codeinsee: '80570',
        codes_uic: '87313320',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.023578,
          46.5262166,
        ],
      },
      properties: {
        nom: `Morez`,
        libellecourt: 'MRZ',
        segment_drg: 'C',
        codeinsee: '39368',
        codes_uic: '87715441',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2478526,
          49.5232183,
        ],
      },
      properties: {
        nom: `Morgny-la-Pommeraye`,
        libellecourt: 'MGN',
        segment_drg: 'C',
        codeinsee: '76453',
        codes_uic: '87411439',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.6590266,
          48.9366239,
        ],
      },
      properties: {
        nom: `Morhange`,
        libellecourt: 'MHG',
        segment_drg: 'C',
        codeinsee: '57483',
        codes_uic: '87192286',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9082052,
          43.9414696,
        ],
      },
      properties: {
        nom: `Morières-lès-Avignon`,
        libellecourt: 'MVG',
        segment_drg: 'C',
        codeinsee: '84081',
        codes_uic: '87765420',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.832514,
          48.57797,
        ],
      },
      properties: {
        nom: `Morlaix`,
        libellecourt: 'MXR',
        segment_drg: 'B',
        codeinsee: '29151',
        codes_uic: '87474338',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.88881,
          48.613564,
        ],
      },
      properties: {
        nom: `Mormant`,
        libellecourt: 'MRT',
        segment_drg: 'B',
        codeinsee: '77317',
        codes_uic: '87116087',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0673029,
          47.2259417,
        ],
      },
      properties: {
        nom: `Morre`,
        libellecourt: 'MOE',
        segment_drg: 'C',
        codeinsee: '25410',
        codes_uic: '87391300',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9075554,
          48.7892191,
        ],
      },
      properties: {
        nom: `Mortcerf`,
        libellecourt: 'MOF',
        segment_drg: 'B',
        codeinsee: '77318',
        codes_uic: '87116244',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.604653,
          47.053727,
        ],
      },
      properties: {
        nom: `Morteau`,
        libellecourt: 'MTO',
        segment_drg: 'B',
        codeinsee: '25411',
        codes_uic: '87718619',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.93511,
          47.54952,
        ],
      },
      properties: {
        nom: `Morvillars`,
        libellecourt: 'MOV',
        segment_drg: 'C',
        codeinsee: '90072',
        codes_uic: '87184424',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          8.1615803,
          48.9347327,
        ],
      },
      properties: {
        nom: `Mothern`,
        libellecourt: 'MQW',
        segment_drg: 'C',
        codeinsee: '67305',
        codes_uic: '87212456',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8497988,
          49.6365717,
        ],
      },
      properties: {
        nom: `Motteville`,
        libellecourt: 'MOT',
        segment_drg: 'C',
        codeinsee: '76456',
        codes_uic: '87411280',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.974114,
          43.620318,
        ],
      },
      properties: {
        nom: `Mouans-Sartoux`,
        libellecourt: 'MUU',
        segment_drg: 'B',
        codeinsee: '06084',
        codes_uic: '87401323',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.799644,
          46.976911,
        ],
      },
      properties: {
        nom: `Mouchard`,
        libellecourt: 'MCD',
        segment_drg: 'B',
        codeinsee: '39370',
        codes_uic: '87718833',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.47332,
          48.58626,
        ],
      },
      properties: {
        nom: `Moulin Galant`,
        libellecourt: 'MJW',
        segment_drg: 'B',
        codeinsee: '91174',
        codes_uic: '87681403',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.338842,
          46.561346,
        ],
      },
      properties: {
        nom: `Moulins sur Allier`,
        libellecourt: 'MSA',
        segment_drg: 'B',
        codeinsee: '03190',
        codes_uic: '87696328',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.7447365,
          45.0840273,
        ],
      },
      properties: {
        nom: `Moulis - Listrac`,
        libellecourt: 'MUL',
        segment_drg: 'C',
        codeinsee: '33297',
        codes_uic: '87581231',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.1864355,
          49.1111851,
        ],
      },
      properties: {
        nom: `Moult - Argences`,
        libellecourt: 'MTA',
        segment_drg: 'C',
        codeinsee: '14456',
        codes_uic: '87444190',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3180982,
          49.1313076,
        ],
      },
      properties: {
        nom: `Mourmelon-le-Petit`,
        libellecourt: 'MLP',
        segment_drg: 'C',
        codeinsee: '51389',
        codes_uic: '87174409',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0423421,
          48.8139949,
        ],
      },
      properties: {
        nom: `Mouroux`,
        libellecourt: 'MXK',
        segment_drg: 'C',
        codeinsee: '77320',
        codes_uic: '87116285',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.2435052,
          48.5074512,
        ],
      },
      properties: {
        nom: `Moustéru`,
        libellecourt: 'MUW',
        segment_drg: 'C',
        codeinsee: '22013',
        codes_uic: '87473512',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.531425,
          45.486344,
        ],
      },
      properties: {
        nom: `Moûtiers - Salins - Brides-les-Bains`,
        libellecourt: 'MOS',
        segment_drg: 'B',
        codeinsee: '73181',
        codes_uic: '87741728',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.32635,
          49.32045,
        ],
      },
      properties: {
        nom: `Mouy - Bury`,
        libellecourt: 'MUY',
        segment_drg: 'B',
        codeinsee: '60116',
        codes_uic: '87313577',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.043226,
          49.246713,
        ],
      },
      properties: {
        nom: `Moyeuvre-Grande`,
        libellecourt: 'MGK',
        segment_drg: 'C',
        codeinsee: '57491',
        codes_uic: '87191718',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0875666,
          48.0246077,
        ],
      },
      properties: {
        nom: `Muhlbach-sur-Munster`,
        libellecourt: 'MHK',
        segment_drg: 'C',
        codeinsee: '68223',
        codes_uic: '87182733',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.8915287,
          49.2781012,
        ],
      },
      properties: {
        nom: `Muizon`,
        libellecourt: 'MIZ',
        segment_drg: 'C',
        codeinsee: '51391',
        codes_uic: '87171298',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.342396,
          47.742224,
        ],
      },
      properties: {
        nom: `Mulhouse`,
        libellecourt: 'MSE',
        segment_drg: 'A',
        codeinsee: '68224',
        codes_uic: '87182063',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.308477,
          47.74713,
        ],
      },
      properties: {
        nom: `Mulhouse Dornach`,
        libellecourt: 'MDQ',
        segment_drg: 'B',
        codeinsee: '68224',
        codes_uic: '87182055',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.29478,
          47.75136,
        ],
      },
      properties: {
        nom: `Mulhouse Musées`,
        libellecourt: 'MMU',
        segment_drg: 'C',
        codeinsee: '68224',
        codes_uic: '87534339',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.317015,
          47.743561,
        ],
      },
      properties: {
        nom: `Mulhouse Zu Rhein Tram-Train`,
        libellecourt: 'MZR',
        segment_drg: 'C',
        codeinsee: '68224',
        codes_uic: '87472639',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3119577,
          48.52451,
        ],
      },
      properties: {
        nom: `Mullerhof`,
        libellecourt: 'MFX',
        segment_drg: 'C',
        codeinsee: '67500',
        codes_uic: '87214643',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          8.1409912,
          48.9237982,
        ],
      },
      properties: {
        nom: `Munchhausen`,
        libellecourt: 'MHQ',
        segment_drg: 'C',
        codeinsee: '67308',
        codes_uic: '87212449',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.721389,
          48.6447732,
        ],
      },
      properties: {
        nom: `Mundolsheim`,
        libellecourt: 'MUM',
        segment_drg: 'C',
        codeinsee: '67309',
        codes_uic: '87212100',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1341728,
          48.0383438,
        ],
      },
      properties: {
        nom: `Munster`,
        libellecourt: 'MUT',
        segment_drg: 'B',
        codeinsee: '68226',
        codes_uic: '87182394',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1528861,
          48.0390754,
        ],
      },
      properties: {
        nom: `Munster Badischhof`,
        libellecourt: 'MUB',
        segment_drg: 'C',
        codeinsee: '68226',
        codes_uic: '87386540',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8696045,
          45.1091483,
        ],
      },
      properties: {
        nom: `Murat`,
        libellecourt: 'MUR',
        segment_drg: 'C',
        codeinsee: '15138',
        codes_uic: '87645481',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.324449,
          43.464824,
        ],
      },
      properties: {
        nom: `Muret`,
        libellecourt: 'MET',
        segment_drg: 'B',
        codeinsee: '31395',
        codes_uic: '87611038',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.325671,
          48.86079,
        ],
      },
      properties: {
        nom: `Musée d'Orsay`,
        libellecourt: 'MDS',
        segment_drg: 'B',
        codeinsee: '75107',
        codes_uic: '87547307',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.354071,
          45.034329,
        ],
      },
      properties: {
        nom: `Mussidan`,
        libellecourt: 'MUS',
        segment_drg: 'B',
        codeinsee: '24299',
        codes_uic: '87595298',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.4621581,
          48.5337753,
        ],
      },
      properties: {
        nom: `Mutzig`,
        libellecourt: 'MTZ',
        segment_drg: 'B',
        codeinsee: '67313',
        codes_uic: '87214585',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.4963446,
          46.7595303,
        ],
      },
      properties: {
        nom: `Naintré`,
        libellecourt: 'NIB',
        segment_drg: 'C',
        codeinsee: '86174',
        codes_uic: '87575175',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9761625,
          44.221802,
        ],
      },
      properties: {
        nom: `Najac`,
        libellecourt: 'NAJ',
        segment_drg: 'C',
        codeinsee: '12167',
        codes_uic: '87613463',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1053184,
          49.8082274,
        ],
      },
      properties: {
        nom: `Namps - Quevauvillers`,
        libellecourt: 'NAQ',
        segment_drg: 'C',
        codeinsee: '80582',
        codes_uic: '87313379',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.2912016,
          48.7180423,
        ],
      },
      properties: {
        nom: `Nançois - Tronville`,
        libellecourt: 'NAE',
        segment_drg: 'C',
        codeinsee: '55519',
        codes_uic: '87175067',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.174583,
          48.689861,
        ],
      },
      properties: {
        nom: `Nancy`,
        libellecourt: 'NCY',
        segment_drg: 'A',
        codeinsee: '54395',
        codes_uic: '87141002',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.012619,
          48.561336,
        ],
      },
      properties: {
        nom: `Nangis`,
        libellecourt: 'NAN',
        segment_drg: 'B',
        codeinsee: '77327',
        codes_uic: '87116095',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.224397,
          48.897377,
        ],
      },
      properties: {
        nom: `Nanterre La Folie`,
        libellecourt: 'NFE',
        segment_drg: 'B',
        codeinsee: '92050',
        codes_uic: '87386011',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2158277,
          48.90122,
        ],
      },
      properties: {
        nom: `Nanterre Université`,
        libellecourt: 'NUN',
        segment_drg: 'B',
        codeinsee: '92050',
        codes_uic: '87386318',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.542356,
          47.216148,
        ],
      },
      properties: {
        nom: `Nantes`,
        libellecourt: 'NTS',
        segment_drg: 'A',
        codeinsee: '44109',
        codes_uic: '87481002',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2200172,
          48.9738082,
        ],
      },
      properties: {
        nom: `Nanteuil - Saâcy`,
        libellecourt: 'NAU',
        segment_drg: 'B',
        codeinsee: '77397',
        codes_uic: '87116558',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.79459,
          49.14275,
        ],
      },
      properties: {
        nom: `Nanteuil-le-Haudouin`,
        libellecourt: 'NHY',
        segment_drg: 'B',
        codeinsee: '60446',
        codes_uic: '87271577',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1563734,
          46.0056192,
        ],
      },
      properties: {
        nom: `Nantiat`,
        libellecourt: 'NNA',
        segment_drg: 'C',
        codeinsee: '87103',
        codes_uic: '87592444',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.00591,
          43.190387,
        ],
      },
      properties: {
        nom: `Narbonne`,
        libellecourt: 'NBN',
        segment_drg: 'A',
        codeinsee: '11262',
        codes_uic: '87781104',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.363504,
          44.1854793,
        ],
      },
      properties: {
        nom: `Naucelle`,
        libellecourt: 'NCE',
        segment_drg: 'C',
        codeinsee: '12169',
        codes_uic: '87615732',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4766725,
          48.1574807,
        ],
      },
      properties: {
        nom: `Neau`,
        libellecourt: 'NEA',
        segment_drg: 'C',
        codeinsee: '53163',
        codes_uic: '87478545',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8611999,
          45.3460288,
        ],
      },
      properties: {
        nom: `Négrondes`,
        libellecourt: 'NEG',
        segment_drg: 'C',
        codeinsee: '24308',
        codes_uic: '87595132',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.685754,
          48.267884,
        ],
      },
      properties: {
        nom: `Nemours - Saint-Pierre`,
        libellecourt: 'NSP',
        segment_drg: 'B',
        codeinsee: '77431',
        codes_uic: '87684126',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8221695,
          46.9996897,
        ],
      },
      properties: {
        nom: `Nérondes`,
        libellecourt: 'NDS',
        segment_drg: 'C',
        codeinsee: '18160',
        codes_uic: '87576454',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.5256884,
          46.7834177,
        ],
      },
      properties: {
        nom: `Nerpuy`,
        libellecourt: 'NPY',
        segment_drg: 'C',
        codeinsee: '86174',
        codes_uic: '87575167',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9089882,
          49.7639147,
        ],
      },
      properties: {
        nom: `Nesle`,
        libellecourt: 'NES',
        segment_drg: 'C',
        codeinsee: '80585',
        codes_uic: '87313486',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.6904018,
          48.3583428,
        ],
      },
      properties: {
        nom: `Neufchâteau`,
        libellecourt: 'NCH',
        segment_drg: 'C',
        codeinsee: '88321',
        codes_uic: '87141291',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.643115,
          50.62364,
        ],
      },
      properties: {
        nom: `Neufchâtel-Hardelot`,
        libellecourt: 'NHA',
        segment_drg: 'C',
        codeinsee: '62604',
        codes_uic: '87317099',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.5649155,
          47.5580135,
        ],
      },
      properties: {
        nom: `Neuillé-Pont-Pierre`,
        libellecourt: 'NPP',
        segment_drg: 'C',
        codeinsee: '37167',
        codes_uic: '87571547',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.284516,
          48.877983,
        ],
      },
      properties: {
        nom: `Neuilly - Porte Maillot`,
        libellecourt: 'NPT',
        segment_drg: 'B',
        codeinsee: '75117',
        codes_uic: '87381020',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9791866,
          45.1253044,
        ],
      },
      properties: {
        nom: `Neussargues`,
        libellecourt: 'NEU',
        segment_drg: 'C',
        codeinsee: '15141',
        codes_uic: '87645507',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1078904,
          48.6147666,
        ],
      },
      properties: {
        nom: `Neuves-Maisons`,
        libellecourt: 'NAS',
        segment_drg: 'C',
        codeinsee: '54397',
        codes_uic: '87141507',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.4450162,
          45.0999632,
        ],
      },
      properties: {
        nom: `Neuvic`,
        libellecourt: 'NVC',
        segment_drg: 'C',
        codeinsee: '24309',
        codes_uic: '87595272',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.07886,
          49.01426,
        ],
      },
      properties: {
        nom: `Neuville Université`,
        libellecourt: 'NUE',
        segment_drg: 'B',
        codeinsee: '95450',
        codes_uic: '87334482',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1997294,
          48.0705577,
        ],
      },
      properties: {
        nom: `Neuville-sur-Sarthe`,
        libellecourt: 'NER',
        segment_drg: 'C',
        codeinsee: '72217',
        codes_uic: '87396028',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8642473,
          46.883564,
        ],
      },
      properties: {
        nom: `Neuvy-Pailloux`,
        libellecourt: 'NPO',
        segment_drg: 'C',
        codeinsee: '36140',
        codes_uic: '87597070',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.150743,
          46.987282,
        ],
      },
      properties: {
        nom: `Nevers`,
        libellecourt: 'NVS',
        segment_drg: 'A',
        codeinsee: '58194',
        codes_uic: '87696005',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1636746,
          47.0068974,
        ],
      },
      properties: {
        nom: `Nevers Le Banlay`,
        libellecourt: 'NVB',
        segment_drg: 'C',
        codeinsee: '58194',
        codes_uic: '87559070',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1784396,
          45.6915692,
        ],
      },
      properties: {
        nom: `Nexon`,
        libellecourt: 'NNF',
        segment_drg: 'C',
        codeinsee: '87106',
        codes_uic: '87592725',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8405298,
          48.9387638,
        ],
      },
      properties: {
        nom: `Nézel - Aulnay`,
        libellecourt: 'NZL',
        segment_drg: 'C',
        codeinsee: '78451',
        codes_uic: '87381731',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.261904,
          43.704556,
        ],
      },
      properties: {
        nom: `Nice`,
        libellecourt: 'NIC',
        segment_drg: 'A',
        codeinsee: '06088',
        codes_uic: '87756056',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.29144,
          43.72175,
        ],
      },
      properties: {
        nom: `Nice Pont Michel`,
        libellecourt: 'NPM',
        segment_drg: 'C',
        codeinsee: '06088',
        codes_uic: '87590299',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.290175,
          43.705554,
        ],
      },
      properties: {
        nom: `Nice Riquier`,
        libellecourt: 'NIR',
        segment_drg: 'B',
        codeinsee: '06088',
        codes_uic: '87756353',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.216199,
          43.670728,
        ],
      },
      properties: {
        nom: `Nice Saint-Augustin`,
        libellecourt: 'NIA',
        segment_drg: 'B',
        codeinsee: '06088',
        codes_uic: '87756254',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.6341348,
          48.9523989,
        ],
      },
      properties: {
        nom: `Niederbronn-les-Bains`,
        libellecourt: 'NLB',
        segment_drg: 'B',
        codeinsee: '67324',
        codes_uic: '87213256',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8289655,
          50.6966975,
        ],
      },
      properties: {
        nom: `Nieppe`,
        libellecourt: 'NPE',
        segment_drg: 'C',
        codeinsee: '59431',
        codes_uic: '87287151',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1723974,
          45.9273896,
        ],
      },
      properties: {
        nom: `Nieul`,
        libellecourt: 'NEW',
        segment_drg: 'C',
        codeinsee: '87107',
        codes_uic: '87592410',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.365845,
          43.832291,
        ],
      },
      properties: {
        nom: `Nîmes`,
        libellecourt: 'NMS',
        segment_drg: 'A',
        codeinsee: '30189',
        codes_uic: '87775007',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.50768,
          43.81681,
        ],
      },
      properties: {
        nom: `Nîmes Pont du Gard`,
        libellecourt: 'NIM',
        segment_drg: 'A',
        codeinsee: '30155',
        codes_uic: '87703975',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.2569415,
          43.340223,
        ],
      },
      properties: {
        nom: `Niolon`,
        libellecourt: 'NLO',
        segment_drg: 'C',
        codeinsee: '13088',
        codes_uic: '87753582',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.454639,
          46.319491,
        ],
      },
      properties: {
        nom: `Niort`,
        libellecourt: 'NRT',
        segment_drg: 'A',
        codeinsee: '79191',
        codes_uic: '87485300',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8082195,
          45.1383083,
        ],
      },
      properties: {
        nom: `Niversac`,
        libellecourt: 'NEC',
        segment_drg: 'C',
        codeinsee: '24439',
        codes_uic: '87595512',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.67393,
          50.48297,
        ],
      },
      properties: {
        nom: `Nœux-les-Mines`,
        libellecourt: 'NOX',
        segment_drg: 'C',
        codeinsee: '62617',
        codes_uic: '87342139',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.494331,
          48.838846,
        ],
      },
      properties: {
        nom: `Nogent - Le Perreux`,
        libellecourt: 'NLP',
        segment_drg: 'B',
        codeinsee: '94052',
        codes_uic: '87113746',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3220981,
          48.968872,
        ],
      },
      properties: {
        nom: `Nogent-l'Artaud - Charly`,
        libellecourt: 'NAA',
        segment_drg: 'B',
        codeinsee: '02555',
        codes_uic: '87116566',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8103045,
          48.3255926,
        ],
      },
      properties: {
        nom: `Nogent-le-Rotrou`,
        libellecourt: 'NGR',
        segment_drg: 'B',
        codeinsee: '28280',
        codes_uic: '87394296',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.49372888,
          48.49783878,
        ],
      },
      properties: {
        nom: `Nogent-sur-Seine`,
        libellecourt: 'NOG',
        segment_drg: 'B',
        codeinsee: '10268',
        codes_uic: '87118190',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7375773,
          47.8527938,
        ],
      },
      properties: {
        nom: `Nogent-sur-Vernisson`,
        libellecourt: 'NGI',
        segment_drg: 'C',
        codeinsee: '45229',
        codes_uic: '87684274',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.28066,
          49.1327,
        ],
      },
      properties: {
        nom: `Nointel - Mours`,
        libellecourt: 'NOJ',
        segment_drg: 'B',
        codeinsee: '95452',
        codes_uic: '87276758',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.459306,
          48.896288,
        ],
      },
      properties: {
        nom: `Noisy-le-Sec`,
        libellecourt: 'NSY',
        segment_drg: 'B',
        codeinsee: '93053',
        codes_uic: '87113217',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8959456,
          47.4096869,
        ],
      },
      properties: {
        nom: `Noizay`,
        libellecourt: 'NIY',
        segment_drg: 'C',
        codeinsee: '37171',
        codes_uic: '87574368',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2063499,
          50.5023744,
        ],
      },
      properties: {
        nom: `Nomain`,
        libellecourt: 'NOM',
        segment_drg: 'C',
        codeinsee: '59435',
        codes_uic: '87286609',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1929162,
          48.7757257,
        ],
      },
      properties: {
        nom: `Nonancourt`,
        libellecourt: 'NCO',
        segment_drg: 'C',
        codeinsee: '27438',
        codes_uic: '87393553',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.5033645,
          47.4419243,
        ],
      },
      properties: {
        nom: `Nort-sur-Erdre`,
        libellecourt: 'NSE',
        segment_drg: 'B',
        codeinsee: '44110',
        codes_uic: '87481598',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0231501,
          50.8829544,
        ],
      },
      properties: {
        nom: `Nortkerque`,
        libellecourt: 'NKQ',
        segment_drg: 'C',
        codeinsee: '62621',
        codes_uic: '87287292',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.4687785,
          45.5393185,
        ],
      },
      properties: {
        nom: `Notre-Dame de Briançon`,
        libellecourt: 'NAB',
        segment_drg: 'C',
        codeinsee: '73187',
        codes_uic: '87741694',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7070252,
          47.4595668,
        ],
      },
      properties: {
        nom: `Notre-Dame-d'Oé`,
        libellecourt: 'NDA',
        segment_drg: 'C',
        codeinsee: '37172',
        codes_uic: '87574699',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0330957,
          47.5337788,
        ],
      },
      properties: {
        nom: `Nouan-le-Fuzelier`,
        libellecourt: 'NOF',
        segment_drg: 'C',
        codeinsee: '41161',
        codes_uic: '87543157',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.794973,
          49.6973135,
        ],
      },
      properties: {
        nom: `Nouvion-sur-Meuse`,
        libellecourt: 'NSM',
        segment_drg: 'C',
        codeinsee: '08327',
        codes_uic: '87172213',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7428155,
          49.8120125,
        ],
      },
      properties: {
        nom: `Nouzonville`,
        libellecourt: 'NOU',
        segment_drg: 'C',
        codeinsee: '08328',
        codes_uic: '87172023',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.052101,
          49.028635,
        ],
      },
      properties: {
        nom: `Novéant-sur-Moselle`,
        libellecourt: 'NEN',
        segment_drg: 'B',
        codeinsee: '57515',
        codes_uic: '87192427',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1327011,
          47.2839618,
        ],
      },
      properties: {
        nom: `Novillars`,
        libellecourt: 'NOV',
        segment_drg: 'C',
        codeinsee: '25429',
        codes_uic: '87718411',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.5277646,
          48.1187915,
        ],
      },
      properties: {
        nom: `Noyal - Acigné`,
        libellecourt: 'NOC',
        segment_drg: 'B',
        codeinsee: '35207',
        codes_uic: '87471540',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7045772,
          50.1875408,
        ],
      },
      properties: {
        nom: `Noyelles-sur-Mer`,
        libellecourt: 'NOE',
        segment_drg: 'C',
        codeinsee: '80600',
        codes_uic: '87317396',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.0981755,
          47.8744544,
        ],
      },
      properties: {
        nom: `Noyen-sur-Sarthe`,
        libellecourt: 'NON',
        segment_drg: 'C',
        codeinsee: '72223',
        codes_uic: '87396374',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.00641,
          49.57736,
        ],
      },
      properties: {
        nom: `Noyon`,
        libellecourt: 'NOY',
        segment_drg: 'B',
        codeinsee: '60471',
        codes_uic: '87276782',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2072916,
          43.9760134,
        ],
      },
      properties: {
        nom: `Nozières - Brignon`,
        libellecourt: 'NOZ',
        segment_drg: 'C',
        codeinsee: '30046',
        codes_uic: '87775353',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.211186,
          47.7291142,
        ],
      },
      properties: {
        nom: `Nuits sous Ravières`,
        libellecourt: 'NUR',
        segment_drg: 'C',
        codeinsee: '89280',
        codes_uic: '87713156',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.956204,
          47.130545,
        ],
      },
      properties: {
        nom: `Nuits-Saint-Georges`,
        libellecourt: 'NUI',
        segment_drg: 'B',
        codeinsee: '21464',
        codes_uic: '87713529',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.5327486,
          46.1842195,
        ],
      },
      properties: {
        nom: `Nurieux-Volognat`,
        libellecourt: 'NEX',
        segment_drg: 'C',
        codeinsee: '01267',
        codes_uic: '87743351',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2630177,
          42.5416979,
        ],
      },
      properties: {
        nom: `Nyer`,
        libellecourt: 'NYE',
        segment_drg: 'C',
        codeinsee: '66123',
        codes_uic: '87784736',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.547015,
          48.8426083,
        ],
      },
      properties: {
        nom: `Obermodern-Zutzendorf`,
        libellecourt: 'OBM',
        segment_drg: 'B',
        codeinsee: '67347',
        codes_uic: '87213165',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.48881,
          48.46219,
        ],
      },
      properties: {
        nom: `Obernai`,
        libellecourt: 'OBE',
        segment_drg: 'B',
        codeinsee: '67348',
        codes_uic: '87214288',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4068293,
          45.2647335,
        ],
      },
      properties: {
        nom: `Objat`,
        libellecourt: 'OBT',
        segment_drg: 'C',
        codeinsee: '19153',
        codes_uic: '87594630',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9734829,
          47.9118756,
        ],
      },
      properties: {
        nom: `Oderen`,
        libellecourt: 'ODE',
        segment_drg: 'C',
        codeinsee: '68247',
        codes_uic: '87182634',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1317322,
          49.0003724,
        ],
      },
      properties: {
        nom: `Oermingen`,
        libellecourt: 'OER',
        segment_drg: 'C',
        codeinsee: '67355',
        codes_uic: '87215632',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5076467,
          43.153939,
        ],
      },
      properties: {
        nom: `Ogeu-les-Bains`,
        libellecourt: 'OLB',
        segment_drg: 'C',
        codeinsee: '64421',
        codes_uic: '87672709',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.101799,
          49.34306,
        ],
      },
      properties: {
        nom: `Oissel`,
        libellecourt: 'OSL',
        segment_drg: 'B',
        codeinsee: '76484',
        codes_uic: '87411207',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2719309,
          42.55472,
        ],
      },
      properties: {
        nom: `Olette - Canaveilles`,
        libellecourt: 'OLE',
        segment_drg: 'C',
        codeinsee: '66125',
        codes_uic: '87784728',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.824979,
          43.122586,
        ],
      },
      properties: {
        nom: `Ollioules - Sanary-sur-Mer`,
        libellecourt: 'OLL',
        segment_drg: 'B',
        codeinsee: '83090',
        codes_uic: '87755231',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.76738,
          46.5486605,
        ],
      },
      properties: {
        nom: `Olonne-sur-Mer`,
        libellecourt: 'OSM',
        segment_drg: 'C',
        codeinsee: '85166',
        codes_uic: '87486431',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6122826,
          43.1947669,
        ],
      },
      properties: {
        nom: `Oloron-Sainte-Marie`,
        libellecourt: 'OLN',
        segment_drg: 'C',
        codeinsee: '64422',
        codes_uic: '87672725',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.4571793,
          43.5685809,
        ],
      },
      properties: {
        nom: `Ondres`,
        libellecourt: 'OND',
        segment_drg: 'C',
        codeinsee: '40209',
        codes_uic: '87673319',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.97909,
          49.01367,
        ],
      },
      properties: {
        nom: `Onville`,
        libellecourt: 'ONV',
        segment_drg: 'C',
        codeinsee: '54410',
        codes_uic: '87192435',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.18595,
          47.492,
        ],
      },
      properties: {
        nom: `Onzain - Chaumont-sur-Loire`,
        libellecourt: 'OZA',
        segment_drg: 'B',
        codeinsee: '41167',
        codes_uic: '87574319',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.819594,
          44.137304,
        ],
      },
      properties: {
        nom: `Orange`,
        libellecourt: 'OGE',
        segment_drg: 'B',
        codeinsee: '84087',
        codes_uic: '87765107',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.407736,
          48.63626,
        ],
      },
      properties: {
        nom: `Orangis Bois de l'Épine`,
        libellecourt: 'OBP',
        segment_drg: 'B',
        codeinsee: '91521',
        codes_uic: '87681346',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.659147,
          47.1500962,
        ],
      },
      properties: {
        nom: `Orchamps`,
        libellecourt: 'ORA',
        segment_drg: 'C',
        codeinsee: '39396',
        codes_uic: '87718361',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.24888,
          50.47705,
        ],
      },
      properties: {
        nom: `Orchies`,
        libellecourt: 'ORC',
        segment_drg: 'B',
        codeinsee: '59449',
        codes_uic: '87286583',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7028344,
          48.8267809,
        ],
      },
      properties: {
        nom: `Orgerus - Béhoust`,
        libellecourt: 'OGB',
        segment_drg: 'B',
        codeinsee: '78465',
        codes_uic: '87393447',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.0456738,
          43.7859131,
        ],
      },
      properties: {
        nom: `Orgon`,
        libellecourt: 'ORG',
        segment_drg: 'C',
        codeinsee: '13067',
        codes_uic: '87753707',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0241558,
          49.8906693,
        ],
      },
      properties: {
        nom: `Origny-en-Thiérache`,
        libellecourt: 'OGY',
        segment_drg: 'C',
        codeinsee: '02574',
        codes_uic: '87296145',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.904666,
          47.90796,
        ],
      },
      properties: {
        nom: `Orléans`,
        libellecourt: 'ORL',
        segment_drg: 'A',
        codeinsee: '45234',
        codes_uic: '87543009',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.40265,
          48.741815,
        ],
      },
      properties: {
        nom: `Orly Ville`,
        libellecourt: 'OYI',
        segment_drg: 'B',
        codeinsee: '94054',
        codes_uic: '87546200',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8379502,
          49.2003204,
        ],
      },
      properties: {
        nom: `Ormoy-Villers`,
        libellecourt: 'ORM',
        segment_drg: 'C',
        codeinsee: '60479',
        codes_uic: '87271585',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.49,
          49.13895,
        ],
      },
      properties: {
        nom: `Orry-la-Ville - Coye`,
        libellecourt: 'ORY',
        segment_drg: 'B',
        codeinsee: '60482',
        codes_uic: '87276279',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.626754,
          50.1031718,
        ],
      },
      properties: {
        nom: `Ors`,
        libellecourt: 'ORZ',
        segment_drg: 'C',
        codeinsee: '59450',
        codes_uic: '87295667',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.76776,
          43.484242,
        ],
      },
      properties: {
        nom: `Orthez`,
        libellecourt: 'ORT',
        segment_drg: 'B',
        codeinsee: '64430',
        codes_uic: '87672253',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.05771,
          49.06283,
        ],
      },
      properties: {
        nom: `Osny`,
        libellecourt: 'OSN',
        segment_drg: 'B',
        codeinsee: '95476',
        codes_uic: '87381145',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9771166,
          42.4199665,
        ],
      },
      properties: {
        nom: `Osséja`,
        libellecourt: 'OSA',
        segment_drg: 'C',
        codeinsee: '66130',
        codes_uic: '87784868',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3048922,
          43.2352119,
        ],
      },
      properties: {
        nom: `Ossès - Saint-Martin-d'Arrossa`,
        libellecourt: 'OSS',
        segment_drg: 'C',
        codeinsee: '64490',
        codes_uic: '87673707',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.0214839,
          43.1833684,
        ],
      },
      properties: {
        nom: `Ossun`,
        libellecourt: 'OSQ',
        segment_drg: 'C',
        codeinsee: '65344',
        codes_uic: '87671313',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.03244,
          50.44542,
        ],
      },
      properties: {
        nom: `Ostricourt`,
        libellecourt: 'OIC',
        segment_drg: 'B',
        codeinsee: '59452',
        codes_uic: '87345249',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.291992,
          47.3433655,
        ],
      },
      properties: {
        nom: `Oudon`,
        libellecourt: 'ODK',
        segment_drg: 'C',
        codeinsee: '44115',
        codes_uic: '87481184',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.0727895,
          47.2559157,
        ],
      },
      properties: {
        nom: `Ouges`,
        libellecourt: 'OUS',
        segment_drg: 'C',
        codeinsee: '21473',
        codes_uic: '87712604',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8135793,
          45.7166261,
        ],
      },
      properties: {
        nom: `Oullins`,
        libellecourt: 'OUL',
        segment_drg: 'B',
        codeinsee: '69149',
        codes_uic: '87722207',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9540017,
          49.5341405,
        ],
      },
      properties: {
        nom: `Ourscamp`,
        libellecourt: 'OUA',
        segment_drg: 'C',
        codeinsee: '60492',
        codes_uic: '87276774',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.653338,
          46.259742,
        ],
      },
      properties: {
        nom: `Oyonnax`,
        libellecourt: 'OYO',
        segment_drg: 'C',
        codeinsee: '01283',
        codes_uic: '87743534',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.689841,
          48.77072,
        ],
      },
      properties: {
        nom: `Ozoir-la-Ferrière`,
        libellecourt: 'OZF',
        segment_drg: 'B',
        codeinsee: '77350',
        codes_uic: '87116020',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.2010538,
          47.0462492,
        ],
      },
      properties: {
        nom: `Pagny-le-Château`,
        libellecourt: 'PYK',
        segment_drg: 'C',
        codeinsee: '21475',
        codes_uic: '87713669',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7336468,
          48.6965426,
        ],
      },
      properties: {
        nom: `Pagny-sur-Meuse`,
        libellecourt: 'PYM',
        segment_drg: 'C',
        codeinsee: '55398',
        codes_uic: '87175828',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0250346,
          48.9852003,
        ],
      },
      properties: {
        nom: `Pagny-sur-Moselle`,
        libellecourt: 'PMO',
        segment_drg: 'B',
        codeinsee: '54415',
        codes_uic: '87192468',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.0460958,
          48.77694,
        ],
      },
      properties: {
        nom: `Paimpol`,
        libellecourt: 'PIP',
        segment_drg: 'C',
        codeinsee: '22162',
        codes_uic: '87473868',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.619451,
          43.116207,
        ],
      },
      properties: {
        nom: `Pamiers`,
        libellecourt: 'PMS',
        segment_drg: 'B',
        codeinsee: '09225',
        codes_uic: '87611343',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.051931,
          46.3996295,
        ],
      },
      properties: {
        nom: `Pamproux`,
        libellecourt: 'PAP',
        segment_drg: 'C',
        codeinsee: '79201',
        codes_uic: '87485524',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.400685,
          48.898096,
        ],
      },
      properties: {
        nom: `Pantin`,
        libellecourt: 'PAN',
        segment_drg: 'B',
        codeinsee: '93055',
        codes_uic: '87113209',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.113744,
          46.447312,
        ],
      },
      properties: {
        nom: `Paray-le-Monial`,
        libellecourt: 'PLM',
        segment_drg: 'B',
        codeinsee: '71342',
        codes_uic: '87694687',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.51382,
          48.97334,
        ],
      },
      properties: {
        nom: `Parc des Expositions`,
        libellecourt: 'PEX',
        segment_drg: 'B',
        codeinsee: '93078',
        codes_uic: '87271486',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6193396,
          44.9447032,
        ],
      },
      properties: {
        nom: `Parempuyre`,
        libellecourt: 'PPY',
        segment_drg: 'C',
        codeinsee: '33312',
        codes_uic: '87581710',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2178245,
          45.6139737,
        ],
      },
      properties: {
        nom: `Parent - Coudes - Champeix`,
        libellecourt: 'PCC',
        segment_drg: 'C',
        codeinsee: '63269',
        codes_uic: '87734194',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.364891,
          48.842285,
        ],
      },
      properties: {
        nom: `Paris Austerlitz`,
        libellecourt: 'PAZ',
        segment_drg: 'A;B',
        codeinsee: '75113',
        codes_uic: '87547000;87547026',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.38278,
          48.83917,
        ],
      },
      properties: {
        nom: `Paris Bercy Bourgogne - Pays d'Auvergne`,
        libellecourt: 'PBY',
        segment_drg: 'A',
        codeinsee: '75112',
        codes_uic: '87686667',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.358424,
          48.876742,
        ],
      },
      properties: {
        nom: `Paris Est`,
        libellecourt: 'PES',
        segment_drg: 'A',
        codeinsee: '75110',
        codes_uic: '87113001',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.37352,
          48.844888,
        ],
      },
      properties: {
        nom: `Paris Gare de Lyon`,
        libellecourt: 'PLY',
        segment_drg: 'A;B',
        codeinsee: '75112',
        codes_uic: '87686006;87686030',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.355151,
          48.880185,
        ],
      },
      properties: {
        nom: `Paris Gare du Nord`,
        libellecourt: 'PNO',
        segment_drg: 'A;A;B',
        codeinsee: '75110',
        codes_uic: '87271007;87271031;87271023',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.320514,
          48.841172,
        ],
      },
      properties: {
        nom: `Paris Montparnasse`,
        libellecourt: 'PMP',
        segment_drg: 'A;A',
        codeinsee: '75115',
        codes_uic: '87391102;87391003;87391011',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.325331,
          48.876242,
        ],
      },
      properties: {
        nom: `Paris Saint-Lazare`,
        libellecourt: 'PSL',
        segment_drg: 'A',
        codeinsee: '75108',
        codes_uic: '87384008',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1744416,
          46.1986154,
        ],
      },
      properties: {
        nom: `Parsac - Gouzon`,
        libellecourt: 'PCG',
        segment_drg: 'C',
        codeinsee: '23149',
        codes_uic: '87597724',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.253822,
          43.409655,
        ],
      },
      properties: {
        nom: `Pas des Lanciers`,
        libellecourt: 'PDL',
        segment_drg: 'C',
        codeinsee: '13054',
        codes_uic: '87753285',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.369626,
          43.291762,
        ],
      },
      properties: {
        nom: `Pau`,
        libellecourt: 'PAU',
        segment_drg: 'A',
        codeinsee: '64445',
        codes_uic: '87672006',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.7551342,
          45.2038438,
        ],
      },
      properties: {
        nom: `Pauillac`,
        libellecourt: 'PAC',
        segment_drg: 'C',
        codeinsee: '33314',
        codes_uic: '87581256',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.5004445,
          45.2101978,
        ],
      },
      properties: {
        nom: `Paulhaguet`,
        libellecourt: 'PLH',
        segment_drg: 'C',
        codeinsee: '43232',
        codes_uic: '87734293',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.950644,
          49.563897,
        ],
      },
      properties: {
        nom: `Pavilly`,
        libellecourt: 'PSB',
        segment_drg: 'B',
        codeinsee: '76495',
        codes_uic: '87411272',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3800257,
          43.7920239,
        ],
      },
      properties: {
        nom: `Peille`,
        libellecourt: 'PEI',
        segment_drg: 'C',
        codeinsee: '06091',
        codes_uic: '87756791',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.366807,
          43.767846,
        ],
      },
      properties: {
        nom: `Peillon Sainte-Thècle`,
        libellecourt: 'PXT',
        segment_drg: 'C',
        codeinsee: '06092',
        codes_uic: '87756783',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2220476,
          49.073877,
        ],
      },
      properties: {
        nom: `Peltre`,
        libellecourt: 'PTE',
        segment_drg: 'C',
        codeinsee: '57534',
        codes_uic: '87192203',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.2008664,
          47.2907444,
        ],
      },
      properties: {
        nom: `Penhoët`,
        libellecourt: 'SZP',
        segment_drg: 'C',
        codeinsee: '44184',
        codes_uic: '87321745',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8029779,
          44.3799858,
        ],
      },
      properties: {
        nom: `Penne-d'Agenais`,
        libellecourt: 'PNE',
        segment_drg: 'C',
        codeinsee: '47203',
        codes_uic: '87586438',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.1330754,
          47.5580254,
        ],
      },
      properties: {
        nom: `Penthièvre`,
        libellecourt: 'PTW',
        segment_drg: 'C',
        codeinsee: '56234',
        codes_uic: '87476424',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2979465,
          48.8853581,
        ],
      },
      properties: {
        nom: `Péreire - Levallois`,
        libellecourt: 'PRR',
        segment_drg: 'B',
        codeinsee: '75117',
        codes_uic: '87381012',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.97729,
          50.66697,
        ],
      },
      properties: {
        nom: `Pérenchies`,
        libellecourt: 'PHI',
        segment_drg: 'C',
        codeinsee: '59457',
        codes_uic: '87286278',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.707879,
          45.187408,
        ],
      },
      properties: {
        nom: `Périgueux`,
        libellecourt: 'PXR',
        segment_drg: 'B',
        codeinsee: '24322',
        codes_uic: '87595009',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4310823,
          50.4802048,
        ],
      },
      properties: {
        nom: `Pernes - Camblain`,
        libellecourt: 'PEC',
        segment_drg: 'C',
        codeinsee: '62197',
        codes_uic: '87342550',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.97767,
          45.5848341,
        ],
      },
      properties: {
        nom: `Pérols-sur-Vézère`,
        libellecourt: 'POK',
        segment_drg: 'C',
        codeinsee: '19160',
        codes_uic: '87592170',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.879779,
          42.696292,
        ],
      },
      properties: {
        nom: `Perpignan`,
        libellecourt: 'PPN',
        segment_drg: 'A',
        codeinsee: '66136',
        codes_uic: '87784009',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.4249208,
          46.303259,
        ],
      },
      properties: {
        nom: `Perrignier`,
        libellecourt: 'PEG',
        segment_drg: 'C',
        codeinsee: '74210',
        codes_uic: '87745620',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2403887,
          44.887025,
        ],
      },
      properties: {
        nom: `Pers`,
        libellecourt: 'PEK',
        segment_drg: 'C',
        codeinsee: '15150',
        codes_uic: '87645176',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.27914,
          49.14795,
        ],
      },
      properties: {
        nom: `Persan - Beaumont`,
        libellecourt: 'PEB',
        segment_drg: 'B',
        codeinsee: '95487',
        codes_uic: '87276469',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.5037023,
          43.6845547,
        ],
      },
      properties: {
        nom: `Pertuis`,
        libellecourt: 'MEK',
        segment_drg: 'C',
        codeinsee: '84089',
        codes_uic: '87751362',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.63185,
          44.80461,
        ],
      },
      properties: {
        nom: `Pessac`,
        libellecourt: 'PSC',
        segment_drg: 'B',
        codeinsee: '33318',
        codes_uic: '87581751',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.65965,
          44.793355,
        ],
      },
      properties: {
        nom: `Pessac Alouette`,
        libellecourt: 'ATF',
        segment_drg: 'B',
        codeinsee: '33318',
        codes_uic: '87581793',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1470148,
          48.770943,
        ],
      },
      properties: {
        nom: `Petit Jouy - Les Loges`,
        libellecourt: 'PJZ',
        segment_drg: 'C',
        codeinsee: '78343',
        codes_uic: '87393504',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3339755,
          48.675859,
        ],
      },
      properties: {
        nom: `Petit Vaux`,
        libellecourt: 'PVY',
        segment_drg: 'B',
        codeinsee: '91216',
        codes_uic: '87393652',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9947414,
          47.6101045,
        ],
      },
      properties: {
        nom: `Petit-Croix`,
        libellecourt: 'PZC',
        segment_drg: 'C',
        codeinsee: '90071',
        codes_uic: '87184267',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.1157577,
          43.5468102,
        ],
      },
      properties: {
        nom: `Peyrehorade`,
        libellecourt: 'PRH',
        segment_drg: 'C',
        codeinsee: '40224',
        codes_uic: '87672337',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1699844,
          45.9596182,
        ],
      },
      properties: {
        nom: `Peyrilhac - Saint-Jouvent`,
        libellecourt: 'PYJ',
        segment_drg: 'C',
        codeinsee: '87118',
        codes_uic: '87592428',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1408714,
          47.8673364,
        ],
      },
      properties: {
        nom: `Pezou`,
        libellecourt: 'PEZ',
        segment_drg: 'C',
        codeinsee: '41175',
        codes_uic: '87574541',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0199,
          50.5154,
        ],
      },
      properties: {
        nom: `Phalempin`,
        libellecourt: 'PHA',
        segment_drg: 'B',
        codeinsee: '59462',
        codes_uic: '87286500',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.289237,
          43.621364,
        ],
      },
      properties: {
        nom: `Pibrac`,
        libellecourt: 'PBR',
        segment_drg: 'C',
        codeinsee: '31417',
        codes_uic: '87611830',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3927456,
          43.3309989,
        ],
      },
      properties: {
        nom: `Picon Busserine`,
        libellecourt: 'XPC',
        segment_drg: 'C',
        codeinsee: '13214',
        codes_uic: '87759290',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1432765,
          49.9461557,
        ],
      },
      properties: {
        nom: `Picquigny`,
        libellecourt: 'PIQ',
        segment_drg: 'C',
        codeinsee: '80622',
        codes_uic: '87313106',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8245059,
          45.7066772,
        ],
      },
      properties: {
        nom: `Pierre-Bénite`,
        libellecourt: 'PRB',
        segment_drg: 'C',
        codeinsee: '69152',
        codes_uic: '87722231',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3472667,
          45.6995226,
        ],
      },
      properties: {
        nom: `Pierre-Buffière`,
        libellecourt: 'PIB',
        segment_drg: 'C',
        codeinsee: '87119',
        codes_uic: '87592253',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.37213,
          48.96409,
        ],
      },
      properties: {
        nom: `Pierrefitte - Stains`,
        libellecourt: 'PRF',
        segment_drg: 'B',
        codeinsee: '93059',
        codes_uic: '87271163',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.703783,
          44.374719,
        ],
      },
      properties: {
        nom: `Pierrelatte`,
        libellecourt: 'PRL',
        segment_drg: 'B',
        codeinsee: '26235',
        codes_uic: '87764308',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.15371,
          49.01955,
        ],
      },
      properties: {
        nom: `Pierrelaye`,
        libellecourt: 'PRY',
        segment_drg: 'B',
        codeinsee: '95488',
        codes_uic: '87276097',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1241409,
          48.5488838,
        ],
      },
      properties: {
        nom: `Pierreville`,
        libellecourt: 'PVE',
        segment_drg: 'C',
        codeinsee: '54429',
        codes_uic: '87141556',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2248459,
          43.298475,
        ],
      },
      properties: {
        nom: `Pignans`,
        libellecourt: 'PIG',
        segment_drg: 'C',
        codeinsee: '83092',
        codes_uic: '87755389',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7845632,
          50.8727855,
        ],
      },
      properties: {
        nom: `Pihen-lès-Guînes`,
        libellecourt: 'PHV',
        segment_drg: 'C',
        codeinsee: '62657',
        codes_uic: '87316679',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.399645,
          43.479213,
        ],
      },
      properties: {
        nom: `Pins-Justaret`,
        libellecourt: 'PJT',
        segment_drg: 'B',
        codeinsee: '31421',
        codes_uic: '87618116',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9432973,
          48.8316509,
        ],
      },
      properties: {
        nom: `Plaisir - Grignon`,
        libellecourt: 'PGS',
        segment_drg: 'B',
        codeinsee: '78490',
        codes_uic: '87393421',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9600537,
          48.8304565,
        ],
      },
      properties: {
        nom: `Plaisir - Les Clayes`,
        libellecourt: 'PIE',
        segment_drg: 'B',
        codeinsee: '78490',
        codes_uic: '87393629',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.2289207,
          48.5216785,
        ],
      },
      properties: {
        nom: `Plancoët`,
        libellecourt: 'PLA',
        segment_drg: 'C',
        codeinsee: '22172',
        codes_uic: '87473272',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1369269,
          42.5009185,
        ],
      },
      properties: {
        nom: `Planès`,
        libellecourt: 'PNW',
        segment_drg: 'C',
        codeinsee: '66142',
        codes_uic: '87784785',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.7763615,
          47.8719509,
        ],
      },
      properties: {
        nom: `Pléchâtel`,
        libellecourt: 'PCT',
        segment_drg: 'C',
        codeinsee: '35221',
        codes_uic: '87471177',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.3546108,
          48.376656,
        ],
      },
      properties: {
        nom: `Plénée-Jugon`,
        libellecourt: 'PLJ',
        segment_drg: 'C',
        codeinsee: '22185',
        codes_uic: '87473082',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.8505895,
          48.5314637,
        ],
      },
      properties: {
        nom: `Plerguer`,
        libellecourt: 'PGE',
        segment_drg: 'C',
        codeinsee: '35224',
        codes_uic: '87478123',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.4424607,
          48.4256462,
        ],
      },
      properties: {
        nom: `Plestan`,
        libellecourt: 'PLE',
        segment_drg: 'C',
        codeinsee: '22193',
        codes_uic: '87473090',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.9617515,
          48.4993822,
        ],
      },
      properties: {
        nom: `Pleudihen-sur-Rance`,
        libellecourt: 'PUH',
        segment_drg: 'C',
        codeinsee: '22197',
        codes_uic: '87478149',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.8825543,
          48.5078255,
        ],
      },
      properties: {
        nom: `Pleyber-Christ`,
        libellecourt: 'PBC',
        segment_drg: 'C',
        codeinsee: '29163',
        codes_uic: '87474320',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.4668231,
          48.6062816,
        ],
      },
      properties: {
        nom: `Plouaret Trégor`,
        libellecourt: 'PLT',
        segment_drg: 'C',
        codeinsee: '22207',
        codes_uic: '87473181',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.3704584,
          48.4584133,
        ],
      },
      properties: {
        nom: `Plougonver`,
        libellecourt: 'PGO',
        segment_drg: 'C',
        codeinsee: '22216',
        codes_uic: '87473538',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.1184482,
          47.6042943,
        ],
      },
      properties: {
        nom: `Plouharnel - Carnac`,
        libellecourt: 'PLC',
        segment_drg: 'C',
        codeinsee: '56168',
        codes_uic: '87476416',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.7100572,
          48.5647064,
        ],
      },
      properties: {
        nom: `Plouigneau`,
        libellecourt: 'PGU',
        segment_drg: 'C',
        codeinsee: '29199',
        codes_uic: '87474411',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.5682311,
          48.5816298,
        ],
      },
      properties: {
        nom: `Plounérin`,
        libellecourt: 'PNR',
        segment_drg: 'C',
        codeinsee: '22227',
        codes_uic: '87473199',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.8925136,
          48.508585,
        ],
      },
      properties: {
        nom: `Plouvara - Plerneuf`,
        libellecourt: 'PPF',
        segment_drg: 'C',
        codeinsee: '22234',
        codes_uic: '87473132',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.3589057,
          44.6489664,
        ],
      },
      properties: {
        nom: `Podensac`,
        libellecourt: 'POD',
        segment_drg: 'C',
        codeinsee: '33327',
        codes_uic: '87582734',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.0658575,
          45.567067,
        ],
      },
      properties: {
        nom: `Pointe de Grave`,
        libellecourt: 'PDG',
        segment_drg: 'C',
        codeinsee: '33544',
        codes_uic: '87581397',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0413676,
          48.9329014,
        ],
      },
      properties: {
        nom: `Poissy`,
        libellecourt: 'PSY',
        segment_drg: 'B',
        codeinsee: '78498',
        codes_uic: '87386573',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.333241,
          46.582275,
        ],
      },
      properties: {
        nom: `Poitiers`,
        libellecourt: 'PST',
        segment_drg: 'A',
        codeinsee: '86194',
        codes_uic: '87575001',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9897767,
          49.7778561,
        ],
      },
      properties: {
        nom: `Poix-de-Picardie`,
        libellecourt: 'PDP',
        segment_drg: 'C',
        codeinsee: '80630',
        codes_uic: '87313395',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.6365346,
          49.6500011,
        ],
      },
      properties: {
        nom: `Poix-Terron`,
        libellecourt: 'PIX',
        segment_drg: 'C',
        codeinsee: '08341',
        codes_uic: '87172171',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.4735849,
          45.256006,
        ],
      },
      properties: {
        nom: `Poliénas`,
        libellecourt: 'POS',
        segment_drg: 'C',
        codeinsee: '38310',
        codes_uic: '87761742',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7001051,
          46.8443393,
        ],
      },
      properties: {
        nom: `Poligny`,
        libellecourt: 'PGN',
        segment_drg: 'C',
        codeinsee: '39434',
        codes_uic: '87718189',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1238268,
          46.24464,
        ],
      },
      properties: {
        nom: `Polliat`,
        libellecourt: 'PLF',
        segment_drg: 'C',
        codeinsee: '01301',
        codes_uic: '87725846',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2892273,
          43.1123875,
        ],
      },
      properties: {
        nom: `Pomas`,
        libellecourt: 'PMA',
        segment_drg: 'C',
        codeinsee: '11293',
        codes_uic: '87615146',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3871677,
          45.3952807,
        ],
      },
      properties: {
        nom: `Pompadour`,
        libellecourt: 'POM',
        segment_drg: 'C',
        codeinsee: '19011',
        codes_uic: '87594663',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.13061,
          48.77304,
        ],
      },
      properties: {
        nom: `Pompey`,
        libellecourt: 'PPE',
        segment_drg: 'C',
        codeinsee: '54430',
        codes_uic: '87141788',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5389124,
          45.5780767,
        ],
      },
      properties: {
        nom: `Pons`,
        libellecourt: 'PNP',
        segment_drg: 'C',
        codeinsee: '17283',
        codes_uic: '87491100',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.31425,
          48.88755,
        ],
      },
      properties: {
        nom: `Pont Cardinet`,
        libellecourt: 'PTC',
        segment_drg: 'B',
        codeinsee: '75117',
        codes_uic: '87381111',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9712144,
          50.8920781,
        ],
      },
      properties: {
        nom: `Pont d'Ardres`,
        libellecourt: 'PRD',
        segment_drg: 'C',
        codeinsee: '62038',
        codes_uic: '87281410',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.13026,
          50.62403,
        ],
      },
      properties: {
        nom: `Pont de Bois`,
        libellecourt: 'PPB',
        segment_drg: 'C',
        codeinsee: '59009',
        codes_uic: '87286831',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6268038,
          50.6828164,
        ],
      },
      properties: {
        nom: `Pont de Briques`,
        libellecourt: 'PRS',
        segment_drg: 'C',
        codeinsee: '62746',
        codes_uic: '87317115',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4903254,
          45.8427833,
        ],
      },
      properties: {
        nom: `Pont de Dore`,
        libellecourt: 'PDO',
        segment_drg: 'C',
        codeinsee: '63276',
        codes_uic: '87734459',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3010287,
          48.8625705,
        ],
      },
      properties: {
        nom: `Pont de l'Alma`,
        libellecourt: 'PDM',
        segment_drg: 'B',
        codeinsee: '75107',
        codes_uic: '87393041',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.08503,
          50.39813,
        ],
      },
      properties: {
        nom: `Pont de la Deûle`,
        libellecourt: 'PDD',
        segment_drg: 'C',
        codeinsee: '59234',
        codes_uic: '87345207',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.1372431,
          45.2597792,
        ],
      },
      properties: {
        nom: `Pont de Lignon`,
        libellecourt: 'PJL',
        segment_drg: 'C',
        codeinsee: '43025',
        codes_uic: '87726786',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.372792,
          48.748163,
        ],
      },
      properties: {
        nom: `Pont de Rungis Aéroport d'Orly`,
        libellecourt: 'PRU',
        segment_drg: 'B',
        codeinsee: '94073',
        codes_uic: '87546192',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8632044,
          50.4157922,
        ],
      },
      properties: {
        nom: `Pont de Sallaumines`,
        libellecourt: 'PSJ',
        segment_drg: 'C',
        codeinsee: '62771',
        codes_uic: '87345124',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2712276,
          48.839464,
        ],
      },
      properties: {
        nom: `Pont du Garigliano - Hôpital Européen Georges Pompidou`,
        libellecourt: 'BVI',
        segment_drg: 'B',
        codeinsee: '75115',
        codes_uic: '87393322',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.13046,
          49.06004,
        ],
      },
      properties: {
        nom: `Pont Petit`,
        libellecourt: 'PPT',
        segment_drg: 'B',
        codeinsee: '95572',
        codes_uic: '87276154',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.050842,
          48.90058,
        ],
      },
      properties: {
        nom: `Pont-à-Mousson`,
        libellecourt: 'PAM',
        segment_drg: 'B',
        codeinsee: '54431',
        codes_uic: '87141820',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8751938,
          50.4713812,
        ],
      },
      properties: {
        nom: `Pont-à-Vendin`,
        libellecourt: 'PAV',
        segment_drg: 'C',
        codeinsee: '62666',
        codes_uic: '87345264',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3343285,
          46.053961,
        ],
      },
      properties: {
        nom: `Pont-d'Ain`,
        libellecourt: 'PDA',
        segment_drg: 'C',
        codeinsee: '01304',
        codes_uic: '87743120',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -4.0861227,
          48.2544024,
        ],
      },
      properties: {
        nom: `Pont-de-Buis`,
        libellecourt: 'PBU',
        segment_drg: 'C',
        codeinsee: '29302',
        codes_uic: '87474056',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1596559,
          49.3170928,
        ],
      },
      properties: {
        nom: `Pont-de-l'Arche`,
        libellecourt: 'PAR',
        segment_drg: 'C',
        codeinsee: '27008',
        codes_uic: '87415661',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8930347,
          46.2679114,
        ],
      },
      properties: {
        nom: `Pont-de-Veyle`,
        libellecourt: 'PEL',
        segment_drg: 'C',
        codeinsee: '01134',
        codes_uic: '87725804',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.6758568,
          44.2328145,
        ],
      },
      properties: {
        nom: `Pont-du-Casse`,
        libellecourt: 'PUC',
        segment_drg: 'C',
        codeinsee: '47209',
        codes_uic: '87586404',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2377829,
          45.7885543,
        ],
      },
      properties: {
        nom: `Pont-du-Château`,
        libellecourt: 'PCV',
        segment_drg: 'C',
        codeinsee: '63284',
        codes_uic: '87734087',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1921947,
          49.2870379,
        ],
      },
      properties: {
        nom: `Pont-l'Évêque`,
        libellecourt: 'PVQ',
        segment_drg: 'C',
        codeinsee: '14514',
        codes_uic: '87444349',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.3114444,
          48.4702228,
        ],
      },
      properties: {
        nom: `Pont-Melvez`,
        libellecourt: 'PMZ',
        segment_drg: 'C',
        codeinsee: '22249',
        codes_uic: '87473520',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8988404,
          50.0472341,
        ],
      },
      properties: {
        nom: `Pont-Remy`,
        libellecourt: 'PRM',
        segment_drg: 'C',
        codeinsee: '80635',
        codes_uic: '87313130',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.643263286805847,
          44.25352683371548,
        ],
      },
      properties: {
        nom: `Pont-Saint-Esprit`,
        libellecourt: 'PET',
        segment_drg: 'C',
        codeinsee: '30202',
        codes_uic: '87764555',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1031502,
          48.6023732,
        ],
      },
      properties: {
        nom: `Pont-Saint-Vincent`,
        libellecourt: 'PSV',
        segment_drg: 'C',
        codeinsee: '54432',
        codes_uic: '87141523',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.60289,
          49.30974,
        ],
      },
      properties: {
        nom: `Pont-Sainte-Maxence`,
        libellecourt: 'PXE',
        segment_drg: 'B',
        codeinsee: '60509',
        codes_uic: '87276329',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.201463,
          48.286287,
        ],
      },
      properties: {
        nom: `Pont-sur-Yonne`,
        libellecourt: 'PUY',
        segment_drg: 'C',
        codeinsee: '89309',
        codes_uic: '87683136',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7728891,
          46.2130321,
        ],
      },
      properties: {
        nom: `Pontanevaux`,
        libellecourt: 'PNX',
        segment_drg: 'C',
        codeinsee: '71090',
        codes_uic: '87725721',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.353524,
          46.900944,
        ],
      },
      properties: {
        nom: `Pontarlier`,
        libellecourt: 'PTL',
        segment_drg: 'B',
        codeinsee: '25462',
        codes_uic: '87715003',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.69107,
          48.11918,
        ],
      },
      properties: {
        nom: `Pontchaillou`,
        libellecourt: 'PCI',
        segment_drg: 'B',
        codeinsee: '35238',
        codes_uic: '87471391',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.4927781,
          45.8714911,
        ],
      },
      properties: {
        nom: `Pontcharra - Saint-Forgeux`,
        libellecourt: 'PNF',
        segment_drg: 'C',
        codeinsee: '69157',
        codes_uic: '87721464',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.007917,
          45.434151,
        ],
      },
      properties: {
        nom: `Pontcharra sur Bréda`,
        libellecourt: 'PCA',
        segment_drg: 'B',
        codeinsee: '38314',
        codes_uic: '87747493',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.088201,
          47.435399,
        ],
      },
      properties: {
        nom: `Pontchâteau`,
        libellecourt: 'PCU',
        segment_drg: 'B',
        codeinsee: '44129',
        codes_uic: '87481846',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1414359,
          48.477867,
        ],
      },
      properties: {
        nom: `Pontgouin`,
        libellecourt: 'PNN',
        segment_drg: 'C',
        codeinsee: '28302',
        codes_uic: '87394247',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.54459,
          48.534933,
        ],
      },
      properties: {
        nom: `Ponthierry - Pringy`,
        libellecourt: 'POP',
        segment_drg: 'B',
        codeinsee: '77407',
        codes_uic: '87682526',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1601248,
          45.939486,
        ],
      },
      properties: {
        nom: `Pontmort`,
        libellecourt: 'PMT',
        segment_drg: 'C',
        codeinsee: '63068',
        codes_uic: '87734103',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.09545,
          49.04709,
        ],
      },
      properties: {
        nom: `Pontoise`,
        libellecourt: 'PSE',
        segment_drg: 'B',
        codeinsee: '95500',
        codes_uic: '87276139',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.5049307,
          48.5527286,
        ],
      },
      properties: {
        nom: `Pontorson - Mont-Saint-Michel`,
        libellecourt: 'PON',
        segment_drg: 'C',
        codeinsee: '50410',
        codes_uic: '87478263',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.1574281,
          48.7056437,
        ],
      },
      properties: {
        nom: `Pontrieux`,
        libellecourt: 'PUX',
        segment_drg: 'C',
        codeinsee: '22250',
        codes_uic: '87473843',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.1644959,
          48.6980361,
        ],
      },
      properties: {
        nom: `Pontrieux Halte`,
        libellecourt: 'PXH',
        segment_drg: 'C',
        codeinsee: '22250',
        codes_uic: '87473835',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1540156,
          48.7969381,
        ],
      },
      properties: {
        nom: `Porchefontaine`,
        libellecourt: 'POA',
        segment_drg: 'B',
        codeinsee: '78646',
        codes_uic: '87393165',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.0975565,
          47.1145616,
        ],
      },
      properties: {
        nom: `Pornic`,
        libellecourt: 'PNC',
        segment_drg: 'B',
        codeinsee: '44131',
        codes_uic: '87481283',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.3445765,
          47.2705354,
        ],
      },
      properties: {
        nom: `Pornichet`,
        libellecourt: 'PNI',
        segment_drg: 'B',
        codeinsee: '44132',
        codes_uic: '87481747',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.155648,
          47.248836,
        ],
      },
      properties: {
        nom: `Port Boulet`,
        libellecourt: 'PBT',
        segment_drg: 'B',
        codeinsee: '37074',
        codes_uic: '87571794',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.9740682,
          48.1106724,
        ],
      },
      properties: {
        nom: `Port-Brillet`,
        libellecourt: 'PTT',
        segment_drg: 'C',
        codeinsee: '53182',
        codes_uic: '87478750',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9846006,
          43.4071317,
        ],
      },
      properties: {
        nom: `Port-de-Bouc`,
        libellecourt: 'PDB',
        segment_drg: 'C',
        codeinsee: '13077',
        codes_uic: '87753459',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.5989179,
          47.0102599,
        ],
      },
      properties: {
        nom: `Port-de-Piles`,
        libellecourt: 'PPJ',
        segment_drg: 'C',
        codeinsee: '37045',
        codes_uic: '87575076',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0388188,
          43.0199342,
        ],
      },
      properties: {
        nom: `Port-la-Nouvelle`,
        libellecourt: 'PLN',
        segment_drg: 'C',
        codeinsee: '11266',
        codes_uic: '87781062',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.7393069,
          47.1164915,
        ],
      },
      properties: {
        nom: `Port-Saint-Père - Saint-Mars`,
        libellecourt: 'PXS',
        segment_drg: 'C',
        codeinsee: '44133',
        codes_uic: '87481218',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3905059,
          44.2504383,
        ],
      },
      properties: {
        nom: `Port-Sainte-Marie`,
        libellecourt: 'PSM',
        segment_drg: 'C',
        codeinsee: '47210',
        codes_uic: '87586107',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1025762,
          42.5136077,
        ],
      },
      properties: {
        nom: `Port-Vendres`,
        libellecourt: 'POV',
        segment_drg: 'C',
        codeinsee: '66148',
        codes_uic: '87784264',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.31462,
          48.89399,
        ],
      },
      properties: {
        nom: `Porte de Clichy`,
        libellecourt: 'PCL',
        segment_drg: 'B',
        codeinsee: '75117',
        codes_uic: '87111278',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8248462,
          42.539136,
        ],
      },
      properties: {
        nom: `Porté-Puymorens`,
        libellecourt: 'PPM',
        segment_drg: 'C',
        codeinsee: '66146',
        codes_uic: '87611509',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.389243,
          43.527904,
        ],
      },
      properties: {
        nom: `Portet Saint-Simon`,
        libellecourt: 'PSS',
        segment_drg: 'B',
        codeinsee: '31433',
        codes_uic: '87611400',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4253931,
          44.6929765,
        ],
      },
      properties: {
        nom: `Portets`,
        libellecourt: 'PRV',
        segment_drg: 'C',
        codeinsee: '33334',
        codes_uic: '87582718',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9613614,
          46.1446674,
        ],
      },
      properties: {
        nom: `Pougny - Chancy`,
        libellecourt: 'PJY',
        segment_drg: 'C',
        codeinsee: '01308',
        codes_uic: '87745380',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0940304,
          47.0767837,
        ],
      },
      properties: {
        nom: `Pougues-les-Eaux`,
        libellecourt: 'PSU',
        segment_drg: 'C',
        codeinsee: '58214',
        codes_uic: '87696211',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9660634,
          47.2821696,
        ],
      },
      properties: {
        nom: `Pouilly-sur-Loire`,
        libellecourt: 'PYL',
        segment_drg: 'C',
        codeinsee: '58215',
        codes_uic: '87696179',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.5810266,
          48.1039421,
        ],
      },
      properties: {
        nom: `Pouxeux`,
        libellecourt: 'PXX',
        segment_drg: 'C',
        codeinsee: '88358',
        codes_uic: '87144428',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.8146784,
          46.7523536,
        ],
      },
      properties: {
        nom: `Pouzauges`,
        libellecourt: 'PZK',
        segment_drg: 'C',
        codeinsee: '85140',
        codes_uic: '87487314',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4294184,
          42.6170988,
        ],
      },
      properties: {
        nom: `Prades - Molitg-les-Bains`,
        libellecourt: 'PDS',
        segment_drg: 'C',
        codeinsee: '66149',
        codes_uic: '87784637',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3764638,
          49.2033492,
        ],
      },
      properties: {
        nom: `Précy-sur-Oise`,
        libellecourt: 'PYO',
        segment_drg: 'C',
        codeinsee: '60513',
        codes_uic: '87276410',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.3022296,
          44.5783064,
        ],
      },
      properties: {
        nom: `Preignac`,
        libellecourt: 'PRG',
        segment_drg: 'C',
        codeinsee: '33337',
        codes_uic: '87582767',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.28759,
          49.11346,
        ],
      },
      properties: {
        nom: `Presles Courcelles`,
        libellecourt: 'PRQ',
        segment_drg: 'B',
        codeinsee: '95504',
        codes_uic: '87276501',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6365007,
          46.2190177,
        ],
      },
      properties: {
        nom: `Prin-Deyrançon`,
        libellecourt: 'PND',
        segment_drg: 'C',
        codeinsee: '79220',
        codes_uic: '87485268',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1232736,
          45.9395239,
        ],
      },
      properties: {
        nom: `Pringy`,
        libellecourt: 'PGY',
        segment_drg: 'C',
        codeinsee: '74010',
        codes_uic: '87746206',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4936249,
          46.15277,
        ],
      },
      properties: {
        nom: `Prissé-la-Charrière`,
        libellecourt: 'PIH',
        segment_drg: 'C',
        codeinsee: '79078',
        codes_uic: '87485359',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4610838,
          50.3167933,
        ],
      },
      properties: {
        nom: `Prouvy - Thiant`,
        libellecourt: 'PRT',
        segment_drg: 'C',
        codeinsee: '59475',
        codes_uic: '87343418',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0854904,
          48.3046291,
        ],
      },
      properties: {
        nom: `Provenchères-sur-Fave`,
        libellecourt: 'PVF',
        segment_drg: 'C',
        codeinsee: '88361',
        codes_uic: '87144345',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.302822,
          48.55577,
        ],
      },
      properties: {
        nom: `Provins`,
        libellecourt: 'PRO',
        segment_drg: 'B',
        codeinsee: '77379',
        codes_uic: '87116160',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.18364,
          49.1988,
        ],
      },
      properties: {
        nom: `Prunay`,
        libellecourt: 'PWH',
        segment_drg: 'C',
        codeinsee: '51449',
        codes_uic: '87171629',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6722045,
          47.313174,
        ],
      },
      properties: {
        nom: `Pruniers-en-Sologne`,
        libellecourt: 'PUZ',
        segment_drg: 'C',
        codeinsee: '41097',
        codes_uic: '87576199',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1384483,
          43.283085,
        ],
      },
      properties: {
        nom: `Puget-Ville`,
        libellecourt: 'PVI',
        segment_drg: 'C',
        codeinsee: '83100',
        codes_uic: '87755363',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1374765,
          48.5360716,
        ],
      },
      properties: {
        nom: `Pulligny - Autrey`,
        libellecourt: 'PUI',
        segment_drg: 'C',
        codeinsee: '54032',
        codes_uic: '87141564',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2335,
          48.88351,
        ],
      },
      properties: {
        nom: `Puteaux`,
        libellecourt: 'PTX',
        segment_drg: 'B',
        codeinsee: '92062',
        codes_uic: '87382382',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7841548,
          44.9216335,
        ],
      },
      properties: {
        nom: `Puybrun`,
        libellecourt: 'PBN',
        segment_drg: 'C',
        codeinsee: '46229',
        codes_uic: '87594754',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.9108149,
          43.5245425,
        ],
      },
      properties: {
        nom: `Puyoô`,
        libellecourt: 'PUO',
        segment_drg: 'C',
        codeinsee: '64461',
        codes_uic: '87672279',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.1452204,
          48.2484804,
        ],
      },
      properties: {
        nom: `Quédillac`,
        libellecourt: 'QDC',
        segment_drg: 'C',
        codeinsee: '35234',
        codes_uic: '87473058',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9952832,
          50.7081361,
        ],
      },
      properties: {
        nom: `Quesnoy-sur-Deûle`,
        libellecourt: 'QUS',
        segment_drg: 'C',
        codeinsee: '59482',
        codes_uic: '87286245',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.4496002,
          47.6831803,
        ],
      },
      properties: {
        nom: `Questembert`,
        libellecourt: 'QUE',
        segment_drg: 'B',
        codeinsee: '56184',
        codes_uic: '87476671',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.1181869,
          47.4852978,
        ],
      },
      properties: {
        nom: `Quiberon`,
        libellecourt: 'QBP',
        segment_drg: 'C',
        codeinsee: '56186',
        codes_uic: '87476457',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1815581,
          42.8739607,
        ],
      },
      properties: {
        nom: `Quillan`,
        libellecourt: 'QLN',
        segment_drg: 'C',
        codeinsee: '11304',
        codes_uic: '87615260',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -4.092103,
          47.994455,
        ],
      },
      properties: {
        nom: `Quimper`,
        libellecourt: 'QPR',
        segment_drg: 'A',
        codeinsee: '29232',
        codes_uic: '87474098',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.552693,
          47.869375,
        ],
      },
      properties: {
        nom: `Quimperlé`,
        libellecourt: 'QPL',
        segment_drg: 'B',
        codeinsee: '29233',
        codes_uic: '87476317',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7785643,
          45.9068815,
        ],
      },
      properties: {
        nom: `Quincieux`,
        libellecourt: 'QUX',
        segment_drg: 'C',
        codeinsee: '69207',
        codes_uic: '87721290',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.730567,
          43.819751,
        ],
      },
      properties: {
        nom: `Rabastens - Coufouleux`,
        libellecourt: 'RAB',
        segment_drg: 'B',
        codeinsee: '81070',
        codes_uic: '87615328',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2840467,
          47.8869059,
        ],
      },
      properties: {
        nom: `Raedersheim`,
        libellecourt: 'RHM',
        segment_drg: 'C',
        codeinsee: '68260',
        codes_uic: '87182717',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4788322,
          50.3902495,
        ],
      },
      properties: {
        nom: `Raismes`,
        libellecourt: 'RAS',
        segment_drg: 'C',
        codeinsee: '59491',
        codes_uic: '87343319',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.83154,
          48.64377,
        ],
      },
      properties: {
        nom: `Rambouillet`,
        libellecourt: 'RBT',
        segment_drg: 'B',
        codeinsee: '78517',
        codes_uic: '87393314',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7246607,
          47.1525633,
        ],
      },
      properties: {
        nom: `Ranchot`,
        libellecourt: 'RNH',
        segment_drg: 'C',
        codeinsee: '39451',
        codes_uic: '87718338',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.64805,
          50.41579,
        ],
      },
      properties: {
        nom: `Rang-du-Fliers - Verton - Berck`,
        libellecourt: 'RDF',
        segment_drg: 'B',
        codeinsee: '62688',
        codes_uic: '87317057',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9693134,
          43.5691636,
        ],
      },
      properties: {
        nom: `Ranguin`,
        libellecourt: 'RGN',
        segment_drg: 'C',
        codeinsee: '06085',
        codes_uic: '87757732',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.01266,
          47.88157,
        ],
      },
      properties: {
        nom: `Ranspach`,
        libellecourt: 'RCH',
        segment_drg: 'C',
        codeinsee: '68262',
        codes_uic: '87182402',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.837302,
          48.404002,
        ],
      },
      properties: {
        nom: `Raon-l'Étape`,
        libellecourt: 'RAO',
        segment_drg: 'C',
        codeinsee: '88372',
        codes_uic: '87144626',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9731266,
          43.4966716,
        ],
      },
      properties: {
        nom: `Rassuen`,
        libellecourt: 'RAU',
        segment_drg: 'C',
        codeinsee: '13047',
        codes_uic: '87753426',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.5992849,
          45.1659287,
        ],
      },
      properties: {
        nom: `Razac-sur-l'Isle`,
        libellecourt: 'RZA',
        segment_drg: 'C',
        codeinsee: '24350',
        codes_uic: '87595223',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.5346895,
          45.3688217,
        ],
      },
      properties: {
        nom: `Réaumont - Saint-Cassien`,
        libellecourt: 'RCS',
        segment_drg: 'B',
        codeinsee: '38331',
        codes_uic: '87747279',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0445029,
          50.2840466,
        ],
      },
      properties: {
        nom: `Recquignies`,
        libellecourt: 'RCQ',
        segment_drg: 'C',
        codeinsee: '59495',
        codes_uic: '87295022',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.095885,
          48.7429595,
        ],
      },
      properties: {
        nom: `Réding`,
        libellecourt: 'RDG',
        segment_drg: 'C',
        codeinsee: '57566',
        codes_uic: '87215079',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.08777,
          47.652004,
        ],
      },
      properties: {
        nom: `Redon`,
        libellecourt: 'RDN',
        segment_drg: 'B',
        codeinsee: '35236',
        codes_uic: '87471300',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2150753,
          45.987705,
        ],
      },
      properties: {
        nom: `Régny`,
        libellecourt: 'RGY',
        segment_drg: 'C',
        codeinsee: '42181',
        codes_uic: '87721050',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.658132,
          48.9310582,
        ],
      },
      properties: {
        nom: `Reichshoffen`,
        libellecourt: 'RHV',
        segment_drg: 'B',
        codeinsee: '67388',
        codes_uic: '87213249',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9013322,
          47.2178494,
        ],
      },
      properties: {
        nom: `Reignac-sur-Indre`,
        libellecourt: 'RGA',
        segment_drg: 'C',
        codeinsee: '37192',
        codes_uic: '87571455',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2675466,
          46.1256159,
        ],
      },
      properties: {
        nom: `Reignier-Ésery`,
        libellecourt: 'REI',
        segment_drg: 'C',
        codeinsee: '74220',
        codes_uic: '87746511',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.024435,
          49.258978,
        ],
      },
      properties: {
        nom: `Reims`,
        libellecourt: 'RMS',
        segment_drg: 'A',
        codeinsee: '51454',
        codes_uic: '87171009',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0224927,
          49.2336853,
        ],
      },
      properties: {
        nom: `Reims Maison Blanche`,
        libellecourt: 'RSN',
        segment_drg: 'C',
        codeinsee: '51454',
        codes_uic: '87171272',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0915336,
          49.091627,
        ],
      },
      properties: {
        nom: `Rémelfing`,
        libellecourt: 'RFG',
        segment_drg: 'C',
        codeinsee: '57631',
        codes_uic: '87193623',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3950968,
          49.0140249,
        ],
      },
      properties: {
        nom: `Rémilly`,
        libellecourt: 'RMI',
        segment_drg: 'B',
        codeinsee: '57572',
        codes_uic: '87192237',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.598855,
          48.016363,
        ],
      },
      properties: {
        nom: `Remiremont`,
        libellecourt: 'RMT',
        segment_drg: 'B',
        codeinsee: '88383',
        codes_uic: '87144451',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.487751,
          48.89317,
        ],
      },
      properties: {
        nom: `Remise à Jorelle`,
        libellecourt: 'RJL',
        segment_drg: 'B',
        codeinsee: '93010',
        codes_uic: '87988709',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7059434,
          49.4331452,
        ],
      },
      properties: {
        nom: `Remy`,
        libellecourt: 'REY',
        segment_drg: 'C',
        codeinsee: '60531',
        codes_uic: '87313403',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3713644,
          50.732006,
        ],
      },
      properties: {
        nom: `Renescure`,
        libellecourt: 'RSC',
        segment_drg: 'C',
        codeinsee: '59497',
        codes_uic: '87281451',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.672744,
          48.103517,
        ],
      },
      properties: {
        nom: `Rennes`,
        libellecourt: 'RES',
        segment_drg: 'A',
        codeinsee: '35238',
        codes_uic: '87471003',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.369566,
          49.504393,
        ],
      },
      properties: {
        nom: `Rethel`,
        libellecourt: 'RTL',
        segment_drg: 'B',
        codeinsee: '08362',
        codes_uic: '87172270',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3898439,
          47.9132599,
        ],
      },
      properties: {
        nom: `Retiers`,
        libellecourt: 'RTI',
        segment_drg: 'C',
        codeinsee: '35239',
        codes_uic: '87471359',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0361169,
          45.2013468,
        ],
      },
      properties: {
        nom: `Retournac`,
        libellecourt: 'RET',
        segment_drg: 'C',
        codeinsee: '43162',
        codes_uic: '87734749',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0474783,
          47.0853677,
        ],
      },
      properties: {
        nom: `Reuilly`,
        libellecourt: 'REL',
        segment_drg: 'C',
        codeinsee: '36171',
        codes_uic: '87597039',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9855736,
          48.8240449,
        ],
      },
      properties: {
        nom: `Revigny-sur-Ornain`,
        libellecourt: 'REV',
        segment_drg: 'C',
        codeinsee: '55427',
        codes_uic: '87175018',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.642536,
          49.938756,
        ],
      },
      properties: {
        nom: `Revin`,
        libellecourt: 'RVI',
        segment_drg: 'B',
        codeinsee: '08363',
        codes_uic: '87172080',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.5495445,
          47.1932425,
        ],
      },
      properties: {
        nom: `Rezé Pont Rousseau`,
        libellecourt: 'RPT',
        segment_drg: 'B',
        codeinsee: '44143',
        codes_uic: '87481036',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3907488,
          42.6034078,
        ],
      },
      properties: {
        nom: `Ria-Sirach`,
        libellecourt: 'RAJ',
        segment_drg: 'C',
        codeinsee: '66161',
        codes_uic: '87784660',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.92714,
          49.50633,
        ],
      },
      properties: {
        nom: `Ribécourt-Dreslincourt`,
        libellecourt: 'RIB',
        segment_drg: 'B',
        codeinsee: '60537',
        codes_uic: '87276766',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.962988,
          48.991063,
        ],
      },
      properties: {
        nom: `Riedseltz`,
        libellecourt: 'RTZ',
        segment_drg: 'C',
        codeinsee: '67400',
        codes_uic: '87213462',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5214,
          49.29866,
        ],
      },
      properties: {
        nom: `Rieux - Angicourt`,
        libellecourt: 'RIA',
        segment_drg: 'B',
        codeinsee: '60539',
        codes_uic: '87276352',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0408608,
          49.1664524,
        ],
      },
      properties: {
        nom: `Rilly-la-Montagne`,
        libellecourt: 'RAG',
        segment_drg: 'C',
        codeinsee: '51461',
        codes_uic: '87171595',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.120498,
          45.889965,
        ],
      },
      properties: {
        nom: `Riom - Châtel-Guyon`,
        libellecourt: 'RIO',
        segment_drg: 'B',
        codeinsee: '63300',
        codes_uic: '87734053',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.41442,
          48.659442,
        ],
      },
      properties: {
        nom: `Ris-Orangis`,
        libellecourt: 'RIS',
        segment_drg: 'B',
        codeinsee: '91521',
        codes_uic: '87681338',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3618999,
          47.2677425,
        ],
      },
      properties: {
        nom: `Rivarennes`,
        libellecourt: 'RVQ',
        segment_drg: 'C',
        codeinsee: '37200',
        codes_uic: '87571653',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.606648,
          45.524324,
        ],
      },
      properties: {
        nom: `Rive-de-Gier`,
        libellecourt: 'RGR',
        segment_drg: 'B',
        codeinsee: '42186',
        codes_uic: '87726331',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.491893,
          45.357535,
        ],
      },
      properties: {
        nom: `Rives`,
        libellecourt: 'RIV',
        segment_drg: 'B',
        codeinsee: '38337',
        codes_uic: '87747246',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.86789,
          42.7664405,
        ],
      },
      properties: {
        nom: `Rivesaltes`,
        libellecourt: 'RVT',
        segment_drg: 'C',
        codeinsee: '66164',
        codes_uic: '87784173',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.406404,
          47.74896,
        ],
      },
      properties: {
        nom: `Rixheim`,
        libellecourt: 'RHE',
        segment_drg: 'B',
        codeinsee: '68278',
        codes_uic: '87182071',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.063207,
          46.039383,
        ],
      },
      properties: {
        nom: `Roanne`,
        libellecourt: 'ROA',
        segment_drg: 'B',
        codeinsee: '42187',
        codes_uic: '87726802',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6573487,
          44.8183562,
        ],
      },
      properties: {
        nom: `Rocamadour - Padirac`,
        libellecourt: 'RAP',
        segment_drg: 'C',
        codeinsee: '46240',
        codes_uic: '87613042',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1109651,
          47.2762881,
        ],
      },
      properties: {
        nom: `Roche-lez-Beaupré`,
        libellecourt: 'RBE',
        segment_drg: 'C',
        codeinsee: '25495',
        codes_uic: '87718403',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.963556,
          45.947189,
        ],
      },
      properties: {
        nom: `Rochefort`,
        libellecourt: 'RCT',
        segment_drg: 'B',
        codeinsee: '17299',
        codes_uic: '87485144',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1727344,
          49.3986042,
        ],
      },
      properties: {
        nom: `Rochy-Condé`,
        libellecourt: 'RCY',
        segment_drg: 'C',
        codeinsee: '60542',
        codes_uic: '87313601',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.58056,
          44.362633,
        ],
      },
      properties: {
        nom: `Rodez`,
        libellecourt: 'RDZ',
        segment_drg: 'B',
        codeinsee: '12202',
        codes_uic: '87613422',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          8.0298738,
          48.8334661,
        ],
      },
      properties: {
        nom: `Roeschwoog`,
        libellecourt: 'RWG',
        segment_drg: 'C',
        codeinsee: '67405',
        codes_uic: '87212407',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8950172,
          50.3034404,
        ],
      },
      properties: {
        nom: `Rœux`,
        libellecourt: 'RUX',
        segment_drg: 'C',
        codeinsee: '62718',
        codes_uic: '87342089',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.230666,
          43.4866,
        ],
      },
      properties: {
        nom: `Rognac`,
        libellecourt: 'RGC',
        segment_drg: 'B',
        codeinsee: '13081',
        codes_uic: '87753251',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.650165,
          48.795481,
        ],
      },
      properties: {
        nom: `Roissy-en-Brie`,
        libellecourt: 'ROB',
        segment_drg: 'B',
        codeinsee: '77390',
        codes_uic: '87116038',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2157828,
          49.5820461,
        ],
      },
      properties: {
        nom: `Rolleville`,
        libellecourt: 'ROL',
        segment_drg: 'C',
        codeinsee: '76534',
        codes_uic: '87413740',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7421014,
          46.1763913,
        ],
      },
      properties: {
        nom: `Romanèche-Thorins`,
        libellecourt: 'RHR',
        segment_drg: 'C',
        codeinsee: '71372',
        codes_uic: '87725739',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.0498,
          45.048857,
        ],
      },
      properties: {
        nom: `Romans - Bourg-de-Péage`,
        libellecourt: 'ROM',
        segment_drg: 'B',
        codeinsee: '26281',
        codes_uic: '87761650',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0990538,
          49.2560553,
        ],
      },
      properties: {
        nom: `Rombas - Clouange`,
        libellecourt: 'RBS',
        segment_drg: 'C',
        codeinsee: '57591',
        codes_uic: '87191734',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8548621,
          49.0039213,
        ],
      },
      properties: {
        nom: `Romilly-la-Puthenaye`,
        libellecourt: 'RYP',
        segment_drg: 'C',
        codeinsee: '27492',
        codes_uic: '87387175',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.728887,
          48.514433,
        ],
      },
      properties: {
        nom: `Romilly-sur-Seine`,
        libellecourt: 'RMY',
        segment_drg: 'B',
        codeinsee: '10323',
        codes_uic: '87118158',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7390137,
          47.3554468,
        ],
      },
      properties: {
        nom: `Romorantin-Lanthenay`,
        libellecourt: 'RMA',
        segment_drg: 'B',
        codeinsee: '41194',
        codes_uic: '87576025',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.6232791,
          47.6990308,
        ],
      },
      properties: {
        nom: `Ronchamp`,
        libellecourt: 'RCP',
        segment_drg: 'C',
        codeinsee: '70451',
        codes_uic: '87185314',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0783734,
          50.6045664,
        ],
      },
      properties: {
        nom: `Ronchin`,
        libellecourt: 'ROC',
        segment_drg: 'C',
        codeinsee: '59507',
        codes_uic: '87286534',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          8.0623108,
          48.8510962,
        ],
      },
      properties: {
        nom: `Roppenheim`,
        libellecourt: 'RHI',
        segment_drg: 'C',
        codeinsee: '67025',
        codes_uic: '87212415',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.457343,
          43.7606178,
        ],
      },
      properties: {
        nom: `Roquebrune-Cap-Martin`,
        libellecourt: 'CQR',
        segment_drg: 'C',
        codeinsee: '06104',
        codes_uic: '87756460',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6198753,
          43.7512472,
        ],
      },
      properties: {
        nom: `Roquesérière - Buzet`,
        libellecourt: 'RQE',
        segment_drg: 'C',
        codeinsee: '31094',
        codes_uic: '87615351',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.37397,
          48.89602,
        ],
      },
      properties: {
        nom: `Rosa Parks`,
        libellecourt: 'ROK',
        segment_drg: 'B',
        codeinsee: '75118',
        codes_uic: '87654798',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.49093,
          48.50525,
        ],
      },
      properties: {
        nom: `Rosheim`,
        libellecourt: 'ROH',
        segment_drg: 'B',
        codeinsee: '67411',
        codes_uic: '87214320',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.350457,
          48.60563,
        ],
      },
      properties: {
        nom: `Rosières-aux-Salines`,
        libellecourt: 'ROI',
        segment_drg: 'B',
        codeinsee: '54159',
        codes_uic: '87141127',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.71141,
          49.82253,
        ],
      },
      properties: {
        nom: `Rosières-en-Santerre`,
        libellecourt: 'ROS',
        segment_drg: 'C',
        codeinsee: '80680',
        codes_uic: '87313460',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.480987,
          48.882568,
        ],
      },
      properties: {
        nom: `Rosny Bois Perrier`,
        libellecourt: 'RBI',
        segment_drg: 'B',
        codeinsee: '93064',
        codes_uic: '87113696',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.48559,
          48.87099,
        ],
      },
      properties: {
        nom: `Rosny-sous-Bois`,
        libellecourt: 'RSB',
        segment_drg: 'B',
        codeinsee: '93064',
        codes_uic: '87113704',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.63009,
          48.997287,
        ],
      },
      properties: {
        nom: `Rosny-sur-Seine`,
        libellecourt: 'RSS',
        segment_drg: 'B',
        codeinsee: '78531',
        codes_uic: '87415885',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.832763,
          47.960273,
        ],
      },
      properties: {
        nom: `Rosporden`,
        libellecourt: 'RSP',
        segment_drg: 'B',
        codeinsee: '29241',
        codes_uic: '87474155',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3490115,
          50.4563667,
        ],
      },
      properties: {
        nom: `Rosult`,
        libellecourt: 'ROT',
        segment_drg: 'C',
        codeinsee: '59511',
        codes_uic: '87286567',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2074902,
          48.4590026,
        ],
      },
      properties: {
        nom: `Rothau`,
        libellecourt: 'RTH',
        segment_drg: 'B',
        codeinsee: '67414',
        codes_uic: '87214726',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.16348,
          50.69561,
        ],
      },
      properties: {
        nom: `Roubaix`,
        libellecourt: 'RXB',
        segment_drg: 'B',
        codeinsee: '59512',
        codes_uic: '87286732',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.094087,
          49.448764,
        ],
      },
      properties: {
        nom: `Rouen Rive Droite`,
        libellecourt: 'RRD',
        segment_drg: 'A',
        codeinsee: '76540',
        codes_uic: '87411017',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.312455,
          47.9602481,
        ],
      },
      properties: {
        nom: `Rouffach`,
        libellecourt: 'RAH',
        segment_drg: 'B',
        codeinsee: '68287',
        codes_uic: '87182337',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.51502,
          48.930895,
        ],
      },
      properties: {
        nom: `Rougemont Chanteloup`,
        libellecourt: 'ROU',
        segment_drg: 'B',
        codeinsee: '93071',
        codes_uic: '87431791',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.042169,
          46.4190206,
        ],
      },
      properties: {
        nom: `Rouillé`,
        libellecourt: 'RIL',
        segment_drg: 'C',
        codeinsee: '86213',
        codes_uic: '87485532',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          8.0119078,
          48.820435,
        ],
      },
      properties: {
        nom: `Rountzenheim`,
        libellecourt: 'RZH',
        segment_drg: 'C',
        codeinsee: '67014',
        codes_uic: '87212373',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.439154,
          43.6354791,
        ],
      },
      properties: {
        nom: `Route de Launaguet`,
        libellecourt: 'RLA',
        segment_drg: 'C',
        codeinsee: '31555',
        codes_uic: '87611954',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.016703,
          45.625886,
        ],
      },
      properties: {
        nom: `Royan`,
        libellecourt: 'ROY',
        segment_drg: 'B',
        codeinsee: '17306',
        codes_uic: '87491803',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0615022,
          45.7676495,
        ],
      },
      properties: {
        nom: `Royat - Chamalières`,
        libellecourt: 'RYA',
        segment_drg: 'C',
        codeinsee: '63075',
        codes_uic: '87734038',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7054886,
          48.1208921,
        ],
      },
      properties: {
        nom: `Rozières-sur-Mouzon`,
        libellecourt: 'RSM',
        segment_drg: 'C',
        codeinsee: '88404',
        codes_uic: '87144311',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6757,
          50.27308,
        ],
      },
      properties: {
        nom: `Rue`,
        libellecourt: 'RUE',
        segment_drg: 'B',
        codeinsee: '80688',
        codes_uic: '87317404',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1902055,
          46.0305185,
        ],
      },
      properties: {
        nom: `Ruffec`,
        libellecourt: 'RUG',
        segment_drg: 'C',
        codeinsee: '16292',
        codes_uic: '87583849',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.079358,
          47.370587,
        ],
      },
      properties: {
        nom: `Ruffey-lès-Echirey`,
        libellecourt: 'RFY',
        segment_drg: 'C',
        codeinsee: '21535',
        codes_uic: '87713826',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.761033,
          46.8804303,
        ],
      },
      properties: {
        nom: `Rully`,
        libellecourt: 'RLY',
        segment_drg: 'C',
        codeinsee: '71378',
        codes_uic: '87712026',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.947938,
          45.862989,
        ],
      },
      properties: {
        nom: `Rumilly`,
        libellecourt: 'RUM',
        segment_drg: 'B',
        codeinsee: '74225',
        codes_uic: '87746149',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1576706,
          50.8620636,
        ],
      },
      properties: {
        nom: `Ruminghem`,
        libellecourt: 'RGM',
        segment_drg: 'C',
        codeinsee: '62730',
        codes_uic: '87287300',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.35298,
          48.74032,
        ],
      },
      properties: {
        nom: `Rungis La Fraternelle`,
        libellecourt: 'RFL',
        segment_drg: 'B',
        codeinsee: '94065',
        codes_uic: '87546291',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2519246,
          48.4982211,
        ],
      },
      properties: {
        nom: `Russ Hersbach`,
        libellecourt: 'RHH',
        segment_drg: 'C',
        codeinsee: '67543',
        codes_uic: '87214684',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1103726,
          48.3471556,
        ],
      },
      properties: {
        nom: `Saales`,
        libellecourt: 'SAA',
        segment_drg: 'C',
        codeinsee: '67421',
        codes_uic: '87214783',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.3419359,
          47.8415934,
        ],
      },
      properties: {
        nom: `Sablé-sur-Sarthe`,
        libellecourt: 'SAB',
        segment_drg: 'B',
        codeinsee: '72264',
        codes_uic: '87396408',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0321126,
          42.4568855,
        ],
      },
      properties: {
        nom: `Saillagouse`,
        libellecourt: 'SGW',
        segment_drg: 'C',
        codeinsee: '66167',
        codes_uic: '87784835',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1940397,
          44.6944365,
        ],
      },
      properties: {
        nom: `Saillans`,
        libellecourt: 'SIA',
        segment_drg: 'C',
        codeinsee: '26289',
        codes_uic: '87761817',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8117415,
          45.8696297,
        ],
      },
      properties: {
        nom: `Saillat - Chassenon`,
        libellecourt: 'XDO',
        segment_drg: 'C',
        codeinsee: '87131',
        codes_uic: '87592717',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.6012445,
          45.811097,
        ],
      },
      properties: {
        nom: `Sain-Bel`,
        libellecourt: 'SBL',
        segment_drg: 'B',
        codeinsee: '69171',
        codes_uic: '87721605',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0718704,
          46.9314165,
        ],
      },
      properties: {
        nom: `Saincaize-Meauce`,
        libellecourt: 'SZE',
        segment_drg: 'C',
        codeinsee: '58225',
        codes_uic: '87696260',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0016955,
          50.0889485,
        ],
      },
      properties: {
        nom: `Sains-du-Nord`,
        libellecourt: 'SAW',
        segment_drg: 'C',
        codeinsee: '59525',
        codes_uic: '87295709',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.8788002,
          46.5020038,
        ],
      },
      properties: {
        nom: `Saint-Agnan`,
        libellecourt: 'XAN',
        segment_drg: 'C',
        codeinsee: '71382',
        codes_uic: '87694851',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.450209,
          43.579674,
        ],
      },
      properties: {
        nom: `Saint-Agne`,
        libellecourt: 'XAE',
        segment_drg: 'B',
        codeinsee: '31555',
        codes_uic: '87611301',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3838369,
          47.2869126,
        ],
      },
      properties: {
        nom: `Saint-Aignan - Noyers`,
        libellecourt: 'SAN',
        segment_drg: 'C',
        codeinsee: '41164',
        codes_uic: '87574897',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.0189768,
          45.1573163,
        ],
      },
      properties: {
        nom: `Saint-Aigulin - La Roche-Chalais`,
        libellecourt: 'SAI',
        segment_drg: 'C',
        codeinsee: '17309',
        codes_uic: '87584540',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.41952,
          50.44331,
        ],
      },
      properties: {
        nom: `Saint-Amand-les-Eaux`,
        libellecourt: 'SAM',
        segment_drg: 'B',
        codeinsee: '59526',
        codes_uic: '87343103',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0119896,
          47.693141,
        ],
      },
      properties: {
        nom: `Saint-Amand-Longpré`,
        libellecourt: 'SDV',
        segment_drg: 'C',
        codeinsee: '41199',
        codes_uic: '87574640',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4859441,
          46.7265409,
        ],
      },
      properties: {
        nom: `Saint-Amand-Montrond - Orval`,
        libellecourt: 'SAD',
        segment_drg: 'C',
        codeinsee: '18172',
        codes_uic: '87576322',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0287447,
          47.8728596,
        ],
      },
      properties: {
        nom: `Saint-Amarin`,
        libellecourt: 'XAR',
        segment_drg: 'C',
        codeinsee: '68292',
        codes_uic: '87182600',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3341853,
          46.4338244,
        ],
      },
      properties: {
        nom: `Saint-Amour`,
        libellecourt: 'SAR',
        segment_drg: 'C',
        codeinsee: '39475',
        codes_uic: '87718296',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.948846,
          45.925911,
        ],
      },
      properties: {
        nom: `Saint-André-de-Corcy`,
        libellecourt: 'SAY',
        segment_drg: 'B',
        codeinsee: '01333',
        codes_uic: '87723734',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.440479,
          44.991255,
        ],
      },
      properties: {
        nom: `Saint-André-de-Cubzac`,
        libellecourt: 'SAC',
        segment_drg: 'B',
        codeinsee: '33366',
        codes_uic: '87491241',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.524187,
          45.544518,
        ],
      },
      properties: {
        nom: `Saint-André-le-Gaz`,
        libellecourt: 'SAG',
        segment_drg: 'B',
        codeinsee: '38357',
        codes_uic: '87723494',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0475916,
          50.6544842,
        ],
      },
      properties: {
        nom: `Saint-André-lez-Lille`,
        libellecourt: 'STA',
        segment_drg: 'C',
        codeinsee: '59527',
        codes_uic: '87286195',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3578102,
          43.3695993,
        ],
      },
      properties: {
        nom: `Saint-Antoine`,
        libellecourt: 'SNT',
        segment_drg: 'C',
        codeinsee: '13215',
        codes_uic: '87751826',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.15196,
          44.8466877,
        ],
      },
      properties: {
        nom: `Saint-Antoine-de-Breuilh`,
        libellecourt: 'XAB',
        segment_drg: 'C',
        codeinsee: '24335',
        codes_uic: '87584201',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.6164676,
          47.503839,
        ],
      },
      properties: {
        nom: `Saint-Antoine-du-Rocher`,
        libellecourt: 'XAO',
        segment_drg: 'C',
        codeinsee: '37206',
        codes_uic: '87571539',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.5948867,
          48.014405,
        ],
      },
      properties: {
        nom: `Saint-Armel`,
        libellecourt: 'XAL',
        segment_drg: 'C',
        codeinsee: '35250',
        codes_uic: '87471318',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.522808,
          45.139027,
        ],
      },
      properties: {
        nom: `Saint-Astier`,
        libellecourt: 'STK',
        segment_drg: 'B',
        codeinsee: '24372',
        codes_uic: '87595249',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3318387,
          48.4476422,
        ],
      },
      properties: {
        nom: `Saint-Aubin - Saint-Luperce`,
        libellecourt: 'SBP',
        segment_drg: 'C',
        codeinsee: '28325',
        codes_uic: '87394213',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0666642,
          49.8717479,
        ],
      },
      properties: {
        nom: `Saint-Aubin-sur-Scie`,
        libellecourt: 'SBE',
        segment_drg: 'C',
        codeinsee: '76565',
        codes_uic: '87415125',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3986965,
          45.2488414,
        ],
      },
      properties: {
        nom: `Saint-Aulaire`,
        libellecourt: 'XUL',
        segment_drg: 'C',
        codeinsee: '19182',
        codes_uic: '87594622',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9628994,
          43.6354383,
        ],
      },
      properties: {
        nom: `Saint-Aunès`,
        libellecourt: 'XAU',
        segment_drg: 'C',
        codeinsee: '34240',
        codes_uic: '87773465',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.7206141,
          49.085873,
        ],
      },
      properties: {
        nom: `Saint-Avold`,
        libellecourt: 'SVD',
        segment_drg: 'B',
        codeinsee: '57690',
        codes_uic: '87193318',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3028277,
          45.3530978,
        ],
      },
      properties: {
        nom: `Saint-Avre - La Chambre`,
        libellecourt: 'SVB',
        segment_drg: 'C',
        codeinsee: '73224',
        codes_uic: '87741306',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7499597,
          47.863133,
        ],
      },
      properties: {
        nom: `Saint-Ay`,
        libellecourt: 'LBZ',
        segment_drg: 'C',
        codeinsee: '45269',
        codes_uic: '87574129',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7319345,
          45.5038935,
        ],
      },
      properties: {
        nom: `Saint-Béron - La Bridoire`,
        libellecourt: 'SBR',
        segment_drg: 'C',
        codeinsee: '73226',
        codes_uic: '87741454',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.165329,
          48.4076094,
        ],
      },
      properties: {
        nom: `Saint-Blaise-la-Roche Poutay`,
        libellecourt: 'SZR',
        segment_drg: 'C',
        codeinsee: '67424',
        codes_uic: '87214742',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1393877,
          46.1483796,
        ],
      },
      properties: {
        nom: `Saint-Bonnet-de-Rochefort`,
        libellecourt: 'SBD',
        segment_drg: 'C',
        codeinsee: '03220',
        codes_uic: '87641076',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9523481,
          45.8781476,
        ],
      },
      properties: {
        nom: `Saint-Brice-sur-Vienne`,
        libellecourt: 'XBV',
        segment_drg: 'C',
        codeinsee: '87140',
        codes_uic: '87592691',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.765,
          48.50758,
        ],
      },
      properties: {
        nom: `Saint-Brieuc`,
        libellecourt: 'SBC',
        segment_drg: 'A',
        codeinsee: '22278',
        codes_uic: '87473009',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3276399,
          43.8133863,
        ],
      },
      properties: {
        nom: `Saint-Césaire`,
        libellecourt: 'SCS',
        segment_drg: 'C',
        codeinsee: '30189',
        codes_uic: '87775072',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.0402963,
          43.5511577,
        ],
      },
      properties: {
        nom: `Saint-Chamas`,
        libellecourt: 'SHY',
        segment_drg: 'C',
        codeinsee: '13092',
        codes_uic: '87753202',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.51695,
          45.47257,
        ],
      },
      properties: {
        nom: `Saint-Chamond`,
        libellecourt: 'SCM',
        segment_drg: 'B',
        codeinsee: '42207',
        codes_uic: '87726307',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2706895,
          44.8017375,
        ],
      },
      properties: {
        nom: `Saint-Chély-d'Apcher`,
        libellecourt: 'SYH',
        segment_drg: 'C',
        codeinsee: '48140',
        codes_uic: '87783241',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.125597,
          48.551188,
        ],
      },
      properties: {
        nom: `Saint-Chéron`,
        libellecourt: 'SCW',
        segment_drg: 'B',
        codeinsee: '91540',
        codes_uic: '87545509',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4077585,
          44.464619,
        ],
      },
      properties: {
        nom: `Saint-Christophe-Vallon`,
        libellecourt: 'SIH',
        segment_drg: 'C',
        codeinsee: '12215',
        codes_uic: '87613257',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.769707,
          45.450392,
        ],
      },
      properties: {
        nom: `Saint-Clair - Les Roches`,
        libellecourt: 'SKR',
        segment_drg: 'B',
        codeinsee: '38378',
        codes_uic: '87722652',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.8603471,
          46.3899539,
        ],
      },
      properties: {
        nom: `Saint-Claude`,
        libellecourt: 'SCL',
        segment_drg: 'C',
        codeinsee: '39478',
        codes_uic: '87743633',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.6081108,
          48.5312283,
        ],
      },
      properties: {
        nom: `Saint-Clément - Laronxe`,
        libellecourt: 'SCX',
        segment_drg: 'C',
        codeinsee: '54472',
        codes_uic: '87141374',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.21687,
          48.84541,
        ],
      },
      properties: {
        nom: `Saint-Cloud`,
        libellecourt: 'SCD',
        segment_drg: 'B',
        codeinsee: '92064',
        codes_uic: '87382358',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0434666,
          44.8632733,
        ],
      },
      properties: {
        nom: `Saint-Cyprien`,
        libellecourt: 'SCQ',
        segment_drg: 'C',
        codeinsee: '24396',
        codes_uic: '87595777',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.417986,
          43.593438,
        ],
      },
      properties: {
        nom: `Saint-Cyprien Arènes`,
        libellecourt: 'TEW',
        segment_drg: 'B',
        codeinsee: '31555',
        codes_uic: '87446179',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.703858,
          43.185509,
        ],
      },
      properties: {
        nom: `Saint-Cyr Les Lecques - La Cadière`,
        libellecourt: 'SAQ',
        segment_drg: 'B',
        codeinsee: '83112',
        codes_uic: '87755215',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9476045,
          47.8192,
        ],
      },
      properties: {
        nom: `Saint-Cyr-en-Val La Source`,
        libellecourt: 'SCV',
        segment_drg: 'C',
        codeinsee: '45272',
        codes_uic: '87543116',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0733739,
          48.7990666,
        ],
      },
      properties: {
        nom: `Saint-Cyr-l'École`,
        libellecourt: 'SCR',
        segment_drg: 'B',
        codeinsee: '78545',
        codes_uic: '87393223',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.5834505,
          44.05582,
        ],
      },
      properties: {
        nom: `Saint-Dalmas de Tende`,
        libellecourt: 'SDD',
        segment_drg: 'C',
        codeinsee: '06162',
        codes_uic: '87756866',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3459524,
          48.9354933,
        ],
      },
      properties: {
        nom: `Saint-Denis`,
        libellecourt: 'SDE',
        segment_drg: 'B',
        codeinsee: '93066',
        codes_uic: '87271015',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.1980825,
          44.9786053,
        ],
      },
      properties: {
        nom: `Saint-Denis-de-Pile`,
        libellecourt: 'XDS',
        segment_drg: 'C',
        codeinsee: '33393',
        codes_uic: '87584508',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5514368,
          45.7889106,
        ],
      },
      properties: {
        nom: `Saint-Denis-des-Murs`,
        libellecourt: 'XDN',
        segment_drg: 'C',
        codeinsee: '87142',
        codes_uic: '87592097',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6663378,
          44.9459316,
        ],
      },
      properties: {
        nom: `Saint-Denis-lès-Martel`,
        libellecourt: 'SDM',
        segment_drg: 'C',
        codeinsee: '46265',
        codes_uic: '87594572',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.948656,
          48.282225,
        ],
      },
      properties: {
        nom: `Saint-Dié-des-Vosges`,
        libellecourt: 'STD',
        segment_drg: 'B',
        codeinsee: '88413',
        codes_uic: '87144014',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.947855,
          48.642404,
        ],
      },
      properties: {
        nom: `Saint-Dizier`,
        libellecourt: 'SDZ',
        segment_drg: 'B',
        codeinsee: '52448',
        codes_uic: '87175000',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.6712687,
          45.2357234,
        ],
      },
      properties: {
        nom: `Saint-Égrève Saint-Robert`,
        libellecourt: 'SEG',
        segment_drg: 'C',
        codeinsee: '38382',
        codes_uic: '87747352',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.1592003,
          44.8811665,
        ],
      },
      properties: {
        nom: `Saint-Émilion`,
        libellecourt: 'SEI',
        segment_drg: 'C',
        codeinsee: '33394',
        codes_uic: '87584102',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.8576502,
          49.5269865,
        ],
      },
      properties: {
        nom: `Saint-Erme-Outre-et-Ramecourt`,
        libellecourt: 'SER',
        segment_drg: 'C',
        codeinsee: '02676',
        codes_uic: '87171751',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.392734,
          45.417128,
        ],
      },
      properties: {
        nom: `Saint-Étienne Bellevue`,
        libellecourt: 'SEB',
        segment_drg: 'C',
        codeinsee: '42218',
        codes_uic: '87726190',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.385317,
          45.446976,
        ],
      },
      properties: {
        nom: `Saint-Étienne Carnot`,
        libellecourt: 'SEO',
        segment_drg: 'C',
        codeinsee: '42218',
        codes_uic: '87726901',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.399722,
          45.443366,
        ],
      },
      properties: {
        nom: `Saint-Étienne Châteaucreux`,
        libellecourt: 'SEN',
        segment_drg: 'B',
        codeinsee: '42218',
        codes_uic: '87726000',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.379601,
          45.464843,
        ],
      },
      properties: {
        nom: `Saint-Étienne La Terrasse`,
        libellecourt: 'SET',
        segment_drg: 'C',
        codeinsee: '42218',
        codes_uic: '87726158',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3782267,
          45.4371122,
        ],
      },
      properties: {
        nom: `Saint-Étienne Le Clapier`,
        libellecourt: 'SEC',
        segment_drg: 'C',
        codeinsee: '42218',
        codes_uic: '87726174',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.7857107,
          47.2747167,
        ],
      },
      properties: {
        nom: `Saint-Étienne-de-Montluc`,
        libellecourt: 'SDQ',
        segment_drg: 'C',
        codeinsee: '44158',
        codes_uic: '87481812',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1095673,
          49.3771553,
        ],
      },
      properties: {
        nom: `Saint-Étienne-du-Rouvray`,
        libellecourt: 'SDR',
        segment_drg: 'C',
        codeinsee: '76575',
        codes_uic: '87411215',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.542493,
          48.564549,
        ],
      },
      properties: {
        nom: `Saint-Fargeau-Ponthierry`,
        libellecourt: 'XFA',
        segment_drg: 'C',
        codeinsee: '77407',
        codes_uic: '87682542',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7378217,
          42.6772874,
        ],
      },
      properties: {
        nom: `Saint-Féliu-d'Avall`,
        libellecourt: 'FDL',
        segment_drg: 'C',
        codeinsee: '66174',
        codes_uic: '87784520',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2525668,
          46.9921865,
        ],
      },
      properties: {
        nom: `Saint-Florent-sur-Cher`,
        libellecourt: 'SFT',
        segment_drg: 'C',
        codeinsee: '18207',
        codes_uic: '87576272',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.731036,
          47.981058,
        ],
      },
      properties: {
        nom: `Saint-Florentin - Vergigny`,
        libellecourt: 'SIF',
        segment_drg: 'C',
        codeinsee: '89439',
        codes_uic: '87683318',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1062862,
          45.0350122,
        ],
      },
      properties: {
        nom: `Saint-Flour - Chaudes-Aigues`,
        libellecourt: 'SFC',
        segment_drg: 'C',
        codeinsee: '15187',
        codes_uic: '87783175',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8525663,
          45.7058114,
        ],
      },
      properties: {
        nom: `Saint-Fons`,
        libellecourt: 'SFS',
        segment_drg: 'C',
        codeinsee: '69199',
        codes_uic: '87728501',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.729104,
          43.105034,
        ],
      },
      properties: {
        nom: `Saint-Gaudens`,
        libellecourt: 'SGD',
        segment_drg: 'B',
        codeinsee: '31483',
        codes_uic: '87611137',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2149416,
          43.9501684,
        ],
      },
      properties: {
        nom: `Saint-Geniès-de-Malgoirès`,
        libellecourt: 'XGE',
        segment_drg: 'C',
        codeinsee: '30255',
        codes_uic: '87775361',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.5969502,
          47.3710109,
        ],
      },
      properties: {
        nom: `Saint-Genouph`,
        libellecourt: 'SCO',
        segment_drg: 'C',
        codeinsee: '37219',
        codes_uic: '87571851',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4947035,
          45.1605341,
        ],
      },
      properties: {
        nom: `Saint-Georges-d'Aurac`,
        libellecourt: 'SGA',
        segment_drg: 'C',
        codeinsee: '43132',
        codes_uic: '87734301',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7017874,
          45.0437667,
        ],
      },
      properties: {
        nom: `Saint-Georges-de-Commiers`,
        libellecourt: 'SGC',
        segment_drg: 'C',
        codeinsee: '38388',
        codes_uic: '87747568',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.983784,
          44.066553,
        ],
      },
      properties: {
        nom: `Saint-Georges-de-Luzençon`,
        libellecourt: 'SDU',
        segment_drg: 'C',
        codeinsee: '12225',
        codes_uic: '87783423',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7188908,
          46.0621952,
        ],
      },
      properties: {
        nom: `Saint-Georges-de-Reneins`,
        libellecourt: 'SDI',
        segment_drg: 'C',
        codeinsee: '69206',
        codes_uic: '87721340',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.2412599,
          43.6713719,
        ],
      },
      properties: {
        nom: `Saint-Geours-de-Maremne`,
        libellecourt: 'SGQ',
        segment_drg: 'C',
        codeinsee: '40261',
        codes_uic: '87673269',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.804265,
          45.888352,
        ],
      },
      properties: {
        nom: `Saint-Germain-au-Mont-d'Or`,
        libellecourt: 'SGO',
        segment_drg: 'B',
        codeinsee: '69207',
        codes_uic: '87721282',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.430614,
          46.209185,
        ],
      },
      properties: {
        nom: `Saint-Germain-des-Fossés`,
        libellecourt: 'SGF',
        segment_drg: 'B',
        codeinsee: '03236',
        codes_uic: '87732206',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4846102,
          47.0965233,
        ],
      },
      properties: {
        nom: `Saint-Germain-du-Puy`,
        libellecourt: 'SGP',
        segment_drg: 'C',
        codeinsee: '18213',
        codes_uic: '87576405',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0705,
          48.89494,
        ],
      },
      properties: {
        nom: `Saint-Germain-en-Laye Bel-Air - Fourqueux`,
        libellecourt: 'EBL',
        segment_drg: 'B',
        codeinsee: '78551',
        codes_uic: '87366922',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4800397,
          45.6098703,
        ],
      },
      properties: {
        nom: `Saint-Germain-les-Belles`,
        libellecourt: 'SGN',
        segment_drg: 'C',
        codeinsee: '87146',
        codes_uic: '87592287',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.6541804,
          48.2394802,
        ],
      },
      properties: {
        nom: `Saint-Germain-sur-Ille`,
        libellecourt: 'SMW',
        segment_drg: 'C',
        codeinsee: '35274',
        codes_uic: '87478016',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.701331,
          45.906423,
        ],
      },
      properties: {
        nom: `Saint-Gervais-les-Bains Le Fayet`,
        libellecourt: 'SGB',
        segment_drg: 'B',
        codeinsee: '74236',
        codes_uic: '87746479',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.0438923,
          47.516614,
        ],
      },
      properties: {
        nom: `Saint-Gildas-des-Bois`,
        libellecourt: 'SOK',
        segment_drg: 'C',
        codeinsee: '44161',
        codes_uic: '87476762',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2609746,
          48.0758611,
        ],
      },
      properties: {
        nom: `Saint-Gilles Lycée Haut-Rhin`,
        libellecourt: 'GLL',
        segment_drg: 'C',
        codeinsee: '68374',
        codes_uic: '87181552',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.941296,
          46.696466,
        ],
      },
      properties: {
        nom: `Saint-Gilles-Croix-de-Vie`,
        libellecourt: 'SGV',
        segment_drg: 'C',
        codeinsee: '85222',
        codes_uic: '87486571',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.28531,
          48.96403,
        ],
      },
      properties: {
        nom: `Saint-Gratien`,
        libellecourt: 'SGT',
        segment_drg: 'B',
        codeinsee: '95555',
        codes_uic: '87276170',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5347155,
          45.85007,
        ],
      },
      properties: {
        nom: `Saint-Hilaire - Brizambourg`,
        libellecourt: 'SBZ',
        segment_drg: 'C',
        codeinsee: '17344',
        codes_uic: '87491324',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.243851,
          45.0713405,
        ],
      },
      properties: {
        nom: `Saint-Hilaire - Saint-Nazaire`,
        libellecourt: 'SHN',
        segment_drg: 'C',
        codeinsee: '38394',
        codes_uic: '87761684',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.8650604,
          47.1057704,
        ],
      },
      properties: {
        nom: `Saint-Hilaire-de-Chaléons`,
        libellecourt: 'ILA',
        segment_drg: 'C',
        codeinsee: '44164',
        codes_uic: '87481234',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.9496838,
          46.7166736,
        ],
      },
      properties: {
        nom: `Saint-Hilaire-de-Riez`,
        libellecourt: 'SHZ',
        segment_drg: 'C',
        codeinsee: '85226',
        codes_uic: '87486563',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9140099,
          50.1319709,
        ],
      },
      properties: {
        nom: `Saint-Hilaire-sur-Helpe`,
        libellecourt: 'XHI',
        segment_drg: 'C',
        codeinsee: '59534',
        codes_uic: '87297531',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.7142367,
          48.0670983,
        ],
      },
      properties: {
        nom: `Saint-Jacques-de-la-Lande`,
        libellecourt: 'SJJ',
        segment_drg: 'C',
        codeinsee: '35281',
        codes_uic: '87471052',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5097829,
          45.9407739,
        ],
      },
      properties: {
        nom: `Saint-Jean-d'Angély`,
        libellecourt: 'SJA',
        segment_drg: 'C',
        codeinsee: '17347',
        codes_uic: '87491357',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.2441226,
          47.0997302,
        ],
      },
      properties: {
        nom: `Saint-Jean-de-Losne`,
        libellecourt: 'SJL',
        segment_drg: 'C',
        codeinsee: '21577',
        codes_uic: '87713651',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.66122,
          43.385838,
        ],
      },
      properties: {
        nom: `Saint-Jean-de-Luz - Ciboure`,
        libellecourt: 'SJZ',
        segment_drg: 'B',
        codeinsee: '64483',
        codes_uic: '87677120',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.354716,
          45.277542,
        ],
      },
      properties: {
        nom: `Saint-Jean-de-Maurienne Arvan`,
        libellecourt: 'SJM',
        segment_drg: 'B',
        codeinsee: '73248',
        codes_uic: '87742320',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.608059,
          43.0128587,
        ],
      },
      properties: {
        nom: `Saint-Jean-de-Verges`,
        libellecourt: 'JNV',
        segment_drg: 'C',
        codeinsee: '09103',
        codes_uic: '87611624',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.2380129,
          43.1679394,
        ],
      },
      properties: {
        nom: `Saint-Jean-Pied-de-Port`,
        libellecourt: 'SJP',
        segment_drg: 'C',
        codeinsee: '64485',
        codes_uic: '87673723',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.125231,
          45.8857125,
        ],
      },
      properties: {
        nom: `Saint-Jodard`,
        libellecourt: 'SNJ',
        segment_drg: 'C',
        codeinsee: '42241',
        codes_uic: '87726851',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.371619,
          43.738375,
        ],
      },
      properties: {
        nom: `Saint-Jory`,
        libellecourt: 'SJY',
        segment_drg: 'B',
        codeinsee: '31490',
        codes_uic: '87611657',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3770681,
          43.3518976,
        ],
      },
      properties: {
        nom: `Saint-Joseph le Castellas`,
        libellecourt: 'XJC',
        segment_drg: 'C',
        codeinsee: '13215',
        codes_uic: '87759316',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1281864,
          47.4060132,
        ],
      },
      properties: {
        nom: `Saint-Julien - Clénay`,
        libellecourt: 'SJQ',
        segment_drg: 'C',
        codeinsee: '21555',
        codes_uic: '87713834',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.302688,
          48.0269195,
        ],
      },
      properties: {
        nom: `Saint-Julien-du-Sault`,
        libellecourt: 'SJX',
        segment_drg: 'C',
        codeinsee: '89348',
        codes_uic: '87683227',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0855358,
          46.142044,
        ],
      },
      properties: {
        nom: `Saint-Julien-en-Genevois`,
        libellecourt: 'SJG',
        segment_drg: 'B',
        codeinsee: '74243',
        codes_uic: '87745430',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9004849,
          45.8813844,
        ],
      },
      properties: {
        nom: `Saint-Junien`,
        libellecourt: 'SJU',
        segment_drg: 'C',
        codeinsee: '87154',
        codes_uic: '87592709',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.42949,
          49.50364,
        ],
      },
      properties: {
        nom: `Saint-Just-en-Chaussée`,
        libellecourt: 'SJS',
        segment_drg: 'B',
        codeinsee: '60581',
        codes_uic: '87313270',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2522963,
          49.5285649,
        ],
      },
      properties: {
        nom: `Saint-Laurent - Gainneville`,
        libellecourt: 'XLG',
        segment_drg: 'C',
        codeinsee: '76596',
        codes_uic: '87413310',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.1930703,
          43.6392883,
        ],
      },
      properties: {
        nom: `Saint-Laurent-d'Aigouze`,
        libellecourt: 'XLZ',
        segment_drg: 'C',
        codeinsee: '30276',
        codes_uic: '87775841',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.0274305,
          45.9930002,
        ],
      },
      properties: {
        nom: `Saint-Laurent-de-la-Prée - Fouras`,
        libellecourt: 'SSC',
        segment_drg: 'C',
        codeinsee: '17353',
        codes_uic: '87485136',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.194413,
          43.662451,
        ],
      },
      properties: {
        nom: `Saint-Laurent-du-Var`,
        libellecourt: 'SNV',
        segment_drg: 'B',
        codeinsee: '06123',
        codes_uic: '87756346',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9512119,
          46.5747975,
        ],
      },
      properties: {
        nom: `Saint-Laurent-en-Grandvaux`,
        libellecourt: 'SLJ',
        segment_drg: 'C',
        codeinsee: '39487',
        codes_uic: '87715417',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.6286039,
          46.8484526,
        ],
      },
      properties: {
        nom: `Saint-Léger-sur-Dheune`,
        libellecourt: 'SLH',
        segment_drg: 'C',
        codeinsee: '71442',
        codes_uic: '87694364',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.4923106,
          45.1233004,
        ],
      },
      properties: {
        nom: `Saint-Léon-sur-l'Isle`,
        libellecourt: 'XLI',
        segment_drg: 'C',
        codeinsee: '24442',
        codes_uic: '87595264',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.481686,
          45.8320199,
        ],
      },
      properties: {
        nom: `Saint-Léonard-de-Noblat`,
        libellecourt: 'SLE',
        segment_drg: 'C',
        codeinsee: '87161',
        codes_uic: '87592071',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4177845,
          49.2140819,
        ],
      },
      properties: {
        nom: `Saint-Leu-d'Esserent`,
        libellecourt: 'SLT',
        segment_drg: 'C',
        codeinsee: '60584',
        codes_uic: '87276402',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.24264,
          49.01571,
        ],
      },
      properties: {
        nom: `Saint-Leu-la-Forêt`,
        libellecourt: 'SLF',
        segment_drg: 'B',
        codeinsee: '95563',
        codes_uic: '87276600',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.099525,
          49.116975,
        ],
      },
      properties: {
        nom: `Saint-Lô`,
        libellecourt: 'SLO',
        segment_drg: 'B',
        codeinsee: '50502',
        codes_uic: '87447003',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.6439849,
          46.8231806,
        ],
      },
      properties: {
        nom: `Saint-Lothain`,
        libellecourt: 'XLN',
        segment_drg: 'C',
        codeinsee: '39489',
        codes_uic: '87718197',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4333056,
          44.9224009,
        ],
      },
      properties: {
        nom: `Saint-Loubès`,
        libellecourt: 'SIT',
        segment_drg: 'C',
        codeinsee: '33433',
        codes_uic: '87584730',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.5559882,
          47.5906094,
        ],
      },
      properties: {
        nom: `Saint-Louis`,
        libellecourt: 'STL',
        segment_drg: 'B',
        codeinsee: '68297',
        codes_uic: '87182139',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.5312095,
          47.6094781,
        ],
      },
      properties: {
        nom: `Saint-Louis La Chaussée`,
        libellecourt: 'SLU',
        segment_drg: 'C',
        codeinsee: '68297',
        codes_uic: '87181016',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.2270601,
          44.5686216,
        ],
      },
      properties: {
        nom: `Saint-Macaire`,
        libellecourt: 'SNW',
        segment_drg: 'C',
        codeinsee: '33435',
        codes_uic: '87582825',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.201073,
          46.406607,
        ],
      },
      properties: {
        nom: `Saint-Maixent-L'École`,
        libellecourt: 'SMX',
        segment_drg: 'B',
        codeinsee: '79270',
        codes_uic: '87485490',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.004158,
          48.646859,
        ],
      },
      properties: {
        nom: `Saint-Malo`,
        libellecourt: 'SMP',
        segment_drg: 'A',
        codeinsee: '35288',
        codes_uic: '87478107',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.81593,
          48.382171,
        ],
      },
      properties: {
        nom: `Saint-Mammès`,
        libellecourt: 'SFI',
        segment_drg: 'B',
        codeinsee: '77419',
        codes_uic: '87682294',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.4671155,
          43.28818,
        ],
      },
      properties: {
        nom: `Saint-Marcel`,
        libellecourt: 'SMA',
        segment_drg: 'C',
        codeinsee: '13211',
        codes_uic: '87751701',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9775148,
          45.9503701,
        ],
      },
      properties: {
        nom: `Saint-Marcel en Dombes`,
        libellecourt: 'STM',
        segment_drg: 'C',
        codeinsee: '01371',
        codes_uic: '87723742',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.323649,
          45.150898,
        ],
      },
      properties: {
        nom: `Saint-Marcellin`,
        libellecourt: 'SCI',
        segment_drg: 'B',
        codeinsee: '38416',
        codes_uic: '87761718',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.3917824,
          45.139072,
        ],
      },
      properties: {
        nom: `Saint-Mariens - Saint-Yzan`,
        libellecourt: 'SMS',
        segment_drg: 'B',
        codeinsee: '33492',
        codes_uic: '87491209',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3656778,
          48.0285239,
        ],
      },
      properties: {
        nom: `Saint-Mars-la-Brière`,
        libellecourt: 'SRL',
        segment_drg: 'C',
        codeinsee: '72300',
        codes_uic: '87396283',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.145401,
          48.42747,
        ],
      },
      properties: {
        nom: `Saint-Martin d'Étampes`,
        libellecourt: 'SME',
        segment_drg: 'B',
        codeinsee: '91223',
        codes_uic: '87545350',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3718548,
          43.5997881,
        ],
      },
      properties: {
        nom: `Saint-Martin du Touch`,
        libellecourt: 'SMT',
        segment_drg: 'C',
        codeinsee: '31555',
        codes_uic: '87353599',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6516933,
          43.9301115,
        ],
      },
      properties: {
        nom: `Saint-Martin-d'Oney`,
        libellecourt: 'XMN',
        segment_drg: 'C',
        codeinsee: '40274',
        codes_uic: '87671495',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8003403,
          43.6223344,
        ],
      },
      properties: {
        nom: `Saint-Martin-de-Crau`,
        libellecourt: 'SMD',
        segment_drg: 'C',
        codeinsee: '13097',
        codes_uic: '87753681',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.303003,
          46.095871,
        ],
      },
      properties: {
        nom: `Saint-Martin-du-Mont`,
        libellecourt: 'XMM',
        segment_drg: 'C',
        codeinsee: '01374',
        codes_uic: '87743112',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9058418,
          47.3552058,
        ],
      },
      properties: {
        nom: `Saint-Martin-le-Beau`,
        libellecourt: 'XMK',
        segment_drg: 'C',
        codeinsee: '37225',
        codes_uic: '87574459',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.934859,
          43.1385721,
        ],
      },
      properties: {
        nom: `Saint-Martory`,
        libellecourt: 'SYM',
        segment_drg: 'C',
        codeinsee: '31503',
        codes_uic: '87611103',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.3182267,
          47.4122473,
        ],
      },
      properties: {
        nom: `Saint-Mathurin-sur-Loire`,
        libellecourt: 'SNZ',
        segment_drg: 'C',
        codeinsee: '49307',
        codes_uic: '87487892',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.976986,
          45.827421,
        ],
      },
      properties: {
        nom: `Saint-Maurice-de-Beynost`,
        libellecourt: 'SMY',
        segment_drg: 'B',
        codeinsee: '01376',
        codes_uic: '87723536',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5057172,
          44.7168571,
        ],
      },
      properties: {
        nom: `Saint-Médard-d'Eyrans`,
        libellecourt: 'SYS',
        segment_drg: 'C',
        codeinsee: '33448',
        codes_uic: '87582692',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.0488253,
          45.0155723,
        ],
      },
      properties: {
        nom: `Saint-Médard-de-Guizières`,
        libellecourt: 'SMZ',
        segment_drg: 'C',
        codeinsee: '33447',
        codes_uic: '87584607',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.6674886,
          48.2742219,
        ],
      },
      properties: {
        nom: `Saint-Médard-sur-Ille`,
        libellecourt: 'XED',
        segment_drg: 'C',
        codeinsee: '35296',
        codes_uic: '87478024',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.4719135,
          45.216916,
        ],
      },
      properties: {
        nom: `Saint-Michel - Valloire`,
        libellecourt: 'SMI',
        segment_drg: 'C',
        codeinsee: '73261',
        codes_uic: '87742361',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.34545,
          48.85348,
        ],
      },
      properties: {
        nom: `Saint-Michel Notre-Dame`,
        libellecourt: 'SHL',
        segment_drg: 'B',
        codeinsee: '75105',
        codes_uic: '87547315',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8882777,
          48.3269843,
        ],
      },
      properties: {
        nom: `Saint-Michel-sur-Meurthe`,
        libellecourt: 'SSM',
        segment_drg: 'C',
        codeinsee: '88428',
        codes_uic: '87144683',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.306632,
          48.635479,
        ],
      },
      properties: {
        nom: `Saint-Michel-sur-Orge`,
        libellecourt: 'SHO',
        segment_drg: 'B',
        codeinsee: '91570',
        codes_uic: '87545202',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.5818945,
          48.0461722,
        ],
      },
      properties: {
        nom: `Saint-Nabord`,
        libellecourt: 'XNB',
        segment_drg: 'C',
        codeinsee: '88429',
        codes_uic: '87146217',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.211096,
          47.286412,
        ],
      },
      properties: {
        nom: `Saint-Nazaire`,
        libellecourt: 'SNA',
        segment_drg: 'B',
        codeinsee: '44184',
        codes_uic: '87481705',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0509372,
          48.8677671,
        ],
      },
      properties: {
        nom: `Saint-Nom-la-Bretèche Forêt de Marly`,
        libellecourt: 'SNB',
        segment_drg: 'B',
        codeinsee: '78224',
        codes_uic: '87382481',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2667624,
          50.7536204,
        ],
      },
      properties: {
        nom: `Saint-Omer`,
        libellecourt: 'STO',
        segment_drg: 'B',
        codeinsee: '62765',
        codes_uic: '87281444',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9970829,
          49.5306261,
        ],
      },
      properties: {
        nom: `Saint-Omer-en-Chaussée`,
        libellecourt: 'SHS',
        segment_drg: 'C',
        codeinsee: '60590',
        codes_uic: '87313718',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.32257,
          48.90531,
        ],
      },
      properties: {
        nom: `Saint-Ouen`,
        libellecourt: 'SOS',
        segment_drg: 'B',
        codeinsee: '93070',
        codes_uic: '87271247',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.10651,
          49.04527,
        ],
      },
      properties: {
        nom: `Saint-Ouen-l'Aumône`,
        libellecourt: 'SOA',
        segment_drg: 'B',
        codeinsee: '95572',
        codes_uic: '87276105',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1279345,
          49.0338707,
        ],
      },
      properties: {
        nom: `Saint-Ouen-l'Aumône Liesse`,
        libellecourt: 'SOL',
        segment_drg: 'B',
        codeinsee: '95572',
        codes_uic: '87337980',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.10369,
          49.03997,
        ],
      },
      properties: {
        nom: `Saint-Ouen-l'Aumône Quartier de l'Église`,
        libellecourt: 'XOA',
        segment_drg: 'B',
        codeinsee: '95572',
        codes_uic: '87381426',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.4783289,
          47.6042003,
        ],
      },
      properties: {
        nom: `Saint-Paterne-Racan`,
        libellecourt: 'SPN',
        segment_drg: 'C',
        codeinsee: '37231',
        codes_uic: '87571554',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3096916,
          47.2855394,
        ],
      },
      properties: {
        nom: `Saint-Patrice`,
        libellecourt: 'XPR',
        segment_drg: 'C',
        codeinsee: '37232',
        codes_uic: '87571810',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1282046,
          46.1000331,
        ],
      },
      properties: {
        nom: `Saint-Paul-de-Varax`,
        libellecourt: 'SVX',
        segment_drg: 'C',
        codeinsee: '01383',
        codes_uic: '87723783',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.1619763,
          43.1015768,
        ],
      },
      properties: {
        nom: `Saint-Pé-de-Bigorre`,
        libellecourt: 'XPE',
        segment_drg: 'C',
        codeinsee: '65395',
        codes_uic: '87671362',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.85035,
          44.94771,
        ],
      },
      properties: {
        nom: `Saint-Péray`,
        libellecourt: 'STP',
        segment_drg: 'C',
        codeinsee: '07281',
        codes_uic: '87761494',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5904889,
          48.5429526,
        ],
      },
      properties: {
        nom: `Saint-Piat`,
        libellecourt: 'SPI',
        segment_drg: 'B',
        codeinsee: '28357',
        codes_uic: '87394148',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.156151,
          45.557397,
        ],
      },
      properties: {
        nom: `Saint-Pierre-d'Albigny`,
        libellecourt: 'SPA',
        segment_drg: 'C',
        codeinsee: '73270',
        codes_uic: '87741223',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.1876216,
          44.5752452,
        ],
      },
      properties: {
        nom: `Saint-Pierre-d'Aurillac`,
        libellecourt: 'SPX',
        segment_drg: 'C',
        codeinsee: '33463',
        codes_uic: '87582833',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.856103,
          45.1234881,
        ],
      },
      properties: {
        nom: `Saint-Pierre-de-Chignac`,
        libellecourt: 'XPH',
        segment_drg: 'C',
        codeinsee: '24484',
        codes_uic: '87595520',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.72355,
          47.386099,
        ],
      },
      properties: {
        nom: `Saint-Pierre-des-Corps`,
        libellecourt: 'SPC',
        segment_drg: 'A',
        codeinsee: '37233',
        codes_uic: '87571240',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3757533,
          46.0593442,
        ],
      },
      properties: {
        nom: `Saint-Pierre-en-Faucigny`,
        libellecourt: 'SPE',
        segment_drg: 'C',
        codeinsee: '74250',
        codes_uic: '87746313',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.0252972,
          48.1135968,
        ],
      },
      properties: {
        nom: `Saint-Pierre-la-Cour`,
        libellecourt: 'SPW',
        segment_drg: 'C',
        codeinsee: '53247',
        codes_uic: '87478768',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1117427,
          46.7932373,
        ],
      },
      properties: {
        nom: `Saint-Pierre-le-Moûtier`,
        libellecourt: 'SPM',
        segment_drg: 'C',
        codeinsee: '58264',
        codes_uic: '87696294',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.138905,
          47.5210574,
        ],
      },
      properties: {
        nom: `Saint-Pierre-Quiberon`,
        libellecourt: 'SQN',
        segment_drg: 'C',
        codeinsee: '56234',
        codes_uic: '87476440',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.0405855,
          49.0231057,
        ],
      },
      properties: {
        nom: `Saint-Pierre-sur-Dives`,
        libellecourt: 'SPD',
        segment_drg: 'C',
        codeinsee: '14654',
        codes_uic: '87444216',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.98731,
          48.6768402,
        ],
      },
      properties: {
        nom: `Saint-Pol-de-Léon`,
        libellecourt: 'SPL',
        segment_drg: 'C',
        codeinsee: '29259',
        codes_uic: '87474569',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.33939,
          50.37913,
        ],
      },
      properties: {
        nom: `Saint-Pol-sur-Ternoise`,
        libellecourt: 'SPT',
        segment_drg: 'C',
        codeinsee: '62767',
        codes_uic: '87342337',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.934242,
          45.686659,
        ],
      },
      properties: {
        nom: `Saint-Priest`,
        libellecourt: 'SPR',
        segment_drg: 'B',
        codeinsee: '69290',
        codes_uic: '87723353',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4002297,
          45.8872383,
        ],
      },
      properties: {
        nom: `Saint-Priest-Taurion`,
        libellecourt: 'TIO',
        segment_drg: 'C',
        codeinsee: '87178',
        codes_uic: '87592055',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2970089,
          49.8400482,
        ],
      },
      properties: {
        nom: `Saint-Quentin`,
        libellecourt: 'SQT',
        segment_drg: 'A',
        codeinsee: '02691',
        codes_uic: '87296004',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.04523,
          48.78657,
        ],
      },
      properties: {
        nom: `Saint-Quentin en Yvelines - Montigny-le-Bretonneux`,
        libellecourt: 'SQY',
        segment_drg: 'B',
        codeinsee: '78423',
        codes_uic: '87393843',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.099896,
          45.638109,
        ],
      },
      properties: {
        nom: `Saint-Quentin-Fallavier`,
        libellecourt: 'SQF',
        segment_drg: 'B',
        codeinsee: '38449',
        codes_uic: '87723387',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.810849,
          45.297797,
        ],
      },
      properties: {
        nom: `Saint-Rambert-d'Albon`,
        libellecourt: 'SRA',
        segment_drg: 'B',
        codeinsee: '26325',
        codes_uic: '87761106',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.438622,
          45.9473397,
        ],
      },
      properties: {
        nom: `Saint-Rambert-en-Bugey`,
        libellecourt: 'SBB',
        segment_drg: 'C',
        codeinsee: '01384',
        codes_uic: '87743740',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.769083,
          43.42356,
        ],
      },
      properties: {
        nom: `Saint-Raphaël Valescure`,
        libellecourt: 'SRV',
        segment_drg: 'A',
        codeinsee: '83118',
        codes_uic: '87757526',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4258609,
          49.4681726,
        ],
      },
      properties: {
        nom: `Saint-Remy-en-l'Eau`,
        libellecourt: 'RLE',
        segment_drg: 'C',
        codeinsee: '60595',
        codes_uic: '87313288',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2837132,
          49.8933575,
        ],
      },
      properties: {
        nom: `Saint-Roch`,
        libellecourt: 'SRO',
        segment_drg: 'C',
        codeinsee: '80021',
        codes_uic: '87313080',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.5423351,
          45.8616053,
        ],
      },
      properties: {
        nom: `Saint-Romain-de-Popey`,
        libellecourt: 'SNP',
        segment_drg: 'C',
        codeinsee: '69234',
        codes_uic: '87721456',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.1208275,
          45.5545543,
        ],
      },
      properties: {
        nom: `Saint-Romain-le-Puy`,
        libellecourt: 'SRP',
        segment_drg: 'C',
        codeinsee: '42285',
        codes_uic: '87726430',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9673744,
          44.013981,
        ],
      },
      properties: {
        nom: `Saint-Rome-de-Cernon`,
        libellecourt: 'SDO',
        segment_drg: 'C',
        codeinsee: '12243',
        codes_uic: '87783431',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9352794,
          43.9531783,
        ],
      },
      properties: {
        nom: `Saint-Saturnin-lès-Avignon`,
        libellecourt: 'SSA',
        segment_drg: 'C',
        codeinsee: '84119',
        codes_uic: '87765438',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6778775,
          45.8759277,
        ],
      },
      properties: {
        nom: `Saint-Savinien`,
        libellecourt: 'SNH',
        segment_drg: 'C',
        codeinsee: '17397',
        codes_uic: '87491035',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2179,
          46.1470046,
        ],
      },
      properties: {
        nom: `Saint-Saviol`,
        libellecourt: 'SSV',
        segment_drg: 'C',
        codeinsee: '86247',
        codes_uic: '87575365',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5466809,
          46.3859938,
        ],
      },
      properties: {
        nom: `Saint-Sébastien`,
        libellecourt: 'SBF',
        segment_drg: 'C',
        codeinsee: '23239',
        codes_uic: '87592493',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.4957437,
          47.1903914,
        ],
      },
      properties: {
        nom: `Saint-Sébastien Frêne Rond`,
        libellecourt: 'XTD',
        segment_drg: 'C',
        codeinsee: '44190',
        codes_uic: '87354597',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.5109069,
          47.2069513,
        ],
      },
      properties: {
        nom: `Saint-Sébastien Pas Enchantés`,
        libellecourt: 'XTX',
        segment_drg: 'C',
        codeinsee: '44190',
        codes_uic: '87354589',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.7661904,
          47.8977519,
        ],
      },
      properties: {
        nom: `Saint-Senoux - Pléchâtel`,
        libellecourt: 'XSX',
        segment_drg: 'C',
        codeinsee: '35312',
        codes_uic: '87471169',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.0026606,
          45.0114075,
        ],
      },
      properties: {
        nom: `Saint-Seurin-sur-l'Isle`,
        libellecourt: 'SUN',
        segment_drg: 'C',
        codeinsee: '33478',
        codes_uic: '87584615',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.0516979,
          48.843608,
        ],
      },
      properties: {
        nom: `Saint-Sever`,
        libellecourt: 'SSE',
        segment_drg: 'C',
        codeinsee: '14658',
        codes_uic: '87447714',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1164133,
          49.3473824,
        ],
      },
      properties: {
        nom: `Saint-Sulpice - Auteuil`,
        libellecourt: 'SUP',
        segment_drg: 'C',
        codeinsee: '60598',
        codes_uic: '87313684',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.392135,
          44.9142742,
        ],
      },
      properties: {
        nom: `Saint-Sulpice - Izon`,
        libellecourt: 'IZR',
        segment_drg: 'C',
        codeinsee: '33483',
        codes_uic: '87584722',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.680702,
          43.775073,
        ],
      },
      properties: {
        nom: `Saint-Sulpice (Tarn)`,
        libellecourt: 'SST',
        segment_drg: 'B',
        codeinsee: '81271',
        codes_uic: '87615344',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4762218,
          46.0469183,
        ],
      },
      properties: {
        nom: `Saint-Sulpice-Laurière`,
        libellecourt: 'SSL',
        segment_drg: 'C',
        codeinsee: '87181',
        codes_uic: '87592345',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.3377542,
          46.8442215,
        ],
      },
      properties: {
        nom: `Saint-Symphorien-de-Marmagne`,
        libellecourt: 'XSY',
        segment_drg: 'C',
        codeinsee: '71482',
        codes_uic: '87694174',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.9483116,
          48.4942082,
        ],
      },
      properties: {
        nom: `Saint-Thégonnec`,
        libellecourt: 'STH',
        segment_drg: 'C',
        codeinsee: '29266',
        codes_uic: '87474312',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.81439,
          45.186395,
        ],
      },
      properties: {
        nom: `Saint-Vallier sur Rhône`,
        libellecourt: 'SUO',
        segment_drg: 'B',
        codeinsee: '26333',
        codes_uic: '87761130',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2810245,
          46.0024781,
        ],
      },
      properties: {
        nom: `Saint-Victor - Thizy`,
        libellecourt: 'SVH',
        segment_drg: 'C',
        codeinsee: '42293',
        codes_uic: '87721043',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1097122,
          49.6770346,
        ],
      },
      properties: {
        nom: `Saint-Victor-l'Abbaye`,
        libellecourt: 'SIC',
        segment_drg: 'C',
        codeinsee: '76602',
        codes_uic: '87415166',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0095737,
          45.8765887,
        ],
      },
      properties: {
        nom: `Saint-Victurnien`,
        libellecourt: 'SIV',
        segment_drg: 'C',
        codeinsee: '87185',
        codes_uic: '87592683',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9186273,
          45.1488794,
        ],
      },
      properties: {
        nom: `Saint-Vincent le Château`,
        libellecourt: 'SWC',
        segment_drg: 'C',
        codeinsee: '43230',
        codes_uic: '87734715',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.306493,
          43.657736,
        ],
      },
      properties: {
        nom: `Saint-Vincent-de-Tyrosse`,
        libellecourt: 'SVT',
        segment_drg: 'B',
        codeinsee: '40284',
        codes_uic: '87673277',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.809057,
          47.183507,
        ],
      },
      properties: {
        nom: `Saint-Vit`,
        libellecourt: 'SVI',
        segment_drg: 'B',
        codeinsee: '25527',
        codes_uic: '87718320',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2053608,
          45.5192516,
        ],
      },
      properties: {
        nom: `Saint-Yrieix-la-Perche`,
        libellecourt: 'SYX',
        segment_drg: 'C',
        codeinsee: '87187',
        codes_uic: '87592824',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.96048,
          47.6785805,
        ],
      },
      properties: {
        nom: `Sainte-Anne`,
        libellecourt: 'YAN',
        segment_drg: 'C',
        codeinsee: '56176',
        codes_uic: '87476648',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.0931269,
          44.5326935,
        ],
      },
      properties: {
        nom: `Sainte-Bazeille`,
        libellecourt: 'XBZ',
        segment_drg: 'C',
        codeinsee: '47233',
        codes_uic: '87586479',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9758497,
          44.2554362,
        ],
      },
      properties: {
        nom: `Sainte-Cécile-d'Andorge`,
        libellecourt: 'SCZ',
        segment_drg: 'C',
        codeinsee: '30239',
        codes_uic: '87775239',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.2659748,
          46.879207,
        ],
      },
      properties: {
        nom: `Sainte-Colombe`,
        libellecourt: 'XCB',
        segment_drg: 'C',
        codeinsee: '25515',
        codes_uic: '87715151',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.25602,
          48.52959,
        ],
      },
      properties: {
        nom: `Sainte-Colombe Septveilles`,
        libellecourt: 'XCS',
        segment_drg: 'B',
        codeinsee: '77404',
        codes_uic: '87116178',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4939737,
          44.8978327,
        ],
      },
      properties: {
        nom: `Sainte-Eulalie - Carbon-Blanc`,
        libellecourt: 'SEK',
        segment_drg: 'C',
        codeinsee: '33397',
        codes_uic: '87491282',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.221519,
          44.836886,
        ],
      },
      properties: {
        nom: `Sainte-Foy-la-Grande`,
        libellecourt: 'SFY',
        segment_drg: 'B',
        codeinsee: '33402',
        codes_uic: '87584193',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.4281082,
          48.7172632,
        ],
      },
      properties: {
        nom: `Sainte-Gauburge`,
        libellecourt: 'SGG',
        segment_drg: 'C',
        codeinsee: '61389',
        codes_uic: '87444604',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.313161,
          48.653245,
        ],
      },
      properties: {
        nom: `Sainte-Geneviève-des-Bois`,
        libellecourt: 'SXG',
        segment_drg: 'B',
        codeinsee: '91549',
        codes_uic: '87545210',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0104348,
          42.4411844,
        ],
      },
      properties: {
        nom: `Sainte-Léocadie`,
        libellecourt: 'XLE',
        segment_drg: 'C',
        codeinsee: '66181',
        codes_uic: '87784850',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0298004,
          47.002251,
        ],
      },
      properties: {
        nom: `Sainte-Lizaigne`,
        libellecourt: 'XZG',
        segment_drg: 'C',
        codeinsee: '36199',
        codes_uic: '87597054',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0092045,
          50.7403764,
        ],
      },
      properties: {
        nom: `Sainte-Marguerite`,
        libellecourt: 'XMG',
        segment_drg: 'C',
        codeinsee: '59152',
        codes_uic: '87287193',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.390412,
          43.3392414,
        ],
      },
      properties: {
        nom: `Sainte-Marthe en Provence`,
        libellecourt: 'SAH',
        segment_drg: 'C',
        codeinsee: '13214',
        codes_uic: '87751842',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.5769439,
          47.1112361,
        ],
      },
      properties: {
        nom: `Sainte-Maure - Noyant`,
        libellecourt: 'SYT',
        segment_drg: 'C',
        codeinsee: '37176',
        codes_uic: '87575050',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.8138744,
          47.1055419,
        ],
      },
      properties: {
        nom: `Sainte-Pazanne`,
        libellecourt: 'SPZ',
        segment_drg: 'B',
        codeinsee: '44186',
        codes_uic: '87481226',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6179,
          45.74874,
        ],
      },
      properties: {
        nom: `Saintes`,
        libellecourt: 'SKW',
        segment_drg: 'B',
        codeinsee: '17415',
        codes_uic: '87491001',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.04778,
          47.42522,
        ],
      },
      properties: {
        nom: `Salbris`,
        libellecourt: 'SAP',
        segment_drg: 'B',
        codeinsee: '41232',
        codes_uic: '87543165',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.636431,
          45.935702,
        ],
      },
      properties: {
        nom: `Sallanches - Combloux - Megève`,
        libellecourt: 'SLS',
        segment_drg: 'B',
        codeinsee: '74256',
        codes_uic: '87746438',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8556769,
          50.4223266,
        ],
      },
      properties: {
        nom: `Sallaumines`,
        libellecourt: 'SLI',
        segment_drg: 'C',
        codeinsee: '62771',
        codes_uic: '87345215',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0787662,
          44.4751593,
        ],
      },
      properties: {
        nom: `Salles-Courbatiès`,
        libellecourt: 'SIR',
        segment_drg: 'C',
        codeinsee: '12252',
        codes_uic: '87613877',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8366078,
          50.5414529,
        ],
      },
      properties: {
        nom: `Salomé`,
        libellecourt: 'SWM',
        segment_drg: 'C',
        codeinsee: '59550',
        codes_uic: '87342451',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.088569,
          43.639061,
        ],
      },
      properties: {
        nom: `Salon-de-Provence`,
        libellecourt: 'SON',
        segment_drg: 'B',
        codeinsee: '13103',
        codes_uic: '87753764',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9174466,
          42.8356091,
        ],
      },
      properties: {
        nom: `Salses-le-Château`,
        libellecourt: 'SAL',
        segment_drg: 'C',
        codeinsee: '66190',
        codes_uic: '87784157',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.26377,
          48.97016,
        ],
      },
      properties: {
        nom: `Sannois`,
        libellecourt: 'SNN',
        segment_drg: 'B',
        codeinsee: '95582',
        codes_uic: '87276188',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3399775,
          49.0445991,
        ],
      },
      properties: {
        nom: `Sanry-sur-Nied`,
        libellecourt: 'SWN',
        segment_drg: 'C',
        codeinsee: '57627',
        codes_uic: '87192229',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7017523,
          46.9106752,
        ],
      },
      properties: {
        nom: `Santenay les Bains`,
        libellecourt: 'SLB',
        segment_drg: 'C',
        codeinsee: '21582',
        codes_uic: '87713594',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.961977,
          50.5920123,
        ],
      },
      properties: {
        nom: `Santes`,
        libellecourt: 'STS',
        segment_drg: 'C',
        codeinsee: '59553',
        codes_uic: '87286401',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.94893,
          49.12416,
        ],
      },
      properties: {
        nom: `Santeuil - Le Perchay`,
        libellecourt: 'XPY',
        segment_drg: 'C',
        codeinsee: '95584',
        codes_uic: '87381186',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1013089,
          47.2097669,
        ],
      },
      properties: {
        nom: `Saône`,
        libellecourt: 'SAZ',
        segment_drg: 'C',
        codeinsee: '25532',
        codes_uic: '87718502',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.36867,
          48.99529,
        ],
      },
      properties: {
        nom: `Sarcelles - Saint-Brice`,
        libellecourt: 'SLL',
        segment_drg: 'B',
        codeinsee: '95539',
        codes_uic: '87276386',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.220328,
          44.8770213,
        ],
      },
      properties: {
        nom: `Sarlat-la-Canéda`,
        libellecourt: 'SLQ',
        segment_drg: 'C',
        codeinsee: '24520',
        codes_uic: '87595827',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1681196,
          45.7387697,
        ],
      },
      properties: {
        nom: `Sarliève - Cournon`,
        libellecourt: 'SLC',
        segment_drg: 'C',
        codeinsee: '63124',
        codes_uic: '87734152',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0367713,
          49.0009161,
        ],
      },
      properties: {
        nom: `Sarralbe`,
        libellecourt: 'SRB',
        segment_drg: 'C',
        codeinsee: '57628',
        codes_uic: '87193714',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.599962,
          43.0496,
        ],
      },
      properties: {
        nom: `Sarrance`,
        libellecourt: 'SRR',
        segment_drg: 'C',
        codeinsee: '64506',
        codes_uic: '87672766',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0850443,
          48.9360172,
        ],
      },
      properties: {
        nom: `Sarre-Union`,
        libellecourt: 'SRU',
        segment_drg: 'B',
        codeinsee: '67434',
        codes_uic: '87215459',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.05285,
          48.73808,
        ],
      },
      properties: {
        nom: `Sarrebourg`,
        libellecourt: 'SBG',
        segment_drg: 'B',
        codeinsee: '57630',
        codes_uic: '87215012',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0686398,
          49.1073357,
        ],
      },
      properties: {
        nom: `Sarreguemines`,
        libellecourt: 'SGS',
        segment_drg: 'B',
        codeinsee: '57631',
        codes_uic: '87193615',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1120387,
          49.086306,
        ],
      },
      properties: {
        nom: `Sarreinsming`,
        libellecourt: 'SRG',
        segment_drg: 'C',
        codeinsee: '57633',
        codes_uic: '87193631',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1575173,
          48.9379523,
        ],
      },
      properties: {
        nom: `Sartrouville`,
        libellecourt: 'SVL',
        segment_drg: 'B',
        codeinsee: '78586',
        codes_uic: '87386417',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.875315,
          45.820264,
        ],
      },
      properties: {
        nom: `Sathonay - Rillieux`,
        libellecourt: 'SYR',
        segment_drg: 'B',
        codeinsee: '69292',
        codes_uic: '87723700',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.1901703,
          43.6603331,
        ],
      },
      properties: {
        nom: `Saubusse`,
        libellecourt: 'SQB',
        segment_drg: 'C',
        codeinsee: '40293',
        codes_uic: '87673251',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.9300187,
          45.6665019,
        ],
      },
      properties: {
        nom: `Saujon`,
        libellecourt: 'SJW',
        segment_drg: 'C',
        codeinsee: '17421',
        codes_uic: '87491811',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1045991,
          47.224035,
        ],
      },
      properties: {
        nom: `Saulon`,
        libellecourt: 'SLN',
        segment_drg: 'C',
        codeinsee: '21585',
        codes_uic: '87713628',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1478548,
          48.3895555,
        ],
      },
      properties: {
        nom: `Saulxures`,
        libellecourt: 'XRS',
        segment_drg: 'C',
        codeinsee: '67076',
        codes_uic: '87214759',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.07136,
          47.269,
        ],
      },
      properties: {
        nom: `Saumur`,
        libellecourt: 'SUD',
        segment_drg: 'B',
        codeinsee: '49328',
        codes_uic: '87487603',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.110001,
          43.332864,
        ],
      },
      properties: {
        nom: `Sausset-les-Pins`,
        libellecourt: 'SPJ',
        segment_drg: 'C',
        codeinsee: '13104',
        codes_uic: '87753558',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1600389,
          42.5063705,
        ],
      },
      properties: {
        nom: `Sauto`,
        libellecourt: 'TOX',
        segment_drg: 'C',
        codeinsee: '66192',
        codes_uic: '87784777',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0115419,
          44.5893893,
        ],
      },
      properties: {
        nom: `Sauveterre-la-Lémance`,
        libellecourt: 'SVE',
        segment_drg: 'C',
        codeinsee: '47292',
        codes_uic: '87586495',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.950957,
          47.35859,
        ],
      },
      properties: {
        nom: `Savenay`,
        libellecourt: 'SNY',
        segment_drg: 'B',
        codeinsee: '44195',
        codes_uic: '87481838',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.6540004,
          47.3817332,
        ],
      },
      properties: {
        nom: `Savennières - Béhuard`,
        libellecourt: 'ZVN',
        segment_drg: 'C',
        codeinsee: '49329',
        codes_uic: '87484329',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.570616,
          43.239357,
        ],
      },
      properties: {
        nom: `Saverdun`,
        libellecourt: 'SRN',
        segment_drg: 'B',
        codeinsee: '09282',
        codes_uic: '87611368',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3620802,
          48.7444606,
        ],
      },
      properties: {
        nom: `Saverne`,
        libellecourt: 'SNE',
        segment_drg: 'B',
        codeinsee: '67437',
        codes_uic: '87212225',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.583678,
          48.595519,
        ],
      },
      properties: {
        nom: `Savigny-le-Temple - Nandy`,
        libellecourt: 'ZTN',
        segment_drg: 'B',
        codeinsee: '77445',
        codes_uic: '87682187',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.35173,
          48.67614,
        ],
      },
      properties: {
        nom: `Savigny-sur-Orge`,
        libellecourt: 'SAO',
        segment_drg: 'B',
        codeinsee: '91589',
        codes_uic: '87545236',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.5441817,
          47.3605797,
        ],
      },
      properties: {
        nom: `Savonnières`,
        libellecourt: 'ZVO',
        segment_drg: 'C',
        codeinsee: '37243',
        codes_uic: '87571844',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5577316,
          50.3538756,
        ],
      },
      properties: {
        nom: `Savy-Berlette`,
        libellecourt: 'ZYB',
        segment_drg: 'C',
        codeinsee: '62785',
        codes_uic: '87342253',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.5724063,
          48.1221004,
        ],
      },
      properties: {
        nom: `Sceaux - Boëssé`,
        libellecourt: 'SBO',
        segment_drg: 'C',
        codeinsee: '72038',
        codes_uic: '87396317',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.4301867,
          48.2869344,
        ],
      },
      properties: {
        nom: `Scherwiller`,
        libellecourt: 'HWL',
        segment_drg: 'C',
        codeinsee: '67445',
        codes_uic: '87214205',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.21594,
          48.47973,
        ],
      },
      properties: {
        nom: `Schirmeck - La Broque`,
        libellecourt: 'SCK',
        segment_drg: 'B',
        codeinsee: '67448',
        codes_uic: '87214692',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.055779,
          48.9456499,
        ],
      },
      properties: {
        nom: `Schopperten`,
        libellecourt: 'HPT',
        segment_drg: 'C',
        codeinsee: '67456',
        codes_uic: '87215483',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.7425635,
          48.8286765,
        ],
      },
      properties: {
        nom: `Schweighouse-sur-Moder`,
        libellecourt: 'SWG',
        segment_drg: 'C',
        codeinsee: '67458',
        codes_uic: '87213108',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.6005468,
          48.7536468,
        ],
      },
      properties: {
        nom: `Schwindratzheim`,
        libellecourt: 'HWM',
        segment_drg: 'C',
        codeinsee: '67460',
        codes_uic: '87212159',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0350084,
          50.5486319,
        ],
      },
      properties: {
        nom: `Seclin`,
        libellecourt: 'SCN',
        segment_drg: 'B',
        codeinsee: '59560',
        codes_uic: '87286518',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.930373,
          49.695024,
        ],
      },
      properties: {
        nom: `Sedan`,
        libellecourt: 'SED',
        segment_drg: 'B',
        codeinsee: '08409',
        codes_uic: '87172254',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1661851,
          48.5998998,
        ],
      },
      properties: {
        nom: `Sées`,
        libellecourt: 'SKS',
        segment_drg: 'C',
        codeinsee: '61464',
        codes_uic: '87444695',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.443278,
          48.2601166,
        ],
      },
      properties: {
        nom: `Sélestat`,
        libellecourt: 'STT',
        segment_drg: 'B',
        codeinsee: '67462',
        codes_uic: '87214056',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9222038,
          47.3883857,
        ],
      },
      properties: {
        nom: `Selles-Saint-Denis`,
        libellecourt: 'SSD',
        segment_drg: 'C',
        codeinsee: '41241',
        codes_uic: '87576140',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5461989,
          47.2816956,
        ],
      },
      properties: {
        nom: `Selles-sur-Cher`,
        libellecourt: 'SUC',
        segment_drg: 'C',
        codeinsee: '41242',
        codes_uic: '87576868',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          8.0986724,
          48.8965635,
        ],
      },
      properties: {
        nom: `Seltz`,
        libellecourt: 'SSZ',
        segment_drg: 'C',
        codeinsee: '67463',
        codes_uic: '87212431',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.0733645,
          43.7409571,
        ],
      },
      properties: {
        nom: `Sénas`,
        libellecourt: 'SUT',
        segment_drg: 'C',
        codeinsee: '13105',
        codes_uic: '87753715',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.874316,
          46.6406445,
        ],
      },
      properties: {
        nom: `Sennecey-le-Grand`,
        libellecourt: 'SRD',
        segment_drg: 'C',
        codeinsee: '71512',
        codes_uic: '87725614',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8710626,
          46.3921451,
        ],
      },
      properties: {
        nom: `Senozan`,
        libellecourt: 'SOZ',
        segment_drg: 'C',
        codeinsee: '71513',
        codes_uic: '87725671',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.267833,
          48.197856,
        ],
      },
      properties: {
        nom: `Sens`,
        libellecourt: 'SES',
        segment_drg: 'A',
        codeinsee: '89387',
        codes_uic: '87683003',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2569742,
          49.1511332,
        ],
      },
      properties: {
        nom: `Sept-Saulx`,
        libellecourt: 'ZSX',
        segment_drg: 'C',
        codeinsee: '51530',
        codes_uic: '87171645',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3701756,
          43.4031137,
        ],
      },
      properties: {
        nom: `Septèmes-les-Vallons`,
        libellecourt: 'SEP',
        segment_drg: 'C',
        codeinsee: '13106',
        codes_uic: '87751800',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3230869,
          42.567023,
        ],
      },
      properties: {
        nom: `Serdinya`,
        libellecourt: 'ZDI',
        segment_drg: 'C',
        codeinsee: '66193',
        codes_uic: '87784702',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.81806,
          45.62716,
        ],
      },
      properties: {
        nom: `Sérézin-du-Rhône`,
        libellecourt: 'SZN',
        segment_drg: 'B',
        codeinsee: '69276',
        codes_uic: '87722546',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7639818,
          49.3572878,
        ],
      },
      properties: {
        nom: `Sérifontaine`,
        libellecourt: 'DCR',
        segment_drg: 'C',
        codeinsee: '60616',
        codes_uic: '87381269',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.06865,
          48.53536,
        ],
      },
      properties: {
        nom: `Sermaise`,
        libellecourt: 'SXE',
        segment_drg: 'C',
        codeinsee: '91593',
        codes_uic: '87545517',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.7928695,
          47.5289068,
        ],
      },
      properties: {
        nom: `Sermizelles - Vézelay`,
        libellecourt: 'SZZ',
        segment_drg: 'C',
        codeinsee: '89190',
        codes_uic: '87683722',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5395267,
          49.6315093,
        ],
      },
      properties: {
        nom: `Serqueux`,
        libellecourt: 'SEQ',
        segment_drg: 'C',
        codeinsee: '76672',
        codes_uic: '87411470',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7189895,
          49.1074117,
        ],
      },
      properties: {
        nom: `Serquigny`,
        libellecourt: 'SYD',
        segment_drg: 'C',
        codeinsee: '27622',
        codes_uic: '87444315',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.7184201,
          44.4246573,
        ],
      },
      properties: {
        nom: `Serres`,
        libellecourt: 'SRE',
        segment_drg: 'C',
        codeinsee: '05166',
        codes_uic: '87763722',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1681312,
          46.1306663,
        ],
      },
      properties: {
        nom: `Servas - Lent`,
        libellecourt: 'SVN',
        segment_drg: 'C',
        codeinsee: '01405',
        codes_uic: '87723791',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.4667757,
          48.112224,
        ],
      },
      properties: {
        nom: `Servon-sur-Vilaine`,
        libellecourt: 'SVO',
        segment_drg: 'C',
        codeinsee: '35327',
        codes_uic: '87471532',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.763444,
          45.9244592,
        ],
      },
      properties: {
        nom: `Servoz`,
        libellecourt: 'SVZ',
        segment_drg: 'C',
        codeinsee: '74143',
        codes_uic: '87746719',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.9893194,
          48.7964628,
        ],
      },
      properties: {
        nom: `Sessenheim`,
        libellecourt: 'ZHM',
        segment_drg: 'C',
        codeinsee: '67465',
        codes_uic: '87212365',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.69656,
          43.412485,
        ],
      },
      properties: {
        nom: `Sète`,
        libellecourt: 'STE',
        segment_drg: 'B',
        codeinsee: '34301',
        codes_uic: '87773200',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3989116,
          49.1189923,
        ],
      },
      properties: {
        nom: `Seugy`,
        libellecourt: 'SWY',
        segment_drg: 'C',
        codeinsee: '95594',
        codes_uic: '87272039',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1513121,
          46.9964114,
        ],
      },
      properties: {
        nom: `Seurre`,
        libellecourt: 'SEU',
        segment_drg: 'C',
        codeinsee: '21607',
        codes_uic: '87713677',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.072707,
          47.5498647,
        ],
      },
      properties: {
        nom: `Sévérac`,
        libellecourt: 'SVG',
        segment_drg: 'C',
        codeinsee: '44196',
        codes_uic: '87476754',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0569451,
          44.3246516,
        ],
      },
      properties: {
        nom: `Sévérac-d'Aveyron`,
        libellecourt: 'SVC',
        segment_drg: 'C',
        codeinsee: '12270',
        codes_uic: '87783365',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.53484,
          48.93601,
        ],
      },
      properties: {
        nom: `Sevran - Livry`,
        libellecourt: 'SEV',
        segment_drg: 'B',
        codeinsee: '93071',
        codes_uic: '87271429',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.52474,
          48.94743,
        ],
      },
      properties: {
        nom: `Sevran Beaudottes`,
        libellecourt: 'BDE',
        segment_drg: 'B',
        codeinsee: '93071',
        codes_uic: '87271445',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.20051,
          48.82746,
        ],
      },
      properties: {
        nom: `Sèvres - Ville-d'Avray`,
        libellecourt: 'VDV',
        segment_drg: 'B',
        codeinsee: '92072',
        codes_uic: '87382341',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2147536,
          48.8214311,
        ],
      },
      properties: {
        nom: `Sèvres Rive Gauche`,
        libellecourt: 'SVR',
        segment_drg: 'B',
        codeinsee: '92072',
        codes_uic: '87393124',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.8315162,
          45.9630307,
        ],
      },
      properties: {
        nom: `Seyssel - Corbonod`,
        libellecourt: 'SSS',
        segment_drg: 'C',
        codeinsee: '01118',
        codes_uic: '87745828',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.350327,
          49.443655,
        ],
      },
      properties: {
        nom: `Sierck-les-Bains`,
        libellecourt: 'SIK',
        segment_drg: 'C',
        codeinsee: '57650',
        codes_uic: '87191635',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.459142,
          47.656047,
        ],
      },
      properties: {
        nom: `Sierentz`,
        libellecourt: 'SEZ',
        segment_drg: 'B',
        codeinsee: '68309',
        codes_uic: '87182105',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.1289696,
          48.1818735,
        ],
      },
      properties: {
        nom: `Sillé-le-Guillaume`,
        libellecourt: 'SLG',
        segment_drg: 'C',
        codeinsee: '72334',
        codes_uic: '87396234',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.4210929,
          46.2202097,
        ],
      },
      properties: {
        nom: `Simandre-sur-Suran`,
        libellecourt: 'SUS',
        segment_drg: 'C',
        codeinsee: '01408',
        codes_uic: '87743336',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.426148,
          43.434747,
        ],
      },
      properties: {
        nom: `Simiane-Collongue`,
        libellecourt: 'SIE',
        segment_drg: 'C',
        codeinsee: '13107',
        codes_uic: '87751438',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.112777,
          50.356612,
        ],
      },
      properties: {
        nom: `Sin-le-Noble`,
        libellecourt: 'SIN',
        segment_drg: 'C',
        codeinsee: '59569',
        codes_uic: '87345405',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9844566,
          44.8197409,
        ],
      },
      properties: {
        nom: `Siorac-en-Périgord`,
        libellecourt: 'SOC',
        segment_drg: 'C',
        codeinsee: '24538',
        codes_uic: '87595769',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9465888,
          44.1902025,
        ],
      },
      properties: {
        nom: `Sisteron`,
        libellecourt: 'SIO',
        segment_drg: 'C',
        codeinsee: '04209',
        codes_uic: '87751206',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3381259,
          49.3691983,
        ],
      },
      properties: {
        nom: `Soissons`,
        libellecourt: 'SOI',
        segment_drg: 'A',
        codeinsee: '02722',
        codes_uic: '87271817',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.2856817,
          45.7561586,
        ],
      },
      properties: {
        nom: `Solignac - Le Vigen`,
        libellecourt: 'SKN',
        segment_drg: 'C',
        codeinsee: '87205',
        codes_uic: '87592246',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0464158,
          43.1907805,
        ],
      },
      properties: {
        nom: `Solliès-Pont`,
        libellecourt: 'SIP',
        segment_drg: 'C',
        codeinsee: '83130',
        codes_uic: '87755330',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.27738,
          50.3557,
        ],
      },
      properties: {
        nom: `Somain`,
        libellecourt: 'SOM',
        segment_drg: 'B',
        codeinsee: '59574',
        codes_uic: '87345314',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4353726,
          49.6297244,
        ],
      },
      properties: {
        nom: `Sommery`,
        libellecourt: 'SKY',
        segment_drg: 'C',
        codeinsee: '76678',
        codes_uic: '87411462',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8756182,
          44.0053909,
        ],
      },
      properties: {
        nom: `Sorgues - Châteauneuf-du-Pape`,
        libellecourt: 'SCP',
        segment_drg: 'B',
        codeinsee: '84129',
        codes_uic: '87765206',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.453788,
          43.876545,
        ],
      },
      properties: {
        nom: `Sospel`,
        libellecourt: 'SOP',
        segment_drg: 'C',
        codeinsee: '06136',
        codes_uic: '87756825',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.102362,
          49.4129479,
        ],
      },
      properties: {
        nom: `Sotteville-lès-Rouen`,
        libellecourt: 'SOV',
        segment_drg: 'C',
        codeinsee: '76681',
        codes_uic: '87411223',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.466605,
          44.902127,
        ],
      },
      properties: {
        nom: `Souillac`,
        libellecourt: 'SOU',
        segment_drg: 'C',
        codeinsee: '46309',
        codes_uic: '87594333',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.1175894,
          45.5081769,
        ],
      },
      properties: {
        nom: `Soulac-sur-Mer`,
        libellecourt: 'SUU',
        segment_drg: 'C',
        codeinsee: '33514',
        codes_uic: '87581371',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.8827184,
          48.9347687,
        ],
      },
      properties: {
        nom: `Soultz-sous-Forêts`,
        libellecourt: 'SSF',
        segment_drg: 'B',
        codeinsee: '67474',
        codes_uic: '87213421',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.734971,
          48.181907,
        ],
      },
      properties: {
        nom: `Souppes - Château-Landon`,
        libellecourt: 'SPP',
        segment_drg: 'B',
        codeinsee: '77458',
        codes_uic: '87684217',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.93961,
          50.2655833,
        ],
      },
      properties: {
        nom: `Sous le Bois`,
        libellecourt: 'SBS',
        segment_drg: 'C',
        codeinsee: '59392',
        codes_uic: '87295543',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.35134,
          48.91779,
        ],
      },
      properties: {
        nom: `Stade de France Saint-Denis`,
        libellecourt: 'SFD',
        segment_drg: 'B',
        codeinsee: '93066',
        codes_uic: '87164780',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2651657,
          47.8279612,
        ],
      },
      properties: {
        nom: `Staffelfelden`,
        libellecourt: 'TFE',
        segment_drg: 'C',
        codeinsee: '68321',
        codes_uic: '87182691',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.39209,
          48.9548,
        ],
      },
      properties: {
        nom: `Stains La Cerisaie T11`,
        libellecourt: 'STC',
        segment_drg: 'B',
        codeinsee: '93072',
        codes_uic: '87697334',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.510089,
          50.6806568,
        ],
      },
      properties: {
        nom: `Steenbecque`,
        libellecourt: 'SBQ',
        segment_drg: 'C',
        codeinsee: '59578',
        codes_uic: '87342295',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7855769,
          50.713459,
        ],
      },
      properties: {
        nom: `Steenwerck`,
        libellecourt: 'SWK',
        segment_drg: 'C',
        codeinsee: '59043',
        codes_uic: '87286161',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.416299,
          48.7635292,
        ],
      },
      properties: {
        nom: `Steinbourg`,
        libellecourt: 'SNG',
        segment_drg: 'C',
        codeinsee: '67478',
        codes_uic: '87212209',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.7045946,
          48.7175872,
        ],
      },
      properties: {
        nom: `Stephansfeld`,
        libellecourt: 'SFX',
        segment_drg: 'C',
        codeinsee: '67067',
        codes_uic: '87212126',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.734584,
          48.584967,
        ],
      },
      properties: {
        nom: `Strasbourg`,
        libellecourt: 'STG',
        segment_drg: 'A',
        codeinsee: '67482',
        codes_uic: '87212027',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.6950455,
          48.5632897,
        ],
      },
      properties: {
        nom: `Strasbourg Roethig`,
        libellecourt: 'SQG',
        segment_drg: 'C',
        codeinsee: '67267',
        codes_uic: '87212191',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6312181,
          50.713492,
        ],
      },
      properties: {
        nom: `Strazeele`,
        libellecourt: 'STZ',
        segment_drg: 'C',
        codeinsee: '59582',
        codes_uic: '87286203',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.5299873,
          47.3431347,
        ],
      },
      properties: {
        nom: `Sucé-sur-Erdre`,
        libellecourt: 'SUF',
        segment_drg: 'B',
        codeinsee: '44201',
        codes_uic: '87590828',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4540981,
          47.6802248,
        ],
      },
      properties: {
        nom: `Suèvres`,
        libellecourt: 'SVK',
        segment_drg: 'C',
        codeinsee: '41252',
        codes_uic: '87574236',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1344097,
          48.6647685,
        ],
      },
      properties: {
        nom: `Surdon`,
        libellecourt: 'SDN',
        segment_drg: 'C',
        codeinsee: '61101',
        codes_uic: '87444562',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.22131,
          48.87155,
        ],
      },
      properties: {
        nom: `Suresnes Mont Valérien`,
        libellecourt: 'SMV',
        segment_drg: 'B',
        codeinsee: '92073',
        codes_uic: '87382374',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.762284,
          46.113238,
        ],
      },
      properties: {
        nom: `Surgères`,
        libellecourt: 'SGE',
        segment_drg: 'B',
        codeinsee: '17434',
        codes_uic: '87485227',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.52527,
          49.09961,
        ],
      },
      properties: {
        nom: `Survilliers - Fosses`,
        libellecourt: 'SUR',
        segment_drg: 'B',
        codeinsee: '95250',
        codes_uic: '87276261',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.1824904,
          45.5291194,
        ],
      },
      properties: {
        nom: `Sury-le-Comtal`,
        libellecourt: 'SYC',
        segment_drg: 'C',
        codeinsee: '42304',
        codes_uic: '87726422',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6689566,
          48.8295827,
        ],
      },
      properties: {
        nom: `Tacoignières - Richebourg`,
        libellecourt: 'TAE',
        segment_drg: 'B',
        codeinsee: '78605',
        codes_uic: '87393454',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8258755,
          45.8992065,
        ],
      },
      properties: {
        nom: `Taconnaz`,
        libellecourt: 'TAC',
        segment_drg: 'C',
        codeinsee: '74143',
        codes_uic: '87746750',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.839967,
          45.072183,
        ],
      },
      properties: {
        nom: `Tain-l'Hermitage - Tournon`,
        libellecourt: 'TAI',
        segment_drg: 'B',
        codeinsee: '26347',
        codes_uic: '87761163',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.129105,
          48.4838433,
        ],
      },
      properties: {
        nom: `Tantonville`,
        libellecourt: 'TVE',
        segment_drg: 'C',
        codeinsee: '54513',
        codes_uic: '87141598',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3151214,
          44.1003384,
        ],
      },
      properties: {
        nom: `Tanus`,
        libellecourt: 'FWD',
        segment_drg: 'C',
        codeinsee: '81292',
        codes_uic: '87615674',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.439208,
          45.889921,
        ],
      },
      properties: {
        nom: `Tarare`,
        libellecourt: 'TAR',
        segment_drg: 'B',
        codeinsee: '69243',
        codes_uic: '87721472',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.657206,
          43.801331,
        ],
      },
      properties: {
        nom: `Tarascon`,
        libellecourt: 'TCN',
        segment_drg: 'B',
        codeinsee: '13108',
        codes_uic: '87765354',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5999321,
          42.8495385,
        ],
      },
      properties: {
        nom: `Tarascon-sur-Ariège`,
        libellecourt: 'TRC',
        segment_drg: 'C',
        codeinsee: '09306',
        codes_uic: '87611590',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.069415,
          43.239955,
        ],
      },
      properties: {
        nom: `Tarbes`,
        libellecourt: 'TBS',
        segment_drg: 'B',
        codeinsee: '65440',
        codes_uic: '87671008',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.75857,
          45.76151,
        ],
      },
      properties: {
        nom: `Tassin`,
        libellecourt: 'TAS',
        segment_drg: 'B',
        codeinsee: '69244',
        codes_uic: '87721514',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.22187,
          49.02536,
        ],
      },
      properties: {
        nom: `Taverny`,
        libellecourt: 'TVY',
        segment_drg: 'B',
        codeinsee: '95607',
        codes_uic: '87276634',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1913397,
          48.1812341,
        ],
      },
      properties: {
        nom: `Teillé`,
        libellecourt: 'TEI',
        segment_drg: 'C',
        codeinsee: '72349',
        codes_uic: '87396051',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.17559,
          50.52863,
        ],
      },
      properties: {
        nom: `Templeuve`,
        libellecourt: 'TEM',
        segment_drg: 'B',
        codeinsee: '59586',
        codes_uic: '87286625',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.5016101,
          45.9222096,
        ],
      },
      properties: {
        nom: `Tenay - Hauteville`,
        libellecourt: 'TEN',
        segment_drg: 'C',
        codeinsee: '01416',
        codes_uic: '87743757',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.5941608,
          44.089922,
        ],
      },
      properties: {
        nom: `Tende`,
        libellecourt: 'TND',
        segment_drg: 'C',
        codeinsee: '06163',
        codes_uic: '87756882',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2972491,
          49.6591862,
        ],
      },
      properties: {
        nom: `Tergnier`,
        libellecourt: 'TGR',
        segment_drg: 'B',
        codeinsee: '02738',
        codes_uic: '87296442',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3004219,
          45.1357901,
        ],
      },
      properties: {
        nom: `Terrasson-Lavilledieu`,
        libellecourt: 'TOD',
        segment_drg: 'C',
        codeinsee: '24547',
        codes_uic: '87594408',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9369531,
          43.9284209,
        ],
      },
      properties: {
        nom: `Tessonnières`,
        libellecourt: 'TES',
        segment_drg: 'C',
        codeinsee: '81099',
        codes_uic: '87615245',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.6646267,
          49.051605,
        ],
      },
      properties: {
        nom: `Teting-sur-Nied`,
        libellecourt: 'TET',
        segment_drg: 'C',
        codeinsee: '57668',
        codes_uic: '87193342',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1069795,
          47.8088208,
        ],
      },
      properties: {
        nom: `Thann`,
        libellecourt: 'THA',
        segment_drg: 'B',
        codeinsee: '68334',
        codes_uic: '87182568',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.101046,
          47.8099229,
        ],
      },
      properties: {
        nom: `Thann Centre`,
        libellecourt: 'THJ',
        segment_drg: 'C',
        codeinsee: '68334',
        codes_uic: '87472605',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0938473,
          47.8133155,
        ],
      },
      properties: {
        nom: `Thann Saint-Jacques`,
        libellecourt: 'THD',
        segment_drg: 'B',
        codeinsee: '68334',
        codes_uic: '87182881',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.416384,
          48.24465,
        ],
      },
      properties: {
        nom: `Thaon`,
        libellecourt: 'TAO',
        segment_drg: 'B',
        codeinsee: '88465',
        codes_uic: '87144097',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0443867,
          47.3139904,
        ],
      },
      properties: {
        nom: `Theillay`,
        libellecourt: 'THY',
        segment_drg: 'C',
        codeinsee: '41256',
        codes_uic: '87543199',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.6221929,
          47.4947945,
        ],
      },
      properties: {
        nom: `Thenissey`,
        libellecourt: 'TEY',
        segment_drg: 'C',
        codeinsee: '21627',
        codes_uic: '87713099',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0686905,
          45.1601857,
        ],
      },
      properties: {
        nom: `Thenon`,
        libellecourt: 'THN',
        segment_drg: 'C',
        codeinsee: '24550',
        codes_uic: '87595579',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9367978,
          43.5134929,
        ],
      },
      properties: {
        nom: `Théoule-sur-Mer`,
        libellecourt: 'THM',
        segment_drg: 'C',
        codeinsee: '06138',
        codes_uic: '87757583',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.3120568,
          47.322271,
        ],
      },
      properties: {
        nom: `Thésée`,
        libellecourt: 'TYQ',
        segment_drg: 'C',
        codeinsee: '41258',
        codes_uic: '87328195',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.435931,
          49.8118528,
        ],
      },
      properties: {
        nom: `Thézy-Glimont`,
        libellecourt: 'TZY',
        segment_drg: 'C',
        codeinsee: '80752',
        codes_uic: '87316125',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8102635,
          48.4139874,
        ],
      },
      properties: {
        nom: `Thiaville-sur-Meurthe`,
        libellecourt: 'TIA',
        segment_drg: 'C',
        codeinsee: '54519',
        codes_uic: '87141432',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4729218,
          50.6523561,
        ],
      },
      properties: {
        nom: `Thiennes`,
        libellecourt: 'TEE',
        segment_drg: 'C',
        codeinsee: '59590',
        codes_uic: '87342287',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.5431798,
          45.8610502,
        ],
      },
      properties: {
        nom: `Thiers`,
        libellecourt: 'THI',
        segment_drg: 'C',
        codeinsee: '63430',
        codes_uic: '87734475',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6805271,
          49.0084346,
        ],
      },
      properties: {
        nom: `Thieux - Nantouillet`,
        libellecourt: 'TNT',
        segment_drg: 'C',
        codeinsee: '77332',
        codes_uic: '87272054',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.169543,
          49.353931,
        ],
      },
      properties: {
        nom: `Thionville`,
        libellecourt: 'THL',
        segment_drg: 'B',
        codeinsee: '57672',
        codes_uic: '87191007',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.921348,
          45.418965,
        ],
      },
      properties: {
        nom: `Thiviers`,
        libellecourt: 'TIV',
        segment_drg: 'C',
        codeinsee: '24551',
        codes_uic: '87595124',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.763995,
          48.394462,
        ],
      },
      properties: {
        nom: `Thomery`,
        libellecourt: 'TMR',
        segment_drg: 'B',
        codeinsee: '77186',
        codes_uic: '87682252',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.481669,
          46.369004,
        ],
      },
      properties: {
        nom: `Thonon-les-Bains`,
        libellecourt: 'THO',
        segment_drg: 'B',
        codeinsee: '74281',
        codes_uic: '87745646',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.4409626,
          47.2651143,
        ],
      },
      properties: {
        nom: `Thouaré-sur-Loire`,
        libellecourt: 'THE',
        segment_drg: 'C',
        codeinsee: '44204',
        codes_uic: '87481143',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.2097941,
          46.9852442,
        ],
      },
      properties: {
        nom: `Thouars`,
        libellecourt: 'THQ',
        segment_drg: 'C',
        codeinsee: '79329',
        codes_uic: '87487009',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8830021,
          49.4760722,
        ],
      },
      properties: {
        nom: `Thourotte`,
        libellecourt: 'LTC',
        segment_drg: 'C',
        codeinsee: '60636',
        codes_uic: '87276741',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2227279,
          42.5229486,
        ],
      },
      properties: {
        nom: `Thuès Carença`,
        libellecourt: 'THG',
        segment_drg: 'C',
        codeinsee: '66209',
        codes_uic: '87784751',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.249094,
          42.5288009,
        ],
      },
      properties: {
        nom: `Thuès les Bains`,
        libellecourt: 'THB',
        segment_drg: 'C',
        codeinsee: '66123',
        codes_uic: '87784744',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.91922,
          49.00687,
        ],
      },
      properties: {
        nom: `Thun le Paradis`,
        libellecourt: 'TPA',
        segment_drg: 'B',
        codeinsee: '78401',
        codes_uic: '87381822',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.25527,
          48.9062169,
        ],
      },
      properties: {
        nom: `Tieffenbach - Struth`,
        libellecourt: 'FOX',
        segment_drg: 'C',
        codeinsee: '67491',
        codes_uic: '87215699',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.469347,
          47.617532,
        ],
      },
      properties: {
        nom: `Tiercé`,
        libellecourt: 'TCE',
        segment_drg: 'C',
        codeinsee: '49347',
        codes_uic: '87484147',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4980285,
          50.35699,
        ],
      },
      properties: {
        nom: `Tincques`,
        libellecourt: 'TIN',
        segment_drg: 'C',
        codeinsee: '62820',
        codes_uic: '87342303',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.8978981,
          45.9433989,
        ],
      },
      properties: {
        nom: `Tonnay-Charente`,
        libellecourt: 'TNC',
        segment_drg: 'C',
        codeinsee: '17449',
        codes_uic: '87485151',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.314093,
          44.392796,
        ],
      },
      properties: {
        nom: `Tonneins`,
        libellecourt: 'TON',
        segment_drg: 'B',
        codeinsee: '47310',
        codes_uic: '87586651',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.97355,
          47.85938,
        ],
      },
      properties: {
        nom: `Tonnerre`,
        libellecourt: 'TNE',
        segment_drg: 'C',
        codeinsee: '89418',
        codes_uic: '87713198',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.1173797,
          47.0331153,
        ],
      },
      properties: {
        nom: `Torfou-Sèvremoine`,
        libellecourt: 'TFU',
        segment_drg: 'C',
        codeinsee: '49350',
        codes_uic: '87486894',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.8887804,
          47.1637546,
        ],
      },
      properties: {
        nom: `Torpes - Boussières`,
        libellecourt: 'GZO',
        segment_drg: 'C',
        codeinsee: '25564',
        codes_uic: '87718114',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.364363,
          43.8470835,
        ],
      },
      properties: {
        nom: `Touët-de-l'Escarène`,
        libellecourt: 'TDO',
        segment_drg: 'C',
        codeinsee: '06142',
        codes_uic: '87756817',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.880615,
          48.679018,
        ],
      },
      properties: {
        nom: `Toul`,
        libellecourt: 'TOL',
        segment_drg: 'B',
        codeinsee: '54528',
        codes_uic: '87141044',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.929293,
          43.12837,
        ],
      },
      properties: {
        nom: `Toulon`,
        libellecourt: 'TLN',
        segment_drg: 'A',
        codeinsee: '83137',
        codes_uic: '87755009',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.972755104236321,
          43.125113642636705,
        ],
      },
      properties: {
        nom: `Toulon Sainte-Musse`,
        libellecourt: 'TSM',
        segment_drg: 'C',
        codeinsee: '83137',
        codes_uic: '87742262',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.453616,
          43.611206,
        ],
      },
      properties: {
        nom: `Toulouse Matabiau`,
        libellecourt: 'TSE',
        segment_drg: 'A',
        codeinsee: '31555',
        codes_uic: '87611004',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.16804,
          50.71683,
        ],
      },
      properties: {
        nom: `Tourcoing`,
        libellecourt: 'TRG',
        segment_drg: 'A',
        codeinsee: '59599',
        codes_uic: '87286542',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.75957134,
          48.7393088,
        ],
      },
      properties: {
        nom: `Tournan-en-Brie`,
        libellecourt: 'TOU',
        segment_drg: 'B',
        codeinsee: '77470',
        codes_uic: '87116210',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2389703,
          43.1836066,
        ],
      },
      properties: {
        nom: `Tournay`,
        libellecourt: 'TRY',
        segment_drg: 'C',
        codeinsee: '65447',
        codes_uic: '87671172',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0166261,
          43.9698002,
        ],
      },
      properties: {
        nom: `Tournemire - Roquefort`,
        libellecourt: 'TEO',
        segment_drg: 'C',
        codeinsee: '12282',
        codes_uic: '87783456',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.906647,
          46.56668,
        ],
      },
      properties: {
        nom: `Tournus`,
        libellecourt: 'TOS',
        segment_drg: 'B',
        codeinsee: '71543',
        codes_uic: '87725622',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.693703,
          47.389781,
        ],
      },
      properties: {
        nom: `Tours`,
        libellecourt: 'TRS',
        segment_drg: 'A',
        codeinsee: '37261',
        codes_uic: '87571000',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.098964,
          49.3248177,
        ],
      },
      properties: {
        nom: `Tourville-la-Rivière`,
        libellecourt: 'TVI',
        segment_drg: 'C',
        codeinsee: '76705',
        codes_uic: '87411181',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.939565,
          48.193606,
        ],
      },
      properties: {
        nom: `Toury`,
        libellecourt: 'TYK',
        segment_drg: 'B',
        codeinsee: '28391',
        codes_uic: '87543074',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8804164,
          47.3376398,
        ],
      },
      properties: {
        nom: `Tracy - Sancerre`,
        libellecourt: 'TAY',
        segment_drg: 'C',
        codeinsee: '58295',
        codes_uic: '87696161',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.1349542664976724,
          48.74858987607243,
        ],
      },
      properties: {
        nom: `Traou Nez`,
        libellecourt: 'TNZ',
        segment_drg: 'C',
        codeinsee: '22196',
        codes_uic: '87322347',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0066335,
          48.7751158,
        ],
      },
      properties: {
        nom: `Trappes`,
        libellecourt: 'TVO',
        segment_drg: 'B',
        codeinsee: '78621',
        codes_uic: '87393835',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -3.1742524,
          48.6243578,
        ],
      },
      properties: {
        nom: `Trégonneau - Squiffiec`,
        libellecourt: 'TGS',
        segment_drg: 'C',
        codeinsee: '22338',
        codes_uic: '87473819',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.4696,
          47.45272,
        ],
      },
      properties: {
        nom: `Trélazé`,
        libellecourt: 'TLZ',
        segment_drg: 'C',
        codeinsee: '49353',
        codes_uic: '87701532',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8303278,
          44.8625105,
        ],
      },
      properties: {
        nom: `Trémolat`,
        libellecourt: 'TMA',
        segment_drg: 'C',
        codeinsee: '24558',
        codes_uic: '87584474',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5815586,
          49.5619878,
        ],
      },
      properties: {
        nom: `Tricot`,
        libellecourt: 'TTR',
        segment_drg: 'C',
        codeinsee: '60643',
        codes_uic: '87313353',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.8180386,
          49.2827168,
        ],
      },
      properties: {
        nom: `Trie-Château`,
        libellecourt: 'TRH',
        segment_drg: 'C',
        codeinsee: '60644',
        codes_uic: '87381236',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.00577,
          48.98099,
        ],
      },
      properties: {
        nom: `Triel-sur-Seine`,
        libellecourt: 'TSS',
        segment_drg: 'B',
        codeinsee: '78624',
        codes_uic: '87381806',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.94953688,
          48.96013551,
        ],
      },
      properties: {
        nom: `Trilport`,
        libellecourt: 'TLP',
        segment_drg: 'B',
        codeinsee: '77475',
        codes_uic: '87116491',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4893247,
          50.3318146,
        ],
      },
      properties: {
        nom: `Trith-Saint-Léger`,
        libellecourt: 'TSL',
        segment_drg: 'C',
        codeinsee: '59603',
        codes_uic: '87343400',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.8462281,
          47.6480822,
        ],
      },
      properties: {
        nom: `Trois Chênes`,
        libellecourt: 'TCS',
        segment_drg: 'C',
        codeinsee: '90010',
        codes_uic: '87184242',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0541532,
          47.113029,
        ],
      },
      properties: {
        nom: `Tronsanges`,
        libellecourt: 'TSG',
        segment_drg: 'C',
        codeinsee: '58298',
        codes_uic: '87696203',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.084167,
          49.360005,
        ],
      },
      properties: {
        nom: `Trouville - Deauville`,
        libellecourt: 'TDE',
        segment_drg: 'A',
        codeinsee: '14220',
        codes_uic: '87444372',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.065281,
          48.296069,
        ],
      },
      properties: {
        nom: `Troyes`,
        libellecourt: 'TOY',
        segment_drg: 'A',
        codeinsee: '10387',
        codes_uic: '87118000',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.756467,
          45.258725,
        ],
      },
      properties: {
        nom: `Tulle`,
        libellecourt: 'TUL',
        segment_drg: 'B',
        codeinsee: '19272',
        codes_uic: '87594499',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.492194,
          45.300996,
        ],
      },
      properties: {
        nom: `Tullins Fures`,
        libellecourt: 'TLE',
        segment_drg: 'B',
        codeinsee: '38517',
        codes_uic: '87761759',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.279466,
          48.0856288,
        ],
      },
      properties: {
        nom: `Turckheim`,
        libellecourt: 'TKM',
        segment_drg: 'C',
        codeinsee: '68338',
        codes_uic: '87182352',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6007045,
          45.0379541,
        ],
      },
      properties: {
        nom: `Turenne`,
        libellecourt: 'TUR',
        segment_drg: 'C',
        codeinsee: '19273',
        codes_uic: '87594556',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.2683101,
          43.7583991,
        ],
      },
      properties: {
        nom: `Uchaud`,
        libellecourt: 'UCD',
        segment_drg: 'C',
        codeinsee: '30333',
        codes_uic: '87775106',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1567735,
          49.3032605,
        ],
      },
      properties: {
        nom: `Uckange`,
        libellecourt: 'UCK',
        segment_drg: 'B',
        codeinsee: '57683',
        codes_uic: '87191130',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9404821,
          42.457481,
        ],
      },
      properties: {
        nom: `Ur - Les Escaldes`,
        libellecourt: 'URL',
        segment_drg: 'C',
        codeinsee: '66218',
        codes_uic: '87784884',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5865708,
          46.6295123,
        ],
      },
      properties: {
        nom: `Urçay - La Perche`,
        libellecourt: 'UCY',
        segment_drg: 'C',
        codeinsee: '18178',
        codes_uic: '87576348',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3385385,
          48.5257763,
        ],
      },
      properties: {
        nom: `Urmatt`,
        libellecourt: 'URM',
        segment_drg: 'B',
        codeinsee: '67500',
        codes_uic: '87214635',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.3005564,
          43.4993785,
        ],
      },
      properties: {
        nom: `Urt`,
        libellecourt: 'URT',
        segment_drg: 'C',
        codeinsee: '64546',
        codes_uic: '87672386',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.97076,
          49.09969,
        ],
      },
      properties: {
        nom: `Us`,
        libellecourt: 'USQ',
        segment_drg: 'C',
        codeinsee: '95625',
        codes_uic: '87381178',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3143439,
          45.5574383,
        ],
      },
      properties: {
        nom: `Ussel`,
        libellecourt: 'USL',
        segment_drg: 'C',
        codeinsee: '19275',
        codes_uic: '87594093',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.4489654,
          43.4048083,
        ],
      },
      properties: {
        nom: `Ustaritz Jatxou`,
        libellecourt: 'USZ',
        segment_drg: 'C',
        codeinsee: '64547',
        codes_uic: '87673624',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5702735,
          45.4407088,
        ],
      },
      properties: {
        nom: `Uzerche`,
        libellecourt: 'URE',
        segment_drg: 'C',
        codeinsee: '19276',
        codes_uic: '87594200',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.3165096,
          47.6707702,
        ],
      },
      properties: {
        nom: `Vaas`,
        libellecourt: 'VAH',
        segment_drg: 'C',
        codeinsee: '72364',
        codes_uic: '87396598',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.639986,
          48.874953,
        ],
      },
      properties: {
        nom: `Vaires - Torcy`,
        libellecourt: 'VAI',
        segment_drg: 'B',
        codeinsee: '77108',
        codes_uic: '87116293',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.23088,
          48.95042,
        ],
      },
      properties: {
        nom: `Val d'Argenteuil`,
        libellecourt: 'VDA',
        segment_drg: 'B',
        codeinsee: '95018',
        codes_uic: '87381798',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.489097,
          48.854238,
        ],
      },
      properties: {
        nom: `Val de Fontenay`,
        libellecourt: 'VDF',
        segment_drg: 'B',
        codeinsee: '94033',
        codes_uic: '87113712',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.224147,
          49.275437,
        ],
      },
      properties: {
        nom: `Val-de-Reuil`,
        libellecourt: 'VDR',
        segment_drg: 'B',
        codeinsee: '27701',
        codes_uic: '87415877',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.22221,
          49.17792,
        ],
      },
      properties: {
        nom: `Val-de-Vesle`,
        libellecourt: 'VVM',
        segment_drg: 'C',
        codeinsee: '51571',
        codes_uic: '87171611',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.342275,
          47.14975,
        ],
      },
      properties: {
        nom: `Valdahon`,
        libellecourt: 'LVN',
        segment_drg: 'B',
        codeinsee: '25578',
        codes_uic: '87718544',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3148621,
          47.1510452,
        ],
      },
      properties: {
        nom: `Valdahon Camp Militaire`,
        libellecourt: 'VMI',
        segment_drg: 'C',
        codeinsee: '25578',
        codes_uic: '87718601',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5584442,
          47.163172,
        ],
      },
      properties: {
        nom: `Valençay`,
        libellecourt: 'VNY',
        segment_drg: 'C',
        codeinsee: '36228',
        codes_uic: '87576215',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.893273,
          44.928049,
        ],
      },
      properties: {
        nom: `Valence`,
        libellecourt: 'VCE',
        segment_drg: 'B',
        codeinsee: '26362',
        codes_uic: '87761007',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8915743,
          44.1117317,
        ],
      },
      properties: {
        nom: `Valence d'Agen`,
        libellecourt: 'VCD',
        segment_drg: 'C',
        codeinsee: '82186',
        codes_uic: '87611863',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.978703,
          44.991545,
        ],
      },
      properties: {
        nom: `Valence TGV Rhône-Alpes Sud`,
        libellecourt: 'VAL',
        segment_drg: 'A',
        codeinsee: '26004',
        codes_uic: '87763029',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.517115,
          50.363259,
        ],
      },
      properties: {
        nom: `Valenciennes`,
        libellecourt: 'VSN',
        segment_drg: 'B',
        codeinsee: '59606',
        codes_uic: '87343004',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.0601085,
          43.672678,
        ],
      },
      properties: {
        nom: `Valergues - Lansargues`,
        libellecourt: 'VGU',
        segment_drg: 'C',
        codeinsee: '34321',
        codes_uic: '87773432',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.96735,
          46.1092875,
        ],
      },
      properties: {
        nom: `Valleiry`,
        libellecourt: 'VEY',
        segment_drg: 'C',
        codeinsee: '74288',
        codes_uic: '87745414',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9360165,
          49.2056957,
        ],
      },
      properties: {
        nom: `Valleroy - Moineville`,
        libellecourt: 'VOY',
        segment_drg: 'C',
        codeinsee: '54542',
        codes_uic: '87192732',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6107538,
          46.5363284,
        ],
      },
      properties: {
        nom: `Vallon-en-Sully`,
        libellecourt: 'VLL',
        segment_drg: 'C',
        codeinsee: '03297',
        codes_uic: '87641357',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.9326694,
          46.0324983,
        ],
      },
      properties: {
        nom: `Vallorcine`,
        libellecourt: 'VLO',
        segment_drg: 'C',
        codeinsee: '74290',
        codes_uic: '87746875',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.20238,
          49.09182,
        ],
      },
      properties: {
        nom: `Valmondois`,
        libellecourt: 'VMD',
        segment_drg: 'B',
        codeinsee: '95120',
        codes_uic: '87276535',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.47986,
          49.505454,
        ],
      },
      properties: {
        nom: `Valognes`,
        libellecourt: 'VAS',
        segment_drg: 'B',
        codeinsee: '50615',
        codes_uic: '87447284',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.0392275,
          48.9521683,
        ],
      },
      properties: {
        nom: `Vandières`,
        libellecourt: 'VNU',
        segment_drg: 'C',
        codeinsee: '54546',
        codes_uic: '87192476',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.75245,
          47.665169,
        ],
      },
      properties: {
        nom: `Vannes`,
        libellecourt: 'VAN',
        segment_drg: 'A',
        codeinsee: '56260',
        codes_uic: '87476606',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2920988,
          48.8181959,
        ],
      },
      properties: {
        nom: `Vanves - Malakoff`,
        libellecourt: 'VMK',
        segment_drg: 'B',
        codeinsee: '92075',
        codes_uic: '87391532',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.019712,
          47.3744471,
        ],
      },
      properties: {
        nom: `Varades - Saint-Florent le Vieil`,
        libellecourt: 'VDE',
        segment_drg: 'C',
        codeinsee: '44213',
        codes_uic: '87484386',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.31286037,
          48.63533929,
        ],
      },
      properties: {
        nom: `Varangéville - Saint-Nicolas`,
        libellecourt: 'VRA',
        segment_drg: 'B',
        codeinsee: '54549',
        codes_uic: '87141101',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3941783,
          46.3154922,
        ],
      },
      properties: {
        nom: `Varennes-sur-Allier`,
        libellecourt: 'VAA',
        segment_drg: 'C',
        codeinsee: '03298',
        codes_uic: '87696351',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6145221,
          47.2144095,
        ],
      },
      properties: {
        nom: `Varennes-sur-Fouzon`,
        libellecourt: 'VZO',
        segment_drg: 'C',
        codeinsee: '36229',
        codes_uic: '87576231',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.4472859,
          45.1911631,
        ],
      },
      properties: {
        nom: `Varetz`,
        libellecourt: 'VEZ',
        segment_drg: 'C',
        codeinsee: '19278',
        codes_uic: '87594606',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6284818,
          43.0415593,
        ],
      },
      properties: {
        nom: `Varilhes`,
        libellecourt: 'VIH',
        segment_drg: 'C',
        codeinsee: '09324',
        codes_uic: '87611327',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.192119,
          48.7590575,
        ],
      },
      properties: {
        nom: `Vauboyen`,
        libellecourt: 'VBO',
        segment_drg: 'B',
        codeinsee: '78322',
        codes_uic: '87393538',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.22885,
          49.02193,
        ],
      },
      properties: {
        nom: `Vaucelles`,
        libellecourt: 'CHD',
        segment_drg: 'B',
        codeinsee: '95607',
        codes_uic: '87276626',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.15255,
          48.83688,
        ],
      },
      properties: {
        nom: `Vaucresson`,
        libellecourt: 'VCN',
        segment_drg: 'B',
        codeinsee: '92076',
        codes_uic: '87382267',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.7726673,
          45.9088517,
        ],
      },
      properties: {
        nom: `Vaudagne`,
        libellecourt: 'VUD',
        segment_drg: 'C',
        codeinsee: '74143',
        codes_uic: '87746727',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9885685,
          49.2339406,
        ],
      },
      properties: {
        nom: `Vaumoise`,
        libellecourt: 'VAU',
        segment_drg: 'C',
        codeinsee: '02232',
        codes_uic: '87271601',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.270165,
          43.6950375,
        ],
      },
      properties: {
        nom: `Vauvert`,
        libellecourt: 'VAT',
        segment_drg: 'C',
        codeinsee: '30341',
        codes_uic: '87775817',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.96342,
          49.00699,
        ],
      },
      properties: {
        nom: `Vaux-sur-Seine`,
        libellecourt: 'VXS',
        segment_drg: 'B',
        codeinsee: '78638',
        codes_uic: '87381814',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4096166,
          49.4741418,
        ],
      },
      properties: {
        nom: `Vauxaillon`,
        libellecourt: 'VXL',
        segment_drg: 'C',
        codeinsee: '02768',
        codes_uic: '87297283',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.1342094,
          47.0013565,
        ],
      },
      properties: {
        nom: `Vauzelles`,
        libellecourt: 'VZE',
        segment_drg: 'C',
        codeinsee: '58303',
        codes_uic: '87691469',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7062871,
          44.9501471,
        ],
      },
      properties: {
        nom: `Vayrac`,
        libellecourt: 'VAY',
        segment_drg: 'C',
        codeinsee: '46330',
        codes_uic: '87594739',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.31686,
          44.89717,
        ],
      },
      properties: {
        nom: `Vayres`,
        libellecourt: 'VYR',
        segment_drg: 'C',
        codeinsee: '33539',
        codes_uic: '87584714',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.293438,
          45.565928,
        ],
      },
      properties: {
        nom: `Veauche - Saint-Galmier`,
        libellecourt: 'SGL',
        segment_drg: 'C',
        codeinsee: '42323',
        codes_uic: '87726208',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.7348815,
          47.2915255,
        ],
      },
      properties: {
        nom: `Veigné`,
        libellecourt: 'VGZ',
        segment_drg: 'C',
        codeinsee: '37266',
        codes_uic: '87571414',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9274603,
          47.3265197,
        ],
      },
      properties: {
        nom: `Velars-sur-Ouche`,
        libellecourt: 'VLA',
        segment_drg: 'C',
        codeinsee: '21661',
        codes_uic: '87712331',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1036584,
          44.8520145,
        ],
      },
      properties: {
        nom: `Vélines`,
        libellecourt: 'VLN',
        segment_drg: 'C',
        codeinsee: '24568',
        codes_uic: '87584177',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.7177824,
          48.6659659,
        ],
      },
      properties: {
        nom: `Vendenheim`,
        libellecourt: 'VHM',
        segment_drg: 'C',
        codeinsee: '67506',
        codes_uic: '87212118',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.4672135,
          48.2400686,
        ],
      },
      properties: {
        nom: `Vendeuvre-sur-Barse`,
        libellecourt: 'VUV',
        segment_drg: 'C',
        codeinsee: '10401',
        codes_uic: '87118257',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0678728,
          47.8021498,
        ],
      },
      properties: {
        nom: `Vendôme`,
        libellecourt: 'VDM',
        segment_drg: 'C',
        codeinsee: '41269',
        codes_uic: '87574558',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.021143,
          47.821937,
        ],
      },
      properties: {
        nom: `Vendôme - Villiers-sur-Loir TGV`,
        libellecourt: 'VDT',
        segment_drg: 'A',
        codeinsee: '41269',
        codes_uic: '87571216',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.426079,
          43.433361,
        ],
      },
      properties: {
        nom: `Venerque - Vernet`,
        libellecourt: 'VQV',
        segment_drg: 'B',
        codeinsee: '31574',
        codes_uic: '87611392',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.888109,
          45.705551,
        ],
      },
      properties: {
        nom: `Vénissieux`,
        libellecourt: 'VSX',
        segment_drg: 'B',
        codeinsee: '69259',
        codes_uic: '87723320',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.379701,
          49.165406,
        ],
      },
      properties: {
        nom: `Verdun`,
        libellecourt: 'VDN',
        segment_drg: 'B',
        codeinsee: '55545',
        codes_uic: '87175778',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.8199079,
          47.3715058,
        ],
      },
      properties: {
        nom: `Véretz - Montlouis`,
        libellecourt: 'VZM',
        segment_drg: 'C',
        codeinsee: '37156',
        codes_uic: '87574434',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.218842,
          43.739877,
        ],
      },
      properties: {
        nom: `Vergèze - Codognan`,
        libellecourt: 'VZC',
        segment_drg: 'B',
        codeinsee: '30344',
        codes_uic: '87775114',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.7320212,
          47.6605943,
        ],
      },
      properties: {
        nom: `Vermenton`,
        libellecourt: 'VEE',
        segment_drg: 'C',
        codeinsee: '89441',
        codes_uic: '87683664',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.5966524,
          48.0469707,
        ],
      },
      properties: {
        nom: `Vern-sur-Seiche`,
        libellecourt: 'VRN',
        segment_drg: 'C',
        codeinsee: '35352',
        codes_uic: '87471029',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8132908,
          45.6456478,
        ],
      },
      properties: {
        nom: `Vernaison`,
        libellecourt: 'VNI',
        segment_drg: 'C',
        codeinsee: '69260',
        codes_uic: '87722264',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.825006,
          48.644689,
        ],
      },
      properties: {
        nom: `Verneuil-l'Étang`,
        libellecourt: 'VNL',
        segment_drg: 'B',
        codeinsee: '77493',
        codes_uic: '87116079',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.9291925,
          48.7424857,
        ],
      },
      properties: {
        nom: `Verneuil-sur-Avre`,
        libellecourt: 'VEA',
        segment_drg: 'C',
        codeinsee: '27679',
        codes_uic: '87393595',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6677085,
          49.6486805,
        ],
      },
      properties: {
        nom: `Verneuil-sur-Serre`,
        libellecourt: 'VRL',
        segment_drg: 'C',
        codeinsee: '02787',
        codes_uic: '87297119',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.47857,
          49.091336,
        ],
      },
      properties: {
        nom: `Vernon - Giverny`,
        libellecourt: 'VNO',
        segment_drg: 'B',
        codeinsee: '27681',
        codes_uic: '87415604',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8424649,
          48.3864547,
        ],
      },
      properties: {
        nom: `Vernou-la-Celle-sur-Seine`,
        libellecourt: 'VSS',
        segment_drg: 'C',
        codeinsee: '77494',
        codes_uic: '87682468',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9828731,
          48.9811884,
        ],
      },
      properties: {
        nom: `Vernouillet - Verneuil`,
        libellecourt: 'VET',
        segment_drg: 'B',
        codeinsee: '78642',
        codes_uic: '87386656',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.6700223,
          47.4385905,
        ],
      },
      properties: {
        nom: `Verrey-sous-Salmaise`,
        libellecourt: 'VRR',
        segment_drg: 'C',
        codeinsee: '21670',
        codes_uic: '87713081',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1358827,
          48.7958264,
        ],
      },
      properties: {
        nom: `Versailles Chantiers`,
        libellecourt: 'VCR',
        segment_drg: 'B',
        codeinsee: '78646',
        codes_uic: '87393009',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1288274,
          48.8003635,
        ],
      },
      properties: {
        nom: `Versailles Château Rive Gauche`,
        libellecourt: 'VRG',
        segment_drg: 'B',
        codeinsee: '78646',
        codes_uic: '87393157',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1347523,
          48.8096525,
        ],
      },
      properties: {
        nom: `Versailles Rive Droite`,
        libellecourt: 'VRD',
        segment_drg: 'B',
        codeinsee: '78646',
        codes_uic: '87382861',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4335692,
          49.6574494,
        ],
      },
      properties: {
        nom: `Versigny`,
        libellecourt: 'VSI',
        segment_drg: 'C',
        codeinsee: '02788',
        codes_uic: '87296608',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5667,
          48.94467,
        ],
      },
      properties: {
        nom: `Vert Galant`,
        libellecourt: 'VGL',
        segment_drg: 'B',
        codeinsee: '93078',
        codes_uic: '87271437',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.288269,
          45.784543,
        ],
      },
      properties: {
        nom: `Vertaizon`,
        libellecourt: 'VTZ',
        segment_drg: 'B',
        codeinsee: '63453',
        codes_uic: '87734426',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.4780052,
          47.1861428,
        ],
      },
      properties: {
        nom: `Vertou`,
        libellecourt: 'VTU',
        segment_drg: 'C',
        codeinsee: '44215',
        codes_uic: '87481408',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.8936313,
          49.8299236,
        ],
      },
      properties: {
        nom: `Vervins`,
        libellecourt: 'VEV',
        segment_drg: 'C',
        codeinsee: '02789',
        codes_uic: '87296129',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3212626,
          43.1304633,
        ],
      },
      properties: {
        nom: `Verzeille`,
        libellecourt: 'VRZ',
        segment_drg: 'C',
        codeinsee: '11201',
        codes_uic: '87615138',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.151926,
          47.6177734,
        ],
      },
      properties: {
        nom: `Vesoul`,
        libellecourt: 'VES',
        segment_drg: 'B',
        codeinsee: '70550',
        codes_uic: '87185009',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.1238749,
          47.4756722,
        ],
      },
      properties: {
        nom: `Veuves - Monteaux`,
        libellecourt: 'VVU',
        segment_drg: 'C',
        codeinsee: '41272',
        codes_uic: '87574327',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.815764,
          44.5320046,
        ],
      },
      properties: {
        nom: `Veynes Dévoluy`,
        libellecourt: 'VDY',
        segment_drg: 'C',
        codeinsee: '05179',
        codes_uic: '87763300',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.1006508,
          48.4805518,
        ],
      },
      properties: {
        nom: `Vézelise`,
        libellecourt: 'VZL',
        segment_drg: 'C',
        codeinsee: '54563',
        codes_uic: '87141606',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.7850134,
          45.897096,
        ],
      },
      properties: {
        nom: `Viaduc Sainte-Marie`,
        libellecourt: 'VDU',
        segment_drg: 'C',
        codeinsee: '74143',
        codes_uic: '87746735',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.36838,
          49.11692,
        ],
      },
      properties: {
        nom: `Viarmes`,
        libellecourt: 'VCX',
        segment_drg: 'B',
        codeinsee: '95652',
        codes_uic: '87276568',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.4253562,
          43.315653,
        ],
      },
      properties: {
        nom: `Vias`,
        libellecourt: 'VAB',
        segment_drg: 'C',
        codeinsee: '34332',
        codes_uic: '87781260',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.7994505,
          43.5007687,
        ],
      },
      properties: {
        nom: `Vic - Mireval`,
        libellecourt: 'VIC',
        segment_drg: 'C',
        codeinsee: '34333',
        codes_uic: '87773531',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.207079,
          45.664911,
        ],
      },
      properties: {
        nom: `Vic-le-Comte`,
        libellecourt: 'VLC',
        segment_drg: 'B',
        codeinsee: '63457',
        codes_uic: '87734186',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6316644,
          44.975877,
        ],
      },
      properties: {
        nom: `Vic-sur-Cère`,
        libellecourt: 'VCM',
        segment_drg: 'C',
        codeinsee: '15258',
        codes_uic: '87645440',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.430448,
          46.126979,
        ],
      },
      properties: {
        nom: `Vichy`,
        libellecourt: 'VHY',
        segment_drg: 'B',
        codeinsee: '03310',
        codes_uic: '87732008',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.4338501,
          43.4309416,
        ],
      },
      properties: {
        nom: `Vidauban`,
        libellecourt: 'VUB',
        segment_drg: 'C',
        codeinsee: '83148',
        codes_uic: '87755421',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6736439,
          46.0910959,
        ],
      },
      properties: {
        nom: `Vieilleville`,
        libellecourt: 'VVL',
        segment_drg: 'C',
        codeinsee: '23137',
        codes_uic: '87597633',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0895781,
          43.623928,
        ],
      },
      properties: {
        nom: `Vielmur-sur-Agout`,
        libellecourt: 'VUG',
        segment_drg: 'C',
        codeinsee: '81315',
        codes_uic: '87615492',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.874211,
          45.521207,
        ],
      },
      properties: {
        nom: `Vienne`,
        libellecourt: 'VIE',
        segment_drg: 'B',
        codeinsee: '38544',
        codes_uic: '87722587',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.059822,
          47.226497,
        ],
      },
      properties: {
        nom: `Vierzon`,
        libellecourt: 'VER',
        segment_drg: 'A',
        codeinsee: '18279',
        codes_uic: '87576009',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0994545,
          47.2099931,
        ],
      },
      properties: {
        nom: `Vierzon Forges`,
        libellecourt: 'VFO',
        segment_drg: 'C',
        codeinsee: '18279',
        codes_uic: '87576090',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2773026,
          49.2910309,
        ],
      },
      properties: {
        nom: `Vierzy`,
        libellecourt: 'VYA',
        segment_drg: 'C',
        codeinsee: '02799',
        codes_uic: '87271783',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1194904,
          47.8058505,
        ],
      },
      properties: {
        nom: `Vieux-Thann`,
        libellecourt: 'VXT',
        segment_drg: 'B',
        codeinsee: '68348',
        codes_uic: '87182550',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1326428,
          47.8020615,
        ],
      },
      properties: {
        nom: `Vieux-Thann Zone Industrielle`,
        libellecourt: 'VXZ',
        segment_drg: 'C',
        codeinsee: '68348',
        codes_uic: '87181289',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.5627976,
          44.1125561,
        ],
      },
      properties: {
        nom: `Viévola`,
        libellecourt: 'VVA',
        segment_drg: 'C',
        codeinsee: '06163',
        codes_uic: '87756890',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.6854542,
          45.0476532,
        ],
      },
      properties: {
        nom: `Vif`,
        libellecourt: 'VIF',
        segment_drg: 'C',
        codeinsee: '38545',
        codes_uic: '87747576',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.5149455,
          45.3829467,
        ],
      },
      properties: {
        nom: `Vigeois`,
        libellecourt: 'VGE',
        segment_drg: 'C',
        codeinsee: '19285',
        codes_uic: '87594218',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.41446,
          48.70816,
        ],
      },
      properties: {
        nom: `Vigneux-sur-Seine`,
        libellecourt: 'VGS',
        segment_drg: 'B',
        codeinsee: '91657',
        codes_uic: '87681304',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.397515,
          45.313078,
        ],
      },
      properties: {
        nom: `Vignols - Saint-Solve`,
        libellecourt: 'VSO',
        segment_drg: 'C',
        codeinsee: '19242',
        codes_uic: '87594655',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1241594,
          48.2701366,
        ],
      },
      properties: {
        nom: `Vignory`,
        libellecourt: 'VNR',
        segment_drg: 'C',
        codeinsee: '52524',
        codes_uic: '87142232',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.461572,
          48.592637,
        ],
      },
      properties: {
        nom: `Villabé`,
        libellecourt: 'VBV',
        segment_drg: 'B',
        codeinsee: '91659',
        codes_uic: '87681619',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3513736,
          49.0798273,
        ],
      },
      properties: {
        nom: `Villaines-sous-Bois`,
        libellecourt: 'VWG',
        segment_drg: 'C',
        codeinsee: '95056',
        codes_uic: '87272021',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.028404,
          46.004206,
        ],
      },
      properties: {
        nom: `Villars-les-Dombes`,
        libellecourt: 'VLD',
        segment_drg: 'B',
        codeinsee: '01443',
        codes_uic: '87723759',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.225559,
          48.8340495,
        ],
      },
      properties: {
        nom: `Villedieu-les-Poêles`,
        libellecourt: 'VDS',
        segment_drg: 'C',
        codeinsee: '50639',
        codes_uic: '87447698',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.9240146,
          44.4395099,
        ],
      },
      properties: {
        nom: `Villefort`,
        libellecourt: 'VLF',
        segment_drg: 'C',
        codeinsee: '48198',
        codes_uic: '87775197',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.370396,
          42.591998,
        ],
      },
      properties: {
        nom: `Villefranche - Vernet-les-Bains`,
        libellecourt: 'VVB',
        segment_drg: 'B',
        codeinsee: '66085',
        codes_uic: '87784686',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.714725,
          43.398537,
        ],
      },
      properties: {
        nom: `Villefranche-de-Lauragais`,
        libellecourt: 'VDL',
        segment_drg: 'B',
        codeinsee: '31582',
        codes_uic: '87615013',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.0364594,
          44.347498,
        ],
      },
      properties: {
        nom: `Villefranche-de-Rouergue`,
        libellecourt: 'VRW',
        segment_drg: 'C',
        codeinsee: '12300',
        codes_uic: '87613893',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.0490908,
          44.6270124,
        ],
      },
      properties: {
        nom: `Villefranche-du-Périgord`,
        libellecourt: 'VPD',
        segment_drg: 'C',
        codeinsee: '24245',
        codes_uic: '87595892',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.768094,
          47.2948034,
        ],
      },
      properties: {
        nom: `Villefranche-sur-Cher`,
        libellecourt: 'VSC',
        segment_drg: 'C',
        codeinsee: '41280',
        codes_uic: '87576884',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.314129,
          43.707061,
        ],
      },
      properties: {
        nom: `Villefranche-sur-Mer`,
        libellecourt: 'VFH',
        segment_drg: 'B',
        codeinsee: '06159',
        codes_uic: '87756361',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.72077,
          45.9845,
        ],
      },
      properties: {
        nom: `Villefranche-sur-Saône`,
        libellecourt: 'VIS',
        segment_drg: 'B',
        codeinsee: '69264',
        codes_uic: '87721332',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.4564514,
          43.4313998,
        ],
      },
      properties: {
        nom: `Villefranque`,
        libellecourt: 'VQE',
        segment_drg: 'C',
        codeinsee: '64558',
        codes_uic: '87673616',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.7972555,
          47.3694005,
        ],
      },
      properties: {
        nom: `Villeherviers`,
        libellecourt: 'VHV',
        segment_drg: 'C',
        codeinsee: '41282',
        codes_uic: '87576165',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5472574,
          44.7683428,
        ],
      },
      properties: {
        nom: `Villenave-d'Ornon`,
        libellecourt: 'VIO',
        segment_drg: 'C',
        codeinsee: '33550',
        codes_uic: '87581835',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.438192,
          48.745198,
        ],
      },
      properties: {
        nom: `Villeneuve Triage`,
        libellecourt: 'VSG',
        segment_drg: 'B',
        codeinsee: '94078',
        codes_uic: '87681809',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.5130717,
          46.0986599,
        ],
      },
      properties: {
        nom: `Villeneuve-la-Comtesse`,
        libellecourt: 'VVK',
        segment_drg: 'C',
        codeinsee: '17474',
        codes_uic: '87491258',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.071655,
          48.342425,
        ],
      },
      properties: {
        nom: `Villeneuve-la-Guyard`,
        libellecourt: 'VVG',
        segment_drg: 'B',
        codeinsee: '89460',
        codes_uic: '87683102',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.426084,
          48.739908,
        ],
      },
      properties: {
        nom: `Villeneuve-le-Roi`,
        libellecourt: 'VRI',
        segment_drg: 'B',
        codeinsee: '94077',
        codes_uic: '87545277',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.849917,
          43.5438231,
        ],
      },
      properties: {
        nom: `Villeneuve-lès-Maguelone`,
        libellecourt: 'VLM',
        segment_drg: 'C',
        codeinsee: '34337',
        codes_uic: '87773515',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.134066,
          43.629928,
        ],
      },
      properties: {
        nom: `Villeneuve-Loubet`,
        libellecourt: 'VVP',
        segment_drg: 'B',
        codeinsee: '06161',
        codes_uic: '87756304',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.446011,
          48.730113,
        ],
      },
      properties: {
        nom: `Villeneuve-Saint-Georges`,
        libellecourt: 'VSB',
        segment_drg: 'B',
        codeinsee: '94078',
        codes_uic: '87681825',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2469557,
          46.6592073,
        ],
      },
      properties: {
        nom: `Villeneuve-sur-Allier`,
        libellecourt: 'VVR',
        segment_drg: 'C',
        codeinsee: '03316',
        codes_uic: '87696310',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2869251,
          48.0850129,
        ],
      },
      properties: {
        nom: `Villeneuve-sur-Yonne`,
        libellecourt: 'VYE',
        segment_drg: 'C',
        codeinsee: '89464',
        codes_uic: '87683219',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9993185,
          48.9394602,
        ],
      },
      properties: {
        nom: `Villennes-sur-Seine`,
        libellecourt: 'VSW',
        segment_drg: 'B',
        codeinsee: '78672',
        codes_uic: '87386649',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.661081,
          43.4330358,
        ],
      },
      properties: {
        nom: `Villenouvelle`,
        libellecourt: 'VNW',
        segment_drg: 'C',
        codeinsee: '31589',
        codes_uic: '87618215',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.60243,
          48.95325,
        ],
      },
      properties: {
        nom: `Villeparisis - Mitry-le-Neuf`,
        libellecourt: 'VII',
        segment_drg: 'B',
        codeinsee: '77294',
        codes_uic: '87271510',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.6336449,
          47.2020438,
        ],
      },
      properties: {
        nom: `Villeperdue`,
        libellecourt: 'VIP',
        segment_drg: 'C',
        codeinsee: '37278',
        codes_uic: '87575043',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.51205,
          48.96292,
        ],
      },
      properties: {
        nom: `Villepinte`,
        libellecourt: 'VPN',
        segment_drg: 'B',
        codeinsee: '93078',
        codes_uic: '87271452',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.9930652,
          48.8239168,
        ],
      },
      properties: {
        nom: `Villepreux - Les Clayes`,
        libellecourt: 'VEP',
        segment_drg: 'B',
        codeinsee: '78165',
        codes_uic: '87393413',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.3977089,
          46.1944145,
        ],
      },
      properties: {
        nom: `Villereversure`,
        libellecourt: 'VEU',
        segment_drg: 'C',
        codeinsee: '01447',
        codes_uic: '87743328',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.52141,
          49.86295,
        ],
      },
      properties: {
        nom: `Villers-Bretonneux`,
        libellecourt: 'VLT',
        segment_drg: 'B',
        codeinsee: '80799',
        codes_uic: '87313437',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0937,
          49.25026,
        ],
      },
      properties: {
        nom: `Villers-Cotterêts`,
        libellecourt: 'VCT',
        segment_drg: 'B',
        codeinsee: '02810',
        codes_uic: '87271734',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4899067,
          49.2825762,
        ],
      },
      properties: {
        nom: `Villers-Saint-Paul`,
        libellecourt: 'VPL',
        segment_drg: 'C',
        codeinsee: '60684',
        codes_uic: '87276378',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2204386,
          49.3680779,
        ],
      },
      properties: {
        nom: `Villers-Saint-Sépulcre`,
        libellecourt: 'ULC',
        segment_drg: 'C',
        codeinsee: '60685',
        codes_uic: '87313593',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.0099283,
          49.3159865,
        ],
      },
      properties: {
        nom: `Villers-sur-Mer`,
        libellecourt: 'VIU',
        segment_drg: 'C',
        codeinsee: '14754',
        codes_uic: '87444398',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.34251,
          48.96,
        ],
      },
      properties: {
        nom: `Villetaneuse Université`,
        libellecourt: 'VTN',
        segment_drg: 'B',
        codeinsee: '93031',
        codes_uic: '87697318',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.876934489891097,
          48.81550666129636,
        ],
      },
      properties: {
        nom: `Villiers - Neauphle - Pontchartrain`,
        libellecourt: 'VEH',
        segment_drg: 'B',
        codeinsee: '78683',
        codes_uic: '87393884',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8830418,
          48.8632544,
        ],
      },
      properties: {
        nom: `Villiers Montbarbin`,
        libellecourt: 'VBB',
        segment_drg: 'C',
        codeinsee: '77142',
        codes_uic: '87116749',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.4162288,
          48.994175,
        ],
      },
      properties: {
        nom: `Villiers-le-Bel - Gonesse - Arnouville`,
        libellecourt: 'VIB',
        segment_drg: 'B',
        codeinsee: '95019',
        codes_uic: '87276220',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.541761,
          48.823039,
        ],
      },
      properties: {
        nom: `Villiers-sur-Marne - Le Plessis-Trévise`,
        libellecourt: 'VSM',
        segment_drg: 'B',
        codeinsee: '94079',
        codes_uic: '87113795',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.8229549,
          50.3732316,
        ],
      },
      properties: {
        nom: `Vimy`,
        libellecourt: 'VMY',
        segment_drg: 'C',
        codeinsee: '62861',
        codes_uic: '87342576',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.41005,
          45.20797,
        ],
      },
      properties: {
        nom: `Vinay`,
        libellecourt: 'VNA',
        segment_drg: 'B',
        codeinsee: '38559',
        codes_uic: '87761726',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5276163,
          42.6481368,
        ],
      },
      properties: {
        nom: `Vinça`,
        libellecourt: 'VCA',
        segment_drg: 'C',
        codeinsee: '66230',
        codes_uic: '87784611',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.6284728,
          47.7042304,
        ],
      },
      properties: {
        nom: `Vincelles`,
        libellecourt: 'VCL',
        segment_drg: 'C',
        codeinsee: '89478',
        codes_uic: '87683631',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3355129,
          48.3436471,
        ],
      },
      properties: {
        nom: `Vincey`,
        libellecourt: 'VCY',
        segment_drg: 'C',
        codeinsee: '88355',
        codes_uic: '87144063',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.8072311,
          45.8243131,
        ],
      },
      properties: {
        nom: `Vions - Chanaz`,
        libellecourt: 'VOZ',
        segment_drg: 'C',
        codeinsee: '73327',
        codes_uic: '87741108',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.882884,
          48.846329,
        ],
      },
      properties: {
        nom: `Vire`,
        libellecourt: 'VIR',
        segment_drg: 'C',
        codeinsee: '14762',
        codes_uic: '87448159',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.7233909,
          50.0827968,
        ],
      },
      properties: {
        nom: `Vireux-Molhain`,
        libellecourt: 'VRX',
        segment_drg: 'C',
        codeinsee: '08486',
        codes_uic: '87172114',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.4721424,
          45.491703,
        ],
      },
      properties: {
        nom: `Virieu sur Bourbre`,
        libellecourt: 'VRB',
        segment_drg: 'C',
        codeinsee: '38293',
        codes_uic: '87747204',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.6536162,
          45.8482817,
        ],
      },
      properties: {
        nom: `Virieu-le-Grand - Belley`,
        libellecourt: 'VRU',
        segment_drg: 'C',
        codeinsee: '01452',
        codes_uic: '87741504',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1683208,
          48.8056695,
        ],
      },
      properties: {
        nom: `Viroflay Rive Droite`,
        libellecourt: 'VFD',
        segment_drg: 'B',
        codeinsee: '78686',
        codes_uic: '87382887',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.1711466,
          48.800517,
        ],
      },
      properties: {
        nom: `Viroflay Rive Gauche`,
        libellecourt: 'VFG',
        segment_drg: 'B',
        codeinsee: '78686',
        codes_uic: '87393215',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.386391,
          48.676182,
        ],
      },
      properties: {
        nom: `Viry-Châtillon`,
        libellecourt: 'VWC',
        segment_drg: 'B',
        codeinsee: '91687',
        codes_uic: '87681312',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.2503611,
          49.6274493,
        ],
      },
      properties: {
        nom: `Viry-Noureuil`,
        libellecourt: 'VWN',
        segment_drg: 'C',
        codeinsee: '02820',
        codes_uic: '87297051',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5171137,
          50.5050115,
        ],
      },
      properties: {
        nom: `Vis à Marles`,
        libellecourt: 'VML',
        segment_drg: 'C',
        codeinsee: '62489',
        codes_uic: '87342535',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -1.211754,
          48.122671,
        ],
      },
      properties: {
        nom: `Vitré`,
        libellecourt: 'VTE',
        segment_drg: 'B',
        codeinsee: '35360',
        codes_uic: '87471508',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.237122,
          43.441734,
        ],
      },
      properties: {
        nom: `Vitrolles Aéroport Marseille Provence`,
        libellecourt: 'AYD',
        segment_drg: 'B',
        codeinsee: '13117',
        codes_uic: '87439554',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.9820833,
          50.3276092,
        ],
      },
      properties: {
        nom: `Vitry-en-Artois`,
        libellecourt: 'VYN',
        segment_drg: 'C',
        codeinsee: '62865',
        codes_uic: '87342113',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.587581,
          48.718142,
        ],
      },
      properties: {
        nom: `Vitry-le-François`,
        libellecourt: 'VYF',
        segment_drg: 'B',
        codeinsee: '51649',
        codes_uic: '87174276',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.402229,
          48.800768,
        ],
      },
      properties: {
        nom: `Vitry-sur-Seine`,
        libellecourt: 'VYB',
        segment_drg: 'B',
        codeinsee: '94081',
        codes_uic: '87545293',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9418718,
          48.2024882,
        ],
      },
      properties: {
        nom: `Vittel`,
        libellecourt: 'VIT',
        segment_drg: 'C',
        codeinsee: '88516',
        codes_uic: '87144279',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.9033389,
          45.648502,
        ],
      },
      properties: {
        nom: `Viviers-du-Lac`,
        libellecourt: 'VDX',
        segment_drg: 'C',
        codeinsee: '73328',
        codes_uic: '87741140',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2182582,
          44.5555678,
        ],
      },
      properties: {
        nom: `Viviez - Decazeville`,
        libellecourt: 'VZI',
        segment_drg: 'C',
        codeinsee: '12305',
        codes_uic: '87613661',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.1447829,
          48.2302093,
        ],
      },
      properties: {
        nom: `Vivoin - Beaumont`,
        libellecourt: 'VBT',
        segment_drg: 'C',
        codeinsee: '72380',
        codes_uic: '87396077',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.2653156,
          46.4266355,
        ],
      },
      properties: {
        nom: `Vivonne`,
        libellecourt: 'VIV',
        segment_drg: 'C',
        codeinsee: '86293',
        codes_uic: '87575290',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.595054,
          45.364037,
        ],
      },
      properties: {
        nom: `Voiron`,
        libellecourt: 'VOR',
        segment_drg: 'B',
        codeinsee: '38563',
        codes_uic: '87747287',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.0853466,
          47.9304199,
        ],
      },
      properties: {
        nom: `Voivres-lès-le-Mans`,
        libellecourt: 'VOI',
        segment_drg: 'C',
        codeinsee: '72381',
        codes_uic: '87396358',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0031455,
          45.864715,
        ],
      },
      properties: {
        nom: `Volvic`,
        libellecourt: 'VOL',
        segment_drg: 'C',
        codeinsee: '63470',
        codes_uic: '87641423',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9916677,
          46.2272852,
        ],
      },
      properties: {
        nom: `Vonnas`,
        libellecourt: 'VNS',
        segment_drg: 'C',
        codeinsee: '01457',
        codes_uic: '87725820',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.632119,
          45.290417,
        ],
      },
      properties: {
        nom: `Voreppe`,
        libellecourt: 'VPE',
        segment_drg: 'B',
        codeinsee: '38565',
        codes_uic: '87747337',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.911422,
          45.1829093,
        ],
      },
      properties: {
        nom: `Vorey`,
        libellecourt: 'VOE',
        segment_drg: 'C',
        codeinsee: '43267',
        codes_uic: '87734723',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.5991469,
          48.5151115,
        ],
      },
      properties: {
        nom: `Vosves`,
        libellecourt: 'VOM',
        segment_drg: 'C',
        codeinsee: '77152',
        codes_uic: '87682500',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.9715685,
          47.1755556,
        ],
      },
      properties: {
        nom: `Vougeot - Gilly-lès-Cîteaux`,
        libellecourt: 'VOT',
        segment_drg: 'C',
        codeinsee: '21297',
        codes_uic: '87713511',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.7699667,
          47.4789729,
        ],
      },
      properties: {
        nom: `Voujeaucourt`,
        libellecourt: 'VJT',
        segment_drg: 'C',
        codeinsee: '25632',
        codes_uic: '87184531',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.2921804,
          48.1340521,
        ],
      },
      properties: {
        nom: `Voutré`,
        libellecourt: 'VOU',
        segment_drg: 'C',
        codeinsee: '53276',
        codes_uic: '87478560',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6222874,
          48.2750095,
        ],
      },
      properties: {
        nom: `Voves`,
        libellecourt: 'VOV',
        segment_drg: 'C',
        codeinsee: '28422',
        codes_uic: '87545707',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.7202555,
          49.7260708,
        ],
      },
      properties: {
        nom: `Voyenne`,
        libellecourt: 'VYS',
        segment_drg: 'C',
        codeinsee: '02827',
        codes_uic: '87297150',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          5.1239383,
          48.2366981,
        ],
      },
      properties: {
        nom: `Vraincourt - Viéville`,
        libellecourt: 'VWV',
        segment_drg: 'C',
        codeinsee: '52548',
        codes_uic: '87143024',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          4.8438063,
          49.7010822,
        ],
      },
      properties: {
        nom: `Vrigne-Meuse`,
        libellecourt: 'VRM',
        segment_drg: 'C',
        codeinsee: '08492',
        codes_uic: '87172221',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.7531008,
          48.4305468,
        ],
      },
      properties: {
        nom: `Vulaines-sur-Seine - Samoreau`,
        libellecourt: 'VUN',
        segment_drg: 'C',
        codeinsee: '77533',
        codes_uic: '87682443',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.6116581,
          49.5032575,
        ],
      },
      properties: {
        nom: `Wacquemoulin`,
        libellecourt: 'WAC',
        segment_drg: 'C',
        codeinsee: '60698',
        codes_uic: '87316208',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2334758,
          48.0580062,
        ],
      },
      properties: {
        nom: `Walbach`,
        libellecourt: 'WAH',
        segment_drg: 'C',
        codeinsee: '68374',
        codes_uic: '87182360',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.8092705,
          48.8862164,
        ],
      },
      properties: {
        nom: `Walbourg`,
        libellecourt: 'WAL',
        segment_drg: 'C',
        codeinsee: '67511',
        codes_uic: '87213405',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2633202,
          47.6416406,
        ],
      },
      properties: {
        nom: `Walheim`,
        libellecourt: 'WHM',
        segment_drg: 'C',
        codeinsee: '68356',
        codes_uic: '87181065',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.15946,
          49.22492,
        ],
      },
      properties: {
        nom: `Waligator Parc`,
        libellecourt: 'WAB',
        segment_drg: 'C',
        codeinsee: '57433',
        codes_uic: '87191098',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3937454,
          50.384611,
        ],
      },
      properties: {
        nom: `Wallers`,
        libellecourt: 'WSB',
        segment_drg: 'C',
        codeinsee: '59632',
        codes_uic: '87343301',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.3114074,
          50.1338767,
        ],
      },
      properties: {
        nom: `Wambaix`,
        libellecourt: 'WAM',
        segment_drg: 'C',
        codeinsee: '59635',
        codes_uic: '87345595',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.0402974,
          50.6812648,
        ],
      },
      properties: {
        nom: `Wambrechies`,
        libellecourt: 'WBC',
        segment_drg: 'C',
        codeinsee: '59636',
        codes_uic: '87286229',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.2079599,
          50.8254043,
        ],
      },
      properties: {
        nom: `Watten - Éperlecques`,
        libellecourt: 'WAP',
        segment_drg: 'C',
        codeinsee: '62297',
        codes_uic: '87281436',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          3.051975,
          50.5793139,
        ],
      },
      properties: {
        nom: `Wattignies - Templemars`,
        libellecourt: 'WAT',
        segment_drg: 'C',
        codeinsee: '59585',
        codes_uic: '87286526',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.93672,
          50.57443,
        ],
      },
      properties: {
        nom: `Wavrin`,
        libellecourt: 'WAV',
        segment_drg: 'C',
        codeinsee: '59653',
        codes_uic: '87286419',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.997519,
          47.8899651,
        ],
      },
      properties: {
        nom: `Wesserling`,
        libellecourt: 'WES',
        segment_drg: 'C',
        codeinsee: '68089',
        codes_uic: '87182618',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.7971027,
          48.7177903,
        ],
      },
      properties: {
        nom: `Weyersheim`,
        libellecourt: 'WEY',
        segment_drg: 'B',
        codeinsee: '67529',
        codes_uic: '87213678',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2095351,
          48.0460522,
        ],
      },
      properties: {
        nom: `Wihr-au-Val - Soultzbach`,
        libellecourt: 'WIH',
        segment_drg: 'C',
        codeinsee: '68368',
        codes_uic: '87182378',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.0693196,
          47.8425494,
        ],
      },
      properties: {
        nom: `Willer-sur-Thur`,
        libellecourt: 'WIL',
        segment_drg: 'C',
        codeinsee: '68372',
        codes_uic: '87182584',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.5077599,
          48.745831,
        ],
      },
      properties: {
        nom: `Wilwisheim`,
        libellecourt: 'WIW',
        segment_drg: 'C',
        codeinsee: '67534',
        codes_uic: '87212175',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.6137455,
          50.7638456,
        ],
      },
      properties: {
        nom: `Wimille - Wimereux`,
        libellecourt: 'WWX',
        segment_drg: 'C',
        codeinsee: '62894',
        codes_uic: '87317123',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.3811114,
          48.9200646,
        ],
      },
      properties: {
        nom: `Wingen-sur-Moder`,
        libellecourt: 'WMG',
        segment_drg: 'B',
        codeinsee: '67538',
        codes_uic: '87213744',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2700936,
          48.5076495,
        ],
      },
      properties: {
        nom: `Wisches`,
        libellecourt: 'WHS',
        segment_drg: 'C',
        codeinsee: '67543',
        codes_uic: '87214676',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.9501435,
          49.0318895,
        ],
      },
      properties: {
        nom: `Wissembourg`,
        libellecourt: 'WBG',
        segment_drg: 'B',
        codeinsee: '67544',
        codes_uic: '87213470',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.1410655,
          49.0559404,
        ],
      },
      properties: {
        nom: `Wittring`,
        libellecourt: 'WIG',
        segment_drg: 'C',
        codeinsee: '57748',
        codes_uic: '87193656',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          1.537044,
          50.05867,
        ],
      },
      properties: {
        nom: `Woincourt`,
        libellecourt: 'WCT',
        segment_drg: 'C',
        codeinsee: '80827',
        codes_uic: '87317511',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.155621,
          49.1487965,
        ],
      },
      properties: {
        nom: `Woippy`,
        libellecourt: 'WPY',
        segment_drg: 'C',
        codeinsee: '57751',
        codes_uic: '87192088',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          6.3767687,
          48.0530255,
        ],
      },
      properties: {
        nom: `Xertigny`,
        libellecourt: 'XTY',
        segment_drg: 'C',
        codeinsee: '88530',
        codes_uic: '87144121',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.9460318,
          44.3292659,
        ],
      },
      properties: {
        nom: `Ychoux`,
        libellecourt: 'YXC',
        segment_drg: 'B',
        codeinsee: '40332',
        codes_uic: '87582536',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.48337,
          48.706759,
        ],
      },
      properties: {
        nom: `Yerres`,
        libellecourt: 'YES',
        segment_drg: 'B',
        codeinsee: '91691',
        codes_uic: '87682112',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -2.6524629,
          48.4702462,
        ],
      },
      properties: {
        nom: `Yffiniac`,
        libellecourt: 'YFV',
        segment_drg: 'C',
        codeinsee: '22389',
        codes_uic: '87473116',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -0.7361528,
          43.9781851,
        ],
      },
      properties: {
        nom: `Ygos-Saint-Saturnin`,
        libellecourt: 'YGV',
        segment_drg: 'C',
        codeinsee: '40333',
        codes_uic: '87671487',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          2.3644474,
          44.9106891,
        ],
      },
      properties: {
        nom: `Ytrac`,
        libellecourt: 'YTC',
        segment_drg: 'C',
        codeinsee: '15267',
        codes_uic: '87645101',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          0.750115,
          49.622035,
        ],
      },
      properties: {
        nom: `Yvetot`,
        libellecourt: 'YVT',
        segment_drg: 'B',
        codeinsee: '76758',
        codes_uic: '87413385',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.13454,
          49.0783736,
        ],
      },
      properties: {
        nom: `Zetting`,
        libellecourt: 'ZGS',
        segment_drg: 'C',
        codeinsee: '57760',
        codes_uic: '87193649',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          7.2945376,
          47.6943143,
        ],
      },
      properties: {
        nom: `Zillisheim`,
        libellecourt: 'ZIL',
        segment_drg: 'C',
        codeinsee: '68384',
        codes_uic: '87182196',
      },
    },
  ],
}
