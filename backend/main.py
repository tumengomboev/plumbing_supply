from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from urllib.parse import urlparse, parse_qs

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_url = urlparse(self.path)
        query_params = parse_qs(parsed_url.query)
        print("get params:", query_params)
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        response = {
            "message": "hello", 
            "params": query_params,
            }
        self.wfile.write(json.dumps(response).encode())

def run(server_class=HTTPServer, handler_class=MyServer, port=8080):
    server_address = ("", port)
    httpd = server_class(server_address, handler_class)
    print(f"server running on port {port}")
    httpd.serve_forever()


if __name__ == "__main__":
    run()