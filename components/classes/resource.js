const createClassComponent = require("./class");
const camelToKebab = require("../../services/camelToKebab.service");
module.exports = async (name) => {

    let Name = name.split("/").pop().capitalize();
    if (!Name.endsWith("s")) Name = Name + "s";
    const folderName = name.split("/").map(_name => camelToKebab(_name.toLowerFirst())).join("/");
    const nameSingle = Name.slice(0, -1);

    await createClassComponent(`${folderName}/${Name}`);
    await createClassComponent(`${folderName}/_Header`);
    await createClassComponent(`${folderName}/${nameSingle}`);
    await createClassComponent(`${folderName}/resources/Create${nameSingle}`);
    await createClassComponent(`${folderName}/resources/Delete${nameSingle}`);
    await createClassComponent(`${folderName}/resources/Edit${nameSingle}`);
    await createClassComponent(`${folderName}/resources/List${Name}`);
    await createClassComponent(`${folderName}/resources/Show${nameSingle}`);
}