'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.addColumn('users','user_DOB',Sequelize.STRING);
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
date
      Example:*/
      return queryInterface.addColumn('users','user_DOB',Sequelize.STRING);
      
  }
};

/* addcolumn will throgh the error because of datatype change bcz if values are already inserted into table */
