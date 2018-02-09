const bookshelf = require(`./bookshelf`);

//ES5
// const User = bookshelf.Model.extend({
//   tableName: `users`
// });

//ES6
class User extends bookshelf.Model {
  get tableName() {return `users`}
  get hasTimestamps() {return true}
}

module.exports = User;