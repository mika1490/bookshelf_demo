const bookshelf = require(`./bookshelf`);

const Post = require(`./Post`)
//ES5
// const User = bookshelf.Model.extend({
//   tableName: `users`
// });

//ES6
class User extends bookshelf.Model {
  get tableName() {return `users`}
  get hasTimestamps() {return true}

  posts() {
    return this.hasMany(Post, `author_id`);
  }
}

module.exports = User;