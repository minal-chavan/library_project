'use strict'
var models = require('./../models');

var book = models.book;
//var log = new Logger('students');

class Books  {

    init(data) {

        this.data = data;
    }

    addBook(data) {
        return models.book.addBook(this.data);
    }

    findAllByName(book_name) {
       // return models.student.findAllByName(this.data, student_name);
       console.log(book_name);
       if (book_name) {
            return models.book.findAllByName(book_name);
        } else {
            return models.book.findAllBook();
        }
    }

    findAllBook() {
        return models.book.findAllBook();
    }
    updateBook(book_name,data){
        return models.book.updateBook(book_name,this.data)
    }

}

module.exports = Books;

