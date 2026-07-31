// ChineseMaster AI

console.log("ChineseMaster AI Loaded");

// Hiệu ứng xuất hiện khi cuộn
const cards = document.querySelectorAll(".card, .course, .flashcard");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all .5s ease";
  observer.observe(card);
});

// Thanh tìm kiếm (demo)
const input = document.querySelector(".search input");
const button = document.querySelector(".search button");

if (input && button) {
  button.addEventListener("click", () => {
    const keyword = input.value.trim();

    if (keyword === "") {
      alert("Vui lòng nhập từ cần tìm.");
      return;
    }

    alert("Bạn vừa tìm: " + keyword);
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      button.click();
    }
  });
}

// Flashcard demo
const flashButton = document.querySelector(".flashcard button");

if (flashButton) {
  flashButton.addEventListener("click", () => {
    flashButton.innerHTML = "❤️ Đã lưu";
    flashButton.style.background = "#16a34a";
  });
}

// Cuộn mượt
document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
