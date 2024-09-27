const RenderHtml = {
	renderCreateDiary() {
		console.log("first");
		const MainContainer = document.getElementById("js-main_container");
		MainContainer.innerHTML = "loading";

		const content = `
    			<div class="dairy_container">
          <input type="text" placeholder="Tittle" class="head_title>
				<div class="Head_date_container">
					<time
						datetime="2024-09-20"
						id="dairy_time"
						>September 20, 2024</time
					>
					<p
						class="characters_input_count"
						id="js-characters_input_count"
					>
						200 characters
					</p>
				</div>

        <textarea 
					name="dairy_main"
					id="dairy_main"
					rows="8"
					cols="40"
					placeholder="Whats On Your Mind"
					oninput="changeChars()"
				></textarea>
				<button
					type="submit"
					onclick="addToDiariesColc()"
				>
					ADD
				</button>
			</div>
    `;
		MainContainer.innerHTML = content;
	},
	renderDiarysHead(dairies) {
		const MainContainer = document.getElementById("js-main_container");
		MainContainer.innerHTML = "";

		let diarySet = dairies.map(
			(dairy, idx) => `
		 <div class="preview-container" data-diary-collection = '${idx}'>
		    <div onclick="showDiary(dairy)">${dairy.tittle}</div>
		    <button type="submit" onclick="editDiary(idx)">Edit</button>
		    <button type="submit" class='DiarysHead_delete_btn'>Delete</button>
		  </div>
		`
		);

		let renderDiaries = "";

		for (let dairy of diarySet) {
			renderDiaries += dairy;
		}

		MainContainer.innerHTML = `    <h1>Welcome</h1>
		${renderDiaries}
		<button id='create_NewDiary_Button'>New Diary</button>
		`;
	},
	renderPreview(dairy) {
		const MainContainer = document.getElementById("js-main_container");
		MainContainer.innerHTML = "";

		const dairyPreview = `  		
	  <div class="preview_diary_container">
	  <button class = 'exit_button' >exit</button>
				<h3 class="preview_title">${dairy.tittle}</h3>
				<div class="preview_date_container">
					<time
						datetime="2024-09-20"
						id="dairy_time"
						>${dairy.date}</time
					>
					<p
						class="preview_characters_input_count"
						id="js-preview_characters_input_count"
					>
						200 characters
					</p>
				</div>

				<p class="preview_text_context">
					${dairy.context}
				</p>
			</div> `;

		MainContainer.innerHTML = dairyPreview;
	}
};

export default RenderHtml;
