document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".bar").forEach(bar => {
        const level = bar.getAttribute("data-level");
        bar.querySelector("::after");
        bar.style.setProperty('--bar-width', level);
        bar.innerHTML = `<div style="height: 100%; background: #61dafb; width: ${level}; transition: width 2s;"></div>`;
      });
    });
 
