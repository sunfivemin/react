import Image from "next/image";

function List() {
    let name = ["seon", "kim", "lee"];

    return (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-screen px-5 bg-slate-800">
            <h1 className="text-2xl text-slate-50 mb-7">payment</h1>
            {name.map((item, index) => {
                return (
                    <div className="w-full p-8 mx-auto my-2 rounded-lg bg-slate-50 text-slate-900">
                        <h4>
                            {index + 1}. {item}
                        </h4>
                    </div>
                );
            })}
        </div>
    );
}

export default List;
