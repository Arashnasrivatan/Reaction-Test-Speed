document.addEventListener("DOMContentLoaded", function () {
  const testArea = document.getElementById("test-area");
  const instructions = document.getElementById("test-instructions");
  let result = "";
  let startTime, endTime;
  let isTestStarted = false;

  testArea.addEventListener("click", function () {
    if (!isTestStarted) {
      isTestStarted = true;
      instructions.textContent = "🔥✅ صبر کنید تا رنگ سبز شود...";
      testArea.classList.remove("active");

      setTimeout(() => {
        testArea.classList.add("active");
        instructions.textContent = "⚠️ کلیک کنید ⚠️";
        startTime = new Date().getTime();
      }, Math.random() * 5000 + 2000);
    } else if (testArea.classList.contains("active")) {
      endTime = new Date().getTime();
      const reactionTime = endTime - startTime;

      if (reactionTime < 300) {
        result = "خیلی خوب بود 🔥";
      } else if (reactionTime < 1000) {
        result = "خوب بود 👍";
      } else if (reactionTime < 2000) {
        result = "میتونی بهترم بزنی 😊";
      } else {
        result = "بیشتر تلاش کن 💎";
      }

      Swal.fire({
        title: "نتیجه‌ی واکنش",
        html: `💻زمان واکنش شما: ${reactionTime} میلی‌ثانیه<br>📊 ${result}`,
        icon: "info",
        confirmButtonText: "باشه"
      });

      resetTest();
    } else {
      Swal.fire({
        title: "بسیار زود!",
        text: "✅ صبر کنید تا رنگ سبز شود.",
        icon: "warning",
        confirmButtonText: "باشه"
      });

      resetTest();
    }
  });

  function resetTest() {
    isTestStarted = false;
    testArea.classList.remove("active");
    instructions.innerHTML =
      '<img id="logo" src="img/logo.png" alt=""> <img src="img/Index Pointing At The Viewer.webp" alt="Index Pointing At The Viewer" width="25" height="25" /> کلیک کنید تا تست شروع شود';
  }
});
