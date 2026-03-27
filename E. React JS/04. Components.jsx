/*
=>  Components
        1.  Component কী
        2.  Function Component
        3.  Component naming rules
        4.  Multiple Components
        5.  Component nesting
        6.  Reusable components
        7.  Component separation
        8.  Smart vs Dumb Components

1.  Component কী
    Component হলো UI এর একটি ছোট, স্বাধীন এবং reusable অংশ।

    ধরো একটি ওয়েবসাইটে আছে:
        1.  Navbar
        2.  Sidebar
        3.  Card
        4.  Footer

    ✔  React এ এগুলো আলাদা Component হিসেবে তৈরি করা হয়।

        App
        ├─ Navbar
        ├─ Sidebar
        ├─ Card
        └─ Footer

    ✔  এর সুবিধা:
        1.  কোড ছোট থাকে
        2.  সহজে manage করা যায়
        3.  reuse করা যায়

2.  Function Component
    বর্তমানে React এ সবচেয়ে বেশি ব্যবহার হয় Function Component।

    Example
        function App() {
            return <h1>Hello React</h1>
        }

        export default App

    আরও একটি component:

        function Navbar() {
            return <h2>My Website</h2>
        }

    ✔  Function component সাধারণত:
        1.  simple
        2.  readable
        3.  modern React এর standard

3.  Component Naming Rules
    React component এর নাম লেখার কিছু নিয়ম আছে।

    1.  Capital Letter
        Component নাম অবশ্যই Capital letter দিয়ে শুরু হবে।

        ✔ ভুল: function navbar() {}

        ✔ সঠিক: function Navbar() {}

    2.  PascalCase ব্যবহার করা ভালো
        Example
            1.  UserProfile
            2.  ProductCard
            3.  LoginForm

4.  Multiple Components
    একটি React app এ অনেক component থাকতে পারে।

    Example
        function Navbar() {
            return <h1>Navbar</h1>
        }

        function Footer() {
            return <h1>Footer</h1>
        }

    function App() {
        return (
            <div>
                <Navbar />
                <Footer />
            </div>
        )
    }

    এখানে:
        1.  Navbar
        2.  Footer

    ✔  দুটিই আলাদা component।

5.  Component Nesting
    একটি component এর ভিতরে আরেকটি component ব্যবহার করা যায়। এটাকে বলে Component Nesting।

    Example
        function Card() {
            return <p>Product Card</p>
        }

        function App() {
            return (
                <div>
                    <Card />
                    <Card />
                    <Card />
                </div>
            )
        }

    ✔  এখানে Card component multiple times ব্যবহার হয়েছে।

6.  Reusable Components
    Reusable component মানে একবার তৈরি করে অনেক জায়গায় ব্যবহার করা।

    Example
        function Button() {
            return <button>Click</button>
        }

    ব্যবহার:
        <Button />
        <Button />
        <Button />

    ✔  এইভাবে UI দ্রুত তৈরি করা যায়।

7.  Component Separation
    বড় project এ component আলাদা file এ রাখা হয়।

    Example folder structure
        src
        ├─ components
        │   ├─ Navbar.jsx
        │   ├─ Footer.jsx
        │   └─ Card.jsx
        │
        ├─ App.jsx

    Example Navbar.jsx

        function Navbar() {
            return <h1>Navbar</h1>
        }

        export default Navbar

    App.jsx
        import Navbar from "./components/Navbar"

            function App() {
                return <Navbar />
            }

    ✔  এতে project clean এবং maintainable হয়।

8.  Smart vs Dumb Components
    React এ component সাধারণত দুই ধরনের হয়।

    1.  Smart Component এগুলো:
        1.  data handle করে
        2.  logic handle করে
        3.  state manage করে

    Example
        1.  UserDashboard
        2.  ProductPage

    2.  Dumb Component
        এগুলো শুধু UI show করে।

    Example
        1.  Button
        2.  Card
        3.  Avatar

    Example
        function Button() {
            return <button>Buy Now</button>
        }

    ✔  এগুলোকে অনেক সময় Presentational Component বলা হয়।

=>  Components Summary
    React এ Component ব্যবহার করে আমরা:
        1.  UI কে ছোট অংশে ভাগ করি
        2.  reusable code লিখি
        4.  clean architecture তৈরি করি
        5.  বড় project সহজে manage করি
*/