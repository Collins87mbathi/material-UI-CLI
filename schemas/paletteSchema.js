const { defaultColors } = require('../utils/constants');

function paletteSchema(palette) {
    if (typeof palette !== 'object') {
        console.log(chalk.red(new Error('Palette validation failed: should be an object but got ' + typeof palette)))
    }

    const warnings = {};
    const errors = {};

    Object.entries(defaultColors).forEach(([color, value]) => {
        if (!palette[color]) {
            warnings[color] = `> Warning: '${color}' color is missing from the palette. MUI will use default (${value}).`;
        }
    });

    Object.entries(palette).forEach(([key, { main }]) => {
        if (!main) {
            errors[key] = `> Error: '${key}.main' is missing`
        }
    });

    return { warnings, errors };
};

module.exports = paletteSchema; 