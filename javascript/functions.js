export const getBooksBySearch = async (searchTerm) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=12`
    );

    const data = await response.json();

    if (!data.items) {
        return data;
    } else {
        const volumeInfo = data.items.map((book) => book.volumeInfo);
        return volumeInfo;
    }
};

export const checkThumbnailExists = (array) => {
    const addImg = array.map((result) => {
        if (!result.hasOwnProperty("imageLinks")) {
            result.imageLinks;
            result.imageLinks = { thumbnail: "https://placehold.co/400x600" };
            return result;
        } else {
            return result;
        }
    });
    return addImg;
};

export const checkPropertyExists = (array, key, value) => {
    const newArr = array.map((result) => {
        if (!result.hasOwnProperty(key)) {
            result[key] = value;
            return result;
        } else {
            return result;
        }
    });
    return newArr;
};
