//Name: Anshul Gohel
//Course Code: ICS3UR-B
//Date: 23.4.2019
//Announcement App 2.0  


//Declares variable

let i = 0;

//Viewer Screen information and variables, function to display the data

var title = JSON.parse(localStorage.getItem('annTitle'));
var details = JSON.parse(localStorage.getItem('annDescription'));
var grade = JSON.parse(localStorage.getItem('annGrade'));
var gender = JSON.parse(localStorage.getItem('annGender'));
var club = JSON.parse(localStorage.getItem('annClub'));
//takes local storage and plugs them into variables

var announcement = '';
//creates a variable where the announcement is stored


function displayAnn() {
    for (var i = 0; i < JSON.parse(localStorage.getItem('annTitle')).length; i++) {
        //declares index variable and gives it a value of 0 and as long as the condition of the index in js is less than the amount of array indexes of title the code executes, 1 added to index every time


        if ((grade[i] === localStorage.getItem("studGrade") || grade[i] === "All") && (gender[i] === localStorage.getItem('studGender') || gender[i] === "All") && (club[i] === localStorage.getItem('studClub') || club[i] === "All")) {
            //code executes under the condition that the specific element in the array is either the same as that the student selected or the specific value of all


            announcement += title[i] + '<br>' + '&#8226' + '      ' + details[i] + '<br><br><br>';
            //variable stores announcement, as the specific element of the title array is added, a line is skipped, the specific element of the details array added with 2 line skips
        }
        document.getElementById('details').innerHTML = announcement;
        //prints value of announcement variable in the selected html element within the id 'details'
    }
}
