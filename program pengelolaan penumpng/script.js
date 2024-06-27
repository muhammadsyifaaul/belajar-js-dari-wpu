



// alert('Selamat datang di angkot');
// let penumpang= [];


// function kelolaPenumpang() {
//     let namaPenumpang = prompt('masukkan nama anda');
//     if(penumpang.length == 0) {
//         penumpang.push(namaPenumpang);
//     }
// }

let penumpang = []
// let tambahPenumpang = function(namaPenumpang, penumpang){
//     if (penumpang.length == 0) {
//         penumpang.push(namaPenumpang)
//         return penumpang;
//     } else {
//         for (let i = 0; i < penumpang.length; i++) {
//             if (penumpang[i] == undefined) {
//                 penumpang[i] = namaPenumpang;
//                 return penumpang;
//             } else if (penumpang[i] == namaPenumpang) {
//                 console.log(`penumpang ${namaPenumpang} sudah ada di dalam angkot`)
//                 return penumpang
//             }
            
//             else if (i == penumpang.length - 1) {
//                 penumpang.push(namaPenumpang)
//                 break
//             }
//         }
//         return penumpang
//     }
// }

let hapusPemunpang = function(namaPenumpang, penumpang){
    if(penumpang == 0) {
        console.loh('angkot masih kosong')

    } else {
        for(let i = 0; i < penumpang.length; i++) {
            if(penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined
                return penumpang
            } else if(i == penumpang.length - 1) {
                console.log('nama penumpangtidak ada didalam angkot')
                return penumpang;
            }
        }
    }
    return penumpang;
 }