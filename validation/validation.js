var Joi = require('joi');

module.exports={
	addStudent:{
		payload:{
			student_name:joi.string().require()
			student_email:joi.string().require();
			student_address:joi.string().require();
		}
	}

	studentparam:{
		params:{
			student_id:joi.number().require();
		}
	}
}

