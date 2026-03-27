/*
=>  JSX (JavaScript XML)
        1.  JSX কী
        2.  JSX syntax
        3.  JSX rules
        4.  JavaScript inside JSX
        5.  JSX expressions
        6.  JSX attributes
        7.  JSX conditional rendering
        8.  JSX fragments
        9.  Rendering lists in JSX


1.  JSX কী
    JSX হলো JavaScript এর একটি syntax extension যা দেখতে HTML এর মতো।
    React এ আমরা UI লিখি JSX দিয়ে।

    Example
        function App() {
            return <h1>Hello World</h1>
        }

    এখানে <h1> দেখতে HTML এর মতো হলেও এটি আসলে JavaScript এর ভিতরে লেখা JSX।
    React পরে এটাকে convert করে JavaScript function call এ।

2.  JSX Syntax
    JSX দেখতে HTML এর মতো হলেও এটি JavaScript এর ভিতরে লেখা হয়।

    Example
        function App() {
            return (
                <div>
                    <h1>My React App</h1>
                    <p>Welcome to React</p>
                </div>
            )
        }

    এখানে:
        1.  div
        2.  h1
        3.  p

    ✔  সবই JSX element।   
    
3.  JSX Rules
    JSX লেখার সময় কয়েকটি নিয়ম মানতে হয়।

    1.  Single Parent Element
        একটি component এ একটাই parent element থাকতে হবে।

    ✔  ভুল
        return (
            <h1>Hello</h1>
            <p>Welcome</p>
        )

    ✔  সঠিক
        return (
            <div>
                <h1>Hello</h1>
                <p>Welcome</p>
            </div>
        )

    2.  সব tag close করতে হবে
        ✔  ভুল: <img src="image.png">
        ✔  সঠিক: <img src="image.png" />

    3.  class এর জায়গায় className
        ✔  ভুল: <div class="box"></div>
        ✔  সঠিক: <div className="box"></div>

4.  JavaScript inside JSX
    JSX এর ভিতরে JavaScript লিখতে হলে {} ব্যবহার করতে হয়।

    Example
        function App() {
            const name = "ABDUL KADIR"

            return <h1>Hello {name}</h1>
        }

    ✔  Output: Hello ABDUL KADIR

5.  JSX Expressions
    JSX এর {} এর ভিতরে আমরা expression ব্যবহার করতে পারি।

    Example
        function App() {
            const a = 10
            const b = 20
            
            return <h1>{a + b}</h1>
        }

    ✔  Output: 30

6.  JSX Attributes
    JSX এ HTML এর মতো attribute ব্যবহার করা যায়।

    Example
        function App() {
            return (
                <img src="logo.png" alt="logo" />
            )
        }

    Dynamic attribute
        function App() {
            const url = "logo.png"

            return <img src={url} />
        }

7.  JSX Conditional Rendering
    React এ condition অনুযায়ী UI দেখানো যায়।

    1.  Ternary operator
        function App() {
            const isLogin = true

            return (
                <h1>{isLogin ? "Welcome Back" : "Please Login"}</h1>
            )
        }

    2.  Logical AND
        function App() {
            const isAdmin = true

            return (
                <div>
                    {isAdmin && <h2>Admin Panel</h2>}
                </div>
            )
        }
  
8.  JSX Fragments
    অতিরিক্ত div ব্যবহার না করে JSX group করতে Fragment ব্যবহার করা হয়।

    Example
        function App() {
            return (
                <>
                    <h1>Hello</h1>
                    <p>React Learning</p>
                </>
            )
        }

    ✔  এটাকে বলে Fragment।

9.  Rendering Lists in JSX
    React এ array থেকে list render করা যায়।

    Example
        function App() {
            const fruits = ["Apple", "Mango", "Banana"]

            return (
                <ul>
                    {fruits.map((fruit) => (
                    <li>{fruit}</li>
                  ))}
                </ul>
            )
        }

    ✔  Output: Apple, Mango, Banana

=>  JSX Summary
    1.  HTML এর মতো UI লিখি
    2.  JavaScript ব্যবহার করি
    3.  Dynamic data দেখাই
    4.  Condition ব্যবহার করি
    5.  List render করি
*/