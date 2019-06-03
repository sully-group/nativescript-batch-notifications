declare class Batch extends NSObject {

    static alloc(): Batch; // inherited from NSObject

    static debugViewController(): UIViewController;

    static defaultUserProfile(): BatchUserProfile;

    static handleURL(url: NSURL): boolean;

    static isOptedOut(): boolean;

    static isRunningInDevelopmentMode(): boolean;

    static new(): Batch; // inherited from NSObject

    static optIn(): void;

    static optOut(): void;

    static optOutAndWipeData(): void;

    static optOutAndWipeDataWithCompletionHandler(handler: (p1: boolean) => BatchOptOutNetworkErrorPolicy): void;

    static optOutWithCompletionHandler(handler: (p1: boolean) => BatchOptOutNetworkErrorPolicy): void;

    static setLoggerDelegate(loggerDelegate: BatchLoggerDelegate): void;

    static setUseAdvancedDeviceInformation(use: boolean): void;

    static setUseIDFA(use: boolean): void;

    static startWithAPIKey(key: string): void;

    static deeplinkDelegate: BatchDeeplinkDelegate;
}

declare const BatchActionErrorInvalidArgument: number;

declare const BatchActionErrorReservedIdentifier: number;

declare const BatchActionErrorUnknown: number;

declare class BatchActions extends NSObject {

    static alloc(): BatchActions; // inherited from NSObject

    static new(): BatchActions; // inherited from NSObject

    static performActionIdentifiedByWithArguments(identifier: string, args: NSDictionary<string, any>): boolean;

    static registerAction(action: BatchUserAction): NSError;

    static unregisterActionIdentifier(actionIdentifier: string): void;
}

declare class BatchAlertMessageCTA extends NSObject {

    static alloc(): BatchAlertMessageCTA; // inherited from NSObject

    static new(): BatchAlertMessageCTA; // inherited from NSObject

    readonly action: string;

    readonly args: NSDictionary<any, any>;

    readonly label: string;
}

declare class BatchAlertMessageContent extends NSObject implements BatchInAppMessageContent {

    static alloc(): BatchAlertMessageContent; // inherited from NSObject

    static new(): BatchAlertMessageContent; // inherited from NSObject

    readonly acceptCTA: BatchAlertMessageCTA;

    readonly body: string;

    readonly cancelLabel: string;

    readonly title: string;

    readonly trackingIdentifier: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly  // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class BatchBannerMessageAction extends NSObject {

    static alloc(): BatchBannerMessageAction; // inherited from NSObject

    static new(): BatchBannerMessageAction; // inherited from NSObject

    readonly action: string;

    readonly args: NSDictionary<any, any>;
}

declare class BatchBannerMessageCTA extends NSObject {

    static alloc(): BatchBannerMessageCTA; // inherited from NSObject

    static new(): BatchBannerMessageCTA; // inherited from NSObject

    readonly action: string;

    readonly args: NSDictionary<any, any>;

    readonly label: string;
}

declare class BatchBannerMessageContent extends NSObject implements BatchInAppMessageContent {

    static alloc(): BatchBannerMessageContent; // inherited from NSObject

    static new(): BatchBannerMessageContent; // inherited from NSObject

    readonly automaticallyDismissAfter: number;

    readonly body: string;

    readonly ctas: NSArray<BatchBannerMessageCTA>;

    readonly globalTapAction: BatchBannerMessageAction;

    readonly mediaAccessibilityDescription: string;

    readonly mediaURL: string;

    readonly showCloseButton: boolean;

    readonly title: string;

    readonly trackingIdentifier: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly  // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

interface BatchDeeplinkDelegate extends NSObjectProtocol {

    openBatchDeeplink(deeplink: string): void;
}
declare var BatchDeeplinkDelegate: {

    prototype: BatchDeeplinkDelegate;
};

declare class BatchEventData extends NSObject implements NSCopying {

    static alloc(): BatchEventData; // inherited from NSObject

    static new(): BatchEventData; // inherited from NSObject

    addTag(tag: string): void;

    copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

    putBoolForKey(value: boolean, key: string): void;

    putDoubleForKey(value: number, key: string): void;

    putFloatForKey(value: number, key: string): void;

    putIntegerForKey(value: number, key: string): void;

    putStringForKey(value: string, key: string): void;
}

declare class BatchInAppMessage extends BatchMessage {

    static alloc(): BatchInAppMessage; // inherited from NSObject

    static new(): BatchInAppMessage; // inherited from NSObject

    readonly campaignToken: string;

    readonly content: BatchInAppMessageContent;

    readonly customPayload: NSDictionary<string, NSObject>;
}

interface BatchInAppMessageContent extends NSObjectProtocol {
}
declare var BatchInAppMessageContent: {

    prototype: BatchInAppMessageContent;
};

declare class BatchInbox extends NSObject {

