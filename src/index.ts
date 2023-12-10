import cluster from 'cluster'
import { cpus } from 'os'


import { App } from './app';
const instance = new App();
if (cluster.isPrimary === true) { 
    // .isPrimary with node v16.0.0 or above
    // .isMaster (depreciated) with older version
    const CPUS: any = cpus()
    CPUS.forEach(() => cluster.fork())
} else {
    instance.start();
}
