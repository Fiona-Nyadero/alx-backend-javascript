export default function appendToEachArrayValue(array, appendString) {
	const arrEnd = [];
	for (const idx of array) {
		arrEnd.push(`${appendString}${idx}`;
	}

  	return arrEnd;
}
