import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./../store.js";

function Cart() {
  // 필요한 상태만 선택합니다.
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4 mt-10">
      <h6>{user.name}의 장바구니</h6>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead className="bg-indigo-500 text-white">
          <tr>
            <th className="py-3 px-4 text-center text-sm font-semibold uppercase">
              번호
            </th>
            <th className="py-3 px-4 text-center text-sm font-semibold uppercase">
              상품명
            </th>
            <th className="py-3 px-4 text-center text-sm font-semibold uppercase">
              수량
            </th>
            <th className="py-3 px-4 text-center text-sm font-semibold uppercase">
              <button
                onClick={() => {
                  dispatch(changeName());
                }}
              >
                버튼임
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr
              className="border-t border-gray-200 hover:bg-gray-100"
              key={index}
            >
              <td className="py-3 px-4 text-center text-sm text-gray-700">
                {index + 1}
              </td>
              <td className="py-3 px-4 text-center text-sm text-gray-700">
                {item.name}
              </td>
              <td className="py-3 px-4 text-center text-sm text-gray-700">
                {item.count}
              </td>
              <td className="py-3 px-4 text-center text-sm text-gray-700">
                안녕
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
