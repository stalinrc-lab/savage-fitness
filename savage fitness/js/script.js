// MEMBERSHIP FORM VALIDATION

const form = document.getElementById("membershipForm");

if (form) {

   form.addEventListener("submit", function(event) {

      event.preventDefault();

      // VARIABLES

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
      let age = document.getElementById("age").value;
      let weight = document.getElementById("weight").value;
      let height = document.getElementById("height").value;
      let gender = document.getElementById("gender").value;
      let membership = document.getElementById("membership").value;
      let goals = document.getElementById("goals").value;
      let time = document.getElementById("time").value;
      let experience = document.getElementById("experience").value;

      let message = document.getElementById("message");

      // ARRAY

      let fields = [
         name,
         email,
         phone,
         age,
	 weight,
	 height,
	 gender,
         membership,
         goals,
         time,
         experience
      ];

      // LOOP

      for (let i = 0; i < fields.length; i++) {

         if (fields[i] === "") {

            message.innerHTML = "Please fill out all fields.";
            message.style.color = "red";
            return;
         }
      }

      // EMAIL VALIDATION

      if (!email.includes("@")) {

         message.innerHTML = "Enter a valid email.";
         message.style.color = "red";
         return;
      }

      // PHONE VALIDATION

      if (phone.length < 10) {

         message.innerHTML = "Enter a valid phone number.";
         message.style.color = "red";
         return;
      }

      // AGE VALIDATION

      if (age < 16 || age > 80) {

         message.innerHTML = "Age must be between 16 and 80.";
         message.style.color = "red";
         return;
      }

      // SUCCESS MESSAGE

      message.innerHTML =
         "Membership registration submitted successfully!";

      message.style.color = "green";

   });
}



// WORKOUT GENERATOR

function generateWorkout() {

   let workouts = [
      "20 Push-ups",
      "30 Squats",
      "15 Burpees",
      "1 Minute Plank",
      "25 Lunges",
      "20 Jumping Jacks"
   ];

   let randomWorkout =
      workouts[Math.floor(Math.random() * workouts.length)];

   document.getElementById("workoutOutput").innerHTML =
      randomWorkout;
}



// COUNTDOWN TIMER

function startTimer() {

   let timeLeft = 30;

   let timer = setInterval(function() {

      document.getElementById("timer").innerHTML = timeLeft;

      timeLeft--;

      if (timeLeft < 0) {

         clearInterval(timer);

         document.getElementById("timer").innerHTML =
            "Workout Complete!";
      }

   }, 1000);
}



// DARK MODE

function toggleMode() {

   document.body.classList.toggle("dark-mode");
}



// SLIDESHOW

let images = [

   "images/slide1.jpg",

   "images/slide2.jpg",

   "images/slide3.jpg"
];

let index = 0;

setInterval(function() {

   let slideshow = document.getElementById("slideshow");

   if (slideshow) {

      index++;

      if (index >= images.length) {

         index = 0;
      }

      slideshow.src = images[index];
   }

}, 3000);


// HERO IMAGE CAROUSEL

let heroImages = [
   "images/hero1.jpg",
   "images/hero2.jpg",
   "images/hero3.jpg"
];

let heroIndex = 0;

setInterval(function() {

   let heroSection = document.getElementById("heroSection");

   if (heroSection) {

      heroIndex++;

      if (heroIndex >= heroImages.length) {
         heroIndex = 0;
      }

      heroSection.style.backgroundImage =
         "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('" +
         heroImages[heroIndex] +
         "')";
   }

}, 4000);