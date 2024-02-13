const { LandType, LandTypeValueMap, AreaOfInterest, GrantScheme, PaymentType } = require('./types');

const results = [
  {
    name: 'AB1: Nectar flower mix',
    open: true,
    areaOfInterest: [AreaOfInterest.BIODIVERSITY, AreaOfInterest.POLLINATORS_AND_WILDLIFE, AreaOfInterest.WATER],
    landTypes: [LandType.ARABLE_LAND, LandType.MOORLAND_AND_UPLAND],
    fundingTypes: 'Option',
    grantSchemes: [GrantScheme.COUNTRYSIDE_STEWARDSHIP],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open arableLand biodiversity pollinators option water revenue cs',
    url: 'CS/AB1.html'
  },
  {
    name: 'AHL1: Pollen and nectar flower mix',
    open: true,
    areaOfInterest: [AreaOfInterest.BIODIVERSITY, AreaOfInterest.CROPS, AreaOfInterest.POLLINATORS_AND_WILDLIFE, AreaOfInterest.SOIL],
    landTypes: [LandType.ARABLE_LAND],
    fundingTypes: 'Action',
    grantSchemes: [GrantScheme.SUSTAINABLE_FARMING_INCENTIVE],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open arableLand biodiversity crops pollinators action soil revenue sfi',
    url: 'SFI/AHL1.html'
  },
  {
    name: 'AHL2: Winter bird food on arable and horticultural land',
    open: true,
    areaOfInterest: [AreaOfInterest.BIODIVERSITY, AreaOfInterest.CROPS, AreaOfInterest.POLLINATORS_AND_WILDLIFE, AreaOfInterest.SOIL],
    landTypes: [LandType.ARABLE_LAND],
    fundingTypes: 'Action',
    grantSchemes: [GrantScheme.SUSTAINABLE_FARMING_INCENTIVE],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open arableLand biodiversity crops pollinators action soil revenue sfi',
    url: 'SFI/AHL2.html'
  },
  {
    name: 'AHL3: Grassy field corners and blocks',
    open: true,
    areaOfInterest: [AreaOfInterest.CROPS, AreaOfInterest.POLLINATORS_AND_WILDLIFE, AreaOfInterest.SOIL],
    landTypes: [LandType.ARABLE_LAND, LandType.GRASSLAND],
    fundingTypes: 'Action',
    grantSchemes: [GrantScheme.SUSTAINABLE_FARMING_INCENTIVE],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open arableLand grassland crops pollinators action soil revenue sfi',
    url: 'SFI/AHL3.html'
  },
  {
    name: 'AHL4: 4m to 12m grass buffer strip on arable and horticultural land',
    open: true,
    areaOfInterest: [AreaOfInterest.BOUNDARIES, AreaOfInterest.CROPS, AreaOfInterest.POLLINATORS_AND_WILDLIFE, AreaOfInterest.SOIL],
    landTypes: [LandType.ARABLE_LAND],
    fundingTypes: 'Action',
    grantSchemes: [GrantScheme.SUSTAINABLE_FARMING_INCENTIVE],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open arableLand boundaries crops pollinators action soil revenue  sfi',
    url: 'SFI/AHL4.html'
  },
  {
    name: 'Above ground steel slurry store',
    open: false,
    areaOfInterest: [AreaOfInterest.AIR_QUALITY, AreaOfInterest.SLURRY_MANAGEMENT],
    landTypes: undefined,
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.SLURRY_INFRASTRUCTURE_GRANT],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed airQuality arableLand slurry sig item capital',
    url: 'SIG/Iteration2/Above-ground-steel-slurry-store.html'
  },
  {
    name: 'BE2: Protection of in-field trees on intensive grassland',
    open: true,
    areaOfInterest: [AreaOfInterest.TREES_NON_WOODLAND],
    landTypes: [LandType.GRASSLAND, LandType.MOORLAND_AND_UPLAND],
    fundingTypes: 'Option',
    grantSchemes: [GrantScheme.COUNTRYSIDE_STEWARDSHIP],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open trees grassLand moorland option cs revenue',
    url: 'CS/BE2.html'
  },
  {
    name: 'BE3: Management of hedgerows',
    open: true,
    areaOfInterest: [AreaOfInterest.BIODIVERSITY, AreaOfInterest.BOUNDARIES, AreaOfInterest.POLLINATORS_AND_WILDLIFE],
    landTypes: [LandType.MOORLAND_AND_UPLAND, LandType.PRIORITY_HABITATS],
    fundingTypes: 'Option',
    grantSchemes: [GrantScheme.COUNTRYSIDE_STEWARDSHIP],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open biodiversity boundaries pollinators moorland habitat option cs revenue',
    url: 'CS/BE3.html'
  },
  {
    name: 'Cast in situ concrete reception pit',
    open: false,
    areaOfInterest: [AreaOfInterest.AIR_QUALITY, AreaOfInterest.SLURRY_MANAGEMENT],
    landTypes: undefined,
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.SLURRY_INFRASTRUCTURE_GRANT],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed airQuality slurry sig item capital',
    url: 'SIG/Iteration2/Cast-in-situ-concrete-reception-pit.html'
  },
  {
    name: 'Centrifugal chopper pump',
    open: false,
    areaOfInterest: [AreaOfInterest.AIR_QUALITY, AreaOfInterest.SLURRY_MANAGEMENT],
    landTypes: undefined,
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.SLURRY_INFRASTRUCTURE_GRANT],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed airQuality slurry sig item capital',
    url: 'SIG/Iteration2/Centrifugal-chopper-pump.html'
  },
  {
    name: 'Concrete bunker to accommodate short term storage of stackable material from the slurry separator',
    open: false,
    areaOfInterest: [AreaOfInterest.AIR_QUALITY, AreaOfInterest.SLURRY_MANAGEMENT],
    landTypes: undefined,
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.SLURRY_INFRASTRUCTURE_GRANT],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed airQuality slurry sig item capital',
    url: 'SIG/Iteration2/Concrete-bunker-to-accommodate-short-term-storage-of-stackable-material-from-the-slurry-separator.html'
  },
  {
    name: 'Concrete pad for collection of stackable material from the slurry separator by trailer',
    open: false,
    areaOfInterest: [AreaOfInterest.AIR_QUALITY, AreaOfInterest.SLURRY_MANAGEMENT],
    landTypes: undefined,
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.SLURRY_INFRASTRUCTURE_GRANT],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed airQuality slurry sig item capital',
    url: 'SIG/Iteration2/Concrete-pad-for-collection-of-stackable-material-from-the-slurry-separator-by-trailer.html'
  },
  {
    name: 'Earth bank lagoon with synthetic liner',
    open: false,
    areaOfInterest: [AreaOfInterest.AIR_QUALITY, AreaOfInterest.SLURRY_MANAGEMENT],
    landTypes: undefined,
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.SLURRY_INFRASTRUCTURE_GRANT],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed airQuality slurry sig item capital',
    url: 'SIG/Iteration2/Earth-bank-lagoon-with-synthetic-liner.html'
  },
  {
    name: 'ED1: Educational access',
    open: true,
    areaOfInterest: [AreaOfInterest.ACCESS_AND_ENGAGEMENT],
    landTypes: [LandType.MOORLAND_AND_UPLAND, LandType.WOODLAND],
    fundingTypes: 'Option',
    grantSchemes: [GrantScheme.COUNTRYSIDE_STEWARDSHIP],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open accessEngagement moorland woodland option cs revenue',
    url: 'CS/ED1.html'
  },
  {
    name: 'Earth bank lagoon without synthetic liner',
    open: false,
    areaOfInterest: [AreaOfInterest.AIR_QUALITY, AreaOfInterest.SLURRY_MANAGEMENT],
    landTypes: undefined,
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.SLURRY_INFRASTRUCTURE_GRANT],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed airQuality slurry sig item capital',
    url: 'SIG/Iteration2/Earth-bank-lagoon-without-synthetic-liner.html'
  },
  {
    name: 'Electric powered slurry transfer pump',
    open: false,
    areaOfInterest: [AreaOfInterest.AIR_QUALITY, AreaOfInterest.SLURRY_MANAGEMENT],
    landTypes: undefined,
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.SLURRY_INFRASTRUCTURE_GRANT],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed airQuality slurry sig item capital',
    url: 'SIG/Iteration2/Electric-powered-slurry-transfer-pump.html'
  },
  {
    name: 'FETF1: Electronic tray filling machine',
    open: false,
    areaOfInterest: [AreaOfInterest.CROPS, AreaOfInterest.POLLINATORS_AND_WILDLIFE],
    landTypes: [LandType.ARABLE_LAND],
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.FARMING_EQUIPMENT_AND_TECHNOLOGY_FUND],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed pollinators crops arableLand item fetf capital',
    url: 'FETF/Iteration2/FETF1.html'
  },
  {
    name: 'FETF2: Electronic row seeder',
    open: false,
    areaOfInterest: [AreaOfInterest.CROPS, AreaOfInterest.POLLINATORS_AND_WILDLIFE],
    landTypes: [LandType.ARABLE_LAND],
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.FARMING_EQUIPMENT_AND_TECHNOLOGY_FUND],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed pollinators crops arableLand item fetf capital',
    url: 'FETF/Iteration2/FETF2.html'
  },
  {
    name: 'FETF3: Five row seeder',
    open: false,
    areaOfInterest: [AreaOfInterest.CROPS, AreaOfInterest.POLLINATORS_AND_WILDLIFE],
    landTypes: [LandType.ARABLE_LAND],
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.FARMING_EQUIPMENT_AND_TECHNOLOGY_FUND],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed pollinators crops arableLand item fetf capital',
    url: 'FETF/Iteration2/FETF3.html'
  },
  {
    name: 'FETF4: Paper pot transplanter ',
    open: false,
    areaOfInterest: [AreaOfInterest.CROPS, AreaOfInterest.POLLINATORS_AND_WILDLIFE],
    landTypes: [LandType.ARABLE_LAND],
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.FARMING_EQUIPMENT_AND_TECHNOLOGY_FUND],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed pollinators crops arableLand item fetf capital',
    url: 'FETF/Iteration2/FETF4.html'
  },
  {
    name: 'FETF5: Inter row weeders 1.8m',
    open: false,
    areaOfInterest: [AreaOfInterest.CROPS, AreaOfInterest.POLLINATORS_AND_WILDLIFE, AreaOfInterest.VEGETATION_CONTROL],
    landTypes: [LandType.ARABLE_LAND],
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.FARMING_EQUIPMENT_AND_TECHNOLOGY_FUND],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed pollinators crops vegetation arableLand item fetf capital',
    url: 'FETF/Iteration2/FETF5.html'
  },
  {
    name: 'FETF6: Inter row hoe 3m',
    open: false,
    areaOfInterest: [AreaOfInterest.CROPS, AreaOfInterest.POLLINATORS_AND_WILDLIFE, AreaOfInterest.VEGETATION_CONTROL],
    landTypes: [LandType.ARABLE_LAND],
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.FARMING_EQUIPMENT_AND_TECHNOLOGY_FUND],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed pollinators crops vegetation arableLand item fetf capital',
    url: 'FETF/Iteration2/FETF6.html'
  },
  {
    name: 'FETF7: Inter row weeders hoe 6m',
    open: false,
    areaOfInterest: [AreaOfInterest.CROPS, AreaOfInterest.POLLINATORS_AND_WILDLIFE, AreaOfInterest.VEGETATION_CONTROL],
    landTypes: [LandType.ARABLE_LAND],
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.FARMING_EQUIPMENT_AND_TECHNOLOGY_FUND],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed pollinators crops vegetation arableLand item fetf capital',
    url: 'FETF/Iteration2/FETF7.html'
  },
  {
    name: 'FETF8: Salad leaf harvester',
    open: false,
    areaOfInterest: [AreaOfInterest.CROPS, AreaOfInterest.POLLINATORS_AND_WILDLIFE, AreaOfInterest.VEGETATION_CONTROL],
    landTypes: [LandType.ARABLE_LAND],
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.FARMING_EQUIPMENT_AND_TECHNOLOGY_FUND],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed pollinators crops vegetation arableLand item fetf capital',
    url: 'FETF/Iteration2/FETF8.html'
  },
  {
    name: 'FETF9: Mobile vertical frost fans for vineyards and horticulture',
    open: false,
    areaOfInterest: [AreaOfInterest.CROPS, AreaOfInterest.POLLINATORS_AND_WILDLIFE, AreaOfInterest.VEGETATION_CONTROL],
    landTypes: [LandType.ARABLE_LAND],
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.FARMING_EQUIPMENT_AND_TECHNOLOGY_FUND],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed pollinators crops vegetation arableLand item fetf capital',
    url: 'FETF/Iteration2/FETF9.html'
  },
  {
    name: 'FETF10: Fruit ripeness spectrometers ',
    open: false,
    areaOfInterest: [AreaOfInterest.CROPS, AreaOfInterest.POLLINATORS_AND_WILDLIFE, AreaOfInterest.VEGETATION_CONTROL],
    landTypes: [LandType.ARABLE_LAND],
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.FARMING_EQUIPMENT_AND_TECHNOLOGY_FUND],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed pollinators crops vegetation arableLand item fetf capital',
    url: 'FETF/Iteration2/FETF10.html'
  },
  {
    name: 'Fixed flexible cover',
    open: false,
    areaOfInterest: [AreaOfInterest.AIR_QUALITY, AreaOfInterest.SLURRY_MANAGEMENT],
    landTypes: undefined,
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.SLURRY_INFRASTRUCTURE_GRANT],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed airQuality slurry sig item capital',
    url: 'SIG/Iteration2/Fixed-flexible-cover.html'
  },
  {
    name: 'Floating flexible cover',
    open: false,
    areaOfInterest: [AreaOfInterest.AIR_QUALITY, AreaOfInterest.SLURRY_MANAGEMENT],
    landTypes: undefined,
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.SLURRY_INFRASTRUCTURE_GRANT],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'closed airQuality slurry sig item capital',
    url: 'SIG/Iteration2/Floating-flexible-cover.html'
  },
  {
    name: 'HRW1: Assess and record hedgerow condition',
    open: true,
    areaOfInterest: [AreaOfInterest.BIODIVERSITY, AreaOfInterest.BOUNDARIES, AreaOfInterest.POLLINATORS_AND_WILDLIFE],
    landTypes: undefined,
    fundingTypes: 'Action',
    grantSchemes: [GrantScheme.SUSTAINABLE_FARMING_INCENTIVE],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open biodiversity boundaries pollinators action revenue sfi',
    url: 'SFI/HRW1.html'
  },
  {
    name: 'HRW2: Manage hedgerows',
    open: true,
    areaOfInterest: [AreaOfInterest.BIODIVERSITY, AreaOfInterest.BOUNDARIES, AreaOfInterest.POLLINATORS_AND_WILDLIFE],
    landTypes: undefined,
    fundingTypes: 'Action',
    grantSchemes: [GrantScheme.SUSTAINABLE_FARMING_INCENTIVE],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open biodiversity boundaries pollinators action revenue sfi',
    url: 'SFI/HRW2.html'
  },
  {
    name: 'HRW3: Maintain or establish hedgerow trees',
    open: true,
    areaOfInterest: [AreaOfInterest.BIODIVERSITY, AreaOfInterest.BOUNDARIES, AreaOfInterest.POLLINATORS_AND_WILDLIFE, AreaOfInterest.TREES_NON_WOODLAND],
    landTypes: undefined,
    fundingTypes: 'Action',
    grantSchemes: [GrantScheme.SUSTAINABLE_FARMING_INCENTIVE],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open biodiversity boundaries pollinators trees action revenue sfi',
    url: 'SFI/HRW3.html'
  },
  {
    name: 'OP1: Overwintered stubble',
    open: true,
    areaOfInterest: [AreaOfInterest.BIODIVERSITY],
    landTypes: [LandType.ARABLE_LAND, LandType.ORGANIC_LAND, LandType.MOORLAND_AND_UPLAND],
    fundingTypes: 'Option',
    grantSchemes: [GrantScheme.COUNTRYSIDE_STEWARDSHIP],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open biodiversity arableLand organic moorland option cs revenue',
    url: 'CS/OP1.html'
  },
  {
    name: 'PA1: Implementation plan',
    open: true,
    areaOfInterest: [AreaOfInterest.FLOOD_RISK, AreaOfInterest.WATER],
    landTypes: [LandType.MOORLAND_AND_UPLAND, LandType.PRIORITY_HABITATS],
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.COUNTRYSIDE_STEWARDSHIP],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'open flood water moorland habitats item cs capital',
    url: 'CS/PA1.html'
  },
  {
    name: 'RP4: Livestock and machinery hardcore tracks',
    open: true,
    areaOfInterest: [AreaOfInterest.BIODIVERSITY, AreaOfInterest.WATER],
    landTypes: [LandType.MOORLAND_AND_UPLAND],
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.COUNTRYSIDE_STEWARDSHIP],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'open biodiversity water moorland item cs capital',
    url: 'CS/RP4.html'
  },
  {
    name: 'RP9: Earth banks and soil bunds',
    open: true,
    areaOfInterest: [AreaOfInterest.BIODIVERSITY, AreaOfInterest.FLOOD_RISK, AreaOfInterest.SOIL, AreaOfInterest.WATER],
    landTypes: [LandType.MOORLAND_AND_UPLAND],
    fundingTypes: 'Item',
    grantSchemes: [GrantScheme.COUNTRYSIDE_STEWARDSHIP],
    paymentTypes: [PaymentType.CAPITAL],
    dataOptions: 'open biodiversity flood soil water moorland item cs capital',
    url: 'CS/RP9.html'
  },
  {
    name: 'SP4: Control of invasive plant species supplement ',
    open: true,
    areaOfInterest: [AreaOfInterest.BIODIVERSITY, AreaOfInterest.VEGETATION_CONTROL],
    landTypes: [LandType.MOORLAND_AND_UPLAND],
    fundingTypes: 'Option',
    grantSchemes: [GrantScheme.COUNTRYSIDE_STEWARDSHIP],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open biodiversity vegetation moorland option cs revenue',
    url: 'CS/SP4.html'
  },
  {
    name: 'UP3: Management of moorland',
    open: true,
    areaOfInterest: [AreaOfInterest.BIODIVERSITY],
    landTypes: [LandType.MOORLAND_AND_UPLAND, LandType.PRIORITY_HABITATS],
    fundingTypes: 'Option',
    grantSchemes: [GrantScheme.COUNTRYSIDE_STEWARDSHIP],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open biodiversity moorland habitat option cs revenue',
    url: 'CS/UP3.html'
  },
  {
    name: 'WD10: Management of upland wood pasture and parkland',
    open: true,
    areaOfInterest: [AreaOfInterest.AIR_QUALITY, AreaOfInterest.HISTORIC_ENVIRONMENT],
    landTypes: [LandType.MOORLAND_AND_UPLAND, LandType.WOODLAND],
    fundingTypes: 'Option',
    grantSchemes: [GrantScheme.COUNTRYSIDE_STEWARDSHIP],
    paymentTypes: [PaymentType.REVENUE],
    dataOptions: 'open airQuality historicEnvironment moorland woodland option cs revenue',
    url: 'CS/WD10.html'
  }
];

module.exports = {
  results
};
