const operatorOptions = [
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
    value: 'property_class',
    label: 'Property Class'
  },
  {
    value: 'land_area',
    label: 'Land Area'
  },
  {
    value: 'township',
    label: 'Township'
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
    label: '='
  },
  {
    value: 'notEqual',
    label: '≠'
  },
  {
    value: 'greaterThan',
    label: '>'
  },
  {
    value: 'greaterThanEq',
    label: '>='
  },
  {
    value: 'lessThan',
    label: '<'
  },
  {
    value: 'lessThanEq',
    label: '<='
  },
];

export { operatorOptions, fieldOptions, equalityOptions };
