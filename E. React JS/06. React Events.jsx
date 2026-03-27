/*
=>  React Events
        1.  onClick
        2.  onChange
        3.  onSubmit
        4.  Event Handler
        5.  Passing parameters
        6.  Synthetic Events
        7.  Prevent Default

1.  onClick
    onClick ব্যবহার করা হয় যখন user button বা element এ click করে।

    Example
        function App() {
            function handleClick() {
                alert("Button clicked")
            }

            return <button onClick={handleClick}>Click</button>
        }

2.  onChange
    onChange ব্যবহার করা হয় input field এর value পরিবর্তন হলে।

    Example
        function App() {
            function handleChange(e) {
                console.log(e.target.value)
            }

            return <input onChange={handleChange} />
        }

3.  onSubmit
    onSubmit ব্যবহার করা হয় form submit হলে।

    Example
        function App() {
            function handleSubmit() {
                alert("Form submitted")
        }

            return (
                <form onSubmit={handleSubmit}>
                    <button type="submit">Submit</button>
                </form>
            )
        }

4.  Event Handler
    Event ঘটলে যে function execute হয় তাকে Event Handler বলে।

    Example
        function App() {
            function handleClick() {
                console.log("Clicked")
            }

            return <button onClick={handleClick}>Click</button>
        }

    ✔  এখানে handleClick হলো event handler।

5.  Passing Parameters
    Event handler এ parameter পাঠানো যায়।

    Example
        function App() {
            function handleClick(name) {
                alert(name)
            }

            return (
                <button onClick={() => handleClick("Kadir")}>
                    Click
                </button>
            )
        }

6.  Synthetic Events
    React নিজস্ব Synthetic Event System ব্যবহার করে।
    এটি browser এর event কে একইভাবে handle করার জন্য wrapper তৈরি করে।

    Example
        function App() {
            function handleClick(event) {
                console.log(event)
            }

            return <button onClick={handleClick}>Click</button>
        }

    ✔  এখানে event হলো React Synthetic Event।

7.  Prevent Default
    কিছু event এ browser এর default behaviour বন্ধ করতে হয়।
    Example: form submit করলে page reload হয়।

    এটি বন্ধ করতে:

        function App() {
            function handleSubmit(e) {
                e.preventDefault()
                console.log("Form submitted")
            }

            return (
                <form onSubmit={handleSubmit}>
                    <button type="submit">Submit</button>
                </form>
            )
        }

=>  React Events Summary
    React এ event দিয়ে আমরা:
        1.  button click handle করি (onClick)
        2.  input change detect করি (onChange)
        3.  form submit handle করি (onSubmit)
        4.  parameter pass করতে পারি
        5.  default behaviour control করতে পারি
*/