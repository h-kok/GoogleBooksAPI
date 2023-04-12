export const createResultCard = () => {
    const resultsContainer = document.querySelector(".result__container");

    const resultCard = document.createElement("div");
    resultCard.className = "result__card";
    resultsContainer.appendChild(resultCard);

    createTextEl("result__title", "title", resultCard);
    createTextEl("result__author", "author", resultCard);
    createTextEl("result__description", "description", resultCard);
};

export const createTextEl = (className, content, parentNode) => {
    const el = document.createElement("p");
    el.className = className;
    const txtNode = document.createTextNode(content);
    el.appendChild(txtNode);
    parentNode.appendChild(el);
};

/* <div class="results-container">
    <div>
        <img src="" alt="" />
        <p>title</p>
        <p>author</p>
        <p>description</p>
    </div>
</div>; */
// resultsContainer.appendChild(document.createElement("div"));
