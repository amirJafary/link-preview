import axios from "axios";

class Services {

    static getCurrentWeather = () => {
        let baseURL = 'http://api.weatherapi.com/v1/current.json?key=282719cc6b3641f788254558222308&q=Iran';
        axios.get(baseURL)
            .then(res => {
                console.log(res.data);
            });
    }

    static getAllCurrentWeather = () => {
        let baseURL = 'https://www.weatherapi.com/docs/weather_conditions.json';
        axios.get(baseURL)
            .then(res => {
                console.log(res.data);
            });
    }

    static getCurrentWeatherByCityName = (cityName, callBack) => {
        let apiKey = 'db2a20c82627479f605416aaaad602bd'
        let baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        // let baseURL = `https://api.openweathermap.org/data/2.5/weather?id=524901&lang=fa&appid=${apiKey}`;

        axios.get(baseURL)
            .then(res => {
                callBack({ hasError: false, res })
            })
            .catch(error => {
                callBack({ error: error.message, hasError: true })
            }
            )
    }

}
export default Services;