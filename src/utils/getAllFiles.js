const fs = require("fs")
const path = require("path")

module.exports = (directory, foldersOnly = false) => {

    let filesName = []

    const files = fs.readdirSync(directory, { withFileTypes: true })

    files.forEach(file => {
        const filePath = path.join(directory, file.name)

        if (foldersOnly) {
            if (file.isDirectory()) {
                filesName.push(filePath)
            }
        } else {
            if (file.isFile()) {
                filesName.push(filePath)
            }
        }


    });

    return filesName

}