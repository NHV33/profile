const rabbitHole = document.getElementById("rabbit-hole");
const links = document.getElementById("links");
const bluePill = document.getElementById("bluepill");
const redPill = document.getElementById("redpill");

const profilePic = document.getElementById("profile-pic");
const profileName = document.getElementById("profile-name");
const profileJob = document.getElementById("profile-job");
const profileBio = document.getElementById("profile-bio");

rabbitHole.onclick = () => {
  if (links.classList.contains("flyup")) {
    console.log("go down");
    links.classList.remove("flyup");
    links.classList.remove("set-visible");
    links.classList.add("flydown");
  } else {
    console.log("go up");
    links.classList.remove("flydown");
    links.classList.add("set-visible");
    links.classList.add("flyup");
  }
};

bluePill.onclick = () => {
  if (profileName.innerText === "Judas Caprio") { window.location.reload(); }
  profileName.innerText = "Judas Caprio";
  profileJob.innerText = "Famous Actor";
  profileBio.innerText = "Always keeping it real. Nothing beats a juicy steak.";
  profilePic.src = "images/steak.png";
  document.body.style["background-image"] = "url('images/restaurant.jpg')";
  rabbitHole.style.visibility = "hidden";
  links.classList.remove("flyup");
  links.classList.remove("set-visible");
};

redPill.onclick = () => {
  profileName.innerText = "Noel H. Vincent";
  profileJob.innerText = "Educator & Software Developer";
  profileBio.innerText = "Lecturer at Shiga University. Pursuing a career in software development.";
  profilePic.src = "images/kiyomasa.jpg";
  document.body.style["background-image"] = "url('images/desert.png')";
  rabbitHole.style.visibility = "visible";
};
