function valueComparator(value, targetValue, operator) {
  if (targetValue === null) return true;

  switch (operator) {
  case 'CONTEM':
    return value.includes(targetValue);

  case 'IGUAL':
    return +value === +targetValue;

  case 'MENOR':
    return +value < +targetValue;

  case 'MAIOR':
    return +value > +targetValue;

  default:
    return false;
  }
}

export default valueComparator;
