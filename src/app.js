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

  for (let ipronoun = 0; ipronoun < pronoun.length; ipronoun++) {
    for (let iadj = 0; iadj < adj.length; iadj++) {
      for (let inoun = 0; inoun < noun.length; inoun++) {
        for (let idomain = 0; idomain < domain.length; idomain++) {
          let fullDomain =
            pronoun[ipronoun] + adj[iadj] + noun[inoun] + domain[idomain];
          textHTML += '<li class="list-group-item">' + fullDomain + "</li>";
        }
      }
    }
  }

  textHTML += "</ul>";

  let element = document.querySelector("#domain");
  element.innerHTML = textHTML;
};
