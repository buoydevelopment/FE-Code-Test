/* global fetch:false */
import apiConfig from "./config";

const endPoints = {
	getLists: 'filter.php?g=Cocktail_glass',
	getDetail: 'lookup.php?i='
};

export const getLists = () => {
	return new Promise((resolve, reject) => {
		fetch(`${apiConfig.url}${endPoints.getLists}`, {
			method: "GET",
		}).then(response => response.json()).then(response => resolve(response)).catch(error => { console.log(error); reject(error); });
	});
};

export const getDetails = (id) => {
	return new Promise((resolve, reject) => {
		fetch(`${apiConfig.url}${endPoints.getDetail}${id}`, {
			method: "GET",
		}).then(response => response.json()).then(response => resolve(response)).catch(error => { console.log(error); reject(error); });
	});
};
