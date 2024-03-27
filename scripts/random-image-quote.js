// Getting image and quote elements from DOM.
const Image = document.getElementById('learn-img');
const FirstQuoteText = document.getElementById('first-quote-text');
const SecondQuoteText = document.getElementById('second-quote-text');

// Array of all images for home page.
const ImagesArray = [`./images/learn-img1.jpg`, `./images/learn-img2.jpg`, `./images/learn-img3.jpg`];

// Initializing indexA and indexB for quotes with 0.
let indexA = 0;
let indexB = 0;

/*
    This function takes length of an array and returns a random index for that array.
*/
const SelectRandom = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
}

// Setting image src randomly from SelectRandom function.
Image.src = ImagesArray[SelectRandom(ImagesArray.length)];

// Array of quotes.
const QuotesArray = [
    `Failure will never overtake me if my determination to succeed is strong enough.`,
    `Things work out best for those who make the best of how things work out.`,
    `Positive thinking will let you do everything better than negative thinking will.`,
    `Do the best you can until you know better. Then when you know better, do better.`,
    `The only thing standing between you and outrageous success is continuous progress you need discipline.`,
    `Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.`,
    `Strive not to be a success, but rather to be of value.`,
    `Try not to become a man of success. Rather become a man of value.`,
    `Success is stumbling from failure to failure with no loss of enthusiasm.`,
    `If A is a success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.`
];

/*
    Updating the value of indexA and indexB randomly. If both the values are same, then indexB value is again updated with random number and apply that index to the quotes array to set the quotes on home page.
*/
indexA = SelectRandom(QuotesArray.length);
indexB = SelectRandom(QuotesArray.length);

while (true) {
    if (indexA === indexB) {
        indexB = SelectRandom(QuotesArray.length);
    }
    else {
        break;
    }
};

FirstQuoteText.textContent = QuotesArray[indexA];
SecondQuoteText.textContent = QuotesArray[indexB];