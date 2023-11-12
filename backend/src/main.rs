use actix_web::{post, web, App, HttpServer, Responder};
use reqwest;
use serde::Deserialize;

#[derive(Deserialize)]
struct Info {
    query_params: String,
}

const BRAVE_API_URL: &str = "https://api.search.brave.com/res/v1";

async fn fetch_brave_api(url: String) -> String {
    let response = match reqwest::Client::new()
        .get(url)
        .header("X-Subscription-Token", API_KEY)
        .send()
        .await
    {
        Ok(response) => response,
        Err(_) => return "Error".to_owned(),
    };

    match response.text().await {
        Ok(body) => body,
        Err(_) => "Error".to_owned(),
    }
}

#[post("/web")]
async fn web_search(info: web::Json<Info>) -> impl Responder {
    let base_url = format!(
        "{}/web/search?{}&result_filter=web",
        BRAVE_API_URL, info.query_params
    );

    fetch_brave_api(base_url).await
}

#[post("/videos")]
async fn video_search(info: web::Json<Info>) -> impl Responder {
    let base_url = format!("{}/videos/search?{}", BRAVE_API_URL, info.query_params);

    fetch_brave_api(base_url).await
}

#[post("/images")]
async fn images_search(info: web::Json<Info>) -> impl Responder {
    let base_url = format!("{}/images/search?{}", BRAVE_API_URL, info.query_params);

    fetch_brave_api(base_url).await
}

#[post("/news")]
async fn news_search(info: web::Json<Info>) -> impl Responder {
    let base_url = format!("{}/news/search?{}", BRAVE_API_URL, info.query_params);

    fetch_brave_api(base_url).await
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(web_search)
            .service(video_search)
            .service(images_search)
            .service(news_search)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
