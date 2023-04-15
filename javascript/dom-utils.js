export const createResultCard = (title, image, author, summary, id) => {
    const resultsContainer = document.querySelector(".result");
    const resultCard = document.createElement("div");
    resultCard.className = "result__card";
    resultsContainer.appendChild(resultCard);

    createImgEl("result__img", image, resultCard);
    createTextEl("result__para", title, resultCard);
    createTextEl("result__para", `Author(s): ${author}`, resultCard);
    createTextEl("result__para", `Summary: ${summary}`, resultCard);

    const btn = document.createElement("button");
    btn.className = "result__btn";
    btn.id = id;
    const btnTxt = document.createTextNode("More Info");
    btn.appendChild(btnTxt);
    resultCard.appendChild(btn);
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

    createImgEl("feature-book__img", image, featureBookCard);
    createTextEl("feature-book__para", title, featureBookCard);
    createTextEl("feature-book__para", `Author(s): ${author}`, featureBookCard);
    createTextEl(
        "feature-book__para",
        `Category: ${categories}`,
        featureBookCard
    );
    createTextEl(
        "feature-book__para",
        `Language: ${language}`,
        featureBookCard
    );
    createTextEl(
        "feature-book__para",
        `Page Count: ${pageCount}`,
        featureBookCard
    );
    createTextEl(
        "feature-book__para",
        `Publish Date: ${publishedDate}`,
        featureBookCard
    );
    createTextEl(
        "feature-book__para",
        `Publisher: ${publisher}`,
        featureBookCard
    );
    createTextEl(
        "feature-book__para",
        `Synopsis: ${description}`,
        featureBookCard
    );
};
