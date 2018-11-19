 'use strict';
module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    student_id: {
          type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'student_id'},
    student_name: DataTypes.STRING,
    student_email: DataTypes.STRING,
    student_address: DataTypes.STRING
  }, {}); 
  student.associate = function(models) {
    // associations can be defined here
     student.hasMany(models.ledger,{foreignKey:'student_id'})
  };

student.addStudent = function(data){
	return student.create(data,{
		//include:[{association:student.student_id}]
})
}

student.findAllStudent=function(){
	return student.findAll({
//	include:[{assocition:student.student_id}]
});
}
student.findAllByName=function(student_name){
	var queryName = '%' + student_name + '%';
  console.log(queryName)
	return student.findAll({
	where:{'student_name' :{
		[sequelize.Op.like]:queryName
}
},
	//include:[{assosiation:student.student_id}]

})
}

student.updateStudent=function(student_name,data){
  var queryName = '%' + student_name + '%';
  return student.update(data,{
    where:{'student_name':{
    [sequelize.Op.like]:queryName 
}
}
  })
}
  return student;
};

