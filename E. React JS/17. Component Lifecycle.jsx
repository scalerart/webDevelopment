/*
=>  Component Lifecycle
        1.  Mounting
        2.  Updating
        3.  Unmounting
        4.  Lifecycle with Hooks

1.  Mounting
    Mounting হলো সেই stage যখন component প্রথমবার DOM এ render হয়।

    ✔  এই সময় সাধারণত:
        1.  data fetch করা হয়
        2.  API call করা হয়
        3.  initial setup করা হয়

    Example (Hooks)
        useEffect(() => {
            console.log("Component Mounted")
        }, [])

    ✔  এখানে useEffect empty dependency array থাকায় effect একবার run হয়।

2.  Updating
    ✔  Updating ঘটে যখন component এর:
        1.  state change হয়
        2.  props change হয়

    ✔  তখন component re-render হয়।

    Example
        useEffect(() => {
            console.log("Component Updated")
        }, [count])

    ✔  এখানে count change হলে effect run হবে।

3.  Unmounting
    Unmounting হলো যখন component DOM থেকে remove হয়।

    ✔  এই সময় সাধারণত cleanup করা হয় যেমন:
        1.  event listener remove
        2.  timer clear করা

    Example
        useEffect(() => {
            return () => {
                console.log("Component Unmounted")
            }
        }, [])

    ✔  এখানে return function cleanup function হিসেবে কাজ করে।

4.  Lifecycle with Hooks
    React এর functional component এ lifecycle handle করা হয় Hooks দিয়ে।

    ✔  বিশেষ করে: useEffect

    ✔  Lifecycle mapping:
        1.  Mount   → useEffect(() => {}, [])
        2.  Update  → useEffect(() => {}, [dependency])
        3.  Unmount → cleanup function

=>  Summary
    React Component Lifecycle হলো component এর life stages।
    ✔  ৩টি প্রধান phase:
        1.  Mounting → component প্রথম render
        2.  Updating → state বা props change হলে
        3.  Unmounting → component DOM থেকে remove

    ✔  Functional component এ lifecycle সাধারণত useEffect Hook দিয়ে handle করা হয়।
*/