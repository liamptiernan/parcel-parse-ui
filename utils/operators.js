const operators = (data, filter, method) => {
  const { field, value } = filter;
  const textMethods = ['is', 'isNot', 'contains', 'notContain']

  let cleanValue = Number(value);

  if (textMethods.includes(method)) {
    cleanValue = value.toLowerCase();
  } else if (value === '') {
    return {
      newData: data,
      inverse: []
    };
  }

  let newData = [];
  let inverse = [];

  switch (method) {
    case 'is':
      for (const record of data) {
        if (record[field].toLowerCase() === cleanValue) {
          newData.push(record);
        } else {
          inverse.push(record);
        }
      }
      break;
    case 'isNot':
      for (const record of data) {
        if (record[field].toLowerCase() !== cleanValue) {
          newData.push(record);
        } else {
          inverse.push(record);
        }
      }
      break;
    case 'contains':
      if (cleanValue === '') {
        newData = data;
        inverse = []
        break;
      }

      for (const record of data) {
        if (record[field].toLowerCase().includes(cleanValue)) {
          newData.push(record);
        } else {
          inverse.push(record);
        }
      }
      break;
    case 'notContain':
      if (cleanValue === '') {
        newData = data;
        inverse = []
        break;
      }
      
      for (const record of data) {
        if (!record[field].toLowerCase().includes(cleanValue)) {
          newData.push(record);
        } else {
          inverse.push(record);
        }
      }
      break;
    case 'equals':
      for (const record of data) {
        if (record[field] === cleanValue) {
          newData.push(record);
        } else {
          inverse.push(record);
        }
      }
      break;
    case 'notEqual':
      for (const record of data) {
        if (record[field] !== cleanValue) {
          newData.push(record);
        } else {
          inverse.push(record);
        }
      }
    case 'lessThan':
      for (const record of data) {
        if (record[field] < cleanValue) {
          newData.push(record);
        } else {
          inverse.push(record);
        }
      }
      break;
    case 'lessThanEq':
      for (const record of data) {
        if (record[field] <= cleanValue) {
          newData.push(record);
        } else {
          inverse.push(record);
        }
      }
      break;
    case 'greaterThan':
      for (const record of data) {
        if (record[field] > cleanValue) {
          newData.push(record);
        } else {
          inverse.push(record);
        }
      }
      break;
    case 'greaterThanEq':
      for (const record of data) {
        if (record[field] >= cleanValue) {
          newData.push(record);
        } else {
          inverse.push(record);
        }
      }
      break;
    default:
      newData = [];
      inverse = data;
      break;
  }

  return { newData, inverse }
};

export default operators;
