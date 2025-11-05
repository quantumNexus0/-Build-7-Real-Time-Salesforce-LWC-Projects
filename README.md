# 🚀 Build 7 Real-Time Salesforce LWC Projects

A comprehensive collection of modern, responsive Salesforce Lightning Web Components (LWC) projects. This repository showcases practical implementations of real-world applications built with Salesforce LWC.

## 📚 Projects Overview

### Day 1 - Project 1: BMI Calculator 🏋️
**[View Live Application](https://vipulportfolio-dev-ed.develop.my.site.com/bmi-calculator)**

A modern Body Mass Index (BMI) Calculator that helps users calculate their BMI and understand their health category based on WHO standards.

**Key Features:**
- Real-time BMI calculation based on height (cm) and weight (kg)
- Health category classification (Underweight, Normal, Overweight, Obesity)
- Responsive glassmorphism design with smooth animations
- Input validation and clear functionality
- Educational content with color-coded indicators

**Tech Stack:** LWC, SLDS, HTML5, CSS3, JavaScript (ES6+), Experience Cloud

---

### Day 2 - Project 2: Alarm Clock ⏰
**[View Live Application](https://vipulportfolio-dev-ed.develop.my.site.com/alarm-clock)**

A fully functional alarm clock application with set, clear, and animation features, along with ringtone functionality.

**Key Features:**
- Set alarm functionality with time picker
- Clear alarm functionality
- Animation on alarm trigger
- Google shake on large screen for alert
- Ringtone integration for alarm notifications
- Real-time clock display
- Responsive design for all devices

**Tech Stack:** LWC, SLDS, HTML5, CSS3, JavaScript (ES6+), Experience Cloud

---

### Day 3 - Project 3: Currency Converter 💱
**[View Live Application](https://vipulportfolio-dev-ed.develop.my.site.com/currency-converter)**

A real-time currency converter with live exchange rates powered by ExchangeRate-API. Convert between multiple currencies with up-to-date exchange rates.

**Key Features:**
- Real-time currency conversion with live exchange rates
- Support for 150+ currencies worldwide
- Modern, intuitive user interface with glassmorphism design
- Instant conversion calculations
- Responsive design for all devices
- Error handling and loading states
- External API integration with ExchangeRate-API

**Tech Stack:** LWC, SLDS, HTML5, CSS3, JavaScript (ES6+), REST API Integration, Experience Cloud

**API Integration:**
- ExchangeRate-API v6 for real-time exchange rates
- Secure API key management
- Remote Site Settings and CSP Trusted Sites configuration

---

### Day 4 - Project 4: Weather App ☁️🌤️
**[View Live Application](#)** *(Coming Soon)*

A comprehensive weather application that provides real-time weather information for any city worldwide using the OpenWeatherMap API.

**Key Features:**
- Real-time weather data for any city globally
- Display current temperature, humidity, and wind speed
- Weather condition icons and descriptions
- Apex controller for secure server-side API integration
- Clean and intuitive UI with SLDS components
- Input validation and error handling
- Responsive design for all devices
- Loading states and user feedback

**Tech Stack:** LWC, Apex, SLDS, HTML5, CSS3, JavaScript (ES6+), REST API Integration, Experience Cloud

**API Integration:**
- OpenWeatherMap API for real-time weather data
- Server-side Apex controller (WeatherAppController) for secure API calls
- Remote Site Settings configuration
- Named Credentials for API key management (recommended)

---

## 🛠️ Technologies Used

- **Salesforce Lightning Web Components (LWC)**
- **Apex** (Server-side controller for API integration)
- **Salesforce Lightning Design System (SLDS)**
- **HTML5**
- **CSS3** (Custom styling with glassmorphism effects)
- **JavaScript (ES6+)**
- **REST API Integration**
- **Experience Cloud** (for public site deployment)

## 📁 Project Structure

```
force-app/main/default/
├── lwc/
│   ├── bmiCalculator/
│   │   ├── bmiCalculator.html
│   │   ├── bmiCalculator.js
│   │   ├── bmiCalculator.css
│   │   └── bmiCalculator.js-meta.xml
│   ├── alarmClock/
│   │   ├── alarmClock.html
│   │   ├── alarmClock.js
│   │   ├── alarmClock.css
│   │   └── alarmClock.js-meta.xml
│   ├── currencyConverter/
│   │   ├── currencyConverter.html
│   │   ├── currencyConverter.js
│   │   ├── currencyConverter.css
│   │   └── currencyConverter.js-meta.xml
│   └── weatherApp/
│       ├── weatherApp.html
│       ├── weatherApp.js
│       ├── weatherApp.css
│       └── weatherApp.js-meta.xml
├── classes/
│   ├── WeatherAppController.cls
│   └── WeatherAppController.cls-meta.xml
└── staticresources/
    ├── BmiAppBackground.png
    └── AlarmRingtone.mp3
```

## 🚀 Installation & Setup

### Prerequisites
- Salesforce Developer Org or Sandbox
- Salesforce CLI installed
- VS Code with Salesforce Extensions
- ExchangeRate-API account (for Currency Converter)
- OpenWeatherMap API account (for Weather App)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/quantumNexus0/-Build-7-Real-Time-Salesforce-LWC-Projects.git
   cd -Build-7-Real-Time-Salesforce-LWC-Projects
   ```

2. **Authorize Your Org**
   ```bash
   sf org login web --alias myDevOrg
   ```

3. **Set Up ExchangeRate-API (For Currency Converter)**
   
   a. Create an account at [ExchangeRate-API](https://app.exchangerate-api.com/sign-up)
   
   b. After logging in, go to the dashboard and copy your API_KEY
   
   c. Update the API_KEY in `currencyConverter.js`:
   ```javascript
   async convert(){
     const API_KEY = 'YOUR_API_KEY_HERE' // Replace with your API key
     const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${this.countryFrom}/${this.countryTo}`
     
     try{
       const data = await fetch(API_URL)
       const jsonData = await data.json()
       this.result = (Number(this.amount) * jsonData.conversion_rate).toFixed(2)
       console.log(this.result)
     } catch(error){
       console.log(error)
       this.error = "An error occurred. Please try again..."
     }
   }
   ```

4. **Set Up OpenWeatherMap API (For Weather App)**
   
   a. Create an account at [OpenWeatherMap](https://openweathermap.org/api)
   
   b. Sign up for a free API key from your account dashboard
   
   c. Update the API key in `WeatherAppController.cls`:
   ```apex
   public class WeatherAppController {
       private static final String API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your API key
       private static final String API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';
       
       @AuraEnabled(cacheable=true)
       public static String getWeatherData(String cityName) {
           // Implementation
       }
   }
   ```

5. **Configure Remote Site Settings**
   
   **For Currency Converter:**
   - Navigate to Setup → Security → Remote Site Settings
   - Click "New Remote Site"
   - Enter the following details:
     - **Remote Site Name:** ExchangeRateAPI
     - **Remote Site URL:** `https://v6.exchangerate-api.com/`
     - **Active:** Checked
   - Click "Save"

   **For Weather App:**
   - Click "New Remote Site" again
   - Enter the following details:
     - **Remote Site Name:** OpenWeatherMapAPI
     - **Remote Site URL:** `https://api.openweathermap.org/`
     - **Active:** Checked
   - Click "Save"

6. **Configure CSP Trusted Sites**
   
   **For Currency Converter:**
   - Navigate to Setup → Security → CSP Trusted Sites
   - Click "New Trusted Site"
   - Enter the following details:
     - **Trusted Site Name:** ExchangeRateAPI
     - **Trusted Site URL:** `https://v6.exchangerate-api.com`
     - **Active:** Checked
     - **Context:** All (or select specific contexts as needed)
   - Click "Save"

   **For Weather App:**
   - Click "New Trusted Site" again
   - Enter the following details:
     - **Trusted Site Name:** OpenWeatherMapAPI
     - **Trusted Site URL:** `https://api.openweathermap.org`
     - **Active:** Checked
     - **Context:** All
   - Click "Save"

7. **Deploy to Salesforce**
   ```bash
   sf project deploy start --target-org myDevOrg
   ```

8. **Create Experience Cloud Site** (Optional - for public access)
   - Navigate to Setup → Digital Experiences → All Sites
   - Create a new site or use existing
   - Add the components to the site pages
   - Go to Builder → Settings → Advanced
   - Add CSP Trusted Sites in Experience Cloud:
     - Click on "Content Security Policy"
     - Add `https://v6.exchangerate-api.com` to trusted sites
     - Add `https://api.openweathermap.org` to trusted sites
   - Publish the site

9. **Add Components to Lightning Page**
   - Go to App Builder
   - Edit or create a Lightning page
   - Drag and drop the components
   - Save and activate

## 🎓 Learning Outcomes

Through this project series, you'll learn:
- Building interactive LWC components
- Implementing real-time calculations and updates
- Creating responsive designs with SLDS and custom CSS
- Working with static resources (images, audio files)
- **External API integration in Salesforce LWC**
- **Server-side API integration using Apex controllers**
- **Configuring Remote Site Settings and CSP Trusted Sites**
- **Handling asynchronous API calls with async/await**
- **Error handling in API integrations**
- **Working with @AuraEnabled methods**
- **Cacheable vs non-cacheable Apex methods**
- Deploying components to Experience Cloud
- Form validation and user input handling
- State management in LWC
- Animation and transition effects

## 🔧 Troubleshooting

### Currency Converter API Issues

**Problem:** Currency converter not working or showing errors

**Solutions:**
1. Verify your API key is correct and active
2. Check Remote Site Settings includes `https://v6.exchangerate-api.com/`
3. Verify CSP Trusted Sites configuration in both:
   - Setup → Security → CSP Trusted Sites
   - Experience Cloud Builder → Settings → Advanced → Content Security Policy
4. Check browser console for specific error messages
5. Ensure you haven't exceeded API rate limits (free tier: 1,500 requests/month)

**Problem:** "Access Denied" or CORS errors

**Solution:** Make sure both Remote Site Settings AND CSP Trusted Sites are properly configured with the correct URL.

### Weather App API Issues

**Problem:** Weather app not fetching data or showing errors

**Solutions:**
1. Verify your OpenWeatherMap API key is correct and activated (new keys may take a few hours to activate)
2. Check Remote Site Settings includes `https://api.openweathermap.org/`
3. Verify CSP Trusted Sites configuration
4. Check Apex debug logs for detailed error messages
5. Ensure the city name is spelled correctly
6. Check API rate limits (free tier: 60 calls/minute, 1,000,000 calls/month)

**Problem:** "Unauthorized" or 401 errors

**Solution:** Double-check that your API key is correctly added to the WeatherAppController class and that it's activated in your OpenWeatherMap account.

**Problem:** Apex callout errors

**Solution:** Ensure Remote Site Settings are properly configured before making HTTP callouts from Apex.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vipul**
- GitHub: [@quantumNexus0](https://github.com/quantumNexus0)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/yourprofile)
- Portfolio: [vipulportfolio-dev-ed.develop.my.site.com](https://vipulportfolio-dev-ed.develop.my.site.com)

## 🙏 Acknowledgments

- Salesforce Lightning Design System
- WHO BMI Standards
- ExchangeRate-API for providing reliable currency exchange rates
- OpenWeatherMap for providing comprehensive weather data
- Community feedback and contributions

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or reach out via LinkedIn.

## 🗓️ Project Timeline

- **Day 1:** BMI Calculator ✅
- **Day 2:** Alarm Clock ✅
- **Day 3:** Currency Converter ✅
- **Day 4:** Weather App ✅
- **Coming Soon:** 3 More Projects!

---

⭐ If you found this project helpful, please give it a star!

**Part of the "Build 7 Real-Time Salesforce LWC Projects" Series**
