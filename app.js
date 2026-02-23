const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello NITYAM YOUR TASK 2 IS SUCCESSFUL COMPLETED PROCEED FOR THE NEXT ONE...... ");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
