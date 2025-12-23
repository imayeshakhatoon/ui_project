document.addEventListener("DOMContentLoaded", () => {

  // ---------------- Signup ----------------
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("signupEmail").value.trim();
      let pass = document.getElementById("signupPassword").value.trim();
      let cpass = document.getElementById("confirmPassword").value.trim();
      let msg = document.getElementById("signupMsg");

      if (!name || !email || !pass || !cpass) {
        msg.innerHTML = "All fields are required";
        return;
      }

      if (!email.includes("@")) {
        msg.innerHTML = "Enter a valid email";
        return;
      }

      if (pass.length < 6) {
        msg.innerHTML = "Password must be at least 6 characters";
        return;
      }

      if (pass !== cpass) {
        msg.innerHTML = "Passwords do not match";
        return;
      }

      localStorage.setItem("email", email);
      localStorage.setItem("password", pass);

      msg.style.color = "green";
      msg.innerHTML = "Signup Successful! Redirecting...";

      setTimeout(() => location.href = "index.html", 1500);
    });
  }


  // ---------------- Login ----------------
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let email = document.getElementById("loginEmail").value.trim();
      let pass = document.getElementById("loginPassword").value.trim();
      let msg = document.getElementById("loginMsg");

      let savedEmail = localStorage.getItem("email");
      let savedPass = localStorage.getItem("password");

      if (!email || !pass) {
        msg.innerHTML = "All fields are required";
        return;
      }

      if (email === savedEmail && pass === savedPass) {
        msg.style.color = "green";
        msg.innerHTML = "Login Successful! Redirecting...";
        setTimeout(() => location.href = "dashboard.html", 1200);
      } else {
        msg.innerHTML = "Invalid Credentials";
      }
    });
  }

});
