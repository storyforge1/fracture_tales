function playAudio(id){
let audio = document.getElementById(id);
if(audio){
audio.currentTime = 0;
audio.play();
}
}

function toggleText(id){

let el = document.getElementById(id);

if(el.dataset.id === "en"){

if(id==="text1"){
el.innerHTML = `Fable adalah cerita yang menggunakan hewan sebagai tokoh dan mengandung pesan moral. Hewan dalam cerita bertingkah seperti manusia.<br><br>
Contoh: Singa dan Tikus`;
}

if(id==="text2"){
el.innerHTML = `Myth adalah cerita tradisional yang menjelaskan peristiwa alam atau kepercayaan, biasanya melibatkan dewa atau makhluk gaib.<br><br>
Contoh: cerita tentang dewa-dewi`;
}

if(id==="text3"){
el.innerHTML = `Legend adalah cerita tentang asal-usul tempat atau peristiwa sejarah, yang belum tentu benar tetapi dipercaya oleh masyarakat.<br><br>
Contoh: Legenda Surabaya`;
}

if(id==="text4"){
el.innerHTML = `Fairy tale adalah cerita yang mengandung unsur sihir dan fantasi, seperti peri, putri, atau penyihir.<br><br>
Contoh: Cinderella`;
}

if(id==="text5"){
el.innerHTML = `Science fiction adalah cerita tentang masa depan, teknologi, atau luar angkasa.<br><br>
Contoh: cerita robot atau perjalanan luar angkasa`;
}

if(id==="text6"){
el.innerHTML = `Horror adalah cerita yang bertujuan untuk menakut-nakuti pembaca, biasanya berisi hantu atau kejadian menyeramkan.`;
}

if(id==="text7"){
el.innerHTML = `Mystery adalah cerita yang berisi masalah atau kejahatan yang harus dipecahkan.<br><br>
Contoh: cerita detektif`;
}

if(id==="text8"){
el.innerHTML = `Historical story adalah cerita yang berdasarkan kejadian nyata di masa lalu, meskipun bisa ditambahkan imajinasi.`;
}

el.dataset.id = "id";

}else{
location.reload();
}

}

// NAV
document.addEventListener("DOMContentLoaded", function(){

document.getElementById("startQuizBtn").onclick = function(){
window.location.href = "quiz4.html";
};

});

function goMenu(){
window.location.href = "menuMateri.html";
}

