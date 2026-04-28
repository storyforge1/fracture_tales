function checkQuiz(){

let score = 0;

/* 🔥 UBAH JAWABAN DI SINI */
const answers = {
q1:"b",
q2:"c"
};

for(let key in answers){

let user = document.querySelector(`input[name="${key}"]:checked`);

if(user && user.value === answers[key]){
score++;
}

}

document.getElementById("result").innerHTML =
"Score: " + score;
}

function goBack(){
window.location.href = "section4.html";
}