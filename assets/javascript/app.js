var timer = 30
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
var science = false
var history = false
var entertainment = false

$(document).ready(function() {
    $(".gameone").hide();
    $(".gametwo").hide();
    $(".gamethree").hide();
    $(".gamefour").hide();
    $(".gamefive").hide();
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
        $(".gameone").hide();
        $(".gametwo").hide();
        $(".gamethree").hide();
        $(".gamefour").hide();
        $(".gamefive").hide();
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
        $(".gameone").hide();
        $(".gametwo").hide();
        $(".gamethree").hide();
        $(".gamefour").hide();
        $(".gamefive").hide();
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
        $(".gameone").hide();
        $(".gametwo").hide();
        $(".gamethree").hide();
        $(".gamefour").hide();
        $(".gamefive").hide();
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
        $(".gameone").hide();
        $(".gametwo").hide();
        $(".gamethree").hide();
        $(".gamefour").hide();
        $(".gamefive").hide();
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
        $(".gameone").hide();
        $(".gametwo").hide();
        $(".gamethree").hide();
        $(".gamefour").hide();
        $(".gamefive").hide();
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
            $(".option1").click(function() {
                if (math1) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/pie.jpg")');
                        $(".question").text("Correct. The first three digits are 3.14");
                        correctAnswers++;
                        math1 = false;
                        console.log(correctAnswers)
                        setTimeout( function() {
                            $(".answerimg").hide();
                            mathSecond();
                            show();
                        }, 2500);
                    }, 100);
                }
            });
            $(".option2").click(function() {
                if (math1) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/pie.jpg")');
                        $(".question").text("Incorrect. The first three digits are 3.14");
                        incorrectAnswers++;
                        math1 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            mathSecond();
                            show();
                        }, 2500);
                    }, 100); 
                }
            });
            $(".option3").click(function() {
                if (math1) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/pie.jpg")');
                        $(".question").text("Incorrect. The first three digits are 3.14");
                        incorrectAnswers++;
                        math1 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            mathSecond();
                            show();
                        }, 2500);
                    }, 100); 
                }
            });
            $(".option4").click(function() {
                if (math1) {
                    setTimeout( function() {
                        hide()
                        $(".answerimg").show();
                        $(".answerimg").css('background-image', 'url("../TriviaGame/assets/images/pie.jpg")');
                        $(".question").text("Incorrect. The first three digits are 3.14");
                        incorrectAnswers++;
                        math1 = false;
                        console.log(incorrectAnswers);
                        setTimeout( function() {
                            $(".answerimg").hide();
                            mathSecond();
                            show();
                        }, 2500);
                    }, 100); 
                }
            });
       };
     

       
        function mathFirst() {
        $(".question").text("What are the first three digits of pie");
        $(".option1").text("3.14");
        $(".option2").text("3.41");
        $(".option3").text("4.13");
        $(".option4").text("4.31");
        math1 = true;
        }
    
        function mathSecond() {
        $(".question").text("What is 20% of 2");
        $(".option1").text("20");
        $(".option2").text("4");
        $(".option3").text("0.4");
        $(".option4").text("0.04");
        }
        function hide() {
            $(".option1").hide();
            $(".option2").hide();
            $(".option3").hide();
            $(".option4").hide();
        }
        function show() {
            $(".option1").show();
            $(".option2").show();
            $(".option3").show();
            $(".option4").show();
        }
    });
});
