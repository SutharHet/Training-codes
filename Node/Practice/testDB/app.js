const { MongoClient } = require('mongodb');

const main = async() => {
    
    const uri = "mongodb+srv://SutharHet:hetsuthar@cluster0.plpu1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri);

    try {
      await client.connect();
        
      const result = await client.db('sample_mflix').collection('users').find({}).limit(3).toArray();
      console.log(result)
    } finally {
      await client.close();
    }
}
main().catch(console.error);
