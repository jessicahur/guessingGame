//Part1: Asking for guess name and 'alert' a greeting
var name;
var name = prompt ("Please enter you name in the box below.");
while (name.length===0){ //Make sure that name cannot be empty
  name = prompt("Your name cannot be empty. Please enter your name in the box below.");
}

var greeting = "Nice meeting you "+name+"! Let's play a game. Please answer 3 questions about me using yes and no only.";
alert(greeting);

//Part2: Evaluating 3 questions
var keys = [ ['YES','Y'], ['YES', 'Y'], ['YES', 'Y'] ];
var ans = ["I was born and raised in Vietnam", "I love all kind of food.", "I have lived in San Jose and Berkeley."]
var questions = ["Was I born and raised in Vietnam?", "Do I like food?", "Have I ever lived in the Bay Area?"];
var counter = 0;
var congrats;
var thank;
var i = 0;
var answer;
var sorry;
var checking=true;

var ask = function (){
  var j = 0;
  for (i = 0; i < questions.length; i++){
    answer = prompt(questions[i]);
    while (answer.length ===0){
      answer = prompt ("Please put answer yes (y) or no (n) for the question."+questions[i]);
    }
    while (checking){
      alert("Your answer")
    }
    answer = answer.toUpperCase();
    if (answer===keys[i][j] || answer===keys[i][j+1]){
      counter++;
      congrats = "Congratulations "+name+"! You answered "+counter+" questions correctly!";
      console.log(congrats);
    }
    else{
      sorry = "Sorry "+name+". "+ans[i];
      console.log(sorry)
    }
  }

  thank = "Thank you "+name+" for playing. You answered "+counter+" question(s) correctly.";
  alert(thank);
}
ask();
