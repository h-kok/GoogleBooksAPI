import { getBooksBySearch } from "./functions.js";
import { createTextEl } from "./dom-utils.js";
import { displayResults, displayFeatureBookCard } from "./create-cards.js";

const searchBtn = document.querySelector(".search-bar__btn");
const resultsContainer = document.querySelector(".result");
const featureBook = document.querySelector(".feature-book");

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    while (resultsContainer.hasChildNodes()) {
        resultsContainer.lastChild.remove();
    }

    const searchTerm = document.getElementById("search-term").value;
    console.log(searchTerm);

    try {
        if (searchTerm === "") {
            throw "Please enter a search term";
        }
    } catch (err) {
        createTextEl("error-msg", err, resultsContainer);
    }

    // getBooksBySearch(searchTerm).then(displayResults);
    if (!resultsContainer.hasChildNodes()) {
        createTextEl("result__loading", "results loading...", resultsContainer);
    }

    const results = await getBooksBySearch(searchTerm);
    console.log(results);

    try {
        if (results.totalItems < 1)
            throw `There were no matches found for the search term: ${searchTerm}`;
    } catch (err) {
        createTextEl("result__error-msg", err, resultsContainer);
    }

    if (document.querySelector(".result__loading")) {
        resultsContainer.firstChild.remove();
    }
    // if (document.querySelector(".result__error-msg")) {
    //     resultsContainer.firstChild.remove();
    // }

    displayResults(results);

    document.addEventListener("click", (e) => {
        const btnId = e.target.id;
        if (featureBook.hasChildNodes()) {
            featureBook.lastChild.remove();
        }
        displayFeatureBookCard(results, btnId);
    });
});
