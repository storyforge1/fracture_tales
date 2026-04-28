// ===== AUDIO =====
function playAudio(id){
let audio = document.getElementById(id);
if(audio){
audio.currentTime = 0;
audio.play();
}
}

// ===== TRANSLATE =====
function toggleText(id){
let el = document.getElementById(id);

if(el.dataset.id === "false"){

if(id === "text1"){
el.innerHTML = "Teks naratif adalah teks yang menceritakan sebuah kisah tentang suatu peristiwa secara kronologis. Secara umum, cerita naratif adalah kisah imajinatif atau fiktif yang berasal dari imajinasi penulis. Fungsi teks naratif adalah untuk menghibur pembaca atau pendengar.";
}

if(id === "text2"){
el.innerHTML = `
1. Orientation (Pengenalan)<br>
Memperkenalkan tokoh, waktu, dan tempat.<br><br>
2. Complication (Masalah)<br>
Muncul konflik atau masalah dalam cerita.<br><br>
3. Resolution (Penyelesaian)<br>
Masalah diselesaikan (happy/sad ending).
`;
}

if(id === "text3"){
el.innerHTML = "Pada zaman dahulu, ada dua hewan bernama Sura dan Baya. Sura adalah seekor hiu, dan Baya adalah seekor buaya. Mereka tinggal di laut dan merupakan teman baik.";
}

if(id === "text4"){
el.innerHTML = "Suatu hari, Sura dan Baya sedang mencari makanan. Tiba-tiba mereka menemukan seekor kambing.“Ini makananku!” kata Baya. “Tidak, ini milikku!” kata Sura. Mereka bertengkar dan akhirnya berkelahi memperebutkan kambing tersebut. Setelah lama bertarung, mereka merasa sangat lelah. Kemudian, mereka membuat kesepakatan untuk tinggal di tempat yang berbeda. Sura tinggal di laut, dan Baya tinggal di darat. Namun, suatu hari Sura melanggar janji. Ia pergi ke sungai tempat Baya tinggal untuk mencari makanan. Baya sangat marah saat melihat Sura. Mereka pun bertarung lagi dengan sengit.";
}

if(id === "text5"){
el.innerHTML = "Akhirnya, mereka saling melukai. Sura menggigit ekor Baya, dan Baya menyerang Sura. Pada akhirnya, Sura kembali ke laut, dan Baya tetap di darat. Sejak saat itu, mereka tidak pernah bertemu lagi.";
}

if(id === "text6"){
el.innerHTML = `
Orientation → pengenalan Sura & Baya<br>
Complication → konflik (berebut makanan & melanggar janji)<br>
Resolution → berpisah selamanya
`;
}

el.dataset.id = "true";

}else{
location.reload();
}
}

// ===== NAVIGATION (INI YANG PENTING) =====
function goQuiz(){
window.location.href = "quiz2.html";
}


function goMenu(){
window.location.href = "menuMateri.html";
}