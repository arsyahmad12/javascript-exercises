const getTheTitles = function(arr) {
    const allTitles = arr.reduce((titles, book) => {
        return titles.concat(book["title"])
    }, [])

    return allTitles
};

// Do not edit below this line
module.exports = getTheTitles;
