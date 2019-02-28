declare module "*.png" {
    const value: any;
    export = value;
}

interface AppConfig  {
    appId: string;
    serviceUrl: string;
}

declare const APP_CONFIG: AppConfig;
