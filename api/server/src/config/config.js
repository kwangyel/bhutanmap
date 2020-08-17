require('dotenv').config();

module.exports={	

	  "development": {
	    "username": "postgres",
	    "password": "covid@2020#",
	    "database": "postgres",
	    "host": "localhost",
	    "dialect": "postgres"
	  },
	  "test": {
	    "username": "postgres",
	    "password": "323395kt",
	    "database": "RPPD_Test",
	    "host": "127.0.0.1",
	    "dialect": "postgres"
	  },

	  "production": {
	    "username": process.env.DB_USER,
	    "password": process.env.DB_PASS,
	    "database": process.env.DB_NAME,
	    "host": process.env.DB_HOST,
	    "dialect": "postgres"
	  }

};


