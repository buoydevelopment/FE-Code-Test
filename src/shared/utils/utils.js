export const removeEmpty = (obj) => {
	Object.keys(obj).forEach(function(key) {
		(obj[key] && typeof obj[key] === 'object') && removeEmpty(obj[key]) ||
		(obj[key] === undefined || obj[key] === null || obj[key] === "" || obj[key] === " ") && delete obj[key]
	});
	return obj;
};

export const getObjProps = (obj, str) => Object.keys(obj).filter((k) => k.toLowerCase().includes(str));