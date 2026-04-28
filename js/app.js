function startApp(){

let name = document.getElementById("name").value;
let kelas = document.getElementById("class").value;

if(name === "" || kelas === ""){
alert("Please fill your name and class!");
return;
}

/* SIMPAN */
localStorage.setItem("nama", name);
localStorage.setItem("kelas", kelas);

/* TEST */
alert("Saved!\n" + name + " - " + kelas);

}