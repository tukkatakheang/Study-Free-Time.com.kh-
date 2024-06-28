//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        question: "តើទន្លេមេគង្គមានប្រវែងប៉ុន្មាន?",
        optionA: "ប្រហែល ៥០០០គីឡូម៉ែត្រ",
        optionB: "ប្រហែល ៤២០០គីឡូម៉ែត្រ",
        optionC: "ប្រហែល ៤៣០០គីឡូម៉ែត្រ",
        optionD: "ប្រហែល ៤០០០គីឡូម៉ែត្រ",
        correctOption: "optionB"
    },
    {
        question: "តើទន្លេមេគង្គឆ្លងកាត់ប្រទេសចំនួនប៉ុន្មាន?",
        optionA: "ចំនួន៩ប្រទេស",
        optionB: "ចំនួន៨ប្រទេស",
        optionC: "ចំនួន៧ប្រទេស",
        optionD: "ចំនួន៦ប្រទេស",
        correctOption: "optionD"
    },{
        question: "តើប្រទេសកម្ពុជាមានប៉ុន្មានខេត្តក្រុង?",
        optionA: "២៥ ខេត្ត-ក្រុង",
        optionB: "២៤ ខេត្ត-ក្រុង",
        optionC: "២៣ ខេត្ត-ក្រុង",
        optionD: "៣០ ខេត្ត-ក្រុង",
        correctOption: "optionA"
    },{
        question: "តើទន្លេមេគង្គគ្រប់ដណ្តប់លើផ្ទៃដីប្រហែលប៉ុន្មានគីឡូម៉ែត្រការ៉េ?",
        optionA: "ប្រហែល ២.៥លានគីឡូម៉ែត្រការ៉េ",
        optionB: "ប្រហែល ២.៦លានគីឡូម៉ែត្រការ៉េ",
        optionC: "ប្រហែល ២.៧លានគីឡូម៉ែត្រការ៉េ",
        optionD: "ប្រហែល ២.៩លានគីឡូម៉ែត្រការ៉េ",
        correctOption: "optionB"
    },{
        question: "តើបារាំងចូលមកដាក់អាណានិគមក្នុងប្រទេសកម្ពុជានៅឆ្នាំណា?",
        optionA: "១៨៧១",
        optionB: "១៨៨២",
        optionC: "១៨១០",
        optionD: "១៨៦៣",
        correctOption: "optionD"
    },{
        question: "តើប្រទេសកម្ពុជាទទួលបានឯករាជ្យពីបារាំងនៅឆ្នាំណា?",
        optionA: "ថ្ងៃទី៩ វិច្ឆិកា ឆ្នាំ​១៩៥៣",
        optionB: "ថ្ងៃទី៧ មករា ឆ្នាំ​១៩៥៣",
        optionC: "ថ្ងៃទី៩ ឧសភា ឆ្នាំ​១៩៥៣",
        optionD: "ថ្ងៃទី១០​ ធ្នូ  ឆ្នាំ​១៩៥៣",
        correctOption: "optionA"
    },{
        question: "តើប្រទេសកម្ពុជាបានជាប់ក្រោមអាណានិគមនិយមបារាំងចំនួនប៉ុន្មានឆ្នាំ?",
        optionA: "ប្រមាណ ៦០ឆ្នាំ",
        optionB: "ប្រមាណ ៧១ឆ្នាំ",
        optionC: "ប្រមាណ​ ៩០ឆ្នាំ",
        optionD: "ប្រមាណ ៨០ឆ្នាំ",
        correctOption: "optionC"
    },{
        question: "តើវិមានឯករាជ្យត្រូវបានកសាងក្នុងរាជព្រះបាទអង្គណា?",
        optionA: "ព្រះបាទនរោត្តម សីហនុ",
        optionB: "ព្រះបាទនរោត្តម សីហមុនី",
        optionC: "ព្រះបាទស៊ីសុវត្ថិ មុនីវង្ស",
        optionD: "ព្រះបាទនរោត្តម សុរាម្រិត",
        correctOption: "optionD"
    },{
        question: "តើសង្គ្រាមលោកលើកទី២កើតឡើងពីឆ្នាំណាដល់ឆ្នាំណា?",
        optionA: "ឆ្នាំ១៩៧១ ដល់​ឆ្នាំ១៩៨៥",
        optionB: "ឆ្នាំ១៩៣៩ ដល់​ឆ្នាំ១៩៤៥",
        optionC: "ឆ្នាំ១៩២៨ ដល់​ឆ្នាំ១៩៩៨",
        optionD: "ឆ្នាំ១៩៣៩ ដល់​ឆ្នាំ១៩៥១",
        correctOption: "optionB"
    },{
        question: "តើសង្គ្រាមលោកលើកទី១ពីឆ្នាំណាដល់ឆ្នាំណា?",
        optionA: "ឆ្នាំ១៩១៤ដល់ឆ្នាំ១៩១៧",
        optionB: "ឆ្នាំ១៩១៥ដល់ឆ្នាំ១៩២៣",
        optionC: "ឆ្នាំ១៩១៤ដល់ឆ្នាំ១៩១៨",
        optionD: "ឆ្នាំ១៩១៧ដល់ឆ្នាំ១៩១៨",
        correctOption: "optionC"
    },{
        question: "តើអាមេរិកបានទម្លាក់គ្រាប់បែកវិទ្យុសកម្ម(បរមាណូ)ទៅលើទីក្រុងណាខ្លះរបស់ប្រទេសជប៉ុន?",
        optionA: "ទីក្រុងហ៉ុីរ៉ូសុីម៉ា និងទីក្រុងណាហ្គាសាគី",
        optionB: "ទីក្រុងហុងស្ស៊ូ​ និង ហុកកៃដូ",
        optionC: "ទីក្រុងហុងស្ស៊ូ និង ទីក្រុងហុកកៃដូ",
        optionD: "ទីក្រុងអូគីណាវ៉ា និង ទីក្រុងតូក្យូ",
        correctOption: "optionA"
    },{
        question: "តើកប៉ាល់ទីតានិចត្រូវបានលិចនៅឆ្នាំណា?",
        optionA: "ឆ្នាំ១៩១៤",
        optionB: "ឆ្នាំ១៩១៩",
        optionC: "ឆ្នាំ១៩១២",
        optionD: "ឆ្នាំ១៩១៦",
        correctOption: "optionC"
    },{
        question: "តើប្រសាទពីរ៉ាមិតមានអាយុកាលប៉ុន្មានឆ្នាំ?",
        optionA: "ជាង៥៤០០ឆ្នាំ",
        optionB: "ជាង៤៥០០ឆ្នាំ",
        optionC: "ជាង៧០០០ឆ្នាំ",
        optionD: "ជាង៩៥០០ឆ្នាំ",
        correctOption: "optionB"
    },{
        question: "តើជប៉ុនបានមកត្រួតត្រាប្រទេសកម្ពុជាប៉ុន្មានឆ្នាំ?",
        optionA: "ឆ្នាំ ១៩៤១ និង ១៩២៣",
        optionB: "ឆ្នាំ ១៩៤១ និង ១៩៤៥",
        optionC: "ឆ្នាំ ១៩២៣ និង ១៩៤៨៩",
        optionD: "ឆ្នាំ ១៩៣៤ និង ១៩៥៦",
        correctOption: "optionB"
    },{
        question: "តើប្រទេសកម្ពុជាមានផ្ទៃដីប៉ុន្មានគីឡូម៉ែត្រការ៉េ?",
        optionA: "សរុប ១៨១,០៣៥ គីឡូម៉ែត្រការ៉េ",
        optionB: "សរុប ២០០១,០៣៥ គីឡូម៉ែត្រការ៉េ",
        optionC: "សរុប ១៤៥,០៣៥ គីឡូម៉ែត្រការ៉េ",
        optionD: "សរុប ១១២,០៣៥ គីឡូម៉ែត្រការ៉េ",
        correctOption: "optionA"
    },{
        question: "តើខ្មែរក្រហមបានសម្លាប់ប្រជាជនខ្មែរអស់ប៉ុន្មាននាក់?",
        optionA: "ជាង ៣លាននាក់",
        optionB: "ជាង ៤លាននាក់",
        optionC: "ជាង ២លាននាក់",
        optionD: "ជាង ៥លាននាក់",
        correctOption: "optionC"
    },{
        question: "តើរបបខ្មែរក្រហមកើឡើងពីឆ្នាំណាដល់ឆ្នាំណា?",
        optionA: "ឆ្នាំ១៩១៧​ ដល់ ឆ្នាំ១៩៨៧",
        optionB: "ឆ្នាំ១៨៧៥ ដល់​ ឆ្នាំ១៩៧០",
        optionC: "ឆ្នាំ១៩២៣ ដល់ ឆ្នាំ១៩៧៥",
        optionD: "ឆ្នាំ១៩៧៥ ដល់ ឆ្នាំ១៩៧៩",
        correctOption: "optionD"
    },

    

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