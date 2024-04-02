const fetchData = callback => setTimeout(() => callback("2 sec timer is done!"), 2000)

setTimeout(() => {
    console.log("1.5 sec Timer Ends, 2 sec Timer Starts!")
    fetchData((message) => console.log(message))
}, 1500)

console.log("Hi, 1.5 sec Timer Starts")


