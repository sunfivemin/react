"use client";
import { useState } from "react";
import Image from "next/image";
import "../globals.css";

function List() {
    let 상품 = ["Tomatoes", "Pasta", "Coconut"];
    let [수량, 수량변경] = useState(Array(상품.length).fill(0));

    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-5 py-10 bg-slate-800">
            <h1 className="text-2xl text-slate-50 mb-7">상품목록</h1>
            <div className="flex flex-col flex-1 w-full max-w-xl p-8 mx-auto my-2 rounded-lg gap-y-4 bg-slate-50 text-slate-900">
                {상품.map((a, i) => {
                    return (
                        <div className="flex items-center gap-x-3 " key={i}>
                            {/* <img src="/vercel.svg" className="w-10 h-10 rounded " alt="설명" /> */}
                            <div className="relative w-12 h-12 overflow-hidden rounded-full">
                                <Image src={`/food${i}.png`} fill="true" alt="image" sizes="48px" />
                            </div>
                            <p>{a} $40</p>
                            <span>{수량[i]}</span>
                            <button
                                onClick={() => {
                                    let copy = [...수량];
                                    copy[i]++; // 각 상품의 수량을 증가시킴
                                    수량변경(copy);
                                }}
                                className="px-6 py-2 text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 active:bg-blue-700">
                                +
                            </button>
                            <button
                                onClick={() => {
                                    let copy = [...수량];
                                    if (copy[i] > 0) copy[i]--; // 각 상품의 수량을 감소시킴 (음수 방지)
                                    수량변경(copy);
                                }}
                                className="px-6 py-2 text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 active:bg-blue-700">
                                -
                            </button>
                        </div>
                    );
                })}
            </div>
            {/* <div className="w-full p-8 mx-auto my-2 rounded-lg bg-slate-50 text-slate-900">
                <h4>상품명 $40</h4>
            </div> */}
        </div>
    );
}

export default List;
