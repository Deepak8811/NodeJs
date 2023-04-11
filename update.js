const dbConnect = require('./mongodb');
const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateMany(
        { name: "m-1" }, {
        $set: { name: "m-1-max", price: 590 }
    }
    );
    console.log(result);
}
updateData();