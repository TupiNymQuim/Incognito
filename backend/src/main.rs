use actix_web::{post, App, HttpServer, Responder};
use reqwest;
use std::process::exit;
use dotenv::dotenv;
use middleware::Whitelist;
mod middleware;

const BRAVE_API_URL: &str = "https://api.search.brave.com/res/v1";

async fn fetch_brave_api(url: String) -> String {
    let api_key = std::env::var("API_KEY").unwrap_or_else(|_| {
        eprintln!("Error: NR_IP environment variable not set");
        std::process::exit(1);
    });
    let response = match reqwest::Client::new()
        .get(url)
        .header("X-Subscription-Token", api_key)
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
async fn web_search(query: String) -> impl Responder {
    let base_url = format!(
        "{}/web/search?{}&result_filter=web",
        BRAVE_API_URL, query
    );

    fetch_brave_api(base_url).await
}

#[post("/videos")]
async fn video_search(query: String) -> impl Responder {
    let base_url = format!("{}/videos/search?{}", BRAVE_API_URL, query);

    fetch_brave_api(base_url).await
}

#[post("/images")]
async fn images_search(query: String) -> impl Responder {
    let base_url = format!("{}/images/search?{}", BRAVE_API_URL, query);

    fetch_brave_api(base_url).await
}

#[post("/news")]
async fn news_search(query: String) -> impl Responder {
    let base_url = format!("{}/news/search?{}", BRAVE_API_URL, query);

    fetch_brave_api(base_url).await
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    if let Ok(bind_ip) = std::env::var("BIND_IP") {
        HttpServer::new(|| {
            App::new()
                .wrap(Whitelist)
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
