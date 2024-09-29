const RenderHtml = {
	renderCreateDiary(inDate) {
		console.log("first");
		const MainContainer = document.getElementById("js-main_container");
		MainContainer.innerHTML = "loading";

		const content = `
    			<div class="dairy_container">
    			<button class = 'exit_prev_button' id = "preview_exit_button_js" >
	        <img	src="./assets/icons/exit-outline.svg"	alt="exit-outline"	/>
    	  </button>
    	 
          <input type="text" placeholder="title" class="creatDairy_head_title"
          id="head_title_js" 
          
          >
				<div class="Head_date_container Head_info_container">
					<time
						datetime="2024-09-20"
						id="dairy_time"
						>${inDate} <span> |</span></time
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
					class = "dairy_main_input"
					id="dairy_main_input_js"
					rows="8"
					cols="40"
					placeholder="Whats On Your Mind"
					
				></textarea>
				<button
					type="submit"
					id="add_to_diaries_collection"
				>
					<img
			id="add_icon"
			src="./assets/icons/book-outline.svg"
			alt="add-outline"
		/>
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
		      <h3 class = "preview_diary_head preview_diary_head_js">${dairy.title}</h3>
		      <h5 class = 'time_info'> ${
					dairy.edited ? "<span>Edited On <span>" : ""
				}  ${dairy.date}</h5>
		      
		    </div>
		    <div class = "DairysHead_button_container">
		    <button type="submit" class = "DiarysHead_edit_btn_js">
		    <img class="edit_icon" src="./assets/icons/create-outline.svg"	alt="create-outline"	/></button>
		    <button type="submit" class='DiarysHead_delete_btn'>
		    <img class="delete_icon"	src="./assets/icons/trash-outline.svg"	alt="trash-outline"	/>
		    </button>
		    </div>
		  </div>
		`
		);

		let renderDiaries = "";

		for (let dairy of diarySet) {
			renderDiaries += dairy;
		}

		MainContainer.innerHTML = `   
		<div id='dairyHead_main_container'>
	<div id='dairyHead_main_container_head' >	
	   <img
			id="logo"
			src="./assets/pics/my-diary-black-lettering-with-doodle-hearts-vector-illustration_634954-2334.avif"
			alt="logo-outline"
		/>
	 </div>
		${renderDiaries}
		<button id='create_NewDiary_Button' class="NewDiary_Button">
		<img id="add_icon" src="./assets/icons/add-outline.svg"	alt="add-outline"	/>
		</button>
		</div>
		`;
	},
	renderPreview(dairy) {
		console.log(dairy);
		const MainContainer = document.getElementById("js-main_container");
		MainContainer.innerHTML = "";

		const dairyPreview = `  		
	  <div class="preview_diary_container">
	  <button class = 'exit_prev_button' id = "preview_exit_button_js" >
	   <img
				src="./assets/icons/exit-outline.svg"	alt="exit-outline"	/>
	  </button>
				<h3 class="preview_title">${dairy.title}</h3>
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
       <div class = "preview_text_context_container">
				<p class="preview_text_context">
					${dairy.context}
				</p>
			 </div>
			</div> `;

		MainContainer.innerHTML = dairyPreview;
	},
	
	renderSettings(dairy) {
		console.log(dairy);
		const MainContainer = document.getElementById("js-main_container");
		MainContainer.innerHTML = "";
	  
	}
	
	
};

export default RenderHtml;
