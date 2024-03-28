/*
    This function disable all the buttons from the array present in buttonList passed as an argument to this function using forEach loop.
*/
const DisbaleButtons = (buttonsList) => {

    buttonsList.forEach(button => {
        button.disabled = true;
    })
}

/*
    This function defines what to do when user clicks on correct answer button.
*/
function Correct() {

    // Getting all answer buttons.
    const AnswerButtons = document.querySelectorAll('.answer-btn');

    // Disabling all the answer buttons.
    DisbaleButtons(AnswerButtons);

    // Getting button with correct answer.
    const CorrectButton = document.getElementById('Correct');

    // Adding `correct` class to the correct button.
    CorrectButton.classList.add('correct');

    // Enabling the next button.
    document.getElementById('next-btn').disabled = false;
}

function Wrong() {

    // Getting all answer buttons.
    const AnswerButtons = document.querySelectorAll('.answer-btn');

    // Disabling all the answer buttons.
    DisbaleButtons(AnswerButtons);

    // Getting button with incorrect answer.
    const IncorrectButton = document.getElementById('Wrong');

    // Adding `wrong` class to the correct button.
    IncorrectButton.classList.add('wrong');
    
    // Enabling the next button.
    document.getElementById('next-btn').disabled = false;
}

// Getting nextBtn and previousBtn elements.
const NextBtn = document.getElementById('next-btn');
const PreviousBtn = document.getElementById('previous-btn');

/*
    Adding event listener to next button so that when it is clicked then it checks whether the current step is zero or not. If the current step is not zero, then it displays the previous button element and go to next step by calling GoToStep function.
*/
NextBtn.addEventListener('click', () => {

    if (currentStep > 6) {
        location.href = '';
        return;
    }

    if (currentStep !== 1) {
        PreviousBtn.style.visibility = `visible`;
    }

    // Removing focus from the button.
    NextBtn.blur();

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // When all the steps are cleared than take test.
    if (currentStep === 6) {
        NextBtn.disabled = true;
        PreviousBtn.style.visibility = `hidden`;
    }

    GoToStep(currentStep);
})

/*
    Adding event listener to previous button so that when it is clicked then it checks whether the current step is zero or not. If the current step is zero, then it hides the previous button element and go to previous step by calling GoToStep function.
*/
PreviousBtn.addEventListener('click', () => {
    if (currentStep === 1) {
        PreviousBtn.style.visibility = `hidden`;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Removing focus from the button.
    NextBtn.blur();

    GoToStep(currentStep);
})

document.addEventListener('keydown', (event) => {

    currentStep++;
    if (event.key === 'Enter') {
        GoToStep(currentStep);
    }
    
})