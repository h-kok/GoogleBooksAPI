import { createResultCard, createFeatureBookCard } from "./dom-utils.js";
import { checkThumbnailExists, checkPropertyExists } from "./functions.js";

export const displayResults = (array) => {
    const checkImg = checkThumbnailExists(array);
    const checkSubtitle = checkPropertyExists(
        checkImg,
        "subtitle",
        "Sorry, this is unavailable. Click below for a full description."
    );

    checkSubtitle.map((result) => {
        const id = result.industryIdentifiers[0].identifier;
        const title = result.title;
        const image = result.imageLinks.thumbnail;
        const author = result.authors.join(", ").toString();
        const summary = result.subtitle;

        createResultCard(title, image, author, summary, id);
    });
};

export const displayFeatureBookCard = (array, btnId) => {
    const newArr = checkThumbnailExists(array);

    const featureBook = newArr.filter(
        (result) => result.industryIdentifiers[0].identifier === btnId
    );

    const checkCat = checkPropertyExists(featureBook, "categories", [
        "unavailable",
    ]);
    const checkPub = checkPropertyExists(checkCat, "publisher", "unavailable");
    const checkPageNum = checkPropertyExists(
        checkPub,
        "pageCount",
        "unavailable"
    );

    checkPageNum.map((result) => {
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
