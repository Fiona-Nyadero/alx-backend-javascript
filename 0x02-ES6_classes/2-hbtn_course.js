export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(neuName) {
    if (typeof neuName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = neuName;
  }

  get length() {
    return this._length;
  }

  set length(neuLength) {
    if (typeof neuLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = neuLength;
  }

  get students() {
    return this._students;
  }

  set students(neuStudents) {
    this._students = neuStudents;
  }
}
