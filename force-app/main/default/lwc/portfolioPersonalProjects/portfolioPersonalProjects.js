import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
export default class PortfolioPersonalProjects extends LightningElement {
 BMICalculator =`${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
 AlarmClock =`${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
 CurrencyCalculator =`${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`
 WeatherApp =`${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`
 SurveyApp =`${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`
 NoteTakingApp =`${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`
 projects = [
  {
    name: "BMI Calculator App",
    img: this.BMICalculator,
    link: "https://vipulportfolio-dev-ed.develop.my.site.com/bmi-calculator"
  },
  {
    name: "Alarm Clock App",
    img: this.AlarmClock,
    link: "https://vipulportfolio-dev-ed.develop.my.site.com/alarm-clock"
  },
  {
    name: "Currency Calculator App",
    img: this.CurrencyCalculator,
    link: "https://vipulportfolio-dev-ed.develop.my.site.com/currency-converter"
  },
  {
    name: "Weather App",
    img: this.WeatherApp,
    link: "https://vipulportfolio-dev-ed.develop.my.site.com/weather-app"
  },
  {
    name: "Survey App",
    img: this.SurveyApp,
    link: "https://vipulportfolio-dev-ed.develop.my.site.com/survey-app"
  },
  {
    name: "Note Taking App",
    img: this.NoteTakingApp,
    link: "https://vipulportfolio-dev-ed.develop.my.site.com/note-taking-app"
  }
];


}