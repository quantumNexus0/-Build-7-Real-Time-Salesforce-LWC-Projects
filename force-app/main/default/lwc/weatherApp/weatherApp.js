import { LightningElement } from 'lwc';
// const API_KEY = 'a23f058692a2492bcd3a0c74d479c2d9';
import WEATHER_ICON from '@salesforce/resourceUrl/weatherAppIcons';
import getWeatherDetails from '@salesforce/apex/weatherAppController.getWeatherDetails';
export default class WeatherApp extends LightningElement {
    clearIcon = WEATHER_ICON + '/weatherAppIcons/clear.svg';
    cloudIcon = WEATHER_ICON + '/weatherAppIcons/cloud.svg';
    dropletIcon = WEATHER_ICON + '/weatherAppIcons/droplet.svg';
    mapIcon = WEATHER_ICON + '/weatherAppIcons/map.svg';
    rainIcon = WEATHER_ICON + '/weatherAppIcons/rain.svg';
    snowIcon = WEATHER_ICON + '/weatherAppIcons/snow.svg';
    stormIcon = WEATHER_ICON + '/weatherAppIcons/storm.svg';
    thermometerIcon = WEATHER_ICON + '/weatherAppIcons/thermometer.svg';
    arrowBackIcon = WEATHER_ICON + '/weatherAppIcons/arrow-back.svg';
    cityName = '';
    loadingText = '';
    isError = false;
    weatherDetails; 
    response
    weatherIcon

    // Visibility control
    showComponent = false;
    targetPath = '/s/weather-app';
  connectedCallback() {
        const currentPath = window.location.pathname;
        console.log('Current Path:', currentPath);

        // Show component only on the target page
        if (currentPath === this.targetPath) {
            this.showComponent = true;
        } else {
            this.showComponent = false;
        }
    }


    get loadingClasses() {
        return this.isError ? 'error-msg' : 'success-msg';
    }

    searchHandler(event) {
        this.cityName = event.target.value;
    }

    submitHandler(event) {
        event.preventDefault();
        this.fetchData();
    }

    fetchData() {
        this.isError = false;
        this.loadingText = 'Fetching weather details...';
        console.log('Fetching weather data for city: ' + this.cityName);
        getWeatherDetails({ input: this.cityName })
            .then((result) => {

                this.processWeatherData(JSON.parse(result));
            })
            .catch((error) => {
                console.error(error);
                this.loadingText = 'Error fetching weather details.';
                this.isError = true;
            });
        /*const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${API_KEY}`;

        fetch(URL)
            .then((res) => res.json())
            .then((result) => {
                console.log('Weather Data:', JSON.stringify(result));
                this.processWeatherData(result);
            })
            .catch((error) => {
                console.error(error);
                this.loadingText = 'Error fetching weather details.';
                this.isError = true;
            });*/
    }

    
    processWeatherData(info) {
        if (info.cod === '404' || info.cod === 404) {
            this.loadingText = `${this.cityName} not found. Please enter a valid city name.`;
            this.isError = true;
            this.weatherDetails = undefined;
            return;
        } else {
            this.loadingText = '';
            this.isError = false;
            this.weatherDetails = info;
            const city = info.name;
            const country = info.sys.country;
            const {description, id} = info.weather[0];
            const {temp, feels_like, temp_min, temp_max, pressure, humidity} = info.main;
            if(id===800){
                this.weatherIcon = this.clearIcon;
            }else if(id>=200 && id<=232 ){
                this.weatherIcon = this.stormIcon;
            }else if(id>=600 && id<=622){
                this.weatherIcon = this.snowIcon;
            }else if(id>=500 && id<=531){
                this.weatherIcon = this.rainIcon;
            }else if(id>=801 && id<=804){
                this.weatherIcon = this.cloudIcon;
            }else{
                this.weatherIcon = this.cloudIcon;
            }
            this.response ={
                city: city,
                country: country,
                    description: description,
                    location: `${city}, ${country}`,
                    temperature: Math.floor(temp),
                    feels_like: Math.floor(feels_like),
                    humidity: `${humidity}%`,
              
            }
        }
    }
    backHandler(){
        this.response = null;
        this.cityName = '';
        this.loadingText = '';
        this.isError = false;
        this.weatherIcon ='';
    }
}
