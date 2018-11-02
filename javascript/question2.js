var music = document.getElementById("backgroundMusic");
music.volume = 0.2;

window.onload = function() {
  music.play();
}

function newLevel() {
  window.location = 'testlevel.html';
}

function explanation() {
  window.location = 'explanation.html'
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

function fromLetters(str) {
  var hash = {
    'a' : 0,
    'b' : 1,
    'c' : 2,
    'd' : 3,
    'e' : 4
   }
   return hash[str]
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
  document.cookie = cname + "=" + str+";max-age="+(3600*24*999);
}

(function() {
  const level1_questions = [
    {
      question: "Who was the founder of the modern foster care system?",
      answers: {
        a: "Grover Cleveland", 
        b: "Charles Loring Brace",
        c: "John D. Rockefeller",
        d: "a and b"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of these stars spent time in foster care?",
      answers: {
        a: "Marilyn Monroe",
        b: "Eddie Murphy",
        c: "Sylvester Stallone",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the most common reason children are placed in foster care?",
      answers: {
        a: "Drug abuse",
        b: "Outside observers report abuse to local authorities",
        c: "The children seek help",
        d: "Children's basic needs neglected"
      },
      correctAnswer: "a"
    },
    {
      question: "How many times do foster care children change schools each academic year?",
      answers: {
        a: "1",
        b: "1-2",
        c: "3 or more",
        d: "They usually don't move once they're placed",
      },
      correctAnswer: "b"
    }
  ];

  const level2_questions = [
    {
      question: "What percentage of foster children are separated from their siblings while in foster care?",
      answers: {
        a: "25%",
        b: "40%",
        c: "55%",
        d: "63%"
      },
      correctAnswer: "b"
    },
    {
      question: "What percentage of foster children become pregnant while still in their teens?",
      answers: {
        a: "20%",
        b: "25%",
        c: "50%",
        d: "More than 50%"
      },
      correctAnswer: "d"
    },
    {
      question: "What percentage of foster children end up getting adopted?",
      answers: {
        a: "Less than 25%",
        b: "About 30%",
        c: "More than 50%",
        d: "Foster kids are ineligible for adoption"
      },
      correctAnswer: "a"
    },{
      question: "What's the average length of time children spend in foster care?",
      answers: {
        a: "6 months",
        b: "1 year",
        c: "2 years",
        d: "4 years"
      },
      correctAnswer: "c"
    }
  ];

  const level3_questions = [
    {
      question: "What percentage of foster youth who leave the system without finding a permanent home (age out) become incarcerated?",
      answers: {
        a: "10%",
        b: "25%",
        c: "40%",
        d: "50%"
      },
      correctAnswer: "b"
    },
    {
      question: "What percentage of former foster children become homeless once they age out of the system?",
      answers: {
        a: "20%",
        b: "25%",
        c: "40%",
        d: "45%"
      },
      correctAnswer: "a"
    },
    {
      question: "What percentage of foster children graduate high school?",
      answers: {
        a: "33%",
        b: "58%",
        c: "70%",
        d: "87%"
      },
      correctAnswer: "b"
    },{
      question: "What percentage of former foster children go on to get college degrees?",
      answers: {
        a: "3%",
        b: "26%",
        c: "48%",
        d: "75%"
      },
      correctAnswer: "a"
    }
  ];

  const level4_questions = [
    {
      question: "How much do local, state, and federal government agencies spend on the foster system annually?",
      answers: {
        a: "Nearly $8 billion",
        b: "$29 billion",
        c: "$63 billion",
        d: "Over $100 billion"
      },
      correctAnswer: "b"
    },
    {
      question: "How much money do foster parents receive on average per day for taking care of a foster child?",
      answers: {
        a: "They do not receive any money",
        b: "Between $20-$25/day",
        c: "$75/day",
        d: "$100-$150/day"
      },
      correctAnswer: "b"
    },
    {
      question: "What percentage of college tuition is covered by government grants for former foster youth on average?",
      answers: {
        a: "None",
        b: "It varies greatly by state",
        c: "50%, if they attend a state school",
        d: "Various generous options are available"
      },
      correctAnswer: "d"
    },{
      question: "At what age do foster kids stop receiving foster care support?",
      answers: {
        a: "16",
        b: "18",
        c: "21",
        d: "It depends"
      },
      correctAnswer: "d"
    }
  ];

  const level5_questions = [
    {
      question: "How many children are in foster care in the U.S.?",
      answers: {
        a: "231,000",
        b: "437,000",
        c: "687,000",
        d: "1.2 million"
      },
      correctAnswer: "c"
    },
    {
      question: "Between 2012 and 2017, how many states had fewer beds available in foster homes than were needed for the number of foster children in their system?",
      answers: {
        a: "Less than 10%",
        b: "Less than 25%",
        c: "More than 50%",
        d: "In every state"
      },
      correctAnswer: "c"
    },
    {
      question: "What's the average length of time children spend in foster care?",
      answers: {
        a: "6 months",
        b: "1 year",
        c: "2 years",
        d: "4 years"
      },
      correctAnswer: "c"
    },{
      question: "What percentage of foster care children are not Caucasian?",
      answers: {
        a: "10%",
        b: "26%",
        c: "42%",
        d: "56%"
      },
      correctAnswer: "d"
    }
  ];

  const level6_questions = [
    {
      question: "What is the largest generation living in the United States today?",
      answers: {
        a: "Baby Boomers (between ages ~55-75)",
        b: "Generation X (35-55)",
        c: "Millenials (25-35)",
        d: "Generation Z (15-25)"
      },
      correctAnswer: "c"
    },
    {
      question: "How many couples are estimated to be waiting to adopt in the United States?",
      answers: {
        a: "2 million",
        b: "5 million",
        c: "10 million",
        d: "25 million"
      },
      correctAnswer: "a"
    },
    {
      question: "In March, 2018, the Family First Prevention Services Act was passed into federal law.  How many years ago did the last piece of major foster care legislation pass?",
      answers: {
        a: "10",
        b: "20",
        c: "30",
        d: "40",
        e: "It's the first major federal law to pass addressing foster care"
      },
      correctAnswer: "d"
    },{
      question: "Which factors give hope to those wanting to help repair our broken foster care system in this country?",
      answers: {
        a: "95% of American adults want children",
        b: "Technology and social media",
        c: "Research shows humans are intrinsically good",
        d: "All of the above"
      },
      correctAnswer: "d"
    }
  ];
  // compile the questions
  const questions_collect = [level1_questions, level2_questions, level3_questions,
							level4_questions, level5_questions, level6_questions,];

  // pull the specific questions
  var question = getNumber(getCookie("question"));
  var level = getNumber(getCookie("level"));
  const myQuestions = [questions_collect[level][question]];
  //const myQuestions = [questions_collect[0][1]];
  console.log(level)
  console.log(question)
  console.log(myQuestions);

  // the user hasn't gotten a  question wrong yet
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
           <div class="answers"> ${answers.join("</br>")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    //quizContainer.innerHTML = output.join("");
   
    document.getElementById("qLabel").innerHTML = myQuestions[0].question;
    document.getElementById("ans_collect").innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    //window.location = 'rightanswer.html';
   const answerContainers = document.getElementById("ans_collect").querySelectorAll(".answers");
  
    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      const numAns = fromLetters(userAnswer)
      var parent = document.getElementsByClassName("answers")[0];
      /* Selects all childs of parent having <span> as the element */
      var child= parent.querySelectorAll("label");
      var ans = child[numAns]

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        document.getElementById("correctSound").play();
        document.getElementById("backgroundMusic").pause();
        document.getElementById("timer").src="images/successFINAL.gif";
        document.getElementById("submit").innerHTML = "Correct!";
        ans.style.color = "lightgreen";
        setTimeout(explanation, 3000)
        numCorrect++;

        setQuestionAnswered("array", level, question, correctness);

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        document.getElementById("incorrectSound").play();
        ans.style.color = "grey";
        document.getElementById("submit").innerHTML = "Try again!";
        correctness = 1;
      }
    });

    // show number of correct answers out of total
    //resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  
  function showSlide(n) {
    //slides[currentSlide].classList.remove("active-slide");
    //slides[n].classList.add("active-slide");
    currentSlide = n;
    
    /*
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
    }*/
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

  //const previousButton = document.getElementById("previous");
  //const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  //previousButton.addEventListener("click", showPreviousSlide);
  //nextButton.addEventListener("click", showNextSlide);
})();