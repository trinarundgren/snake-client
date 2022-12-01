let conn = null;
// setup interface to handle user input from stdin
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    console.log("you pressed W");
    conn.write('Move: up');
  }
  if (key === 's') {
    console.log("you pressed S");
    conn.write('Move: down');
  }
  if (key === 'd') {
    console.log("you pressed D");
    conn.write('Move: right');
  }
  if (key === 'a') {
    console.log("you pressed A");
    conn.write('Move: left');
  }
  if (key === 'h') {
    console.log("message");
    conn.write('Say: Get our of my way');
  }
  if (key === 'y') {
    console.log('message2');
    conn.write('Say: I will get you');
  }
  console.log("key", key)
};
const setupInput = function (connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput