(function() {
  'use strict';

  angular
    .module('app.8ball')
    .controller('eightBallController', eightBallController);


  function eightBallController(){
    var vm = this;
    
    var answer = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful"
    ];
    
    vm.displayAnswer = false;
    vm.revealAnswer = answer[0];
    vm.askQuestion = askQuestion;
    vm.newQuestion = new Question();
    
    function Question() {
      this.question = '';  
    }
    
    function askQuestion() {
      var length = answer.length;
      if(!vm.displayAnswer) {
        vm.displayAnswer = true;
      }
      
      vm.revealAnswer = answer[randomAnswer(0, length -1)];
      vm.newQuestion = new Question();
    }
    
    function randomAnswer(min, max) {
      return Math.floor(Math.random() * (max -min)) + min;
    }
    
    
  }
})();