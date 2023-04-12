interface Server {
    approveRequest(request: string): void;
}

class RealServer implements Server {
    private requests: string = "All the requests are: ";
    approveRequest(request: string): void {

        this.requests += " |" + request + "| ";
        console.log(`${this.requests}`)
    }
}

class ProxyServer implements Server {
    private server: Server;
    constructor(server: Server) {
        this.server = server;
    }

    private requestLog: number = 0;
    approveRequest(request: string): void {
        this.requestLog += 1;
        console.log(`This is log #${this.requestLog} and it is being sent to the server`)
        this.server.approveRequest(request);
    }
}

class Client {
    private someServer: Server;
    constructor(server: Server) {
        this.someServer = server;
    }

    sendARequest(content: string) {
        this.someServer.approveRequest(content);
    }
}


let server: Server = new RealServer();
let proxy: Server = new ProxyServer(server);
let client: Client = new Client(proxy);
client.sendARequest("Get me some pictures");




