/*
=>  useContext
        1.  Context API
        2.  Global data
        3.  Provider
        4.  Consumer
        5.  Context performance

1.  Context API
    useContext ব্যবহার করা হয় React Context API এর সাথে।
    Context API এমন একটি system যা component tree জুড়ে data pass করতে দেয়। এতে prop drilling কমে যায়।

    Example
        const ThemeContext = createContext()

2.  Global Data
    Context সাধারণত global data share করার জন্য ব্যবহার করা হয়।

    যেমন:
        1.  theme (dark / light)
        2.  user authentication
        3.  language

    Example
        const user = { name: "Kadir" }

    ✔  এই data অনেক component ব্যবহার করতে পারে।

3.  Provider
    Provider component দিয়ে context data supply করা হয়।

    Example
        <ThemeContext.Provider value="dark">
            <App />
        </ThemeContext.Provider>

    ✔  এখানে value এর data সব child component access করতে পারবে।

4.  Consumer
    Child component এ context data access করতে useContext ব্যবহার করা হয়।

    Example
        function Navbar(){
            const theme = useContext(ThemeContext)
            return <h1>{theme}</h1>
        }

    ✔  এখানে theme context থেকে এসেছে।

5.  Context Performance
    Context ব্যবহার করলে অনেক component re-render হতে পারে।

    ✔  Performance ভালো রাখতে:
        1.  context ছোট রাখা
        2.  প্রয়োজন অনুযায়ী multiple context ব্যবহার করা

    Example
        AuthContext
        ThemeContext
        LanguageContext

=>  useContext Summary
    useContext হলো React Hook যা Context API থেকে data access করতে ব্যবহার হয়।

    ✔  Key points:
        1.  global data share করতে ব্যবহার হয়
        2.  prop drilling সমস্যা কমায়
        3.  Provider দিয়ে data supply করা হয়
        4.  useContext দিয়ে data consume করা হয়
*/