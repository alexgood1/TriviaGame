$(document).ready(function() {

// Question Array of Objects containing the Q, the A choices, and the Correct A

var questionAnswers = [
    {
      question: "What, according to Einstein, is more important than knowledge?",
      answers: ["Religion", "Faith", "Will", "Imagination"],
      correctAnswer: "Imagination"
    }, {
      question: "Einstein is best known in popular culture for what equation?",
      answers: ["Quantum Theory", "E=MC^2", "String Theory", "Momentum"],
      correctAnswer: "E=mc^2"
    }, {
      question: "What common possesion did Einstein never own?",
      answers: ["Dog", "Radio", "Car", "House"], 
      correctAnswer: "a car"
    }, {
      question: "What article of clothing did Einstein refuse to wear?", 
      answers: ["Shoes", "Suspenders", "Socks", "A Button Down Shirt"], 
      correctAnswer:   "socks"
    }, {
      question: "At what university was his oldest son, Hans Albert, a Professor of Engineering?",
      answers: ["Berekely", "Princeton", "UCLA", "Dartmouth"],
      correctAnswer: "Berkeley"
    }, {
      question: "Einstein often said he thinks in terms of ________.",
      answers: ["A Child", "Someone 20 Years Wiser", "Music", "Family"],
      correctAnswer: "music"
    }, {
      question: "Based on his letters, during his second marriage, there is evidence that he was _________ 6 women during that period.",
      answers: ["Dating", "Teaching", "Privately Tutoring", "Married to"],
      correctAnswer: "Dating. (He also had a childhood sweetheart, Marie Winteler, with whom he corresponded during his first marriage."
    }, {
      question: "Almost all of his important work was published in ________ year(s). This time is known as his miracle _________ in Einstein’s life. During this time he published the four papers which would go on to significantly change physics in different ways.",
      answers: ["2, Work-ethic", "1, Eureka", "1, Year", "7, Years"],
      correctAnswer: "1, year",
    }, {
        question: "A team from a Canadian university published a controversial paper claiming Einstein possessed unusual __________, a part of the brain associated with mathematical and spatial ability.",
        answers: ["Left Brain Functioning", "Folds On His Parietal Lobe", "Prefrontal Cortex", "Amounts of Grey Matter"],
        correctAnswer: "folds on his parietal lobe"
      }, {
        question:  "A ____________ helped make Einstein world famous.",
        answers: ["Presidental Election", "Lunar Eclipse", "Woman", "Solar Eclipe"]
        correctAnswer: "solar eclipse"
    }
];

// start screen - html with a jquery click event

$('#start').on('click', function(){
    game.start();
  });
  // End my game when my Done btn clicked
  $('#done').on('click', function(){
    game.countDown();
  });

  // variables: number of seconds(setInterval), questions array, amount of answers correct, amt incorrect, amt unanswered
  // attr inside buttons to allow to only select one 
// .attr(); - takes in attr and value (2 paramaters)
// .attr("parameter","value");
// });
// from 
// ids - append  
// from divs - append data inside those divs 
// all questions inside forms, which are inside divs 
// event.preventDefault - js built in method 

  
  var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    // Setting my counter
    countDown: function(){
      game.counter--;
      $('#counter').html(game.counter)
      if(game.counter <= 0){
        game.done();
      }
      if($('#done').on('click', function(){
        game.done();
      }));
    //   if(game.counter <= 20){
    //     $('#counter').css('color', 'red')
    //   }
    },
    // start the game with a timer and add all the questions and answers
    start: function(){
      timer = setInterval(game.countDown, 1000)
      $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
      $('#start, .game-info').remove();
      for(var i=0; i<questions.length; i++){
        $('#subwrapper').append('<h3>' + questions[i].question + '</h3>')
        for(var j=0; j < questions[i].answers.length; j++){
          $('#subwrapper').append("<input class='check-with-label' type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>  <label class='label-for-check'>"+ questions[i].answers[j]+"  </label></br>");
        }
      }
      $('<button id="done" class="done-btn" type="button" name="button-done">Done</button>').appendTo('#subwrapper');
    },
    // checking each input if it is a correct answer or wrong answer and incrementing my game.correct and game.incorrect
    done: function(){
      $.each($('input[name="question-0"]:checked'), function(){
        if($(this).val() === questions[0].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-1"]:checked'), function(){
        if($(this).val() === questions[1].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-2"]:checked'), function(){
        if($(this).val() === questions[2].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-3"]:checked'), function(){
        if($(this).val() === questions[3].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-4"]:checked'), function(){
        if($(this).val() === questions[4].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-5"]:checked'), function(){
        if($(this).val() === questions[5].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-6"]:checked'), function(){
        if($(this).val() === questions[6].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-7"]:checked'), function(){
        if($(this).val() === questions[7].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-8"]:checked'), function(){
        if($(this).val() === questions[8].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-9"]:checked'), function(){
        if($(this).val() === questions[9].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-10"]:checked'), function(){
        if($(this).val() === questions[10].correctAnswer){
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      // Show the results after checking all answers and play a congrats audio
      this.result();
    },
    // Clearing my timer and remove it from page, adding correct answwers and incorrectanswers and Unanswered questions to the user
    result: function(){
      clearInterval(timer);
      $('#subwrapper h2').remove();
      $('#subwrapper').html('<h2>All Done!</h2>').addClass('all-done')
      $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
      $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
      // display all the Unanswered questions
      $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"<h3>");
    },
}  









var startScreen;
var gameHTML;
var counter = 30;

var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;



function initialScreen() {
    startScreen = "<p class='text-center msin-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";

        $("mainArea").html(startScreen);
    }

    initialScreen();

    //Create a function that is triggered by the start button and generates the HTML / html w/ a jquery click event

    // Closes start-button click



