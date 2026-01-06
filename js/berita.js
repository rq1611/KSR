const dataBerita = {
  1: {
    judul: "Donor Darah Bersama Mahasiswa UNPAS",
    tanggal: "9 Desember 2025",
    gambar: "img/berita1.jpg",
    konten: `
      <p>Bandung — KSR PMI Unit Universitas Pasundan kembali menyelenggarakan kegiatan Donor Darah Sukarela sebagai bentuk nyata kepedulian terhadap sesama dan dukungan terhadap ketersediaan stok darah di Palang Merah Indonesia (PMI).</p>
      <p>Kegiatan ini dilaksanakan di lingkungan Universitas Pasundan dan diikuti oleh mahasiswa, civitas akademika, serta masyarakat umum. Antusiasme peserta terlihat dari tingginya jumlah pendaftar yang secara sukarela mendonorkan darahnya demi membantu pasien yang membutuhkan.</p>
      <p>Ketua KSR PMI Unit Universitas Pasundan menyampaikan bahwa kegiatan donor darah ini merupakan agenda rutin yang bertujuan untuk menumbuhkan rasa kemanusiaan, solidaritas, dan kepedulian sosial di kalangan generasi muda. Selain itu, kegiatan ini juga menjadi bagian dari upaya mendukung program kemanusiaan PMI dalam menjaga ketersediaan darah yang aman dan cukup.</p>
      <p>Pelaksanaan donor darah dilakukan dengan tetap memperhatikan standar kesehatan dan keselamatan, bekerja sama dengan PMI setempat. Setiap pendonor menjalani pemeriksaan kesehatan terlebih dahulu sebelum proses pengambilan darah dilakukan oleh tenaga medis profesional.</p>
      <p>Melalui kegiatan Donor Darah Sukarela ini, KSR PMI Unit Universitas Pasundan berharap dapat memberikan manfaat nyata bagi masyarakat serta mengajak lebih banyak pihak untuk berpartisipasi dalam aksi kemanusiaan yang sederhana namun berdampak besar.</p>
      
      `,
  },
  2: {
    judul: "Pelatihan Dasar Relawan Angkatan 31",
    tanggal: "27 Oktober 2025",
    gambar: "img/berita2.jpg",
    konten: `
      <p>Bandung — KSR PMI Unit Universitas Pasundan telah sukses menyelenggarakan kegiatan Pelatihan Dasar Relawan (PDR) Angkatan 31 sebagai tahapan awal pembentukan relawan mahasiswa yang tangguh, berkompeten, dan berjiwa kemanusiaan.</p>
      <p>Pelatihan ini diikuti oleh anggota muda KSR PMI Unit Universitas Pasundan yang telah melalui proses seleksi sebelumnya. Selama kegiatan berlangsung, peserta dibekali berbagai materi dasar kerelawanan, kepalangmerahan, pertolongan pertama, manajemen bencana, serta nilai-nilai kemanusiaan yang menjadi landasan gerak relawan PMI.</p>
      <p>Kegiatan Pelatihan Dasar Relawan Angkatan 31 dilaksanakan dengan metode teori dan praktik lapangan guna meningkatkan kesiapsiagaan serta kemampuan peserta dalam menghadapi situasi darurat. Materi disampaikan oleh instruktur dan fasilitator berpengalaman dari KSR PMI dan PMI setempat.</p>
      <p>Ketua panitia menyampaikan bahwa pelatihan ini bertujuan untuk mencetak relawan yang tidak hanya memiliki keterampilan teknis, tetapi juga sikap disiplin, tanggung jawab, serta solidaritas tinggi. Diharapkan para peserta dapat mengimplementasikan ilmu yang diperoleh dalam kegiatan kemanusiaan di lingkungan kampus maupun masyarakat.</p>
      <p>Melalui Pelatihan Dasar Relawan Angkatan 31 ini, KSR PMI Unit Universitas Pasundan berkomitmen untuk terus melahirkan relawan-relawan muda yang siap mengabdi dan berkontribusi aktif dalam aksi kemanusiaan.</p>
    `,
  },
  3: {
    judul: "KSR PMI UNPAS Siaga Bencana Alam",
    tanggal: "tanggal Bulan Tahun",
    gambar: "img/berita3.jpg",
    konten: `
      <p>Relawan diterjunkan langsung ke lokasi bencana.</p>
      <p>Aksi nyata kepedulian kemanusiaan.</p>
    `,
  },
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (dataBerita[id]) {
  document.getElementById("judul").textContent = dataBerita[id].judul;
  document.getElementById("tanggal").textContent = dataBerita[id].tanggal;
  document.getElementById("gambar").src = dataBerita[id].gambar;
  document.getElementById("konten").innerHTML = dataBerita[id].konten;
} else {
  document.getElementById("judul").textContent = "Berita tidak ditemukan";
}
