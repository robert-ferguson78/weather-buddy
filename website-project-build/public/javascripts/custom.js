var check = function () {
    let bt = document.getElementById('btSubmit');
    if (document.getElementById('password').value == document.getElementById('confrimpassword').value) {
        document.getElementById('warning').style.color = 'green';
        document.getElementById('warning').innerHTML = 'Password Matching';
        bt.disabled = false;
    } else {
        document.getElementById('warning').style.color = 'red';
        document.getElementById('warning').innerHTML = '"Confirm Password" does not match "Password"';
        bt.disabled = true;
    }
}

// The following code is used to toggle menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

function confirmdelete(element) {
    let x = document.getElementById(`confirmDelete/${element.dataset.location}`);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

