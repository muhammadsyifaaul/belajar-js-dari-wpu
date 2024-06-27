// object kumpulan nilai yang memiliki nama, yg artinya object tidak ada index yg dimulai dari 0,1,2 dan seterusnya
// let mahasiswa = {
//     nama : 'Sandika Galih',
//     lulus: true,
//     sks : 145
// }

// let orang = {
//     nama : 'sandikagalih', // nama, umur, dll itu variabel didalam object yg disebut properti
//     umur: 31,
//     sapa : function() { // func yg ada didalam object disebut method
//         return 'Hai nama saya ' + this.nama; // this adalah variabel yg mengacu pada object yg sedang dijalankan
        
//     }
// }

//  membuat  object

// let mhs = {
//     namaa: 'Sandika',
//     ummur: 31,
//     ips : [3.9,3.9,3.8],
//     alamat : {
//         jalan : 'jalan raya',
//         kota : 'kota bekasi',
//         provinsi : 'jawa barat'
//     }
// }

// mhs.ips[2]  // 3.8
// mhs.alamat.kota // kota bekasi


// membuat object

// object literal

let mhs = {
    nama : 'Sandika',
    umur : 31,
    ips : [3.9,3.9,3.8],
    alamat : {
        jalan : 'jalan raya',
        kota : 'kota bekasi',
        provinsi : 'jawa barat'
    }
}

let obj = {};
obj.halo = function() {
    console.log('halo');
}

obj.halo();
// function declaration

function buatOnjMhs(nama, umur, ips) {
    let mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.ips = ips;
    return mhs;
}

let mhs3 = buatOnjMhs('Sandika', 31, [3.9,3.9,3.8]);

// constructor
// func yg khusus untuk membuat object

function Mhs(nama, umur, ips) {
    //  var this = {} // sudah dibikin oleh javascript sendiri jadi tidak usah ditulis
    this.nama = nama;
    this.umur = umur;
    this.ips = ips;
    //return this; // sudah dibikin oleh javascript sendiri jadi tidak usah ditulis
}

let mhs4 = new Mhs('Sandika', 31, [3.9,3.9,3.8]);
console.log(mhs4);  




// object this
// this pada pembuatan object dgn func declar
// function halo() {
    // console.log('halo');
//     console.log(this);
// }

// this.halo(); // this mengembalikan object global


// this pada object literal
let obj = { a : 20, nama : 'ujang'}

// obj.halo = function() {
//     console.log('halo');
//     console.log(this);
// }

// obj.halo(); // this mengembalikan object yg bersangkutan


// constructor
function halo() {
    console.log('halo');
    console.log(this);
}

let obj1 = new halo();
let obj2 = new halo();
// this mengembalikan object yg baru dibuat 