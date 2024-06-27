// const jmlSepeda = 10;
// let sepedaTerpakai = 6;

// alert('selamat datang di rental sepeda');
// alert('kami memiliki sepeda dengan model 1-10');


// let choose = prompt('silahkan pilih mau sepeda model berapa');

// if(choose <= sepedaTerpakai) {
//     alert('anda memilih sepeda model '+choose);
//     alert('maaf sepeda tersebut sedang disewa');
// } else if (choose > sepedaTerpakai && choose <= jmlSepeda) {
//     alert('anda memilih sepeda model '+choose);
//     alert('anda dapat menyewa sepeda ini');
// }else {
//     alert('maaf kami tidak memiliki model sepeda yang sesuai dengan yang anda inputkan');
// }
// const jmlSepeda = 10;
// let sepedaTerpakai = 6;

// alert('Selamat datang di rental sepeda');
// alert('Kami memiliki sepeda dengan model 1-10');

// let choose = prompt('Silahkan pilih mau sepeda model berapa');

// if(choose <= sepedaTerpakai) {
//     alert('Anda memilih sepeda model '+choose);
//     alert('Maaf, sepeda tersebut sedang disewa');
//     let chooseAgain = prompt('Silahkan pilih model sepeda lain yang tersedia');
//     if (chooseAgain > sepedaTerpakai && chooseAgain <= jmlSepeda) {
//         alert('Anda memilih sepeda model '+chooseAgain);
//         alert('Anda dapat menyewa sepeda ini');
//     } else {
//         alert('Maaf, kami tidak memiliki model sepeda yang sesuai dengan yang Anda inputkan');
//     }
// } else if (choose > sepedaTerpakai && choose <= jmlSepeda) {
//     alert('Anda memilih sepeda model '+choose);
//     alert('Anda dapat menyewa sepeda ini');
// } else {
//     alert('Maaf, kami tidak memiliki model sepeda yang sesuai dengan yang Anda inputkan');
// }


const jmlSepeda = 10;
let sepedaTerpakai = 6;

alert('Selamat datang di rental sepeda');
alert('Kami memiliki sepeda dengan model 1-10');

let choose = prompt('Silahkan pilih mau sepeda model berapa');

if (choose <= sepedaTerpakai && choose <= jmlSepeda) {
    alert('Anda memilih sepeda model ' + choose);
    alert('Maaf, sepeda tersebut sedang disewa');

    let offer = confirm('Apakah anda ingin menyewa sepeda yang lain?')

    while (offer == true) {
        let chooseAgain = prompt('silahkan pilih model sepeda yang lain');

        if (chooseAgain <= sepedaTerpakai && chooseAgain <= jmlSepeda) {
            alert('Anda memilih sepeda model ' + chooseAgain);
            alert('maaf sepeda tersebut juga sedang terpakai');
        } else if (chooseAgain > sepedaTerpakai && chooseAgain <= jmlSepeda) {
            alert('Anda memilih sepeda model ' + chooseAgain);
            alert('Anda dapat menyewa sepeda dengan model ini');
            break; // Keluar dari loop jika sepeda dapat disewa
        } else {
            alert('Maaf, kami tidak memiliki model sepeda yang sesuai dengan yang Anda inputkan');
        }
        offer = confirm('Apakah anda ingin menyewa sepeda yang lain?');
    }
    alert('Terima kasih atas kunjungan anda');

} else if (choose > sepedaTerpakai && choose <= jmlSepeda) {
    alert('Anda memilih sepeda model ' + choose);
    alert('Anda dapat menyewa sepeda ini');
} else {
    alert('Maaf, kami tidak memiliki model sepeda yang sesuai dengan yang Anda inputkan');

    let anotherOffer = confirm('Apakah anda ingin menyewa sepeda yang lain?');

    while (anotherOffer == true) {
        let chooseAgain1 = prompt('silahkan pilih model sepeda yang lain');

        if (chooseAgain1 <= sepedaTerpakai && chooseAgain1 <= jmlSepeda) {
            alert('Anda memilih sepeda model ' + chooseAgain1);
            alert('maaf sepeda tersebut juga sedang terpakai');
        } else if (chooseAgain1 > sepedaTerpakai && chooseAgain1 <= jmlSepeda) {
            alert('Anda memilih sepeda model ' + chooseAgain1);
            alert('Anda dapat menyewa sepeda dengan model ini');
            break; // Keluar dari loop jika sepeda dapat disewa
        } else {
            alert('Maaf, kami tidak memiliki model sepeda yang sesuai dengan yang Anda inputkan');
        }
        anotherOffer = confirm('Apakah anda ingin menyewa sepeda yang lain?');
    }
    alert('Terima kasih atas kunjungan anda');
}


// const jmlSepeda = 10;
// let sepedaTerpakai = 6;

// alert('Selamat datang di rental sepeda');
// alert('Kami memiliki sepeda dengan model 1-10');

// let choose = prompt('Silahkan pilih mau sepeda model berapa');

// if(choose <= sepedaTerpakai) {
//     alert('Anda memilih sepeda model '+ choose);
//     alert('Maaf, sepeda tersebut sedang disewa');
    
//     let offer = confirm('Apakah anda ingin menyewa sepeda yang lain?')

//     while(offer == true) {
//         let chooseAgain = prompt('silahkan pilih model sepeda yang lain');

//         if(chooseAgain <= sepedaTerpakai && chooseAgain <= jmlSepeda) {
//             alert('Anda memilih sepeda model '+ chooseAgain);
//             alert('maaf sepeda tersebut juga sedang terpakai');
//         }
//         else if (chooseAgain > sepedaTerpakai && chooseAgain <= jmlSepeda) {
//             alert('Anda memilih sepeda model '+ chooseAgain);
//             alert('Anda dapat menyewa sepeda dengan model ini');
//         }
//         else {
//             alert('Maaf, kami tidak memiliki model sepeda yang sesuai dengan yang Anda inputkan');
//         }
//     }
//     alert('Terima kasih atas kunjungan anda');

// } else if (choose > sepedaTerpakai && choose <= jmlSepeda) {
//     alert('Anda memilih sepeda model '+ choose);
//     alert('Anda dapat menyewa sepeda ini');
// } else {
//     alert('Maaf, kami tidak memiliki model sepeda yang sesuai dengan yang Anda inputkan');
    
//     let anotherOffer = confirm('Apakah adna ingin menyewa sepeda yang lain?');

//     while(anotherOffer == true) {
//         let chooseAgain1 = prompt('silahkan pilih model sepeda yang lain');

//         if(chooseAgain1 <= sepedaTerpakai) {
//             alert('Anda memilih sepeda model '+ chooseAgain1);
//             alert('maaf sepeda tersebut juga sedang terpakai');
//         }
//         else if (chooseAgain1 > sepedaTerpakai && chooseAgain1 <= jmlSepeda) {
//             alert('Anda memilih sepeda model '+ chooseAgain1);
//             alert('Anda dapat menyewa sepeda dengan model ini');
//         }
//         else {
//             alert('Maaf, kami tidak memiliki model sepeda yang sesuai dengan yang Anda inputkan');
//         }
//         alert('Terima kasih atas kunjungan anda');
//     }
// }
// alert('Terima kasih atas kunjungan anda');