const fs = require("fs");
const path = require("path");

const folderToMonitor = "../folder";

fs.watch(folderToMonitor, { recursive: true }, (eventType, filename) => {
  if (filename) {
    const filePath = path.join(folderToMonitor, filename);
    switch (eventType) {
      case "rename":
        if (fs.existsSync(filePath)) {
          const currentDate = new Date();
          console.log(`File created: ${filePath}`, currentDate);
        } else {
          const currentDate = new Date();
          console.log(`File deleted: ${filePath}`, currentDate);
        }
        break;
      case "change": {
        const currentDate = new Date();
        console.log(`File modified: ${filePath}`, currentDate);
        break;
      }
      default:
        {
          const currentDate = new Date();
          console.log(
            `Unknown event type: ${eventType} for file: ${filePath}`,
            currentDate
          );
        }
        break;
    }
  } else {
    console.log("Filename not provided.");
  }
});
const currentDate = new Date();
console.log(
  `Monitoring changes in folder: ${path.resolve(folderToMonitor)}`,
  currentDate
);
