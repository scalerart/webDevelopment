/*
=>  Hooks Introduction
        1.  Hook কী
        2.  Hook rules
        3.  Built-in Hooks overview

1.  Hook কী
    Hook হলো React এর একটি special function যা functional component এ state এবং lifecycle features ব্যবহার করতে দেয়।
    React Hooks আসার আগে এসব কাজ সাধারণত class component দিয়ে করা হতো।

    ✔  Hooks ব্যবহারের ফলে:
        1.  code simple হয়
        2.  reusable logic তৈরি করা যায়
        3.  functional component powerful হয়

    Example
        import { useState } from "react"

        function Counter(){
            const [count, setCount] = useState(0)

            return (
                <button onClick={() => setCount(count + 1)}>
                    {count}
                </button>
            )
        }

    ✔  এখানে useState একটি Hook।

2.  Hook Rules
    Hooks ব্যবহার করার কিছু নির্দিষ্ট নিয়ম আছে।

    1.  Only Call Hooks at Top Level
        Hooks সবসময় component এর top level এ call করতে হবে।

        ✔  ভুল
            if(condition){
                useState()
            }

        ✔  সঠিক
            const [count, setCount] = useState(0)

    2.  Only Call Hooks in React Functions
        Hooks ব্যবহার করা যায়:
            1.  React functional component
            2.  Custom hooks

    ✔  সাধারণ JavaScript function এ ব্যবহার করা যায় না।

3.  Built-in Hooks Overview
    React এ অনেক built-in hooks আছে।

    ✔  সবচেয়ে গুরুত্বপূর্ণ কয়েকটি:
        1.  State Hook
            ✔  useState Component state manage করতে ব্যবহার হয়।

        2.  Effect Hook
            ✔  useEffect Side effects handle করতে ব্যবহার হয়।

        Example:
            1.  API call
            2.  data fetch
            3.  DOM update

        3.  Ref Hook
            ✔  useRef DOM element reference বা mutable value store করতে ব্যবহার হয়।

        4.  Context Hook
            ✔  useContext Component tree এ data share করতে ব্যবহার হয়।

=>  Hooks Introduction Summary
    React Hooks হলো special functions যা functional component এ state এবং lifecycle features ব্যবহার করতে দেয়।

    ✔  Hooks এর প্রধান সুবিধা:
        1.  reusable logic
        2.  cleaner code
        3.  functional component powerful করা

    ✔  সবচেয়ে common built-in hooks:
        1.  useState
        2.  useEffect
        3.  useRef
        4.  useContext
*/