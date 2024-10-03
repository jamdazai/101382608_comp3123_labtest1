/**
 * Lab Test 1 for Full Stack Development
 * @author: Jam Furaque
 */

const fs = require('fs');
const path = require('path');

const logs = path.join(__dirname, 'logs');
if(fs.existsSync(logs)) {
    const files = fs.readdirSync(logs);
    files.forEach(file => {
        const filePath = path.join(logs, file);
        fs.unlinkSync(filePath);
        console.log(`delete files... ${file}`);
    });
    fs.rmdirSync(logs);
} else {
    console.log('Log directory doesnt exist.');
}