const { LandType, LandTypeValueMap } = require('./types');

const filters = [
  {
    name: 'Open or closed',
    filterName: 'open_closed',
    openByDefault: true,
    filterType: 'OR',
    options: [
      {
        name: 'Open (available)',
        id: 'open'
      },
      {
        name: 'Closed (not available)',
        id: 'closed'
      }
    ]
  },
  {
    name: 'Land type',
    filterName: 'land_type',
    openByDefault: true,
    filterType: 'OR',
    options: [
      {
        name: LandTypeValueMap.get(LandType.ARABLE_LAND),
        id: LandType.ARABLE_LAND
      },
      {
        name: LandTypeValueMap.get(LandType.COAST),
        id: LandType.COAST
      },
      {
        name: LandTypeValueMap.get(LandType.GRASSLAND),
        id: LandType.GRASSLAND
      },
      {
        name: LandTypeValueMap.get(LandType.LOWLAND_HEATH),
        id: LandType.LOWLAND_HEATH
      },
      {
        name: LandTypeValueMap.get(LandType.MOORLAND_AND_UPLAND),
        id: LandType.MOORLAND_AND_UPLAND
      },
      {
        name: LandTypeValueMap.get(LandType.ORGANIC_LAND),
        id: LandType.ORGANIC_LAND
      },
      {
        name: LandTypeValueMap.get(LandType.PRIORITY_HABITATS),
        id: LandType.PRIORITY_HABITATS
      },
      {
        name: LandTypeValueMap.get(LandType.WATERBODIES),
        id: LandType.WATERBODIES
      },
      {
        name: LandTypeValueMap.get(LandType.WETLAND),
        id: LandType.WETLAND
      },
      {
        name: LandTypeValueMap.get(LandType.WOODLAND),
        id: LandType.WOODLAND
      }
    ]
  }
];

module.exports = {
    filters,
}
