export const createResultCard = (title, image, author, summary, id) => {
    const resultsContainer = document.querySelector(".result");
    const resultCard = document.createElement("div");
    resultCard.className = "result__card";
    resultsContainer.appendChild(resultCard);

    createImgEl("result__img", image, resultCard);

    const paraWrapper = document.createElement("div");
    createDivDetails(paraWrapper, "result__para-wrapper", resultCard);

    createTextEl("result__para", title, paraWrapper);
    createTextEl("result__para", `Author(s): ${author}`, paraWrapper);
    createTextEl("result__para", `${summary}`, paraWrapper);

    const btn = document.createElement("button");
    btn.className = "result__btn";
    btn.id = id;
    const btnTxt = document.createTextNode("More Info");
    btn.appendChild(btnTxt);
    resultCard.appendChild(btn);
};

export const createDivDetails = (div, className, parentNode) => {
    div.className = className;
    parentNode.appendChild(div);
};

export const createTextEl = (className, content, parentNode) => {
    const el = document.createElement("p");
    el.className = className;
    const txtNode = document.createTextNode(content);
    el.appendChild(txtNode);
    parentNode.appendChild(el);
};

export const createImgEl = (className, image, parentNode) => {
    const bookImg = document.createElement("img");
    bookImg.className = className;
    bookImg.src = image;
    parentNode.appendChild(bookImg);
};

export const createFeatureBookCard = (
    title,
    image,
    author,
    categories,
    language,
    pageCount,
    publishedDate,
    publisher,
    description
) => {
    const featureBookContainer = document.querySelector(".feature-book");
    const featureBookCard = document.createElement("div");
    featureBookCard.className = "feature-book__card";
    featureBookContainer.appendChild(featureBookCard);

    const imgWrapper = document.createElement("div");
    createDivDetails(imgWrapper, "feature-book__img-wrapper", featureBookCard);

    createImgEl("feature-book__img", image, imgWrapper);

    const paraWrapper = document.createElement("div");
    createDivDetails(paraWrapper, "feature-book__para-wrapper", imgWrapper);

    createTextEl("feature-book__para", title, paraWrapper);
    createTextEl("feature-book__para", `Author(s): ${author}`, paraWrapper);
    createTextEl("feature-book__para", `Category: ${categories}`, paraWrapper);
    createTextEl("feature-book__para", `Language: ${language}`, paraWrapper);
    createTextEl("feature-book__para", `Page Count: ${pageCount}`, paraWrapper);
    createTextEl(
        "feature-book__para",
        `Publish Date: ${publishedDate}`,
        paraWrapper
    );
    createTextEl("feature-book__para", `Publisher: ${publisher}`, paraWrapper);
    createTextEl("feature-book__para", "Synopsis", featureBookCard);
    createTextEl("feature-book__para", description, featureBookCard);
};
