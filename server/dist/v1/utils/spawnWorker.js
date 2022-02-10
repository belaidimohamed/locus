"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawnWorker = void 0;
function spawnWorker(workers, cluster, i) {
    workers[i] = cluster.fork();
    // Optional: Restart worker on exit
    workers[i].on('exit', () => {
        console.log('respawning worker', i);
        spawnWorker(workers, cluster, i);
    });
}
exports.spawnWorker = spawnWorker;
;
