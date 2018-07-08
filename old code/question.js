class QuizQuestion {

	constructor(question, answers, correct_answer){
		this.question = question;
		this.answers = answers;
		this.correct_answer = correct_answer;
	}

	UserDidAnswer(choice){
		if (choice == this.correct_answer) {
			alert("Right answer!");
		} else {
			alert("Wrong answer :(");
		}
	}
}

var answers = ["A", "B", "C", "D"];
let question = new QuizQuestion("What is bool?", answers, "B");

function UserDidAnswerA(){
	question.UserDidAnswer(question.answers[0]);
}

function UserDidAnswerB(){
	question.UserDidAnswer(question.answers[1]);
}

function UserDidAnswerC(){
	question.UserDidAnswer(question.answers[2]);
}

function UserDidAnswerD(){
	question.UserDidAnswer(question.answers[3]);
}

