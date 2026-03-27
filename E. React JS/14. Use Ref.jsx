/*
=>  useRef
        1.  DOM reference
        2.  focus input
        3.  mutable values
        4.  previous value store

1.  DOM Reference
    useRef ব্যবহার করে আমরা সরাসরি DOM element reference নিতে পারি।

    Syntax
        const ref = useRef(null)

    Example
        function App(){
            const inputRef = useRef(null)
             return <input ref={inputRef} />
        }

    ✔  এখানে inputRef দিয়ে input element access করা যায়।

2.  Focus Input
    useRef ব্যবহার করে programmatically input focus করা যায়।

    Example
        function App(){
            const inputRef = useRef(null)

            function handleFocus(){
                inputRef.current.focus()
            }

            return (
                <>
                    <input ref={inputRef} />
                    <button onClick={handleFocus}>Focus</button>
                </>
            )
        }

3.  Mutable Values
    useRef এমন value store করতে পারে যা re-render trigger করে না।

    Example
        const countRef = useRef(0)

        function handleClick(){
            countRef.current += 1
            console.log(countRef.current)
        }

    ✔  এখানে value change হলেও component re-render হবে না।

4.  Previous Value Store
    useRef ব্যবহার করে previous state বা previous prop value store করা যায়।

    Example
        function App(){
            const [count, setCount] = useState(0)
            const prevCount = useRef()

                useEffect(() => {
                prevCount.current = count
            }, [count])

            return (
                <h2>
                    Current: {count} | Previous: {prevCount.current}
                </h2>
            )
        }

=>  useRef Summary
    useRef হলো React Hook যা ব্যবহার করা হয়:
        1.  DOM element reference নেওয়ার জন্য
        2.  input focus বা DOM manipulation করার জন্য
        3.  mutable value store করার জন্য
        4.  previous value track করার জন্য
        5.  এটি state এর মতো re-render trigger করে না।
*/