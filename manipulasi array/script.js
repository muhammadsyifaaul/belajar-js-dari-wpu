// menambah isi array
// let array = [];

// array.push(1);
// console.log(array);

// menghapus isi array



// menampilkan isi array
// let array = [1,2,3,4,5];

// for(i =0 ; i<array.length; i++){
//     console.log(array[i]);
// }

// method pada array

// let arr = ['sandika', 'galih', 'ujang'];

// console.log(arr.join('-'));  //membuat string dari elemen array dengan '-' sebagai separator

// arr.push('joko');   //memasukan data ke array

// arr.pop();   //menghapus data terakhir dari array

// arr.shift();   //menghapus data pertama dari array

// arr.unshift('diki');    //memasukan data ke awal array

// console.log(arr);

// cara lain untuk memasukan data ke array
// splice
// let arr2 = [1,2,3,4,5];
// memasukkan data ditengah tengah/ diantara
// rumusnya splice(index awal, mauDihapusBerapa(optional,elementBaru,...))
// arr2.splice(2, 0,'nana','budi');  //memasukan data ke array di index 2 dan membuat spasi yang lebih besar jika tidak ada spasi

// console.log(arr2);

// slice 
// rumus: slice(index awal, index akhir), note: index awal akan terbawa ke array baru
// maksudnya jika ingin mengambil data di index 1 dan 2 pada array diatas
// maka sintaksnya splice(1, 3) bukan splice(1,2)

// arr2.slice(1, 3);

// dan juga array yg dipotong akan menjadi array baru,
// jadi harus disimpan di variabel


// alert('Selamat datang di e - mart');
// alert('Silahkan belanja apa yang anda inginkan');

// let keranjangBelanja = [];

// let tambahBelanja = true;

// while(tambahBelanja){
//     let belanjaan = prompt('Masukkan barang yang ingin anda belanja');

//     keranjangBelanja.push(belanjaan);

//     let cekKeranjang = true;

//     while(cekKeranjang) {
//         for(i = 0; i < keranjangBelanja.length; i++){
//             let lanjutTambah = confirm('Apakah anda ingin melanjutkan belanja?');
//             alert('isi keranjang anda: ' + keranjangBelanja[i]);
            
//         }
//         break;
//     }
    
    
//     // if (lanjutTambah === false){
//     //     tambahBelanja = false;
//     // }
// }

// alert('Terima kasih')

// alert('Selamat datang, silahkan pilih apa yg anda inginkan');

// let keranjang = [];

// let tambahBelanja = true;

// function addBelanjaan() {
//     let belanjaan = prompt('Masukkan barang yang ingin anda belanjakan');
//     keranjang.push(belanjaan);
//     let belanjaLagi = confirm('Apakah anda ingin menambah belanjaan?')

//     if(belanjaLagi == false) {
//         tambahBelanja = false;
//     }
// }

// function pembayaran() {
//     let cekKeranjang =  true;

//     while(cekKeranjang) {
//         for(i = 0;i< keranjang.length; i++) {
//             let tampilIsi = keranjang.join('-');
            
//         }

        
        
//     }
//     let cek = confirm('Apakah anda ingin melanjutkan pembayaran?');
//         let totHarga = 100000;
//         let bayar = prompt('Masukkan jumlah uang yang anda bayarkan');

//     while(cek) {
//         switch(totHarga) {
//             case bayar < totHarga:
//                 alert('Maaf uang anda kurag');
//                 break;
//             case bayar > totHarga:
//                 alert('Ini kembalian anda :' + (bayar - totHarga));
//                 cek = false;
//         }
//     }
// }

// while (tambahBelanja) {
//     addBelanjaan();
// }

// alert('Baik anda akan diarahkan kebagian pembayaran');

// pembayaran();

// alert('Terima kasih sudah belanja');


alert('Selamat datang, silahkan pilih apa yg anda inginkan');

let keranjang = [];

let tambahBelanja = true;

function addBelanjaan() {
    let belanjaan = prompt('Masukkan barang yang ingin anda belanjakan');
    keranjang.push(belanjaan);
    let belanjaLagi = confirm('Apakah anda ingin menambah belanjaan?')

    if(belanjaLagi == false) {
        tambahBelanja = false;
    }
}

function pembayaran() {
    let cekKeranjang =  true;

    while(cekKeranjang) {
        let tampilIsi = keranjang.join('-');
        alert('Isi keranjang anda: ' + tampilIsi);
        cekKeranjang = false;
    }
    let cek = confirm('Apakah anda ingin melanjutkan pembayaran?');
    let totHarga = 100000;
    let bayar = prompt('Masukkan jumlah uang yang anda bayarkan');

    while(cek) {
        if(bayar < totHarga) {
            alert('Maaf uang anda kurang');
            bayar = prompt('Masukkan jumlah uang yang anda bayarkan');
        } else if(bayar > totHarga) {
            alert('Ini kembalian anda :' + (bayar - totHarga));
            cek = false;
        } else if(bayar == totHarga) {
            alert('Pembayaran anda sudah pas. Terima kasih.');
            cek = false;
        }
    }
}

while (tambahBelanja) {
    addBelanjaan();
}

alert('Baik anda akan diarahkan kebagian pembayaran');

pembayaran();

alert('Terima kasih sudah belanja');
