use std::{future::{ready, Ready, Future}, pin::Pin};

use actix_web::{
    dev::{forward_ready, Service, ServiceRequest, ServiceResponse, Transform},
    Error, HttpResponse,
};

pub struct Whitelist;

impl<S> Transform<S, ServiceRequest> for Whitelist
where
    S: Service<ServiceRequest, Response = ServiceResponse, Error = Error>,
    S::Future: 'static,
{
    type Response = ServiceResponse;
    type Error = Error;
    type InitError = ();
    type Transform = WhitelistMiddleware<S>;
    type Future = Ready<Result<Self::Transform, Self::InitError>>;

    fn new_transform(&self, service: S) -> Self::Future {
        ready(Ok(WhitelistMiddleware { service }))
    }
}

pub struct WhitelistMiddleware<S> {
    service: S,
}

type LocalBoxFuture<T> = Pin<Box<dyn Future<Output = T> + 'static>>;

impl<S> Service<ServiceRequest> for WhitelistMiddleware<S>
where
    S: Service<ServiceRequest, Response = ServiceResponse, Error = Error>,
    S::Future: 'static,
{
    type Response = ServiceResponse;
    type Error = Error;
    type Future = LocalBoxFuture<Result<Self::Response, Self::Error>>;

    forward_ready!(service);

    fn call(&self, req: ServiceRequest) -> Self::Future {
        let allowed_ip = std::env::var("NR_IP").unwrap_or_else(|_| {
            eprintln!("Error: NR_IP environment variable not set");
            return "".to_string();
        });
        if let Some(val) = req.peer_addr() {
            let ip: String = val.ip().to_string();
            if allowed_ip.is_empty() || !ip.contains(&allowed_ip) {
                return Box::pin(async move {
                    let res = req.into_response(HttpResponse::Unauthorized().finish());
                    Ok(res)
                })
            }
        }
        else {
              return Box::pin(async move {
                let res = req.into_response(HttpResponse::Unauthorized().finish());
                Ok(res)
              })
        }
        let fut = self.service.call(req);
        Box::pin(async move {
            let res = fut.await?;
            Ok(res)
        })
    }
}
