# Node.js-Project-Base
## What is this thing?
Have you ever programmed a project that took more than a second to start up, for example a discord bot?  
Then you probably encountered getting impatient, or being afraid of hitting the ratelimit for logins.  
If that is the case, then this peoject base is the perfect solution for you.

This project base allows you to add/edit/remove functionality (modules) at any time on runtime without having to restart the project.
That way ratelimits like discord's 1 login per 5 seconds for example wont be hit, as the bot simply doesnt need to restart to add features.
On top of that, this system also allows for having your code nicely structured, with each module being one functionality, making your code much much cleaner.

## How do i use this?
It is actually very simple to use, i write quite a few comments throughout the files, eplaining how they work, and what they do.  
But here is a small guide on how  

1.) You clone the repo (obviously)  
2.) You have node.js installed (duuuuh) (i work with version 16, should work with pretty much any version tho)  
3.) Start the program with either `node index` or `npm start`  
    If you get a status output, then it works and you can proceed implementing your next project in it  
4.) Look into the `modules` folder and understand the structure it has  
    In this folder you can create direct subfolders (NOT SUBFOLDERS IN SUBFOLDERS OF MODULES)  
5.) Take a look at the example.js file, and use it as base for your modules  
    Note that you can add pretty much any objects that you want, the name object must stay as that one is used for identifying the module, but you can add functions as you want  
6.) If you have added/removed or edited any modules, you can now while the program is running, type in reload into its cli and it will reload all the modules  
7.) Profit

