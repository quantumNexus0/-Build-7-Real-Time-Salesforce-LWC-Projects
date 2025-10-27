import { LightningElement } from 'lwc';
import AlarmClockAsset from '@salesforce/resourceUrl/AlarmClockAssets';

export default class AlarmClock extends LightningElement {
  clockImage = AlarmClockAsset + '/AlarmClockAssets/clock.png';
  ringtone = new Audio(AlarmClockAsset + '/AlarmClockAssets/Clocksound.mp3');
  currentTime = '';
  hours = [];
  minutes = [];
  ampmOptions = ['AM', 'PM'];
  alarmTime;
  isAlarmSet = false;
  isAlarmTriggered = false;

  selectedHour;
  selectedMinute;
  selectedAmPm;

  get isfieldNotSelected() {
    return !this.selectedHour || !this.selectedMinute || !this.selectedAmPm;

  }
 get shakeImage(){
    return this.isAlarmTriggered ? 'shake' : '';
 }
  
  get setButtonClass() {
    return this.isfieldNotSelected
      ? 'slds-button slds-button_stretch disabled-button'
      : 'slds-button slds-button_brand slds-button_stretch';
  }

  connectedCallback() {
    this.createHoursOptions();
    this.createMinutesOptions();
    this.currentTimeHandler();
  }

  currentTimeHandler() {
    setInterval(() => {
      const dateTime = new Date();
      let hours = dateTime.getHours();
      let minutes = dateTime.getMinutes();
      let seconds = dateTime.getSeconds();
      let ampm = 'AM';

      if (hours == 0) {
        hours = 12;
      } else if (hours >= 12) {
        if (hours > 12) hours -= 12;
        ampm = 'PM';
      }

      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      this.currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;

       if(this.alarmTime === `${hours}:${minutes} ${ampm}`){
        console.log("Alarm Triggered!!")
        this.isAlarmTriggered = true
        this.ringtone.play()
        this.ringtone.loop = true
      }
    }, 1000);
  }

  createHoursOptions() {
    for (let i = 1; i <= 12; i++) {
      const val = i < 10 ? `0${i}` : i.toString();
      this.hours.push(val);
    }
  }

  createMinutesOptions() {
    for (let i = 0; i < 60; i++) {
      const val = i < 10 ? `0${i}` : i.toString();
      this.minutes.push(val);
    }
  }

  optionhandler(event) {
    const { label, value } = event.detail;
    if (label === 'Hour(s)') this.selectedHour = value;
    if (label === 'Minute(s)') this.selectedMinute = value;
    if (label === 'AM/PM') this.selectedAmPm = value;
  }

  setAlarmHandler() {
    this.alarmTime = `${this.selectedHour}:${this.selectedMinute} ${this.selectedAmPm}`;
    this.isAlarmSet = true;
    this.isAlarmTriggered = false;
    console.log('✅ Alarm set for:', this.alarmTime);
  }

  clearAlarmHandler() {
    this.isAlarmSet = false;
    this.alarmTime = null;
    this.isAlarmTriggered = false;
    this.ringtone.pause();
    const dropdowns = this.template.querySelectorAll('c-clock-dropdown');
    dropdowns.forEach(dropdown => dropdown.reset());
    console.log('🧹 Alarm cleared');
  }
}
