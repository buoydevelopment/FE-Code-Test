class BaseAPI {
    constructor(base){
        this.base = base;
    }

    getURL(endPoint) {
        return fetch(this.base + endPoint.urlString(), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }

}

class EndPoint {
    constructor(path, params) {
        this.path = path;
        this.params = params;
    }

    urlString() {
        const params = [];
        for (let key in this.params) {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(this.params[key]));
        }
        return this.path + "?" + params.join('&');
    }
}

class DrinksEndpoint extends EndPoint {
    constructor() {
        super("filter.php", {"g": "Cocktail_glass"})
    }
}

class DrinkEndpoint extends EndPoint {
    constructor(drinkId) {
        super("lookup.php", {"i": drinkId})
    }
}

class DrinksAPI extends BaseAPI {
    constructor() {
        super("http://www.thecocktaildb.com/api/json/v1/1/");
    }

    getDrinks() {
        return new Promise((resolve, reject) => {
            return this.getURL(new DrinksEndpoint())
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
        return this.getURL(new DrinkEndpoint(drinkId))
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
