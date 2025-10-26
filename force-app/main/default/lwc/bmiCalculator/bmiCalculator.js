import { LightningElement } from "lwc";

export default class BmiCalculator extends LightningElement {
   height = "";
   weight = "";
   bmiResult = null;
   bmiCategory = "";

   inputHandler(event) {
     const {name, value} = event.target;
     if(name === "height") {
       this.height = value;
     } else if(name === "weight") {
       this.weight = value;
     }
   }

   preventSubmit(event) {
     event.preventDefault();
   }

   calculateBMI() {
     // Validation
     if(!this.height || !this.weight) {
       alert("Please enter both height and weight");
       return;
     }

     if(this.height <= 0 || this.weight <= 0) {
       alert("Height and weight must be positive numbers");
       return;
     }

     const heightInMeters = parseFloat(this.height) / 100;
     const bmi = parseFloat(this.weight) / (heightInMeters * heightInMeters);
     this.bmiResult = bmi.toFixed(2);

     // Determine BMI category
     if(bmi < 18.5) {
       this.bmiCategory = "Underweight";
     } else if(bmi >= 18.5 && bmi < 24.9) {
       this.bmiCategory = "Normal weight";
     } else if(bmi >= 25 && bmi < 29.9) {
       this.bmiCategory = "Overweight";
     } else {
       this.bmiCategory = "Obesity";
     }
   }

   clearFields() {
     this.height = "";
     this.weight = "";
     this.bmiResult = null;
     this.bmiCategory = "";
     
     // Clear input fields in DOM
     const inputs = this.template.querySelectorAll('input');
     inputs.forEach(input => {
       input.value = '';
     });
   }
}