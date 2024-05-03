class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(neuCode) {
    this._code = neuCode;
  }

  get name() {
    return this._name;
  }

  set name(neuName) {
    this._name = neuName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
