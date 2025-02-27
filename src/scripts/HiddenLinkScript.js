// Initialize an empty array to store the characters of the URL
let urlChars = [];

// Find all <section> elements with data-id starting with "92"
let sections = document.querySelectorAll('section[data-id^="92"]');

sections.forEach(section => {
    // Find <article> elements with data-class ending with "45" within the section
    let articles = section.querySelectorAll('article[data-class$="45"]');
    articles.forEach(article => {
        // Find <div> elements with data-tag containing "78" within the article
        let divs = article.querySelectorAll('div[data-tag*="78"]');
        divs.forEach(div => {
            // Find <b> elements with class "ref" within the div and extract the value attribute
            let bElements = div.querySelectorAll('b.ref');
            bElements.forEach(b => {
                urlChars.push(b.getAttribute('value'));
            });
        });
    });
});

// Join the characters to form the URL
let hiddenUrl = urlChars.join('');
console.log('Hidden URL:', hiddenUrl);