/*
=>  Code Splitting
        1.  Lazy loading
        2.  Dynamic import
        3.  Suspense

1.  Lazy Loading
    Lazy Loading মানে হলো component প্রয়োজন হলে তখন load করা।

    ✔  এতে initial page load দ্রুত হয়।
    ✔  React এ এটি করা হয় React.lazy দিয়ে।

    Example
        const Dashboard = React.lazy(() => import("./Dashboard"))

    ✔  এখানে Dashboard component তখনই load হবে যখন এটি render হবে।

2.  Dynamic Import
    Dynamic import ব্যবহার করে JavaScript module runtime এ load করা যায়।

    Syntax
        import("./Component")

    Example
        const Profile = React.lazy(() => import("./Profile"))

    ✔  এটি bundle কে ছোট ছোট chunks এ ভাগ করে।

3.  Suspense
    Lazy loaded component render করার সময় loading UI দেখানোর জন্য ব্যবহার করা হয় Suspense।

    Example
        <Suspense fallback={<h2>Loading...</h2>}>
            <Dashboard />
        </Suspense>

    ✔  এখানে component load হওয়ার আগ পর্যন্ত fallback UI দেখাবে।

=>  Summary
    Code Splitting হলো একটি technique যেখানে বড় JavaScript bundle কে ছোট ছোট chunks এ ভাগ করা হয়।
    
    ✔  এর প্রধান tools:
        1.  React.lazy → lazy loading
        2.  dynamic import() → module runtime এ load
        3.  Suspense → loading UI দেখানো

    ✔  এতে initial loading time কমে এবং performance improve হয়।        
*/