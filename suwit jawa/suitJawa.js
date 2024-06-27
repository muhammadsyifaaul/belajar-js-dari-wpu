// let tanya = true;

// while (tanya) {
//     // pilihan player

// let player = prompt('Pilih : Gajah, semut, orang');

// // menangkap pilihan komputer
// // membangkitkan bilangan random

// let comp = Math.random();

// if (comp < 0.34) {
//     comp = 'gajah';
// } else if (comp >= 0.34 && comp < 0.67) {
//     comp = 'orang';
// } else {
//     comp = 'semut';
// }


// let hasil = '';
// // menentukan rules

// if (player == comp) {
//     hasil = 'SERI!';
// } else if (player == 'gajah') {
//     // if (comp == 'orang') {
//     //     result = 'MENANG!';
//     // } else {
//     //     result = 'KALAH!';
//     // }

//     hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
// } else if (player == 'orang') {
//     hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
// } else if (player =='semut') {
//     hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
// } else {
//     hasil = 'anda memasukkan pilihan yang salah';
// }


// // tampilkan hasilnya

// alert ('Kamu memilih : ' + player + ' dan komputer memilih : ' + comp + '\n Hasilnya : ' + hasil);
// tanya = confirm('lagi?')
// }

// alert('terimakasih')


// const buku = 10;
// let bukuTersedia = buku;
// alert('Selamat datang di perpustakaan');
// alert('Sisa buku yang tersedia : ' + bukuTersedia);
// let offer = confirm('Apakah anda ingin meminjam buku?');

// while(offer == true && bukuTersedia > 0) {
//     let choose = prompt('Masukkan nomor buku yang ingin anda pilih!');
//     if(choose <= buku) {
//         alert('Buku dengan nomor '+choose+' telah dipilih');
//         alert('Buku tersedia');
//         bukuTersedia -= 1;
//         let offerAgain = confirm('Apakah anda ingin meminjam buku lagi?');
//         offer = offerAgain;
//     } else {
//         alert('Buku dengan nomor '+choose+' tidak tersedia');
//         offer = confirm('Apakah anda ingin memilih buku lain?');
//     }
// }

// if(bukuTersedia == 0) {
//     alert('Maaf, semua buku telah dipinjam');
// }

// alert('Terima kasih atas kunjungan anda');


// let batasSalah = 0;
// while(batasSalah <=3) {
//     // input user
// let inputUser = prompt('Tebak angka yang sesuai dengan yang komputer tentukan');

// // pilihan komuter
// const pilihanComputer = Math.floor(Math.random() * 10) + 1;


// console.log(pilihanComputer);

// // rules
// if(inputUser == pilihanComputer) {
//    let hasil = alert('anda benar');
// } else if(inputUser > pilihanComputer) { 
//     let hasil = alert('angka yang anda tebak lebih lebih besar');
//     batasSalah += 1;
// } else if (inputUser < pilihanComputer) {
//     let jawab = alert('angka yang anda tebak lebih kecil');
//     batasSalah += 1;
// } else {
//     alert('anda salah memasukkan angka');
//     batasSalah += 1;
// }
// }

// alert('Kesempatan anda habis coba lagi lain kali')


// KOde diatas salah karena pilihan komputernya berada didalam while, jadi ketika user salah maka math.random akan memlih angka lagi

let batasSalah = 0;

// pilihan komputer
const pilihanComputer = Math.floor(Math.random() * 10) + 1;
console.log(pilihanComputer);

while(batasSalah <=3) {
    // input user
    let inputUser = prompt('Tebak angka yang sesuai dengan yang komputer tentukan');

    console.log(pilihanComputer);

    // rules
    if(inputUser == pilihanComputer) {
       let hasil = alert('anda benar');
    } else if(inputUser > pilihanComputer) { 
        let hasil = alert('angka yang anda tebak lebih lebih besar');
        batasSalah += 1;
    } else if (inputUser < pilihanComputer) {
        let jawab = alert('angka yang anda tebak lebih kecil');
        batasSalah += 1;
    } else {
        alert('anda salah memasukkan angka');
        batasSalah += 1;
    }
}

alert('Kesempatan anda habis coba lagi lain kali')
