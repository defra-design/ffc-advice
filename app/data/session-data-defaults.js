module.exports = {
  filters: [
    {
      grantTypes: [
        {
          name: 'SFI',
          id: 'sfi',
        },
        {
          name: 'CSHT',
          id: 'csht',
        }
      ],
      landTypes: [
        {
          name: 'Arable',
          id: 'arable',
        },
        {
          name: 'Coastal',
          id: 'coastal',
        },
        {
          name: 'Farmyard',
          id: 'farmyard'
        },
        {
          name: 'Grassland',
          id: 'grassland'
        },
        {
          name: 'Scrub',
          id: 'scrub'
        },
        {
          name: 'Wood land and forest',
          id: 'woodland'
        },
        {
          name: 'Wood pasture',
          id: 'wood-pasture'
        }
      ],
      areaOfInterest: [
        {
          name: 'Access',
          id: 'access'
        },
        {
          name: 'Agroforestry',
          id: 'agroforestry'
        },
        {
          name: 'Biodiversity',
          id: 'biodiversity'
        },
        {
          name: 'Buffer strips',
          id: 'buffer-strips'
        },
        {
          name: 'Field boundaries',
          id: 'boundaries'
        },
        {
          name: 'Flood prevention',
          id: 'flood'
        },
        {
          name: 'Historic and archaeological features',
          id: 'historic'
        },
        {
          name: 'Integrated pest management',
          id: 'integrated'
        },
        {
          name: 'Livestock management',
          id: 'livestock'
        },
        {
          name: 'Orchards',
          id: 'orchards'
        },
        {
          name: 'Organic',
          id: 'organic'
        },
        {
          name: 'Peat',
          id: 'peat'
        },
        {
          name: 'Pollinators',
          id: 'pollinators'
        },
        {
          name: 'Precision farming, equipment and machinery',
          id: 'precision'
        },
        {
          name: 'Soil health',
          id: 'soil'
        },
        {
          name: 'Species recovery and management',
          id: 'species'
        },
        {
          name: 'Trees',
          id: 'trees'
        },
        {
          name: 'Water availability and storage',
          id: 'water-av'
        },
        {
          name: 'Water quality',
          id: 'water-qu'
        },
        {
          name: 'Wildlife',
          id: 'wildlife'
        }
      ]
    }
  ],

  items: [
    {
      name: 'AB1: Nectar flower mix',
      open: true,
      areaOfInterest: 'Biodiversity, Pollinators, Wildlife, Water quaility',
      landTypes: 'Arable, Moorland and upland',
      fundingTypes: 'Option',
      grantSchemes: 'Countryside Stewardship',
      grantTypes: 'SFI',
      dataOptions: 'open arable moorland upland biodiversity pollinators option water-qu sfi',
      url: 'CS/Iteration2/AB1.html'
    },
    {
      name: 'AHL1: Pollen and nectar flower mix',
      open: true,
      areaOfInterest: 'Biodiversity, Pollinators, Wildlife, Soil health',
      landTypes: 'Arable',
      fundingTypes: 'Action',
      grantSchemes: 'Sustainable Farming Incentive',
      grantTypes: 'SFI',
      dataOptions: 'open arable biodiversity pollinators wildlife action soil sfi',
      url: 'SFI/Iteration2/AHL1.html'
    },
    {
      name: 'AHL2: Winter bird food on arable and horticultural land',
      open: true,
      areaOfInterest: 'Biodiversity, Pollinators, Wildlife, Soil health',
      landTypes: 'Arable',
      fundingTypes: 'Action',
      grantSchemes: 'Sustainable Farming Incentive',
      grantTypes: 'SFI',
      dataOptions: 'open arable biodiversity crops pollinators wildlife action soil sfi',
      url: 'SFI/Iteration2/AHL2.html'
    },
    {
      name: 'AHL3: Grassy field corners and blocks',
      open: true,
      areaOfInterest: 'Crops, Pollinators, Wildlife, Soil health',
      landTypes: 'Arable, Grassland',
      fundingTypes: 'Action',
      grantSchemes: 'Sustainable Farming Incentive',
      grantTypes: 'SFI',
      dataOptions: 'open arable grassland crops pollinators action soil sfi',
      url: 'SFI/Iteration2/AHL3.html'
    },
    {
      name: 'AHL4: 4m to 12m grass buffer strip on arable and horticultural land',
      open: true,
      areaOfInterest: 'Boundaries, Crops, Pollinators, Wildlife, Soil health',
      landTypes: 'Arable',
      fundingTypes: 'Action',
      grantSchemes: 'Sustainable Farming Incentive',
      grantTypes: 'SFI',
      dataOptions: 'open arable boundaries pollinators action soil sfi',
      url: 'SFI/Iteration2/AHL4.html'
    },
    {
      name: 'Above ground steel slurry store',
      open: false,
      areaOfInterest: 'Air quality',
      landTypes: undefined,
      fundingTypes: 'Item',
      grantSchemes: 'Slurry Infrastructure grant',
      grantTypes: 'SFI',
      dataOptions: 'closed air-quality arable sig item sfi',
      url: 'SIG/Iteration2/Above-ground-steel-slurry-store.html'
    },
    {
      name: 'BE2: Protection of in-field trees on intensive grassland',
      open: true,
      areaOfInterest: 'Trees',
      landTypes: 'Grassland, Moorland and upland',
      fundingTypes: 'Option',
      grantSchemes: 'Countryside Stewardship',
      grantTypes: 'SFI',
      dataOptions: 'open trees grassland moorland option sfi',
      url: 'CS/Iteration2/BE2.html'
    },
    {
      name: 'BE3: Management of hedgerows',
      open: true,
      areaOfInterest: 'Biodiversity, Boundaries, Pollinators, Wildlife',
      landTypes: 'Moorland and upland',
      fundingTypes: 'Option',
      grantSchemes: 'Countryside Stewardship',
      grantTypes: 'SFI',
      dataOptions: 'open biodiversity boundaries pollinators moorland option sfi',
      url: 'CS/Iteration2/BE3.html'
    },
    {
      name: 'CAB2: Basic overwintered stubble',
      open: true,
      areaOfInterest: 'Biodiversity, Soil health',
      landTypes: 'Arable',
      grantTypes: 'CSHT',
      dataOptions: 'open arable soil csht',
      url: 'HT/CAB2.html'
    },
    {
      name: 'CAB5: Nesting plots for lapwing and stone curlew',
      open: true,
      areaOfInterest: 'Species recovery and management, Wildlife',
      landTypes: 'Arable, Grassland, Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open arable grassland csht moorland upland species-recovery wildlife',
      url: 'HT/CAB5.html'
    },
    {
      name: 'CAB6: Enhanced overwintered stubble',
      open: true,
      areaOfInterest: 'Soil health',
      landTypes: 'Arable',
      grantTypes: 'CSHT',
      dataOptions: 'open arable csht soil',
      url: 'HT/CAB6.html'
    },
    {
      name: 'CAB7: Whole crop cereals',
      open: true,
      areaOfInterest: 'Precision farming equipment and machinery, Biodiversity',
      landTypes: 'Arable',
      grantTypes: 'CSHT',
      dataOptions: 'open arable biodiversity precision csht ',
      url: 'HT/CAB7.html'
    },
    {
      name: 'CAB10: Unharvested cereal headland',
      open: true,
      areaOfInterest: 'Biodiversity, Buffer strips',
      landTypes: 'Arable, Farmyard, Woodland and forest, Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open arable biodiversity csht buffer-strips',
      url: 'HT/CAB10.html'
    },
    {
      name: 'CAB11: Cultivated areas for arable plants',
      open: true,
      areaOfInterest: 'Pollinators, Precision farming equipment and machinery',
      landTypes: 'Arable, Lowland heath',
      grantTypes: 'CSHT',
      dataOptions: 'open arable lowland csht precision',
      url: 'HT/CAB11.html'
    },
    {
      name: 'CAB12: Supplementary winter bird food',
      open: true,
      areaOfInterest: 'Species recovery and management, Wildlife',
      landTypes: 'Arable, Lowland heath',
      grantTypes: 'CSHT',
      dataOptions: 'open arable csht species wildlife',
      url: 'HT/CAB12.html'
    },
    {
      name: 'CAB14: Low input harvested cereal crops',
      open: true,
      areaOfInterest: 'Biodiversity, Integrated pest management',
      landTypes: 'Arable',
      grantTypes: 'CSHT',
      dataOptions: 'open arable biodiversity integrated csht',
      url: 'HT/CAB14.html'
    },
    {
      name: 'CAB16: Bumblebird mix',
      open: true,
      areaOfInterest: 'Biodiversity, Integrated pest management',
      landTypes: 'Arable, Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open arable grassland chst biodiversity integrated',
      url: 'HT/CAB16.html'
    },
    {
      name: 'CAB17: Winter bird food on arable and horticulture land',
      open: true,
      areaOfInterest: 'Species recovery and management, Wildlife',
      landTypes: 'Arable',
      grantTypes: 'CSHT',
      dataOptions: 'open arable species wildlife csht',
      url: 'HT/CAB17.html'
    },
    {
      name: 'CAB18: Flower-rich grass margins, blocks, or in-field strips (on arable land or permanent crops)',
      open: true,
      areaOfInterest: 'Pollinators, Wildlife',
      landTypes: 'Arable',
      grantTypes: 'CSHT',
      dataOptions: 'open arable pollinators wildlife csht',
      url: 'HT/CAB18.html'
    },
    {
      name: 'CAB19: Pollen and nectar flower mix',
      open: true,
      areaOfInterest: 'Pollinators, Species recovery and management',
      landTypes: 'Arable, Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open arable grassland species csht',
      url: 'HT/CAB19.html'
    },
    {
      name: 'CAGF1: Manage high density in-field agroforestry',
      open: true,
      areaOfInterest: 'Agroforestry',
      landTypes: 'Arable, Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open arable woodland agroforestry csht',
      url: 'HT/CAGF1.html'
    },
    {
      name: 'CAGF2: Manage low density in-field agroforestry on more sensitive land',
      open: true,
      areaOfInterest: 'Agroforestry',
      landTypes: 'Arable, Grassland, Wood pasture',
      grantTypes: 'CSHT',
      dataOptions: 'open arable grassland wood-pasture agroforestry csht',
      url: 'HT/CAGF2.html'
    },
    {
      name: 'CAGF3: Manage medium density in-field agroforestry',
      open: true,
      areaOfInterest: 'Agroforestry',
      landTypes: 'Arable, Wood pasture',
      grantTypes: 'CSHT',
      dataOptions: 'open arable csht agroforestry wood-pasture',
      url: 'HT/CAGF3.html'
    },
    {
      name: 'CAGF4: Manage very low density in-field agroforestry on more sensitive land',
      open: true,
      areaOfInterest: 'Agroforestry, Orchards',
      landTypes: 'Arable, Wood pasture, Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open arable csht agroforestry orchards wood-pasture woodland',
      url: 'HT/CAGF4.html'
    },
    {
      name: 'Cast in situ concrete reception pit',
      open: false,
      areaOfInterest: 'Air quality',
      landTypes: undefined,
      fundingTypes: 'Item',
      grantSchemes: 'Slurry Infrastructure grant',
      grantTypes: 'SFI',
      dataOptions: 'closed air-quality sig item sfi',
      url: 'SIG/Iteration2/Cast-in-situ-concrete-reception-pit.html'
    },
    {
      name: 'CBE4: Manage traditional orchards',
      open: true,
      areaOfInterest: 'Orchards',
      landTypes: 'Wood pasture',
      grantTypes: 'CSHT',
      dataOptions: 'open wood-pasture orchards csht',
      url: 'HT/CBE4.html'
    },
    {
      name: 'CBE5: Create traditional orchards',
      open: true,
      areaOfInterest: 'Orchards',
      landTypes: 'Wood pasture',
      grantTypes: 'CSHT',
      dataOptions: 'open wood-pasture orchards csht',
      url: 'HT/CBE5.html'
    },
    {
      name: 'CCT2: Make space for new coastal habitat',
      open: true,
      areaOfInterest: 'Biodiversity',
      landTypes: 'Coastal, Waterbodies',
      grantTypes: 'CSHT',
      dataOptions: 'open csht coastal biodiversity waterbodies',
      url: 'HT/CCT2.html'
    },
    {
      name: 'CCT3: Manage coastal saltmarsh and its vegetation',
      open: true,
      areaOfInterest: 'Biodiversity, Field boundaries',
      landTypes: 'Coastal, Waterbodies',
      grantTypes: 'CSHT',
      dataOptions: 'open csht coastal waterbodies boundaries',
      url: 'HT/CCT3.html'
    },
    {
      name: 'CCT4: Create intertidal and saline habitat on arable land',
      open: true,
      areaOfInterest: 'Biodiversity',
      landTypes: 'Arable, Coastal, Waterbodies',
      grantTypes: 'CSHT',
      dataOptions: 'open csht arable coastal biodiversity waterbodies',
      url: 'HT/CCT4.html'
    },
    {
      name: 'CCT5: Create intertidal and saline habitat by non-intervention',
      open: true,
      areaOfInterest: 'Biodiversity, Integrated pest management',
      landTypes: 'Coastal, Grassland, Waterbodies',
      grantTypes: 'CSHT',
      dataOptions: 'open csht coastal grassland biodiversity integrated waterbodies',
      url: 'HT/CCT5.html'
    },
    {
      name: 'CCT6: Coastal vegetation management supplement',
      open: true,
      areaOfInterest: 'Biodiversity, Vegetation control',
      landTypes: 'Coastal, Waterbodies',
      grantTypes: 'CSHT',
      dataOptions: 'open coastal waterbodies vegetation csht',
      url: 'HT/CCT6.html'
    },
    {
      name: 'CCT7: Create intertidal and saline habitat on intensive grassland',
      open: true,
      areaOfInterest: 'Biodiversity, Integrated pest management',
      landTypes: 'Coastal, Grassland, Waterbodies, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open coastal waterbodies biodiversity vegetation csht integrated',
      url: 'HT/CCT7.html'
    },
    {
      name: 'CCT8: Manage and restore coastal sand dunes',
      open: true,
      areaOfInterest: 'Biodiversity',
      landTypes: 'Coastal, Waterbodies',
      grantTypes: 'CSHT',
      dataOptions: 'open coastal csht biodiversity waterbodies',
      url: 'HT/CCT8.html'
    },
    {
      name: 'CCT9: Manage and restore coastal vegetated shingle',
      open: true,
      areaOfInterest: 'Biodiversity, Water quality',
      landTypes: 'Coastal, Grassland, Waterbodies',
      grantTypes: 'CSHT',
      dataOptions: 'open csht coastal grassland biodiversity waterbodies water-qu',
      url: 'HT/CCT9.html'
    },
    {
      name: 'CCT10	Manage and restore maritime cliffs and slopes',
      open: true,
      areaOfInterest: 'Biodiversity, Field boundaries',
      landTypes: 'Coastal, Waterbodies',
      grantTypes: 'CSHT',
      dataOptions: 'open coastal csht biodiversity waterbodies boundaries',
      url: 'HT/CCT10.html'
    },
    {
      name: 'CES6	Maintain features for wildfire management (fire belts) supplement',
      open: true,
      areaOfInterest: 'Trees, Vegetation control',
      landTypes: 'Moorland and upland, Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland woodland vegetation trees csht',
      url: 'HT/CES6.html'
    },
    {
      name: 'Centrifugal chopper pump',
      open: false,
      areaOfInterest: 'Air quality',
      landTypes: undefined,
      fundingTypes: 'Item',
      grantSchemes: 'Slurry Infrastructure grant',
      grantTypes: 'SFI',
      dataOptions: 'closed air-quality sig item sfi',
      url: 'SIG/Iteration2/Centrifugal-chopper-pump.html'
    },
    {
      name: 'CGS4: Herbal leys',
      open: true,
      areaOfInterest: 'Biodiversity, Soil health',
      landTypes: 'Arable, Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open arable grassland csht biodiversity soil',
      url: 'HT/CGS4.html'
    },
    {
      name: 'CGS16: Rush control supplement',
      open: true,
      areaOfInterest: 'Vegetation control',
      landTypes: 'Grassland, Waterbodies, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland waterbodies wetland vegetation csht',
      url: 'HT/CGS16.html'
    },
    {
      name: 'CGS18: Manage species-rich floodplain meadows',
      open: true,
      areaOfInterest: 'Biodiversity, Livestock management, Water availability and storage, Water quality',
      landTypes: 'Grassland, Waterbodies, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland csht biodiversity livestock water-av water-qu wetland waterbodies',
      url: 'HT/CGS18.html'
    },
    {
      name: 'CGS19: Manage wet grassland for wintering waders and wildfowl',
      open: true,
      areaOfInterest: 'Livestock manegement, Species recovery manegement, Water availability and storage, Wildlife',
      landTypes: 'Grassland, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland livestock species water-av wildlife csht wetland ',
      url: 'HT/CGS19.html'
    },
    {
      name: 'CGS20: Manage wet grassland for breeding wader',
      open: true,
      areaOfInterest: 'Species recovery and management, Vegetation control, Water availability and storage',
      landTypes: 'Grassland, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland wetland species vegetation water-av csht',
      url: 'HT/CGS20.html'
    },
    {
      name: 'CGS21: Manage grassland for target habitats, species or feature',
      open: true,
      areaOfInterest: 'Biodiversity, Livestock management, Vegetation control',
      landTypes: 'Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland csht biodiversity livestock vegetation',
      url: 'HT/CGS21.html'
    },
    {
      name: 'CGS22: Manage priority habitat species-rich grassland',
      open: true,
      areaOfInterest: 'Biodiversity, Livestock management, Vegetation control',
      landTypes: 'Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland csht biodiversity livestock vegetation',
      url: 'HT/CGS22.html'
    },
    {
      name: 'CGS23: Haymaking supplement',
      open: true,
      areaOfInterest: 'Biodiversity, Livestock management, Precision farming equipment and machinery',
      landTypes: 'Arable, Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open arable grassland livestock precision csht',
      url: 'HT/CGS23.html'
    },
    {
      name: 'CGS24: Haymaking supplement (late cut)',
      open: true,
      areaOfInterest: 'Biodiversity, Livestock management, Wildlife',
      landTypes: 'Arable, Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open arable grassland csht biodiversity livestock wildlife',
      url: 'HT/CGS24.html'
    },
    {
      name: 'CGS25: Legumes on improved grassland',
      open: true,
      areaOfInterest: 'Soil health, Vegetation control',
      landTypes: 'Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland csht soil vegetation',
      url: 'HT/CGS25.html'
    },
    {
      name: 'CGS26: Manage grassland with very low inputs',
      open: true,
      areaOfInterest: 'Livestock management, Soil health, Vegetation control, Wildlife',
      landTypes: 'Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland wildlife csht livestock soil vegetation',
      url: 'HT/CGS26.html'
    },
    {
      name: 'CHRW4: Manage hedgerows',
      open: true,
      areaOfInterest: 'Field boundaries, Species recovery and management',
      landTypes: 'Arable, Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open arable csht grassland boundaries species',
      url: 'HT/CHRW4.html'
    },
    {
      name: 'CHS2: Take historic and archaeological features out of cultivation',
      open: true,
      areaOfInterest: 'Historic and archaeological features, Soil health',
      landTypes: 'Arable, Waterbodies',
      grantTypes: 'CSHT',
      dataOptions: 'open arable waterbodies csht historic soil',
      url: 'HT/CHS2.html'
    },
    {
      name: 'CHS3: Reduce cultivation depths on historic and archaeological features',
      open: true,
      areaOfInterest: 'Historic and archaeological features',
      landTypes: 'Arable, Scrub',
      grantTypes: 'CSHT',
      dataOptions: 'open csht arable scrub historic',
      url: 'HT/CHS3.html'
    },
    {
      name: 'CHS4: Control scrub on historic and archaeological features',
      open: true,
      areaOfInterest: 'Field boundares, Historic and archaeological features',
      landTypes: 'Farmyard, Scrub',
      grantTypes: 'CSHT',
      dataOptions: 'open csht farmyard scrub historic boundaries',
      url: 'HT/CHS4.html'
    },
    {
      name: 'CHS5: Manage historic and archaeological features on grassland',
      open: true,
      areaOfInterest: 'Historic and archaeological features',
      landTypes: 'Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland historic csht',
      url: 'HT/CHS5.html'
    },
    {
      name: 'CHS6: Maintain designed or engineered waterbodies',
      open: true,
      areaOfInterest: 'Historic and archaeological features, Water availability and storage, Water quality',
      landTypes: 'Coastal, Waterbodies',
      grantTypes: 'CSHT',
      dataOptions: 'open coastal waterbodies csht historic water-av water-qu',
      url: 'HT/CHS6.html'
    },
    {
      name: 'CHS7: Manage historic water meadows through traditional irrigation',
      open: true,
      areaOfInterest: 'Historic and archaeological features, Water availability and storage, Water quality',
      landTypes: 'Grassland, Waterbodies, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open csht grassland waterbodies wetland historic water-av water-qu',
      url: 'HT/CHS7.html'
    },
    {
      name: 'CHS9: Restrict crop establishment depth on historic and archaeological features',
      open: true,
      areaOfInterest: 'Historic and archaeological features, Precision farming equipment and machinery',
      landTypes: 'Arable, ',
      grantTypes: 'CSHT',
      dataOptions: 'open csht arable historic precision',
      url: 'HT/CHS9.html'
    },
    {
      name: 'CLH1: Manage lowland heathland',
      open: true,
      areaOfInterest: 'Biodiversity, Vegetation control',
      landTypes: 'Lowland heath',
      grantTypes: 'CSHT',
      dataOptions: 'open lowland csht biodiversity vegetation',
      url: 'HT/CLH1.html'
    },
    {
      name: 'CLH2: Restore lowland heathland',
      open: true,
      areaOfInterest: 'Biodiversity, Species recovery and management,  Vegetation control',
      landTypes: 'Lowland',
      grantTypes: 'CSHT',
      dataOptions: 'open csht lowland biodiversity species vegetation',
      url: 'HT/CLH2.html'
    },
    {
      name: 'CLH3: Create lowland heathland',
      open: true,
      areaOfInterest: 'Biodiversity, Peat, Vegetation control',
      landTypes: 'Lowland heath',
      grantTypes: 'CSHT',
      dataOptions: 'open lowland csht biodiversity peat vegetation',
      url: 'HT/CLH3.html'
    },
    {
      name: 'Concrete bunker to accommodate short term storage of stackable material from the slurry separator',
      open: false,
      areaOfInterest: 'Air quality',
      landTypes: undefined,
      fundingTypes: 'Item',
      grantSchemes: 'Slurry Infrastructure grant',
      grantTypes: 'SFI',
      dataOptions: 'closed air-quality sig item sfi',
      url: 'SIG/Iteration2/Concrete-bunker-to-accommodate-short-term-storage-of-stackable-material-from-the-slurry-separator.html'
    },
    {
      name: 'Concrete pad for collection of stackable material from the slurry separator by trailer',
      open: false,
      areaOfInterest: 'Air quality',
      landTypes: undefined,
      fundingTypes: 'Item',
      grantSchemes: 'Slurry Infrastructure grant',
      grantTypes: 'SFI',
      dataOptions: 'closed air-quality sig item sfi',
      url: 'SIG/Iteration2/Concrete-pad-for-collection-of-stackable-material-from-the-slurry-separator-by-trailer.html'
    },
    {
      name: 'COP3: Supplementary winter bird food (organic land)',
      open: true,
      areaOfInterest: 'Organic, Wildlife',
      landTypes: 'Arable, Lowland heath, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open arable csht organic wildlife lowland wetland',
      url: 'HT/COP3.html'
    },
    {
      name: 'CPAC1: Open access',
      open: true,
      areaOfInterest: 'Access',
      landTypes: 'Moorland and upland, Scrub',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland access scrub csht',
      url: 'HT/CPAC1.html'
    },
    {
      name: 'CPAC2: Access for people with reduced mobility',
      open: true,
      areaOfInterest: 'Access',
      landTypes: 'Grassland, Lowland heath',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland access csht lowland ',
      url: 'HT/CPAC2.html'
    },
    {
      name: 'CPAC3: Bridleway and cycle route access',
      open: true,
      areaOfInterest: 'Access',
      landTypes: 'Arable, Farmyard',
      grantTypes: 'CSHT',
      dataOptions: 'open arable access farmyard csht',
      url: 'HT/CPAC3.html'
    },
    {
      name: 'CPAC4: Footpath access',
      open: true,
      areaOfInterest: 'Access, Historic and archaeological features',
      landTypes: 'Arable, Scrub',
      grantTypes: 'CSHT',
      dataOptions: 'open arable access historic csht scrub',
      url: 'HT/CPAC4.html'
    },
    {
      name: 'CPAC5: Upgrading Countryside and Rights of Way ‘open access land’ and public rights of way for cyclists and horse riders',
      open: true,
      areaOfInterest: 'Access',
      landTypes: 'Moorland and upland, Scrub',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland access scrub csht',
      url: 'HT/CPAC5.html'
    },
    {
      name: 'CPAC6: Upgrading Countryside and Rights of Way ‘open access land’ and public rights of way for people with reduced mobility',
      open: true,
      areaOfInterest: 'Access',
      landTypes: 'Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland access csht',
      url: 'HT/CPAC6.html'
    },
    {
      name: 'CSP1: Difficult site supplement',
      open: true,
      areaOfInterest: 'Access, Livestock management, Vegetation control',
      landTypes: 'Farmyard, Grassland, Scrub',
      grantTypes: 'CSHT',
      dataOptions: 'open access livestock vegetation farmyeard grassland scrub csht',
      url: 'HT/CSP1.html'
    },
    {
      name: 'CSP2: Rewetting supplement',
      open: true,
      areaOfInterest: 'Flood prevention, Peat',
      landTypes: 'Grassland, Lowland heath, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland lowland wetland csht peat flood',
      url: 'HT/CSP2.html'
    },
    {
      name: 'CSP3: Bracken control supplement',
      open: true,
      areaOfInterest: 'Vegetation control',
      landTypes: 'Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland vegetation csht',
      url: 'HT/CSP3.html'
    },
    {
      name: 'CSP5: Shepherding supplement (non-moorland)',
      open: true,
      areaOfInterest: 'Livestock management',
      landTypes: 'Grassland, Lowland heath',
      grantTypes: 'CSHT',
      dataOptions: 'open livestock grassland lowland csht',
      url: 'HT/CSP5.html'
    },
    {
      name: 'CSP6: Cattle grazing supplement (non-moorland)',
      open: true,
      areaOfInterest: 'Livestock management, Soil health',
      landTypes: 'Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland livestock soil csht',
      url: 'HT/CSP6.html'
    },
    {
      name: 'CSP7: Introduction of cattle grazing on the Isles of Scilly supplement',
      open: true,
      areaOfInterest: 'Livestock management',
      landTypes: 'Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland livestock csht',
      url: 'HT/CSP7.html'
    },
    {
      name: 'CSP9: Support for threatened species',
      open: true,
      areaOfInterest: 'Biodiversity, Species recovery and management, Wildlife',
      landTypes: 'Grassland, Lowland heath',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland lowland biodiversity species wildlife csht',
      url: 'HT/CSP9.html'
    },
    {
      name: 'CSP11: Manage scrapes and gutters supplement',
      open: true,
      areaOfInterest: 'Biodiversity, Water availability and storage',
      landTypes: 'Farmyard, Grassland, Moorland and upland, Waterbodies, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open biodiversity water-av farmyard grassland moorland waterbodies wetland csht',
      url: 'HT/CSP11.html'
    },
    {
      name: 'CSP12: Rhododendron control and management supplement',
      open: true,
      areaOfInterest: 'Species recovery and management, Vegetation control',
      landTypes: 'Moorland and upland, Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland woodland vegetation species csht',
      url: 'HT/CSP12.html'
    },
    {
      name: 'CSP13: Invasive plant species control and management (lower rate)',
      open: true,
      areaOfInterest: 'Species recovery and management, Vegetation control',
      landTypes: 'Moorland and upland, Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland woodland vegetation species csht',
      url: 'HT/CSP13.html'
    },
    {
      name: 'CSP14: Invasive plant species control and management (intermediate rate)',
      open: true,
      areaOfInterest: 'Species recovery and management',
      landTypes: 'Grassland, Farmyard, Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland species farmyard csht  woodland pollinators biodiversity buffer-strips option water',
      url: 'HT/CSP14.html'
    },
    {
      name: 'CSP15: Invasive plant species control and management (upper rate)',
      open: true,
      areaOfInterest: 'Vegetation control',
      landTypes: 'Grassland, Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland csht woodland vegetation',
      url: 'HT/CSP15.html'
    },
    {
      name: 'CSP16: Keep native breeds on grazed habitats supplement (50-80%)',
      open: true,
      areaOfInterest: 'Livestock management, Species recovery and management',
      landTypes: 'Grassland, Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland moorland livestock species csht',
      url: 'HT/CSP16.html'
    },
    {
      name: 'CSP17: Keep native breeds on grazed habitats supplement (more than 80%)',
      open: true,
      areaOfInterest: 'Livestock management, Species recovery and management',
      landTypes: 'Grassland, Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland moorland livestock species csht',
      url: 'HT/CSP17.html'
    },
    {
      name: 'CSP18: Keep native breeds on extensively managed habitats supplement (50-80%)',
      open: true,
      areaOfInterest: 'Livestock management, Species recovery and management',
      landTypes: 'Grassland, Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland moorland livestock species csht',
      url: 'HT/CSP18.html'
    },
    {
      name: 'CSP19: Keep native breeds on extensively managed habitats supplement (more than 80%)',
      open: true,
      areaOfInterest: 'Livestock management, Species recovery and management',
      landTypes: 'Grassland, Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland moorland livestock species csht',
      url: 'HT/CSP19.html'
    },
    {
      name: 'CSP20: Edible dormouse control and management',
      open: true,
      areaOfInterest: 'Integrated pest management, Species recovery and management',
      landTypes: 'Grassland, Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open integrated grassland woodland csht species',
      url: 'HT/CSP20.html'
    },
    {
      name: 'CSP21: American mink control and management',
      open: true,
      areaOfInterest: 'Integrated pest management, Species recovery and management',
      landTypes: 'Wetland, Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open wetland woodland csht integrated species',
      url: 'HT/CSP21.html'
    },
    {
      name: 'CSW7: Arable reversion to grassland with low fertiliser input',
      open: true,
      areaOfInterest: 'Biodiversity, Soil health, Water quality',
      landTypes: 'Arable',
      grantTypes: 'CSHT',
      dataOptions: 'open arable csht biodiversity soil water-qu',
      url: 'HT/CSW7.html'
    },
    {
      name: 'CSW8: Manage intensive grassland adjacent to a watercourse',
      open: true,
      areaOfInterest: 'Flood prevention, Water quality',
      landTypes: 'Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland csht flood water-qu',
      url: 'HT/CSW8.html'
    },
    {
      name: 'CSW12: Make room for the river to move',
      open: true,
      areaOfInterest: 'Flood prevention',
      landTypes: 'Waterbodies, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open waterbodies wetland csht flood',
      url: 'HT/CSW12.html'
    },
    {
      name: 'CSW13: Manage grassland to reduce nutrient levels in groundwater',
      open: true,
      areaOfInterest: 'Soil health, Water quality',
      landTypes: 'Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open soil grassland csht water-qu',
      url: 'HT/CSW13.html'
    },
    {
      name: 'CSW14: Nil fertiliser supplement',
      open: true,
      areaOfInterest: 'Organic, Soil health, Water quality',
      landTypes: 'Arable, Grassland, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open arable grassland wetland csht organic soil water-qu',
      url: 'HT/CSW14.html'
    },
    {
      name: 'CSW15: Flood mitigation on arable reversion to grassland',
      open: true,
      areaOfInterest: 'Flood prevention',
      landTypes: 'Arable, Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open arable grassland csht flood',
      url: 'HT/CSW15.html'
    },
    {
      name: 'CSW16: Flood mitigation on permanent grassland',
      open: true,
      areaOfInterest: 'Flood prevention',
      landTypes: 'Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland csht flood',
      url: 'HT/CSW16.html'
    },
    {
      name: 'CSW17: Raise water levels in cropped or arable peat soils to near the land surface',
      open: true,
      areaOfInterest: 'Flood prevention, Peat, Water availability and storage',
      landTypes: 'Arable, Moorland and upland, Waterbodies, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open arable moorland waterbodies wetland csht peat flood water-av storage',
      url: 'HT/CSW17.html'
    },
    {
      name: 'CSW18: Raise water levels in permanent grassland peat soils to near the land surface',
      open: true,
      areaOfInterest: 'Peat, Water availability and storage',
      landTypes: 'Grassland, Moorland and upland, Waterbodies, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland moorland waterbodies wetland csht peat flood water-av storage',
      url: 'HT/CSW18.html'
    },
    {
      name: 'CSW19: Raise water levels in cropped or arable peat soils',
      open: true,
      areaOfInterest: 'Peat, Water availability and storage',
      landTypes: 'Arable, Moorland and upland, Waterbodies',
      grantTypes: 'CSHT',
      dataOptions: 'open arable moorland waterbodies csht peat flood water-av storage',
      url: 'HT/CSW19.html'
    },
    {
      name: 'CSW20: Raise water levels in permanent grassland peat soils',
      open: true,
      areaOfInterest: 'Peat, Water availability and storage, Water quality',
      landTypes: 'Grassland, Moorland and upland, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland moorland wetland csht peat flood water-av water-qu',
      url: 'HT/CSW20.html'
    },
    {
      name: 'CSW21: 6m to 24m 3-dimensional (3D) buffer strip',
      open: true,
      areaOfInterest: 'Field boundaries, Buffer strips',
      landTypes: 'Arable',
      grantTypes: 'CSHT',
      dataOptions: 'open arable csht boundaries buffer-strips',
      url: 'HT/CSW21.html'
    },
    {
      name: 'CSW22: Connect river and floodplain habitats',
      open: true,
      areaOfInterest: 'Flood prevention',
      landTypes: 'Waterbodies, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open waterbodies wetland csht flood',
      url: 'HT/CSW22.html'
    },
    {
      name: 'CSW23: Manage features on arable land for flood and drought resilience and water quality',
      open: true,
      areaOfInterest: 'Flood prevention',
      landTypes: 'Arable',
      grantTypes: 'CSHT',
      dataOptions: 'open arable csht boundaries flood',
      url: 'HT/CSW23.html'
    },
    {
      name: 'CSW24: Manage grassland for flood and drought resilience and water quality',
      open: true,
      areaOfInterest: 'Flood prevention, Water availability and storage',
      landTypes: 'Grassland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland csht flood water-av',
      url: 'HT/CSW24.html'
    },
    {
      name: 'CSW25: Manage riparian and water edge habitats',
      open: true,
      areaOfInterest: 'Biodiversity, Historic and archaeological features, Water quality',
      landTypes: 'Waterbodies, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open waterbodies wetland csht biodiversity historic water-qu',
      url: 'HT/CSW25.html'
    },
    {
      name: 'CSW26: Enhanced floodplain storage supplement',
      open: true,
      areaOfInterest: 'Biodiversity, Flood prevention, Water availability and storage',
      landTypes: 'Grassland, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland wetland csht biodiversity flood water-av',
      url: 'HT/CSW26.html'
    },
    {
      name: 'CUP2: Manage rough grazing for birds',
      open: true,
      areaOfInterest: 'Livestock management, Species recovery and management, Vegetation control, Wildlife',
      landTypes: 'Grassland, Lowland heath',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland livestock species vegetation wildlife csht lowland',
      url: 'HT/CUP2.html'
    },
    {
      name: 'CUP3: General moorland management',
      open: true,
      areaOfInterest: 'Biodiversity, Vegetation control',
      landTypes: 'moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland biodiversity vegetation csht',
      url: 'HT/CUP3.html'
    },
    {
      name: 'CUP7: Manage non-peat moorland soils for flood and drought resilience supplement',
      open: true,
      areaOfInterest: 'Flood prevention, Water availability and storage',
      landTypes: 'Moorland and upland, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland wetland csht flood water-av storage',
      url: 'HT/CUP7.html'
    },
    {
      name: 'CUP8: Moderate livestock grazing on moorland',
      open: true,
      areaOfInterest: 'Biodiversity, Livestock management',
      landTypes: 'Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland biodiversity livestock csht',
      url: 'HT/CUP8.html'
    },
    {
      name: 'CUP9: Low livestock grazing on moorland',
      open: true,
      areaOfInterest: 'Biodiversity, Livestock management',
      landTypes: 'Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open biodiversity livestock moorland csht',
      url: 'HT/CUP9.html'
    },
    {
      name: 'CUP10: Limited livestock grazing on moorland',
      open: true,
      areaOfInterest: 'Biodiversity, Livestock management',
      landTypes: 'Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland biodiversity livestock csht',
      url: 'HT/CUP10.html'
    },
    {
      name: 'CUP11: Shepherding livestock on moorland (no required stock removal period)',
      open: true,
      areaOfInterest: 'Livestock management',
      landTypes: 'Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland livestock csht',
      url: 'HT/CUP11.html'
    },
    {
      name: 'CUP12: Shepherding livestock on moorland (remove stock for a minimum of 4 months)',
      open: true,
      areaOfInterest: 'Livestock management',
      landTypes: 'Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open livestock moorland csht',
      url: 'HT/CUP12.html'
    },
    {
      name: 'CUP13: Shepherding livestock on moorland (remove stock for a minimum of 6 months)',
      open: true,
      areaOfInterest: 'Livestock management',
      landTypes: 'Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open livestock moorland csht',
      url: 'HT/CUP13.html'
    },
    {
      name: 'CUP14: Shepherding livestock on moorland (remove stock for a minimum of 8 months)',
      open: true,
      areaOfInterest: 'Livestock management',
      landTypes: 'Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open livestock moorland csht',
      url: 'HT/CUP14.html'
    },
    {
      name: 'CUP15: Keep cattle and ponies on moorland supplement (minimum 30% GLU)',
      open: true,
      areaOfInterest: 'Livestock management',
      landTypes: 'Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland livestock csht',
      url: 'HT/CUP15.html'
    },
    {
      name: 'CUP16: Keep cattle and ponies on moorland (minimum 70% GLU) supplement',
      open: true,
      areaOfInterest: 'Livestock management',
      landTypes: 'Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland livestock csht',
      url: 'HT/CUP16.html'
    },
    {
      name: 'CUP17: Keep cattle and ponies on moorland (100% GLU) supplement',
      open: true,
      areaOfInterest: 'Livestock management',
      landTypes: 'Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open moorland livestock csht',
      url: 'HT/CUP17.html'
    },
    {
      name: 'CUP18: Manage features for wildfire management (fire and fuel breaks) supplement',
      open: true,
      areaOfInterest: 'Biodiversity, Trees, Vegetation control',
      landTypes: 'Grassland, Lowland heath, Moorland and upland',
      grantTypes: 'CSHT',
      dataOptions: 'open biodiversity trees vegetation grassland lowland moorland csht',
      url: 'HT/CUP18.html'
    },
    {
      name: 'CWD1: Woodland creation maintenance',
      open: true,
      areaOfInterest: 'Agroforestry, Trees',
      landTypes: 'Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open agroforestry trees csht woodland',
      url: 'HT/CWD1.html'
    },
    {
      name: 'CWD2: Woodland improvement',
      open: true,
      areaOfInterest: 'Agroforestry, Trees',
      landTypes: 'Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open agroforestry trees csht woodland',
      url: 'HT/CWD2.html'
    },
    {
      name: 'CWD3: Manage woodland edges on arable land',
      open: true,
      areaOfInterest: 'Biodiversity, Trees',
      landTypes: 'Arable, Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open arable biodiversity trees csht woodland',
      url: 'HT/CWD3.html'
    },
    {
      name: 'CWD7: Manage scrub and open habitat mosaics',
      open: true,
      areaOfInterest: 'Biodiversity, Historic and archaelogical features, Trees, Vegetation control',
      landTypes: 'Scrub',
      grantTypes: 'CSHT',
      dataOptions: 'open biodiversity historic trees vegetation csht scrub',
      url: 'HT/CWD7.html'
    },
    {
      name: 'CWD8: Create scrub and open habitat mosaics',
      open: true,
      areaOfInterest: 'Biodiversity, Trees, Vegetation control',
      landTypes: 'Scrub',
      grantTypes: 'CSHT',
      dataOptions: 'open scrub biodiversity trees vegetation csht',
      url: 'HT/CWD8.html'
    },
    {
      name: 'CWD20: Create wood pasture',
      open: true,
      areaOfInterest: 'Agroforestry, Trees',
      landTypes: 'Wood pasture, Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open agroforestry trees csht woodland wood-pasture',
      url: 'HT/CWD20.html'
    },
    {
      name: 'CWD21: Restore wood pasture and parkland',
      open: true,
      areaOfInterest: 'Agroforestry, Trees',
      landTypes: 'Grassland, Wood pasture',
      grantTypes: 'CSHT',
      dataOptions: 'open agroforestry trees csht grassland wood-pasture',
      url: 'HT/CWD21.html'
    },
    {
      name: 'CWD22: Manage wood pasture and parkland',
      open: true,
      areaOfInterest: 'Agroforestry, Trees',
      landTypes: 'Grassland,  Wood pasture',
      grantTypes: 'CSHT',
      dataOptions: 'open agroforestry trees csht grassland wood-pasture',
      url: 'HT/CWD22.html'
    },
    {
      name: 'CWS1: Deer control and management',
      open: true,
      areaOfInterest: 'Integrated pest management, Species recovery and management',
      landTypes: 'Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open woodland csht integrated species',
      url: 'HT/CWS1.html'
    },
    {
      name: 'CWS2: Manage and restore plantations on ancient woodland sites (PAWS) supplement',
      open: true,
      areaOfInterest: 'Agroforestry, Trees',
      landTypes: 'Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open agroforestry trees csht woodland',
      url: 'HT/CWS2.html'
    },
    {
      name: 'CWS3: Grey squirrel control and management',
      open: true,
      areaOfInterest: 'Integrated pest management, Wildlife',
      landTypes: 'Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open woodland csht integrated wildlife',
      url: 'HT/CWS3.html'
    },
    {
      name: 'CWS5: Improve woodland resilience supplement',
      open: true,
      areaOfInterest: 'Agroforestry, Trees',
      landTypes: 'Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open woodland agroforestry trees csht',
      url: 'HT/CWS5.html'
    },
    {
      name: 'CWS7: Manage historic features in woodlands supplement',
      open: true,
      areaOfInterest: 'Historic and archaeological features, Trees',
      landTypes: 'Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open woodland csht historic trees',
      url: 'HT/CWS7.html'
    },
    {
      name: 'CWS8: Manage native woodland including ancient semi-natural woodlands (ASNW) supplement',
      open: true,
      areaOfInterest: 'Agroforestry, Historic and archaeological features, Trees',
      landTypes: 'Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open arable trees farmyard csht woodland moorland upland pollinators biodiversity buffer-strips option water',
      url: 'HT/CWS8.html'
    },
    {
      name: 'CWS9: Manage woodlands for flood and drought mitigation supplement',
      open: true,
      areaOfInterest: 'Agroforestry, Flood prevention, Trees',
      landTypes: 'Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open woodland agroforestry flood trees csht',
      url: 'HT/CWS9.html'
    },
    {
      name: 'CWS10: 2-zone rides supplement',
      open: true,
      areaOfInterest: 'Agroforestry, Historic and archaeological features, Trees',
      landTypes: 'Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open agroforestry historic trees csht woodland',
      url: 'HT/CWS10.html'
    },
    {
      name: 'CWS11: 3-zone rides supplement',
      open: true,
      areaOfInterest: 'Agroforestry, Trees',
      landTypes: 'Woodland and forest',
      grantTypes: 'CSHT',
      dataOptions: 'open woodland agroforestry trees csht',
      url: 'HT/CWS11.html'
    },
    {
      name: 'CWT1: Buffer in-field ponds and ditches on improved grassland',
      open: true,
      areaOfInterest: 'Buffer strips, Water quality',
      landTypes: 'Grassland, Waterbodies, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland waterbodies wetland csht buffer-strips water-qu',
      url: 'HT/CWT1.html'
    },
    {
      name: 'CWT2: Buffer in-field ponds and ditches on arable land',
      open: true,
      areaOfInterest: 'Buffer strips, Water availability and storage, Water quality',
      landTypes: 'Arable, Waterbodies',
      grantTypes: 'CSHT',
      dataOptions: 'open arable waterbodies csht buffer-strips water-av water-qu',
      url: 'HT/CWT2.html'
    },
    {
      name: 'CWT3: Manage ditches of high environmental value',
      open: true,
      areaOfInterest: 'Field boundaries, Water quality',
      landTypes: 'Waterbodies, Grassland, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open waterbodies grassland wetland csht boundaries water-qu',
      url: 'HT/CWT3.html'
    },
    {
      name: 'CWT10: Manage lowland raised bog',
      open: true,
      areaOfInterest: 'Peat, Water availability and storage',
      landTypes: 'Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open wetland csht peat water-av storage',
      url: 'HT/CWT10.html'
    },
    {
      name: 'CWT12: Wetland grazing supplement',
      open: true,
      areaOfInterest: 'Flood prevention, Livestock management',
      landTypes: 'Grassland, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open grassland wetland csht flood livestock',
      url: 'HT/CWT12.html'
    },
    {
      name: 'CWT13: Manage and restore fen, reedbed and wetland mosaics',
      open: true,
      areaOfInterest: 'Buffer strips',
      landTypes: 'Arable, Coastal, Farmyard, Lowland heath, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open arable coastal farmyard csht lowland wetland pollinators biodiversity buffer-strips option water',
      url: 'HT/CWT13.html'
    },
    {
      name: 'CWT14: Create fen, reedbed or wetland mosaics',
      open: true,
      areaOfInterest: 'Biodiversity',
      landTypes: 'Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open biodiversity csht wetland',
      url: 'HT/CWT14.html'
    },
    {
      name: 'CWT15: Manage ponds and bodies of water up to 2 hectares',
      open: true,
      areaOfInterest: 'Water availability and storage, Water quality',
      landTypes: 'Waterbodies, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open waterbodies wetland csht water-av water-qu',
      url: 'HT/CWT15.html'
    },
    {
      name: 'CWT16: Manage lakes and bodies of water greater than 2 hectares',
      open: true,
      areaOfInterest: 'Flood prevention, Water quality',
      landTypes: 'Waterbodies, Wetland',
      grantTypes: 'CSHT',
      dataOptions: 'open waterbodies wetland csht flood water-qu',
      url: 'HT/CWT16.html'
    },
    {
      name: 'Earth bank lagoon with synthetic liner',
      open: false,
      areaOfInterest: 'Air quality',
      landTypes: undefined,
      fundingTypes: 'Item',
      grantSchemes: 'Slurry Infrastructure grant',
      grantTypes: 'SFI',
      dataOptions: 'closed air-quality sig item sfi',
      url: 'SIG/Iteration2/Earth-bank-lagoon-with-synthetic-liner.html'
    },
    {
      name: 'ED1: Educational access',
      open: true,
      areaOfInterest: 'Access',
      landTypes: 'Moorland and upland, Woodland and forest',
      fundingTypes: 'Option',
      grantSchemes: 'Countryside Stewardship',
      grantTypes: 'SFI',
      dataOptions: 'open access moorland woodland option sfi',
      url: 'CS/Iteration2/ED1.html'
    },
    {
      name: 'Earth bank lagoon without synthetic liner',
      open: false,
      areaOfInterest: 'Air quality',
      landTypes: undefined,
      fundingTypes: 'Item',
      grantSchemes: 'Slurry Infrastructure grant',
      grantTypes: 'SFI',
      dataOptions: 'closed air-quality sig item sfi',
      url: 'SIG/Iteration2/Earth-bank-lagoon-without-synthetic-liner.html'
    },
    {
      name: 'Electric powered slurry transfer pump',
      open: false,
      areaOfInterest: 'Air quality',
      landTypes: undefined,
      fundingTypes: 'Item',
      grantSchemes: 'Slurry Infrastructure grant',
      grantTypes: 'SFI',
      dataOptions: 'closed air-quality sig item sfi',
      url: 'SIG/Iteration2/Electric-powered-slurry-transfer-pump.html'
    },
    {
      name: 'FETF1: Electronic tray filling machine',
      open: false,
      areaOfInterest: 'Pollinators, Wildlife',
      landTypes: 'Arable',
      fundingTypes: 'Item',
      grantSchemes: 'Farming Equipment and Technology Fund',
      grantTypes: 'SFI',
      dataOptions: 'closed pollinators wildlife arable item fetf sfi',
      url: 'FETF/Iteration2/FETF1.html'
    },
    {
      name: 'FETF2: Electronic row seeder',
      open: false,
      areaOfInterest: 'Pollinators, Wildlife',
      landTypes: 'Arable',
      fundingTypes: 'Item',
      grantSchemes: 'Farming Equipment and Technology Fund',
      grantTypes: 'SFI',
      dataOptions: 'closed pollinators wildlife arable item fetf sfi',
      url: 'FETF/Iteration2/FETF2.html'
    },
    {
      name: 'FETF3: Five row seeder',
      open: false,
      areaOfInterest: 'Pollinators, Wildlife',
      landTypes: 'Arable',
      fundingTypes: 'Item',
      grantSchemes: 'Farming Equipment and Technology Fund',
      grantTypes: 'SFI',
      dataOptions: 'closed pollinators wildlife arable item fetf sfi',
      url: 'FETF/Iteration2/FETF3.html'
    },
    {
      name: 'FETF4: Paper pot transplanter ',
      open: false,
      areaOfInterest: 'Pollinators, Wildlife',
      landTypes: 'Arable',
      fundingTypes: 'Item',
      grantSchemes: 'Farming Equipment and Technology Fund',
      grantTypes: 'SFI',
      dataOptions: 'closed pollinators wildlife arable item fetf sfi',
      url: 'FETF/Iteration2/FETF4.html'
    },
    {
      name: 'FETF5: Inter row weeders 1.8m',
      open: false,
      areaOfInterest: 'Pollinators, Wildlife, Vegetation control',
      landTypes: 'Arable',
      fundingTypes: 'Item',
      grantSchemes: 'Farming Equipment and Technology Fund',
      grantTypes: 'SFI',
      dataOptions: 'closed pollinators wildlife vegetation arable item fetf sfi',
      url: 'FETF/Iteration2/FETF5.html'
    },
    {
      name: 'FETF6: Inter row hoe 3m',
      open: false,
      areaOfInterest: 'Pollinators, Wildlife, Vegetation control',
      landTypes: 'Arable',
      fundingTypes: 'Item',
      grantSchemes: 'Farming Equipment and Technology Fund',
      grantTypes: 'SFI',
      dataOptions: 'closed pollinators wildlife vegetation arable item fetf sfi',
      url: 'FETF/Iteration2/FETF6.html'
    },
    {
      name: 'FETF7: Inter row weeders hoe 6m',
      open: false,
      areaOfInterest: 'Pollinators, Wildlife, Vegetation control',
      landTypes: 'Arable',
      fundingTypes: 'Item',
      grantSchemes: 'Farming Equipment and Technology Fund',
      grantTypes: 'SFI',
      dataOptions: 'closed pollinators wildlife vegetation arable item fetf sfi',
      url: 'FETF/Iteration2/FETF7.html'
    },
    {
      name: 'FETF8: Salad leaf harvester',
      open: false,
      areaOfInterest: 'Pollinators, Wildlife, Vegetation control',
      landTypes: 'Arable',
      fundingTypes: 'Item',
      grantSchemes: 'Farming Equipment and Technology Fund',
      grantTypes: 'SFI',
      dataOptions: 'closed pollinators wildlife vegetation arable item fetf sfi',
      url: 'FETF/Iteration2/FETF8.html'
    },
    {
      name: 'FETF9: Mobile vertical frost fans for vineyards and horticulture',
      open: false,
      areaOfInterest: 'Pollinators, Wildlife, Vegetation control',
      landTypes: 'Arable',
      fundingTypes: 'Item',
      grantSchemes: 'Farming Equipment and Technology Fund',
      grantTypes: 'SFI',
      dataOptions: 'closed pollinators wildlife vegetation arableLand item fetf sfi',
      url: 'FETF/Iteration2/FETF9.html'
    },
    {
      name: 'FETF10: Fruit ripeness spectrometers ',
      open: false,
      areaOfInterest: 'Pollinators, Wildlife, Vegetation control',
      landTypes: 'Arable',
      fundingTypes: 'Item',
      grantSchemes: 'Farming Equipment and Technology Fund',
      grantTypes: 'SFI',
      dataOptions: 'closed pollinators wildlife vegetation arable item fetf sfi',
      url: 'FETF/Iteration2/FETF10.html'
    },
    {
      name: 'Fixed flexible cover',
      open: false,
      areaOfInterest: 'Air quality',
      landTypes: undefined,
      fundingTypes: 'Item',
      grantSchemes: 'Slurry Infrastructure grant',
      grantTypes: 'SFI',
      dataOptions: 'closed air-quality sig item sfi',
      url: 'SIG/Iteration2/Fixed-flexible-cover.html'
    },
    {
      name: 'Floating flexible cover',
      open: false,
      areaOfInterest: 'Air quality',
      landTypes: undefined,
      fundingTypes: 'Item',
      grantSchemes: 'Slurry Infrastructure grant',
      grantTypes: 'SFI',
      dataOptions: 'closed air-quality sig item sfi',
      url: 'SIG/Iteration2/Floating-flexible-cover.html'
    },
    {
      name: 'HRW1: Assess and record hedgerow condition',
      open: true,
      areaOfInterest: 'Biodiversity, Boundaries, Pollinators, Wildlife',
      landTypes: undefined,
      fundingTypes: 'Action',
      grantSchemes: 'Sustainable Farming Incentive',
      grantTypes: 'SFI',
      dataOptions: 'open biodiversity boundaries pollinators wildlife action sfi',
      url: 'SFI/Iteration2/HRW1.html'
    },
    {
      name: 'HRW2: Manage hedgerows',
      open: true,
      areaOfInterest: 'Biodiversity, Boundaries, Pollinators, Wildlife',
      landTypes: undefined,
      fundingTypes: 'Action',
      grantSchemes: 'Sustainable Farming Incentive',
      grantTypes: 'SFI',
      dataOptions: 'open biodiversity boundaries pollinators wildlife action sfi',
      url: 'SFI/Iteration2/HRW2.html'
    },
    {
      name: 'HRW3: Maintain or establish hedgerow trees',
      open: true,
      areaOfInterest: 'Biodiversity, Boundaries, Pollinators, Wildlife, Trees',
      landTypes: undefined,
      fundingTypes: 'Action',
      grantSchemes: 'Sustainable Farming Incentive',
      grantTypes: 'SFI',
      dataOptions: 'open biodiversity boundaries pollinators wildlife trees action sfi',
      url: 'SFI/Iteration2/HRW3.html'
    },
    {
      name: 'OP1: Overwintered stubble',
      open: true,
      areaOfInterest: 'Biodiversity, Organic',
      landTypes: 'Arable, Moorland and upland',
      fundingTypes: 'Option',
      grantSchemes: 'Countryside Stewardship',
      grantTypes: 'SFI',
      dataOptions: 'open biodiversity arable organic moorland option sfi',
      url: 'CS/Iteration2/OP1.html'
    },
    {
      name: 'PA1: Implementation plan',
      open: true,
      areaOfInterest: 'Flood prevention, Water quality',
      landTypes: 'Moorland and upland',
      fundingTypes: 'Item',
      grantSchemes: 'Countryside Stewardship',
      grantTypes: 'SFI',
      dataOptions: 'open flood water-qu moorland item sfi',
      url: 'CS/Iteration2/PA1.html'
    },
    {
      name: 'RP4: Livestock and machinery hardcore tracks',
      open: true,
      areaOfInterest: 'Biodiversity, Water quality',
      landTypes: 'Moorland and upland',
      fundingTypes: 'Item',
      grantSchemes: 'Countryside Stewardship',
      grantTypes: 'SFI',
      dataOptions: 'open biodiversity water-qu moorland item sfi',
      url: 'CS/Iteration2/RP4.html'
    },
    {
      name: 'RP9: Earth banks and soil bunds',
      open: true,
      areaOfInterest: 'Biodiversity, Flood prevention, Soil health, Water quality',
      landTypes: 'Moorland and upland',
      fundingTypes: 'Item',
      grantSchemes: 'Countryside Stewardship',
      grantTypes: 'SFI',
      dataOptions: 'open biodiversity flood soil water-qu moorland item sfi',
      url: 'CS/Iteration2/RP9.html'
    },
    {
      name: 'SP4: Control of invasive plant species supplement ',
      open: true,
      areaOfInterest: 'Biodiversity, Vegetation control',
      landTypes: 'Moorland and upland',
      fundingTypes: 'Option',
      grantSchemes: 'Countryside Stewardship',
      grantTypes: 'SFI',
      dataOptions: 'open biodiversity vegetation moorland option sfi',
      url: 'CS/Iteration2/SP4.html'
    },
    {
      name: 'UP3: Management of moorland',
      open: true,
      areaOfInterest: 'Biodiversity',
      landTypes: 'Moorland and upland',
      fundingTypes: 'Option',
      grantSchemes: 'Countryside Stewardship',
      grantTypes: 'SFI',
      dataOptions: 'open biodiversity moorland option sfi',
      url: 'CS/Iteration2/UP3.html'
    },
    {
      name: 'WD10: Management of upland wood pasture and parkland',
      open: true,
      areaOfInterest: 'Air quality, Historic and archaeological features',
      landTypes: 'Moorland and upland, Woodland and forest',
      fundingTypes: 'Option',
      grantSchemes: 'Countryside Stewardship',
      grantTypes: 'SFI',
      dataOptions: 'open air-quality historic moorland woodland option sfi',
      url: 'CS/Iteration2/WD10.html'
    }
  ]
};

