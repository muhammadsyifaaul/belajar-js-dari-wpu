const jmlMobil = 20;
let mobilDisewa = 10;

alert('Selamat datang di rental mobil kami');

alert('Kami memiliki mobil dengan model 1-20');

let choose = prompt('Silahkan pilih mau mobil model berapa');

if(choose <= mobilDisewa) {
    alert('Anda ingin menyewa mobil dengan model '+choose);
    alert('Maaf mobil dengan model tersebut sedang disewa'); 
    alert('Terima kasih atas kunjungan anda');
} else if (choose > mobilDisewa && choose <= jmlMobil) {
    alert('Anda ingin menyewa mobil dengan model '+choose);
    alert('Anda dapat menyewa mobil ini');
} else {
    alert('Maaf kami tidak memiliki mobil dengan model yang sesuai dengan yang Anda inputkan');

    let offerAgain = confirm('Apakah anda ingin menyewa mobil yang lain?');

    while(offerAgain == true) {
        let chooseAgain1 = prompt('silahkan pilih model mobil yang lain');

        if(chooseAgain1 <= mobilDisewa) {
            alert('Anda ingin menyewa mobil dengan model '+chooseAgain1);
            alert('Maaf mobil dengan model tersebut juga sedang disewa');
        }
        else if(chooseAgain1 > mobilDisewa && chooseAgain1 <= jmlMobil) {
            alert('Anda ingin menyewa mobil dengan model '+chooseAgain1);
            alert('Anda dapat menyewa mobil ini');
            break;
        }
        else {
            alert('Maaf kami tidak memiliki mobil dengan model yang sesuai dengan yang Anda inputkan');
        }
    }
    alert('Terima kasih atas kunjungan anda');
}

// let jmlMobil = 20
// let mobilDisewa = 10

// alert('Selamat datang di rental mobil kami')
// alert('Kami memiliki mobil dengan model 1-20')

// let choose = prompt('Silahkan pilih mau mobil model berapa')

// if (choose <= mobilDisewa) {
//   alert('Anda ingin menyewa mobil dengan model ' + choose)
//   alert('Maaf mobil dengan mode yang anda pilih saat ini sedang disewa')
//   let offer = confirm('Apakah anda ingin menyewa mobil yang lain?')

//   while (offer == true) {
//     let chooseAgain = prompt('silahkan pilih model mobil yang lain')

//     if (chooseAgain <= mobilDisewa) {
//       alert('Anda ingin menyewa mobil dengan model ' + chooseAgain)
//       alert('Maaf mobil dengan model tersebut juga sedang disewa')
//     } else if (chooseAgain > mobilDisewa && chooseAgain <= jmlMobil) {
//       alert('Anda ingin menyewa mobil dengan model ' + chooseAgain)
//       alert('Anda dapat menyewa mobil ini')
//       break
//     } else {
//       alert(
//         'Maaf kami tidak memiliki mobil dengan model yang sesuai dengan yang Anda inputkan'
//       )

//       let offerAgain = confirm('Apakah anda ingin menyewa mobil yang lain?')

//       while (offerAgain == true) {
//         let chooseAgain1 = prompt('silahkan pilih model mobil yang lain');
//         if (chooseAgain1 <= mobilDisewa) {
//           alert('Anda ingin menyewa mobil dengan model ' + chooseAgain1);
//           alert('Maaf mobil dengan model tersebut juga sedang disewa');
//           break;
//         } else if (offerAgain > mobilDisewa && chooseAgain1 <= jmlMobil) {
//             alert('Anda ingin menyewa mobil dengan model ' + chooseAgain1);
//             alert('Anda dapat menyewa mobil ini');
//             break;
//         } else {
//             alert('Maaf kami tidak memiliki mobil dengan model yang sesuai dengan yang Anda inputkan');
//             break;
//         }
//       }
//       alert('Terima kasih atas kunjungan anda')
//     }
//   }
// } else if (choose > mobilDisewa && choose <= jmlMobil) {
//   alert('Anda ingin menyewa mobil dengan model ' + choose)
//   alert('Anda dapat menyewa mobil ini');
// } else {
//   alert(
//     'Maaf kami tidak memiliki mobil dengan model yang sesuai dengan yang Anda inputkan'
//   )
// }
