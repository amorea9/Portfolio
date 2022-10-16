"use strict";
window.addEventListener("DOMContentLoaded", load);
import { animate, scroll } from "https://cdn.skypack.dev/motion";
function load() {
  document.querySelectorAll("main>section>div").forEach((item) => {
    scroll(animate(item, { opacity: [0, 1, 1] }), {
      target: item,
      duration: 1,
      offset: ["start end", "end start"],
    });
  });

  //darkmode
  const switchButton = document.querySelector("input[type='checkbox']");

  const useDark = window.matchMedia("(prefers-color-scheme: dark)");

  function toggleDarkMode(state) {
    document.documentElement.classList.toggle("darkmode", state);
  }

  toggleDarkMode(useDark.matches);
  useDark.addListener((evt) => toggleDarkMode(evt.matches));
  switchButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("darkmode");
  });
}
