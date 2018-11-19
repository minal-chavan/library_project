'use strict'
var models = require('./../models');
//var Logger = require('./../utils/logger');
//var ItemType = require('./item_type_factory.js');

var ledger = models.staff;

class Staffs{
 
    init(data) {
        this.data = data;
    }

    addEntry(data) {
        return models.staff.addEntry(this.data);
    }

    findAll(student_id) {
       // return models.student.findAllByName(this.data, student_name);
       console.log(student_id);
       if (student_id) {
            return models.staff.findAllById(student_id);
        } else {
            return models.staff.findAllEntry();
        }
    }

    findAllEntry() {
        return models.staff.findAllEntry();
    }

    updateEntry(data,student_id){
        return models.staff.updateEntry(this.data,student_id)
    }

}

module.exports = Staffs;
//staff model has importedstudent

