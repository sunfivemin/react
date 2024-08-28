import Payment from "./payment/page.jsx";
import Banner from "./banner/page.jsx";

export default function Cart() {
    let 상품 = ["Tomatoes", "Pasta", "Coconut"];

    return (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-screen px-5 bg-slate-800">
            <h1 className="text-2xl text-slate-50 mb-7">상품목록</h1>
            <Banner content="현대카드" />
            <Banner content="롯데카드" />
            {상품.map((a, i) => {
                return (
                    <div className="w-full max-w-xl p-8 mx-auto my-2 rounded-lg bg-slate-50 text-slate-900 ">
                        <h4>
                            {i + 1}. {a}
                        </h4>
                        <Payment items={상품[i]} />
                    </div>
                );
            })}
        </div>
    );
}
