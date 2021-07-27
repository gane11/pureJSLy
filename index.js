
window.addEventListener("DOMContentLoaded", (event) => {
  const users = [
    { fname: "esme", lname: "sanchez", id: 1892038, isTherapist: true },

    { fname: "rick", lname: "jeps", id: 1894024, isTherapist: false },

    { fname: "angie", lname: "lange", id: 1982403, isTherapist: false },

    { fname: "renat", lname: "gros", id: 1894039, isTherapist: true },

    { fname: "bettino", lname: "yang", id: 3789204, isTherapist: true },
  ];

  const container = document.getElementById("container");
  const ul = document.createElement("ul");

  console.log(container);

  users.forEach(function (user) {
    let li = document.createElement("li");

    li.textContent = user.fname + ", " + user.lname;
    ul.appendChild(li);
  });

  container.appendChild(ul);
});