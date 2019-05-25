const fs = require('fs');

const files = fs.readdirSync('dist');

if (files.includes('css.js')) {
    process.exit(1);
}

process.exit(0);