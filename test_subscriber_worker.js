const { Worker } = require('worker_threads');
const readline = require('readline');

let worker = null;

function startWorker() {
  // Terminate existing worker if any
  if (worker) {
    worker.terminate();
    worker = null;
  }
  
  // Create a new worker
  worker = new Worker('./waitset_subscriber_worker.js');
  
  worker.on('message', (message) => {
    console.log('Worker message:', message);
  });
  
  worker.on('error', (error) => {
    console.error('Worker error:', error);
  });
  
  worker.on('exit', (code) => {
    console.log(`Worker exited with code ${code}`);
  });
  
  return worker;
}

// Start the worker initially
startWorker();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Worker started. Type:\n - "p" to pause\n - "r" to resume\n - "q" to quit');

rl.on('line', (input) => {
    const command = input.trim().toLowerCase();
    if (command === 'q') {
      console.log('Quitting application...');
      if (worker) {
          worker.terminate();
      }
      process.exit(0);        
    } else if (command === 'p') {        
      if (worker) {
          console.log('Pausing worker...');
          worker.postMessage('pause');            
      }        
    } else if (command === 'r') {
      console.log('Resuming worker...');
      worker.postMessage('resume');        
    }
});


