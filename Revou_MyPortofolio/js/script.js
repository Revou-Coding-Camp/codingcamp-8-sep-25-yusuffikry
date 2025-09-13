// Greeting with Name
let username = prompt("Masukkan nama kamu:");
document.getElementById("username").innerText = username ? username : "Guest";

// Form Validation & Output
document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let birthdate = document.getElementById("birthdate").value;
  let gender = document.querySelector("input[name='gender']:checked");
  let message = document.getElementById("message").value.trim();

  if (!name || !birthdate || !gender || !message) {
    alert("Semua field harus diisi!");
    return;
  }

  let currentTime = new Date().toString();

  // Display result
  document.getElementById("result").innerHTML = `
    <p><strong>Current Time:</strong> ${currentTime}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  // Reset form
  document.getElementById("messageForm").reset();
});
