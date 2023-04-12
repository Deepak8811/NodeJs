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

// let a = 20;
// let b = 0;

// let waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30);
//     }, 2000)
// });

// waitingData.then((data) => {
//     b = data;
//     console.log(a + b);

// });


// How Node js work and Architecture of Node js :- Programm->Call stack->Node API->Callback loop->Output
// Generally all time Node AIP and Calllback queue Not run so that =>programm->call stack ->output. 1st main() function is call internally and then all function
// call which is written inside the main() function, after the execution function remove from the call stack and last when output is done then main()
// function removed from the call stack.

// console.log("Starting Up");

// setTimeout(() => {
//     console.log("2 second loss")
// }, 2000);

// setTimeout(() => {
//     console.log("0 second loss")
// }, 0);

// console.log("Finishing up");


// Express Js

// const express = require('express');

// const app = express();//Executable banane ke liye kiya gaya hai ....
// //Home page
// app.get("", (req, resp) => {
//     // console.log("Data send by the browser is=>", req.query.name)

//     // resp.send("<h1>Hello!</h1>"+req.query.name);
//     resp.send(`
//     <h1>Hello! This is home page</h1>
//     <a href="/about">Go to about page</a>
//     `)
// });
// //pages
// app.get('/about', (req, resp) => {
//     resp.send(`
//     <input type="text" placeholder="User Name" value="${req.query.name}"/>
//     <button>Click Me</button>
//     <a href="/">Go to Home page</a>
//     `)
// });
// app.get('/help', (req, resp) => {
//     resp.send([
//         {
//             name: 'Deepak chaurasiya',
//             email: 'deepak@test.com',
//             contact: '6378295721',
//             address: 'New Delhi',
//             course: 'B-tech',
//             Profession: 'Full stack developer'

//         },
//         {
//             name: 'Deepak chaurasiya',
//             email: 'deepak@test.com',
//             contact: '6378295721',
//             address: 'New Delhi',
//             course: 'B-tech',
//             Profession: 'Full stack developer'

//         },
//         {
//             name: 'Deepak chaurasiya',
//             email: 'deepak@test.com',
//             contact: '6378295721',
//             address: 'New Delhi',
//             course: 'B-tech',
//             Profession: 'Full stack developer'

//         },
//         {
//             name: 'Deepak chaurasiya',
//             email: 'deepak@test.com',
//             contact: '6378295721',
//             address: 'New Delhi',
//             course: 'B-tech',
//             Profession: 'Full stack developer'

//         }
//     ])
// });

//Now create a server poart.
// app.listen(5000);


//Html pages 

// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname, 'public');

// app.set('view engine', 'ejs');
// // console.log(publicPath);

// // app.use(express.static(publicPath));
// // for removing extension use app.get() method and inside the get method ude resp.sendFile(`${pathOtTheFolder}/fileName`)
// app.get('', (req, resp) => {
//     resp.sendFile(`${publicPath}/index.html`);
// });
// //Using ejs template
// app.get('/profile', (req, resp) => {
//     const user = {
//         name: "Deepak chaurasiya",
//         email: "deepak@test.com",
//         contact: "6378295721",
//         profession: "Full stack Developer",
//         Cities: "Haridwar,Delhi,Prayagraj",
//         skills: ['c', 'c++', 'JavaScript', 'ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB', 'Mongoes'],

//     };
//     resp.render('profile', { user });
// });
// //Login Page
// app.get('/login', (req, resp) => {
//     resp.render('login')
// })
// // app.get('/about', (req, resp) => {
// //     resp.sendFile(`${publicPath}/about.html`);
// // });
// // Page ka name hum kuch bhi rakh sakte hain
// app.get('/about', (req, resp) => {
//     resp.sendFile(`${publicPath}/about.html`);
// });
// app.get('/home', (req, resp) => {
//     resp.sendFile(`${publicPath}/home.html`);
// });
// // Agar user galat page add kare to usko koi bhi page dikhana ho to File name ki jagah hum '*' use karenge. example-
// app.get('*', (req, resp) => {
//     resp.sendFile(`${publicPath}/404.html`);
// });
// //Server Poart
// app.listen(5000);

// MiddleWare if a common function which is ued with route and with the help of middleware we access request and response and modify the result

// const express = require('express');
// const reqFilter = require('./middleware')
// const app = express();
// const route = express.Router();
// route.use(reqFilter);

//  Creating middleware 
// const reqFilter = (req, resp, next) => {
//     // console.log('reqFilter');
//     if (!req.query.age) {
//         resp.send("Please provide age");
//     }
//     else if (req.query.age < 18) {
//         resp.send("You can not access this page");
//     }
//     else {
//         next();
//     }

// }
// Apply middleware on all route...
// app.use(reqFilter);
// Route
// app.get('/', (request, response) => {
//     response.send('Welcome! To Home Page');
// })
// //Middleware on a single  or more route
// app.get('/user', (request, response) => {
//     response.send('Welcome! To user page');
// })

// route.get('/about', reqFilter, (request, response) => {
//     response.send('Welcome! To about page');
// })
// route.get('/contact', (request, response) => {
//     response.send('Welcome! To contact page');
// })

// app.use('/', route)

// app.listen(7000);



// connect mongodb with nodejs.....

//  These code transfer in  saprate file....."mongodb.js"

//import mongodb file here

// const dbConnect = require('./mongodb');


// const { MongoClient } = require('mongodb');
// // or
// // const MongoClient = require('mongodb').MongoClient

// const url = 'mongodb+srv://root:root@cluster0.3yxyoso.mongodb.net/test'

// const Client = new MongoClient(url);
// const database = 'e-comm';

// async function getData() {
//     let result = await Client.connect();

//     let db = result.db(database);
//     let collection = db.collection('products');

//     // return Promises
//     // console.log(collection.find({}).toArray());

//     // Avoid Promises use "await"
//     let response = await collection.find({ name: 'm 50' }).toArray();   //collection ko find kar sakte hain pass kar ke find function me
//     console.log(response);
// }



//Common function for connecting database for all type of database

// async function dbConnect() {
//     let result = await Client.connect();

//     let db = result.db(database);
//     return db.collection('products');
// }

// dbConnect();
// console.log(dbConnect());


// dbConnect().then((response) => {
//     // console.log(response.find({}).toArray());   //return promise so that handle promise 
//     response.find({ name: 'Nokia 1100' }).toArray().then((data) => {
//         console.log(data);
//     })
// })

// const main = async () => {
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }
// //Function invocation......
// main();







// "Mongoose" from scrach.......

const mongoose = require('mongoose');

// await mongoose.connect("mongodb://mongodb+srv://root:root@cluster0.3yxyoso.mongodb.net/test");//URL is not correct
mongoose.connect("mongodb+srv://root:root@cluster0.3yxyoso.mongodb.net/e-comm ");//Correct URL 


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const saveInDB = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel({
        name: "m-8",
        price: 1000,
        brand: "Motorola",
        category: "mobile"
    })
    let result = await data.save();
    console.log(result);
}
// saveInDB()
const updateInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.updateOne(
        { name: "nokia 1100" },
        { $set: { price: 310000, name: "nokia 3310" } }
    )
    console.log(data);
}
// updateInDB();

// For delete

const deleteInDB = async () => {
    const product = mongoose.model('products', productSchema);
    let data = await product.deleteOne({ name: "nokia 1100" });
    console.log(data);
}
// deleteInDB();

// For find

const findInDB = async () => {
    const product = mongoose.model('products', productSchema);
    let data = await product.find({name:"m"});
    console.log(data);
}

// findInDB();








