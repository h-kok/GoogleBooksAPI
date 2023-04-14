export const getBooksBySearch = async (searchTerm) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );
    // console.log(response);

    const data = await response.json();
    console.log(data);
    console.log(data.totalItems);
    // data.totalItems < 1
    console.log(data.items === undefined);

    // try {
    //     if (data.items === undefined)
    //         throw `There were no matches found for the search term: ${searchTerm}`;
    // } catch (err) {
    //     err + "!";
    // }

    const volumeInfo = data.items.map((book) => book.volumeInfo);
    console.log(volumeInfo);

    if (volumeInfo === undefined) {
        throw new Error`There were no matches found for the search term: ${searchTerm}`();
    }

    return volumeInfo;
};
