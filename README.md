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
**[View Live Application](https://vipulportfolio-dev-ed.develop.my.site.com/weather-app)**

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
- **Guest user access enabled for public use without login**

**Tech Stack:** LWC, Apex, SLDS, HTML5, CSS3, JavaScript (ES6+), REST API Integration, Experience Cloud

**API Integration:**
- OpenWeatherMap API for real-time weather data
- Server-side Apex controller (WeatherAppController) for secure API calls
- Remote Site Settings configuration
- Named Credentials for API key management (recommended)

---

### Day 5 - Project 5: Employee Survey 📋✅
**[View Live Application](https://vipulportfolio-dev-ed.develop.my.site.com/survey/s/)**

A fully functional employee survey system built using Salesforce Survey Builder, enabling organizations to collect feedback from both internal employees and external participants without authentication requirements.

**Key Features:**
- Professional survey interface using Salesforce Survey Builder
- Guest user access enabled for external participants
- No authentication required for survey completion
- Seamless integration with Experience Cloud
- Mobile-responsive design
- Real-time response collection
- Data stored in Salesforce for analysis and reporting
- Customizable survey questions and layouts

**Tech Stack:** Salesforce Survey Builder, Aura Components, Experience Cloud, SLDS

**Implementation Highlights:**
- Aura Components framework for optimal guest user compatibility
- Proper guest user profile configuration
- Survey distribution settings optimized for external access
- Experience Cloud site integration

**Important Configuration Notes:**
- Uses Aura Components instead of LWR for better guest user support
- Authentication disabled for external participants
- Guest user permissions properly configured

---

### Day 6 - Project 6: Note Taking App 📝✨
**[View Live Application](https://vipulportfolio-dev-ed.develop.my.site.com/note-taking-app)**

A full-featured note-taking application built with Lightning Web Components and Apex, allowing users to create, read, update, and delete notes with a modern, intuitive interface.

**Key Features:**
- Create new notes with title and content
- View all existing notes in a card-based layout
- Edit and update existing notes
- Delete notes with confirmation
- Modal component for note creation and editing
- Real-time notifications for user actions
- Responsive grid layout for optimal viewing
- Data persistence using Salesforce custom objects
- Clean and modern UI with SLDS components
- Error handling and validation

**Tech Stack:** LWC, Apex, SLDS, HTML5, CSS3, JavaScript (ES6+), Salesforce Custom Objects, Experience Cloud

**Technical Implementation:**
- **Custom Apex Controller:** `notesTakingController.cls`
  - `@AuraEnabled` methods for CRUD operations
  - Server-side data management
  - Error handling and validation
- **Reusable Modal Component** for note creation/editing
- **Custom Notification Component** for user feedback
- **Dynamic HTML rendering** for note display
- **Event-driven architecture** for component communication

**Component Structure:**
- Main note-taking component
- Modal component for forms
- Notification component for feedback
- Apex controller for backend operations

**CRUD Operations:**
- **Create:** Add new notes via modal form
- **Read:** Fetch and display all notes on screen
- **Update:** Edit existing notes with pre-filled data
- **Delete:** Remove notes with user confirmation

---

## 🛠️ Technologies Used

- **Salesforce Lightning Web Components (LWC)**
- **Aura Components** (for specific use cases like Survey Builder)
- **Apex** (Server-side controllers for API integration and data management)
- **Salesforce Survey Builder**
- **Salesforce Lightning Design System (SLDS)**
- **HTML5**
- **CSS3** (Custom styling with glassmorphism effects)
- **JavaScript (ES6+)**
- **REST API Integration**
- **Salesforce Custom Objects**
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
│   ├── weatherApp/
│   │   ├── weatherApp.html
│   │   ├── weatherApp.js
│   │   ├── weatherApp.css
│   │   └── weatherApp.js-meta.xml
│   ├── noteTakingApp/
│   │   ├── noteTakingApp.html
│   │   ├── noteTakingApp.js
│   │   ├── noteTakingApp.css
│   │   └── noteTakingApp.js-meta.xml
│   ├── noteModal/
│   │   ├── noteModal.html
│   │   ├── noteModal.js
│   │   ├── noteModal.css
│   │   └── noteModal.js-meta.xml
│   └── notification/
│       ├── notification.html
│       ├── notification.js
│       ├── notification.css
│       └── notification.js-meta.xml
├── aura/
│   └── employeeSurvey/
│       ├── employeeSurvey.cmp
│       ├── employeeSurveyController.js
│       └── employeeSurvey.design
├── classes/
│   ├── WeatherAppController.cls
│   ├── WeatherAppController.cls-meta.xml
│   ├── notesTakingController.cls
│   └── notesTakingController.cls-meta.xml
├── objects/
│   └── Note__c/
│       └── fields/
│           ├── Title__c.field-meta.xml
│           └── Content__c.field-meta.xml
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
- Survey feature enabled in Salesforce (for Employee Survey)

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

7. **Set Up Salesforce Survey Builder (For Employee Survey)**
   
   **Step 1: Enable Survey Feature**
   - Navigate to Setup → Feature Settings → Survey
   - Enable the Survey feature if not already enabled
   - Click "Save"
   
   **Step 2: Create Survey**
   - Go to App Launcher → Search for "Surveys"
   - Click "New" to create a new survey
   - Design your survey questions and layout
   - Save and activate the survey
   
   **Step 3: Configure Survey Distribution for Guest Access**
   - In Survey Builder, click "Send" at the top
   - Click the "Get Link" button
   - Select the "Participants Outside Your Company" tab
   - ✨ **CRITICAL:** Make sure "Don't require authentication" is **CHECKED**
   - Copy the survey link
   
   **Step 4: Add Survey to Experience Cloud Site**
   - Go to Experience Builder
   - Create a new page or edit existing page
   - Add the Survey component to the page
   - Configure the component with your survey
   - Save and publish

8. **Create Custom Object for Note Taking App**
   
   **Option 1: Using Setup UI**
   - Navigate to Setup → Object Manager → Create → Custom Object
   - Object Label: `Note`
   - Object Name: `Note__c`
   - Create the following custom fields:
     - **Title__c** (Text, 255 characters, Required)
     - **Content__c** (Long Text Area, 32,768 characters)
   
   **Option 2: Deploy with Project**
   - The custom object definition is included in the repository
   - It will be deployed automatically in step 9

9. **Deploy to Salesforce**
   ```bash
   sf project deploy start --target-org myDevOrg
   ```

10. **Create Experience Cloud Site** (Optional - for public access)
    - Navigate to Setup → Digital Experiences → All Sites
    - Create a new site or use existing
    - Add the components to the site pages
    - Go to Builder → Settings → Advanced
    - Add CSP Trusted Sites in Experience Cloud:
      - Click on "Content Security Policy"
      - Add `https://v6.exchangerate-api.com` to trusted sites
      - Add `https://api.openweathermap.org` to trusted sites
    - Publish the site

11. **🔑 Configure Guest User Profile Access (IMPORTANT)**
    
    **Problem:** Guest users cannot access Apex classes by default in Experience Cloud sites.
    
    **Solution: Step-by-Step Configuration**
    
    ### Step 1: Access Guest User Profile Settings
    
    1. Open **Experience Builder** for your site
    2. Click on the **gear icon (⚙️)** in the top navigation
    3. Select **Settings** from the dropdown menu
    4. Click on **General** tab in the left sidebar
    5. Scroll down to find the **Guest User Profile** section
    6. Click on the **Guest User Profile** link (it will open the profile in a new tab)
    
    ### Step 2: Enable Apex Class Access for Weather App
    
    1. In the Guest User Profile page, scroll down to find **Enabled Apex Class Access** section
    2. Click the **Edit** button in this section
    3. You will see two lists:
       - **Available Apex Classes** (left side)
       - **Enabled Apex Classes** (right side)
    4. In the **Available Apex Classes** list, search or scroll to find **weatherAppController**
    5. Click on **weatherAppController** to select it
    6. Click the **Add** arrow button (→) to move it to the **Enabled** list
    7. **DO NOT click Save yet** - continue to Step 3
    
    ### Step 3: Enable Apex Class Access for Note Taking App
    
    1. While still in **Edit** mode (same screen from Step 2)
    2. In the **Available Apex Classes** list, find **notesTakingController**
    3. Click on **notesTakingController** to select it
    4. Click the **Add** arrow button (→) to move it to the **Enabled** list
    5. Now click **Save** button at the top or bottom of the page
    6. Wait for the confirmation message
    
    ### Step 4: Enable Custom Object Permissions for Note Taking App
    
    1. While still on the Guest User Profile page, scroll to find **Custom Object Permissions** section
    2. Locate **Note__c** (your custom note object)
    3. Click **Edit** if needed
    4. Enable the following permissions for Note__c:
       - ☑️ **Read**
       - ☑️ **Create**
       - ☑️ **Edit**
       - ☑️ **Delete**
    5. Click **Save**
    
    ### Step 5: Configure Survey Builder for Guest Access
    
    1. Go to **App Launcher** → Search for **Surveys**
    2. Open your Employee Survey
    3. Click **Send** button at the top of Survey Builder
    4. Click the **Get Link** button
    5. Select the **"Participants Outside Your Company"** tab
    6. ✨ **CRITICAL:** Ensure the checkbox **"Don't require authentication"** is **CHECKED** ✅
    7. Copy the survey link for testing
    8. Click **Save** or **Done**
    
    ### Step 6: Verify Survey Component Access (If using component in Experience Cloud)
    
    1. Go back to **Experience Builder**
    2. Navigate to the page containing your survey
    3. Click on the survey component
    4. In the component properties, verify guest access settings
    5. Save the page if any changes were made
    
    ### Step 7: Republish Your Experience Cloud Site
    
    1. In **Experience Builder**, click **Publish** button (top right)
    2. Wait for the publishing process to complete
    3. You should see a "Published successfully" message
    
    ### Step 8: Test Guest User Access
    
    **Test Weather App:**
    1. Open a new **Incognito/Private browser window**
    2. Navigate to: `https://vipulportfolio-dev-ed.develop.my.site.com/weather-app`
    3. Enter a city name and click search
    4. Verify weather data loads without login prompt
    
    **Test Note Taking App:**
    1. In the same incognito window
    2. Navigate to: `https://vipulportfolio-dev-ed.develop.my.site.com/note-taking-app`
    3. Try creating a new note
    4. Verify CRUD operations work without authentication
    
    **Test Employee Survey:**
    1. In the same incognito window
    2. Navigate to: `https://vipulportfolio-dev-ed.develop.my.site.com/survey/s/`
    3. Verify the survey loads without login prompt
    4. Complete and submit a test response
    
    ### Step 9: Troubleshooting (If Issues Persist)
    
    **If components still don't work:**
    1. Clear browser cache completely
    2. Wait 5-10 minutes for changes to propagate
    3. Check **Debug Logs** in Salesforce:
       - Setup → Environments → Logs → Debug Logs
       - Look for permission or access errors
    4. Verify all steps above were completed correctly
    5. Republish the Experience Cloud site again
    
    **If survey authentication is still required:**
    1. Go back to Survey Builder → Send → Get Link
    2. Double-check "Don't require authentication" is checked
    3. Try using a fresh survey link
    4. Clear browser cookies and cache
    
    ✅ **Result:** All applications now work perfectly for guest users without login!
    
    📝 **Pro Tip:** Always test in incognito mode after any permission changes to ensure guest users have proper access.

12. **Add Components to Lightning Page**
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
- **Configuring Guest User Profile permissions for Experience Cloud**
- **Troubleshooting Apex class access issues in public sites**
- **Using Salesforce Survey Builder for data collection**
- **Aura Components vs LWC: when to use each**
- **Survey distribution and guest user authentication settings**
- **Creating and managing Salesforce Custom Objects**
- **Implementing CRUD operations with LWC and Apex**
- **Building reusable modal components**
- **Creating custom notification systems**
- **Event-driven component communication**
- **Dynamic HTML rendering and DOM manipulation**
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

### Employee Survey Guest User Access Issues

**Problem:** External participants getting authentication errors when accessing survey

**Solution:** Fix guest user access for the survey:

1. **Check Survey Distribution Settings:**
   - Go to Survey Builder
   - Click "Send" → "Get Link"
   - Select "Participants Outside Your Company" tab
   - ✨ Ensure "Don't require authentication" is **CHECKED**

2. **Verify Experience Cloud Settings:**
   - Go to Experience Builder → Settings → General
   - Click on Guest User Profile
   - Verify survey component permissions are enabled
   - Save changes

3. **Use Aura Components:**
   - ⚠ **Important:** Use Aura Components instead of LWR (Lightning Web Runtime) for better guest user compatibility
   - If experiencing rendering issues, rebuild using Aura framework

4. **Test Guest Access:**
   - Open survey link in incognito/private browser mode
   - Verify no login prompt appears
   - Complete test survey submission

**Problem:** Survey not appearing on Experience Cloud page

**Solution:**
1. Verify the survey is activated
2. Check that the survey component is properly configured on the page
3. Ensure guest user profile has access to the survey component
4. Republish the Experience Cloud site

### Note Taking App Issues

**Problem:** Notes not saving or loading

**Solutions:**
1. Verify Custom Object (Note__c) is created with required fields
2. Check Guest User Profile has CRUD permissions on Note__c object:
   - Go to Guest User Profile
   - Find "Custom Object Permissions" section
   - Enable Read, Create, Edit, Delete for Note__c
3. Verify notesTakingController is enabled in Guest User Profile
4. Check Apex debug logs for specific error messages

**Problem:** Modal not opening or closing properly

**Solution:**
1. Check browser console for JavaScript errors
2. Verify event handlers are properly connected
3. Ensure modal component is properly imported
4. Clear browser cache and reload

**Problem:** Notes not deleting or updating

**Solutions:**
1. Verify delete confirmation is working
2. Check Apex controller has proper delete permissions
3. Ensure record IDs are being passed correctly
4. Review debug logs for DML errors

### General Guest User Access Issues (Experience Cloud)

**Problem:** Components not working for guest users / "You do not have access to the Apex class" error

**Solution:** Enable Guest User Profile access to Apex classes:
1. Go to Experience Builder → Settings → General
2. Click on Guest User Profile
3. Find "Enabled Apex Class Access" section
4. Click Edit
5. Move required Apex classes from Available to Enabled:
   - weatherAppController
   - notesTakingController
   - (any other custom controllers)
6. Click Save

**Problem:** Changes not reflecting after updating Guest User Profile

**Solution:**
1. Clear your browser cache
2. Try accessing the site in incognito/private mode
3. Wait a few minutes for changes to propagate
4. Republish your Experience Cloud site
5. Check debug logs for any permission errors

## 📚 Helpful Resources

### Official Salesforce Documentation
- [Lightning Web Components Dev Guide](https://developer.salesforce.com/docs/component-library/overview/components)
- [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/)
- [SLDS Getting Started](https://www.lightningdesignsystem.com/2e1ef8501/p/76969d-get-started)
- [SLDS Version 1](https://v1.lightningdesignsystem.com/)
- [Salesforce Icons](https://www.salesforceicons.com/)

### Survey Builder Resources
- [Survey Builder Documentation](https://help.salesforce.com/s/articleView?id=sf.surveys_parent.htm)
- [Guest User Survey Access](https://help.salesforce.com/s/articleView?id=000395065&type=1)
- [Trailblazer Community: Survey Guest Access](https://trailblazer.salesforce.com/answers?id=9064S000000DQRWQA4)

### Community Support
- [Salesforce Stack Exchange](https://salesforce.stackexchange.com/)
- [Trailblazer Community](https://trailblazer.salesforce.com/en/community)
- [Salesforce Developers Forum](https://developer.salesforce.com/forums)

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
- Salesforce Survey Builder team
- Community feedback and contributions

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or reach out via LinkedIn.

## 🗓️ Project Timeline

- **Day 1:** BMI Calculator ✅
- **Day 2:** Alarm Clock ✅
- **Day 3:** Currency Converter ✅
- **Day 4:** Weather App ✅
- **Day 5:** Employee Survey ✅
- **Day 6:** Note Taking App ✅
- **Coming Soon:** 1 More Project!

---

⭐ If you found this project helpful, please give it a star!

**Part of the "Build 7 Real-Time Salesforce LWC Projects" Series**

#Salesforce #LWC #Apex #AuraComponents #SurveyBuilder #ExperienceCloud #NoteTakingApp #Trailblazer #LearningByBuilding #SalesforceDeveloper #CRUD #CustomObjects
