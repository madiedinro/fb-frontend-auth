
import 'whatwg-fetch';


export async function initApi(endpoint: string) {
    return new DGodApi(endpoint)
}



export class DGodApi {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    async requestCode(phone: string) {
        const url = `${this.endpoint}/fb_phone_validate`;
        return fetch(url, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({ phone })
        })
        .then(res => res.json())
        .then(resjson => resjson)
    }
}