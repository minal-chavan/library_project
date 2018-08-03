//var Student=require('./../factory/student_factory.js');
var Student=require('../controller/controller_student.js');
var Book=require('../controller/controller_book.js');
var Ledger=require('../controller/controller_ldger.js');

module.exports=[
{method: 'POST',path: '/students',config:Student.addStudent},
{method: 'GET',path: '/students',config:Student.findAllByName},
{method: 'POST',path: '/books',config:Book.addBook},
{method: 'GET',path: '/books',config:Book.findAllByName},
{method: 'PUT',path: '/books',config:Book.updateBook},
{method: 'PUT',path: '/students',config:Student.updateStudent},
{method: 'GET',path: '/ledgers',config:Ledger.findAll},
{method: 'PUT',path: '/ledgers',config:Ledger.updateEntry},
{method: 'POST',path: '/ledgers',config:Ledger.addEntry}
]
	