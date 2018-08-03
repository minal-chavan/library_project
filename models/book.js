'use strict';
//const model = require('./index');
module.exports = (sequelize, DataTypes) => {
  var book = sequelize.define('book', {
    book_id:{
      type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'book_id'
  },
    book_name:DataTypes.STRING,
    book_auother: DataTypes.STRING,
    book_edition: DataTypes.STRING
  }, {});
  book.associate = function(models) {
    // associations can be defined here
    book.hasMany(models.ledger,{foreignKey:'book_id'})

  };

  book.addBook = function(data){
  return book.create(data,{
    //include:[{association:student.student_id}]
    
})
}

book.findAllBook=function(){
  return book.findAll({
//  include:[{assocition:student.student_id}]
});
}
book.findAllByName=function(book_name){
  var queryName = '%' + book_name + '%';
  console.log(queryName)
  return book.findAll({
  where:{'book_name':{
    [sequelize.Op.like]:queryName 
}
}
  //include:[{assosiation:student.student_id}]

})
}

book.updateBook=function(book_name,data){
  var queryName = '%' + book_name + '%';
  return book.update(data,{
    where:{'book_name':{
    [sequelize.Op.like]:queryName 
}
}
  })
}
  return book;
}

