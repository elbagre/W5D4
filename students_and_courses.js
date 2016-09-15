function Student (fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.name = `${fname} ${lname}`;
  this.courses = [];
  this.course_load = {};
}

Student.prototype.enroll = function (course) {
  if (!this.courses.includes(course) && !this.hasConflict(course)) {
    this.courses.push(course);
    course.addStudent(this);
    if (this.course_load[course.dept]) {
      this.course_load[course.dept] += course.credits;
    } else {
      this.course_load[course.dept] = course.credits;
    }
  } else {
    // console.log("Either already in course or course conflict");
    throw("Either already in course or course conflict");
  }
};

Student.prototype.hasConflict = function (new_course) {
  for (let i = 0; i < this.courses.length; i++) {
    if (this.courses[i].conflictsWith(new_course)) return true;
  }
  return false;
};

// Student.prototype.course_load = function


function Course (name, dept, credits, time_block, days) {
  this.name = name;
  this.dept = dept;
  this.credits = credits;
  this.students = [];
  this.time_block = time_block;
  this.days = days;
}

Course.prototype.addStudent = function(student) {
  this.students.push(student);
};

Course.prototype.conflictsWith = function(otherCourse) {
  if (this.time_block !== otherCourse.time_block) return false;
  let conflicts = false;
  this.days.forEach((day) => {
    if (otherCourse.days.includes(day)) conflicts = true;
  });
  return conflicts;
};

const greg = new Student("Greg", "Michnikov");
const peter = new Student("Peter", "McKinley");
const american_history = new Course("history of the americas", "History", 3, 1, ["Mon", "Tue"]);
const anthro = new Course("Anthro 101", "History", 5, 1, ["Mon", "Fri"]);
const sociology = new Course("Economics of Star Wars", "Sociology", 1, 2, ["Tue", "Thu"]);

greg.enroll(anthro);
// greg.enroll(anthro);
greg.enroll(american_history);
// console.log(greg.courses);
// console.log(greg.course_load);
// peter.enroll(american_history);
// peter.enroll(sociology);
// console.log(american_history.students);
// console.log(peter.course_load);

// console.log(american_history.conflictsWith(anthro));
// console.log(american_history.conflictsWith(sociology));
