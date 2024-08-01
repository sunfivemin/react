import { useEffect, useState } from "react";
import "./App.css";
import clothone from "./assets/images/cloth1.png";
import clothtwo from "./assets/images/cloth2.jpg";
import cloththree from "./assets/images/cloth3.png";
import cloth4 from "./assets/images/cloth1.png";
import cloth5 from "./assets/images/cloth2.jpg";
import cloth6 from "./assets/images/cloth3.png";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import axios from "axios";

const clothImages = [clothone, clothtwo, cloththree, cloth4, cloth5, cloth6];

function App() {
  let [cloths, setCloths] = useState(data);
  let navi = useNavigate();
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    // setFade("end");
    return () => {
      setFade("");
    };
  }, []);

  return (
    <div className={"App start " + fade}>
      <div className="mx-auto font-pre">
        <div className="px-4 py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 lg:mx-0">
          <div className="relative flex items-center mx-auto max-w-7xl">
            <a className="mr-3 flex-none w-[3.0625rem] md:w-auto" href="/">
              <span className="sr-only">home page</span>

              <svg width="43" height="17" viewBox="0 0 44 18">
                <path
                  className="cls-1"
                  d="M0,.48H11.57V1.7H4.12V7.47s4.78-.03,4.78,0-.9,1.83-.9,1.83h-3.88v5.73h7.55v1.24H0V.48Z"
                />
                <polygon
                  className="cls-1"
                  points="42.74 2.18 42.74 .97 31.22 .97 31.22 16.75 32.9 16.75 35.31 16.75 35.35 16.75 35.35 10.46 39.38 10.46 40.23 8.44 35.35 8.44 35.35 2.18 42.74 2.18"
                />
                <path
                  className="cls-1"
                  d="M21.97,16.71c-5.4,.03-9.43-2.57-9.43-8.03,.03-2.89,.98-4.92,3.11-6.59C17.58,.5,19.97-.02,22.58,0c2.38,0,4.37,1.1,5.32,1.68l-.63,1.26c-1.35-1.13-3.16-1.69-4.9-1.71-1.71-.02-3.44,1.05-4.3,2.51-.44,.75-.72,1.57-.85,2.43-.36,2.33-.07,4.88,1.69,6.59,1.02,1,2.4,1.59,3.83,1.63,.33,0,.67,.01,.99-.04,1.82-.3,3.12-1.15,4.25-1.96l-.53,2.92c-1.2,.59-3.02,1.4-5.46,1.4Z"
                />
              </svg>
            </a>

            <div className="relative items-center ml-auto lg:flex">
              <nav className="text-sm font-semibold leading-6 text-slate-700">
                <ul className="flex space-x-8">
                  <li>
                    <Link className="hover:text-sky-900 font-gmarket" to="/">
                      홈
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" hover:text-sky-900 font-gmarket"
                      to="/detail/1"
                      onClick={() => {
                        navi("/detail/1");
                      }}
                    >
                      상세페이지
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" hover:text-sky-900 font-gmarket"
                      to="/cart"
                      onClick={() => {
                        navi("/cart");
                      }}
                    >
                      장바구니
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* <div className="cloth-1 w-auto h-[21rem] bg-center bg-contain bg-no-repeat bg-[url('./assets/images/cloth1.png')]"></div>
                <div className="cloth-1 w-full h-[21rem] bg-center bg-contain bg-no-repeat bg-[url('./assets/images/cloth2.jpg')]"></div>
                <div className="cloth-1 w-full h-[21rem] bg-center bg-contain bg-no-repeat bg-[url('./assets/images/cloth3.png')]"></div> */}
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="cloth-1 w-full h-[30rem] bg-center bg-cover bg-no-repeat bg-[url('./assets/images/banner.jpg')]"></div>
              <div className="container pt-10 mx-auto">
                <div className="flex flex-wrap ">
                  {cloths.map((cloth, index) => (
                    <Card
                      key={index}
                      cloth={cloth}
                      image={clothImages[index]}
                    />
                  ))}

                  {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} className="w-full mx-auto h-[24rem] bg-center bg-contain bg-no-repeat" alt="" /> */}
                </div>
                <button
                  onClick={() => {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((결과) => {
                        // console.log(결과.data);
                        let copy = [...cloths, ...결과.data];
                        setCloths(copy);
                      })
                      .catch(() => {
                        console.log("실패함 ㅅㄱ");
                      });
                  }}
                  className="inline-flex justify-center px-4 py-3 my-10 text-sm font-semibold text-white rounded-lg bg-slate-900 hover:bg-slate-700"
                >
                  더보기
                </button>
              </div>
            </>
          }
        />

        <Route path="/detail/:id" element={<Detail cloths={cloths} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>11111</div>} />
          <Route path="location" element={<div>22222</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={
              <div>
                <p>첫 주문시 양배추즙 서비스</p>
              </div>
            }
          />
          <Route
            path="two"
            element={
              <div>
                <p>생일기념 쿠폰받기</p>
              </div>
            }
          />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card({ cloth, image }) {
  return (
    <div className="w-full px-4 mb-4 md:w-1/3">
      <img
        src={image}
        className="w-full mx-auto h-[24rem] bg-center bg-contain bg-no-repeat"
        alt={cloth.title}
      />
      <h4 className="mt-2 text-xl font-bold">{cloth.title}</h4>
      <p className="text-gray-700">{cloth.price}</p>
    </div>
  );
}

export default App;
