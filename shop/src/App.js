import "./App.css";


function App() {
    return (
        <>
        
            <div className="flex gap-4 justify-center items-center h-screen">
                <div className="hover:bg-purple-400 transition w-[15vw] text-center px-2 py-4 border border-blue-200 text-green-600 cursor-pointer text-[24px] font-[100] shadow-2xl bg-blue-100">핑거</div>
                <div className="w-fit px-2 py-4 border border-blue-200 text-green-600 hover:text-green-100 transition-colors text-md shadow-2xl bg-blue-100 absolute bottom-5 right-5">핑거</div>
            </div>

            <div className="my-custom-style ">
                <div className="card w-full  px-2 py-4 odd:bg-zinc-100 shadow-orange-400/90 leading-relaxed border text-center border-blue-200 rounded-full text-gray-600 text-md shadow-2xl font-bold bg-blue-100">핑거</div>
                <div className="w-full px-2 py-4 odd:bg-zinc-100 order text-center border-blue-200 rounded-md text-green-600 text-md shadow-2xl bg-blue-100">핑거</div>
                <div className="w-full px-2 py-4 odd:bg-zinc-100 border text-center border-blue-200 rounded-tr-2xl text-green-600 text-md shadow bg-blue-100">핑거</div>
            </div>
        </>
    );
}

export default App;
