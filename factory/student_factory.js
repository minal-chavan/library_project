'use strict'
var models = require('./../models');


var student = models.student;


class Students  {

    init(data) {

        this.data = data;
    }

    addStudent(data) {
        return models.student.addStudent(this.data);
    }

    findAllByName(student_name) {
       // return models.student.findAllByName(this.data, student_name);
       console.log(student_name);
       if (student_name) {
            return models.student.findAllByName(student_name);
        } else {
            return models.student.findAllStudent();
        }
    }

    findAllStudent() {
        return models.student.findAllStudent();
    }

    updateStudent(student_name,data){
        return models.student.updateStudent(student_name,this.data)
    }

}

module.exports = Students;
