// var item = prompt('masukkan nama makanan : \n (cth:nasi,daging)');

// switch (item) {
//     case 'nasi' :
//     case 'daging' :
//     case 'susu' :
//         alert('makanan/mminuman sehat');
//         break;
//     case 'burger' :
//         alert('makanan/mminuman tdk sehat');
//         break;
//     default :
//     alert('input anda salah');
// }

alert('Selamat datang dipenginputan nilai')
const namaSiswa = prompt('masukkan nama siswa : ')
let matematika = parseInt(prompt(`Masukkan nilai matematika ${namaSiswa} : `))
let ipa = parseInt(prompt(`Masukkan nilai ipa ${namaSiswa} : `))
let bindo = parseInt(prompt(`Masukkan nilai bindo ${namaSiswa} : `))

const kkm = 70;
const nilaiAkhir = (matematika + ipa + bindo) / 3;

const lulus = nilaiAkhir >= kkm ;

if (lulus == true) {
  switch (lulus) {
    case nilaiAkhir >= 90:
      grade = 'A'
      alert(`Selamat ${namaSiswa} lulus dengan grade ${grade}`)
      break
    case nilaiAkhir >= 80:
      grade = 'B'
      alert(`Selamat ${namaSiswa} lulus dengan grade ${grade}`)
      break
    case nilaiAkhir >= 70:
      grade = 'C'
      alert(`Selamat ${namaSiswa} lulus dengan grade ${grade}`)
      break
  }
} else {
  alert(`Maaf ${namaSiswa} tidak lulus`)
}

let bintang = ''
for(i = 1; i <= nilaiAkhir; i++) {
  bintang += '*'
  console.log(bintang);
}