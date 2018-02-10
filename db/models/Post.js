const bookshelf = require(`./bookshelf`);

const User = require(`./User`);

class Post extends bookshelf.Model {
  get tableName() {return `posts`}
  get hasTimestamps() { return true }

  author() {
    this.belongsTo(User);
  }
}

module.exports = Post;