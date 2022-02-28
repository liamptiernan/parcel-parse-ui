const operators = (data, filter, method) => {
  const { field, value } = filter;
  const textMethods = ['is', 'isNot', 'contains', 'notContain']

  let cleanValue = Number(value);

  if (textMethods.includes(method)) {
    cleanValue = value.toLowerCase();
  } else if (value === '') {
    return data;
  }

  switch (method) {
    case 'is':
      return data.filter(parcel => parcel[field].toLowerCase() === cleanValue);
    case 'isNot':
      return data.filter(parcel => parcel[field].toLowerCase() !== cleanValue);
    case 'contains':
      if (cleanValue === '') return data; 

      return data.filter(parcel => parcel[field].toLowerCase().includes(cleanValue));
    case 'notContain':
      if (cleanValue === '') return data;
      
      return data.filter(parcel => !parcel[field].toLowerCase().includes(cleanValue));
    case 'equals':
      return data.filter(parcel => parcel[field] === cleanValue);
    case 'notEqual':
      return data.filter(parcel => parcel[field] !== cleanValue);
    case 'lessThan':
      return data.filter(parcel => parcel[field] < cleanValue);
    case 'lessThanEq':
      return data.filter(parcel => parcel[field] <= cleanValue);
    case 'greaterThan':
      return data.filter(parcel => parcel[field] > cleanValue);
    case 'greaterThanEq':
      return data.filter(parcel => parcel[field] >= cleanValue);
  }

  return [];
};

export default operators;
