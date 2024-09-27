import RenderHtml from "../scripts/renderHtml.js";
import { MyDiarys } from "../scripts/dairys.js";

let DiaryLists = [...MyDiarys];

const { renderCreateDiary, renderDiarysHead, renderPreview } = RenderHtml;

function diaryListRender(value) {
	renderDiarysHead(value);
	diaryListEventListner();
}

function diaryListEventListner() {
	const newDiaryButton = document.getElementById("create_NewDiary_Button");
	newDiaryButton.onclick = renderCreateDiary;

	const allDiaryDeleteBtn = document.querySelectorAll(
		".DiarysHead_delete_btn"
	);

	allDiaryDeleteBtn.forEach((deletebtn, idx) => {
		deletebtn.addEventListener("click", () => deleteDairy(idx));
	});
}

function deleteDairy(idx) {
	console.log(idx);
	let selectedDiarys = DiaryLists.filter((_, i) => {
		return i != idx;
	});
	DiaryLists = selectedDiarys;
	diaryListRender(DiaryLists);
}

diaryListRender(DiaryLists);
