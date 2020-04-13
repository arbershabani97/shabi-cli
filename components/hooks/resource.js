const createHookComponent = require("./hook");
const camelToKebab = require("../../services/camelToKebab.service");
module.exports = async (name) => {

    let Name = name.split("/").pop().capitalize();
    if (!Name.endsWith("s")) Name = Name + "s";
    const folderName = name.split("/").map(_name => camelToKebab(_name.toLowerFirst())).join("/");
    const nameSingle = Name.slice(0, -1);

    await createHookComponent(`${folderName}/${Name}`);
    await createHookComponent(`${folderName}/_Header`);
    await createHookComponent(`${folderName}/${nameSingle}`);
    await createHookComponent(`${folderName}/resources/Create${nameSingle}`);
    await createHookComponent(`${folderName}/resources/Delete${nameSingle}`);
    await createHookComponent(`${folderName}/resources/Edit${nameSingle}`);
    await createHookComponent(`${folderName}/resources/List${Name}`);
    await createHookComponent(`${folderName}/resources/Show${nameSingle}`);

    process.exit();
}