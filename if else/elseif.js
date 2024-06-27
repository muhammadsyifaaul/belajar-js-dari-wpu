var angka = prompt('masukkan angka:')

if (angka % 2 == 0) {
    console.log(angka+' adalah bilangan genap');
} else if (angka % 2 ===1) {
    console.log(angka+' adalah bilangan ganjil');
}

else {
    alert('yang anda masukkan bukan angka');
}