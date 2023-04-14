export const createResultCard = (title, image, author, description, id) => {
    const resultsContainer = document.querySelector(".result__container");

    const resultCard = document.createElement("div");
    resultCard.className = "result__card";
    resultsContainer.appendChild(resultCard);

    createImgEl("result__img", image, resultCard);
    createTextEl("result__para", title, resultCard);
    createTextEl("result__para", author, resultCard);
    createTextEl("result__para", description, resultCard);

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
    subtitle,
    publisher
) => {
    const featureBook = document.querySelector(".feature-book__container");

    const featureBookCard = document.createElement("div");
    featureBookCard.className = "feature-book__card";
    featureBook.appendChild(featureBookCard);

    createImgEl("feature-book__img", image, featureBookCard);
    createTextEl("feature-book__para", title, featureBookCard);
    createTextEl("feature-book__para", author, featureBookCard);
    createTextEl("feature-book__para", categories, featureBookCard);
    createTextEl("feature-book__para", language, featureBookCard);
    createTextEl("feature-book__para", pageCount, featureBookCard);
    createTextEl("feature-book__para", publishedDate, featureBookCard);
    createTextEl("feature-book__para", subtitle, featureBookCard);
    createTextEl("feature-book__para", publisher, featureBookCard);
};
