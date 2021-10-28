module.exports = {
    name:"example", // Unique name for our function that will later be used to get the function from the map via "mapFunctions.get("example").function()"
    async function(randomParameter){
        // Here we put a simple console.log to show how the system works
        // This function will be called from the @startup.js function in the utility folder
        console.log(`\n------------\nThis is the example function called by the ${randomParameter} function\n------------\n`);
    }
}