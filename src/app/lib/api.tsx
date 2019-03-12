
import 'whatwg-fetch';


export function initApi(endpoint: string) {
    return new DGodApi(endpoint)
}


export class DGodApi {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    async requestCode(data: { [k: string]: any }) {
        const url = `${this.endpoint}/account_linking`;
        return fetch(url, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(resjson => resjson)
    }

    // async accountLinking(acc_link_token) {
    //     const path = '/account_linking'
    //     await this.requestCode()
    // }
}