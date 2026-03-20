async function getWeather() {
    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Enter city name");
        return;
    }

    let apiKey = "YOUR_API_KEY"; // यहाँ API key डालना है
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === "404") {
            document.getElementById("result").innerHTML = "City not found";
            return;
        }

        document.getElementById("result").innerHTML = `
            <p><b>${data.name}</b></p>
            <p>🌡️ Temp: ${data.main.temp} °C</p>
            <p>🌥️ Weather: ${data.weather[0].main}</p>
        `;
    } catch (error) {
        console.log(error);
        document.getElementById("result").innerHTML = "Error fetching data";
    }
}