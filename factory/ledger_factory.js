'use strict'
var models = require('./../models');
//var Logger = require('./../utils/logger');
//var ItemType = require('./item_type_factory.js');

var ledger = models.ledger;
//var log = new Logger('students');

class Ledgers{
 
    init(data) {
//        super.init(data.item_type_id);
        this.data = data;
    }

    addEntry(data) {
        return models.ledger.addEntry(this.data);
    }

    findAll(student_id) {
       // return models.student.findAllByName(this.data, student_name);
       console.log(student_id);
       if (student_id) {
            return models.ledger.findAllById(student_id);
        } else {
            return models.ledger.findAllEntry();
        }
    }

    findAllEntry() {
        return models.ledger.findAllEntry();
    }

    updateEntry(data,student_id){
        return models.ledger.updateEntry(this.data,student_id)
    }

}

module.exports = Ledgers;