    static alloc(): BatchInbox; // inherited from NSObject

    static fetcher(): BatchInboxFetcher;

    static fetcherForUserIdentifierAuthenticationKey(identifier: string, authKey: string): BatchInboxFetcher;

    static new(): BatchInbox; // inherited from NSObject
}

declare class BatchInboxFetcher extends NSObject {

    static alloc(): BatchInboxFetcher; // inherited from NSObject

    static new(): BatchInboxFetcher; // inherited from NSObject

    readonly allFetchedNotifications: NSArray<BatchInboxNotificationContent>;

    readonly endReached: boolean;

    limit: number;

    maxPageSize: number;

    fetchNewNotifications(completionHandler: (p1: NSError, p2: NSArray<BatchInboxNotificationContent>, p3: boolean, p4: boolean) => void): void;

    fetchNextPage(completionHandler: (p1: NSError, p2: NSArray<BatchInboxNotificationContent>, p3: boolean) => void): void;

    markAllNotificationsAsRead(): void;

    markNotificationAsRead(notification: BatchInboxNotificationContent): void;
}

declare class BatchInboxNotificationContent extends NSObject {

    static alloc(): BatchInboxNotificationContent; // inherited from NSObject

    static new(): BatchInboxNotificationContent; // inherited from NSObject

    readonly attachmentURL: NSURL;

    readonly body: string;

    readonly date: Date;

    readonly identifier: string;

    readonly isUnread: boolean;

    readonly payload: NSDictionary<any, any>;

    readonly source: BatchNotificationSource;

    readonly title: string;
}

declare class BatchInterstitialMessageCTA extends NSObject {

    static alloc(): BatchInterstitialMessageCTA; // inherited from NSObject

    static new(): BatchInterstitialMessageCTA; // inherited from NSObject

    readonly action: string;

    readonly args: NSDictionary<any, any>;

    readonly label: string;
}

declare class BatchInterstitialMessageContent extends NSObject implements BatchInAppMessageContent {

    static alloc(): BatchInterstitialMessageContent; // inherited from NSObject

    static new(): BatchInterstitialMessageContent; // inherited from NSObject

    readonly body: string;

    readonly ctas: NSArray<BatchInterstitialMessageCTA>;

    readonly header: string;

    readonly mediaAccessibilityDescription: string;

    readonly mediaURL: string;

    readonly showCloseButton: boolean;

    readonly title: string;

    readonly trackingIdentifier: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly  // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

interface BatchLoggerDelegate extends NSObjectProtocol {

    logWithMessage(message: string): void;
}
declare var BatchLoggerDelegate: {

    prototype: BatchLoggerDelegate;
};

declare class BatchManualUserActionSource extends NSObject implements BatchUserActionSource {

    static alloc(): BatchManualUserActionSource; // inherited from NSObject

    static new(): BatchManualUserActionSource; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly  // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class BatchMessage extends NSObject implements BatchUserActionSource, NSCopying {

    static alloc(): BatchMessage; // inherited from NSObject

    static new(): BatchMessage; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly  // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class BatchMessaging extends NSObject {

    static alloc(): BatchMessaging; // inherited from NSObject

    static loadViewControllerForMessageError(message: BatchMessage): UIViewController;

    static messageFromPushPayload(userData: NSDictionary<any, any>): BatchPushMessage;

    static new(): BatchMessaging; // inherited from NSObject

    static popPendingMessage(): BatchMessage;

    static presentMessagingViewController(vc: UIViewController): void;

    static setAutomaticMode(setAutomaticMode: boolean): void;

    static setCanReconfigureAVAudioSession(canReconfigureAVAudioSession: boolean): void;

    static setDelegate(delegate: BatchMessagingDelegate): void;

    static setFontOverrideBoldFont(font: UIFont, boldFont: UIFont): void;

    static showPendingMessage(): boolean;

    static doNotDisturb: boolean;

    static readonly hasPendingMessage: boolean;
}

interface BatchMessagingDelegate extends NSObjectProtocol {

    batchInAppMessageReady?(message: BatchInAppMessage): void;

    batchMessageDidAppear?(messageIdentifier: string): void;

    batchMessageDidDisappear?(messageIdentifier: string): void;
}
declare var BatchMessagingDelegate: {

    prototype: BatchMessagingDelegate;
};

declare const BatchMessagingErrorAutomaticModeNotDisabled: number;

declare const BatchMessagingErrorIncompatibleIOSVersion: number;

declare const BatchMessagingErrorInternal: number;

declare const BatchMessagingErrorNoSuitableVCForDisplay: number;

declare const BatchMessagingErrorNoValidBatchMessage: number;

declare const BatchMessagingErrorNotOnMainThread: number;

declare const BatchMessagingErrorOptedOut: number;

interface BatchMessagingViewController extends NSObjectProtocol {

