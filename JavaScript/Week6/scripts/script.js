let posts = [
  { title: "Post1", author: "Author1", body: "Body of post 1" },
  { title: "Post2", author: "Author2", body: "Body of post 2" },
  { title: "Post3", author: "Author3", body: "Body of post 3" },
];

function createPost(post) {
  setTimeout(function () {
    posts.push(post);
  }, 3000);
}

function getPosts() {
  setTimeout(function () {
    posts.forEach(function (post) {
      console.log(post.title);
    });
  }, 3000);
}

createPost({ title: "post4", author: "author4", body: "body of post 4" }); //3 seconds in execution
createPost({ title: "post5", author: "author5", body: "body of post 5" });
getPosts(); // runs in 1 second.. when it runs the new post is not yet PUSHED into the array
