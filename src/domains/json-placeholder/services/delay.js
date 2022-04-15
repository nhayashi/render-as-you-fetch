const delay = (time) => (result) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(result), time);
  });

export default delay;
