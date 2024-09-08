async function load() {
  try {
    let response = await fetch("data.json"); // Mengambil data dari data.json
    let data = await response.json(); // Mengubahnya menjadi objek JSON

    console.log(data); // Debugging untuk melihat data yang diambil

    let component = "";

    data.forEach((teman) => {
      component += `
      <img src="${teman.fotoselfie}"/>
      
      <p class="nama">${teman.nama}</p>
      <p>${teman.kelompok}</p>
      <p>${teman.alamat}</P>
      <p>${teman.no}</P>
      
      `;
    });

    document.getElementById("ken arok").innerHTML += component; // Menambahkan konten baru di dalam #pembungkus
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

load(); // Memanggil fungsi load untuk menjalankan proses
