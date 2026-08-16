function Stats({ totalCount }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow text-2xl font-semibold">
      Total Count: {totalCount}
    </div>
  );
}

export default Stats;
