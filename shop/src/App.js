import { useState } from "react";
import "./App.css";
import clothone from "./assets/images/cloth1.png";
import clothtwo from "./assets/images/cloth2.jpg";
import cloththree from "./assets/images/cloth3.png";
import data from "./data";

function App() {
    let [cloths] = useState(data);

    return (
        <>
            <div className="mx-auto font-pre">
                <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 lg:mx-0">
                    <div className="relative flex items-center mx-auto max-w-7xl">
                        <a className="mr-3 flex-none w-[3.0625rem] md:w-auto" href="/">
                            <span className="sr-only">home page</span>

                            <svg width="43" height="17" viewBox="0 0 44 18">
                                <path className="cls-1" d="M0,.48H11.57V1.7H4.12V7.47s4.78-.03,4.78,0-.9,1.83-.9,1.83h-3.88v5.73h7.55v1.24H0V.48Z" />
                                <polygon className="cls-1" points="42.74 2.18 42.74 .97 31.22 .97 31.22 16.75 32.9 16.75 35.31 16.75 35.35 16.75 35.35 10.46 39.38 10.46 40.23 8.44 35.35 8.44 35.35 2.18 42.74 2.18" />
                                <path
                                    className="cls-1"
                                    d="M21.97,16.71c-5.4,.03-9.43-2.57-9.43-8.03,.03-2.89,.98-4.92,3.11-6.59C17.58,.5,19.97-.02,22.58,0c2.38,0,4.37,1.1,5.32,1.68l-.63,1.26c-1.35-1.13-3.16-1.69-4.9-1.71-1.71-.02-3.44,1.05-4.3,2.51-.44,.75-.72,1.57-.85,2.43-.36,2.33-.07,4.88,1.69,6.59,1.02,1,2.4,1.59,3.83,1.63,.33,0,.67,.01,.99-.04,1.82-.3,3.12-1.15,4.25-1.96l-.53,2.92c-1.2,.59-3.02,1.4-5.46,1.4Z"
                                />
                            </svg>
                        </a>

                        <a href="https://tailwindcss.com/blog/2024-05-24-catalyst-application-layouts" className="items-center hidden px-3 py-1 ml-3 text-xs font-medium leading-5 rounded-full text-sky-600 dark:text-sky-400 bg-sky-400/10 hover:bg-sky-400/20">
                            <strong className="font-semibold">Introducing Catalyst</strong>
                            <svg width="2" height="2" fill="currentColor" aria-hidden="true" className="ml-2 text-sky-600 dark:text-sky-400/70">
                                <circle cx="1" cy="1" r="1"></circle>
                            </svg>
                            <span className="ml-2">A modern application UI kit for React</span>
                            <svg width="3" height="6" className="ml-3 overflow-visible text-sky-300 dark:text-sky-400" aria-hidden="true">
                                <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </a>
                        <div className="relative items-center ml-auto lg:flex">
                            <nav className="text-sm font-semibold leading-6 text-slate-700">
                                <ul className="flex space-x-8">
                                    <li>
                                        <a className="hover:text-sky-900 font-gmarket" href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a className=" hover:text-sky-900 font-gmarket" href="/">
                                            Cart
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="cloth-1 w-full h-[30rem] bg-center bg-cover bg-no-repeat bg-[url('./assets/images/banner.jpg')]"></div>
                <div className="container pt-10 mx-auto">
                    <div className="flex flex-wrap ">
                        <Card cloths={cloths[0]} i={clothone}/>
                        <Card cloths={cloths[1]} i={clothtwo}/>
                        <Card cloths={cloths[2]} i={cloththree}/>
                        {/* <div className="w-full px-4 mb-4 md:w-1/3">
                            <img style={{ backgroundImage: "url(" + clothone + ")" }} className="w-full mx-auto h-[24rem] bg-center bg-contain bg-no-repeat" alt="" />
                            <h4 className="mt-2 text-xl font-bold">{cloths[0].title}</h4>
                            <p className="text-gray-700">{cloths[0].content}</p>
                        </div>
                        <div className="w-full px-4 mb-4 md:w-1/3">
                            <img style={{ backgroundImage: "url(" + clothtwo + ")" }} className="w-full mx-auto h-[24rem] bg-center bg-contain bg-no-repeat" alt="" />
                            <h4 className="mt-2 text-xl font-bold">상품명</h4>
                            <p className="text-gray-700">상품정보</p>
                        </div>
                        <div className="w-full px-4 mb-4 md:w-1/3">
                            <img style={{ backgroundImage: "url(" + cloththree + ")" }} className="w-full mx-auto h-[24rem] bg-center bg-contain bg-no-repeat" alt="" />
                            <h4 className="mt-2 text-xl font-bold">상품명</h4>
                            <p className="text-gray-700">상품정보</p>
                        </div> */}
                        {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} className="w-full mx-auto h-[24rem] bg-center bg-contain bg-no-repeat" alt="" /> */}
                    </div>
                </div>
                {/* <div className="cloth-1 w-auto h-[21rem] bg-center bg-contain bg-no-repeat bg-[url('./assets/images/cloth1.png')]"></div>
                <div className="cloth-1 w-full h-[21rem] bg-center bg-contain bg-no-repeat bg-[url('./assets/images/cloth2.jpg')]"></div>
                <div className="cloth-1 w-full h-[21rem] bg-center bg-contain bg-no-repeat bg-[url('./assets/images/cloth3.png')]"></div> */}
            </div>
        </>
    );
}
function Card(props){
    return (
      <div className="w-full px-4 mb-4 md:w-1/3">
        <img style={{ backgroundImage: "url(" + props.i + ")" }} className="w-full mx-auto h-[24rem] bg-center bg-contain bg-no-repeat" alt="" />
        <h4 className="mt-2 text-xl font-bold">{ props.cloths.title }</h4>
        <p className="text-gray-700">{ props.cloths.price }</p>
      </div>
    )
  }

export default App;
