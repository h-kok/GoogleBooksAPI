import { createResultCard, createFeatureBookCard } from "./dom-utils.js";
import { checkThumbnailExists, checkPropertyExists } from "./functions.js";

export const displayResults = (array) => {
    const checkImg = checkThumbnailExists(array);
    const checkSubtitle = checkPropertyExists(
        checkImg,
        "subtitle",
        "No summary available. Click below for a full description."
    );

    const checkAuthor = checkPropertyExists(checkSubtitle, "authors", [
        "unavailable",
    ]);

    checkAuthor.map((result) => {
        const id = result.id;
        const title = result.title;
        const image = result.imageLinks.thumbnail;
        const author = result.authors.join(", ").toString();
        const summary = result.subtitle;

        createResultCard(title, image, author, summary, id);
    });
};

export const displayFeatureBookCard = (array, btnId) => {
    const newArr = checkThumbnailExists(array);

    const featureBook = newArr.filter((result) => result.id === btnId);

    const checkCat = checkPropertyExists(featureBook, "categories", [
        "unavailable",
    ]);
    const checkPub = checkPropertyExists(checkCat, "publisher", "unavailable");
    const checkPageNum = checkPropertyExists(
        checkPub,
        "pageCount",
        "unavailable"
    );
    const checkDescription = checkPropertyExists(
        checkPageNum,
        "description",
        "unavailable"
    );

    checkDescription.map((result) => {
        const title = result.title;
        const image = result.imageLinks.thumbnail;
        const author = result.authors.join(", ").toString();
        const categories = result.categories.join(", ").toString();
        const language = result.language;
        const pageCount = result.pageCount;
        const publisher = result.publisher;
        const publishedDate = result.publishedDate;
        const description = result.description;

        createFeatureBookCard(
            title,
            image,
            author,
            categories,
            language,
            pageCount,
            publishedDate,
            publisher,
            description
        );
    });
};
