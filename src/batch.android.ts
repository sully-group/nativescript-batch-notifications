import { Common } from './batch.common';
const Bb = com.batch.android;

export class Batch extends Common {

    constructor() {
        super();
        console.log('Android code on');
    }

    init(API_KEY: string) {
        Bb.Batch.setConfig(new Bb.Config(API_KEY));
    }

    activityLifeCycleHelper() {
        return new Bb.BatchActivityLifecycleHelper();
    }
}