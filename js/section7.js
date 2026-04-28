function playAudio(id){
document.getElementById(id).play();
}

function toggleText(id){
const el = document.getElementById(id);

if(el.classList.contains("indo")){
el.innerHTML = el.dataset.en;
el.classList.remove("indo");
}else{
el.dataset.en = el.innerHTML;

if(id==="text1"){
el.innerHTML = `Simple past tense adalah bentuk kalimat untuk menyatakan aksi atau kejadian yang terjadi di masa lalu pada waktu yang spesifik. Bentuk tense ini ditandai dengan penggunaan kata kerja bentuk kedua (V2).

Keterangan waktu:
• Kemarin
• Terakhir (minggu lalu, bulan lalu, tahun lalu)
• ... yang lalu (dua hari yang lalu, setahun yang lalu)
• Pagi ini`;
}

if(id==="text2"){
el.innerHTML = `Menjelaskan kejadian yang terjadi di masa lalu pada waktu tertentu.
Contoh: Murid-murid mengunjungi Monas minggu lalu.`;
}

if(id==="text3"){
el.innerHTML = `Menunjukkan bahwa suatu aksi terjadi dalam periode tertentu di masa lalu.

Contoh: Ayah saya tinggal di Qatar selama lima tahun.`;
}

if(id==="text4"){
el.innerHTML = `Menjelaskan kebiasaan di masa lalu.
Contoh: Saat saya tinggal di Jakarta, saya selalu membeli soto betawi.`;
}

if(id==="text5"){
el.innerHTML = `Menunjukkan emosi di masa lalu.
Contoh: Saya sangat senang ketika orang tua saya datang ke sini.`;
}

if(id==="text6"){
el.innerHTML = `Catatan: Was digunakan untuk (I, He, She, It) | Were digunakan untuk (You, They, We)`;
}

el.classList.add("indo");
}
}

function goQuiz(){
window.location.href="quiz7.html";
}

function goMenu(){
window.location.href="menuMateri.html";
}

