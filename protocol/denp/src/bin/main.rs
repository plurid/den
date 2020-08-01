use denp::ThreadPool;

use std::io::prelude::*;
use std::net::TcpListener;
use std::net::TcpStream;



fn main() {
    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();
    let pool = ThreadPool::new(4);

    for stream in listener.incoming().take(5) {
        let stream = stream.unwrap();

        pool.execute(|| {
            handle_connection(stream);
        });
    }

    println!("Shutting down.");
}


fn handle_connection(
    mut stream: TcpStream,
) {
    let mut buffer = [0; 512];
    stream.read(&mut buffer).unwrap();

    let status_line = "HTTP/1.1 200 OK\r\n\r\n";
    let contents = "Data";

    let response = format!("{}{}", status_line, contents);

    stream.write(response.as_bytes()).unwrap();
    stream.flush().unwrap();
}
