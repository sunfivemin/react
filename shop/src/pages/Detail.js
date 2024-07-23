import { useEffect, useState } from "react";
import clothone from "../assets/images/cloth1.png";
import { useParams } from "react-router-dom";

function Detail(props) {
    let [, setAlert] = useState(true);

    const [activeTab, setActiveTab] = useState(0);
    // const [endClass, setEndClass] = useState("");
    const [endClass, setEndClass] = useState("");

    const handleTabClick = (index) => {
        setActiveTab(index);
        setEndClass("");
    };

    useEffect(() => {
        // setEndClass("end");
        // setTimeout 쓰는 이유는 state 변경함수들이 연달아서 여러개 처리되어야 한다면
        // state 변경함수를 다 처리하고 마지막에 한 번만 재렌더링 된다.
        // 그래서 시간차를 뒀다 flashSync() 사용가능
        setEndClass("end");
        // setTimeout(() => {
        //   setEndClass("end");
        // }, 100);

        return () => {
            setEndClass("");
        };
    }, [activeTab]);

    const tabs = [
        { name: "Profile", content: "This is the profile tab content." },
        { name: "Dashboard", content: "This is the dashboard tab content." },
    ];

    useEffect(() => {
        //mount 생성, update 재랜더링 시 실행됨
        let a = setTimeout(() => {
            setAlert(false);
        }, 2000);
        console.log(2);

        // clean up function - useEffect 실행 전에 먼저 실행되는 return ()=>{}
        return () => {
            // 기존 타이머요청은 제거해주세요~
            console.log(1);
            clearTimeout(a);
            // unmount 삭제 시 1회 코드실행
        };
    }, []); // [] : mount시 1회 코드실행

    let { id } = useParams();
    let 찾은상품 = props.cloths.find(
        (x) => x.id === id //array자료.id === url에 입력한 번호
    );

    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;

        if (isNaN(value)) {
            setErrorMessage("그러지마세요");
        } else {
            setErrorMessage("");
        }

        setInputValue(value);
    };

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage("");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

    return (
        <>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="숫자를 입력하세요" className="w-[50%] flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 mx-auto mb-5 hover:ring-slate-300 " />
            {errorMessage && <div className="mb-4 text-sm h-[26px] mx-auto max-w-2xl leading-6 order-first rounded-full px-2 text-xs font-semibold leading-7 bg-blue-500 text-white">{errorMessage}</div>}

            <div className="flex flex-wrap">
                <div className="w-1/3 w-full px-4 mb-4">
                    <img style={{ backgroundImage: "url(" + clothone + ")" }} className="w-full mx-auto h-[24rem] bg-center bg-contain bg-no-repeat" alt="" />
                    <h4 className="mt-2 text-xl font-bold">{찾은상품.title}</h4>
                    <p className="text-gray-700">{찾은상품.content}</p>
                    <p className="text-gray-700">{찾은상품.price}</p>
                    <button className="inline-flex justify-center px-4 py-3 text-sm font-semibold text-white rounded-lg bg-slate-900 hover:bg-slate-700">주문하기</button>
                </div>

                {/* tab */}
                <div className="flex flex-col items-center justify-center w-full my-10">
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 w-96 ">
                        {tabs.map((tab, index) => (
                            <li key={index}>
                                <button onClick={() => handleTabClick(index)} className={`inline-block p-4 rounded-t-lg ${activeTab === index ? "text-blue-600 bg-gray-100" : "hover:text-gray-600 hover:bg-gray-50 "}`}>
                                    {tab.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className={`p-4 start ${endClass}`}>
                        <div>
                            <h2 className="text-xl font-semibold">{tabs[activeTab].name}</h2>
                            <p>{tabs[activeTab].content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
