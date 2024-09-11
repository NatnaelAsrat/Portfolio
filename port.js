// nav
document.addEventListener('DOMContentLoaded', function() {
    var dropbtn = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');
    var navcontent = document.querySelector('nav');
    var maincontent = document.querySelector('main');
    var fpbtn = document.querySelector('.firstPostbtn');
    var fpmenu = document.querySelector('.firstPost')
    var scdBtn = document.querySelector('.secondPostbtn');
    var scdMenu = document.querySelector('.secondPost')
    var trdBtn = document.querySelector('.thirdPostbtn');
    var trdMenu = document.querySelector('.thirdPost')
    var blurred = document.querySelectorAll('div:not(.details)')

    dropbtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show-dropdown');
        maincontent.classList.toggle('blur');
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
    // seedetails
    // first details
    fpbtn.addEventListener('click', function(){
        fpmenu.classList.toggle('show-details');
        fpmenu.classList.toggle('hide');
        blurred.forEach(div => {
            div.classList.toggle('blur'); // This will add or remove the blur class
        });
    });
    window.addEventListener('click', function(event) {
        if (!fpbtn.contains(event.target) && !fpmenu.contains(event.target)) {
            // Check if the dropdown is shown before removing the blur
            if (fpmenu.classList.contains('show-details')) {
                fpmenu.classList.remove('show-details');
                fpmenu.classList.add('hide');
                blurred.forEach(div => {
                    div.classList.toggle('blur'); // This will add or remove the blur class
                });
            }
        }
    });
    // second details

    scdBtn.addEventListener('click', function(){
        scdMenu.classList.toggle('show-details');
        scdMenu.classList.toggle('hide');
        blurred.forEach(div => {
            div.classList.toggle('blur'); // This will add or remove the blur class
        });
    });
    window.addEventListener('click', function(event) {
        if (!scdBtn.contains(event.target) && !scdMenu.contains(event.target)) {
            // Check if the dropdown is shown before removing the blur
            if (scdMenu.classList.contains('show-details')) {
                scdMenu.classList.remove('show-details');
                scdMenu.classList.add('hide');
                blurred.forEach(div => {
                    div.classList.toggle('blur'); // This will add or remove the blur class
                });
            }
        }
    });
    // third details
    trdBtn.addEventListener('click', function(){
        trdMenu.classList.toggle('show-details');
        trdMenu.classList.toggle('hide');
        blurred.forEach(div => {
            div.classList.toggle('blur'); // This will add or remove the blur class
        });
    });
    window.addEventListener('click', function(event) {
        if (!trdBtn.contains(event.target) && !trdMenu.contains(event.target)) {
            // Check if the dropdown is shown before removing the blur
            if (trdMenu.classList.contains('show-details')) {
                trdMenu.classList.remove('show-details');
                trdMenu.classList.add('hide');
                blurred.forEach(div => {
                    div.classList.toggle('blur'); // This will add or remove the blur class
                });
            }
        }
    });
});

// nav





