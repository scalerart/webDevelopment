function OnChangeApp({ text, setText }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:-translate-y-2 transition-all duration-200 ease-in-out hover:ring-2 ring-green-400 cursor-pointer max-w-xl mx-auto mt-5">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-5">State Change App</h1>
      <div className="flex flex-col items-center justify-center">
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          type="text"
          placeholder="Type your joke!"
          className="px-5 py-2 bg-orange-100/50 w-full rounded-full outline-0 border border-green-200 focus:ring ring-green-400"
        />
        <p className="mt-4 text-2xl font-semibold bg-orange-100/50 w-full px-5 py-2 rounded-sm">
          Your type: {text}
        </p>
      </div>
    </div>
  );
}

export default OnChangeApp;
