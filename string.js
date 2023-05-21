// //string primitive
// const message = 'This is "my first message';

// //string Object
// const another = new String("hi");

// console.log(message);

function fetchData(callback) {
  setTimeout(function () {
    const data = "Hello, world!";
    callback(null, data);
  }, 8000);
}

fetchData(function (error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
