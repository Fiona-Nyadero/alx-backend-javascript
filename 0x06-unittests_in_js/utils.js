const Utils = {
  calculateNumber(type, a, b) {
    roundeda = Math.round(a);
    roundedb = Math.round(b);

    switch (type) {
      case 'SUM':
        return roundeda + roundedb;
      case 'SUBTRACT':
        return roundeda - roundedb;
      case 'DIVIDE':
        if (roundedb === 0) {
            return 'Error';
        }
        return roundeda / roundedb;
      default:
        throw new Error('Invalid operation type');
      }
    }
  };

  module.exports = Utils;