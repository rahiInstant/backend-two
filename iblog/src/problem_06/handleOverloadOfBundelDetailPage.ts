class NetworkConnection {
    private connectionId:number;

    constructor(connectionId:number) {
        this.connectionId = connectionId;
    }

    sendRequest(data:string):void {
        console.log(`Request sent with connectionId: ${this.connectionId} and data: ${data}`);
    }

    close():void {
        console.log(`Connection closed with connectionId: ${this.connectionId}`);
    }

}

class ConnectonPool {
    private connections:NetworkConnection[] = [];
    private PoolSize:number;
    private nextId:number=1;

    constructor(pollSize:number) {
        this.PoolSize = pollSize;
    }

    createPool():NetworkConnection {
        if(this.connections.length>0) {
            console.log('reusing connection');
            return this.connections.pop()!;
        }

        if(this.nextId < this.PoolSize) {
            console.log('creating new connection');
            return new NetworkConnection(this.nextId++);
        }
        throw new Error("Pool is full");
    }

    release(connection:NetworkConnection):void {
        console.log('releasing connection');
        this.connections.push(connection);
    }
    clossAll():void {
        this.connections.forEach(connection => {
            connection.close();
        })
    }
}

export default ConnectonPool;