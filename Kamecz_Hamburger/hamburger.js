// 9. Feladat
var foglalas = function () {
    var xmlhttp = new XMLHttpRequest();
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var emailInput = document.getElementById("email");
    var seatsSelect = document.getElementById("seats");
    var datetimeInput = document.getElementById("datetime");

    if (nameInput.value === '' || phoneInput.value === '' || emailInput.value === '' || seatsSelect.value === '' || datetimeInput.value === '') {
        alert("Kérlek, minden mezőt tölts ki az űrlapon!");
        return;
    }

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            nameInput.value = "";
            phoneInput.value = "";
            emailInput.value = "";
            alert("Foglalását regisztráltuk!");
        }
    };
    xmlhttp.open('POST', '/api/foglalas');
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({
        name: nameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        seats: seatsSelect.value,
        datetime: datetimeInput.value,
    }));
};