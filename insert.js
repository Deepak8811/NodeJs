const dbConnect = require('./mongodb');
const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertOne({
        name: 'Note 5',
        brand: 'vivo',
        price: '520',
        category: 'mobile',
    })
    // const result = await db.insertMany([
    //     {
    //         name: "m-1",
    //         brand: "micromax",
    //         price: "230",
    //         category: "mobile"
    //     },
    //     {
    //         name: "m-2",
    //         brand: "micromax",
    //         price: "430",
    //         category: "mobile"
    //     }, {
    //         name: "m-3",
    //         brand: "micromax",
    //         price: "530",
    //         category: "mobile"
    //     }
    // ]

    // );

    if (result.acknowledged) {
        console.log("Data Inserted");
    }
}
insert();