var jmlAngkot = 10;
angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot<= jmlAngkot;noAngkot++) {
    if (noAngkot<= 6) {
        console.log('Angkot No. '+ noAngkot+' Sedang Beroperasi');
    } else if (noAngkot %2  == 1 && noAngkot <= jmlAngkot) {
            console.log('Angkot No.'+ noAngkot+ (' sedang lembur'));
    } 
    
    else {
        console.log('Angkot No. ' +noAngkot+' Sedang tidak beroperasi');
    }
}


// const jmlAngkot = 10;
// let angkotBeroperasi = 6;

// let check = prompt('Angkot nomer berapa yang anda cek kondisinya?')

// if (check <= angkotBeroperasi) {
//     alert('Angkot nomer '+check+' sedang beroperasi');
// } else if(check % 2 == 0 && check <= jmlAngkot) {
//     alert('Angkot nomer '+check+' sedang lembur');
// } else {
//     alert('Angkot nomer '+check+' sedang tidak beroperasi');
// }