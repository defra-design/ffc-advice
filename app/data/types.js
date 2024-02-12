const LandType = {
  ARABLE_LAND: 'arable',
  COAST: 'coast',
  GRASSLAND: 'grassland',
  LOWLAND_HEATH: 'lowland',
  MOORLAND_AND_UPLAND: 'moorland',
  ORGANIC_LAND: 'organic',
  PRIORITY_HABITATS: 'habitat',
  WATERBODIES: 'waterbodies',
  WETLAND: 'wetland',
  WOODLAND: 'woodland'
};

const LandTypeValueMap = new Map([
  [LandType.ARABLE_LAND, 'Arable land'],
  [LandType.COAST, 'Coast'],
  [LandType.GRASSLAND, 'Grassland'],
  [LandType.LOWLAND_HEATH, 'Lowland heath'],
  [LandType.MOORLAND_AND_UPLAND, 'Moorland and upland'],
  [LandType.ORGANIC_LAND, 'Organic land'],
  [LandType.PRIORITY_HABITATS, 'Priority habitats'],
  [LandType.WATERBODIES, 'Waterbodies'],
  [LandType.WETLAND, 'Wetland'],
  [LandType.WOODLAND, 'Woodland']
]);

const AreaOfInterest = {
  ACCESS_AND_ENGAGEMENT: 'accessEngagement',
  AIR_QUALITY: 'airQuality',
  BIODIVERSITY: 'biodiversity',
  BOUNDARIES: 'boundaries',
  CROPS: 'crops',
  FLOOD_RISK: 'flood',
  FORESTRY: 'forestry',
  HISTORIC_ENVIRONMENT: 'historicEnvironment',
  LIVESTOCK_MANAGEMENT: 'livestockManagement',
  PEAT: 'peat',
  POLLINATORS_AND_WILDLIFE: 'pollinators',
  PRECISION_FARMING: 'precision',
  SOIL: 'soil',
  SLURRY_MANAGEMENT: 'slurry',
  TREES_NON_WOODLAND: 'trees',
  VEGETATION_CONTROL: 'Vegetation control',
  WATER: 'water'
};

const AreaOfInterestValueMap = new Map([
  [AreaOfInterest.ACCESS_AND_ENGAGEMENT, 'Access and engagement'],
  [AreaOfInterest.AIR_QUALITY, 'Air quality'],
  [(AreaOfInterest.BIODIVERSITY, 'Biodiversity')],
  [(AreaOfInterest.BOUNDARIES, 'Boundaries')],
  [(AreaOfInterest.CROPS, 'Crops')],
  [(AreaOfInterest.FLOOD_RISK, 'Flood risk')],
  [(AreaOfInterest.FORESTRY, 'Forestry')],
  [(AreaOfInterest.HISTORIC_ENVIRONMENT, 'Historic environment')],
  [(AreaOfInterest.LIVESTOCK_MANAGEMENT, 'Livestock management')],
  [(AreaOfInterest.PEAT, 'Peat')],
  [(AreaOfInterest.POLLINATORS_AND_WILDLIFE, 'Pollinators and wildlife')],
  [(AreaOfInterest.PRECISION_FARMING, 'Precision farming')],
  [(AreaOfInterest.SOIL, 'Soil')],
  [(AreaOfInterest.SLURRY_MANAGEMENT, 'Slurry management')],
  [(AreaOfInterest.TREES_NON_WOODLAND, 'Trees (non-woodland)')],
  [(AreaOfInterest.VEGETATION_CONTROL, 'Vegetation control')],
  [(AreaOfInterest.WATER, 'Water')]
]);

module.exports = {
  LandType,
  LandTypeValueMap,
  AreaOfInterest,
  AreaOfInterestValueMap
};
