const calculateNumber = (type, a, b) => {
  switch(true) {
    case type === 'SUM':
      return Math.round(a) + Math.round(b);
    case type === 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case type === 'DIVIDE':
      if (Math.round(b) === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    default:
      return undefined
  }
}

module.exports = calculateNumber;
