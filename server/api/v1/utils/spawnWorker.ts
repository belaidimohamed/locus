export function spawnWorker<
  X extends  { on(a: string, b: Function): void }, 
  Y extends {fork(): X }>
  (workers: Array<X>, cluster: Y, i: number) {
  workers[i] = cluster.fork();

  // Optional: Restart worker on exit
  workers[i].on('exit', () => {
    console.log('respawning worker', i);
    spawnWorker(workers, cluster, i);
  });
};