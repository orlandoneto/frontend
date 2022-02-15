const formatTwoDecimal = price => {
  if (!price) {
    return '0,00';
  }
  const formated = parseFloat(price).toFixed(2).replace('.', ',');
  return formated;
};

export default formatTwoDecimal;
