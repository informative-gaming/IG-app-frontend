// IMPORTS


// VARIABLES

const date = new Date();


// LOGGING FUNCTIONS
console.log(date + "Info: All Content has been loaded succesfully");

function elementLoaded(element) {
    console.log(date + `Info: ${element} has been loaded succesfully`);
}


// TRANSITIONS
function showElement(elementId) {
    const elements = ['main-page', 'game-list', 'your-games', 'ai', 'feedback', 'account'];

    elements.forEach((element) => {
        const el = document.getElementById(element);
        if (element === elementId) {
            el.classList.remove('hidden');
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
            el.classList.add('hidden');
        }
    });
}