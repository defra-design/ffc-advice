const {
  LandType,
  LandTypeValueMap,
  AreaOfInterestValueMap,
  AreaOfInterest,
  GrantScheme,
  GrantSchemeValueMap,
  PaymentType,
  PaymentTypeValueMap,
} = require('./types');

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
    openByDefault: false,
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
  },
  {
    name: 'Area of interest',
    filterName: 'area_of_interest',
    openByDefault: false,
    filterType: 'OR',
    options: [
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.ACCESS_AND_ENGAGEMENT),
        id: AreaOfInterest.ACCESS_AND_ENGAGEMENT
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.AIR_QUALITY),
        id: AreaOfInterest.AIR_QUALITY
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.BIODIVERSITY),
        id: AreaOfInterest.BIODIVERSITY
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.BOUNDARIES),
        id: AreaOfInterest.BOUNDARIES
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.CROPS),
        id: AreaOfInterest.CROPS
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.FLOOD_RISK),
        id: AreaOfInterest.FLOOD_RISK
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.FORESTRY),
        id: AreaOfInterest.FORESTRY
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.HISTORIC_ENVIRONMENT),
        id: AreaOfInterest.HISTORIC_ENVIRONMENT
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.LIVESTOCK_MANAGEMENT),
        id: AreaOfInterest.LIVESTOCK_MANAGEMENT
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.PEAT),
        id: AreaOfInterest.PEAT
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.POLLINATORS_AND_WILDLIFE),
        id: AreaOfInterest.POLLINATORS_AND_WILDLIFE
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.PRECISION_FARMING),
        id: AreaOfInterest.PRECISION_FARMING
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.SOIL),
        id: AreaOfInterest.SOIL
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.SLURRY_MANAGEMENT),
        id: AreaOfInterest.SLURRY_MANAGEMENT
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.TREES_NON_WOODLAND),
        id: AreaOfInterest.TREES_NON_WOODLAND
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.VEGETATION_CONTROL),
        id: AreaOfInterest.VEGETATION_CONTROL
      },
      {
        name: AreaOfInterestValueMap.get(AreaOfInterest.WATER),
        id: AreaOfInterest.WATER
      }
    ]
  },
  {
    name: 'Grant schemes',
    filterName: 'grant_scheme',
    openByDefault: false,
    filterType: 'OR',
    options: [
      {
        name: GrantSchemeValueMap.get(GrantScheme.COUNTRYSIDE_STEWARDSHIP),
        id: GrantScheme.COUNTRYSIDE_STEWARDSHIP
      },
      {
        name: GrantSchemeValueMap.get(GrantScheme.FARMING_EQUIPMENT_AND_TECHNOLOGY_FUND),
        id: GrantScheme.FARMING_EQUIPMENT_AND_TECHNOLOGY_FUND
      },
      {
        name: GrantSchemeValueMap.get(GrantScheme.SLURRY_INFRASTRUCTURE_GRANT),
        id: GrantScheme.SLURRY_INFRASTRUCTURE_GRANT
      },
      {
        name: GrantSchemeValueMap.get(GrantScheme.SUSTAINABLE_FARMING_INCENTIVE),
        id: GrantScheme.SUSTAINABLE_FARMING_INCENTIVE
      }
    ]
  },
  {
    name: 'Payment types',
    filterName: 'payment_type',
    openByDefault: false,
    filterType: 'OR',
    options: [
      {
        name: PaymentTypeValueMap.get(PaymentType.CAPITAL),
        id: PaymentType.CAPITAL
      },
      {
        name: PaymentTypeValueMap.get(PaymentType.REVENUE),
        id: PaymentType.REVENUE
      }
    ]
  }
];

module.exports = {
  filters
};
