export const getBooksBySearch = async (searchTerm) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=12`
    );

    const data = await response.json();
    console.log(data);

    if (!data.items) {
        return data;
    } else {
        const volumeInfo = data.items.map((book) => {
            book.volumeInfo.id = book.id;
            return book.volumeInfo;
        });
        return volumeInfo;
    }
};

export const checkThumbnailExists = (array) => {
    const addImg = array.map((result) => {
        if (!result.hasOwnProperty("imageLinks")) {
            result.imageLinks;
            result.imageLinks = {
                thumbnail:
                    "https://placehold.co/130x170/EAF9FF/456268?text=No+Image+Available",
            };
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

export const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
};
