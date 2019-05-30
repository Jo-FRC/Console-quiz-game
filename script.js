(function(){
  function Question (question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  };

  Question.prototype.displayQuest = function(){
    console.log(this.question);
    this.answers.forEach(function(e, i){
      console.log(`${i} : ${e} `);
    });
  }

  Question.prototype.checkAns = function(ans, scoreCallback){
    var sc;
    if (ans == this.correct){
      console.log('Good job, you are right');
      sc = scoreCallback(true);
    } else {
      console.log('WROOOOONG');
      sc = scoreCallback(false);
    }
    this.displayScore(sc);
  }

  Question.prototype.displayScore = function(score){
    console.log('You score is: ' + score);
    console.log('----------------------')
  }

  var quest1 = new Question('Do you like JS?', ['yes', 'no'], 0);
  var quest2 = new Question('The capital of Italy is...', ['Milan', 'Rome'], 1);
  var quest3 = new Question('Who is the president of the USA?', ['Trump', 'Obama'], 0);
  var quest4 = new Question('How old is the Queen of England', [92, 95], 0);

  var quests = [quest1, quest2, quest3, quest4];

  function score(){
    var sc = 0;
    //if correct is if true, that's why I'll set the scoreCallback to true when the ans is correct
    return function(correct){
      if(correct){
        sc++;
      }
      return sc;
    }
  }

  //keep the first part of the closure functon in a variable in order to call the 2nd part later

  var keepScore = score();

  function nextQuest(){

    var n = (Math.floor(Math.random() * quests.length));

    quests[n].displayQuest();

    var answer = prompt(quests[n].question);

    if (answer != 'quit'){
      quests[n].checkAns(answer, keepScore);
      nextQuest();
    }
  }

  nextQuest();

// function getRandom() {
//   var randomQuest = (Math.floor(Math.random() * quests.length));
//   console.log(quests[randomQuest].question);
//   console.log('0 = ' + quests[randomQuest].answers[0]);
//   console.log('1 = ' + quests[randomQuest].answers[1]);
//   var promptedQuest = prompt(quests[randomQuest].question);
//   console.log(promptedQuest);
//   if(promptedQuest === 'quit'){
//     console.log('You quitted the game');
//   } else if(promptedQuest == quests[randomQuest].correct){
//     score += 1;
//     console.log('Good job, you are right');
//     console.log('You score is: ' + score);
//     console.log('----------------------')
//     getRandom();
//   } else {
//     console.log('WROOOOONG');
//     console.log('You score is: ' + score);
//     console.log('----------------------')
//     getRandom();
//   }
// }
//
// getRandom();
})();
