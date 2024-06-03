/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".es"];

window.onload = function() {
  let textHTML = '<ul class="list-group">';

  for (let iPronoun = 0; iPronoun < pronoun.length; iPronoun++) {
    for (let iAdj = 0; iAdj < adj.length; iAdj++) {
      for (let iNoun = 0; iNoun < noun.length; iNoun++) {
        for (let iDomain = 0; iDomain < domain.length; iDomain++) {
          let fullDomain =
            pronoun[iPronoun] + adj[iAdj] + noun[iNoun] + domain[iDomain];
          textHTML += '<li class="list-group-item">' + fullDomain + "</li>";
        }
      }
    }
  }

  textHTML += "</ul>";

  let element = document.querySelector("#domain");
  element.innerHTML = textHTML;
};
