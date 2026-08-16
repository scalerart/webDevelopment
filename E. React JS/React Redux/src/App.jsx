import { useDispatch, useSelector } from 'react-redux';
import Counter from './components/Counter';
import Posts from './components/Posts';
import Stats from './components/Stats';
import { decrement, increment } from './features/counters/CountersSlice';

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();
  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };

  return (
    <div className="w-screen p-10 bg-gray-200 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        React Redux with Redux Toolkit
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.value}
            handleIncrement={() => handleIncrement(counter.id)}
            handleDecrement={() => handleDecrement(counter.id)}
          />
        ))}

        <Stats className="max-w-md mx-auto mt-10 space-y-5" totalCount={totalCount} />

        <Posts />
      </div>
    </div>
  );
}

export default App;
