//Name: Anshul Gohel
//Course Code: ICS3UR-B
//Date: 23.4.2019
//Announcement App 2.0 

//Declaring Variables to incorporate arrays for gender, grade, club, title, description
let annGrade = [];
let annGender = [];
let annClub = [];
let annTitle = [];
let annDescription = [];

let i = 0;
//stores and declares the value of the index which is used to reference specific data

function processAnn() {
    if (annTitle.length === 0 && JSON.parse(localStorage.getItem('annTitle')) !== undefined) {
        //if the condition that the array of annTitle is empty, but there is local storage for annTitle, this code is executed

        var grade = JSON.parse(localStorage.getItem('annGrade'));
        var gender = JSON.parse(localStorage.getItem('annGender'));
        var club = JSON.parse(localStorage.getItem('annClub'));
        var title = JSON.parse(localStorage.getItem('annTitle'));
        var desc = JSON.parse(localStorage.getItem('annDescription'));
        //stores the data of the local storage back into the variables

        console.log(grade);
        for (var a = 0; localStorage.getItem('i') > a; a++, i++) {
            //under this condition, if the value of the stored index is larger than the current index, the code executes and the variable 'i' has 1 added to its value each time

            console.log(i);
            annGrade.push(grade[i]);
            annGender.push(gender[i]);
            annClub.push(club[i]);
            annTitle.push(title[i]);
            annDescription.push(desc[i]);
            //stored values into the previously declared variables are placed back into the empty array
        }
    }

    //Teacher's Screen information and variables retrieving the data//


    annGrade[i] = document.getElementById('grade').value;
    annGender[i] = document.getElementById('gender').value;
    annClub[i] = document.getElementById('club1').value;
    annTitle[i] = document.getElementById('annTitle').value;
    annDescription[i] = document.getElementById('annDescription').value;
    //takes the value from the teacher creator and stores them in the array

    console.log(annGrade + annGender + annClub + annTitle + annDescription);
    window.alert(JSON.stringify(annTitle[i]));
    if (JSON.stringify(annGrade[i]) !== '""' && JSON.stringify(annGender[i]) !== '""' && JSON.stringify(annClub[i]) !== '""' && JSON.stringify(annTitle[i]) !== '""' && (JSON.stringify(annDescription[i])) !== '""') {
        i++;
        localStorage.setItem("annGrade", JSON.stringify(annGrade));
        localStorage.setItem("annGender", JSON.stringify(annGender));
        localStorage.setItem("annClub", JSON.stringify(annClub));
        localStorage.setItem("annTitle", JSON.stringify(annTitle));
        localStorage.setItem("annDescription", JSON.stringify(annDescription));
        localStorage.setItem("i", i);
        //if all the options are filled in, the data from arrays gets stored in the local storage

    } else {
        window.alert('Please completely fill in all the blanks. Thank You.')
        //Else statement does not allow user to leave any blanks//
    }
}
