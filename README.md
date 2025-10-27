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

## 🛠️ Technologies Used

- **Salesforce Lightning Web Components (LWC)**
- **Salesforce Lightning Design System (SLDS)**
- **HTML5**
- **CSS3** (Custom styling with glassmorphism effects)
- **JavaScript (ES6+)**
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
│   └── alarmClock/
│       ├── alarmClock.html
│       ├── alarmClock.js
│       ├── alarmClock.css
│       └── alarmClock.js-meta.xml
└── staticresources/
    ├── BmiAppBackground.png
    └── AlarmRingtone.mp3
```

## 🚀 Installation & Setup

### Prerequisites
- Salesforce Developer Org or Sandbox
- Salesforce CLI installed
- VS Code with Salesforce Extensions

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

3. **Deploy to Salesforce**
   ```bash
   sf project deploy start --target-org myDevOrg
   ```

4. **Create Experience Cloud Site** (Optional - for public access)
   - Navigate to Setup → Digital Experiences → All Sites
   - Create a new site or use existing
   - Add the components to the site pages
   - Publish the site

5. **Add Components to Lightning Page**
   - Go to App Builder
   - Edit or create a Lightning page
   - Drag and drop the components
   - Save and activate

## 📸 Screenshots

### BMI Calculator
![BMI Calculator Interface](screenshots/bmi-calculator.png)

### Alarm Clock
![Alarm Clock Interface](screenshots/alarm-clock.png)

## 🎓 Learning Outcomes

Through this project series, you'll learn:
- Building interactive LWC components
- Implementing real-time calculations and updates
- Creating responsive designs with SLDS and custom CSS
- Working with static resources (images, audio files)
- Deploying components to Experience Cloud
- Form validation and user input handling
- State management in LWC
- Animation and transition effects

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
- Community feedback and contributions

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or reach out via LinkedIn.

## 🗓️ Project Timeline

- **Day 1:** BMI Calculator
- **Day 2:** Alarm Clock
- **Coming Soon:** 5 More Projects!

---

⭐ If you found this project helpful, please give it a star!

**Part of the "Build 7 Real-Time Salesforce LWC Projects" Series**
