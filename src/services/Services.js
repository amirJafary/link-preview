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
            })
    }

    static getRandomUser = (callBack) => {
        let url = 'https://randomuser.me/api/'

        axios.get(url)
            .then(res => {
                callBack({ hasError: false, data: res.data.results[0] });
            })
            .catch(error => {
                callBack({ error: error.message, hasError: true })
            })
    }

    static addNewUserToFirebaseDB = (params, callBack) => {
        let baseUrl = 'https://test-68223-default-rtdb.firebaseio.com/users.json'
        axios.post(baseUrl, params)
            .then(res => {
                callBack({ hasError: false, res })
            })
            .catch(error => {
                callBack({ error: error.message, hasError: true })
            })
    }

    static getUsersFromFirebaseDB = (callBack) => {
        let baseUrl = 'https://test-68223-default-rtdb.firebaseio.com/users.json'
        axios.get(baseUrl)
            .then(res => {
                callBack({ hasError: false, data: Object.entries(res.data) })
            })
            .catch(error => {
                callBack({ error: error.message, hasError: true })
            })
    }

    static deleteUserFromFirebaseDB = (id, callBack) => {
        let baseUrl = `https://test-68223-default-rtdb.firebaseio.com/users/${id}.json`
        axios.get(baseUrl)
            .then(res => {
                callBack({ hasError: false, res })
            })
            .catch(error => {
                callBack({ error: error.message, hasError: true })
            })
    }

    static editUserFromFirebaseDB = (id, callBack) => {
        let baseUrl = `https://test-68223-default-rtdb.firebaseio.com/users/${id}.json`
        axios.put(baseUrl)
            .then(res => {
                callBack({ hasError: false, res })
            })
            .catch(error => {
                callBack({ error: error.message, hasError: true })
            })
    }

    static dictionary = (word, callBack) => {
        let baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        axios.get(baseUrl)
            .then(res => {
                callBack({ hasError: false, data:res.data[0] })
            })
            .catch(error => {
                callBack({ hasError: true, error: error.message })
            })
    }

}
export default Services;