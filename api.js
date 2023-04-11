const express = require('express');
const mongodb = require('mongodb')
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

//Get API Method......
app.get('/', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.log(data);
    // resp.send({
    //     name: "Deeapk chaurasiya"
    // })
    resp.send(data);
});

//Post API method.....

app.post('/', async (req, resp) => {
    // console.log(req.body)
    // resp.send({ nema: 'Deepak chaurasiya' })
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result);
})

// Put API Method......

// app.put('/', async (req, resp) => {
//     let data = await dbConnect();
//     let result = data.updateMany(
//         { name: "motorola" },
//         { $set: req.body }
//     )
//     resp.send({ result: "Updated" })

// })

app.put('/', async (req, resp) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: "Iphone 14" },
        { $set: req.body }
    )
    resp.send({ result: "Updated" });
})

//Delete API Methode......
app.delete("/:id", async (req, resp) => {
    console.log(req.params.id)
    const data = await dbConnect();
    const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    resp.send(result);
})


app.listen(5000);