const express = require('express');
const app = express();

// Mapping of status codes to their respective messages
const statusDescriptions = {
    200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: "Created: The request has been fulfilled and resulted in the creation of a resource.",
    204: "No Content: The server successfully processed the request, but is not returning any content.",
    400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
    401: "Unauthorized: The request requires user authentication.",
    403: "Forbidden: The server understands the request but refuses to authorize it.",
    404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
    405: "Method Not Allowed: The method specified in the request is not allowed for the resource identified by the request URI.",
    429: "Too Many Requests: The user has sent too many requests in a given amount of time.",
    500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.",
    503: "Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance of the server.",
    504: "Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server."
};

// GET endpoint for retrieving status info
app.get('/status-info', (req, res) => {
    const code = parseInt(req.query.code, 10);

    if (statusDescriptions[code]) {
        res.json({
            status: code,
            message: statusDescriptions[code]
        });
    } else {
        res.status(400).json({
            status: 400,
            message: "Bad Request: Invalid status code provided."
        });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
