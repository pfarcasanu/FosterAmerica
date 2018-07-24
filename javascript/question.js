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
    try {
      q_array = cookie.split(',');
      console.log()
      return parseInt(q_array[q_array.length-1]);
    } catch (error) {
      console.log(error);
    }
}

(function() {
  const questions = [
    {
      question: "Question 1?",
      answers: {
        a: "Answer A",
        b: "Answer B",
        c: "Answer C"
      },
      correctAnswer: "c"
    },
    {
      question: "Question 2?",
      answers: {
        a: "Answer A",
        b: "Answer B",
        c: "Answer C"
      },
      correctAnswer: "c"
    },
    {
      question: "Question 3",
      answers: {
        a: "Answer A",
        b: "Answer B",
        c: "Answer C"
      },
      correctAnswer: "d"
    },
    {
      question: "Question 4",
      answers: {
        a: "Answer A",
        b: "Answer B",
        c: "Answer C"
      },
      correctAnswer: "d"
    },
    {
      question: "Question 5",
      answers: {
        a: "Answer A",
        b: "Answer B",
        c: "Answer C"
      },
      correctAnswer: "d"
    },
    {
      question: "Question 6",
      answers: {
        a: "Answer A",
        b: "Answer B",
        c: "Answer C"
      },
      correctAnswer: "d"
    }
  ];

  console.log(getCookie("question"));
  const myQuestions = [questions[getCookie("question")]];
  //const myQuestions = [questions[0]];

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
        numCorrect++;

        // color the answers green
        window.location = 'rightanswer.html'
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    //resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    resultsContainer.innerHTML = 'Try Again!'
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