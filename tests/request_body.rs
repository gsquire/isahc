use isahc::prelude::*;
use isahc::Body;
use test_case::test_case;
use testserver::endpoint;

#[test_case("GET")]
#[test_case("HEAD")]
#[test_case("POST")]
#[test_case("PUT")]
#[test_case("DELETE")]
#[test_case("PATCH")]
#[test_case("FOOBAR")]
fn request_with_body_of_known_size(method: &str) {
    let body = "MyVariableOne=ValueOne&MyVariableTwo=ValueTwo";
    let endpoint = endpoint!();

    Request::builder()
        .method(method)
        .uri(endpoint.url())
        .header("Content-Type", "application/x-www-form-urlencoded")
        .body(body)
        .unwrap()
        .send()
        .unwrap();

    assert_eq!(endpoint.request().method, method);
    endpoint.request().expect_header("content-type", "application/x-www-form-urlencoded");
    endpoint.request().expect_body(body);
}

#[test_case("GET")]
#[test_case("HEAD")]
#[test_case("POST")]
#[test_case("PUT")]
#[test_case("DELETE")]
#[test_case("PATCH")]
#[test_case("FOOBAR")]
fn request_with_body_of_unknown_size_uses_chunked_encoding(method: &str) {
    let body = "foo";
    let endpoint = endpoint!();

    Request::builder()
        .method(method)
        .uri(endpoint.url())
        // This header should be ignored
        .header("transfer-encoding", "identity")
        .body(Body::from_reader(body.as_bytes()))
        .unwrap()
        .send()
        .unwrap();

    assert_eq!(endpoint.request().method, method);
    endpoint.request().expect_header("transfer-encoding", "chunked");
    endpoint.request().expect_body(body);
}

#[ignore]
#[test_case("GET")]
#[test_case("HEAD")]
#[test_case("POST")]
#[test_case("PUT")]
#[test_case("DELETE")]
#[test_case("PATCH")]
#[test_case("FOOBAR")]
fn content_length_header_takes_precedence_over_body_objects_length(method: &str) {
    let endpoint = endpoint!();

    Request::builder()
        .method(method)
        .uri(endpoint.url())
        // Override given body's length
        .header("content-length", "3")
        .body("abc123")
        .unwrap()
        .send()
        .unwrap();

    assert_eq!(endpoint.request().method, method);
    endpoint.request().expect_header("content-length", "3");
    endpoint.request().expect_body("abc"); // truncated to 3 bytes
}
