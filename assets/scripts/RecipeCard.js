// RecipeCard.js

class RecipeCard extends HTMLElement {
	// Called once when document.createElement('recipe-card') is called, or
	// the element is written into the DOM directly as <recipe-card>
	constructor() {
		super(); // Inherit everything from HTMLElement

		// EXPOSE - START (All expose numbers start with A)
		// A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
		this.shadow = this.attachShadow({ mode: 'open' });
		// A2. TODO - Create an <article> element - This will hold our markup once our data is set
		this.articleElement = document.createElement('article');

		const styleElement = document.createElement('style');		// A3. TODO - Create a style element - This will hold all of the styles for the Web Component
		styleElement.textContent = `
        * {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
        }
        article {
            border: 1px solid #d1d1d1;
            border-radius: 8px;
            overflow: hidden;
            width: 178px;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.15);
        }
        article img {
            width: 100%;
        }
        p {
            padding: 0 16px;
        }
        p.title {
            font-weight: bold;
            font-size: 16px;
            margin-top: 8px;
            color: #333;
        }
        p.organization {
            color: #aaa;
            font-size: 14px;
        }
        div.rating {
            display: flex;
            align-items: center;
            padding: 8px 16px;
        }
        div.rating img {
            width: 18px;
            height: 18px;
            margin-right: 5px;
        }
        time {
            padding-left: 16px;
            color: #888;
            font-size: 14px;
        }
        p.ingredients {
            padding: 0 16px 16px;
            color: #555;
            font-size: 14px;
        }
        `;// A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made (copy everything INSIDE the <style> tag>)
		
		
		// A5. TODO - Append the <style> and <article> elements to the Shadow DOM
		this.shadow.appendChild(styleElement);
		this.shadow.appendChild(this.articleElement);
	}

	/**
	 * Called when the .data property is set on this element.
	 *
	 * For example:
	 * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
	 * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
	 *
	 * @param {Object} data - The data to pass into the <recipe-card> must be of the
	 *                        following format:
	 *                        {
	 *                          "imgSrc": "string",
	 *                          "imgAlt": "string",
	 *                          "titleLnk": "string",
	 *                          "titleTxt": "string",
	 *                          "organization": "string",
	 *                          "rating": number,
	 *                          "numRatings": number,
	 *                          "lengthTime": "string",
	 *                          "ingredients": "string"
	 *                        }
	 */
	set data(data) {
		// If nothing was passed in, return
		if (!data) return;

		// A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
		const article = this.articleElement;
		// A7. TODO - Set the contents of the <article> with the <article> template given in
		//           cardTemplate.html and the data passed in (You should only have one <article>,
		//           do not nest an <article> inside another <article>). You should use template
		//           literals (template strings) and element.innerHTML for this.
		// 			 Do NOT include the <article> tags within the innerHTML of the element you create.
		//           Remember to replace all the placeholders in the template with the data passed in.
		//           i.e. imgSrc, titleLnk, etc
		article.innerHTML = `
			<img src="${data.imgSrc}" alt="${data.imgAlt}">
			<p class="title">
				<a href="${data.titleLnk}" target="_blank">${data.titleTxt}</a>
			</p>
			<p class="organization">${data.organization}</p>
			<div class="rating">
				<img src="./assets/images/icons/${data.rating}-star.svg" alt="${data.rating} stars">
				<span>${data.rating}</span>
				<span>(${data.numRatings})</span>
			</div>
			<time>${data.lengthTime}</time>
			<p class="ingredients">
				${data.ingredients}
			</p>
		`;
	}
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define('recipe-card', RecipeCard);
