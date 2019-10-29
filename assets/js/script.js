

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },

  {
    title: "The the javascript 'or' operator is written ____.",
    choices: ["OR", "||", "&&", "##"],
    answer: "||"
  },

  {
    title: "To add a click event to a button, the  ____ method is used",
    choices: ["addEventListener", "useEvent", "hasEvent", "textContent"],
    answer: "addEventListener"
  },
];

var score = 0;
var $nextPage = document.querySelector("#next-page");
var questionIndex = 0;

var timer = 60;

var optionA = document.querySelector("#option-a");

var optionB = $("#option-b");
var optionC = $("#option-c");
var optionD = $("#option-d");
var correctness = $("#correctness");


function setTime() {
  var timerInterval = setInterval(function () {
    timer--;
    $("#timeEl").text(timer + " seconds left");

    if (timer === 0) {
      clearInterval(timerInterval);
      $(".question-page").hide();
      $(".results-page").show();
      document.querySelector("#final-score").textContent = window.localStorage.getItem("score")
    }

  }, 1000);
}




$(".question-page").hide();

$(".results-page").hide();


$("#startBtn").click(function () {



  $("#viewScores").click(function () {
    alert(window.localStorage.getItem("highscore"))


    // alert(JSON.stringify(window.localStorage("highscore")))
  })



  setTime()

  // localStorage.setItem("score", score)
  // console.log(localStorage);







  $(".launch-page").hide();

  $(".question-page").show();





  populate(questionIndex);

  $(optionA).click(function () {
    if (optionA.textContent === questions[questionIndex].answer) {
      $(correctness).text("Correct!")
      score++
      localStorage.setItem("score", score);
      console.log(score)

    }

    else {
      $(correctness).text("Incorrect")

      console.log(score)

    }
  })

  $(optionB).click(function () {
    if (document.querySelector("#option-b").textContent === questions[questionIndex].answer) {
      $(correctness).text("Correct!")
      score++
      localStorage.setItem("score", score);
      console.log(score)

    }

    else {
      $(correctness).text("Incorrect")

      console.log(score)

    }
  })

  $(optionC).click(function () {
    if (document.querySelector("#option-c").textContent === questions[questionIndex].answer) {
      $(correctness).text("Correct!")
      score++
      localStorage.setItem("score", score);
      console.log(score)

    }

    else {
      $(correctness).text("Incorrect")

      console.log(score)


    }
  })

  $(optionD).click(function () {
    if (document.querySelector("#option-d").textContent === questions[questionIndex].answer) {
      $(correctness).text("Correct!")
      score++
      localStorage.setItem("score", score);
      console.log(score)


    }
    else {
      $(correctness).text("Incorrect")

      console.log(score)
  

    }


  })


  $("#next-page").click(function () {

    questionIndex++
    populate(questionIndex);

    function fourthClick() {
      if (questionIndex === 3) {

        $("#next-page").off("click");
        $("#next-page").text("Submit");
        $("#next-page").click(function () {
          $(".question-page").hide();
          $(".results-page").show();
          document.querySelector("#final-score").textContent = window.localStorage.getItem("score")

          // var initials = $("#initials-input").val();

         

          var submit = $("#submit-initials-btn");
          submit.on("click", function (event) {
        

            event.preventDefault();
            var initials = $(this).siblings("input");
            var value =initials.val()

            console.log(initials);

            window.localStorage.setItem("highscore", value + " score "+ score)



          })

        })

      }

    }
    fourthClick();


  })

})



function populate(i) {


  $("#title").text(questions[i].title);



  $(optionA).text(questions[i].choices[0]);

  $(optionB).text(questions[i].choices[1]);

  $(optionC).text(questions[i].choices[2]);

  $(optionD).text(questions[i].choices[3]);

}
