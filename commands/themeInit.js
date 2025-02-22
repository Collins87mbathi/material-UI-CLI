const path = require("path");
const createTheme = require("../templates/theme");
const fs = require('fs');
const chalk = require('chalk');
const { defaultColors } = require('../utils/constants');

function themeInit(options, showSuccessMessage = true) {
    function updatePalette(color, value) {
        typeof color === "string" ? defaultColors[color] = value : null;
    }

    if (Object.entries(options).length > 0) {
        Object.entries(options).forEach(entry => updatePalette(entry[0], entry[1]));
    }

    const theme = createTheme(defaultColors);

    const themePath = path.join(process.cwd(), "src", "theme", "theme.js");

    try {
        fs.writeFile(themePath, theme, (error, __) => {
            if (error) {
                throw new Error(error);
            }

            showSuccessMessage && console.log(chalk.green("Theme created successfully at"), themePath)
        })
    } catch (error) {
        console.log(error);
    }
};

module.exports = themeInit;