const {
    exec
} = require("child_process");
const fs = require("fs");
const runCommand = (firstCommand, commandsArr) => {
    commandsArr.forEach(command => {
        exec(`shabi ${firstCommand} ${command}`, (error, stdout) => {
            if (error) return console.error(`exec error: ${error}`);
            console.log(`${stdout}`);
        });
    })
}

module.exports = (name) => {
    var obj = JSON.parse(fs.readFileSync(`./${name}`, 'utf8'));

    if (obj.pages) {
        if (obj.pages.classes) runCommand("page-class", obj.pages.classes);
        if (obj.pages.hooks) runCommand("page-hook", obj.pages.hooks);
    }
    if (obj.components) {
        if (obj.components.classes) runCommand("class", obj.components.classes);
        if (obj.components.hooks) runCommand("hook", obj.components.hooks);
    }
    if (obj.resources) {
        if (obj.resources.classes) runCommand("resource-class", obj.resources.classes);
        if (obj.resources.hooks) runCommand("resource-hook", obj.resources.hooks);
    }
};