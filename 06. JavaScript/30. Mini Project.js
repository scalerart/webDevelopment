/*
Mini Project Checklist
    ✔ API integration
    ✔ User input
    ✔ UI update
    ✔ Error handle
    ✔ Clean code

1.  Project 1: Weather App (API Based)
    =>  তুমি এখানে কী কী শিখবে
        ✔ API fetch
        ✔ async / await
        ✔ error handling
        ✔ DOM update
        ✔ user input
        ✔ loading state

    =>  Weather App Flow (সবচেয়ে গুরুত্বপূর্ণ)
        1.  User city লিখবে
        2.  Button click
        2.  Weather API call
        3.  JSON data আসবে
        4.  Temperature, condition দেখাবে
        5.  Error হলে message দেখাবে

    =>  API ব্যবহার
        OpenWeatherMap API (example)
        https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=API_KEY&units=metric

    =>  Core Logic (Simplified)
        async function getWeather(city) {
        try {
            let res = await fetch(`API_URL`);
    
            if (!res.ok) {
            throw new Error("City not found");
        }

        let data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err.message);
            }
        }

    =>  DOM Data Show
        temp.innerText = data.main.temp + "°C";
        condition.innerText = data.weather[0].main;
        cityName.innerText = data.name;

    =>  Common Weather App Mistakes
        1.  API key expose
        2.  city empty check না করা
        3.  error UI না দেখানো
        4.  loading state miss

    =>  Extra Feature (Optional)
        ✔ loading spinner
        ✔ Enter key search
        ✔ background change by weather
        ✔ last searched city save (localStorage)

2.  Project 2: Currency Converter
    =>  তুমি এখানে কী শিখবে
        1.  API rate fetch
        2.  select dropdown
        3.  math logic
        4.  dynamic UI update

    =>  Currency Converter Flow
        1.  Amount input
        2.  From currency
        3.  To currency
        4.  Convert button
        5.  API rate fetch
        6.  Converted value show

    =>  Currency API Example
        https://api.exchangerate-api.com/v4/latest/USD

    =>  Conversion Logic
        converted = amount * rate;

    =>  Core Code Idea
        async function convertCurrency() {
            let res = await fetch(API_URL);
            let data = await res.json();

            let rate = data.rates[toCurrency];
            let result = amount * rate;

              output.innerText = result.toFixed(2);
        }

    =>  Common Currency Converter Mistakes
        1.  rate undefined
        2.  number parse না করা
        3.  input validation নাই
        4.  async error ignore

    =>  Final Touch (Professional)
        ✔ disable button while loading
        ✔ error message
        ✔ last currency remember
        ✔ swap button (USD ↔ BDT)
*/