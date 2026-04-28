function playAudio(id){
document.getElementById(id).play();
}

// TEXT 1
function toggleText(id){
const el = document.getElementById(id);

if(el.classList.contains("indo")){
el.innerHTML = el.dataset.en;
el.classList.remove("indo");
}else{
el.dataset.en = el.innerHTML;

el.innerHTML = `Sebelum menulis, tentukan apa yang ingin diubah (fracture).
• Asli: Rebutan kambing (makanan)
• Fractured: Rebutan smartphone terbatas (versi modern)`;

el.classList.add("indo");
}
}

// TABLE TOGGLE
function toggleTable(tableId, lessonId){

const table = document.getElementById(tableId);
const lesson = document.getElementById(lessonId);

if(table.classList.contains("indo")){

table.innerHTML = table.dataset.en;
lesson.innerHTML = lesson.dataset.en;

table.classList.remove("indo");

}else{

table.dataset.en = table.innerHTML;
lesson.dataset.en = lesson.innerHTML;

if(tableId==="table1"){
table.innerHTML = `
<tr>
<th>Asli (LKS)</th>
<th>Versi Fractured (New)</th>
</tr>
<tr>
<td>
Dahulu kala, ada dua hewan, Sura dan Baya. Sura adalah seekor hiu dan Baya adalah seekor buaya. Mereka tinggal di tepi laut.
</td>
<td>
Dahulu kala, Sura dan Baya adalah sahabat karib. Sura adalah hiu yang keren dan Baya adalah buaya yang modis. Mereka tinggal di apartemen besar di kota Surabaya.
</td>
</tr>
`;

lesson.innerHTML = `Pelajaran: Kita mengubah latar dari laut menjadi apartemen di kota agar terasa lebih modern.`;
}

if(tableId==="table2"){
table.innerHTML = `
<tr>
<th>Asli (LKS)</th>
<th>Versi Fractured (New)</th>
</tr>
<tr>
<td>
Suatu hari, Sura dan Baya mencari makanan. Tiba-tiba Baya melihat kambing. Mereka berebut kambing. Sura melanggar janji dan pergi ke sungai. Baya marah dan mereka bertarung lagi.
</td>
<td>
Suatu hari, Sura dan Baya mencari gadget baru. Baya melihat Gold Phone edisi terbatas. Mereka bertengkar. Sura membeli semua casing di mall. Baya sangat marah.
</td>
</tr>
`;

lesson.innerHTML = `Pelajaran: Kita mengubah objek dari kambing menjadi Gold Phone dan tempat ke mall, tetapi tetap menggunakan Simple Past Tense.`;
}

if(tableId==="table3"){
table.innerHTML = `
<tr>
<th>Asli (LKS)</th>
<th>Versi Fractured (New)</th>
</tr>
<tr>
<td>
Sura menyerah dan kembali ke laut. Baya senang.
</td>
<td>
Mereka tidak berkelahi. Mereka melakukan dance battle TikTok. Sura kalah dan pulang. Baya senang.
</td>
</tr>
`;

lesson.innerHTML = `Pelajaran: Kita mengubah aksi berkelahi menjadi sesuatu yang lucu seperti dance battle.`;
}

table.classList.add("indo");
}
}

function goMenu(){
window.location.href="menuMateri.html";
}

function goNext(){
window.location.href="section9.html";
}