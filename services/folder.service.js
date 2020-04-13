const fs = require("fs");

const addStylesFolder = (name, defaultFolder) => {
    const folderNames = name.split("/");
    folderNames.map((folder, i) => {
        if (folderNames.length - 1 !== i) {
            defaultFolder = defaultFolder + "/" + folder;
            if (!fs.existsSync(defaultFolder)) fs.mkdirSync(defaultFolder);
        }
    })
}

module.exports = {
    components: (name) => {
        if (!fs.existsSync("./src")) fs.mkdirSync("./src");
        if (!fs.existsSync("./src/components")) fs.mkdirSync("./src/components");

        if (name.includes("/")) {
            let defaultFolder = "./src/components";
            addStylesFolder(name, defaultFolder);
        }
    },
    pages: (name) => {
        if (!fs.existsSync("./src")) fs.mkdirSync("./src");
        if (!fs.existsSync("./src/pages")) fs.mkdirSync("./src/pages");

        if (name.includes("/")) {
            let defaultFolder = "./src/pages";
            addStylesFolder(name, defaultFolder);
        }
    },
    styles: () => {
        if (!fs.existsSync("./styles")) fs.mkdirSync("./styles");
    }
}