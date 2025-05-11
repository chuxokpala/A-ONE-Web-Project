const toggleBtn = document.querySelector('.js-list');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})

let first = `
    <div class="slide" style="background-image: url('./assets/ZKJ\ Home\ Page\ x1.jpg');">
        <h1>A-ONE Electric & Solar</h1>
        <p>Power & Energy, Project Management and Energy Consulting Company</p>
        <p>“Proven expertise with project delivery”</p>
    </div>
`;

let second = `
    <div class="slide" style="background-image: url('./assets/Solar\ PV\ x2.jpg');">
        <h1>Renewable Energy</h1>
        <p>Powering Sustainable Futures</p>
        <p>“From homes to industries, we design and build solar solutions for a cleaner, resilient tomorrow.”</p>
    </div>
`;

let third = `
            <div class="slide" style="background-image: url('./assets/Power\ Infrastructure\ x1.jpg');">
                 <h1>Power Infrastructure</h1>
                <p>Bridging Energy Gaps</p>
                <p>“Delivering reliable power and electrification solutions to light up communities and drive progress.”</p>
            </div>
`;

let fourth = `
    <div class="slide" style="background-image: url(./assets/Consultancy.jpg);">
        <h1>Consulting Services</h1>
        <p>Empowering Informed Decisions</p>
        <p>“Providing expert insights into energy projects to accelerate the energy transition.”</p>
    </div>
`;

let sliders = [first, second, third, fourth];

let index = 0; // Start index
let slide = document.getElementById('slider');

// Function to update the slide
function updateSlide() {
    slide.innerHTML = sliders[index];
    index = (index + 1) % sliders.length; // Cycle through the slides
}

// Set the interval for updating the slide every 3 seconds
setInterval(updateSlide, 3000);

// Initialize the first slide
updateSlide();
