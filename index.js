// Loading required packages
require("./requires.js")
console.log(start);


// Initialising map to be used to store the functionality later on for reloadability
mapFunctions = new Map()


// Loading the Function Map
var path = `${mainDir}/modules`
var folders = fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
});
folders.forEach(element => {
    var commandFiles = fs.readdirSync(`${mainDir}/modules/${element}`).filter(file => file.endsWith('.js') && !file.startsWith("index"));
    for (const file of commandFiles) {
        delete require.cache[require.resolve(`${mainDir}/modules/${element}/${file}`)];
        const command = require(`${mainDir}/modules/${element}/${file}`);
        mapFunctions.set(command.name, command);
    }
});


// The startup information for the project, here you can add stuff that might be nice to see when the app starts
mapFunctions.get("Startup_function").function()
console.log("------------------------------------ Status ------------------------------------");
console.log(__dirname);
console.log(platform);
console.log(`The Startup took ${new Date() - start}ms`)
console.log(`${mapFunctions.size} Function modules loaded`);
console.log("--------------------------------------------------------------------------------");







// --------------------------------------------------------- CLI COMMANDS --------------------------------------------------------- //

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on("line", data =>{
    const args = data.trim().split(" ");
    const command = args.shift().toLowerCase();
    mapFunctions.get("cliCommands").function(command, args)
})
