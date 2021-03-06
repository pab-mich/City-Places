// capture the html tags
let barPlaces = document.querySelector("#bar-places");
let clubPlaces = document.querySelector("#club-places");
let yourFovites = document.querySelector("#yourFovites");
let slidePlaces = document.querySelector("#slidePlaces");
let tinderCards = document.querySelector("#tinder--cards");


//async function to get the jsonBar and show the places data
let fetchBar = async () => {
  const res = await fetch("dataBar.json");
  const data = await res.json();
  data.forEach((bar) => {
    let content = document.createElement("div");
    content.innerHTML = `
                <img src="${bar.barImage}">
                <a href="slidePlaces.html">${bar.barName}</a>
            `;

    barPlaces.append(content);
  });
};
fetchBar();

//still need to works in the clubs functionality
const fetchClub = async () => {
  const res = await fetch("dataClub.json");
  const data = await res.json();
  data.forEach((club) => {
    const content = document.createElement("div");
    content.innerHTML = `
                <img src="${club.clubImage}" >
                 <a href="slidePlaces.html">${club.clubName}</a>
            `;
    clubPlaces.append(content);
  });
};

fetchClub();
