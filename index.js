
// console.log("hello World!");

// var a = 12;

// console.log(a);

// operator pada aritmatika ( * + - /)

// mencari luas segitiga

var alas = 11;
var tinggi = 12;

var hasil = 1/2 *(alas * tinggi );
console.log(hasil);

// luas lingkaran 
var r = 12;
var r1 = 21;

var hasil = 22/7 * (r * r1);
console.log(hasil);

// operator logika 
//  || &&

// benar || benar  = true
// benar || salah = true
// salah || benar = true
// salah || salah = false 

// benar && benar = true
// benar && salah = false
// salah && salah = false 
// salah && salah = false

// let a =14 <= 19;

// console.log(a);

// let nilai = 80;

// if(nilai > 70){
//     console.log("selamat kamu lulus")
// } else{
// console.log("kamu harus belajar lagi");}
// let nilai = 102;


// if (nilai >=90 && nilai <= 100){
//     console.log(nilai + "nilai sangat memuaskan");
// } else if(nilai >=80 && nilai <= 89){
//     console.log(nilai + " nilai Memuaskan");
// }else if(nilai >=70 && nilai <= 79){
//     console.log(nilai + " nilai cukup");
// }else{
//     console.log(nilai + " nilai kurang");
// }

// const email = "firaasmawati30@gmail.com";
// const pass = "Firaasmawati30";

// if (email ===  "firaasmawati30@gmail.com" ){
//     if (pass === "Firaasmawati30"){
//         console.log("Kamu Berhasil Login")
//     }
// }

var pendapatan = 300000;
var komisi, jasa, total;

if (pendapatan >= 0 && pendapatan <= 200000){
    jasa = 10000;
    komisi = 0,1* pendapatan;
}
else if (pendapatan <= 500000)
{
    jasa = 200000;
    komisi= 0,15*pendapatan;
}
else
{
    jasa = 300000;
    komisi =0,2;
}

{
    total = komisi + jasa;
    console.log(jasa);
    console.log(komisi);
    console.log(total);
}