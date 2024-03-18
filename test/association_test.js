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
});
