const { createElement } = require(`react`)

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
	if (pluginOptions.metaTag !== false) {
		setHeadComponents([
			createElement(`link`, { rel: `author`, href: `/humans.txt` })
		])
	}
}
