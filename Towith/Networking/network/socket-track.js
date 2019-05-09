var net = require('net');
var PORT = 8181,
    totalRead = 0,
    totalWritten = 0,
    connectionCount = 0;
var server = net.Server(connectionListener);
function connectionListener(conn) {
    //tally the bytes on end
    conn.on('end', function () {
        totalRead += conn.bytesRead;
    });
}
server.listen(PORT);
//Connect a socket
var socket = net.createConnection(PORT);
socket.on('connect', function () {
    // plan on writing the data more than once
    connectionCount++;
    // My = 2 Bytes
    socket.write('My', function () {
        // Precious = 8 Bytes
        socket.end('Precious');
    });
});
// tally the bytes written on end
socket.on('end', function () {
    totalWritten += socket.bytesWritten;
});
socket.on('close', function () {
    // Each time we should get +=10 bytes Read and Written
    console.log('total read: ' + totalRead);
    console.log('total written: ' + totalWritten);
    // We're gonna do this a few times
    if (connectionCount < 5) {
        socket.connect(PORT);
    } else {
        server.close();
    }
});