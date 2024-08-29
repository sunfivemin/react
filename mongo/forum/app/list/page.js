import { connectDB } from "/util/database.js";

export default async function List() {
    let db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();
    console.log(result);

    let data = { name: "kim", age: 20 };
    console.log(data);

    return (
        <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
            {result.map((item, idx) => {
                return (
                    <div key={idx} className="w-full max-w-md p-4 mb-4 bg-white rounded-lg shadow-md">
                        <h4 className="mb-2 text-xl font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-gray-600">{item.content}</p>
                    </div>
                );
            })}
        </div>
    );
}
