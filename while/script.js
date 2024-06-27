alert('selamat datang di aplikasi penghitung huruf pada kalimat yang anda berikan');

let kata = prompt('Masukkan kalimat yang ingin dihitung hurufnya');

while(kata.length) {
    if(kata == ' ') {
        kata++;
    }
    alert('jumlah huruf pada kalimat yang anda berkan adalah :' +kata);
}

