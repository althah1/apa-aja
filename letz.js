var typed = new Typed(".typing", {

  strings: ["learn", "discover", "explore"],

  typeSpeed: 120,      // kecepatan mengetik

  backSpeed: 60,       // kecepatan menghapus

  loop: true           // supaya berulang terus

});

function ShowPassword() {

    // Jika password tidak kosong

    if (document.getElementById("mypass").value != "") {

        // Ubah input menjadi text agar terlihat

        document.getElementById("mypass").type = "text";

        // Sembunyikan tombol Show, tampilkan tombol Hide

        document.getElementById("show").style.display = "none";

        document.getElementById("hide").style.display = "block";

    }

}


function HidePassword() {

    // Jika tipe input adalah text, ubah kembali ke password

    if (document.getElementById("mypass").type == "text") {

        document.getElementById("mypass").type = "password";

        document.getElementById("show").style.display = "block";

        document.getElementById("hide").style.display = "none";

    }

}