var music = document.getElementById("backgroundMusic");
music.volume = 0.2;

window.onload = function() {
  music.play();
}

function newLevel() {
  window.location = 'levelnew.html';
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
      question: "What is the purpose of the foster care system?",
      answers: {
        a: "To remove children from parents until they obtain parenting licenses",
        b: "To care for children who have been removed from their biological parents due to abuse, neglect or parental incapacity until a permanent placement can be found",
        c: "To give the state a larger role in raising children",
        d: "To punish parents who neglect their children"
      },
      correctAnswer: "c"
    },
    {
      question: "Who was the founder of the modern foster care system?",
      answers: {
        a: "Grover Cleveland",
        b: "J.P. Morgan",
        c: "Charles Loring Brace",
        d: "John D. Rockefeller"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the most common reason children wind up removed from their parents and placed in foster care?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "Which of these stars spent time in foster care?"
    },
    {
      question: "Which of these stars spent time in foster care?",
      answers: {
        a: "Marilyn Monroe",
        b: "Eddie Murphy",
        c: "Sylvester Stallone",
        d: "Tiffany Haddish",
        e: "All the above",
      },
      correctAnswer: "e"
    }
  ];

  const level2_questions = [
    {
      question: "What is the total number of children who interact with the foster care system annually?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the average length of time children spend in foster care?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the average age of kids entering foster care?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    },{
      question: "What percentage of foster children end up getting adopted?",
      answers: {
        a: "All foster kids eventually get adopted.",
        b: "About 25%",
        c: "About 50%",
        d: "Foster kids can’t be adopted."
      },
      correctAnswer: "b"
    }
  ];

  const level3_questions = [
    {
      question: "What percentage of foster kids have reunification with their biological parents as their goal?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What percentage of foster children are separated from their siblings while in foster care?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Are foster youth allowed to go on sleepovers with friends?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Only if their social workers thinks it’s okay",
        d: "If their foster parents think it’s okay"
      },
      correctAnswer: "d"
    },{
      question: "What is the average number of moves experienced by foster children while in the foster system?",
      answers: {
        a: "1-2",
        b: "3-4",
        c: "5 or more"
      },
      correctAnswer: "c"
    }
  ];

  const level4_questions = [
    {
      question: "How much money do foster parents receive per day for taking care of a foster child?",
      answers: {
        a: "$10 to $20 a day",
        b: "Over $50 a day",
        c: "$30 to $40 a day",
        d: "$30 to $40 a day"
      },
      correctAnswer: "d"
    },
    {
      question: "How much do local, state and federal government agencies spend on the foster care system annually?",
      answers: {
        a: "$10B to $20B ",
        b: "$50B to $60B",
        c: "$20B to $25B",
        d: "$25B to $30B",
      },
      correctAnswer: "d"
    },
    {
      question: "What is the average cost to raise a child in the United States? ",
      answers: {
        a: "$100,000 to $150,000",
        b: "$150,000 to $200,000",
        c: "$200,000 to $250,000",
        d: "$300,000 or more"
      },
      correctAnswer: "c"
    },{
      question: "At what age do foster kids stop receiving foster care support?",
      answers: {
        a: "16",
        b: "18",
        c: "21",
        d: "It depends."
      },
      correctAnswer: "d"
    }
  ];

  const level5_questions = [
    {
      question: "What percentage of foster youth who “age out” of the system without finding a permanent home become incarcerated within two years?",
      answers: {
        a: "10%",
        b: "25%",
        c: "50%",
        d: "Pretty much all of them."
      },
      correctAnswer: "B"
    },
    {
      question: "What percentage of foster children graduate high school?",
      answers: {
        a: "87%",
        b: "34%",
        c: "58%",
        d: "22%"
      },
      correctAnswer: "c"
    },
    {
      question: "What percentage of former foster children go on to get college degrees?",
      answers: {
        a: "33%",
        b: "13%",
        c: "3%",
        c: "0%"
      },
      correctAnswer: "c"
    },{
      question: "What percentage of foster children become pregnant while still in their teens?",
      answers: {
        a: "10%",
        b: "20%",
        c: "50%",
        c: "80%"
      },
      correctAnswer: "c"
    }
  ];

  const level6_questions = [
    {
      question: "What percentage of college tuition is covered by government grants for former foster youth?",
      answers: {
        a: "0%",
        b: "33%",
        c: "50%",
        d: "100%"
      },
      correctAnswer: "d"
    },
    {
      question: "What major shift in federal foster care policy resulted from passage of the Family First Law in February, 2018?",
      answers: {
        a: "More foster children will now be placed in group homes.",
        b: "Blood relatives (kin) will now be required by law to take in children who have been removed from parents who are related.",
        c: "Foster children will now be allowed to parent themselves.",
        d: "States will now be reimbursed by the federal government for expenses they incur trying to keep families together and preventing abuse and neglect, so fewer kids end up in foster care in the first place."
      },
      correctAnswer: "d"
    },
    {
      question: "Between 2012 and 2017, how many states had fewer beds available in foster homes than were needed for the number of foster children in their system?",
      answers: {
        a: "Less than 10%",
        b: "ELess than 25%",
        c: "More than 50%",
        d: "In pretty much every state, there were not enough beds for the number of foster kids who needed placement"
      },
      correctAnswer: "c"
    },{
      question: "What percentage of foster parents give up their foster care licenses each year?",
      answers: {
        a: "10% - 20%",
        b: "60% - 80%",
        c: "30% - 50%",
        d: "80% - 90%"
      },
      correctAnswer: "c"
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

      document.getElementById("resultsText").style.visibility = "visible";
      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        document.getElementById("correctSound").play();
        document.getElementById("backgroundMusic").pause();
        document.getElementById("timer").src="images/successFINAL.gif";
        document.getElementById("resultsText").innerHTML = "Correct!";
        answerContainers[questionNumber].style.color = "lightgreen";
        //resultsContainer.innerHTML = 'Correct!';
        setTimeout(explanation, 4000)
        numCorrect++;

        setQuestionAnswered("array", level, question, correctness);

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        document.getElementById("incorrectSound").play();
        answerContainers[questionNumber].style.color = "red";
        document.getElementById("resultsText").innerHTML = "Try again!";
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