const questions = [
    {
        'que':'Which of the following is a markup language?',
        'a':'Javascript',
        'b':'CSS',
        'c':'HTML',
        'd':'php',
        'Correct':'c'
    },
    {
        'que':'How can you open a link in a new browser window?',
        'a':'_blank',
        'b':'Target',
        'c':'Same',
        'd':'Open',
        'Correct':'a'
    },
    {
        'que':'The default link color for hyperlinks:',
        'a':'Green',
        'b':'Blue',
        'c':'Purple',
        'd':'Red',
        'Correct':'b'
    },
    {
        'que':'To make a comment in HTML you use?',
        'a':'#',
        'b':"/*",
        'c':'//',
        'd':'<!--  -->',
        'Correct':'d'
    }
]

let index = 0;
let total = questions.length;
let right = 0,
wrong = 0;
const queBox = document.getElementById('que-box')
const optionInput = document.querySelectorAll('.options')
const loadquestion = () => {
    if (index===total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    queBox.innerText = `${index+1}. ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () =>{
    const data = questions[index]
    const ans = getAnswer()
    console.log(ans,data.Correct)
    if(ans === data.Correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getAnswer = () =>{
    let answer;
    optionInput.forEach(
    (input)=>{
        if(input.checked){
            answer = input.value;
        }
    }
)
return answer;
}

const reset = () => {
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                return input.checked = false;
            }
            
        }
    )
}

const endQuiz = () =>{
    document.getElementById('box').innerHTML = `
    <div style="text-align:center;"> 
    <h1 style="color:lime">Thank you for playing the Quiz!</h1>
    <h2>Total questions ${total}
    <h2 style="color:green">Correct answer: ${right}</h2>
    <h2 style="color:red" >Wrong answer: ${wrong}</h2>
    </div>
    `
}
loadquestion();