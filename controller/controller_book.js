var Book=require('./../factory/book_factory.js');
//var logger=require('./../utils/loggers.js');

//var log=new logger('book_controller')
module.exports={

findAllBook:{
handler:function(request,reply){
	var book=new Book()
	var queryParams=request.query;
	student.findAllBook().then(function (result){
	return reply(result);
}).catch(function(error){
	return reply(error);
})
}
},
addBook: {
    handler: function (request, reply) {
        var data = retriveData(request.payload);
        console.log(data)
            if(data){
                console.log(data)
                var queryParams = request.query;
                var book = new Book();
                book.init(data)
                book.addBook(data).then(function (result) {
                    reply(result);
                }).catch(function (insertError) {
                 //   log.error(insertError);
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
            var book = new Book();
            var queryParams=request.query;
            book.findAllByName(queryParams.book_name).then(function (result) {
                //console.log(result)
                reply(result);
            }).catch(function (bookError) {
  //              log.error(bookError);
                reply(bookError);
            });
        }
    },

updateBook: {
    handler: function (request, reply) {
        var data = retriveData(request.payload);
        console.log(data)
            if(data){
                console.log(data)
                var queryParams = request.query;
                var book = new Book();
                book.init(data)
                book.updateBook(queryParams.book_name,data).then(function (result) {
                    reply(result);
                }).catch(function (insertError) {
    //                log.error(insertError); 
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
} 
