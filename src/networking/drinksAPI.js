class DrinksAPI {
    constructor(){
        this.base = "http://www.thecocktaildb.com/api/json/v1/1/"
    }

    getDrinks() {
        return new Promise((resolve, reject) => {
            return this.getURL(this.base + "filter.php?g=Cocktail_glass")
            .then(response => {
                if (response.drinks) {
                    this.updateDetailFor(response.drinks)
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

    getDrinkDetail(drinkId) {
        return this.getURL(this.base + "lookup.php?i=" + drinkId)
    }

    getURL(url) {
        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }
    
    updateDetailFor(drinks) {
        return new Promise((resolve, reject) => {
    
            let promises = drinks.map((drink) => {
                return this.getDrinkDetail(drink.idDrink)
            })
    
            Promise.all(promises)
            .then((values) => {
                let dinks = values.map((item) => {
                    let drink = item.drinks[0]
                    drink.ingredients = this.buildArrayFor(drink, "strIngredient")
                    drink.measures = this.buildArrayFor(drink, "strMeasure")
                    return drink
                });
                resolve(dinks);
            }).catch((err) => {
                reject(err)
            });
        });
    };
    
    buildArrayFor(drink, fieldPrefix) {
        let array = []
    
        for (let index = 1; index <= 15; index++) {
            const key = fieldPrefix+index
            if (drink[key]) {
                array.push(drink[key])
            }
        }
        return array;
    }
    
}

const drinksAPI = new DrinksAPI()

export default drinksAPI;
