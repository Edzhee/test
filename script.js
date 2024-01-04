var emailArray = [];
var passwordArray = [];


var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");



function register() {
    event.preventDefault();

    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;
    var Ime = document.getElementById("Ime").value;
    var Familiq = document.getElementById("Familiq").value;
    var Gsm = document.getElementById("Gsm").value;

    if (email == "") {
        alert("Имейлът е задължителен...");
        return;
    } else if (password == "") {
        alert("Паролата е задължителна...");
        return;
    } else if (passwordRetype == "") {
        alert("Повтори парола...");
        return;
    } else if (password != passwordRetype) {
        alert("Паролата Ви не съвпада. Моля опитайте отново...");
        return;
    } else if (Adiniz == "") {
        alert("Името е задължително...");
        return;
    } else if (Soyadiniz == "") {
        alert("Задължитлено поле...");
        return;
    } else if (Gsm == "") {
        alert("Задължитлено поле...");
        return;
    } else if (emailArray.indexOf(email) == -1) {
        emailArray.push(email);
        passwordArray.push(password);
        setCookie('email', email, 1);
        setCookie('password', password, 1);
        setCookie('Ime', Ime, 1);
        setCookie('Familiq', Familiq, 1);

        alert("Sn. " + Ime + " " + Familiq + "  Registrirahte se uspeshno..");
        window.open('vhod.html', '_self');
        document.getElementById("re").value = "";
        document.getElementById("rp").value = "";
        document.getElementById("rrp").value = "";
        document.getElementById("Ime").value = "";
        document.getElementById("Familiq").value = "";
        document.getElementById("Gsm").value = "";
    } else {
        alert(email + " Tozi email sushtestvuva...");
        return;
    }
}

function login() {
    event.preventDefault();

    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    var email2 = getCookie('email');
    var password2 = getCookie('password');
    if (email == email2 & password == password2) {
        alert('Успешна регистрация');
        window.open('Index.html', '_self');
    } else {
        alert("Грешен пин или име...");
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}