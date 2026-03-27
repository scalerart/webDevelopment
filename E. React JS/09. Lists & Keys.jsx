/*
=>  Lists & Keys
    1.  Array rendering
        map()
        find()
        filter()
        foreach()
    2.  Keys concept
    3.  Dynamic list
    4.  Filtering lists

1.  Array Rendering
    React এ array data থেকে UI render করতে সাধারণত JavaScript array methods ব্যবহার করা হয়।

    1.  map()
        সবচেয়ে বেশি ব্যবহৃত method।
        Array এর প্রতিটি item থেকে JSX তৈরি করে।

        Example
            function App(){
            const fruits = ["Apple", "Mango", "Banana"]

            return (
                <ul>
                    {fruits.map((fruit) => (
                        <li>{fruit}</li>
                    ))}
                </ul>
                )
            }

    2.  filter()
        Condition অনুযায়ী array থেকে কিছু item select করে।

        Example
            const numbers = [10, 20, 30, 40]
            const result = numbers.filter(n => n > 20)

    ✔  React এ list render করার আগে filter ব্যবহার করা হয়।

    3.  find()
        Condition অনুযায়ী একটি item খুঁজে বের করে।

        Example
            const users = [
                {id:1, name:"A"},
                {id:2, name:"B"}
            ]

            const user = users.find(u => u.id === 2)

    4.  forEach()
        Array iterate করে কিন্তু নতুন array return করে না।
        React list rendering এ সাধারণত map() বেশি ব্যবহার হয়।

        Example
            numbers.forEach(n => console.log(n))

2.  Keys Concept
    React list render করার সময় প্রতিটি element এর জন্য unique key দিতে হয়।
    Key ব্যবহার করে React বুঝতে পারে কোন element change হয়েছে।

    Example
        const items = ["A", "B", "C"]

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

3.  Dynamic List
    যখন list API বা state থেকে আসে, তখন তাকে dynamic list বলে।

    Example
        function App(){
            const [users] = useState([
                {id:1, name:"Kadir"},
                {id:2, name:"Rahim"}
            ])

            return (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )
        }

4.  Filtering Lists
    Condition অনুযায়ী list filter করে render করা যায়।

    Example
        function App(){
            const numbers = [10,20,30,40]

            const filtered = numbers.filter(n => n > 20)

            return (
                <ul>
                    {filtered.map(n => (
                        <li key={n}>{n}</li>
                    ))}
                </ul>
            )
        }

=>  Lists & Keys Summary
    React এ Lists Rendering করা হয় array data থেকে UI তৈরি করতে।

    ✔  সবচেয়ে গুরুত্বপূর্ণ বিষয়গুলো:
        1.  map() দিয়ে list render করা
        2.  প্রতিটি item এর জন্য unique key দেওয়া
        3.  dynamic data থেকে list তৈরি করা
        4.  filter() ব্যবহার করে condition অনুযায়ী list render করা
*/