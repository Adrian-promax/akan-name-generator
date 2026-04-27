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

    let days = 
}