

declare module "*.png" {
    const value: any;
    export = value;
}

interface AppConfig  {
    app_id: string;
    service_url: string;
}

declare const APP_CONFIG: AppConfig;
