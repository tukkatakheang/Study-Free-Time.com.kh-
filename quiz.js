//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        question: "ចូរសរសេរចំនួន(0.2)(0.2)(0.2)(0.2)(0.2)ជាស្វ័យគុណ",
        optionA: "(0.2) ​<sup>5</sup>",
        optionB: "(0.2)  <sup>2</sup>",
        optionC: "(0.2)  <su>p3</sup>",
        optionD: "(0.2)  <sup>6</sup>",
        correctOption: "optionA"
    },

    {
        question: "ចូរសរសេរចំនួន 5x5x5x5 ជាស្វ័យគុណ",
        optionA: "5  <sup>3</sup>",
        optionB: "5  <sup>4</sup>",
        optionC: "5  <sup>6</sup>",
        optionD: "5  <sup>7</sup>",
        correctOption: "optionB"
    },

    {
        question: "ចូរសរសេរចំនួន(-3)(-3)(-3)(-3)(-3)(-3)ជាស្វ័យគុណ",
        optionA: "(-3)  <sup>4</sup>",
        optionB: "(-3)  <sup>7</sup>",
        optionC: "(-3)  <sup>5</sup>",
        optionD: "(-3)  <sup>6</sup",
        correctOption: "optionD"
    },

    {
        question: "ចូរសរសេរចំនួនស្វ័យគុណ(-1) <sup>3</sup>ទៅជាផលគុណដែលមានកត្តាដូចគ្នា",
        optionA: "(-1)(-1)",
        optionB: "(-1)(-1)(-1)(-1)",
        optionC: "(-1)(-1)(-1)",
        optionD: "(-1)",
        correctOption: "optionC"
    },

    {
        question: "ចូរសរសេរចំនួនស្វ័យគុណ(4) <sup>4</sup>ទៅជាផលគុណដែលមានកត្តាដូចគ្នា",
        optionA: "4x4x4",
        optionB: "4x4",
        optionC: "4x4x4x4x4",
        optionD: "4x4x4x4",
        correctOption: "optionD"
    },

    {
        question: "ចូរសរសេរចំនួនស្វ័យគុណ(-5) <sup>4</sup>ទៅជាផលគុណដែលមានកត្តាដូចគ្នា",
        optionA: "(-5)(-5)(-5)(-5)",
        optionB: "(-5)(-5)",
        optionC: "(-5)(-5)(-5)",
        optionD: "(-5)(-5)(-5)(-5)(-5)",
        correctOption: "optionA"
    },

    {
        question: "ចូរសរសេរចំនួនស្វ័យគុណ(-2) <sup>7</sup>ទៅជាផលគុណដែលមានកត្តាដូចគ្នា",
        optionA: "(-2)(-2)(-2)(-2)",
        optionB: "(-2)(-2)",
        optionC: "(-2)(-2)(-2)(-2)(-2)(-2)(-2)",
        optionD: "(-2)(-2)(-2)(-2)(-2)(-2)",
        correctOption: "optionC"
    },

    {
        question:"ចូរសរសេរចំនួនស្វ័យគុណ(-1) <sup>6</sup>ទៅជាផលគុណដែលមានកត្តាដូចគ្នា",
        optionA: "(-1)(-1)(-1)(-1)(-1)(-1)",
        optionB: "(-1)(-1)(-1)(-1)(-1)",
        optionC: "(-1)(-1)(-1)(-1)",
        optionD: "(-1)(-1)",
        correctOption: "optionA"
    },

    {
        question: "ចូរសរសេរចំនួនស្វ័យគុណ(7) <sup>3</sup>ទៅជាផលគុណដែលមានកត្តាដូចគ្នា",
        optionA: "7x7x7x7x7x7",
        optionB: "7x7x7x7x7x7x7",
        optionC: "7x7x7x7x7x7",
        optionD: "7x7x7",
        correctOption: "optionD"
    },

    {
        question: "ចូរសរសេរចំនួនស្វ័យគុណ(-3) <sup>4</sup>ទៅជាផលគុណដែលមានកត្តាដូចគ្នា",
        optionA: "(-3)(-3)(-3)",
        optionB: "(-3)(-3)(-3)(-3)(-3)",
        optionC: "(-3)(-3)",
        optionD: "(-3)(-3)(-3)(-3)",
        correctOption: "optionD"
    },

    {
        question: "ចូរសម្រួលកន្សោម(a <sup>2</sup>) <sup>2</sup>",
        optionA: "(a)  <sup>7</sup>",
        optionB: "(a)  <sup>8</sup>",
        optionC: "(a)  <sup>4</sup>",
        optionD: "(a)  <sup>5</sup>",
        correctOption: "optionC"
    },

    {
        question: "ចូរសម្រួលកន្សោម(g <sup>2</sup>) <sup>2</sup>",
        optionA: "(g)  <su>4</sup>",
        optionB: "(g)  <sup>3</sup>",
        optionC: "(g)  <sup>2</sup>",
        optionD: "(g)  <sup>5</sup>",
        correctOption: "optionA"
    },


    {
        question: "ចូរសម្រួលកន្សោម(m <sup>2</sup>) <sup>2</sup>",
        optionA: "(m)  <sup>3</sup>",
        optionB: "(m)  <sup>4</sup>",
        optionC: "(m)  <sup>5</sup>",
        optionD: "(m)  <sup>6</sup>",
        correctOption: "optionB"
    },

    {
        question: "ចូរសម្រួលកន្សោម(2a <sup>2</sup>) <sup>2</sup>",
        optionA: "(4a)  <sup>5</sup>",
        optionB: "(4a)  <sup>7</sup>",
        optionC: "(4a)  <sup>8</sup>",
        optionD: "(4a)  <sup>4</sup>",
        correctOption: "optionD"
    },

    {
        question: "ចូរសម្រួលកន្សោម(7m <sup>2</sup> n) <sup>2</sup>",
        optionA: "49m  <sup>4</sup> n <sup>2</sup>",
        optionB: "49m  <sup>8</sup> n <sup>3</sup>",
        optionC: "49m  <sup>7</sup> n <sup>4</sup>",
        optionD: "49m  <sup>5</sup> n <sup>2</sup>",
        correctOption: "optionA"
    },

    {
        question: "ចូរសម្រួលកន្សោម(s <sup>2</sup>) <sup>2</sup>",
        optionA: "(s)  <sup>5</sup>",
        optionB: "(s)  <sup>6</sup>",
        optionC: "(s)  <sup>4</sup>",
        optionD: "(s)  <sup>7</sup>",
        correctOption: "optionC"
    },

    {
        question: "ចូរសម្រួលកន្សោម(ac) <sup>2</sup>",
        optionA: "a  <sup>2</sup> c <sup>2</sup>",
        optionB: "a  <sup>3</sup> c <sup>4</sup>",
        optionC: "a  <sup>4</sup> c <sup>7</sup>",
        optionD: "a  <sup>5</sup> c <sup>6</sup>",
        correctOption: "optionA"
    },

    {
        question: "ចូរសម្រួលកន្សោម(3ab) <sup>2</sup>",
        optionA: "9a  <sup>3</sup> b <sup>5</sup>",
        optionB: "9a  <sup><4/sup> b <sup>6</sup>",
        optionC: "9a  <sup>2</sup> b <sup>2</sup>",
        optionD: "9a  <sup>5</sup> b <sup>7</sup>",
        correctOption: "optionC"
    },

    {
        question: "ចូរសម្រួលកន្សោម(3ab <sup>2</sup>) <sup>2</sup>",
        optionA: "9a  <sup>4</sup> b <sup>5</sup> ",
        optionB: "9a  <sup>2</sup> b <sup>5</sup>",
        optionC: "9a  <sup>4</sup> b <sup>6</sup>",
        optionD: "9a  <sup>2</sup> b <sup>4</sup>",
        correctOption: "optionD"
    },

    {
        question: "ចូរសម្រួលកន្សោម(8a <sup>2</sup> c) <sup>2</sup>",
        optionA: "64a  <sup>4</sup> c <sup>2</sup>",
        optionB: "64a  <sup>3</sup> c <sup>5</sup>",
        optionC: "64a  <sup>6</sup> c <sup>8</sup>",
        optionD: "64a  <sup>7</sup> c <sup>8</sup>",
        correctOption: "optionA"
    },

    {
        question: "ចូរសម្រួលកន្សោម2 <sup>2</sup>x 2 <sup>3</sup>",
        optionA: "2  <sup>4</sup>",
        optionB: "2  <sup>6</sup>",
        optionC: "2  <sup>3</sup>",
        optionD: "2  <sup>5</sup>",
        correctOption: "optionD"
    },

    {
        question: "ចូរសម្រួលកន្សោម2 <sup>2</sup>x 2 <sup>2</sup>",
        optionA: "2  <sup>5</sup>",
        optionB: "2  <sup>4</sup>",
        optionC: "2  <sup>6</sup>",
        optionD: "2  <sup>3</sup>",
        correctOption: "optionB"
    },

    {
        question: "ចូរសម្រួលកន្សោម5 <sup>2</sup>x 5 <sup>4</sup>",
        optionA: "5  <sup>7</sup>",
        optionB: "5  <sup>6</sup>",
        optionC: "5  <sup>8</sup>",
        optionD: "5  <sup>5</sup>",
        correctOption: "optionB"
    },

    {
        question: "ចូរសម្រួលកន្សោមn x n <sup>2</sup>",
        optionA: "n  <sup>4</sup>",
        optionB: "n  <sup>5</sup>",
        optionC: "n  <sup>3</sup>",
        optionD: "n  <sup>7</sup>",
        correctOption: "optionC"
    },

    {
        question: "ចូរសម្រួលកន្សោមy <sup>5</sup> x y <sup>-2</sup>",
        optionA: "y  <sup>4</sup>",
        optionB: "y  <sup>6</sup>",
        optionC: "y  <sup>3</sup>",
        optionD: "y  <sup>7</sup>",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
window.addEventListener('click', () =>{
    document.getElementById("song").play();
});