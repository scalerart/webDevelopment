function Counter({ count, setCount }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:-translate-y-2 transition-all duration-200 ease-in-out hover:ring-2 ring-green-400 cursor-pointer flex flex-col items-center justify-center gap-5 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-600">Counter App</h1>
      {count > 0 ? <h1 className="text-6xl font-bold">{count}</h1> : ''}
      <div className="flex gap-5">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-600 text-white cursor-pointer active:scale-98 rounded-sm"
        >
          Increment
        </button>
        <button
          onClick={count > 0 ? () => setCount(count - 1) : null}
          className="px-4 py-2 bg-red-600 text-white cursor-pointer active:scale-98 rounded-sm"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-600 text-white cursor-pointer active:scale-98 rounded-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
