let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};
function sendMail() {
  var params = {
    user_name: document.getElementById("fullName").value,
    user_email: document.getElementById("email_id").value,
    user_phone: document.getElementById("numBer").value,
    food_name: document.getElementById("foodname").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_166gbmn", "template_zbv571w", params)
    .then(function (res) {
      alert("Success! " + res.status);
      //   console.log("sent");
    });
}
