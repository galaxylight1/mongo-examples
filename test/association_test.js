const mongoose = require("mongoose");
const User = require("../src/user");
const Comment = require("../src/comment");
const BlogPost = require("../src/blogPost");

describe("Associations", () => {
  let joe, blogPost, comment;

  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    blogPost = new BlogPost({ title: "JS is great", content: "xyz" });
    comment = new Comment({ content: "Congrats" });
    joe.blogPosts.push(blogPost); // associate b/w user and blog post
    blogPost.comments.push(comment);
    comment.user = joe;

    Promise.all([joe.save(), blogPost.save(), comment.save()]).then(() => {
      done();
    });
  });

  it.only("saves a relation between a user and a blogpost", (done) => {
    User.findOne({ name: "Joe" })
      .populate("blogPosts") // to get the actual object instead of object's ID
      .then((user) => {
        console.log(user);
        done();
      });
  });
});
