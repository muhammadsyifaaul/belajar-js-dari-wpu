// let angka = [1,2,3,4,5,6,7,8]
// let nama = ['saya', 'dia', 'kamu', 'ujang']
// angka.forEach(function(e) {
//     console.log(e)
// });  // untuk setiap elemen yang ada dalam aray angka, lakukan fungsi berikut ini,
// e disitu mengacu pada setiap elemen dalam array

// funsi diatas sama saja dgn

// let cetak = function(e) {   
//     console.log(e)
// }

// angka.forEach(cetak);

// nama.forEach(function(e , i) {   // e mewakili elemen dalam array, i mewakili index dari setiap elemennya
//     console.log('Mahasiswa ke - ' + (i+1) + 'adalah' + e)
// });

// map
// map sama seperti foreach, tapi map mengembalikan array
// let angka1 = [1,2,3,4,5,6,7,8]

// let angka2 = angka1.map(function(e) {
//     return e *2;
// });

// console.log(angka2.join('-'))


// sort
// mengurutkan isi array

let angka = [1,10,2,20,5,4,3,6]
angka.sort(function(a,b) {
    return a-b;
});

console.log(angka.join('-'))