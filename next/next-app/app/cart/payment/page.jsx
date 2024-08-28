export default function Payment(props) {
    return (
        <div className="h-auto">
            <div className="flex items-center w-full gap-6 px-6 mx-auto my-2 bg-blue-100 rounded-lg text-slate-900">
                <h4>{props.items}</h4>
                <p>$40</p>
                <p>1개</p>
            </div>
        </div>
    );
}
