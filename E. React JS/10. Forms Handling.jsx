/*
=>  Forms Handling
    1.  Controlled Components
    2.  Uncontrolled Components
    3.  Input fields
    4.  Form submit
    5.  Multiple inputs
    6.  Checkbox
    8.  Radio buttons
    9.  Textarea
    10. Select dropdown

1.  Controlled Components
    Controlled component হলো এমন form input যার value React state দ্বারা control করা হয়।

    Example
        function App(){
            const [name, setName] = useState("")

            return (
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            )
        }

    ✔  এখানে input value state থেকে আসে।

2.  Uncontrolled Components
    Uncontrolled component এ form data DOM থেকে সরাসরি নেওয়া হয়।

    এতে সাধারণত ref ব্যবহার করা হয়।

    Example
        function App(){
            const inputRef = useRef()

            function handleSubmit(){
                console.log(inputRef.current.value)
            }

            return (
                <>
                    <input ref={inputRef} />
                    <button onClick={handleSubmit}>Submit</button>
                </>
            )
        }

3.  Input Fields
    React এ input field এর value সাধারণত state দিয়ে manage করা হয়।

    Example
        const [email, setEmail] = useState("")

        <input
            type="email"
            value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

4.  Form Submit
    Form submit event handle করতে onSubmit ব্যবহার করা হয়।

    Example
        function handleSubmit(e){
            e.preventDefault()
            console.log("Form Submitted")
        }

        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>

    ✔  preventDefault() page reload বন্ধ করে।

5.  Multiple Inputs
    একাধিক input handle করার জন্য একটি state object ব্যবহার করা যায়।

    Example
        const [form, setForm] = useState({
            name:"",
            email:""
        })

        function handleChange(e){
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }

6.  Checkbox
    Checkbox এর value সাধারণত checked property দিয়ে manage করা হয়।

    Example
        const [agree, setAgree] = useState(false)

        <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
        />

7.  Radio Buttons
    Radio button দিয়ে একটি option select করা হয়।

    Example
        const [gender, setGender] = useState("")

        <input
            type="radio"
            value="male"
            onChange={(e) => setGender(e.target.value)}
        />

8.  Textarea
    Textarea এ বড় text input নেওয়া হয়।

    Example
        const [message, setMessage] = useState("")

        <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />

9.  Select Dropdown
    Dropdown select করতে select element ব্যবহার করা হয়।

    Example
        const [country, setCountry] = useState("")

        <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
        >

            <option value="bd">Bangladesh</option>
            <option value="us">USA</option>
        </select>

=>  Forms Handling Summary
    React এ form handle করার মূল বিষয়গুলো:
        1.  Controlled component (state দিয়ে control)
        2.  Uncontrolled component (ref দিয়ে DOM access)
        3.  onChange দিয়ে input value update
        4.  onSubmit দিয়ে form handle
        5.  checkbox, radio, textarea, select আলাদা ভাবে manage করা
*/