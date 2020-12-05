module.exports = [
  {
    "name": "default",
    "type": process.env.NOSQL_TYPE,
    "host": process.env.NOSQL_HOST,
    "port": process.env.NOSQL_PORT,
    "database": process.env.NOSQL_DATABASE,
    "username": process.env.NOSQL_USERNAME,
    "password": process.env.NOSQL_PASSWORD,
    "useUnifiedTopology": true,
    "ssl": process.env.NOSQL_SSL,
    "entities": [
      `./${process.env.SERVICE_PATH}/modules/**/infra/typeorm/schemas/*.${process.env.SERVICE_EXTENSION}`
    ]
  }
]
