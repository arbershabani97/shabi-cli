const fs = require("fs");
const createFile = require("./createFile.service");

module.exports = async (name, target) => {
    const folders = name.split("/").slice(0, -1).join("/");
    const onlyName = name.split("/").pop();

    const folderTarget = `${target}/${folders}/styles`;

    if (!fs.existsSync(`./${folderTarget}`)) fs.mkdirSync(`./${folderTarget}`);

    await createFile(`${folderTarget}/${onlyName}.scss`, "");
    console.log("Style Created");
}