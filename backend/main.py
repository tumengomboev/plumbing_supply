from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class MyServer(BaseHTTPRequestHandler):
    def get(self):
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        response = {"message": "hello"}
        self.wfile.write(json.dumps(response).encode())
        