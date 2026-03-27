/*
=>  React State
        1.  State কী
        2.  useState Hook
        3.  State update
        4.  Multiple states
        5.  State object
        6.  State immutability
        7.  Derived state

1.  State কী
    State হলো React component এর internal data যা সময়ের সাথে পরিবর্তন হতে পারে এবং UI update করে।

    Key Points:
        1.  Component নিজেই state manage করে
        2.  State change হলে component re-render হয়

    Example
        const [count, setCount] = useState(0)

2.  useState Hook
    useState হলো React এর একটি Hook যা functional component এ state তৈরি করতে ব্যবহার হয়।

    Syntax
        const [state, setState] = useState(initialValue)

    Example
        const [count, setCount] = useState(0)

    এখানে:
        1.  count = state value
        2.  setCount = state update function

3.  State Update
    State update করার জন্য setter function ব্যবহার করা হয়।

    Example
        function App(){
            const [count, setCount] = useState(0)

            return (
                <button onClick={() => setCount(count + 1)}>
                    {count}
                </button>
            )
        }

    ✔  State update হলে component re-render হয়।

4.  Multiple States
    একটি component এ একাধিক state রাখা যায়।

    Example
        const [name, setName] = useState("")
        const [age, setAge] = useState(0)

    ✔  এতে প্রতিটি state আলাদা ভাবে manage করা যায়।

5.  State Object
    State object আকারেও রাখা যায়।

    Example
        const [user, setUser] = useState({
            name: "Kadir",
            age: 22
        })

    ✔  Update করার সময়:
        setUser({
            ...user,
            age: 23
        })

6.  State Immutability
    React এ state directly modify করা যায় না।

    ✔  ভুল: user.age = 25

    ✔  সঠিক:
        setUser({
            ...user,
            age: 25
        })

    ✔  React state সবসময় immutable pattern অনুসরণ করে।

7.  Derived State
    Derived state হলো existing state বা props থেকে calculated value।

    Example
        function App(){
            const [price, setPrice] = useState(100)
            const tax = price * 0.1

            return <h1>Total: {price + tax}</h1>
        }

    ✔  এখানে tax হলো derived value।

=>  React State Summary
    React এ State হলো component এর dynamic data system।
        1.  useState দিয়ে state তৈরি করা হয়
        2.  setter function দিয়ে update করা হয়
        3.  state change হলে UI re-render হয়
        4.  state immutable থাকে
*/