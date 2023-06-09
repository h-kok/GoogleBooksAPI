# Google Books API Search Engine

## Demo & Snippets

-   You can view the live version here: https://h-kok.github.io/GoogleBooksAPI/

## Requirements / Purpose

-   The MVP was to create a search engine using the Google Books API. This project focuses on developing recently acquired knowledge of JavaScript Promises, as well as incorporating all previously learned topics, including DOM manipulation.
-   This project has been created with vanilla JavaScript, CSS/Sass and HTML, as I wanted to further improve my function writing and DOM manipulation skills.

## Design Goals / Approach

-   Simple user interface, which includes a search bar, result cards and a feature book card. To optimise user experience, font is easily legible, paired with a low contrasting blue colour palette.

## Known issues

-   Feature card design and positioning could be improved upon.

## Future Goals

-   Rebuild project in React.
-   Explore nullish coalescing operator to refine JS code.
-   Add error handling for 400 errors.
-   Create bottom nav bar and explore how to see/load more search results on a new page.

## What did you struggle with?

1. Understanding how async/await functions works and the differences between async/awit and .then()/.catch(). As this was my first project that required fetching data from an API and applying async functions, I struggled to understand how I could use array iterator methods on a promise, as it returns an object. I eventually worked out that I could use array iterators, and create iterator functions, as long as they are called within the async function.

2. Understanding the purpose of and how/when to use try/catch statements. This was my first time using try/catch statements in general and the MVP specified that .catch() should not be used. Through the project I applied try/catch statements in conjunction with DOM elements to display error messages.
