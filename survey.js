const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Function Code
const performSurvey = () => {
  let surveyResults = {
    "What's your name? Nicknames are also acceptable :)": " ",
    "What's an activity you like doing?": " ",
    "What do you listen to while doing that?": " ",
    "Which meal is your favourite (eg: dinner, brunch, etc.)": " ",
    "What's your favourite thing to eat for that meal?": " ",
    "Which sport is your absolute favourite?": " ",
    "What is your superpower? In a few words, tell us what you are amazing at!":
      " "
  };
  let questions = Object.keys(surveyResults);

  let answersArr = [];
  rl.question(questions[0], answer => {
    answersArr.push(answer);
    rl.question(questions[1], answer => {
      answersArr.push(answer);
      rl.question(questions[2], answer => {
        answersArr.push(answer);
        rl.question(questions[3], answer => {
          answersArr.push(answer);
          rl.question(questions[4], answer => {
            answersArr.push(answer);
            rl.question(questions[5], answer => {
              answersArr.push(answer);
              rl.question(questions[6], answer => {
                answersArr.push(answer);
                rl.close();
                // console.log(answersArr);
                const [
                  name,
                  activity,
                  music,
                  meal,
                  food,
                  sport,
                  superpower
                ] = answersArr;
                console.log(
                  `Hi, my name is ${name}, I really like ${activity} and I always listen to ${music} when doing it. My favourite meal of the day is definetely ${meal} and I really dig ${food}; I'm always up to it! I also love to play ${sport} and I wish I could ${superpower}, that would make me entirely perfect!`
                );
              });
            });
          });
        });
      });
    });
  });
};

performSurvey();
