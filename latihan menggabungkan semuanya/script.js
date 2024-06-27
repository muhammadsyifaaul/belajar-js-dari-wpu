// alert('Selamat datang di toko buku kami');
// alert('Silahkan pilih buku yang ingin anda beli');

// let keranjang = [];
// let genre = [];
// let books = {
//     genre : {
//         sejarah : {
//             judul : ['1917','The Last Kingdom','Kingdom of Heaven'],
//             seri : [[1,2,3],[1,2,3],[1,2,3]],
//             harga : [[100,150,200],[100,150,200],[100,150,200]]
//         },
//         biografi : {
//             judul : ['Adolf Hitler','Joseph Stalin','Curchill'],
//             seri : [[1,2,3],[1,2,3],[1,2,3]],
//             harga : [[100,150,200],[100,150,200],[100,150,200]]
//         }
//     }
// }

// function searchBook() {
//     let searchJudul = prompt('Silahkan masukkan judul buku yang ingin anda cari : ');

//     // if(books.genre.sejarah.judul.includes(searchJudul.toLowerCase()) && books.genre.sejarah.seri[books.genre.sejarah.judul.indexOf(searchJudul.toLowerCase())].includes(searchSeri)) {
//     //     alert('Buku yang anda cari ada di dalam keranjang');
//     //     keranjang.push(searchJudul);
//     // } else {
//     //     alert('Buku yang anda cari tidak ada di dalam keranjang');
//     // }

//     if(genre == books.genre[genre]) {
//         alert('Buku yang anda cari ada di dalam keranjang');
//         keranjang.push(searchJudul);
//     } else {
//         alert('Buku yang anda cari tidak ada di dalam keranjang');
//     }
// }

// function searchGenre() {
//     let search = true;
//     while(search) {
//     let searchGenre = prompt('Silahkan masukkan Genre buku yang ingin anda cari : ');
//     if(books.genre.hasOwnProperty(searchGenre.toLowerCase())) {
//         genre.push(searchGenre);
//         searchBook();
//     } else {
//         let offer = confirm('Anda ingin mencoba mencari genre lain ?');
//         if (offer == false) {
//             search = false;
//         }
//     }
//     }

// }

// searchGenre();

// alert('Selamat datang di toko buku kami');
// alert('Silahkan pilih buku yang ingin anda beli');

// let keranjang = [];
// let genre = '';
// let books = {
//     sejarah : {
//         judul : ['1917','The Last Kingdom','Kingdom of Heaven'],
//         seri : [[1,2,3],[1,2,3],[1,2,3]],
//         harga : [[100,150,200],[100,150,200],[100,150,200]]
//     },
//     biografi : {
//         judul : ['Adolf Hitler','Joseph Stalin','Curchill'],
//         seri : [[1,2,3],[1,2,3],[1,2,3]],
//         harga : [[100,150,200],[100,150,200],[100,150,200]]
//     }
// }

// function searchBook() {
//     let searchJudul = prompt('Silahkan masukkan judul buku yang ingin anda cari : ');

//     if(books[genre].judul.includes(searchJudul.toLowerCase())) {
//         alert('Buku yang anda cari ada di dalam keranjang');
//         keranjang.push(searchJudul);
//         this.judul = undefined;
//         console.log(books[genre].judul);
//     } else {
//         alert('Buku yang anda cari tidak ada di dalam keranjang');
//     }
// }

// function searchGenre() {
//     let search = true;
//     while(search) {
//         let searchGenre = prompt('Silahkan masukkan Genre buku yang ingin anda cari : ');
//         if(books.hasOwnProperty(searchGenre.toLowerCase())) {
//             genre = searchGenre.toLowerCase();
//             searchBook();
//         } else {
//             let offer = confirm('Anda ingin mencoba mencari genre lain ?');
//             if (offer == false) {
//                 search = false;
//             }
//         }
//     }
// }

// searchGenre();

alert('Selamat datang di perpustakaan online')
alert('Anda bisa membaca dan meminjam buku yang anda inginkan')

let databaseBuku = {
  'mahouka koukou': {
    penulis: 'akira toriyama',
    genre: 'magic',
    statusPinjam: false,
    peminjam: '',
    tglPinjam: '',
    tglKembali: ''
  },
  'harry potter': {
    penulis: 'j.k. rowling',
    genre: 'magic',
    statusPinjam: false,
    peminjam: '',
    tglPinjam: '',
    tglKembali: ''
  },
  'the last kingdom': {
    penulis: 'shakespeare',
    genre: 'sejarah',
    statusPinjam: false,
    peminjam: '',
    tglPinjam: [],
    tglKembali: ''
  }
}

let peminjaman = true;

function searchBook () {
  let search = prompt('Silahkan masukkan judul buku yang ingin anda cari : ');
  if (databaseBuku.hasOwnProperty(search.toLowerCase())) {
    if (databaseBuku[search.toLowerCase()].statusPinjam == true) {
      alert(
        'Maaf, buku ini sedang dipinjam oleh ' +
          databaseBuku[search.toLowerCase()].peminjam
      );
      alert(
        'Anda bisa meminjamnya pada : ' +
          databaseBuku[search.toLowerCase()].tglKembali
      );
    } else {
      alert('Buku yg anda cari ada dalam data kami');

      let pinjam = confirm('Apakah anda ingin meminjam buku ini ?');
      if (pinjam) {
        let namaPeminjam = prompt('Silahkan masukkan nama anda : ');
        let tglPeminjaman = new Date();
        let durasiPinjam = parseInt(
          prompt('Silahkan masukkan durasi pinjam (hari) : ')
        );

        let tglKembali = new Date(tglPeminjaman);
        tglKembali.setDate(tglKembali.getDate() + durasiPinjam);

        databaseBuku[search.toLowerCase()].statusPinjam = true;
        databaseBuku[search.toLowerCase()].peminjam = namaPeminjam;
        databaseBuku[search.toLowerCase()].tglPinjam = tglPeminjaman;
        databaseBuku[search.toLowerCase()].tglKembali = tglKembali;

        console.log(databaseBuku[search.toLowerCase()]);
        alert('Buku berhasil dipinjam');
      }
    }
  } else {
    alert('Buku yang anda cari tidak ada di dalam data kami');
  }
}

while (peminjaman) {
  searchBook();
}
