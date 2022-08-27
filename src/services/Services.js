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
}
export default Services;