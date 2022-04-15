import delay from "./delay";

const getPosts = async (userId) => {
  console.log("******** getPosts start! *********");
  const posts = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  )
    .json()
    .then(delay(500));
  console.log("******** getPosts done! *********");

  return posts.filter((post) => post.userId === userId);
};

export default getPosts;
