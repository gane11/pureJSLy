
window.addEventListener("DOMContentLoaded", (event) => {
  const users = [
    { fname: "esme", lname: "sanchez", id: 1892038, isTherapist: true },

    { fname: "rick", lname: "jeps", id: 1894024, isTherapist: false },

    { fname: "angie", lname: "lange", id: 1982403, isTherapist: false },

    { fname: "renat", lname: "gros", id: 1894039, isTherapist: true },

    { fname: "bettino", lname: "yang", id: 3789204, isTherapist: true },
  ];

  const container = document.getElementById("users_container");
  const ul = document.createElement("ul");
  ul.className = "users_list"

  console.log(container);

  users.forEach(function (user) {
    let li = document.createElement("li");
    li.className = "user"

    li.textContent =
      user.lname.replace(/\b\w/g, (l) => l.toUpperCase()) 
      + ", " +
      user.fname.replace(/\b\w/g, (l) => l.toUpperCase());
    ul.appendChild(li);
  });

  container.appendChild(ul);
});