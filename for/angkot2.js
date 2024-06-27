var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi) {
    console.log('Angkot No.'+noAngkot+'beroperasi dengan baik');
    noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1;noAngkot<=jmlAngkot;noAngkot++){
    console.log('Angkot No. '+noAngkot+' sedang tidak beroperasi')
}

// let angka = prompt('masukkan yang ingin anda hitung ganjil genapnya') ;

// for(angka = 1; angka <= 10; angka++) {
//     if(angka % 2 == 0) {
//         console.log(angka + ' adalah angka genap');
//     } else {
//         console.log(angka + ' adalah angka ganjil');
//     }
// }