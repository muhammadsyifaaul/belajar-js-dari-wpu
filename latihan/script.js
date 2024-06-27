// function Hewan(jenis) {
//     this.jenis = jenis;}

// function Mahasiswa(nama,nim) {
//     this.nama = nama;
//     this.nim = nim;
//     this.jenis = new Hewan("Hewan");
// }

// let nama = prompt("Masukkan nama Mahasiswa : ");
// let nim = prompt("Masukkan NIM Mahasiswa : ");

// let mahasiswa = new Mahasiswa(nama,nim);
// let hewan = new Hewan("Hewan");
// console.log(mahasiswa);


// function Anime(judul) {
//     this.judul = judul;
// }

// Anime.prototype.genre = 'Action';
// Anime.prototype.tahun = 2020;

// let anime = new Anime("AOT");
// console.log(anime);


function Anime(judul) {
    this.judul = judul;
}

Anime.prototype.genre = 'Action';
Anime.prototype.tahun = 2020;

Anime.prototype.getJudul = function() {
    console.log(this.judul);
};

let anime = new Anime("AOT");
console.log(anime);