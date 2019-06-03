import { Observable } from 'tns-core-modules/data/observable';

export class Common extends Observable {
  constructor() {
    super();
  }

  initIOS(API_KEY: string) {
      Batch.startWithAPIKey(API_KEY);
      BatchPush.requestNotificationAuthorization();
  }

}
