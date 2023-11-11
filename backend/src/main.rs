use actix_web::{get, App, HttpServer, Responder};

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
    HttpServer::new(|| {
        App::new()
            .service(web_search)
            .service(video_search)
            .service(images_search)
            .service(news_search)})
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
