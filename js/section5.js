// ================= AUDIO =================
function playAudio(id){
let audio = document.getElementById(id);
if(audio){
audio.currentTime = 0;
audio.play();
}
}

// ================= TRANSLATE =================
function toggleText(id){

let el = document.getElementById(id);

if(el.dataset.id === "en"){

if(id==="text1"){
el.innerHTML = `Action verbs adalah kata kerja yang menunjukkan tindakan atau aktivitas nyata yang dilakukan oleh tokoh dalam cerita. Kata kerja ini membantu pembaca memahami apa yang terjadi dan membuat cerita menjadi lebih hidup.<br><br>

Contoh:<br>
Sura dan Baya bertarung memperebutkan kambing.<br>
Anak itu berlari dengan cepat.<br><br>

Action verbs penting karena membuat cerita lebih hidup dan mudah dibayangkan.`;
}

if(id==="text2"){
el.innerHTML = `Simple past tense digunakan untuk menyatakan kejadian atau tindakan yang sudah terjadi di masa lalu. Teks naratif biasanya menggunakan bentuk ini karena menceritakan kejadian yang sudah berlalu.<br><br>

Rumus:<br>
Subject + Verb 2<br><br>

Contoh:<br>
go → went<br>
eat → ate<br>
fight → fought<br><br>

Kalimat:<br>
Mereka menemukan seekor kambing.<br>
Sura pergi ke sungai.<br><br>

Penggunaan past tense membuat cerita jelas bahwa peristiwa tersebut terjadi di masa lalu.`;
}

if(id==="text3"){
el.innerHTML = `Time conjunction adalah kata yang digunakan untuk menghubungkan peristiwa dalam cerita berdasarkan urutan waktu. Kata ini membantu pembaca mengikuti alur cerita dengan mudah.<br><br>

Contoh:<br>
then (kemudian), suddenly (tiba-tiba), after that (setelah itu), finally (akhirnya)<br><br>

Kalimat:<br>
Tiba-tiba, mereka melihat seekor kambing.<br>
Kemudian, mereka mulai bertarung.<br><br>

Kata ini membuat cerita lebih teratur dan tidak membingungkan.`;
}

if(id==="text4"){
el.innerHTML = `Dialog adalah percakapan antara tokoh dalam cerita. Biasanya ditulis menggunakan tanda petik (“ ”). Dialog membantu menunjukkan perasaan, pikiran, dan interaksi antar tokoh.<br><br>

Contoh:<br>
“Ini makananku!” kata Baya.<br>
“Tidak, ini milikku!” kata Sura.<br><br>

Dialog membuat cerita terasa lebih nyata dan menarik.`;
}

if(id==="text5"){
el.innerHTML = `Descriptive language adalah bahasa yang digunakan untuk menggambarkan tokoh, perasaan, dan situasi dalam cerita. Hal ini membantu pembaca membayangkan cerita dengan jelas.<br><br>

Contoh:<br>
marah, lelah, bahagia, cantik<br><br>

Kalimat:<br>
Baya sangat marah.<br>
Mereka merasa lelah setelah bertarung.<br><br>

Bahasa ini membuat cerita lebih hidup dan penuh emosi.`;
}

if(id==="text6"){
el.innerHTML = `Temporal conjunction adalah kata yang digunakan untuk menunjukkan hubungan waktu antar peristiwa secara lebih rinci.<br><br>

Contoh:<br>
when (ketika), before (sebelum), after (setelah), until (sampai)<br><br>

Kalimat:<br>
Ketika Sura datang, Baya marah.<br>
Setelah bertarung, mereka beristirahat.<br><br>

Kata ini membantu menunjukkan hubungan waktu yang jelas dalam cerita.`;
}

el.dataset.id = "id";

}else{
location.reload();
}

}

// ================= NAVIGATION =================

// tombol QUIZ
document.addEventListener("DOMContentLoaded", function(){

let quizBtn = document.getElementById("startQuizBtn");
if(quizBtn){
quizBtn.onclick = function(){
window.location.href = "quiz3.html";
};
}

});

// tombol BACK
function goMenu(){
window.location.href = "menuMateri.html";
}

