/*
=>  Performance Optimization
        1.  React.memo
        2.  useMemo
        3.  useCallback
        4.  Lazy loading
        5.  Avoid unnecessary re-render

1.  React.memo
    React.memo একটি Higher Order Component যা component কে unnecessary re-render হওয়া থেকে বাঁচায়।
    ✔  যদি props change না হয় তাহলে component re-render হবে না।

    Example
        const Child = React.memo(function Child({name}){
            console.log("Rendered")
            return <h1>{name}</h1>
        })

    ✔  এতে props একই থাকলে component আবার render হবে না।

2.  useMemo
    useMemo ব্যবহার করা হয় expensive calculation memoize করার জন্য।

    ✔  এতে calculation বারবার run হয় না।

    Example
        const total = useMemo(() => {
            return items.reduce((sum, item) => sum + item.price, 0)
        }, [items])

    ✔  এখানে items change হলে তবেই calculation হবে।

3.  useCallback
    useCallback ব্যবহার করা হয় function memoize করার জন্য।

    ✔  এটি child component এর unnecessary re-render কমায়।

    Example
        const handleClick = useCallback(() => {
            console.log("Clicked")
        }, [])

    ✔  এতে function reference একই থাকে।

4.  Lazy Loading
    Lazy loading ব্যবহার করা হয় component বা code প্রয়োজন হলে load করার জন্য।

    ✔  এতে initial bundle size কমে।

    Example
        const Dashboard = React.lazy(() => import("./Dashboard"))

    ✔  Usage
        <Suspense fallback={<h2>Loading...</h2>}>
            <Dashboard />
        </Suspense>

5.  Avoid Unnecessary Re-render
    React app fast রাখতে কিছু best practices:
        1.  React.memo ব্যবহার করা
        2.  useMemo দিয়ে heavy calculation optimize করা
        3.  useCallback দিয়ে function memoize করা
        4.  state minimize করা
        5.  component ছোট রাখা

=>  Summary
    React Performance Optimization এর মূল লক্ষ্য:
        1.  unnecessary re-render কমানো
        2.  heavy computation optimize করা
        3.  bundle size কমানো

    ✔  সবচেয়ে গুরুত্বপূর্ণ tools:
        1.  React.memo
        2.  useMemo
        3.  useCallback
        4.  Lazy loading
*/