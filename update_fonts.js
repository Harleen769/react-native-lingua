const fs = require('fs');
const path = './app';
const files = fs.readdirSync(path).filter(f => f.endsWith('.tsx'));
files.forEach(f => {
    let content = fs.readFileSync(path + '/' + f, 'utf8');
    content = content.replace(/fontWeight:\s*'800'/g, "fontFamily: 'Nunito_800ExtraBold'");
    content = content.replace(/fontWeight:\s*'700'/g, "fontFamily: 'Nunito_700Bold'");
    content = content.replace(/fontWeight:\s*'600'/g, "fontFamily: 'Nunito_700Bold'");
    content = content.replace(/fontWeight:\s*'500'/g, "fontFamily: 'Nunito_400Regular'");
    fs.writeFileSync(path + '/' + f, content);
});
console.log('Done!');
