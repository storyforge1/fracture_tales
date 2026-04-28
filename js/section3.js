/* ================= AUDIO ================= */

function playAudio(id){
let audio = document.getElementById(id);
if(audio){
audio.currentTime = 0;
audio.play();
}
}

/* ================= TRANSLATE ================= */

function toggleText(id){

const el = document.getElementById(id);

if(el.classList.contains("translated")){

/* ===== BALIK KE ENGLISH ===== */

if(id === "text1"){
el.innerText = "A narrative text is a type of writing that tells a story, often with a clear structure including a beginning, middle, and end. It usually includes characters, a setting, a conflict, and a resolution.";
}

if(id === "text2"){
el.innerText = "One unique form of narrative text is the 'fractured story', which is a creative retelling or modification of a well-known story. A fractured story keeps the basic elements of the original tale but changes certain parts such as the plot, characters, or point of view.";
}

if(id === "text3"){
el.innerText = "This type of narrative often adds humor, modern settings, or surprising twists to make the story fresh and engaging. It encourages you to think critically and creatively!";
}

el.classList.remove("translated");

}else{

/* ===== KE INDONESIA (SESUAI CLIENT) ===== */

if(id === "text1"){
el.innerText = "Teks naratif adalah jenis tulisan yang menceritakan sebuah kisah, biasanya dengan struktur yang jelas: awal, tengah, dan akhir. Isinya mencakup tokoh, latar, masalah (konflik), dan penyelesaian.";
}

if(id === "text2"){
el.innerText = "Salah satu bentuk unik teks naratif adalah 'fractured story', yaitu menceritakan kembali atau memodifikasi cerita terkenal secara kreatif. Cerita ini tetap mempertahankan elemen dasar, tapi mengubah bagian tertentu seperti alur, tokoh, atau sudut pandang.";
}

if(id === "text3"){
el.innerText = "Jenis cerita ini sering menambahkan humor, latar modern, atau kejutan (twist) yang tak terduga supaya ceritanya terasa baru dan menarik. Ini mengajak kamu buat berpikir kritis dan kreatif!";
}

el.classList.add("translated");

}

}

/* ================= NAVIGATION ================= */

function goMenu(){
window.location.href = "menuMateri.html";
}


function goQuiz(){
window.location.href = "quiz1.html";
}