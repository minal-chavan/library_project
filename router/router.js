const Note = require('../controller/controller.js');
const Joi=require('joi')
const book=Joi.object({
    book_id:Joi.number().required(),
    book_auother:Joi.string().required(),
    book_edition:Joi.string().required()
})

module.exports = [
{
    method: 'GET',
    path: '/',
    handler:Note.hello},
{
    method: 'GET',
    path: '/api/{user?}',
    handler:Note.get,
    options: {
        validate: {
            params: {
                user: Joi.string().min(3).max(10)
            }
        }
    }
},
{
    method: 'POST',
    path: '/api/{user?}',
    handler:Note.insert,
},
{ 
    method: 'DELETE',
    path: '/api/{user?}',
    handler:Note.delete,
    options: {
        validate: {
            query: {
                'book_id': Joi.number().integer(),
                'student_id':Joi.number().integer(),
                'staff_id':Joi.number().integer(),
                'issue_id':Joi.number().integer()
            },
        }
    }
},
{ 
    method: 'PUT',
    path: '/api/{user?}',
    handler:Note.update,
    
    
}
]


/*during migration we need to change router file*/
            
