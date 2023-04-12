class RealServer {
    constructor() {
        this.requests = "All the requests are: ";
    }
    approveRequest(request) {
        this.requests += " |" + request + "| ";
        console.log(`${this.requests}`);
    }
}
class ProxyServer {
    constructor(server) {
        this.requestLog = 0;
        this.server = server;
    }
    approveRequest(request) {
        this.requestLog += 1;
        console.log(`This is log #${this.requestLog} and it is being sent to the server`);
        this.server.approveRequest(request);
    }
}
class Client {
    constructor(server) {
        this.someServer = server;
    }
    sendARequest(content) {
        this.someServer.approveRequest(content);
    }
}
let server = new RealServer();
let proxy = new ProxyServer(server);
let client = new Client(proxy);
client.sendARequest("Get me some pictures");
