from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from urllib.parse import urlparse, parse_qs
from jinja2 import Environment, FileSystemLoader
import os


environment = Environment(loader=FileSystemLoader("templates"))

class MyServer(BaseHTTPRequestHandler):
    def do_POST(self):
        content_type = self.headers.get("Content-type")
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        if content_type == 'application/json':
            received_data = json.loads(post_data.decode())
        elif content_type == 'application/x-www-form-urlencoded':
            received_data = parse_qs(post_data.decode())
            received_data = {key: value[0] if len(value) == 1 else value for key, value in received_data.items()}
    
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        
        response = {
            
            }
        self.wfile.write(json.dumps(response).encode())

    def do_GET(self):
        if self.path == "/":
            parsed_url = urlparse(self.path)
            query_params = parse_qs(parsed_url.query)
            print("get params:", query_params)
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()

            template = environment.get_template("index.html")
            html_content = template.render(title="Plumbing Supply")
            self.wfile.write(html_content.encode())
        elif self.path.startswith('/src/'):
            file_path = str(self.path).lstrip('/')
            
            if os.path.isfile(file_path):
                self.send_response(200)

                if file_path.endswith('.css'):
                    self.send_header('Content-type', 'text/css')
                elif file_path.endswith('.js'):
                    self.send_header('Content-type', 'application/javascript')
                elif file_path.endswith('.png'):
                    self.send_header('Content-type', 'image/png')
                elif file_path.endswith('.jpg') or file_path.endswith('.jpeg'):
                    self.send_header('Content-type', 'image/jpeg')
                elif file_path.endswith('.gif'):
                    self.send_header('Content-type', 'image/gif')
                elif file_path.endswith('.svg'):
                    self.send_header('Content-type', 'image/svg+xml')
                else:
                    self.send_header('Content-type', 'application/octet-stream')
                
                self.end_headers()

                
                with open(file_path, 'rb') as file:
                    self.wfile.write(file.read())
            else:
                self.send_error(404, "File Not Found")
       
def run(server_class=HTTPServer, handler_class=MyServer, port=8080):
    server_address = ("", port)
    httpd = server_class(server_address, handler_class)
    print(f"server running on port {port}")
    httpd.serve_forever()


if __name__ == "__main__":
    run()

