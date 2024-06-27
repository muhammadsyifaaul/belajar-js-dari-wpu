// var jmlAngkot = 10;
// angkotBeroperasi = 6;

// for (var noAngkot = 1; noAngkot<= jmlAngkot;noAngkot++) {
//     if (noAngkot<= 6  && noAngkot != 5) {
//         console.log('Angkot No. '+ noAngkot+' Sedang Beroperasi');
//     } else if (noAngkot===8 || noAngkot===10 || noAngkot===5) {
//             console.log('Angkot No.'+ noAngkot+ (' sedang lembur'));
//     }
//     else {
//         console.log('Angkot No. ' +noAngkot+' Sedang tidak beroperasi');
//     }
// }

const jmlAngkot = 20;
let angkotBeroperasi = 10;

for(let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroperasi && noAngkot % 2 == 0 && noAngkot != 4) {
        console.log('Angkot No.'+ noAngkot +' sedang kerja keras bagai kuda');
    } else if(noAngkot % 2 == 1 && noAngkot <= angkotBeroperasi) {
        console.log('Angkot No.'+ noAngkot +' sedang kerja santai');
    } else if(noAngkot <= jmlAngkot && noAngkot % 2 == 0) {
        console.log('Angkot No.'+ noAngkot +' sedang ngopi di pinggiran bakhmut');
    } else {
        console.log('Angkot No.'+ noAngkot +' sedang ngopi di pinggiran kupyansk');
    }
}