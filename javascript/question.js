function newLevel() {
  window.location = 'levelnew.html';
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    var cookie = "";
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            cookie =  c.substring(name.length, c.length);
        }
    }
    return cookie;
}

function getNumber(cookie){
  try {
    return parseInt(cookie);
  } catch (error) {
    console.log(error);
  }
}

function setQuestionAnswered(cname, level, question, value){
  console.log("level = " + level);
  console.log(typeof level);
  console.log("question = " + question)
  console.log(typeof question)
  console.log(getCookie(cname));
  var str = getCookie(cname);
  var level_arr = str.split("|");
  var q_arr =  level_arr[level].split(",");
  q_arr[question] = value.toString();
  level_arr[level] = q_arr.join(",");
  str = level_arr.join("|");
  document.cookie = cname + "=" + str;
}

(function() {
  const level1_questions = [
    {
      question: "Hamilton is:",
      answers: {
        a: "Cool",
        b: "Funny",
        c: "a loser"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 1: Question 2",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 1: Question 3",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },
    {
      question: "Level 1: Question 4",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    }
  ];

  const level2_questions = [
    {
      question: "Level 2: Question 1",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 2: Question 2",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 2: Question 3",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },{
      question: "Level 2: Question 4",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    }
  ];

  const level3_questions = [
    {
      question: "Level 3: Question 1",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 3: Question 2",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 3: Question 3",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },{
      question: "Level 3: Question 4",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    }
  ];

  const level4_questions = [
    {
      question: "Level 4: Question 1",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 4: Question 2",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 4: Question 3",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },{
      question: "Level 4: Question 4",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    }
  ];

  const level5_questions = [
    {
      question: "Level 5: Question 1",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 5: Question 2",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 5: Question 3",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },{
      question: "Level 5: Question 4",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    }
  ];

  const level6_questions = [
    {
      question: "Level 6: Question 1",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 6: Question 2",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 6: Question 3",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },{
      question: "Level 6: Question 4",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    }
  ];

  const level7_questions = [
    {
      question: "Level 7: Question 1",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 7: Question 2",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 7: Question 3",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },{
      question: "Level 7: Question 4",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    }
  ];

  const level8_questions = [
    {
      question: "Level 8: Question 1",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 8: Question 2",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 8: Question 3",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },{
      question: "Level 8: Question 4",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    }
  ];

  const level9_questions = [
    {
      question: "Level 9: Question 1",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 9: Question 2",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 9: Question 3",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },{
      question: "Level 9: Question 4",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    }
  ];

  const level10_questions = [
    {
      question: "Level 10: Question 1",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 10: Question 2",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Level 10: Question 3",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },{
      question: "Level 10: Question 4",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    }
  ];
  // compile the questions
  const questions_collect = [level1_questions, level2_questions, level3_questions,
							level4_questions, level5_questions, level6_questions,
							level7_questions, level8_questions, level9_questions, 
							level10_questions];

  // pull the specific questions
  var question = getNumber(getCookie("question"));
  var level = getNumber(getCookie("level"));
  const myQuestions = [questions_collect[level][question]];

  // the user hasn't gottena  question wrong yet
  var correctness = 2;

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];
    
    

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    //window.location = 'rightanswer.html';
   const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        document.getElementById("correctSound").play();
        document.getElementById("backgroundMusic").pause();
        document.getElementById("timer").src="images/successFINAL.gif";
        answerContainers[questionNumber].style.color = "lightgreen";
        resultsContainer.innerHTML = 'Correct!';
        setTimeout(newLevel, 4000);
        numCorrect++;

        

        

        setQuestionAnswered("array", level, question, correctness);


        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        document.getElementById("incorrectSound").play();
        answerContainers[questionNumber].style.color = "red";
        correctness = 1;
        resultsContainer.innerHTML = 'Try Again!'
      }
    });

    // show number of correct answers out of total
    //resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();