const conjunctionOptions = [
  {
    value: 'and',
    label: 'and'
  },
  {
    value: 'or',
    label: 'or'
  }
];

const fieldOptions = [
  {
    value: 'parcel_id',
    label: 'Parcel ID'
  },
  {
    value: 'property_location',
    label: 'Property Address'
  },
  {
    value: 'township',
    label: 'Township'
  },
  {
    value: 'land_use',
    label: 'Land Use'
  },
  {
    value: 'property_class',
    label: 'Property Class',
  },
  {
    value: 'neighborhood_code',
    label: 'Neighborhood Code',
  },
  {
    value: 'zoning',
    label: 'Zoning',
  },
  {
    value: 'homestead_farmstead_status',
    label: 'Homestead Status',
  },
  {
    value: 'legal_desc',
    label: 'Leagl Desc',
  },
  {
    value: 'owner',
    label: 'Owner',
  },
  {
    value: 'mailing_address',
    label: 'Mailing Address',
  },
  {
    value: 'utilities',
    label: 'Utilities',
  },
  {
    value: 'style',
    label: 'Style',
  },
  {
    value: 'exterior_walls',
    label: 'Exterior Walls',
  },
  {
    value: 'fuel_type',
    label: 'Fuel Type',
  },
  {
    value: 'heat_system',
    label: 'Heat System',
  },
  {
    value: 'heat_ac_type',
    label: 'Heat/AC Type',
  },
  {
    value: 'basement',
    label: 'basement',
  },
  {
    value: 'amenity_1',
    label: 'Amenity 1',
  },
  {
    value: 'amenity_2',
    label: 'Amenity 2',
  },
  {
    value: 'amenity_3',
    label: 'Amenity 3',
  },
  {
    value: 'amenity_4',
    label: 'Amenity 4',
  },
  {
    value: 'living_units',
    label: 'Living Units',
    isNumeric: true,
  },
  {
    value: 'land_area',
    label: 'Land Area',
    isNumeric: true,
  },
  {
    value: 'year_built',
    label: 'Year Built',
    isNumeric: true,
  },
  {
    value: 'year_remodeled',
    label: 'Year Remodeled',
    isNumeric: true,
  },
  {
    value: 'fireplaces',
    label: 'Fireplaces',
    isNumeric: true,
  },
  {
    value: 'total_rooms',
    label: 'Total Rooms',
    isNumeric: true,
  },
  {
    value: 'bedrooms',
    label: 'Bedrooms',
    isNumeric: true,
  },
  {
    value: 'full_baths',
    label: 'Full Baths',
    isNumeric: true,
  },
  {
    value: 'half_baths',
    label: 'Half Baths',
    isNumeric: true,
  },
  {
    value: 'basement_garage_spaces',
    label: 'Basement Garage Spaces',
    isNumeric: true,
  },
  {
    value: 'finished_basement_area',
    label: 'Finished Basement Area',
    isNumeric: true,
  },
  {
    value: 'basement_rec_room_area',
    label: 'Basement Rec Room Area',
    isNumeric: true,
  },
  {
    value: 'living_area',
    label: 'Living Area',
    isNumeric: true,
  },
  {
    value: 'stories',
    label: 'Stories',
    isNumeric: true,
  },
];

const equalityOptions = [
  {
    value: 'is',
    label: 'is'
  },
  {
    value: 'isNot',
    label: 'is not'
  },
  {
    value: 'contains',
    label: 'contains'
  },
  {
    value: 'notContain',
    label: 'does not contain'
  },
  {
    value: 'equals',
    label: '=',
    isNumeric: true
  },
  {
    value: 'notEqual',
    label: '≠',
    isNumeric: true
  },
  {
    value: 'greaterThan',
    label: '>',
    isNumeric: true
  },
  {
    value: 'greaterThanEq',
    label: '>=',
    isNumeric: true
  },
  {
    value: 'lessThan',
    label: '<',
    isNumeric: true
  },
  {
    value: 'lessThanEq',
    label: '<=',
    isNumeric: true
  },
];

export { conjunctionOptions, fieldOptions, equalityOptions };
