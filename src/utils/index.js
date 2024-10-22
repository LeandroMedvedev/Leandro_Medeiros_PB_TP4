function convertDateToBrazilianFormat(isoDate) {
  const [year, month, day] = isoDate.split('-');
  return `${day}-${month}-${year}`;
}

function calculatePrice(movieDate) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const movieYear = new Date(movieDate).getFullYear();

  return movieYear === currentYear ? `R$ ${7.9}` : `R$ ${3.9}`;
}

export { calculatePrice, convertDateToBrazilianFormat };
