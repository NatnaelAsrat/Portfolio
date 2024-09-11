// nav
document.addEventListener('DOMContentLoaded', function() {
    var dropbtn = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');
    var navcontent = document.querySelector('nav');
    var maincontent = document.querySelector('main');
    
    dropbtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show-dropdown');
        maincontent.classList.toggle('blur')
    });
    
    // Close the dropdown if clicked outside
    window.addEventListener('click', function(event) {
        if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target) && !navcontent.contains(event.target)) {
            // Check if the dropdown is shown before removing the blur
            if (dropdownContent.classList.contains('show-dropdown')) {
                dropdownContent.classList.remove('show-dropdown');
                maincontent.classList.remove('blur');  // Remove the blur class
            }
        }
    });
});
// nav


const frame = document.getElementById('frame');
const divs = Array.from(frame.children);

const frameWidth = frame.offsetWidth;
const frameHeight = frame.offsetHeight;

const speed = 4; // Adjust speed as needed

divs.forEach(div => {
    const directionX = (Math.random() - 0.5) * 2; // Randomize direction: -1 to 1
    const directionY = (Math.random() - 0.5) * 2; // Randomize direction: -1 to 1
    const posX = Math.random() * (frameWidth - div.offsetWidth);
    const posY = Math.random() * (frameHeight - div.offsetHeight);
    let posXSpeed = directionX * speed;
    let posYSpeed = directionY * speed;

    div.style.left = `${posX}px`;
    div.style.top = `${posY}px`;

    function move() {
        let rect = div.getBoundingClientRect();
        let frameRect = frame.getBoundingClientRect();

        if (rect.left + posXSpeed < frameRect.left || rect.right + posXSpeed > frameRect.right) {
            posXSpeed *= -1;
        }
        if (rect.top + posYSpeed < frameRect.top || rect.bottom + posYSpeed > frameRect.bottom) {
            posYSpeed *= -1;
        }

        div.style.left = `${rect.left + posXSpeed - frameRect.left}px`;
        div.style.top = `${rect.top + posYSpeed - frameRect.top}px`;

        requestAnimationFrame(move);
    }
    

    move();
});

