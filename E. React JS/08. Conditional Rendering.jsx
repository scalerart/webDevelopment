/*
=>  Conditional Rendering
        1.  if else
        2.  ternary operator
        3.  logical &&
        4.  conditional components
        5.  null rendering

1.  if else
    React এ সাধারণ JavaScript if-else ব্যবহার করে condition অনুযায়ী UI render করা যায়।

    Example
        function App() {
            const isLogin = true

            if (isLogin) {
                return <h1>Welcome</h1>
            } else {
                return <h1>Please Login</h1>
            }
        }   

2.  Ternary Operator
    UI conditionally render করার সবচেয়ে বেশি ব্যবহৃত পদ্ধতি হলো ternary operator।

    Syntax: condition ? trueUI : falseUI

    Example
        function App() {
            const isLogin = true

            return (
                <h1>
                    {isLogin ? "Welcome Back" : "Please Login"}
                </h1>
            )
        }

3.  Logical &&
    যখন condition true হলে UI দেখাতে চাই, তখন && ব্যবহার করা হয়।

    Example
        function App() {
            const isAdmin = true

            return (
                <div>
                    {isAdmin && <h2>Admin Panel</h2>}
                </div>
            )
        }

    ✔  এখানে isAdmin true হলে Admin Panel render হবে।

4.  Conditional Components
    Condition অনুযায়ী পুরো component render করা যায়।

    Example
        function Login() {
            return <h2>Login Page</h2>
        }

        function Dashboard() {
            return <h2>Dashboard</h2>
        }

        function App() {
            const isLogin = true

            return isLogin ? <Dashboard /> : <Login />
        }

5.  Null Rendering
    React এ কোনো UI render না করতে চাইলে null return করা যায়।

    Example
        function Message({ show }) {
            if (!show) {
            return null
            }

            return <h1>Hello</h1>
        }

    ✔  এখানে show false হলে কিছুই render হবে না।

=>  Conditional Rendering Summary
    React এ Conditional Rendering ব্যবহার করে condition অনুযায়ী UI change করা হয়।

=>  সবচেয়ে common methods:
        1.  if-else
        2.  ternary operator
        3.  logical &&
        4.  conditional component rendering
        5.  null return করে UI hide করা
*/