
const fs = require('fs');
const path = require('path');
const p = path.dirname('C:\Users\acer\Desktop\Nodejs Task>')
fs.watch(p, (eventType, filename) => {
  if (eventType === 'change') {
    var date = new Date();
    console.log(`${filename} was changed at ` + date.toString());
  }
  else if (eventType === 'rename') {
    if (fs.existsSync(filename)) {
      var date = new Date();
      console.log(`${filename} was created at ` + date.toString());
    } else {
      var date = new Date();
      console.log(`${filename} was deleted at ` + date.toString());
    }
  }
});
