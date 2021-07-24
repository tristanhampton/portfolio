const { Liquid } = require("liquidjs");

module.exports = function(config) {

	//--- Misc Options
	// Additional files to watch for changes
	config.addWatchTarget("./eleventy/");

	//--- Adds static files to _Site
	config.addPassthroughCopy({"src/assets/css": "css"});
	config.addPassthroughCopy({"src/assets/js": "js"});
	config.addPassthroughCopy({"src/assets/img": "img"});
	config.addPassthroughCopy({"src/assets/fonts": "fonts"});

	

	return {
		pathPrefix: "/", // useful for GitHub pages
		dir: {
			input: "./",
			output: "_site",
			includes: "src/includes",
			layouts: "src/layouts",
			data: "src/data"
		}
	};
}