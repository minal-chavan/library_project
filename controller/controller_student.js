var Student=require('./../factory/student_factory.js');
module.exports={

findAllStudent:{
handler:function(request,reply){
	var student=new Student()
	var queryParams=request.query;
	student.findAllStudent().then(function (result){
	return reply(result);
}).catch(function(error){
	return reply(error);
})
}
},
addStudent: {
    handler: function (request, reply) {
        var data = retriveData(request.payload);
        console.log(data)
            if(data){
                console.log(data)
                var queryParams = request.query;
                var student = new Student();
                student.init(data)
                student.addStudent(data).then(function (result) {
                    reply(result);
                }).catch(function (insertError) {
                //    log.error(insertError);
                    reply(insertError);
                });
            }
            else {
                reply(new Error('Error in data creations'));
            }
        }
    },

   findAllByName:{
        handler: function (request, reply) {
            var student = new Student();
            var queryParams=request.query;
            student.findAllByName(queryParams.student_name).then(function (result) {
                reply(result);
            }).catch(function (studentError) {
                //log.error(customerError);
                reply(studentError);
            });
        }
    },

    updateStudent: {
    handler: function (request, reply) {
        var data = retriveData(request.payload);
        console.log(data)
            if(data){
                console.log(data)
                var queryParams = request.query;
                var student = new Student();
                student.init(data)
                student.updateStudent(queryParams.student_name,data).then(function (result) {
                    reply(result);
                }).catch(function (insertError) {
                  //  log.error(insertError);
                    reply(insertError);
                });
            }
            else {
                reply(new Error('Error in data creations'));
            }
        }
    }

}


var retriveData = function (payload) {
    var data = {}; 
    if (typeof payload == "string") {
        data = JSON.parse(payload);
    } else if (typeof payload == "object") {
        data = JSON.parse(JSON.stringify(payload));
    } else {
        data = null;
    }
    return data;
}; 
