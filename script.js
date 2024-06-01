var mauBermain = true;

alert(
  "Selamat datang.\nIni adalah GAME TEBAK ANGKA. Kamu diminta untuk menebak Angka 1-10 yang secara random dipilih oleh komputer."
);

while (mauBermain) {
  var comp = parseInt(Math.random() * 10) + 1;

  console.log(comp);

  var kesempatan = 5;

  var awalan = "Silahkan masukkan angka 1-10 :";

  while (kesempatan > 0) {
    var p = prompt(awalan);

    if (p == "") {
      kesempatan--;

      awalan =
        "Kamu belum menebak. Silahkan masukkan angka 1-10.\nKesempatan menebakmu tinggal " +
        kesempatan +
        ".";
    } else if (parseInt(p)) {
      if (p == comp) {
        alert("Tebakan mu benar, komputer memilih " + comp);

        mauBermain = confirm("Mau main lagi?");

        break;
      } else if (p < comp) {
        kesempatan--;

        awalan =
          "angka pilihan komputer lebih besar dari " +
          p +
          ".\nKesempatan menebakmu tinggal " +
          kesempatan +
          ".";
      } else if (p > comp) {
        kesempatan--;

        awalan =
          "angka pilihan komputer lebih kecil dari " +
          p +
          ".\nKesempatan menebakmu tinggal " +
          kesempatan +
          ".";
      }
    } else if (p) {
      kesempatan--;

      awalan =
        "Yang kamu masukkan salah. Silahkan masukkan angka 1-10.\nKesempatan menebakmu tinggal " +
        kesempatan +
        ".";
    } else {
      var keluar = confirm("Yakin mau keluar?");

      if (keluar) {
        mauBermain = false;

        break;
      }
    }
  }

  if (kesempatan == 0) {
    alert("Kamu KALAH!");

    mauBermain = confirm("Mau main lagi?");
  }

  if (mauBermain) {
    mauBermain = true;
  } else {
    mauBermain = false;
  }
}

alert("Terima kasih sudah bermain.");
