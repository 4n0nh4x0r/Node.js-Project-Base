module.exports = {
    name:"Startup_function",
    async function(){
        // Put any code here that you want to be executed on startup

        // We are now calling the example function from the example folder
        mapFunctions.get("example").function("Startup")
    }
}