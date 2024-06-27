// let anime = {
//     'frieren' : {
//         genre : ['action','adventure','fantasy', 'magic'],
//         eps : 28,
//         studio : 'madhouse'
//     },
//     'solo leveling' : {
//         genre : ['action', 'adventure'],
//         eps : 12,
//         studio : 'a-1 pictures'
//     },
//     'yuru camp' : {
//         genre : ['slice of life', 'adventure'],
//         eps : 12,
//         studio : 'madhouse'
//     }
// }

// alert('Selamat datang di ');


// function searchAnime() {
//     let search = prompt('Cari anime berdasarkan judul / genre / studio: ');
//     for (let i in anime) {
//         if (anime[i].genre.includes(search) || i.includes(search) || anime[i].studio.includes(search)) {
//             alert('Judul: ' + i + '\nGenre: ' + anime[i].genre + '\nEpisode: ' + anime[i].eps + '\nStudio: ' + anime[i].studio);
//         }
//     }
// }

// searchAnime();

// searchAnime();



let bdAnime = {
    'frieren' : {
        genre : ['action','adventure','fantasy', 'magic'],
        eps : 28,
        rating : 9.5,
        vote : 0
    },
    'sword art online' : {
        genre : ['action', 'adventure','game'],
        eps : 12,
        rating : 8.5,
        vote : 0
    },
    'darwin game' : {
        genre : ['survival', 'action'],
        eps : 12,
        rating : 7.6,
        vote : 1
    }
}

alert('Selamat datang di toko bluray anime');

let keranjang = [];
function anime() {
    let offer = prompt('Apakah anda ingin mencari anime sendiri atau rekomendasi dari kami?')
if (offer == 'mencari anime') {
    let search = prompt('Cari anime berdasarkan judul / genre / studio: ');
    for (let i in bdAnime) {
        if (bdAnime[i].genre.includes(search) || i.includes(search) || bdAnime[i].studio.includes(search)) {
            // alert('Judul: ' + i + '\nGenre: ' + bdAnime[i].genre + '\nEpisode: ' + bdAnime[i].eps + '\nRating: ' + bdAnime[i].rating + '\nVote: ' + bdAnime[i].vote);
            let ask = confirm('Apakah anda ingin menambahkan anime' + i + ' ke keranjang?');
            if (ask) {
                keranjang.push(bdAnime[i]);
                bdAnime[i].vote++;
                return;
            }
            return;
        }
        return;
    }
} else if (offer == 'rekomendasi anime') {
    for(i in bdAnime) {
        if (bdAnime[i].vote > 0) {
            alert('kami merekomendasikan '+'Judul: ' + i + '\nGenre: ' + bdAnime[i].genre + '\nEpisode: ' + bdAnime[i].eps + '\nRating: ' + bdAnime[i].rating + '\nVote: ' + bdAnime[i].vote);
        }
    }
}
}

anime()

// let keranjang = [];

// let dataBuku = {
//     'erwin rommel' : {
//         genre : ['biography','war'],
//         rating : 9,
//         vote : 100
//     },
//     'winston churchill' : {
//         genre : ['biography','war'],
//         rating : 6,
//         vote : 0
//     },
//     'roosevelt' : {
//         genre : ['biography','politics'],
//         rating : 9,
//         vote : 0
//     },
//     'stalin' : {
//         genre : ['biography','politics','drama','adult','dark'],
//         rating : 9,
//         vote : 89
//     }
// }

// function searchBook() {
//     let offer = confirm('Ingin buku rekomendasi dari kami?')
//     if(offer) {
//         for (let i in dataBuku) {
//             if (dataBuku[i].vote > 0) {
//                 alert('Judul: ' + i + '\nGenre: ' + dataBuku[i].genre + '\nRating: ' + dataBuku[i].rating + '\nVote: ' + dataBuku[i].vote);
//             }
//         }
//     } else {
//         let search = prompt('Cari buku berdasarkan judul / genre / rating: ');

//         for(let i in dataBuku) {
//             if(dataBuku[i].genre.include(search) || i.includes(search) || dataBuku[i].rating.includes(search)) {
//                 alert('Judul: ' + dataBuku[i] + '\nGenre: ' + dataBuku[i].genre + '\nRating: ' + dataBuku[i].rating + '\nVote: ' + dataBuku[i].vote);
//                 let ask = confirm('Apakah anda ingin menambahkan buku' + i + ' ke keranjang?');
//                 if(ask) {
//                     keranjang.push(dataBuku[i]);
//                     dataBuku[i].vote++;
//                     alert("Berhasil menambahkan buku ke keranjang");
//                 }
//             } else {
//                 alert('Buku tidak ditemukan');
//             }
//         }
//     }
// }


// searchBook();





























