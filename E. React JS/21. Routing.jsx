/*
=>  Routing
        1.  Library
        2.  React Router

    Topics
        1.  BrowserRouter
        2.  Routes
        3.  Route
        4.  Link
        5.  NavLink
        6.  Nested routes
        7.  Dynamic routes
        8.  URL params
        9.  404 page

✔  Routing( React Router)
    এটি ব্যবহার করা হয় React এ multi-page navigation তৈরি করার জন্য (SPA এর ভিতরে)।

1.  Library
    React এ routing করার জন্য সবচেয়ে জনপ্রিয় library হলো React Router
    এটি SPA (Single Page Application) এর ভিতরে page reload ছাড়া navigation করতে দেয়।

2.  React Router
    React Router URL অনুযায়ী component render করে।

    Example
        1.  /       → Home
        2.  /about  → About
        3.  /user   → User

Topics
    1.  BrowserRouter
        BrowserRouter পুরো app কে wrap করে এবং routing enable করে।

        Example
            import { BrowserRouter } from "react-router-dom"

            <BrowserRouter>
                <App />
            </BrowserRouter>

    2.  Routes
        Routes হলো container যেখানে সব route define করা হয়।

        Example
            import { Routes } from "react-router-dom"

            <Routes>
                routes here
            </Routes>

    3.  Route
        Route নির্দিষ্ট path এর জন্য component render করে।

        Example
            import { Route } from "react-router-dom"

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>

    4.  Link
        Link ব্যবহার করা হয় page reload ছাড়া navigation করার জন্য।

        Example
            import { Link } from "react-router-dom"

            <Link to="/about">Go to About</Link>

    5.  NavLink
        NavLink Link এর মতো, কিন্তু active route detect করতে পারে।

        Example
            import { NavLink } from "react-router-dom"

            <NavLink to="/about">
                About
            </NavLink>

        ✔  active হলে automatically class add করা যায়।

    6.  Nested Routes
        Route এর ভিতরে আরেকটি route রাখা যায়।

        Example
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>

        ✔  /dashboard/profile

    7.  Dynamic Routes
        Dynamic data handle করার জন্য parameter ব্যবহার করা হয়।

        Example
            <Route path="/user/:id" element={<User />} />
        ✔  /user/10

    8.  URL Params
        Dynamic route এর data access করতে useParams ব্যবহার করা হয়।

        Example
            import { useParams } from "react-router-dom"

            function User(){
                const { id } = useParams()
                return <h1>User ID: {id}</h1>
            }

    9.  404 Page
        যদি কোনো route match না হয়, তখন 404 page দেখানো হয়।

        Example
            <Route path="*" element={<NotFound />} />

=?  Summary
    React Routing ব্যবহার করা হয় SPA এর ভিতরে navigation করার জন্য।

    Main concepts:
        1.  BrowserRouter → app wrap করে
        2.  Routes → route container
        3.  Route → path অনুযায়ী component render
        4.  Link / NavLink → navigation
        5.  Dynamic Route → URL parameter
        6.  Nested Route → child route
        7.  * → 404 page
*/