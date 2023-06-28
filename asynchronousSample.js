const fs = require('fs');
const util = require('util');

const promisifyReadFile = util.promisify(fs.readFile);

// const main = async() => {
//   let fileContent = ''

//   fs.readFile('index.html', (err, data) => {
//     fileContent = data.toString();
//     console.log("read file content");
//     console.log(fileContent);
//   })

//   console.log("after reading file")
//   console.log(fileContent)
// }

// const main = () => {
//   const readFilePromise = promisifyReadFile('index.html');

//   readFilePromise.then((data) => {
//     const fileContent = data.toString();
//     console.log(fileContent);
//   })
// }

const main = async () => {
  const data = await promisifyReadFile('index.html');
  const fileContent = data.toString()
  console.log(fileContent);
}

main()
