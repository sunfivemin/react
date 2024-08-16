import Image from "next/image";

function List() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-5 bg-slate-800">
            <h1 className="text-2xl text-slate-50 mb-7">상품목록</h1>
            <div className="w-full p-8 mx-auto my-2 rounded-lg bg-slate-50 text-slate-900">
                <h4>상품명 $40</h4>
            </div>
            <div className="w-full p-8 mx-auto my-2 rounded-lg bg-slate-50 text-slate-900">
                <h4>상품명 $40</h4>
            </div>
        </div>
    );
}

export default List;
