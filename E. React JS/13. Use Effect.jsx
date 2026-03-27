/*
=>  useEffect
        1.  useEffect কী
        2.  Side Effects
        3.  dependency array
        4.  component lifecycle
        5.  cleanup function
        6.  multiple effects

1.  useEffect কী
    useEffect হলো React Hook যা component এ side effects handle করতে ব্যবহার হয়।

    ✔  Side effects যেমন:
        1.  API call
        2.  data fetching
        3.  DOM update
        4.  event listener

    Syntax
        useEffect(() => {
            fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies')
              .then(res => res.json())
              .then(data => console.log(data))
          }, [])

2.  Side Effects
    Side Effect হলো এমন কাজ যা component render হওয়ার পরে ঘটে।

    Example:
        1.  API থেকে data আনা
        2.  local storage access করা
        3.  timer set করা

    Example
        useEffect(() => {
            console.log("Component Rendered")
        }, [])

3.  Dependency Array
    useEffect এর দ্বিতীয় parameter হলো dependency array।

    ✔  এটি নির্ধারণ করে effect কখন run হবে।

    Empty dependency
        useEffect(() => {
            console.log("Run once")
        }, [])

    ✔  component mount হলে একবার run হয়।

    Dependency সহ
        useEffect(() => {
            console.log("Count changed")
        }, [count])

    ✔  count change হলে run হবে।

4.  Component Lifecycle
    useEffect ব্যবহার করে React lifecycle handle করা যায়।

    ✔  Lifecycle phases:

    1.  Mount
        Component প্রথম render হলে।

        useEffect(() => {
            console.log("Mounted")
        }, [])

    2.  Update
        State বা props change হলে।

        useEffect(() => {
            console.log("Updated")
        }, [count])

    3.  Unmount
        Component remove হলে cleanup function run হয়।

5.  Cleanup Function
    Cleanup function ব্যবহার করা হয় memory leak বা unwanted effect বন্ধ করতে।

    Example
        useEffect(() => {
                const timer = setInterval(() => {
                console.log("Running")
            }, 1000)

            return () => {
                clearInterval(timer)
            }
    }, [])

    ✔  এটি component unmount হলে run হয়।

6.  Multiple Effects
    একটি component এ একাধিক useEffect ব্যবহার করা যায়।

    Example
        useEffect(() => {
            console.log("First effect")
        }, [])

        useEffect(() => {
            console.log("Second effect")
        }, [count])

    ✔  এতে logic clean এবং separate থাকে।

=>  useEffect Summary
    useEffect হলো React Hook যা side effects handle করার জন্য ব্যবহার হয়।

    ✔  Key points:
        1.  render হওয়ার পরে run হয়
        2.  dependency array effect control করে
        3.  lifecycle phases handle করা যায়
        4.  cleanup function দিয়ে effect clean করা যায়
        5.  একটি component এ multiple effects থাকতে পারে
*/