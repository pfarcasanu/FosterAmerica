let question = new QuizQuestion("What is bool?", "A", "B", "C", "D", "B");

function UserDidAnswerA(e){
	question.UserDidAnswer(question.answers()[0]);
}

function UserDidAnswerB(e){
	question.UserDidAnswer(question.answers()[1]);
}

function UserDidAnswerC(e){
	question.UserDidAnswer(question.answers()[2]);
}

function UserDidAnswerD(e){
	question.UserDidAnswer(question.answers()[3]);
}

class QuizQuestion {

	constructor(question, [answer_a, answer_b, answer_c, answer_d], correct_answer){
		this.question = question;
		this.answers = answers;
		this.correct_answer = correct_answer;
	}

	get answers() {
		return this._answers;
	}

	UserDidAnswer(choice){
		if (choice == correct_answer) {
			Alert("Right answer!");
		} else {
			Alert("Wrong answer :(");
		}
	}
}