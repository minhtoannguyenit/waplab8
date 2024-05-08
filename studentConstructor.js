function Student (firstname = 'Default', lastname = 'Default', grades = []) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.grades = grades;
}

Student.prototype.inputNewGrade = function(newGrade) {
  this.grades.push(newGrade);
}
Student.prototype.computeAverage = function() {
  return this.grades.reduce((acc, g) => acc + g, 0) / this.grades.length;
}

Student.prototype.getStudentInfo = function() {
  console.log(`Name: ${this.firstname} ${this.lastname}, Average grade: ${this.computeAverage()}`);
}

const duy = new Student('John', 'Doe');
duy.inputNewGrade(90);
duy.inputNewGrade(87);
duy.inputNewGrade(83);
duy.inputNewGrade(84);
duy.getStudentInfo();

const toan = new Student('Minh', 'Nguyen');
toan.inputNewGrade(80);
toan.inputNewGrade(85);
toan.inputNewGrade(83);
toan.inputNewGrade(90);
toan.getStudentInfo();