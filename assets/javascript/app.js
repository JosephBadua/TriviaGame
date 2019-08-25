var timer = 10
var correctAnswers = 0
var incorrectAnswers = 0
var questionUnanswered = 0

var math = false
var math1 = false
var math2 = false
var math3 = false
var math4 = false
var math5 = false

var english = false
var english1 = false
var english2 = false
var english3 = false
var english4 = false
var english5 = false

var science = false
var history = false
var entertainment = false

$(document).ready(function() {
    $(".back").hide();
    $(".instructions").hide();
    $(".instruct").hide();
    $(".instructone").hide();
    $(".instructtwo").hide();
    $(".instructthree").hide();
    $(".instructfour").hide();
    $(".math").hide();
    $(".english").hide();
    $(".history").hide();
    $(".science").hide();
    $(".entertainment").hide();
    $(".answerimg").hide();
    $(".question").hide();
    $(".timer").hide();
    $(".option1").hide();
    $(".option2").hide();
    $(".option3").hide();
    $(".option4").hide();
    $(".resetgame").hide();
    $(".playgame").click(function() {
        $(".one").hide();
        $(".gameone").show();
        $(".gametwo").show();
        $(".gamethree").show();
        $(".gamefour").show();
        $(".gamefive").show();
    });


    $(".gameone").click(function(){
        math = true;
        $(".back").hide();
        $(".instructions").show();
        $(".instruct").show();
        $(".instructone").show();
        $(".instructtwo").show();
        $(".instructthree").show();
        $(".instructfour").show();
        $(".math").show();
    })
    $(".gametwo").click(function(){
        english = true;
        $(".back").hide();
        $(".instructions").show();
        $(".instruct").show();
        $(".instructone").show();
        $(".instructtwo").show();
        $(".instructthree").show();
        $(".instructfour").show();
        $(".english").show();
    })
    $(".gamethree").click(function(){
        science = true;
        $(".back").hide();
        $(".instructions").show();
        $(".instruct").show();
        $(".instructone").show();
        $(".instructtwo").show();
        $(".instructthree").show();
        $(".instructfour").show();
        $(".science").show();
    })
    $(".gamefour").click(function(){
        history = true;
        $(".back").hide();
        $(".instructions").show();
        $(".instruct").show();
        $(".instructone").show();
        $(".instructtwo").show();
        $(".instructthree").show();
        $(".instructfour").show();
        $(".history").show();
    })
    $(".gamefive").click(function(){
        entertainment = true;
        $(".back").hide();
        $(".instructions").show();
        $(".instruct").show();
        $(".instructone").show();
        $(".instructtwo").show();
        $(".instructthree").show();
        $(".instructfour").show();
        $(".entertainment").show();
    })
    $(".math").click(function() {
        if (math) {
            $(".question").show();
            $(".timer").show();
            $(".option1").show();
            $(".option2").show();
            $(".option3").show();
            $(".option4").show();
            $(".instruct").hide();
            $(".instructone").hide();
            $(".instructtwo").hide();
            $(".instructthree").hide();
            $(".instructfour").hide();
            $(".math").hide();
            mathFirst();
            startTimer();
            $(".option1").click(function() {
                if (math1) {
                    setTimeout( function() {
                        $(".timer").hide();
                        hide() 
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/pie.jpg")');
                        $(".question").text("Correct. The first three digits are 3.14");
                        correctAnswers++;
                        math1 = false;
                        math2 = true;
                        console.log(correctAnswers)
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                            clearInterval(timing);
                            mathSecond();
                            show();
                        }, 2500);
                    }, 100); 
                } else if (math2) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/number4.jpg")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Incorrect. 20% of 2 is 0.4");
                        incorrectAnswers++;
                        math2 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                            clearInterval(timing);
                            mathThird();
                            show();
                        }, 2500);
                    }, 100); 
                    math3 = true;
                } else if (math3) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/24.png")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Incorrect. The correct answer is (d) 24");
                        incorrectAnswers++;
                        math3 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                            clearInterval(timing);
                            mathFourth();
                            show();
                        }, 2500);
                    }, 100); 
                    math4 = true;
                }  else if (math4) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url( "../TriviaGame/assets/images/numbers.jpg")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Correct! The answer is (a) 5(x-4)(x+1)");
                        correctAnswers++;
                        math4 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                            clearInterval(timing);
                            mathFifth();
                            show();
                        }, 2500);
                    }, 100); 
                    math5 = true;
                } else if (math5) {
                       setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/liketerms.jpg")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Incorrect. The correct answer is (c) -4a + 22b");
                        incorrectAnswers++;
                        math5 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                        $(".answerimg").hide();
                        endScreen();
                        $(".text").hide();
                    }, 2500);
                }, 100); 
                }
            });

            $(".option2").click(function() {
                if (math1) {
                    setTimeout( function() {
                        $(".timer").hide();
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/pie.jpg")');
                        $(".question").text("Incorrect. The first three digits are 3.14");
                        incorrectAnswers++;
                        math1 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                            clearInterval(timing);
                            mathSecond();
                            show();
                        }, 2500);
                    }, 100); 
                   math2 = true;
                } else if (math2) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/number4.jpg")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Incorrect. 20% of 2 is 0.4");
                        incorrectAnswers++;
                        math2 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                            clearInterval(timing);
                            mathThird();
                            show();
                        }, 2500);
                    }, 100); 
                    math3 = true;
                } else if (math3) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/24.png")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Incorrect. The correct answer is (d) 24");
                        incorrectAnswers++;
                        math3 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                            clearInterval(timing);
                            mathFourth();
                            show();
                        }, 2500);
                    }, 100); 
                    math4 = true;
                }  else if (math4) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url( "../TriviaGame/assets/images/numbers.jpg")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Incorrect. The correct answer is (a) 5(x-4)(x+1)");
                        incorrectAnswers++;
                        math4 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                            clearInterval(timing);
                            mathFifth();
                            show();
                        }, 2500);
                    }, 100); 
                    math5 = true;
                } else if (math5) {
                setTimeout( function() {
                    hide()
                    $(".answerimg").show();
                    $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/liketerms.jpg")');
                    $(".answerimg").css('background-size', 'contain');
                    $(".question").text("Incorrect. The correct answer is (c) -4a + 22b");
                    incorrectAnswers++;
                    math5 = false;
                    console.log(incorrectAnswers);
                    setTimeout( function() {
                        $(".answerimg").hide();
                        endScreen();
                        $(".text").hide();
                    }, 2500);
                }, 100); 
            }
            });

            $(".option3").click(function() {
                if (math1) {
                    setTimeout( function() {
                        $(".timer").hide();
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/pie.jpg")');
                        $(".question").text("Incorrect. The first three digits are 3.14");
                        incorrectAnswers++;
                        math1 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                            clearInterval(timing);
                            mathSecond();
                            show();
                        }, 2500);
                    }, 100); 
                   math2 = true;
                } else if (math2) {
                    setTimeout( function() {
                        $(".timer").hide();
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/number4.jpg")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Correct. 20% of 2 is 0.4");
                        correctAnswers++;
                        math2 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                            clearInterval(timing);
                            mathThird();
                            show();
                        }, 2500);
                    }, 100); 
                   math3 = true;
                }  else if (math3) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/24.png")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Incorrect. The correct answer is (d) 24");
                        incorrectAnswers++;
                        math3 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                        clearInterval(timing);
                            mathFourth();
                            show();
                        }, 2500);
                    }, 100); 
                    math4 = true;
                }  else if (math4) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url( "../TriviaGame/assets/images/numbers.jpg")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Incorrect. The correct answer is (a) 5(x-4)(x+1)");
                        incorrectAnswers++;
                        math4 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                        clearInterval(timing);
                            mathFifth();
                            show();
                        }, 2500);
                    }, 100); 
                    math5 = true;
                } else if (math5) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/liketerms.jpg")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Correct! The answer is (c) -4a + 22b");
                        correctAnswers++;
                        math5 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            endScreen();
                            $(".text").hide();
                        }, 2500);
                    }, 100); 
                }
            });

            $(".option4").click(function() {
                if (math1) {
                    setTimeout( function() {
                        $(".timer").hide();
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/pie.jpg")');
                        $(".question").text("Incorrect. The first three digits are 3.14");
                        incorrectAnswers++;
                        math1 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                        clearInterval(timing);
                            mathSecond();
                            show();
                        }, 2500);
                    }, 100); 
                    math2 = true;
                } else if (math2) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/number4.jpg")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Incorrect. 20% of 2 is 0.4");
                        incorrectAnswers++;
                        math2 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                        clearInterval(timing);
                            mathThird();
                            show();
                        }, 2500);
                    }, 100); 
                    math3 = true;
                } else if (math3) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/24.png")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Correct! The answer is (d) 24");
                        correctAnswers++;
                        math3 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                        clearInterval(timing);
                            mathFourth();
                            show();
                        }, 2500);
                    }, 100); 
                    math4 = true;
                } else if (math4) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url( "../TriviaGame/assets/images/numbers.jpg")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Incorrect. The correct answer is (a) 5(x-4)(x+1)");
                        incorrectAnswers++;
                        math4 = false;
                        math5 = true;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            timer = 10
                            timing = setInterval(startTimer, 10000);
                        clearInterval(timing);
                            mathFifth();
                            show();
                        }, 2500);
                    }, 100); 

                } else if (math5) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/liketerms.jpg")');
                        $(".answerimg").css('background-size', 'contain');
                        $(".question").text("Times Up! The correct answer is (c) -4a + 22b");
                        incorrectAnswers++;
                        math5 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            endScreen();
                            $(".timer").hide();
                        }, 2500);
                    }, 100); 
                    clearInterval(timing);
                    clearTimeout(timing);
                }
            });
       };
     

       
        function mathFirst() {
        $(".question").text("What are the first three digits of pi");
        $(".option1").text("(a) 3.14");
        $(".option2").text("(b) 3.41");
        $(".option3").text("(c) 4.13");
        $(".option4").text("(d) 4.31");
        math1 = true;
        }


        function mathSecond() {
        $(".timer").show();
        $(".timer").text("You have: " + timer + " seconds left");
        $(".question").text("What is 20% of 2");
        $(".option1").text("(a) 20");
        $(".option2").text("(b) 4");
        $(".option3").text("(c) 0.4");
        $(".option4").text("(d) 0.04");
        }

        function mathThird() {
        $(".timer").show();
        $(".timer").text("You have: " + timer + " seconds left");
        $(".question").text("Find the value of 3 + 2 • (8 – 3)");
        $(".option1").text("(a) 25"); 
        $(".option2").text("(b) 13");
        $(".option3").text("(c) 17");
        $(".option4").text("(d) 24"); // Correct
        }

        function mathFourth() {
        $(".timer").show();
        $(".timer").text("You have: " + timer + " seconds left");
        $(".question").text("Factor: 5x2 – 15x – 20");
        $(".option1").text("(a) 5(x-4)(x+1)"); // Correct
        $(".option2").text("(b) -2(x-4)(x+5)");
        $(".option3").text("(c) -5(x+4)(x-1)");
        $(".option4").text("(d) 5(x+4)(x+1)");
        }

        function mathFifth() {
        $(".timer").show();
        $(".timer").text("You have: " + timer + " seconds left");
        $(".question").text("Combine Terms: 12a + 26b -4b – 16a");
        $(".option1").text("(a) 4a + 22b"); 
        $(".option2").text("(b) -28a + 30b");
        $(".option3").text("(c) -4a + 22b"); // Correct
        $(".option4").text("(d) 28a + 30b");
        }

        function endScreen() {
        show();
        $(".timer").hide();
        $(".question").text("Congratulations! You finished the quiz!");
        $(".option1").text("Correct Answers: " + correctAnswers);
        $(".option2").text("Incorrect Answers: " + incorrectAnswers);
        $(".option3").text("Unanswered Questions: " + questionUnanswered);
        $(".option4").hide()
        $(".resetgame").show();
        }
        function hide() {
            $(".timer").hide();
            $(".option1").hide();
            $(".option2").hide();
            $(".option3").hide();
            $(".option4").hide();
        }
        function show() {
            $(".timer").show();
            $(".option1").show();
            $(".option2").show();
            $(".option3").show();
            $(".option4").show();
        }

         function startTimer() {
        clearInterval();
        clearTimeout();
         var timing = setInterval(function(){
                $('.timer').text("You have: " + (timer--) + " Seconds Left");
                if (timer === -1) {
                    if (math1) {
                        setTimeout( function() {
                            hide()
                            clearInterval(timing);
                            $(".answerimg").show();
                            $(".timer").text("");
                            $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/pie.jpg")');
                            $(".question").text("Times Up! The first three digits are 3.14");
                            questionUnanswered++;
                            math1 = false;
                            console.log(incorrectAnswers);
                            setTimeout( function() {
                                $(".answerimg").hide();
                                mathSecond();
                                show();
                            timer = 10
                            math2 = true;
                            $(".timer").text("You have: " + (timer--) + " Seconds Left")
                            }, 2500);
                        }, 500); 
                        timing = setInterval(startTimer, 10000);
                        clearInterval(timing);

        
                    }
                    if (math2) {
                        setTimeout( function() {
                            hide()
                            clearInterval(timing);
                            $(".answerimg").show();
                            $(".timer").text("");
                            $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/number4.jpg")');
                            $(".answerimg").css('background-size', 'contain');
                            $(".question").text("Times Up! 20% of 2 is 0.4");
                            questionUnanswered++;
                            math2 = false;
                            console.log(incorrectAnswers);
                            setTimeout( function() {
                                $(".answerimg").hide();
                                mathThird();
                                show();
                            timer = 10;
                            math3 = true;
                            $(".timer").text("You have: " + (timer--) + " Seconds Left")
                            }, 2500);
                            clearTimeout(timing);
                        }, 500); 
                        timing = setInterval(startTimer, 10000);
                        clearInterval(timing);

                    }
                    if (math3) {
                        setTimeout( function() {
                            hide()
                            clearInterval(timing);
                            $(".answerimg").show();
                            $(".timer").text("");
                            $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/24.png")');
                            $(".answerimg").css('background-size', 'contain');
                            $(".question").text("Times Up! The correct answer is (d) 24");
                            questionUnanswered++;
                            math3 = false;
                            console.log(incorrectAnswers);
                            setTimeout( function() {
                                $(".answerimg").hide();
                                mathFourth();
                                show();
                            timer = 10;
                              timing = setInterval(startTimer, 10000);
                            math4 = true;
                            $(".timer").text("You have: " + (timer--) + " Seconds Left")
                            }, 2500);
                            clearTimeout(timing);
                        }, 500); 
                        timing = setInterval(startTimer, 10000);
                        clearInterval(timing);
    
                    }
                    if (math4) {
                        setTimeout( function() {
                            hide()
                            $(".answerimg").show();
                            $(".answerimg").css('background-image', 'url( "../TriviaGame/assets/images/numbers.jpg")');
                            $(".answerimg").css('background-size', 'contain');
                            $(".question").text("Times Up! The correct answer is (a) 5(x-4)(x+1)");
                            questionUnanswered++;
                            math4 = false;
                            console.log(incorrectAnswers);
                            setTimeout( function() {
                                $(".answerimg").hide();
                                mathFifth();
                                show();
                            timer = 10;
                              timing = setInterval(startTimer, 10000);
                            math5 = true;
                            $(".timer").text("You have: " + (timer--) + " Seconds Left")
                            }, 2500);
                            clearTimeout(timing);
                        }, 500); 
                        timing = setInterval(startTimer, 10000);
                        clearInterval(timing);
                    }
                    if (math5) {
                        setTimeout( function() {
                            hide()
                            $(".answerimg").show();
                            $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/liketerms.jpg")');
                            $(".answerimg").css('background-size', 'contain');
                            $(".question").text("Times Up! The correct answer is (c) -4a + 22b");
                            questionUnanswered++;
                            math5 = false;
                            console.log(incorrectAnswers);
                            setTimeout( function() {
                                $(".answerimg").hide();
                                endScreen();
                                $(".text").hide();
                            }, 2500);
                        }, 100); 
                    }
                } 
            }, 1000);     
              $(".resetgame").click(function() {
                $(".instructions").hide();
                $(".instruct").hide();
                $(".instructone").hide();
                $(".instructtwo").hide();
                $(".instructthree").hide();
                $(".instructfour").hide();
                $(".math").hide();
                $(".english").hide();
                $(".history").hide();
                $(".science").hide();
                $(".entertainment").hide();
                $(".answerimg").hide();
                $(".question").hide();
                $(".timer").hide();
                $(".option1").hide();
                $(".option2").hide();
                $(".option3").hide();
                $(".option4").hide();
                $(".resetgame").hide();
                $(".gameone").show();
                $(".gametwo").show();
                $(".gamethree").show();
                $(".gamefour").show();
                $(".gamefive").show();
                clearTimeout(timing);
                clearInterval(timing);
                timer = 10;
            });     
        }
    });
    
});
