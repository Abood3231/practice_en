
let theQues = document.querySelector("main .container .ques .ques-cont");
let options = document.querySelectorAll("main .container .ques .chooses ul li");


let questions = ["Question 1", "Question 2", "Question 3"];
let answers = [["one", "two", "three", "four"], ["Aaa", "Bbb", "Ccc", "Ddd"], ["hi", "hey", "hello", "hu"]];

// console.log(answers[1][0]);

theQues.innerHTML = questions[0];
options.array.forEach(ele => {
    ele.innerHTML = answers[0];
});

