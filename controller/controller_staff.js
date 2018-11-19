var Ledger=require('./../factory/ledger_factory.js');
var logger=require('./../utils/loggers.js')

module.exports={

findAllEntry:{
handler:function(request,reply){
	var ledger=new Ledger()
	var queryParams=request.query;
	ledger.findAllEntry().then(function (result){
	return reply(result);
}).catch(function(error){
	return reply(error);
})
}
},
addEntry: {
    handler: function (request, reply) {
        var data = retriveData(request.payload);
        console.log(data)
            if(data){
                console.log(data)
                var queryParams = request.query;
                var ledger = new Ledger();
                ledger.init(data)
                ledger.addEntry(data).then(function (result) {
                    reply(result);
                }).catch(function (insertError) {
                //    log.e(insertError);
                    reply(insertError);
                });
            }
            else {
                reply(new Error('Error in data creations'));
            }
        }
    },

   findAll:{
        handler: function (request, reply) {
            var ledger = new Ledger();
            var queryParams=request.query;
            ledger.findAll(queryParams.student_id).then(function (result) {
                //console.log(result)
                reply(result);
            }).catch(function (bookError) {
               // log.e(customerError);
                reply(bookError);
            });
        }
    },

updateEntry: {
    handler: function (request, reply) {
        var data = retriveData(request.payload);
        console.log(data)
            if(data){
                console.log(data)
                var queryParams = request.query;
                var ledger = new Ledger();
                ledger.init(data)
                ledger.updateEntry(data,queryParams.student_id).then(function (result) {
                    reply(result);
                }).catch(function (insertError) {
                 //   log.e(insertError);
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
