import "../globals.css";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div className="flex-col h-10 bg-white ">
            <nav className="flex">
                <Link className="p-5" href="/">
                    home
                </Link>
                <Link className="p-5" href="/list">
                    list페이지
                </Link>
            </nav>
            {children}
        </div>
    );
}
