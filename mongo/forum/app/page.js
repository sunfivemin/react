import { connectDB } from "/util/database.js";

export default async function Home() {
    let db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();

    return <div>{result[0].title}</div>;
}
