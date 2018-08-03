'use strict';
const models = require('./index');
module.exports = (sequelize, DataTypes) => {
  var ledger = sequelize.define('ledger', {
    issue_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'issue_id' 
},
    book_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    issue_date: DataTypes.DATE,
    return_status: DataTypes.BOOLEAN,
    return_date: DataTypes.DATE
  }, {});
  ledger.associate = function(models) {
    
    ledger.student_id=ledger.belongsTo(models.student,{foreignKey: 'student_id',target_Key:'student_id'})
    ledger.book_id=ledger.belongsTo(models.book,{foreignKey: 'book_id',target_Key:'book_id'})
   
  };


  ledger.addEntry = function(data){
  return ledger.create(data,{
    //include:[{association:ledger.student_id},{association:ledger.book_id}]
})
}

ledger.findAllEntry=function(){
  return ledger.findAll({include:[{association:ledger.student_id},{association:ledger.book_id}]}).then(data=>{return (data)});
  
}
ledger.findAllById=function(student_id){
  
  //console.log(queryName)
  return ledger.findAll({where:{student_id:student_id}

  //include:[{assosiation:ledger.student_id}]

})
}

ledger.updateEntry=function(data,student_id){
  //var queryName = '%' + book_name + '%';
  return ledger.update(data,{where:{student_id:student_id}
  })}


  return ledger;
};
