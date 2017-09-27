   /*Arrays*/
var companyName = ['Coca-Cola', 'American Airlines', 'United Airlines'];
var jobTitle = ['Customer Service Agent', 'Creative Director', 'Manager'];
var jobDescription = ['call center, debugging emails.', 'sleep.']
var myInterests = ['fashion', 'Graphic Design', 'designing clothing', 'running a business'];
var mySkills = ['HTML/CSS', 'JavaScript', 'Sass', 'Crying', 'drinking', 'Angular', 'sleeping"'];

/*Variables*/
var name = ('Kiara Horn');
var careerName = ('Web Developer');
var careerTitle = ('Full Stack');
var careerDescription = ('Code Sleep Repeat');

 
    /*Functions*/
function displayName() {
    console.log('Name: ', name.toUpperCase());
}

function displayCareer () {
    console.log('Career: ', careerName, ' / ', careerTitle);
    console.log('Description: ', careerDescription);
}

function displayInterests() {
    console.log('My Interests: ');
    for (var i = 0; i < myInterests.length; i++) {
        console.log('* ', myInterests[i]);
    }
}

function aboutMe() {
    console.log('About Me: I like Eggs');
}

function displayPosition (jobTitle, companyName, jobDescription) {
    console.log('* ' + jobTitle + ' at ' + companyName + ' - ' + jobDescription);
}

function displaySkills (mySkills, boolean) {
    if (boolean === true) {
        console.log('Check it: ' + mySkills);
    } else {
        console.log('* ' + mySkills);
    }
}


    /*Calling Functions*/
console.log('`````````````````````````')

displayName();
displayCareer();
aboutMe();
displayInterests();
console.log('My Previous Experience: ');
displayPosition(jobTitle[0], companyName[0], jobDescription[0]);
displayPosition(jobTitle[1], companyName[1], jobDescription[1]);
displayPosition(jobTitle[2], companyName[2], jobDescription[2]);
console.log('My Skills: ');
displaySkills(mySkills[0], false);
displaySkills(mySkills[1], false);
displaySkills(mySkills[2], false);
displaySkills(mySkills[3], true);
displaySkills(mySkills[4], true);
displaySkills(mySkills[5], false);
displaySkills(mySkills[6], false);

console.log('`````````````````````````');