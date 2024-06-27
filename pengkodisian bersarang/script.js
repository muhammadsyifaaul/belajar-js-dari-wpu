let bintang = '';

for(i = 10; i > 0; i--) {
    for(j = 0; j< i; j++) {
        bintang += '*';
    }
    bintang += '\n';
}

console.log(bintang);

let n = 5;
let output = "";

for (let i = 1; i <= n; i++) {
  let s = "";
  let j = i;
  while (j < n) {
    s = s + " ";
    j++;
  }
  j = 1;
  while (j <= 2 * i - 1) {
    s = s + "*";
    j++;
  }
  output = output + s + "\n";
}

for (let i = n - 1; i >= 1; i--) {
  let s = "";
  let j = i;
  while (j < n) {
    s = s + " ";
    j++;
  }
  j = 1;
  while (j <= 2 * i - 1) {
    s = s + "*";
    j++;
  }
  output = output + s + "\n";
}

console.log(output);
