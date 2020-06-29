var searchIndex = JSON.parse('{\
"isahc":{"doc":"The practical HTTP client that is fun to use.","i":[[3,"Body","isahc","Contains the body of an HTTP request or response.",null,null],[3,"HttpClient","","An HTTP client for making requests.",null,null],[3,"HttpClientBuilder","","An HTTP client builder, capable of creating custom…",null,null],[3,"ResponseFuture","","A future for a request being executed.",null,null],[3,"Metrics","","An object that holds status updates and progress…",null,null],[4,"Error","","All possible types of errors that can be returned from…",null,null],[13,"Aborted","","The request was aborted before it could be completed.",0,null],[13,"BadClientCertificate","","A problem occurred with the local certificate.",0,null],[13,"BadServerCertificate","","The server certificate could not be validated.",0,null],[13,"ConnectFailed","","Failed to connect to the server.",0,null],[13,"CouldntResolveHost","","Couldn\'t resolve host name.",0,null],[13,"CouldntResolveProxy","","Couldn\'t resolve proxy host name.",0,null],[13,"Curl","","An unrecognized error thrown by curl.",0,null],[13,"InvalidContentEncoding","","Unrecognized or bad content encoding returned by the server.",0,null],[13,"InvalidCredentials","","Provided credentials were rejected by the server.",0,null],[13,"InvalidHttpFormat","","Validation error when constructing the request or parsing…",0,null],[13,"InvalidUtf8","","Invalid UTF-8 string error.",0,null],[13,"Io","","An unknown I/O error.",0,null],[13,"NoResponse","","The server did not send a response.",0,null],[13,"RangeRequestUnsupported","","The server does not support or accept range requests.",0,null],[13,"RequestBodyError","","An error occurred while writing the request body.",0,null],[13,"ResponseBodyError","","An error occurred while reading the response body.",0,null],[13,"SSLConnectFailed","","Failed to connect over a secure socket.",0,null],[13,"SSLEngineError","","An error ocurred in the secure socket engine.",0,null],[13,"Timeout","","An ongoing request took longer than the configured timeout…",0,null],[13,"TooManyRedirects","","Number of redirects hit the maximum amount.",0,null],[5,"get","","Send a GET request to the given URI.",null,[[],[["error",4],["result",4],["response",3]]]],[5,"get_async","","Send a GET request to the given URI asynchronously.",null,[[],["responsefuture",3]]],[5,"head","","Send a HEAD request to the given URI.",null,[[],[["error",4],["result",4],["response",3]]]],[5,"head_async","","Send a HEAD request to the given URI asynchronously.",null,[[],["responsefuture",3]]],[5,"post","","Send a POST request to the given URI with a given request…",null,[[],[["error",4],["result",4],["response",3]]]],[5,"post_async","","Send a POST request to the given URI asynchronously with a…",null,[[],["responsefuture",3]]],[5,"put","","Send a PUT request to the given URI with a given request…",null,[[],[["error",4],["result",4],["response",3]]]],[5,"put_async","","Send a PUT request to the given URI asynchronously with a…",null,[[],["responsefuture",3]]],[5,"delete","","Send a DELETE request to the given URI.",null,[[],[["error",4],["result",4],["response",3]]]],[5,"delete_async","","Send a DELETE request to the given URI asynchronously.",null,[[],["responsefuture",3]]],[5,"send","","Send an HTTP request and return the HTTP response.",null,[[["body",3],["into",8],["request",3]],[["error",4],["result",4],["response",3]]]],[5,"send_async","","Send an HTTP request and return the HTTP response…",null,[[["body",3],["into",8],["request",3]],["responsefuture",3]]],[5,"version","","Gets a human-readable string with the version number of…",null,[[]]],[11,"empty","","Create a new empty body.",1,[[]]],[11,"from_bytes","","Create a new body from bytes stored in memory.",1,[[]]],[11,"from_maybe_shared","","Attempt to create a new body from a shared [`Bytes`] buffer.",1,[[]]],[11,"from_reader","","Create a streaming body that reads from the given reader.",1,[[]]],[11,"from_reader_sized","","Create a streaming body with a known length.",1,[[]]],[11,"is_empty","","Report if this body is empty.",1,[[]]],[11,"len","","Get the size of the body, if known.",1,[[],["option",4]]],[11,"reset","","If this body is repeatable, reset the body stream back to…",1,[[]]],[11,"new","","Create a new builder for building a custom client. All…",2,[[]]],[11,"max_connections","","Set a maximum number of simultaneous connections that this…",2,[[]]],[11,"max_connections_per_host","","Set a maximum number of simultaneous connections that this…",2,[[]]],[11,"connection_cache_size","","Set the size of the connection cache.",2,[[]]],[11,"dns_cache","","Configure DNS caching.",2,[[]]],[11,"dns_resolve","","Set a mapping of DNS resolve overrides.",2,[[["resolvemap",3]]]],[11,"default_header","","Add a default header to be passed with every request.",2,[[]]],[11,"default_headers","","Set the default headers to include in every request,…",2,[[]]],[11,"build","","Build an [`HttpClient`] using the configured options.",2,[[],[["error",4],["httpclient",3],["result",4]]]],[11,"new","","Create a new HTTP client using the default configuration.",3,[[],[["result",4],["error",4]]]],[11,"builder","","Create a new [`HttpClientBuilder`] for building a custom…",3,[[],["httpclientbuilder",3]]],[11,"get","","Send a GET request to the given URI.",3,[[],[["error",4],["result",4],["response",3]]]],[11,"get_async","","Send a GET request to the given URI asynchronously.",3,[[],["responsefuture",3]]],[11,"head","","Send a HEAD request to the given URI.",3,[[],[["error",4],["result",4],["response",3]]]],[11,"head_async","","Send a HEAD request to the given URI asynchronously.",3,[[],["responsefuture",3]]],[11,"post","","Send a POST request to the given URI with a given request…",3,[[],[["error",4],["result",4],["response",3]]]],[11,"post_async","","Send a POST request to the given URI asynchronously with a…",3,[[],["responsefuture",3]]],[11,"put","","Send a PUT request to the given URI with a given request…",3,[[],[["error",4],["result",4],["response",3]]]],[11,"put_async","","Send a PUT request to the given URI asynchronously with a…",3,[[],["responsefuture",3]]],[11,"delete","","Send a DELETE request to the given URI.",3,[[],[["error",4],["result",4],["response",3]]]],[11,"delete_async","","Send a DELETE request to the given URI asynchronously.",3,[[],["responsefuture",3]]],[11,"send","","Send an HTTP request and return the HTTP response.",3,[[["body",3],["into",8],["request",3]],[["error",4],["result",4],["response",3]]]],[11,"send_async","","Send an HTTP request and return the HTTP response…",3,[[["body",3],["into",8],["request",3]],["responsefuture",3]]],[11,"upload_progress","","Number of bytes uploaded / estimated total.",4,[[]]],[11,"upload_speed","","Average upload speed so far in bytes/second.",4,[[]]],[11,"download_progress","","Number of bytes downloaded / estimated total.",4,[[]]],[11,"download_speed","","Average download speed so far in bytes/second.",4,[[]]],[11,"name_lookup_time","","Get the total time from the start of the request until DNS…",4,[[],["duration",3]]],[11,"connect_time","","Get the amount of time taken to establish a connection to…",4,[[],["duration",3]]],[11,"secure_connect_time","","Get the amount of time spent on TLS handshakes.",4,[[],["duration",3]]],[11,"transfer_start_time","","Get the time it took from the start of the request until…",4,[[],["duration",3]]],[11,"transfer_time","","Get the amount of time spent performing the actual request…",4,[[],["duration",3]]],[11,"total_time","","Get the total time for the entire request. This will…",4,[[],["duration",3]]],[11,"redirect_time","","If automatic redirect following is enabled, gets the total…",4,[[],["duration",3]]],[0,"auth","","Types for working with HTTP authentication methods.",null,null],[3,"Credentials","isahc::auth","Credentials consisting of a username and a secret…",null,null],[3,"Authentication","","Specifies one or more HTTP authentication schemes to use.",null,null],[11,"new","","Create credentials from a username and password.",5,[[]]],[11,"none","","Disable all authentication schemes. This is the default.",6,[[]]],[11,"all","","Enable all available authentication schemes.",6,[[]]],[11,"basic","","HTTP Basic authentication.",6,[[]]],[11,"digest","","HTTP Digest authentication.",6,[[]]],[0,"config","isahc","Definition of all client and request configuration options.",null,null],[3,"ResolveMap","isahc::config","A mapping of host and port pairs to IP addresses.",null,null],[3,"CaCertificate","","A public CA certificate bundle file.",null,null],[3,"ClientCertificate","","A public key certificate file.",null,null],[3,"PrivateKey","","A private key file.",null,null],[3,"SslOption","","A flag that can be used to alter the behavior of SSL/TLS…",null,null],[3,"VersionNegotiation","","A strategy for selecting what HTTP versions should be used…",null,null],[3,"NetworkInterface","","Used to configure which local addresses or interfaces…",null,null],[4,"DnsCache","","DNS caching configuration.",null,null],[13,"Disable","","Disable DNS caching entirely.",7,null],[13,"Timeout","","Enable DNS caching and keep entries in the cache for the…",7,null],[13,"Forever","","Enable DNS caching and cache entries forever.",7,null],[4,"RedirectPolicy","","Describes a policy for handling server redirects.",null,null],[13,"None","","Do not apply any special treatment to redirect responses.…",8,null],[13,"Follow","","Follow all redirects automatically.",8,null],[13,"Limit","","Follow redirects automatically up to a maximum number of…",8,null],[11,"new","","Create a new empty resolve map.",9,[[]]],[11,"add","","Add a DNS mapping for a given host and port pair.",9,[[]]],[11,"pem_file","","Get a certificate from a PEM-encoded file.",10,[[]]],[11,"der_file","","Get a certificate from a DER-encoded file.",10,[[]]],[11,"p12_file","","Get a certificate from a PKCS#12-encoded file.",10,[[]]],[11,"pem_file","","Get a PEM-encoded private key file.",11,[[]]],[11,"der_file","","Get a DER-encoded private key file.",11,[[]]],[11,"file","","Get a CA certificate from a path to a certificate bundle…",12,[[]]],[18,"NONE","","An empty set of options. This is the default.",13,null],[18,"DANGER_ACCEPT_INVALID_CERTS","","Disables certificate validation.",13,null],[18,"DANGER_ACCEPT_INVALID_HOSTS","","Disables hostname verification on certificates.",13,null],[18,"DANGER_ACCEPT_REVOKED_CERTS","","Disables certificate revocation checks for backends where…",13,null],[8,"Configurable","","Provides additional methods when building a request for…",null,null],[11,"timeout","","Set a maximum amount of time that a request is allowed to…",14,[[["duration",3]]]],[11,"connect_timeout","","Set a timeout for the initial connection phase.",14,[[["duration",3]]]],[11,"version_negotiation","","Configure how the use of HTTP versions should be…",14,[[["versionnegotiation",3]]]],[11,"redirect_policy","","Set a policy for automatically following server redirects.",14,[[["redirectpolicy",4]]]],[11,"auto_referer","","Update the `Referer` header automatically when following…",14,[[]]],[11,"authentication","","Set one or more default HTTP authentication methods to…",14,[[["authentication",3]]]],[11,"credentials","","Set the credentials to use for HTTP authentication.",14,[[["credentials",3]]]],[11,"tcp_keepalive","","Enable TCP keepalive with a given probe interval.",14,[[["duration",3]]]],[11,"tcp_nodelay","","Enables the `TCP_NODELAY` option on connect.",14,[[]]],[11,"interface","","Bind local socket connections to a particular network…",14,[[]]],[11,"proxy","","Set a proxy to use for requests.",14,[[]]],[11,"proxy_blacklist","","Disable proxy usage for the provided list of hosts.",14,[[]]],[11,"proxy_authentication","","Set one or more HTTP authentication methods to attempt to…",14,[[["authentication",3]]]],[11,"proxy_credentials","","Set the credentials to use for proxy authentication.",14,[[["credentials",3]]]],[11,"max_upload_speed","","Set a maximum upload speed for the request body, in bytes…",14,[[]]],[11,"max_download_speed","","Set a maximum download speed for the response body, in…",14,[[]]],[11,"dns_servers","","Set a list of specific DNS servers to be used for DNS…",14,[[]]],[11,"ssl_client_certificate","","Set a custom SSL/TLS client certificate to use for client…",14,[[["clientcertificate",3]]]],[11,"ssl_ca_certificate","","Set a custom SSL/TLS CA certificate bundle to use for…",14,[[["cacertificate",3]]]],[11,"ssl_ciphers","","Set a list of ciphers to use for SSL/TLS connections.",14,[[]]],[11,"ssl_options","","Set various options for this request that control SSL/TLS…",14,[[["ssloption",3]]]],[11,"metrics","","Enable or disable comprehensive per-request metrics…",14,[[]]],[11,"latest_compatible","","Always prefer the latest supported version announced by…",15,[[]]],[11,"http10","","Connect via HTTP/1.0 and do not attempt to use a higher…",15,[[]]],[11,"http11","","Connect via HTTP/1.1 and do not attempt to use a higher…",15,[[]]],[11,"http2","","Connect via HTTP/2. Failure to connect will not fall back…",15,[[]]],[11,"http3","","Connect via HTTP/3. Failure to connect will not fall back…",15,[[]]],[11,"any","","Bind to whatever the networking stack finds suitable. This…",16,[[]]],[11,"name","","Bind to the interface with the given name (such as…",16,[[]]],[11,"host","","Bind to the given local host or address. This can either…",16,[[]]],[0,"prelude","isahc","A \\\"prelude\\\" for importing common Isahc types.",null,null],[8,"RequestExt","","Extension methods on an HTTP request.",null,null],[10,"send","","Send the HTTP request synchronously using the default…",17,[[],[["error",4],["result",4],["response",3]]]],[10,"send_async","","Sends the HTTP request asynchronously using the default…",17,[[],["responsefuture",3]]],[8,"ResponseExt","","Provides extension methods for working with HTTP responses.",null,null],[10,"effective_uri","","Get the effective URI of this response. This value differs…",18,[[],[["uri",3],["option",4]]]],[10,"metrics","","If request metrics are enabled for this particular…",18,[[],[["metrics",3],["option",4]]]],[10,"copy_to","","Copy the response body into a writer.",18,[[],["result",6]]],[11,"copy_to_file","","Write the response body to a file.",18,[[],["result",6]]],[10,"text","","Read the response body as a string.",18,[[],[["result",6],["string",3]]]],[10,"text_async","","Read the response body as a string asynchronously.",18,[[],["textfuture",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"into_future","","",19,[[]]],[11,"try_poll","","",19,[[["pin",3],["context",3]],["poll",4]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","isahc::auth","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","isahc::config","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","isahc","",1,[[]]],[11,"from","","",1,[[["vec",3]]]],[11,"from","","",1,[[]]],[11,"from","","",1,[[["string",3]]]],[11,"from","","",1,[[]]],[11,"from","","",1,[[["option",4]]]],[11,"from","isahc::config","",7,[[["duration",3]]]],[11,"from","","",16,[[["ipaddr",4]]]],[11,"clone","isahc","",4,[[],["metrics",3]]],[11,"clone","isahc::auth","",5,[[],["credentials",3]]],[11,"clone","","",6,[[],["authentication",3]]],[11,"clone","isahc::config","",7,[[],["dnscache",4]]],[11,"clone","","",9,[[],["resolvemap",3]]],[11,"clone","","",8,[[],["redirectpolicy",4]]],[11,"clone","","",10,[[],["clientcertificate",3]]],[11,"clone","","",11,[[],["privatekey",3]]],[11,"clone","","",12,[[],["cacertificate",3]]],[11,"clone","","",13,[[],["ssloption",3]]],[11,"clone","","",15,[[],["versionnegotiation",3]]],[11,"clone","","",16,[[],["networkinterface",3]]],[11,"default","isahc","",1,[[]]],[11,"default","","",2,[[]]],[11,"default","isahc::auth","",6,[[]]],[11,"default","isahc::config","",7,[[]]],[11,"default","","",9,[[],["resolvemap",3]]],[11,"default","","",8,[[]]],[11,"default","","",13,[[]]],[11,"default","","",15,[[]]],[11,"default","","",16,[[]]],[11,"eq","","",8,[[["redirectpolicy",4]]]],[11,"ne","","",8,[[["redirectpolicy",4]]]],[11,"fmt","isahc","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",19,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","isahc::auth","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","isahc::config","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","isahc","",0,[[["formatter",3]],["result",6]]],[11,"bitor","isahc::auth","",6,[[]]],[11,"bitor","isahc::config","",13,[[]]],[11,"bitor_assign","isahc::auth","",6,[[]]],[11,"bitor_assign","isahc::config","",13,[[]]],[11,"description","isahc","",0,[[]]],[11,"cause","","",0,[[],[["option",4],["stderror",8]]]],[11,"read","","",1,[[],["result",6]]],[11,"poll","","",19,[[["pin",3],["context",3]],["poll",4]]],[11,"poll_read","","",1,[[["pin",3],["context",3]],[["poll",4],["result",6]]]],[11,"copy_to_file","","Write the response body to a file.",18,[[],["result",6]]]],"p":[[4,"Error"],[3,"Body"],[3,"HttpClientBuilder"],[3,"HttpClient"],[3,"Metrics"],[3,"Credentials"],[3,"Authentication"],[4,"DnsCache"],[4,"RedirectPolicy"],[3,"ResolveMap"],[3,"ClientCertificate"],[3,"PrivateKey"],[3,"CaCertificate"],[3,"SslOption"],[8,"Configurable"],[3,"VersionNegotiation"],[3,"NetworkInterface"],[8,"RequestExt"],[8,"ResponseExt"],[3,"ResponseFuture"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);