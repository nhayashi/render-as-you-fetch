const getUser = async (userId) => {
  console.log("++++++++ getUser start !++++++++");
  const user = (
    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  ).json();
  console.log("++++++++ getUser done !++++++++");

  return user;
};

export default getUser;
