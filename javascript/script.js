import { getBooksBySearch } from "./functions.js";
import {
    createFeatureBookCard,
    createResultCard,
    createTextEl,
} from "./dom-utils.js";

const searchBtn = document.querySelector(".search-bar__btn");
const resultsContainer = document.querySelector(".result__container");

// getBooksBySearch("dog training");
const displayResults = (array) => {
    const result = array.map((result) => {
        const id = result.industryIdentifiers[0].identifier;
        const title = result.title;
        const image = result.imageLinks.thumbnail;
        const author = result.authors.toString();
        const description = result.description;

        createResultCard(title, image, author, description, id);
    });
};

const displayFeatureCard = (array, btnId) => {
    const featureBook = array.filter(
        (result) => result.industryIdentifiers[0].identifier === btnId
    );
    // console.log(featureBook);
    featureBook.map((result) => {
        const title = result.title;
        const image = result.imageLinks.thumbnail;
        const author = result.authors.join(", ").toString();
        const categories = result.categories.join(", ").toString();
        const language = result.language;
        const pageCount = result.pageCount;
        const publishedDate = result.publishedDate;
        const subtitle = result.subtitle;
        const publisher = result.publisher;

        createFeatureBookCard(
            title,
            image,
            author,
            categories,
            language,
            pageCount,
            publishedDate,
            subtitle,
            publisher
        );
    });
};

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
    const results = await getBooksBySearch(searchTerm);

    // try {
    //     await getBooksBySearch(searchTerm);
    //     throw `There were no matches found for the search term: ${searchTerm}`;
    // } catch (err) {
    //     `${err}!`;
    // }
    // console.log(results);
    // console.log(results.length, "no. results");
    try {
        if (results.length < 1)
            throw `There were no matches found for the search term: ${searchTerm}`;
    } catch (err) {
        createTextEl("error-msg", err, resultsContainer);
    }
    displayResults(results);

    resultsContainer.addEventListener("click", (e) => {
        const btnId = e.target.id;
        // console.log(btnId);
        displayFeatureCard(results, btnId);
    });
});
