function getAkanName() {
    let date = document.getElementById("date").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let gender = document.getElementById("gender").value;

    //Validate input
    if (!date || !month || !year) {
        alert("Please fill all fields");
        return;
    }

    //calculate date of the week
    let d = new Date(year, month - 1, date);
    let day = d.getDay();

    let days = ["Sunday", "Monday","Teusday","Wednesday","Thursday","Friday","Saturday"];
    let maleNames = ["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let femaleNames = ["Akosua","Adwoa","Abenna","Akua","Yaa","Afua","Ama"];

    let getAkanName;

    if (gender ==="male") {getAkanName = maleNames[day];
    } else {
        akanName =femaleNames[day];
    }

    document.getElementById("result").innerHTML =
       `Your Akan name is <b>${akanName}</b><br>You were born on <b>${days[day]}</b>`;

    function resetForm() {

    }   
}