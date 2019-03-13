// @flow

export type TPayload = Object;

export interface IAPI {
  host: string;
  port: string;
  v1: string;
  +constructor: (host: string, port: string, v1: string) => void;
  +change: (host: string, port: string, v1: string) => void;
  +getUrl: (...Array<string>) => string;
  +getPayload: (Object) => TPayload;
  +fetch: (url: string, payloadBody?: Object) => Promise<any>;
};

export default class API implements IAPI {

  host: string;
  port: string;
  v1: string;

  constructor(host: string, port: string, v1: string) {
    this.host = host;
    this.port = port;
    this.v1 = v1;
  }

  change(host: string, port: string, v1: string): void {
    this.host = host;
    this.port = port;
    this.v1 = v1;
  }

  getUrl(...segments: Array<string>): string {
    return `${this.host}:${this.port}/${segments.join('/')}`;
  }

  getPayload(payloadBody: Object): TPayload {
    return {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payloadBody),
    };
  }

  async fetch(url: string, payloadBody?: Object): Promise<any> {
    const payload = (
      typeof payloadBody !== 'undefined' ?
        this.getPayload(payloadBody)
      :
        undefined
    );
    console.log(url, payload);
    const response = await fetch(url, payload);
    if(!response.ok) {
      throw response.ok;
    }
    const json = await response.json();
    return json;
  }

}
