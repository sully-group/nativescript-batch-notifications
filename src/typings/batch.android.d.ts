declare module com {
    export module batch {
        export module android {
            export class Batch {
                public static class: java.lang.Class<com.batch.android.Batch>;
                public static DEFAULT_PLACEMENT: string;
                public static NOTIFICATION_TAG: string;
                public static BROADCAST_PERMISSION_SUFFIX: string;
                public static ACTION_REGISTRATION_IDENTIFIER_OBTAINED: string;
                public static EXTRA_REGISTRATION_IDENTIFIER: string;
                public static EXTRA_REGISTRATION_PROVIDER_NAME: string;
                public static EXTRA_REGISTRATION_SENDER_ID: string;
                public static getUserProfile(): com.batch.android.BatchUserProfile;
                public static shouldUseAdvertisingID(): boolean;
                public static copyBatchExtras(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
                public static onServiceCreate(param0: globalAndroid.content.Context, param1: boolean): void;
                public static shouldAutoRegisterForPush(): boolean;
                public static isOptedOut(param0: globalAndroid.content.Context): boolean;
                public static onDestroy(param0: globalAndroid.app.Activity): void;
                public static getAPIKey(): string;
                public static onServiceDestroy(param0: globalAndroid.content.Context): void;
                public static onStop(param0: globalAndroid.app.Activity): void;
                public static optOutAndWipeData(param0: globalAndroid.content.Context, param1: com.batch.android.BatchOptOutResultListener): void;
                public static onStart(param0: globalAndroid.app.Activity): void;
                public static isRunningInDevMode(): boolean;
                public static copyBatchExtras(param0: globalAndroid.content.Intent, param1: globalAndroid.content.Intent): void;
                public static shouldUseAdvancedDeviceInformation(): boolean;
                public static optOut(param0: globalAndroid.content.Context): void;
                public static setConfig(param0: com.batch.android.Config): void;
                public static getSessionID(): string;
                public static optOut(param0: globalAndroid.content.Context, param1: com.batch.android.BatchOptOutResultListener): void;
                public static optOutAndWipeData(param0: globalAndroid.content.Context): void;
                public static onNewIntent(param0: globalAndroid.app.Activity, param1: globalAndroid.content.Intent): void;
                public static optIn(param0: globalAndroid.content.Context): void;
                public static shouldUseGoogleInstanceID(): boolean;
                public static getBroadcastPermissionName(param0: globalAndroid.content.Context): string;
            }
            export module Batch {
                export class Actions {
                    public static class: java.lang.Class<com.batch.android.Batch.Actions>;
                    public static performAction(param0: globalAndroid.content.Context, param1: string, param2: any): boolean;
                    public static unregister(param0: string): void;
                    public static register(param0: com.batch.android.UserAction): void;
                    public static addDrawableAlias(param0: string, param1: number): void;
                }
                export class Inbox {
                    public static class: java.lang.Class<com.batch.android.Batch.Inbox>;
                    public static getFetcher(param0: globalAndroid.content.Context, param1: string, param2: string): com.batch.android.BatchInboxFetcher;
                    public static getFetcher(param0: globalAndroid.content.Context): com.batch.android.BatchInboxFetcher;
                    public static getFetcher(param0: string, param1: string): com.batch.android.BatchInboxFetcher;
                }
                export class Messaging {
                    public static class: java.lang.Class<com.batch.android.Batch.Messaging>;
                    public static setShowForegroundLandings(param0: boolean): void;
                    public static setAutomaticMode(param0: boolean): void;
                    public static popPendingMessage(): com.batch.android.BatchMessage;
                    public static loadFragment(param0: globalAndroid.content.Context, param1: com.batch.android.BatchMessage): globalAndroid.support.v4.app.DialogFragment;
                    public static setTypefaceOverride(param0: globalAndroid.graphics.Typeface, param1: globalAndroid.graphics.Typeface): void;
                    public static show(param0: globalAndroid.content.Context, param1: com.batch.android.BatchMessage): void;
                    public static setLifecycleListener(param0: com.batch.android.Batch.Messaging.LifecycleListener): void;
                    public static hasPendingMessage(): boolean;
                    public static loadBanner(param0: globalAndroid.content.Context, param1: com.batch.android.BatchMessage): com.batch.android.BatchBannerView;
                    public static setDoNotDisturbEnabled(param0: boolean): void;
                    public static isDoNotDisturbEnabled(): boolean;
                }
                export module Messaging {
                    export class DisplayHint {
                        public static class: java.lang.Class<com.batch.android.Batch.Messaging.DisplayHint>;
                        public static findUsingView(param0: globalAndroid.view.View): com.batch.android.Batch.Messaging.DisplayHint;
                        public static embed(param0: globalAndroid.widget.FrameLayout): com.batch.android.Batch.Messaging.DisplayHint;
                    }
                    export class DisplayHintProvider {
                        public static class: java.lang.Class<com.batch.android.Batch.Messaging.DisplayHintProvider>;
                        /**
                         * Constructs a new instance of the com.batch.android.Batch$Messaging$DisplayHintProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            getBatchMessageDisplayHint(param0: com.batch.android.BatchMessage): com.batch.android.Batch.Messaging.DisplayHint;
                        });
                        public constructor();
                        public getBatchMessageDisplayHint(param0: com.batch.android.BatchMessage): com.batch.android.Batch.Messaging.DisplayHint;
                    }
                    export class LifecycleListener {
                        public static class: java.lang.Class<com.batch.android.Batch.Messaging.LifecycleListener>;
                        /**
                         * Constructs a new instance of the com.batch.android.Batch$Messaging$LifecycleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onBatchMessageShown(param0: string): void;
                            onBatchMessageClosed(param0: string): void;
                        });
                        public constructor();
                        public onBatchMessageClosed(param0: string): void;
                        public onBatchMessageShown(param0: string): void;
                    }
                    export class LifecycleListener2 extends com.batch.android.Batch.Messaging.LifecycleListener {
                        public static class: java.lang.Class<com.batch.android.Batch.Messaging.LifecycleListener2>;
                        /**
                         * Constructs a new instance of the com.batch.android.Batch$Messaging$LifecycleListener2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                         */
                        public constructor(implementation: {
                            onBatchInAppMessageReady(param0: com.batch.android.BatchInAppMessage): boolean;
                            onBatchMessageShown(param0: string): void;
                            onBatchMessageClosed(param0: string): void;
                        });
                        public constructor();
                        public onBatchMessageClosed(param0: string): void;
                        public onBatchInAppMessageReady(param0: com.batch.android.BatchInAppMessage): boolean;
                        public onBatchMessageShown(param0: string): void;
                    }
                    export class a {
                        public static class: java.lang.Class<com.batch.android.Batch.Messaging.a>;
                        public static a: com.batch.android.Batch.Messaging.a;
                        public static b: com.batch.android.Batch.Messaging.a;
                        public static valueOf(param0: string): com.batch.android.Batch.Messaging.a;
                        public static values(): native.Array<com.batch.android.Batch.Messaging.a>;
                    }
                }
                export class Push {
                    public static class: java.lang.Class<com.batch.android.Batch.Push>;
                    public static BODY_KEY: string;
                    public static ALERT_KEY: string;
                    public static TITLE_KEY: string;
                    public static PAYLOAD_KEY: string;
                    public static displayNotification(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: com.batch.android.BatchNotificationInterceptor): void;
                    public static setLargeIcon(param0: globalAndroid.graphics.Bitmap): void;
                    public static setNotificationsType(param0: java.util.EnumSet<com.batch.android.PushNotificationType>): void;
                    public static setSmallIconResourceId(param0: number): void;
                    public static dismissNotifications(): void;
                    public static makePendingIntentForDeeplink(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle): globalAndroid.app.PendingIntent;
                    public static onNotificationDisplayed(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
                    public static isBatchPush(param0: any): boolean;
                    public static displayNotification(param0: globalAndroid.content.Context, param1: any, param2: com.batch.android.BatchNotificationInterceptor): void;
                    public static getNotificationsType(param0: globalAndroid.content.Context): java.util.EnumSet<com.batch.android.PushNotificationType>;
                    public static setNotificationInterceptor(param0: com.batch.android.BatchNotificationInterceptor): void;
                    public static setManualDisplay(param0: boolean): void;
                    public static makePendingIntent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: globalAndroid.os.Bundle): globalAndroid.app.PendingIntent;
                    public static shouldDisplayPush(param0: globalAndroid.content.Context, param1: any): boolean;
                    public static appendBatchData(param0: globalAndroid.os.Bundle, param1: globalAndroid.content.Intent): void;
                    public static appendBatchData(param0: any, param1: globalAndroid.content.Intent): void;
                    public static appendBatchData(param0: globalAndroid.content.Intent, param1: globalAndroid.content.Intent): void;
                    public static onNotificationDisplayed(param0: globalAndroid.content.Context, param1: any): void;
                    public static setSound(param0: globalAndroid.net.Uri): void;
                    public static isBatchPush(param0: globalAndroid.content.Intent): boolean;
                    public static shouldDisplayPush(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): boolean;
                    public static displayNotification(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
                    public static setNotificationsColor(param0: number): void;
                    public static displayNotification(param0: globalAndroid.content.Context, param1: any): void;
                    public static makePendingIntent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: any): globalAndroid.app.PendingIntent;
                    public static setAdditionalIntentFlags(param0: java.lang.Integer): void;
                    public static getLastKnownPushToken(): string;
                    public static setGCMSenderId(param0: string): void;
                    public static makePendingIntentForDeeplink(param0: globalAndroid.content.Context, param1: string, param2: any): globalAndroid.app.PendingIntent;
                    public static getChannelsManager(): com.batch.android.BatchNotificationChannelsManager;
                }
                export class User {
                    public static class: java.lang.Class<com.batch.android.Batch.User>;
                    public static trackTransaction(param0: number): void;
                    public static trackTransaction(param0: number, param1: any): void;
                    public static editor(): com.batch.android.BatchUserDataEditor;
                    public static trackEvent(param0: string): void;
                    public static trackEvent(param0: string, param1: string): void;
                    public static printDebugInformation(): void;
                    public static trackEvent(param0: string, param1: string, param2: com.batch.android.BatchEventData): void;
                    public static trackLocation(param0: globalAndroid.location.Location): void;
                    public static getInstallationID(): string;
                    public static getEditor(): com.batch.android.BatchUserDataEditor;
                    public static trackEvent(param0: string, param1: string, param2: any): void;
                }
                export class a {
                    public static class: java.lang.Class<com.batch.android.Batch.a>;
                    public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
                }
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchActionActivity {
                public static class: java.lang.Class<com.batch.android.BatchActionActivity>;
                public static EXTRA_DEEPLINK_KEY: string;
                public onStart(): void;
                public onStop(): void;
                public onDestroy(): void;
                public constructor();
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchActionService {
                public static class: java.lang.Class<com.batch.android.BatchActionService>;
                public static a: string;
                public static b: string;
                public static c: string;
                public static d: string;
                public onHandleIntent(param0: globalAndroid.content.Intent): void;
                public constructor();
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchActivityLifecycleHelper {
                public static class: java.lang.Class<com.batch.android.BatchActivityLifecycleHelper>;
                public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                public onActivityResumed(param0: globalAndroid.app.Activity): void;
                public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
                public onActivityStarted(param0: globalAndroid.app.Activity): void;
                public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                public onActivityStopped(param0: globalAndroid.app.Activity): void;
                public onActivityPaused(param0: globalAndroid.app.Activity): void;
                public constructor();
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchAlertContent extends com.batch.android.BatchInAppMessage.Content {
                public static class: java.lang.Class<com.batch.android.BatchAlertContent>;
                public getAcceptCTA(): com.batch.android.BatchAlertContent.CTA;
                public getBody(): string;
                public getTrackingIdentifier(): string;
                public getCancelLabel(): string;
                public getTitle(): string;
            }
            export module BatchAlertContent {
                export class CTA {
                    public static class: java.lang.Class<com.batch.android.BatchAlertContent.CTA>;
                    public getLabel(): string;
                    public getArgs(): any;
                    public getAction(): string;
                }
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchBannerContent extends com.batch.android.BatchInAppMessage.Content {
                public static class: java.lang.Class<com.batch.android.BatchBannerContent>;
                public getMediaAccessibilityDescription(): string;
                public getBody(): string;
                public getMediaURL(): string;
                public getTrackingIdentifier(): string;
                public getCtas(): java.util.List<com.batch.android.BatchBannerContent.CTA>;
                public getAutoDismissTimeMillis(): java.lang.Long;
                public isShowCloseButton(): boolean;
                public getGlobalTapAction(): com.batch.android.BatchBannerContent.Action;
                public getTitle(): string;
            }
            export module BatchBannerContent {
                export class Action {
                    public static class: java.lang.Class<com.batch.android.BatchBannerContent.Action>;
                    public getArgs(): any;
                    public getAction(): string;
                }
                export class CTA extends com.batch.android.BatchBannerContent.Action {
                    public static class: java.lang.Class<com.batch.android.BatchBannerContent.CTA>;
                    public getLabel(): string;
                }
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchBannerView {
                public static class: java.lang.Class<com.batch.android.BatchBannerView>;
                public show(param0: globalAndroid.app.Activity): void;
                public dismiss(param0: boolean): void;
                public embed(param0: globalAndroid.widget.FrameLayout): void;
                public show(param0: globalAndroid.view.View): void;
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchEventData {
                public static class: java.lang.Class<com.batch.android.BatchEventData>;
                public put(param0: string, param1: boolean): com.batch.android.BatchEventData;
                public addTag(param0: string): com.batch.android.BatchEventData;
                public a(): any;
                public put(param0: string, param1: string): com.batch.android.BatchEventData;
                public put(param0: string, param1: number): com.batch.android.BatchEventData;
                public constructor();
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchInAppMessage extends com.batch.android.BatchMessage implements com.batch.android.InAppMessageUserActionSource {
                public static class: java.lang.Class<com.batch.android.BatchInAppMessage>;
                public static KIND: string;
                public static getInstanceFromBundle(param0: globalAndroid.os.Bundle): com.batch.android.BatchInAppMessage;
                public b(): string;
                public c(): globalAndroid.os.Bundle;
                public constructor(param0: string, param1: any, param2: any);
                public getCampaignToken(): string;
                public a(): any;
                public getContent(): com.batch.android.BatchInAppMessage.Content;
                public constructor();
                public getCustomPayload(): any;
            }
            export module BatchInAppMessage {
                export class Content {
                    public static class: java.lang.Class<com.batch.android.BatchInAppMessage.Content>;
                    /**
                     * Constructs a new instance of the com.batch.android.BatchInAppMessage$Content interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                    });
                    public constructor();
                }
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchInboxFetcher {
                public static class: java.lang.Class<com.batch.android.BatchInboxFetcher>;
                public markAllAsRead(): void;
                public setHandlerOverride(param0: globalAndroid.os.Handler): void;
                public setFetchLimit(param0: number): void;
                public markAsRead(param0: com.batch.android.BatchInboxNotificationContent): void;
                public hasMore(): boolean;
                public getFetchedNotifications(): java.util.List<com.batch.android.BatchInboxNotificationContent>;
                public fetchNewNotifications(param0: com.batch.android.BatchInboxFetcher.OnNewNotificationsFetchedListener): void;
                public fetchNextPage(param0: com.batch.android.BatchInboxFetcher.OnNextPageFetchedListener): void;
                public setMaxPageSize(param0: number): void;
            }
            export module BatchInboxFetcher {
                export class OnNewNotificationsFetchedListener {
                    public static class: java.lang.Class<com.batch.android.BatchInboxFetcher.OnNewNotificationsFetchedListener>;
                    /**
                     * Constructs a new instance of the com.batch.android.BatchInboxFetcher$OnNewNotificationsFetchedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onFetchSuccess(param0: java.util.List<com.batch.android.BatchInboxNotificationContent>, param1: boolean, param2: boolean): void;
                        onFetchFailure(param0: string): void;
                    });
                    public constructor();
                    public onFetchSuccess(param0: java.util.List<com.batch.android.BatchInboxNotificationContent>, param1: boolean, param2: boolean): void;
                    public onFetchFailure(param0: string): void;
                }
                export class OnNextPageFetchedListener {
                    public static class: java.lang.Class<com.batch.android.BatchInboxFetcher.OnNextPageFetchedListener>;
                    /**
                     * Constructs a new instance of the com.batch.android.BatchInboxFetcher$OnNextPageFetchedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onFetchSuccess(param0: java.util.List<com.batch.android.BatchInboxNotificationContent>, param1: boolean): void;
                        onFetchFailure(param0: string): void;
                    });
                    public constructor();
                    public onFetchSuccess(param0: java.util.List<com.batch.android.BatchInboxNotificationContent>, param1: boolean): void;
                    public onFetchFailure(param0: string): void;
                }
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchInboxNotificationContent {
                public static class: java.lang.Class<com.batch.android.BatchInboxNotificationContent>;
                public constructor(param0: any);
                public getPushPayload(): com.batch.android.BatchPushPayload;
                public getNotificationIdentifier(): string;
                public getBody(): string;
                public getRawPayload(): java.util.Map<string,string>;
                public getDate(): java.util.Date;
                public isUnread(): boolean;
                public getSource(): com.batch.android.BatchNotificationSource;
                public getTitle(): string;
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchInterstitialContent extends com.batch.android.BatchInAppMessage.Content {
                public static class: java.lang.Class<com.batch.android.BatchInterstitialContent>;
                public getMediaAccessibilityDescription(): string;
                public getBody(): string;
                public getCtas(): java.util.List<com.batch.android.BatchInterstitialContent.CTA>;
                public getMediaURL(): string;
                public getTrackingIdentifier(): string;
                public shouldShowCloseButton(): boolean;
                public getHeader(): string;
                public getTitle(): string;
            }
            export module BatchInterstitialContent {
                export class CTA {
                    public static class: java.lang.Class<com.batch.android.BatchInterstitialContent.CTA>;
                    public getLabel(): string;
                    public getArgs(): any;
                    public getAction(): string;
                }
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchLandingMessage extends com.batch.android.BatchMessage implements com.batch.android.PushUserActionSource {
                public static class: java.lang.Class<com.batch.android.BatchLandingMessage>;
                public static KIND: string;
                public getPushBundle(): globalAndroid.os.Bundle;
                public b(): string;
                public c(): globalAndroid.os.Bundle;
                public constructor(param0: globalAndroid.os.Bundle, param1: any);
                public a(): any;
                public constructor();
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export abstract class BatchMessage extends com.batch.android.UserActionSource {
                public static class: java.lang.Class<com.batch.android.BatchMessage>;
                public static MESSAGING_EXTRA_PAYLOAD_KEY: string;
                public b(): string;
                public writeToIntent(param0: globalAndroid.content.Intent): void;
                public c(): globalAndroid.os.Bundle;
                public writeToBundle(param0: globalAndroid.os.Bundle): void;
                public a(): any;
                public static getMessageForBundle(param0: globalAndroid.os.Bundle): com.batch.android.BatchMessage;
                public constructor();
                public getFormat(): com.batch.android.BatchMessage.Format;
            }
            export module BatchMessage {
                export class Format {
                    public static class: java.lang.Class<com.batch.android.BatchMessage.Format>;
                    public static UNKNOWN: com.batch.android.BatchMessage.Format;
                    public static ALERT: com.batch.android.BatchMessage.Format;
                    public static FULLSCREEN: com.batch.android.BatchMessage.Format;
                    public static BANNER: com.batch.android.BatchMessage.Format;
                    public static values(): native.Array<com.batch.android.BatchMessage.Format>;
                    public static valueOf(param0: string): com.batch.android.BatchMessage.Format;
                }
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchMessagingException {
                public static class: java.lang.Class<com.batch.android.BatchMessagingException>;
                public constructor(param0: string, param1: java.lang.Throwable);
                public constructor(param0: java.lang.Throwable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchNotificationAction {
                public static class: java.lang.Class<com.batch.android.BatchNotificationAction>;
                public label: string;
                public drawableName: string;
                public actionIdentifier: string;
                public actionArguments: any;
                public hasUserInterface: boolean;
                public shouldDismissNotification: boolean;
                public static getSupportActions(param0: globalAndroid.content.Context, param1: java.util.List<com.batch.android.BatchNotificationAction>, param2: com.batch.android.BatchPushPayload, param3: java.lang.Integer): java.util.List<globalAndroid.support.v4.app.NotificationCompat.Action>;
                public constructor();
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchNotificationChannelsManager {
                public static class: java.lang.Class<com.batch.android.BatchNotificationChannelsManager>;
                public static DEFAULT_CHANNEL_ID: string;
                public setChannelName(param0: globalAndroid.content.Context, param1: number): void;
                public setChannelNameProvider(param0: com.batch.android.BatchNotificationChannelsManager.ChannelNameProvider): void;
                public setChannelIdOverride(param0: string): void;
                public setChannelIdInterceptor(param0: com.batch.android.BatchNotificationChannelsManager.NotificationChannelIdInterceptor): void;
                public static openSystemChannelSettings(param0: globalAndroid.content.Context): boolean;
                public static openSystemChannelSettings(param0: globalAndroid.content.Context, param1: string): boolean;
                public constructor();
            }
            export module BatchNotificationChannelsManager {
                export class ChannelNameProvider {
                    public static class: java.lang.Class<com.batch.android.BatchNotificationChannelsManager.ChannelNameProvider>;
                    /**
                     * Constructs a new instance of the com.batch.android.BatchNotificationChannelsManager$ChannelNameProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        getDefaultChannelName(): string;
                    });
                    public constructor();
                    public getDefaultChannelName(): string;
                }
                export class NotificationChannelIdInterceptor {
                    public static class: java.lang.Class<com.batch.android.BatchNotificationChannelsManager.NotificationChannelIdInterceptor>;
                    /**
                     * Constructs a new instance of the com.batch.android.BatchNotificationChannelsManager$NotificationChannelIdInterceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        getChannelId(param0: com.batch.android.BatchPushPayload, param1: string): string;
                    });
                    public constructor();
                    public getChannelId(param0: com.batch.android.BatchPushPayload, param1: string): string;
                }
                export class StringResChannelNameProvider extends com.batch.android.BatchNotificationChannelsManager.ChannelNameProvider {
                    public static class: java.lang.Class<com.batch.android.BatchNotificationChannelsManager.StringResChannelNameProvider>;
                    public getDefaultChannelName(): string;
                    public constructor(param0: globalAndroid.content.Context, param1: number);
                }
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export abstract class BatchNotificationInterceptor {
                public static class: java.lang.Class<com.batch.android.BatchNotificationInterceptor>;
                public getPushNotificationId(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.os.Bundle): number;
                public constructor();
                public getPushNotificationCompatBuilder(param0: globalAndroid.content.Context, param1: globalAndroid.support.v4.app.NotificationCompat.Builder, param2: globalAndroid.os.Bundle, param3: number): globalAndroid.support.v4.app.NotificationCompat.Builder;
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchNotificationSource {
                public static class: java.lang.Class<com.batch.android.BatchNotificationSource>;
                public static UNKNOWN: com.batch.android.BatchNotificationSource;
                public static CAMPAIGN: com.batch.android.BatchNotificationSource;
                public static TRANSACTIONAL: com.batch.android.BatchNotificationSource;
                public static valueOf(param0: string): com.batch.android.BatchNotificationSource;
                public static values(): native.Array<com.batch.android.BatchNotificationSource>;
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchOptOutResultListener {
                public static class: java.lang.Class<com.batch.android.BatchOptOutResultListener>;
                /**
                 * Constructs a new instance of the com.batch.android.BatchOptOutResultListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    onSuccess(): void;
                    onError(): com.batch.android.BatchOptOutResultListener.a;
                });
                public constructor();
                public onError(): com.batch.android.BatchOptOutResultListener.a;
                public onSuccess(): void;
            }
            export module BatchOptOutResultListener {
                export class a {
                    public static class: java.lang.Class<com.batch.android.BatchOptOutResultListener.a>;
                    public static a: com.batch.android.BatchOptOutResultListener.a;
                    public static b: com.batch.android.BatchOptOutResultListener.a;
                    public static valueOf(param0: string): com.batch.android.BatchOptOutResultListener.a;
                    public static values(): native.Array<com.batch.android.BatchOptOutResultListener.a>;
                }
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchPushData {
                public static class: java.lang.Class<com.batch.android.BatchPushData>;
                public getCustomLargeIconURL(): string;
                public hasBigPicture(): boolean;
                public getDeeplink(): string;
                public hasDeeplink(): boolean;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent);
                public hasCustomLargeIcon(): boolean;
                public getBigPictureURL(): string;
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchPushInstanceIDService {
                public static class: java.lang.Class<com.batch.android.BatchPushInstanceIDService>;
                public constructor();
                public onTokenRefresh(): void;
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchPushJobService {
                public static class: java.lang.Class<com.batch.android.BatchPushJobService>;
                public onStartJob(param0: any): boolean;
                public onStopJob(param0: any): boolean;
                public constructor();
            }
            export module BatchPushJobService {
                export class a extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Void> {
                    public static class: java.lang.Class<com.batch.android.BatchPushJobService.a>;
                    public a(param0: native.Array<java.lang.Void>): java.lang.Void;
                }
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchPushMessageReceiver {
                public static class: java.lang.Class<com.batch.android.BatchPushMessageReceiver>;
                public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
                public constructor();
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchPushPayload extends com.batch.android.PushUserActionSource {
                public static class: java.lang.Class<com.batch.android.BatchPushPayload>;
                public getChannel(): string;
                public static payloadFromFirebaseMessage(param0: any): com.batch.android.BatchPushPayload;
                public static payloadFromBundle(param0: globalAndroid.os.Bundle): com.batch.android.BatchPushPayload;
                public hasLandingMessage(): boolean;
                public constructor(param0: any);
                public getPriority(): number;
                public writeToIntentExtras(param0: globalAndroid.content.Intent): void;
                public getLandingMessage(): com.batch.android.BatchMessage;
                public constructor(param0: globalAndroid.os.Bundle);
                public getCustomLargeIconURL(param0: globalAndroid.content.Context): string;
                public getActions(): java.util.List<com.batch.android.BatchNotificationAction>;
                public hasBigPicture(): boolean;
                public getPushBundle(): globalAndroid.os.Bundle;
                public getDeeplink(): string;
                public getBigPictureURL(param0: globalAndroid.content.Context): string;
                public getGroup(): string;
                public writeToBundle(param0: globalAndroid.os.Bundle): void;
                public hasDeeplink(): boolean;
                public static payloadFromReceiverIntent(param0: globalAndroid.content.Intent): com.batch.android.BatchPushPayload;
                public hasCustomLargeIcon(): boolean;
                public static payloadFromReceiverExtras(param0: globalAndroid.os.Bundle): com.batch.android.BatchPushPayload;
                public isGroupSummary(): boolean;
            }
            export module BatchPushPayload {
                export class ParsingException {
                    public static class: java.lang.Class<com.batch.android.BatchPushPayload.ParsingException>;
                    public constructor(param0: string, param1: java.lang.Throwable);
                    public constructor(param0: string);
                    public constructor();
                }
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchPushReceiver {
                public static class: java.lang.Class<com.batch.android.BatchPushReceiver>;
                public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
                public constructor();
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchPushService {
                public static class: java.lang.Class<com.batch.android.BatchPushService>;
                public onHandleIntent(param0: globalAndroid.content.Intent): void;
                public constructor();
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchUserDataEditor {
                public static class: java.lang.Class<com.batch.android.BatchUserDataEditor>;
                public setAttribute(param0: string, param1: boolean): com.batch.android.BatchUserDataEditor;
                public clearAttributes(): com.batch.android.BatchUserDataEditor;
                public addTag(param0: string, param1: string): com.batch.android.BatchUserDataEditor;
                public removeTag(param0: string, param1: string): com.batch.android.BatchUserDataEditor;
                public setIdentifier(param0: string): com.batch.android.BatchUserDataEditor;
                public setAttribute(param0: string, param1: string): com.batch.android.BatchUserDataEditor;
                public setAttribute(param0: string, param1: java.util.Date): com.batch.android.BatchUserDataEditor;
                public removeAttribute(param0: string): com.batch.android.BatchUserDataEditor;
                public constructor();
                public c(param0: string): string;
                public save(): void;
                public clearTagCollection(param0: string): com.batch.android.BatchUserDataEditor;
                public setAttribute(param0: string, param1: number): com.batch.android.BatchUserDataEditor;
                public b(param0: string): string;
                public setLanguage(param0: string): com.batch.android.BatchUserDataEditor;
                public clearTags(): com.batch.android.BatchUserDataEditor;
                public a(param0: string): string;
                public setRegion(param0: string): com.batch.android.BatchUserDataEditor;
            }
            export module BatchUserDataEditor {
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class BatchUserProfile {
                public static class: java.lang.Class<com.batch.android.BatchUserProfile>;
                public b(): boolean;
                public setRegion(param0: string): com.batch.android.BatchUserProfile;
                public getCustomID(): string;
                public setLanguage(param0: string): com.batch.android.BatchUserProfile;
                public c(): number;
                public constructor(param0: globalAndroid.content.Context);
                public getLanguage(): string;
                public a(): boolean;
                public setCustomID(param0: string): com.batch.android.BatchUserProfile;
                public getRegion(): string;
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class Config {
                public static class: java.lang.Class<com.batch.android.Config>;
                public a: string;
                public b: boolean;
                public c: boolean;
                public d: boolean;
                public e: boolean;
                public f: com.batch.android.LoggerDelegate;
                public setCanUseAdvertisingID(param0: boolean): com.batch.android.Config;
                public setCanUseAdvancedDeviceInformation(param0: boolean): com.batch.android.Config;
                public setLoggerDelegate(param0: com.batch.android.LoggerDelegate): com.batch.android.Config;
                public setCanUseInstanceID(param0: boolean): com.batch.android.Config;
                public setCanUseAndroidID(param0: boolean): com.batch.android.Config;
                public constructor(param0: string);
                public setShouldAutomaticallyRegisterPush(param0: boolean): com.batch.android.Config;
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class FailReason {
                public static class: java.lang.Class<com.batch.android.FailReason>;
                public static NETWORK_ERROR: com.batch.android.FailReason;
                public static INVALID_API_KEY: com.batch.android.FailReason;
                public static DEACTIVATED_API_KEY: com.batch.android.FailReason;
                public static UNEXPECTED_ERROR: com.batch.android.FailReason;
                public static SDK_OPTED_OUT: com.batch.android.FailReason;
                public static values(): native.Array<com.batch.android.FailReason>;
                public static valueOf(param0: string): com.batch.android.FailReason;
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class InAppMessageUserActionSource extends com.batch.android.UserActionSource {
                public static class: java.lang.Class<com.batch.android.InAppMessageUserActionSource>;
                /**
                 * Constructs a new instance of the com.batch.android.InAppMessageUserActionSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    getCustomPayload(): any;
                });
                public constructor();
                public getCustomPayload(): any;
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class LoggerDelegate {
                public static class: java.lang.Class<com.batch.android.LoggerDelegate>;
                /**
                 * Constructs a new instance of the com.batch.android.LoggerDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    error(param0: string, param1: string, param2: java.lang.Throwable): void;
                    warn(param0: string, param1: string, param2: java.lang.Throwable): void;
                    debug(param0: string, param1: string, param2: java.lang.Throwable): void;
                    info(param0: string, param1: string, param2: java.lang.Throwable): void;
                    verbose(param0: string, param1: string, param2: java.lang.Throwable): void;
                });
                public constructor();
                public debug(param0: string, param1: string, param2: java.lang.Throwable): void;
                public error(param0: string, param1: string, param2: java.lang.Throwable): void;
                public warn(param0: string, param1: string, param2: java.lang.Throwable): void;
                public verbose(param0: string, param1: string, param2: java.lang.Throwable): void;
                public info(param0: string, param1: string, param2: java.lang.Throwable): void;
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class MessagingActivity {
                public static class: java.lang.Class<com.batch.android.MessagingActivity>;
                public onCreate(param0: globalAndroid.os.Bundle): void;
                public static startActivityForMessage(param0: globalAndroid.content.Context, param1: com.batch.android.BatchMessage): void;
                public onStart(): void;
                public onStop(): void;
                public onDestroy(): void;
                public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
                public onDialogDismiss(param0: globalAndroid.support.v4.app.DialogFragment): void;
                public constructor();
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class MissingDependencyException {
                public static class: java.lang.Class<com.batch.android.MissingDependencyException>;
                public constructor(param0: string);
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class PushNotificationType {
                public static class: java.lang.Class<com.batch.android.PushNotificationType>;
                public static NONE: com.batch.android.PushNotificationType;
                public static SOUND: com.batch.android.PushNotificationType;
                public static VIBRATE: com.batch.android.PushNotificationType;
                public static LIGHTS: com.batch.android.PushNotificationType;
                public static ALERT: com.batch.android.PushNotificationType;
                public static toValue(param0: java.util.EnumSet<com.batch.android.PushNotificationType>): number;
                public static valueOf(param0: string): com.batch.android.PushNotificationType;
                public static values(): native.Array<com.batch.android.PushNotificationType>;
                public static fromValue(param0: number): java.util.EnumSet<com.batch.android.PushNotificationType>;
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class PushUserActionSource extends com.batch.android.UserActionSource {
                public static class: java.lang.Class<com.batch.android.PushUserActionSource>;
                /**
                 * Constructs a new instance of the com.batch.android.PushUserActionSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    getPushBundle(): globalAndroid.os.Bundle;
                });
                public constructor();
                public getPushBundle(): globalAndroid.os.Bundle;
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class UserAction {
                public static class: java.lang.Class<com.batch.android.UserAction>;
                public getRunnable(): com.batch.android.UserActionRunnable;
                public getIdentifier(): string;
                public constructor(param0: string, param1: com.batch.android.UserActionRunnable);
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class UserActionRunnable {
                public static class: java.lang.Class<com.batch.android.UserActionRunnable>;
                /**
                 * Constructs a new instance of the com.batch.android.UserActionRunnable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    performAction(param0: globalAndroid.content.Context, param1: string, param2: any, param3: com.batch.android.UserActionSource): void;
                });
                public constructor();
                public performAction(param0: globalAndroid.content.Context, param1: string, param2: any, param3: com.batch.android.UserActionSource): void;
            }
        }
    }
}

declare module com {
    export module batch {
        export module android {
            export class UserActionSource {
                public static class: java.lang.Class<com.batch.android.UserActionSource>;
                /**
                 * Constructs a new instance of the com.batch.android.UserActionSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                });
                public constructor();
            }
        }
    }
}
