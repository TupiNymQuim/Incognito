use std::process::exit;

use dotenv::dotenv;
use actix_web::{get, App, HttpServer, Responder};
use middleware::SayHi;
mod middleware;

#[get("/web")]
async fn web_search() -> impl Responder {
    "Web searching"
}

#[get("/videos")]
async fn video_search() -> impl Responder {
    "Video searching"
}

#[get("/images")]
async fn images_search() -> impl Responder {
    "Image searching"
}

#[get("/news")]
async fn news_search() -> impl Responder {
    "News searching"
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    if let Ok(bind_ip) = std::env::var("BIND_IP") {
        HttpServer::new(|| {
            App::new()
                .wrap(SayHi)
                .service(web_search)
                .service(video_search)
                .service(images_search)
                .service(news_search)})
        .bind((bind_ip, 8080))?
        .run()
        .await
    }
    else {
        eprintln!("Error: Bind IP not set in .env file");
        exit(1);
    }
}
