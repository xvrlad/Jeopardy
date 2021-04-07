function getCategories(numberOfCategories) {
    // //getting x amount of categories from API
    // let allCategories = fetchCategoriesFromAPI(numberOfCategories)
    // //The categoriess that we got from the API, we return it from this function.
    // return allCategories
    return fetchCategoriesFromAPI(numberOfCategories)
}

function getQuestions(arrayOfCategories) {
    let questionsArray = []
    for (category of arrayOfCategories) { //for... of for lists
        questionsArray.push(fetchQuestionsFromAPI(category))
    }
    return questionsArray
}

let categoriesForGame = getCategories(5)
let categoryQuestions = getQuestions(categoriesForGame)
addToGame(categoriesForGame, categoryQuestions)