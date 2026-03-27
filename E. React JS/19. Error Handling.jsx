/*
=>  Error Handling
        1.  Error Boundary
        2.  Try Catch
        3.  Fallback UI

1.  Error Boundary
    Error Boundary হলো এমন একটি React component যা child component এর error catch করে এবং fallback UI দেখায়। এটি সাধারণত class component দিয়ে তৈরি করা হয়।

    Example
        class ErrorBoundary extends React.Component {
            constructor(props){
            super(props)
            this.state = { hasError: false }
        }

            static getDerivedStateFromError(){
                return { hasError: true }
            }

            render(){
                if(this.state.hasError){
                    return <h1>Something went wrong</h1>
                }
            return this.props.children
            }
        }

    Usage
        <ErrorBoundary>
            <App />
        </ErrorBoundary>

2.  Try Catch
    React এ asynchronous code বা logic error handle করতে JavaScript try...catch ব্যবহার করা হয়।

    Example
        try {
            const data = JSON.parse(response)
        } catch(error) {
            console.log("Error:", error)
        }

    ✔  সাধারণত ব্যবহার হয়:
        1.  API response parsing
        2.  async function

3.  Fallback UI
    Error হলে user কে alternative UI দেখানো হয়, এটাকে Fallback UI বলে।

    Example
        function ErrorUI(){
            return <h2>Something went wrong. Please try again.</h2>
        }

    ✔  এটি Error Boundary বা Suspense এর সাথে ব্যবহার করা হয়।

=>  Summary
    React এ Error Handling ব্যবহার করা হয় application crash prevent করার জন্য।
    ✔  মূল concepts:
        1.  Error Boundary → component error catch করে
        2.  try...catch → JavaScript error handle করে
        3.  Fallback UI → error হলে alternative UI দেখায়
*/