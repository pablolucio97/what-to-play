import { Db, MongoClient } from "mongodb";

interface ConnectType{
  db: Db;
  client: MongoClient
}

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  // @ts-ignore: Unreachable code error
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function connectDb() : Promise<ConnectType> {
  await client.connect();
  const db = client.db("whattoplay");
  return { db, client };
}
