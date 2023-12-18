var typed=new Typed(".text",{
    strings:["Software Engineer", "Frontend Developer","Designer","Web Developer"],
    typeSpeed:30,
    backSpeed:30,
    backDelay:80,
    loop:true
});

 

let circularProgress = document.querySelectorAll(".circular-progress");
let progressValues = document.querySelectorAll(".progress-value");

let progressEndValues = [85, 90, 95];
let speed = 40;

circularProgress.forEach((progress, index) => {
    let progressStartValue = 0;
    let progressEndValue = progressEndValues[index];

    let progressInterval = setInterval(() => {
        progressStartValue++;
        progressValues[index].textContent = `${progressStartValue}%`;
        progress.style.background = `conic-gradient(#F79F1F ${progressStartValue * 3.6}deg, #ededed 0deg)`;

        if (progressStartValue === progressEndValue) {
            clearInterval(progressInterval);
        }
    }, speed);
});




const contactForm = document.getElementById('contact-form');
const thankYouMessage = document.getElementById('thank-you');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Here, you can add logic to submit the form data to your backend or perform actions as needed.
    // For demonstration purposes, we'll just show the "Thank you" message.
    thankYouMessage.style.display = 'block';
});

