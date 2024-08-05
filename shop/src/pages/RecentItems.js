import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecentItems() {
    const [recentItems, setRecentItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("recentItems")) || [];
        setRecentItems(items);
    }, []);

    return (
        <div className="container p-4 mx-auto mt-10">
            <h6>최근 본 상품</h6>
            <div className="flex flex-wrap">
                {recentItems.map((item, index) => (
                    <div key={index} className="w-1/3 px-4 mb-4">
                        <Link to={`/detail/${item.id}`}>
                            <div className="p-4 border rounded-lg hover:shadow-lg">
                                <img src={item.image} alt={item.name} className="object-cover w-full h-32 mb-2" />
                                <h4 className="text-xl font-bold">{item.title}</h4>
                                <p className="text-gray-700">{item.content}</p>
                                <p className="text-gray-700">{item.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentItems;
