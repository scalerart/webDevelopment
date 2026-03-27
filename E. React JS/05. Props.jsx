/*
=>  Props
        1.  Props কী
        2.  Parent → Child data pass
        3.  Props with JSX
        4.  Props destructuring
        5.  Default props
        6.  Props children
        7.  Props vs State
        8.  Props validation

1.  Props কী
    Props (Properties) হলো React এ একটি component থেকে অন্য component এ data pass করার পদ্ধতি।
        সাধারণত Parent → Child data যায়
        Props read-only (immutable)

    ধরো একটি User component আছে।

        function User(props) {
            return <h1>{props.name}</h1>
        }

    ✔  ব্যবহার:
        <User name="Kadir" />
        Output: Kadir

    ✔  এখানে name হলো prop।

2.  Parent → Child Data Pass
    React এ data flow সাধারণত one-way (Parent → Child)।
    Parent component props পাঠায় এবং child component তা receive করে।

    Example
        function Child(props) {
            return <h2>{props.message}</h2>
        }

        function App() {
            return <Child message="Hello React" />
        }

    ✔  এখানে:
        App (Parent)
            ↓
        Child (Props)

3.  Props with JSX
    Props JSX এ HTML attribute এর মতো লেখা হয়।

    Example
        function Product(props) {
            return (
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.price}</p>
                </div>
            )
        }

    ব্যবহার:  <Product name="Laptop" price="800$" />

4.  Props Destructuring
    Props destructuring করলে code clean এবং readable হয়।

    ✔  সাধারণভাবে
        function User(props) {
            return <h1>{props.name}</h1>
        }

    ✔  Destructuring
        function User({ name }) {
            return <h1>{name}</h1>
        }

    ✔  Multiple props
        function Product({ name, price }) {
            return (
                <div>
                    <h2>{name}</h2>
                    <p>{price}</p>
                </div>
            )
        }

5.  Default Props
    কখনো props না দিলে default value দেওয়া যায়।

    Example
        function User({ name = "Guest" }) {
            return <h1>{name}</h1>
        }

    ব্যবহার:  <User />
    Output: Guest

6.  Props Children
    React এ একটি Component এর ভিতরে অন্য JSX পাঠানো যায়। এটাকে বলে children props।

    Example
        function Card({ children }) {
            return <div className="card">{children}</div>
        }

    ব্যবহার
        <Card>
            <h2>Product Title</h2>
            <p>Product Description</p>
        </Card>

    ✔  এখানে children এর ভিতরে থাকা JSX render হবে।

7.  Props vs State
    Feature         Props               State
    Data Source	    Parent Component    Component নিজে
    Change	        Immutable	        Mutable
    Use	Data        pass	            Data manage

    Example
        Props → data receive
        State → data manage

8.  Props Validation
    Props এর type check করার জন্য PropTypes ব্যবহার করা হয়।

    Example
        import PropTypes from "prop-types"

        function User({ name, age }) {
            return (
                <div>
                    <h1>{name}</h1>
                    <p>{age}</p>
                </div>
            )
        }

        User.propTypes = {
            name: PropTypes.string,
            age: PropTypes.number
        }

    ✔  এতে ভুল type দিলে warning দেখাবে।

=>  Props Summary
    Props দিয়ে আমরা:
        1.  Component এ data পাঠাই
        2.  Parent → Child communication করি
        3.  Dynamic UI তৈরি করি
        4.  children ব্যবহার করে layout বানাই
*/