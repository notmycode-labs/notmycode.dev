import fs from 'fs';
import path from 'path';

function getFilesSizeAndCount(dir) {
  let totalSize = 0;
  let fileCount = 0;

  function traverseDir(directory) {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        traverseDir(filePath);
      } else {
        totalSize += stats.size;
        fileCount += 1;
      }
    });
  }

  traverseDir(dir);
  return { totalSize, fileCount };
}

export default function sizeReportPlugin() {
  return {
    name: 'vite-plugin-size-report',

    closeBundle() {
      const clientDir = path.join(process.cwd(), '.svelte-kit/output/client');
      const serverDir = path.join(process.cwd(), '.svelte-kit/output/server');

      const clientInfo = getFilesSizeAndCount(clientDir);
      console.log(`Client artifact: ${clientInfo.fileCount} files, ${clientInfo.totalSize / 1024} KB`);

      const serverInfo = getFilesSizeAndCount(serverDir);
      console.log(`Server artifact: ${serverInfo.fileCount} files, ${serverInfo.totalSize / 1024} KB`);
    }
  };
}
