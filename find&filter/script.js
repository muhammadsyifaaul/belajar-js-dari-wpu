// filter: mencari nilai pada array, dan mengembalikannya dalam bentuk array

// let angka = [1,2,3,4,5,6,7]

// let angka2 = angka.filter(function(e) {
//     // return e == 5;
//     return e > 5 
// })

// let angka2 = angka.find(function(e) {
    // return e == 5;
    // return e > 5 
// })

// console.log(angka2)

// find : sama seperti filter, tapi hanya menampilkan satu nilai
// console.log(angka2)


alert('Selamat datang di toko buku online kami');
alert('Silahkan cari buku yang anda inginkan. Kami menyediakan buku dengan genre sejarah, biography, dan komik');

let sejarah = ['1917','World War 2','World War 1'];
let biography = ['The Last War','The Declaration of Independence','The Age of Sailors'];
let komik = ['Hyouka', 'Konosuba', 'Naruto'];
let search = ''
let pickGenre = prompt('Anda ingin buku dengan genre sejarah, biography, atau komik?');
function bukuSejarah() {
    search = prompt('Masukkan judul buku sejarah yang anda inginkan');
    let cekInArray = sejarah.find(function(e) {
        return e.toLowerCase() == search.toLowerCase();
    }) ;
    if (cekInArray) {
        alert('Buku yang anda cari ada di dalam toko kami');
    } else {
        alert('Maaf, buku yang anda cari tidak ada di dalam toko kami');
    }
}
function bukuBiography() {
    search = prompt('Masukkan judul buku biography yang anda inginkan');
    let cekInArray = biography.find(function(e) {
        return e.toLowerCase() == search.toLowerCase();
    }) ;
    if (cekInArray) {
        alert('Buku yang anda cari ada di dalam toko kami');
    } else {
        alert('Maaf, buku yang anda cari tidak ada di dalam toko kami');
    }
}
function bukuKomik() {
    search = prompt('Masukkan judul buku komik yang anda inginkan');
    let cekInArray = komik.find(function(e) {
        return e.toLowerCase() == search.toLowerCase();
    }) ;
    if (cekInArray) {
        alert('Buku yang anda cari ada di dalam toko kami');
    } else {
        alert('Maaf, buku yang anda cari tidak ada di dalam toko kami');
    }
}

if(pickGenre.toLowerCase() == 'sejarah') {
    bukuSejarah();
} else if (pickGenre.toLowerCase() == 'biography') {
    bukuBiography();
} else if (pickGenre.toLowerCase() == 'komik') {
    bukuKomik();
} else {
    alert('Maaf, genre buku yang anda cari tidak tersedia');
}
