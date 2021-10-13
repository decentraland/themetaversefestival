const humans = require(`humans-generator`)
const { promisify } = require(`util`)
const { writeFile } = require(`fs`)
const { join } = require(`path`)

exports.onPostBuild = async (api, pluginOptions) => {
	const filePath = join(`./public`, `humans.txt`)

	delete pluginOptions.plugins
	delete pluginOptions.metaTag

	try {
		const humansTxt = await promisify(humans)(pluginOptions)
		await promisify(writeFile)(filePath, humansTxt.join(`\n`))
	} catch (error) {
		console.error(error)
		throw error
	}
}
