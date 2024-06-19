import vibe from "./assets/images/vibe.png";
import "./App.css";
import { useState } from "react";

function App() {
    let post = "홍대 맛집"; // 변수
    let [글제목, 글제목함수] = useState(["남자코트 추천", "강남 우동맛집", "토글 독학", "독학"]); // 스테이트
    let [like, likeFunc] = useState([0, 0, 0, 0]); // 두번째는 state 변경용 함수임, 스테이트 변경을해야 재랜더링 이뤄짐
    let [modal, setModal] = useState(false);

    const 라이크올리는기능 = (i) => {
        let copy = [...like];
        copy[i] = copy[i] + 1;
        likeFunc(copy);
    };


    const 글제목바뀌는기능 = () => {
        let copy = [...글제목]; // 복사본을 만들어야함(shallow copy)
        copy[0] = "여자코트 추천";
        글제목함수(copy);
    };

    const 정렬기능 = () => {
        let copy = [...글제목]; // 복사본을 만들어야함(shallow copy)
        copy.sort();
        글제목함수(copy);
    };

    return (
        <div className="App">
            <div className="black-nav">
                <a className="App-link" href="#none" target="_blank" rel="noopener noreferrer">
                    <img src={vibe} className="App-logo" alt="logo" />
                    <h4> {post} blog</h4>
                </a>
            </div>
            <button onClick={글제목바뀌는기능}>button</button>
            <button onClick={정렬기능}>정렬</button>


 
            {글제목.map(function (a, i) {
                return (
                    <div className="list" key={i}>
                        <h4 onClick={() => setModal(!modal)}>
                            {글제목[i]}
                            <span onClick={() => 라이크올리는기능(i)}>👍</span> {like[i]}
                        </h4>
                        <p>2월 17일 발행</p>
                    </div>
                );
            })}

            {modal === true ? <Modal color={'#ddffff'}  글제목바뀌는기능={글제목바뀌는기능} 글제목={글제목} /> : ""}
        </div>
    );
}

let Modal = (props) => {
    return (
        <>
            <div className="modal" style={{background : props.color}}>
                <h4>{props.글제목[0]}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button onClick={() => { props.글제목바뀌는기능() }}>글수정</button>
            </div>
            <div></div>
        </>
    );
};

export default App;
