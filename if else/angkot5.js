var jmlAngkot = 10;
angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot<= jmlAngkot;noAngkot++) {
    if (noAngkot<= angkotBeroperasi) {
        console.log('Angkot No. '+ noAngkot+' Sedang Beroperasi');
    } else if (noAngkot===8 || noAngkot===10) {
            console.log('Angkot No.'+ noAngkot+ (' sedang lembur'));
    }
    else {
        console.log('Angkot No. ' +noAngkot+' Sedang tidak beroperasi');
    }
}