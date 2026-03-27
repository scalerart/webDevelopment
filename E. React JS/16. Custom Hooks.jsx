/*
=>  Custom Hooks
        1.  Custom Hook তৈরি
        2.  Reusable logic
        3.  Hook composition


1.  Custom Hook তৈরি
    Custom Hook হলো এমন একটি function যেখানে React Hooks ব্যবহার করে নিজস্ব reusable hook তৈরি করা হয়।

    ✔  নিয়ম:
        function নাম সবসময় use দিয়ে শুরু হবে।

    Example
        function useCounter(){
            const [count, setCount] = useState(0)

            function increment(){
                setCount(count + 1)
            }
          return {count, increment}
        }

    ✔  ব্যবহার
        function App(){
            const {count, increment} = useCounter()

            return (
                <button onClick={increment}>
                    {count}
                </button>
            )
        }

2.  Reusable Logic
    Custom Hook ব্যবহার করে একই logic একাধিক component এ reuse করা যায়।

    Example
        function useWindowWidth(){
            const [width, setWidth] = useState(window.innerWidth)

            useEffect(() => {
                function handleResize(){
                setWidth(window.innerWidth)
            }
                window.addEventListener("resize", handleResize)
            }, [])

            return width
        }

    ✔  এখন যেকোন component এ এটি ব্যবহার করা যাবে।

3.  Hook Composition
    একটি custom hook এর ভিতরে একাধিক built-in hook ব্যবহার করা যায়।

    Example
        function useUser(){
            const [user, setUser] = useState(null)

            useEffect(() => {
                fetch("/api/user")
                .then(res => res.json())
                .then(data => setUser(data))
            }, [])

            return user
        }

    ✔  এখানে ব্যবহার হয়েছে:
        useState
        useEffect

=>  Custom Hooks Summary
    Custom Hook হলো React এর একটি pattern যেখানে hooks ব্যবহার করে reusable logic তৈরি করা হয়।

    ✔  Key points:
        1.  function নাম use দিয়ে শুরু হয়
        2.  multiple component এ reuse করা যায়
        3.  built-in hooks combine করে logic তৈরি করা যায়
*/