export function getTodayDate() {
	const date = new Date();
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	};
	const formattedDate = date.toLocaleDateString("en-US", options);
	return formattedDate;
}

export function calculateChars(input, output) {
	const userInput = input.value.length;
	output.textContent = `${userInput} characters`;
	userOutput = output.textContent;
	return userOutput;
}

export function modifyMyListOfDiary(array, idx, newValue) {
	array.splice(idx, 1, newValue);
	//array.splice(index, 0, newValue);
	//Adds 3 at index 2
}
