// === Toggle buka/tutup kategori ===
function toggleDetail(id) {
  const detail = document.getElementById("detail-" + id);

  // kalau lagi aktif → tutup aja
  if (detail.classList.contains("active")) {
    detail.classList.remove("active");
    return;
  }

  // tutup semua dulu
  document.querySelectorAll(".hobi-detail").forEach(d => {
    d.classList.remove("active");
  });

  // buka kategori yang diklik
  detail.classList.add("active");
}

// === Preview gambar ===
document.querySelectorAll(".hobi-detail li").forEach(item => {
  item.addEventListener("click", () => {
    const imgSrc = item.getAttribute("data-img");

    // cari preview-box di dalam kategori
    let preview = item.parentElement.querySelector(".preview-box");

    // kalau belum ada → bikin
    if (!preview) {
      preview = document.createElement("div");
      preview.className = "preview-box";
      preview.innerHTML = `<img src="" alt="">`;
      item.parentElement.appendChild(preview);
    }

    // set gambar
    const previewImg = preview.querySelector("img");
    previewImg.src = imgSrc;
    preview.style.display = "block";
  });
});
