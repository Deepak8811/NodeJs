const dbConnect = require('./mongodb');
const deleteData = async () => {
    let data = await dbConnect();
    // let result = await data.deleteOne({ name: 'm-pro-max' })
    let result = await data.deleteMany({ name: 'm-2-max' })
    console.log(result);
    if (result.acknowledged) {
        console.log("Record Deleted")
    }
}
deleteData();
