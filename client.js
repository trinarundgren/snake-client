const net = require('net');
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8"); {

    conn.on("data", (data) => {
      console.log(data);
    });

    conn.on("connect", () => {
      console.log('You are connected!');
      conn.write('Name: TRINA');

    });

  };

  return conn;
};

module.exports = { connect };
