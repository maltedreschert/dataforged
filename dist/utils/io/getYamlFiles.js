import fs from "fs";
const basePath = "./src/data";
/**
 * It returns an array of all the yaml filepaths in the directory.
 * @param dir - The directory to search in.
 * @param root - The root directory of the project.
 * @returns An array of file paths.
 */
export function getYamlFiles(dir = "", root = basePath) {
    const path = dir.length ? `${root.toString()}/${dir}` : root;
    return fs
        .readdirSync(path)
        .filter(file => !file.startsWith("_") && !file.startsWith(".") && file.match(/.*\.yaml/))
        .map(str => (`${path.toString()}/${str}`));
}
//# sourceMappingURL=getYamlFiles.js.map