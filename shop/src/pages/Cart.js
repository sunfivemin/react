import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "./../store/userSlice.js";
import { addCount } from "./../store.js";
import { useUsername } from "./../hooks/useUsername.js";

let Child = memo(function () {
    console.log("1222");
    return <div>자식임</div>;
});

// memo: 특정상황(props가 변할때만)에서만 재렌더링, 비교작업때문에 느려질 수 있다.

function Cart() {
    // 필요한 상태만 선택합니다.
    const user = useSelector((state) => state.user);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    let [count, setCount] = useState(0);
    let username = useUsername();

    return (
        <div className="container p-4 mx-auto mt-10">
            <Child count={count}></Child>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}>
                +
            </button>
            <p>{username}</p>
            <h6>
                {user.name}({user.age})의 장바구니
            </h6>
            <button
                onClick={() => {
                    dispatch(increase(10));
                }}>
                +
            </button>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
                <thead className="text-white bg-indigo-500">
                    <tr>
                        <th className="px-4 py-3 text-sm font-semibold text-center uppercase">번호</th>
                        <th className="px-4 py-3 text-sm font-semibold text-center uppercase">상품명</th>
                        <th className="px-4 py-3 text-sm font-semibold text-center uppercase">수량</th>
                        <th className="px-4 py-3 text-sm font-semibold text-center uppercase">버튼</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((a, i) => (
                        <tr className="border-t border-gray-200 hover:bg-gray-100" key={i}>
                            <td className="px-4 py-3 text-sm text-center text-gray-700">{cart[i].id}</td>
                            <td className="px-4 py-3 text-sm text-center text-gray-700">{cart[i].name}</td>
                            <td className="px-4 py-3 text-sm text-center text-gray-700">{cart[i].count}</td>
                            <td className="px-4 py-3 text-sm text-center text-gray-700">
                                <button
                                    onClick={() => {
                                        dispatch(addCount(cart[i].id));
                                    }}>
                                    +
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Cart;
