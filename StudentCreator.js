//Name: Anshul Gohel-
//Course Code: ICS3UR-B
//Date: 23.4.2019
//Announcement App 2.0  

//Declaring Variables

let studGrade;
let studGender;
let studClub;

//Retrieves data for Student's selected options and saves it to local storage

function processStudentOptions() {
    studGrade = document.getElementById('studentGrade').value;
    studGender = document.getElementById('studentGender').value;
    studClub = document.getElementById('studentClub').value;
    //takes values and stores them into variables


    console.log(studGrade + studGender + studClub);
    localStorage.setItem("studGrade", studGrade);
    localStorage.setItem("studGender", studGender);
    localStorage.setItem("studClub", studClub);
    //takes variables and stores them into local storage
}
