export default function Banner(props) {
    return (
        <div className="h-auto">
            <div className="w-full p-8 mx-auto my-2 rounded-lg bg-blue-50 text-slate-900">
                <h4>
                    <span className="font-bold text-cyan-600">{props.content} </span>결제 행사중
                </h4>
            </div>
        </div>
    );
}
