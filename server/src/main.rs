use futures_util::{stream::BoxStream, StreamExt};
use poem::{
    listener::TcpListener,
    Route,
    Server,
    endpoint::EmbeddedFilesEndpoint,
};
use poem_openapi::{payload::EventStream, Object, OpenApi, OpenApiService};
use tokio::time::Duration;
use rust_embed::RustEmbed;

#[derive(RustEmbed)]
#[folder = "public"]
pub struct Files;

#[derive(RustEmbed)]
#[folder = "public/assets"]
pub struct Assets;

#[derive(Object)]
struct Event {
    value: i32,
}

struct Api;

#[OpenApi]
impl Api {
    #[oai(path = "/events", method = "get")]
    async fn index(&self) -> EventStream<BoxStream<'static, Event>> {
        EventStream::new(
            async_stream::stream! {
                for i in 0.. {
                    tokio::time::sleep(Duration::from_secs(1)).await;
                    yield Event { value: i };
                }
            }
            .boxed(),
        )
    }
}

#[tokio::main]
async fn main() -> Result<(), std::io::Error> {
    if std::env::var_os("RUST_LOG").is_none() {
        std::env::set_var("RUST_LOG", "poem=debug");
    }
    tracing_subscriber::fmt::init();

    let api_service =
        OpenApiService::new(Api, "Hello World", "1.0").server("http://localhost:3000/api");
    let ui = api_service.swagger_ui();

    
    let app = Route::new()
        .at("/", EmbeddedFilesEndpoint::<Files>::new())
        .nest("/assets", EmbeddedFilesEndpoint::<Assets>::new())
        .nest("/api", api_service)
        .nest("/docs", ui);

    Server::new(TcpListener::bind("127.0.0.1:3000"))
        .run(app)
        .await
}
