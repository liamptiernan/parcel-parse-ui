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
    value: 'owner',
    label: 'Owner'
  },
  {
    value: 'lot_size',
    label: 'Lot Size'
  },
  {
    value: 'type',
    label: 'Type'
  },
];

const equalityOptions = [
  {
    value: 'is',
    label: 'is'
  },
  {
    value: 'is_not',
    label: 'is not'
  },
  {
    value: 'contains',
    label: 'contains'
  },
];

export { operatorOptions, fieldOptions, equalityOptions };
