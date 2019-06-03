/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as app from "tns-core-modules/application";
import {run as applicationRun} from "tns-core-modules/application";
// @ts-ignore
import { Batch } from 'nativescript-batch-notifications';

if (app.ios) {
    class customDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];

        applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
            console.log("IOS Entered");
            let batch = new Batch();
            batch.initIOS('YOUR_BATCH_API_KEY');
            return true;
        }
    }
    app.ios.delegate = customDelegate;
    applicationRun({ moduleName: "main-page" });
} else {
    applicationRun({ moduleName: "app-root" });
}

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
