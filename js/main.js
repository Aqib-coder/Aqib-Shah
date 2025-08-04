document.addEventListener("DOMContentLoaded", () => {
  let e = document.querySelectorAll(".testimonial-slide"),
    l = document.querySelector(".prev-btn"),
    t = document.querySelector(".next-btn"),
    n = 0;
  function s(l) {
    e.forEach((e, t) => {
      e.classList.toggle("active", t === l);
    });
  }
  l.addEventListener("click", () => {
    s((n = 0 === n ? e.length - 1 : n - 1));
  }),
    t.addEventListener("click", () => {
      s((n = (n + 1) % e.length));
    }),
    setInterval(() => {
      s((n = (n + 1) % e.length));
    }, 5e3),
    s(n);
});
