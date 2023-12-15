document.addEventListener("DOMContentLoaded", function () {
  var terminal = document.getElementById("terminal");
  var caret = document.getElementById("caret");
  var otherContent = document.getElementById("other-content");
  var prompt = "$ ";
  var command = "./portfolio.sh";
  var index = 0;
  isTyping = true;

  function typeCommand() {
    if (index <= command.length) {
      terminal.innerHTML =
        prompt + command.substring(0, index) + caret.outerHTML;
      index++;
      setTimeout(typeCommand, 100); // Adjust typing speed
    } else {
      terminal.innerHTML = prompt + command; // Complete command

      // Pause before showing output
      setTimeout(() => {
        var output = document.createElement("div");
        output.textContent = "Amjad Odeh";
        output.className = "output";
        terminal.appendChild(output);
        setTimeout(() => output.classList.add("output-large"), 500);

        // Remove caret after displaying output
        setTimeout(() => (caret.style.display = "none"), 500);

        // Trigger other elements to appear
        //setTimeout(() => otherContent.classList.add("flicker-on"), 1500);
      }, 200); // Pause duration before output

      document.querySelector(".section-2").style.display = "block";

      if (window.innerWidth >= 780) {
        setTimeout(() => {
          document.querySelector(".section-1").style.animation =
            "moveDiv 3s ease 1 forwards";
        }, 2000);

        setTimeout(() => {
          document.querySelector(".section-1").style.paddingLeft = "5%";
          document.querySelector(".section-1").style.position = "fixed";
          document.querySelector(".section-1").style.left = "25%";
          document.querySelector(".section-1").style.transform =
            "translate(-50%, -50%)";
          document.querySelector(".section-1").style.animation = "none";
          isTyping = false;
        }, 5000);
      }

      setTimeout(() => {
        document.querySelector(".section-2").style.transition =
          "opacity 3s ease";
        document.querySelector(".section-2").style.opacity = "1";
      }, 3000);
    }
  }

  function applyStyles() {
    if (window.matchMedia("(min-width: 780px)").matches && !isTyping) {
      document.querySelector(".section-1").style.paddingLeft = "5%";
      document.querySelector(".section-1").style.position = "fixed";
      document.querySelector(".section-1").style.left = "25%";
      document.querySelector(".section-1").style.transform =
        "translate(-50%, -50%)";
      document.querySelector(".section-1").style.animation = "none";
    } else {
      document.querySelector(".section-1").style.cssText = "";
    }
  }

  applyStyles();
  window.addEventListener("resize", applyStyles);

  terminal.innerHTML = prompt + caret.outerHTML; // Start with the prompt and caret
  setTimeout(typeCommand, 1000); // Start typing after 1 second
});
