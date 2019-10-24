var start = document.querySelector("#start-btn")
var questionIndex=0;

var secondsLeft = 50;

var $optionA= document.querySelector("#option-a");
var $optionB= document.querySelector("#option-b");
var $optionC= document.querySelector("#option-c");
var $optionD= document.querySelector("#option-d");
var title =document.querySelector("#question-line")

var score=0;

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
    ///etc.
  ];






  start.addEventListener("click", function(){


    populate(questionIndex);

// if(questionIndex<questions.length){


 

   $optionA.addEventListener("click", function(){
    if ($optionA.textContent === questions[questionIndex].answer){
    
    score=score++;
    questionIndex=questionIndex++;
    populate(questionIndex);
    console.log(score);
   }

   else populate(questionIndex++)
   console.log(score);
    
    })

    $optionB.addEventListener("click", function(){
      if ($optionB.textContent === questions[questionIndex].answer){
      
      score=score++;
      questionIndex=questionIndex++;
      populate(questionIndex);
      console.log(score);
     }
  
     else populate(questionIndex++)
     console.log(score);
      
      })


      $optionC.addEventListener("click", function(){
        if ($optionC.textContent === questions[questionIndex].answer){
        
        score=score++;
        questionIndex=questionIndex++;
        populate(questionIndex);
        console.log("HI");
       }
    
       else populate(questionIndex++)
       console.log(score);
        
        })

        $optionD.addEventListener("click", function(){
          if ($optionD.textContent === questions[questionIndex].answer){
          
          score=score++;
          questionIndex=questionIndex++;
          populate(questionIndex);
          console.log(score);
         }
      
         else populate(questionIndex++)
         console.log(score);
          
          })

  
    
  })



  

// title.textContent = questions[questionIndex].title;
// $optionA.textContent=questions[questionIndex].choices[0];
// $optionB.textContent=questions[questionIndex].choices[1];
// $optionC.textContent=questions[questionIndex].choices[2];
// $optionD.textContent=questions[questionIndex].choices[3];







 


    

  


function populate(i){


title.textContent = questions[i].title;
$optionA.textContent=questions[i].choices[0];
$optionB.textContent=questions[i].choices[1];
$optionC.textContent=questions[i].choices[2];
$optionD.textContent=questions[i].choices[3];


 }