// import Image from "next/image";
import Link from "next/link";

export default function Home() {
    let name = "seon";

    return (
        <div className="flex flex-col items-center h-full bg-slate-900">
            <main className="w-full ">
                <h1 className="text-2xl text-white">옹뇽뇽</h1>
                <p className="text-xl text-white">by {name}</p>
            </main>
        </div>
    );
}
