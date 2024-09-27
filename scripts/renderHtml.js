const RenderHtml = {
	renderCreateDiary(inDate) {
		console.log("first");
		const MainContainer = document.getElementById("js-main_container");
		MainContainer.innerHTML = "loading";

		const content = `
    			<div class="dairy_container">
          <input type="text" placeholder="Tittle" class="head_title"
          id="head_tittle_js" 
          
          >
				<div class="Head_date_container">
					<time
						datetime="2024-09-20"
						id="dairy_time"
						>${inDate}</time
					>
					<p
						class="characters_input_count"
						id="js-characters_input_count"
					>
						0 characters
					</p>
				</div>

        <textarea 
					name="dairy_main"
					id="dairy_main_input_js"
					rows="8"
					cols="40"
					placeholder="Whats On Your Mind"
					
				></textarea>
				<button
					type="submit"
					id="add_to_diaries_collection"
				>
					ADD
				</button>
			</div>
    `;
		MainContainer.innerHTML = content;
	},
	renderDiarysPreviewHead(dairies) {
		const MainContainer = document.getElementById("js-main_container");
		MainContainer.innerHTML = "";

		let diarySet = dairies.map(
			(dairy, idx) => `
		 <div class="preview-container preview_diary_container_js" data-diary-collection = '${idx}'>
		    <div>
		      <h3>${dairy.tittle}</h3>
		      <h5>${dairy.date}</h5>
		      
		    </div>
		    <button type="submit" class = "DiarysHead_edit_btn_js">Edit</button>
		    <button type="submit" class='DiarysHead_delete_btn'>Delete</button>
		  </div>
		`
		);

		let renderDiaries = "";

		for (let dairy of diarySet) {
			renderDiaries += dairy;
		}

		MainContainer.innerHTML = `    <h1>Welcome</h1>
		<h6>Double click on Heading to view Diay Page</h6>
		${renderDiaries}
		<button id='create_NewDiary_Button'>New Diary</button>
		`;
	},
	renderPreview(dairy) {
		console.log(dairy);
		const MainContainer = document.getElementById("js-main_container");
		MainContainer.innerHTML = "";

		const dairyPreview = `  		
	  <div class="preview_diary_container">
	  <button class = 'exit_button' id = "preview_exit_button_js" >exit</button>
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
						${dairy.characters}
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
