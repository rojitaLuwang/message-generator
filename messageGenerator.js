
//generate random number
function generateRandomNumber(count) {
    return (Math.floor(Math.random()*count));
}

//store generated messages
let messages = [];

//generate the messages
function generateMessages(){
    messages.push('Welcome to the Mesage Generator!!');
    messages.push(greetings[generateRandomNumber(4)]);
    messages.push('Quote of the day: ' + quotes[generateRandomNumber(5)]);
    messages.push('Something to laugh: ' + laugh[generateRandomNumber(5)]);
    return messages;
    
}

//greetings
const greetings = ["Hello, it's nice to meet you.",
                    "It's a pleasure to meet you.",
                    "Hey, what's up?",
                    "Hi, how have you been?"
];

//quotes
const quotes = ["Winning doesn't always mean being first. Winning means you're doing better than you've done before.",
    "You're braver than you believe, and stronger than you seem, and smarter than you think.",
    "It always seems impossible until it is done.",
    "Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude.",
    "The difference between ordinary and extraordinary is that little extra."
];

//ponder
const laugh = [
    "Maybe if we start telling people their brain is an app, they'll want to use it.",
    "The rotation of Earth really makes my day.",
    "Never trust atoms; they make up everything.",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "I went to buy some camo pants but couldn't find any."
];

function formattedMessage(message){
    for(let i=0; i<message.length; i++){
        console.log(message[i]+ '\n');
    }
}

formattedMessage(generateMessages());