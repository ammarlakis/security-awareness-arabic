import chokidar from 'chokidar';
import { exec } from 'child_process';

// Watch for file changes in the workspace
const watcher = chokidar.watch('.', {
  ignored: /node_modules|\.git|dist/,
  persistent: true
});

const runCommand = (command, description) => {
  console.log(`Running: ${description}`);
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error during ${description}:`, error);
      return;
    }
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  });
};

watcher.on('change', (path) => {
  console.log(`File changed: ${path}`);

  // Build the project
  runCommand('npm run build', 'Build');

  // Commit and push changes
  runCommand('git add .', 'Staging changes');
  runCommand('git commit -m "WIP"', 'Committing changes');
  runCommand('git push', 'Pushing changes');
});

console.log('Watching for file changes...');