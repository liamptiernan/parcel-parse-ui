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
    value: 'living_units',
    label: 'Living Units',
    isNumeric: true
  },
  {
    value: 'land_area',
    label: 'Land Area',
    isNumeric: true
  }
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
