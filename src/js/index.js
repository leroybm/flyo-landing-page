import '../css/main.scss'
import staticData from '../data/static.json'
import mainTemplate from '../views/main.hbs'

/**
 * Injects a handlebar template to the page
 *
 * @param { Handlebars } template - A handlebars template file
 * @param { Object } data - Data to be passed to handlerbar template
 */
function injectTemplate(template, data = {}) {
	if (!template) {
		return;
	}

	const div = document.createElement('div')
	div.innerHTML = template(data)
	document.body.appendChild(div)
}

document.addEventListener('DOMContentLoaded', () => injectTemplate(mainTemplate, staticData))
