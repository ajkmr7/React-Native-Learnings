const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("2 sec timer is done!"), 2000)
  });
  return promise
};

setTimeout(() => {
  console.log("1.5 sec Timer Ends, 2 sec Timer Starts!")
  fetchData()
  .then((message) => {
    console.log(message)
    return fetchData()
  })
  .then((message) => {
    console.log(message)
    return fetchData()
  })
  .then((message) => {
    console.log("Promise Resolved!")
  })
}, 1500)

console.log("Hi, 1.5 sec Timer Starts")
