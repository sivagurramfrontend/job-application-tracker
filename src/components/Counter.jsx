import  { useState } from 'react';
function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm" >
            <h2 className="text-xl font-bold text-slate-900">Counter</h2>
            <p className="text-slate-600">You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
                Increase Count
            </button>
            <button onClick={() => setCount(0)} className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
                Reset Count
            </button>
            <button onClick={() => setCount(count - 1)} className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
                Decrease Count
            </button>
        </div>
    )
}
export default Counter;