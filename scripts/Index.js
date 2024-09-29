import RenderHtml from "../scripts/renderHtml.js";
import { MyDiarys } from "../scripts/dairys.js";

import {
	getTodayDate,
	calculateChars,
	modifyMyListOfDiary,
	setToLocalStorage,
	getDairyFromStorage
} from "./sidefunctions.js";

let DiaryLists = getDairyFromStorage();

if (!DiaryLists) {
	DiaryLists = [...MyDiarys];
	setToLocalStorage(DiaryLists);
}

const { renderCreateDiary, renderDiarysPreviewHead, renderPreview } =
	RenderHtml;

function diaryListRender(value) {
	renderDiarysPreviewHead(value);
	diaryListEventListner();
}

function diaryListEventListner() {
	const allDiaryPreview = document.querySelectorAll(".preview_diary_head_js");

	allDiaryPreview.forEach((preview, idx) => {
		preview.addEventListener("click", () => showPreview(idx));
	});

	const newDiaryButton = document.getElementById("create_NewDiary_Button");
	newDiaryButton.addEventListener("click", () => {
		renderCreateDiary(getTodayDate());
		newDairyEventListners();
	});

	const allDiaryEditBtn = document.querySelectorAll(
		".DiarysHead_edit_btn_js"
	);

	allDiaryEditBtn.forEach((editbtn, idx) => {
		editbtn.addEventListener("click", () => editDairy(idx));
	});

	const allDiaryDeleteBtn = document.querySelectorAll(
		".DiarysHead_delete_btn"
	);

	allDiaryDeleteBtn.forEach((deletebtn, idx) => {
		deletebtn.addEventListener("click", () => deleteDairy(idx));
	});
}

function showPreview(idx) {
	const getDiaryList = getDairyFromStorage();
	console.log(idx);
	let selectedDiarys = getDiaryList.filter((_, i) => {
		return i == idx;
	});
	// 	console.log(selectedDiarys);
	renderPreview(selectedDiarys[0]);
	ExitButtonEventListner();
}

function editDairy(idx) {
	const getDiaryList = getDairyFromStorage();
	console.log(idx);
	let selectedDiarys = getDiaryList.filter((_, i) => {
		return i === idx;
	});
	renderCreateDiary(selectedDiarys[0]);
	addEditContent(selectedDiarys[0], idx);
}

function addEditContent(editDairy, idx) {
	console.log(editDairy);
	const diarytitle = document.getElementById("head_title_js");
	diarytitle.value = editDairy.title;
	const time = document.getElementById("dairy_time");
	time.textContent = `${getTodayDate()} |`;
	const diaryChars = document.getElementById("js-characters_input_count");
	diaryChars.textContent = editDairy.characters;
	const mainContent = document.getElementById("dairy_main_input_js");
	mainContent.value = editDairy.context;

	mainContent.addEventListener("input", () =>
		calculateChars(mainContent, diaryChars)
	);
	AddEditEventListner(idx);
	ExitButtonEventListner()
}

function AddEditEventListner(idx) {
	const AddDiaryBtn = document.getElementById("add_to_diaries_collection");
	console.log(AddDiaryBtn);
	AddDiaryBtn.addEventListener("click", () => ModifyDairyList(idx));
}

function ModifyDairyList(idx) {
	console.log("loaded clicked");

	const resultObject = getValuesFromRenderCreateDiary();

	resultObject.edited = true;

	modifyMyListOfDiary(DiaryLists, idx, resultObject);
	setToLocalStorage(DiaryLists);
	diaryListRender(DiaryLists);
}

function deleteDairy(idx) {
	console.log(idx);
	let selectedDiarys = DiaryLists.filter((_, i) => {
		return i != idx;
	});
	DiaryLists = selectedDiarys;
	setToLocalStorage(DiaryLists);
	diaryListRender(DiaryLists);
}

function newDairyEventListners() {
	console.log("loaded");

	const diaryChars = document.getElementById("js-characters_input_count");
	const mainContent = document.getElementById("dairy_main_input_js");

	mainContent.addEventListener("input", () =>
		calculateChars(mainContent, diaryChars)
	);

	ExitButtonEventListner();
	const AddDiaryBtn = document.getElementById("add_to_diaries_collection");
	document.getElementById("head_title_js").value = "Untitled";
	console.log(AddDiaryBtn);
	AddDiaryBtn.addEventListener("click", () => addNewDiary());
}

function addNewDiary() {
	console.log("loaded clicked");

	let mainContent = document.getElementById("dairy_main_input_js").value;

	if (!mainContent) {
		diaryListRender(DiaryLists);
		return;
	}

	const resultObject = getValuesFromRenderCreateDiary();

	DiaryLists.unshift(resultObject);
	setToLocalStorage(DiaryLists);
	diaryListRender(DiaryLists);
	// 	console.log(DiaryObject);
}

function getValuesFromRenderCreateDiary() {
	const diarytitle = document.getElementById("head_title_js").value;
	const time = document.getElementById("dairy_time").textContent;
	const diaryChars = document.getElementById(
		"js-characters_input_count"
	).textContent;
	const mainContent = document.getElementById("dairy_main_input_js").value;
	const DiaryObject = {
		title: diarytitle,
		date: time,
		characters: diaryChars,
		context: mainContent,
		edited: false
	};
	return DiaryObject;
}

function ExitButtonEventListner() {
	const exitButton = document.getElementById("preview_exit_button_js");

	exitButton.addEventListener("click", () => {
		console.log("whayyyyy");
		return diaryListRender(DiaryLists);
	});
}

diaryListRender(DiaryLists);
