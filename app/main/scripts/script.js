// IMPORTS


// VARIABLES

const date = new Date();


// LOGGING FUNCTIONS
console.log(date + "Info: All Content has been loaded succesfully");

function elementLoaded(element) {
    console.log(date + `Info: ${element} has been loaded succesfully`);
}