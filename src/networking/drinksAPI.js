const getDrinks = () => {
    return new Promise((resolve, reject) => {
        return getURL("http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass")
        .then(response => {
            if (response.drinks) {
                updateDetailFor(response.drinks)
                .then(drinks => {
                    resolve(drinks);
                }).catch( err => {
                    reject(err);
                })
            } else {
                console.log("There are no drinks");
                resolve([])
            }
        }).catch( err => {
            reject(err);
        }) ;
    });
}

const getDrinkDetail = (drinkId) => {
    return getURL("http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+drinkId)
};

const getURL = (url) => {
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
};

const updateDetailFor = (drinks) => {
    return new Promise((resolve, reject) => {

        let promises = drinks.map((drink) => {
            return getDrinkDetail(drink.idDrink) 
        })

        Promise.all(promises)
        .then((values) => {
            let dinks = values.map((item) => {
                let drink = item.drinks[0]
                drink.ingredients = buildArrayFor(drink, "strIngredient")
                drink.measures = buildArrayFor(drink, "strMeasure")
                return drink
            });
            resolve(dinks);
        }).catch((err) => {
            reject(err)
        });
    });
};

const buildArrayFor = (drink, fieldPrefix) => {
    let array = []

    for (let index = 1; index <= 15; index++) {
        const key = fieldPrefix+index
        if (drink[key]) {
            array.push(drink[key])
        }
    }
    return array;
}


export default {
    getDrinks,
    getDrinkDetail,
};
