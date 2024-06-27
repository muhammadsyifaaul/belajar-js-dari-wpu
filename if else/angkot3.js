var jmlAngkot = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1;noAngkot<=jmlAngkot;noAngkot++) {
    if(noAngkot<= noAngkotBeroperasi) {
        console.log('Angkot No.'+noAngkot+' Sedang beroperasi');
    } else {
        console.log('Angkot No. '+noAngkot+' Sedang tidak beroperasi' )
    }
}