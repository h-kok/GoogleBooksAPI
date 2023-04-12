import { getBooksBySearch } from "./functions.js";
import { createResultCard } from "./dom-utils.js";
console.log("its working");

const result = document.querySelector(".result");
const searchBtn = document.querySelector(".search-bar__btn");

// getBooksBySearch("dog training");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click");

    const searchTerm = document.getElementById("search-term").value;
    console.log(searchTerm);
    getBooksBySearch(searchTerm);
    //is promise
    // console.log(getBooksBySearch(searchTerm));
    const searchResults = getBooksBySearch(searchTerm);
    console.log(searchResults);
    // getTitle();

    createResultCard();
});

// resultsContainer.appendChild(document.createElement("div"));
