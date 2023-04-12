//function to get google books api
// export const getTitle = (resultsArr, index) => {
//     const title = resultsArr[index].title;
//     return title;
// };

export const getBooksBySearch = async (searchTerm) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );
    // console.log(response);

    const data = await response.json();
    // console.log(data);

    const { items } = data;
    // console.log(items);
    //items is an array of objects.

    if (!items) {
        throw new Error(
            `There were no matches found for the search term: ${searchTerm}`
        );
    }
    const volumeInfo = items.map((book) => book.volumeInfo);
    // console.log(volumeInfo);

    const searchResults = volumeInfo.map((result) => {
        const { title, imageLinks, authors, description, ...rest } = result;
        const cleanedResult = { title, imageLinks, authors, description };
        return cleanedResult;
    });

    console.log(typeof searchResults);
    // console.log(searchResults[0].imageLinks);

    // const getTitle = getTitle(searchResults, 0)
    // console.log(getTitle);
    return searchResults;
};
