import("./module-imported-in-runtime.js").then(({ default: str }) => {
	console.log(library);
});