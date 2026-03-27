/*
=>  useState (Deep)
        1.  useState কী
        2.  Initial state
        3.  Functional update
        4.  Complex state
        5.  Object state
        6.  Array state

1.  useState কী
    useState হলো React এর একটি Hook যা functional component এ state তৈরি এবং update করতে ব্যবহার হয়।

    Syntax
        const [state, setState] = useState(initialValue)

    Example
        const [count, setCount] = useState(0)

    ✔  এখানে:
        1.  count → state value
        2.  setCount → state update function

2.  Initial State
    useState() এর ভিতরে যে value দেওয়া হয় সেটাই initial state।

    Example
        const [name, setName] = useState("Abdul Kadir")

    এখানে:
        Initial value = "Abdul Kadir"

3.  Functional Update
    যখন নতুন state previous state এর উপর নির্ভর করে, তখন functional update ব্যবহার করা ভালো।

    Example
        setCount(prev => prev + 1)

    Full example
        <button onClick={() => setCount(prev => prev + 1)}>
            Increment
        </button>

    ✔  এতে React সঠিক previous state ব্যবহার করে।

4.  Complex State
    State শুধু number বা string নয়, complex data যেমন object বা arrayও হতে পারে।

    Example
        const [user, setUser] = useState({
            name: "Kadir",
            age: 22
        })

5.  Object State
    Object state update করার সময় spread operator ব্যবহার করা হয়।

    Example
        const [user, setUser] = useState({
            name: "Kadir",
            age: 22
        })

        setUser({
            ...user, age: 23
        })

    ✔  এতে object এর অন্য property গুলো ঠিক থাকে।

6.  Array State
    State array আকারেও হতে পারে।

    Example
        const [items, setItems] = useState(["Apple","Mango"])

    ✔  নতুন item add করা
        setItems([...items, "Banana"])

    ✔  React এ array update করার সময় new array create করা হয়।

=>  useState Summary
    useState হলো React এর Hook যা functional component এ state manage করতে ব্যবহার হয়।

    Key points:
        1.  useState(initialValue) দিয়ে state তৈরি হয়
        2.  setter function দিয়ে state update করা হয়
        3.  state number, string, object, array হতে পারে
        4.  previous state এর উপর নির্ভর করলে functional update ব্যবহার করা হয়
*/