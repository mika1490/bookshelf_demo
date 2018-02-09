const path = require(`path`);

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'bookshelf_demo_user',
      password : 'password',
      database : 'bookshelf_demo_dev',
      charset: 'utf8'
    }, 
    debug: true,
    migrations: {
      directory: __dirname + '/db/migrations',
    }
  }
};
