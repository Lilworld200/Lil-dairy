import RenderHtml from "../scripts/renderHtml.js";
import { MyDiarys } from "../scripts/dairys.js";

import {
	getTodayDate,
	calculateChars,
	modifyMyListOfDiary
} from "./sidefunctions.js";

let DiaryLists = [...MyDiarys];

const { renderCreateDiary, renderDiarysPreviewHead, renderPreview } =
	RenderHtml;

function diaryListRender(value) {
	renderDiarysPreviewHead(value);
	diaryListEventListner();
}

function diaryListEventListner() {
	const allDiaryPreview = document.querySelectorAll(
		".preview_diary_container_js"
	);

	allDiaryPreview.forEach((preview, idx) => {
		preview.addEventListener("dblclick", () => showPreview(idx));
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
	console.log(idx);
	let selectedDiarys = DiaryLists.filter((_, i) => {
		return i == idx;
	});
	// 	console.log(selectedDiarys);
	renderPreview(selectedDiarys[0]);
	renderPreviewEventListners();
}

function editDairy(idx) {
	console.log(idx);
	let selectedDiarys = DiaryLists.filter((_, i) => {
		return i === idx;
	});
	renderCreateDiary(selectedDiarys[0]);
	addEditContent(selectedDiarys[0], idx);
}

function addEditContent(editDairy, idx) {
	console.log(editDairy);
	const diarytitle = document.getElementById("head_tittle_js");
	diarytitle.value = editDairy.tittle;
	const time = document.getElementById("dairy_time");
	time.textContent = getTodayDate();
	const diaryChars = document.getElementById("js-characters_input_count");
	diaryChars.textContent = editDairy.characters;
	const mainContent = document.getElementById("dairy_main_input_js");
	mainContent.value = editDairy.context;

	mainContent.addEventListener("input", () =>
		calculateChars(mainContent, diaryChars)
	);
	AddEditEventListner(idx);
}

function AddEditEventListner(idx) {
	const AddDiaryBtn = document.getElementById("add_to_diaries_collection");
	console.log(AddDiaryBtn);
	AddDiaryBtn.addEventListener("click", () => ModifyDairyList(idx));
}

function ModifyDairyList(idx) {
	console.log("loaded clicked");
	
	const resultObject = getValuesFromRenderCreateDiary()
	
	modifyMyListOfDiary(DiaryLists, idx, resultObject);
	diaryListRender(DiaryLists);
}

function deleteDairy(idx) {
	console.log(idx);
	let selectedDiarys = DiaryLists.filter((_, i) => {
		return i != idx;
	});
	DiaryLists = selectedDiarys;
	diaryListRender(DiaryLists);
}

function newDairyEventListners() {
	console.log("loaded");

	const diaryChars = document.getElementById("js-characters_input_count");
	const mainContent = document.getElementById("dairy_main_input_js");

	mainContent.addEventListener("input", () =>
		calculateChars(mainContent, diaryChars)
	);

	const AddDiaryBtn = document.getElementById("add_to_diaries_collection");
	document.getElementById("head_tittle_js").value = "Untitled";
	console.log(AddDiaryBtn);
	AddDiaryBtn.addEventListener("click", () => addNewDiary());
}

function addNewDiary() {
	console.log("loaded clicked");

	const resultObject = getValuesFromRenderCreateDiary();

	DiaryLists.push(resultObject);
	diaryListRender(DiaryLists);
	// 	console.log(DiaryObject);
}

function getValuesFromRenderCreateDiary() {
	const diarytitle = document.getElementById("head_tittle_js").value;
	const time = document.getElementById("dairy_time").textContent;
	const diaryChars = document.getElementById(
		"js-characters_input_count"
	).textContent;
	const mainContent = document.getElementById("dairy_main_input_js").value;
	const DiaryObject = {
		tittle: diarytitle,
		date: time,
		characters: diaryChars,
		context: mainContent
	};
	return DiaryObject;
}

function renderPreviewEventListners() {
	const exitButton = document.getElementById("preview_exit_button_js");

	exitButton.addEventListener("click", () => diaryListRender(DiaryLists));
}

diaryListRender(DiaryLists);