    shouldDisplayInSeparateWindow: boolean;
}
declare var BatchMessagingViewController: {

    prototype: BatchMessagingViewController;
};

declare const enum BatchNotificationSource {

    Unknown = 0,

    Campaign = 1,

    Transactional = 2
}

declare const enum BatchNotificationType {

    None = 0,

    Badge = 1,

    Sound = 2,

    Alert = 4,

    CarPlay = 8,

    Critical = 16
}

declare const enum BatchOptOutNetworkErrorPolicy {

    Ignore = 0,

    Cancel = 1
}

declare class BatchPush extends NSObject {

    static alloc(): BatchPush; // inherited from NSObject

    static clearBadge(): void;

    static deeplinkFromUserInfo(userData: NSDictionary<any, any>): string;

    static disableAutomaticIntegration(): void;

    static dismissNotifications(): void;

    static enableAutomaticDeeplinkHandling(handleDeeplinks: boolean): void;

    static handleDeviceToken(token: NSData): void;

    static handleNotification(userInfo: NSDictionary<any, any>): void;

    static handleNotificationActionIdentifier(userInfo: NSDictionary<any, any>, identifier: string): void;

    static handleRegisterUserNotificationSettings(notificationSettings: UIUserNotificationSettings): void;

    static handleUserNotificationCenterDidReceiveNotificationResponse(center: UNUserNotificationCenter, response: UNNotificationResponse): void;

    static handleUserNotificationCenterWillPresentNotificationWillShowSystemForegroundAlert(center: UNUserNotificationCenter, notification: UNNotification, willShowSystemForegroundAlert: boolean): void;

    static lastKnownPushToken(): string;

    static new(): BatchPush; // inherited from NSObject

    static openSystemNotificationSettings(): void;

    static refreshToken(): void;

    static registerForRemoteNotifications(): void;

    static registerForRemoteNotificationsWithCategories(categories: NSSet<any>): void;

    static requestNotificationAuthorization(): void;

    static requestProvisionalNotificationAuthorization(): void;

    static setNotificationsCategories(categories: NSSet<any>): void;

    static setRemoteNotificationTypes(type: BatchNotificationType): void;

    static setupPush(): void;

    static supportsAppNotificationSettings: boolean;
}

declare class BatchPushMessage extends BatchMessage {

    static alloc(): BatchPushMessage; // inherited from NSObject

    static new(): BatchPushMessage; // inherited from NSObject

    readonly pushPayload: NSDictionary<string, NSObject>;
}

declare var BatchPushReceivedNotification: string;

declare class BatchUser extends NSObject {

    static alloc(): BatchUser; // inherited from NSObject

    static editor(): BatchUserDataEditor;

    static installationID(): string;

    static new(): BatchUser; // inherited from NSObject

    static printDebugInformation(): void;

    static trackEvent(event: string): void;

    static trackEventWithLabel(event: string, label: string): void;

    static trackEventWithLabelAssociatedData(event: string, label: string, data: BatchEventData): void;

    static trackEventWithLabelData(event: string, label: string, data: NSDictionary<any, any>): void;

    static trackLocation(location: CLLocation): void;

    static trackTransactionWithAmount(amount: number): void;

    static trackTransactionWithAmountData(amount: number, data: NSDictionary<any, any>): void;
}

declare class BatchUserAction extends NSObject {

    static alloc(): BatchUserAction; // inherited from NSObject

    static new(): BatchUserAction; // inherited from NSObject

    static userActionWithIdentifierActionBlock(identifier: string, actionBlock: (p1: string, p2: NSDictionary<string, any>, p3: BatchUserActionSource) => void): BatchUserAction;

    readonly actionBlock: (p1: string, p2: NSDictionary<string, any>, p3: BatchUserActionSource) => void;

    readonly identifier: string;
}

declare var BatchUserActionInputTextFieldPlaceholderKey: string;

interface BatchUserActionSource extends NSObjectProtocol {
}
declare var BatchUserActionSource: {

    prototype: BatchUserActionSource;
};

declare class BatchUserDataEditor extends NSObject {

    static alloc(): BatchUserDataEditor; // inherited from NSObject

    static new(): BatchUserDataEditor; // inherited from NSObject

    addTagInCollection(tag: string, collection: string): void;

    clearAttributes(): void;

    clearTagCollection(collection: string): void;

    clearTags(): void;

    removeAttributeForKey(key: string): void;

    removeTagFromCollection(tag: string, collection: string): void;

    save(): void;

    setAttributeForKey(attribute: NSObject, key: string): void;

    setIdentifier(identifier: string): void;

    setLanguage(language: string): void;

    setRegion(region: string): void;
}

declare class BatchUserProfile extends NSObject {

    static alloc(): BatchUserProfile; // inherited from NSObject

    static new(): BatchUserProfile; // inherited from NSObject

    customIdentifier: string;

    language: string;

    region: string;
}
