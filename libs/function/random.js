/**
 * 该方法可以返回在"min"和"max"之间的数值，要求"min"和"max"都为数值
 * 且"max"大于或等于"min"，否则返回0.
 * @param {*} min 
 * @param {*} max 
 */
function random(min, max) {
	if (min >= 0 && max > 0 && max >= min) {
		let gab = max - min + 1;
		return Math.floor(Math.random() * gab + min);
	} else {
		return 0;
	}
}

export default random;
