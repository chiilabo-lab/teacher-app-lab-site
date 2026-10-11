"use strict";
const rapPlayers = [...document.querySelectorAll(".rap-page video")];
rapPlayers.forEach(player => player.addEventListener("play", () => {
  rapPlayers.forEach(other => { if (other !== player) other.pause(); });
}));
window.addEventListener("pagehide", () => rapPlayers.forEach(player => player.pause()));
