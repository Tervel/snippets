var questions = [
    new Question("Who was the first President of the US?",
     ["George Washington", "Thomas Jefferson"],
      "George Washington"),
    new Question("What is the answer to the Ultimate Question of Life, the Universe and Everything?",
     ["Pi", "42"],
      "42")
];

var quiz = new Quiz(questions);

QuizUI.displayNext();