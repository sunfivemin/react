import { useSelector } from "react-redux";

function Cart() {
    let user = useSelector((state) => {
        return state;
    });

    return (
        <div class="container mx-auto p-4 mt-10">
            <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow">
                <thead class="bg-indigo-500 text-white">
                    <tr>
                        <th class="py-3 px-4 text-center text-sm font-semibold uppercase">#</th>
                        <th class="py-3 px-4 text-center text-sm font-semibold uppercase">상품명</th>
                        <th class="py-3 px-4 text-center text-sm font-semibold uppercase">수량</th>
                        <th class="py-3 px-4 text-center text-sm font-semibold uppercase">변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-4 text-center text-sm text-gray-700">1</td>
                        <td class="py-3 px-4 text-center text-sm text-gray-700">안녕</td>
                        <td class="py-3 px-4 text-center text-sm text-gray-700">안녕</td>
                        <td class="py-3 px-4 text-center text-sm text-gray-700">안녕</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Cart;
