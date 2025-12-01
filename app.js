let transaksi = [];
let total = 0;

function tambahTransaksi() {
    let deskripsi = document.getElementById("deskripsi").value;
    let jumlah = parseInt(document.getElementById("jumlah").value);
    let tipe = document.getElementById("tipe").value;

    if (!deskripsi || !jumlah) {
        alert("Isi semua data!");
        return;
    }

    let item = {
        deskripsi: deskripsi,
        jumlah: jumlah,
        tipe: tipe
    };

    transaksi.push(item);

    if (tipe === "masuk") total += jumlah;
    else total -= jumlah;

    updateList();
    updateTotal();
}

function updateList() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    transaksi.forEach((t) => {
        let li = document.createElement("li");
        li.textContent = `${t.deskripsi} - ${t.tipe} - Rp ${t.jumlah}`;
        list.appendChild(li);
    });
}

function updateTotal() {
    document.getElementById("total").textContent = "Rp " + total;
}
