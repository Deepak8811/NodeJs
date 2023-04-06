// // import {x} from './app';
// //ye import use nahi karenge so

// const app = require("./app");
// // const fs = require('fs');
// const fs = require('fs').writeFileSync;

// // console.log("Hello ! My name is Deepak chaurasiya ans i'm a full stack Developer");
// // var a = 20;
// // var b = 10;
// // var c = 25;
// // console.warn(a + b + c);
// // // var x = 20;
// // if (x === 20) {
// //     console.log("Matched");
// // }

// // for (i = 0; i < 10; i++) {
// //     console.log(i);
// // }


// // const arr = [2, 3, 4, 5, 6, 6, 7];
// // console.log(arr);
// // console.log(arr[0]);
// console.log(app);
// console.log(app.x);
// console.log(app.y);
// console.log(app.z());
// const arr = [2, 3, 4, 5, 6, 6, 7, 3, 9, 0, 3];
// console.log(arr);
// console.log(arr[0]);


// // arr.filter((item) => {
// //     console.log(item);
// // })

// var result = arr.filter((item) => {
//     return item == 3
//     // return item>=4
//     // return item<=5
// })
// console.log(result);


// console.log("Deepak chaurasiya")

// // fs.writeFileSync("hello2.txt", "And i am a full sttack Developer");
// //For checking in which directory we work then use the dirname..
// console.log("==>>",__dirname);
// //For checking the file name;
// console.log("==>>",__filename);
// fs("code.txt","some code");  

// const http = require("http");

// http.createServer((req, resp) => {
//     resp.write("<h1>Hello this is Deepak chaurasiya</h1>");
//         resp.end();
// }).listen(4500);



// function dataControl(req, resp) {
//     resp.write("<h1>Hello! This is Deepak chaurasiya</h1>");
//     resp.end();
// }


// const dataControl = (req, resp) => {
//     resp.write("<h1>Hello! This is Deepak chaurasiya</h1>");
//     resp.end();
// }

// http.createServer((req, resp) => {
//     resp.write("<h1>Hello! This is Deepak chaurasiya</h1>");
//     resp.end();
// }).listen(4500);


// const colors = require('colors');
// console.log("Hello!".red);
// console.log("This is Deepak chaurasiya".green);



// var colors=require('colour');
// console.log("Hello".red);
// console.log("This is Deepak chaurasiya".rainbow);
// console.log("And I am a full stack Developer!".yellow);

// console.log("Package.json".rainbow);



// var chalk=require('chalk');
// import chalk from 'chalk';
// console.log(chalk.blue('Hello world!'));
// console.log(chalk.backgroundColors("Hello world!"));

// const log = console.log;

// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// console.log("Chalk");


// const chalk = require('chalk');

// console.log(chalk.blue('Hello world!'));



// const chalk=require("chalk");

// // Printing the text
// console.log(chalk.red("aayush"))
// console.log(chalk.red.underline("aayush"))
// console.log(chalk.red.underline.bold("GFG"))


// console.log("Hello! My self Deepak chaurasiya and i am a Full Stack Developer");
// console.log(10000+1000846);
// console.log(5-1000000);


//Creating API 

// const http = require("http");
// const data = require("./data")
// http.createServer((req, resp) => {
//     //Head
//     resp.writeHead(200, { 'content-Type': 'application\json' });
//     //Body
//     resp.write(JSON.stringify(data));
//     //for ending the response
//     resp.end();
// }).listen(4200);

//Input from command Line

// console.log("Hello!");
// console.log(process);
// console.log(process.argv);
// console.log(process.argv[0]);
// console.log(process.argv[4]);


// const fs = require('fs');
// const input = process.argv;
// fs.writeFileSync(input[2], input[3]);
// if (input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4]);
// }
// else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3]);
// }
// else {
//     console.log("Indalid Input");
// }



//Path Modules

// const fs = require('fs');
// const path = require('path');
// // const dirPath = path.join(__dirname);
// const dirPath = path.join(__dirname, 'files');
// console.log(dirPath);
// for (i = 0; i < 5; i++) {
//     //This is create a only one file
//     // fs.writeFileSync("hello.txt", "A simple text file is here");
//     //These are Dynamic allocation two method is here.....
//     // fs.writeFileSync("hello" + i + ".txt", "A simple text file is here");



//     fs.writeFileSync(dirPath+`/hello${i}.txt`, "A simple text file is here");
// }


//List files in an Array form

// fs.readdir(dirPath, (err, item) => {
//     console.log(item);
// })



//For single single presentation of all files inside the folder

// fs.readdir(dirPath, (err, items) => {
//     items.forEach((item) => {
//         console.log("File name is:", item);
//     })
// })


// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple.txt`;

//Create file

// fs.writeFileSync(filePath, 'This is a simple texrt file');

//Read file

// fs.readFile(filePath, (err, itemData) => {
//     console.log(itemData);
// })
//for resolve this problem use another parameter use "utf8"
// fs.readFile(filePath, 'utf8', (err, itemData) => {
//     console.log(itemData);

// })

//Update File

// fs.appendFile(filePath, ' ..and file name is apple, apple is a good fruit for health', (err) => {
//     if (!err) {
//         console.log("File is Updated");
//     }
// })

//Rename

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if (!err) {
//         console.log("File is Renamed..");
//     }
// })

//Delete Opration 

// fs.unlinkSync(`${dirPath}/fruit.txt`);


//Synchronous and Asynchronous Programming

// setTimeout(() => {
//     console.log("Start exe.....");
// }, 2000);
// setTimeout(() => {
//     console.log("Logic exe.....");
// }, 5000);

// // setTimeout(() => {

// // }, .00000001);
// console.log("Complete exe.....");


//Drow back of Asynchronous programming language

// let a = 20;
// let b = 10;

// setTimeout(() => {
//     b = 30;
// }, 2000);

// console.log(a + b);


// Handle Asynchronous Data in Node with the help of Promises

let a = 20;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000)
});

waitingData.then((data) => {
    b = data;
    console.log(a + b);

});





