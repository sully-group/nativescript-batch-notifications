// @ts-ignore
import { Batch } from 'nativescript-batch-notifications';
const firebase = require("nativescript-plugin-firebase");

@JavaProxy("org.myApp.Application")
class Application extends android.app.Application {
    public onCreate(): void {
        super.onCreate();
        let batch = new Batch();
        batch.init('YOUR_BATCH_API_KEY');
        this.registerActivityLifecycleCallbacks(batch.activityLifeCycleHelper());
        firebase.init().catch(e => console.dir(e));
    }

}