export enum HttpStatusCodes {
  CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  PROCESSING = 102,
  EARLY_HINTS = 103,
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,
  MULTI_STATUS = 207,
  ALREADY_REPORTED = 208,
  IM_USED = 226,
  MULTIPLE_CHOICES = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  USE_PROXY = 305,
  SWITCH_PROXY = 306,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  PAYLOAD_TOO_LARGE = 413,
  URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  IM_A_TEAPOT = 418,
  MISDIRECTED_REQUEST = 421,
  UNPROCESSABLE_ENTITY = 422,
  LOCKED = 423,
  FAILED_DEPENDENCY = 424,
  TOO_EARLY = 425,
  UPGRADE_REQUIRED = 426,
  PRECONDITION_REQUIRED = 428,
  TOO_MANY_REQUESTS = 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
  VARIANT_ALSO_NEGOTIATES = 506,
  INSUFFICIENT_STORAGE = 507,
  LOOP_DETECTED = 508,
  NOT_EXTENDED = 510,
  NETWORK_AUTHENTICATION_REQUIRED = 511,
}

export enum HttpMethods {
  GET = "GET",
  HEAD = "HEAD",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  CONNECT = "CONNECT",
  OPTIONS = "OPTIONS",
  TRACE = "TRACE",
  PATCH = "PATCH",
}

export enum HttpHeaders {
  ACCEPT = "Accept",
  ACCEPT_CHARSET = "Accept-Charset",
  ACCEPT_ENCODING = "Accept-Encoding",
  ACCEPT_LANGUAGE = "Accept-Language",
  ACCEPT_RANGES = "Accept-Ranges",
  ACCESS_CONTROL_ALLOW_CREDENTIALS = "Access-Control-Allow-Credentials",
  ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers",
  ACCESS_CONTROL_ALLOW_METHODS = "Access-Control-Allow-Methods",
  ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin",
  ACCESS_CONTROL_EXPOSE_HEADERS = "Access-Control-Expose-Headers",
  ACCESS_CONTROL_MAX_AGE = "Access-Control-Max-Age",
  ACCESS_CONTROL_REQUEST_HEADERS = "Access-Control-Request-Headers",
  ACCESS_CONTROL_REQUEST_METHOD = "Access-Control-Request-Method",
  AGE = "Age",
  ALLOW = "Allow",
  ALT_SVC = "Alt-Svc",
  AUTHORIZATION = "Authorization",
  CACHE_CONTROL = "Cache-Control",
  CONNECTION = "Connection",
  CONTENT_DISPOSITION = "Content-Disposition",
  CONTENT_ENCODING = "Content-Encoding",
  CONTENT_LANGUAGE = "Content-Language",
  CONTENT_LENGTH = "Content-Length",
  CONTENT_LOCATION = "Content-Location",
  CONTENT_RANGE = "Content-Range",
  CONTENT_TYPE = "Content-Type",
  COOKIE = "Cookie",
  DATE = "Date",
  ETAG = "ETag",
  EXPECT = "Expect",
  EXPIRES = "Expires",
  FORWARDED = "Forwarded",
  FROM = "From",
  HOST = "Host",
  IF_MATCH = "If-Match",
  IF_MODIFIED_SINCE = "If-Modified-Since",
  IF_NONE_MATCH = "If-None-Match",
  IF_RANGE = "If-Range",
  IF_UNMODIFIED_SINCE = "If-Unmodified-Since",
  LAST_MODIFIED = "Last-Modified",
  LINK = "Link",
  LOCATION = "Location",
  MAX_FORWARDS = "Max-Forwards",
  ORIGIN = "Origin",
  PRAGMA = "Pragma",
  PROXY_AUTHENTICATE = "Proxy-Authenticate",
  PROXY_AUTHORIZATION = "Proxy-Authorization",
  RANGE = "Range",
  REFERER = "Referer",
  RETRY_AFTER = "Retry-After",
  SERVER = "Server",
  SET_COOKIE = "Set-Cookie",
  STRICT_TRANSPORT_SECURITY = "Strict-Transport-Security",
  TE = "TE",
  TRAILER = "Trailer",
  TRANSFER_ENCODING = "Transfer-Encoding",
  UPGRADE = "Upgrade",
  USER_AGENT = "User-Agent",
  VARY = "Vary",
  VIA = "Via",
  WARNING = "Warning",
  WWW_AUTHENTICATE = "WWW-Authenticate",
  X_FRAME_OPTIONS = "X-Frame-Options",
  X_XSS_PROTECTION = "X-XSS-Protection",
  X_CONTENT_TYPE_OPTIONS = "X-Content-Type-Options",
  X_POWERED_BY = "X-Powered-By",
  X_UA_COMPATIBLE = "X-UA-Compatible",
  X_CONTENT_DURATION = "X-Content-Duration",
  X_REQUESTED_WITH = "X-Requested-With",
  X_FORWARDED_FOR = "X-Forwarded-For",
  X_FORWARDED_HOST = "X-Forwarded-Host",
  X_FORWARDED_PROTO = "X-Forwarded-Proto",
  X_HTTP_METHOD_OVERRIDE = "X-HTTP-Method-Override",
  X_ATT_DEVICEID = "X-ATT-DeviceId",
  X_WAP_PROFILE = "X-Wap-Profile",
  X_PINGBACK = "X-Pingback",
  X_REQUEST_ID = "X-Request-ID",
  X_CORRELATION_ID = "X-Correlation-ID",
  X_CSRF_TOKEN = "X-CSRF-Token",
}

export enum HttpStatusMessages {
  CONTINUE = "Continue",
  SWITCHING_PROTOCOLS = "Switching Protocols",
  PROCESSING = "Processing",
  EARLY_HINTS = "Early Hints",
  OK = "OK",
  CREATED = "Created",
  ACCEPTED = "Accepted",
  NON_AUTHORITATIVE_INFORMATION = "Non-Authoritative Information",
  NO_CONTENT = "No Content",
  RESET_CONTENT = "Reset Content",
  PARTIAL_CONTENT = "Partial Content",
  MULTI_STATUS = "Multi-Status",
  ALREADY_REPORTED = "Already Reported",
  IM_USED = "IM Used",
  MULTIPLE_CHOICES = "Multiple Choices",
  MOVED_PERMANENTLY = "Moved Permanently",
  FOUND = "Found",
  SEE_OTHER = "See Other",
  NOT_MODIFIED = "Not Modified",
  USE_PROXY = "Use Proxy",
  SWITCH_PROXY = "Switch Proxy",
  TEMPORARY_REDIRECT = "Temporary Redirect",
  PERMANENT_REDIRECT = "Permanent Redirect",
  BAD_REQUEST = "Bad Request",
  UNAUTHORIZED = "Unauthorized",
  PAYMENT_REQUIRED = "Payment Required",
  FORBIDDEN = "Forbidden",
  NOT_FOUND = "Not Found",
  METHOD_NOT_ALLOWED = "Method Not Allowed",
  NOT_ACCEPTABLE = "Not Acceptable",
  PROXY_AUTHENTICATION_REQUIRED = "Proxy Authentication Required",
  REQUEST_TIMEOUT = "Request Timeout",
  CONFLICT = "Conflict",
  GONE = "Gone",
  LENGTH_REQUIRED = "Length Required",
  PRECONDITION_FAILED = "Precondition Failed",
  PAYLOAD_TOO_LARGE = "Payload Too Large",
  URI_TOO_LONG = "URI Too Long",
  UNSUPPORTED_MEDIA_TYPE = "Unsupported Media Type",
  RANGE_NOT_SATISFIABLE = "Range Not Satisfiable",
  EXPECTATION_FAILED = "Expectation Failed",
  IM_A_TEAPOT = "I'm a teapot",
  MISDIRECTED_REQUEST = "Misdirected Request",
  UNPROCESSABLE_ENTITY = "Unprocessable Entity",
  LOCKED = "Locked",
  FAILED_DEPENDENCY = "Failed Dependency",
  TOO_EARLY = "Too Early",
  UPGRADE_REQUIRED = "Upgrade Required",
  PRECONDITION_REQUIRED = "Precondition Required",
  TOO_MANY_REQUESTS = "Too Many Requests",
  REQUEST_HEADER_FIELDS_TOO_LARGE = "Request Header Fields Too Large",
  UNAVAILABLE_FOR_LEGAL_REASONS = "Unavailable For Legal Reasons",
  INTERNAL_SERVER_ERROR = "Internal Server Error",
  NOT_IMPLEMENTED = "Not Implemented",
  BAD_GATEWAY = "Bad Gateway",
  SERVICE_UNAVAILABLE = "Service Unavailable",
  GATEWAY_TIMEOUT = "Gateway Timeout",
  HTTP_VERSION_NOT_SUPPORTED = "HTTP Version Not Supported",
  VARIANT_ALSO_NEGOTIATES = "Variant Also Negotiates",
  INSUFFICIENT_STORAGE = "Insufficient Storage",
  LOOP_DETECTED = "Loop Detected",
  NOT_EXTENDED = "Not Extended",
  NETWORK_AUTHENTICATION_REQUIRED = "Network Authentication Required",
}

export enum HttpContentTypes {
  TEXT_PLAIN = "text/plain",
  TEXT_HTML = "text/html",
  TEXT_CSS = "text/css",
  TEXT_JAVASCRIPT = "text/javascript",
  TEXT_XML = "text/xml",
  APPLICATION_JSON = "application/json",
  APPLICATION_XML = "application/xml",
  APPLICATION_XHTML_XML = "application/xhtml+xml",
  APPLICATION_OCTET_STREAM = "application/octet-stream",
  APPLICATION_PDF = "application/pdf",
  APPLICATION_ZIP = "application/zip",
  APPLICATION_X_WWW_FORM_URLENCODED = "application/x-www-form-urlencoded",
  MULTIPART_FORM_DATA = "multipart/form-data",
  IMAGE_JPEG = "image/jpeg",
  IMAGE_PNG = "image/png",
  IMAGE_GIF = "image/gif",
  IMAGE_SVG = "image/svg+xml",
  AUDIO_MPEG = "audio/mpeg",
  AUDIO_OGG = "audio/ogg",
  AUDIO_WAV = "audio/wav",
  VIDEO_MPEG = "video/mpeg",
  VIDEO_OGG = "video/ogg",
  VIDEO_WEBM = "video/webm",
}

export enum HttpHeaderValues {
  BYTES = "bytes",
  NO_CACHE = "no-cache",
  NO_STORE = "no-store",
  NO_TRANSFORM = "no-transform",
  ONLY_IF_CACHED = "only-if-cached",
  MUST_REVALIDATE = "must-revalidate",
  PUBLIC = "public",
  PRIVATE = "private",
  PROXY_REVALIDATE = "proxy-revalidate",
  MAX_AGE = "max-age",
  S_MAXAGE = "s-maxage",
  STALE_WHILE_REVALIDATE = "stale-while-revalidate",
  STALE_IF_ERROR = "stale-if-error",
}

export enum HttpCookies {
  DOMAIN = "Domain",
  MAX_AGE = "Max-Age",
  PATH = "Path",
  SECURE = "Secure",
  HTTP_ONLY = "HttpOnly",
  SAME_SITE = "SameSite",
}

export enum HttpSameSiteValues {
  STRICT = "Strict",
  LAX = "Lax",
  NONE = "None",
}

export enum HttpCacheControlValues {
  NO_CACHE = "no-cache",
  NO_STORE = "no-store",
  NO_TRANSFORM = "no-transform",
  ONLY_IF_CACHED = "only-if-cached",
  MUST_REVALIDATE = "must-revalidate",
  PUBLIC = "public",
  PRIVATE = "private",
  PROXY_REVALIDATE = "proxy-revalidate",
  MAX_AGE = "max-age",
  S_MAXAGE = "s-maxage",
  STALE_WHILE_REVALIDATE = "stale-while-revalidate",
  STALE_IF_ERROR = "stale-if-error",
}

export enum HttpContentDispositionValues {
  INLINE = "inline",
  ATTACHMENT = "attachment",
  FORM_DATA = "form-data",
}

export enum HttpContentEncodingValues {
  BR = "br",
  GZIP = "gzip",
  DEFLATE = "deflate",
}

export enum HttpTransferEncodingValues {
  CHUNKED = "chunked",
  COMPRESS = "compress",
  DEFLATE = "deflate",
  GZIP = "gzip",
  IDENTITY = "identity",
}

export enum HttpConnectionValues {
  KEEP_ALIVE = "keep-alive",
  CLOSE = "close",
}

export enum HttpExpectationValues {
  CONTINUE = "100-continue",
}

export enum HttpUpgradeValues {
  HTTP2 = "h2",
  HTTP2C = "h2c",
  WEB_SOCKET = "websocket",
}

export enum HttpWarningValues {
  STALE = "110",
  REVALIDATION_FAILED = "111",
  DISCONNECTED_OPERATION = "112",
  HEURISTIC_EXPIRATION = "113",
  TRANSFORMATION_APPLIED = "214",
  MISCELLANEOUS_WARNING = "299",
}

export enum HttpViaValues {
  HTTP_1_0 = "1.0",
  HTTP_1_1 = "1.1",
  HTTP_2 = "2",
  HTTP_3 = "3",
}

export enum HttpTrailerValues {
  TRAILER = "Trailer",
}

export enum HttpUpgradeInsecureRequestsValues {
  ONE = "1",
}

export enum HttpXFrameOptionsValues {
  DENY = "DENY",
  SAME_ORIGIN = "SAMEORIGIN",
}

export enum HttpXXSSProtectionValues {
  ZERO = "0",
  ONE = "1",
  BLOCK = "block",
  REPORT = "report",
}

export enum HttpXContentTypeOptionsValues {
  NO_SNIFF = "nosniff",
}

export enum FileExtensions {
  HTML = "html",
  CSS = "css",
  JS = "js",
  JSON = "json",
  XML = "xml",
  XHTML = "xhtml",
  PDF = "pdf",
  ZIP = "zip",
  JPEG = "jpeg",
  JPG = "jpg",
  PNG = "png",
  GIF = "gif",
  SVG = "svg",
  MP3 = "mp3",
  OGG = "ogg",
  WAV = "wav",
  MPEG = "mpeg",
  WEBM = "webm",
}

export enum MimeTypes {
  TEXT_HTML = "text/html",
  TEXT_CSS = "text/css",
  TEXT_JAVASCRIPT = "text/javascript",
  APPLICATION_JSON = "application/json",
  APPLICATION_XML = "application/xml",
  APPLICATION_XHTML_XML = "application/xhtml+xml",
  APPLICATION_OCTET_STREAM = "application/octet-stream",
  APPLICATION_PDF = "application/pdf",
  APPLICATION_ZIP = "application/zip",
  IMAGE_JPEG = "image/jpeg",
  IMAGE_PNG = "image/png",
  IMAGE_GIF = "image/gif",
  IMAGE_SVG = "image/svg+xml",
  AUDIO_MPEG = "audio/mpeg",
  AUDIO_OGG = "audio/ogg",
  AUDIO_WAV = "audio/wav",
  VIDEO_MPEG = "video/mpeg",
  VIDEO_OGG = "video/ogg",
  VIDEO_WEBM = "video/webm",
}

export enum Http2Settings {
  HEADER_TABLE_SIZE = "HEADER_TABLE_SIZE",
  ENABLE_PUSH = "ENABLE_PUSH",
  MAX_CONCURRENT_STREAMS = "MAX_CONCURRENT_STREAMS",
  INITIAL_WINDOW_SIZE = "INITIAL_WINDOW_SIZE",
  MAX_FRAME_SIZE = "MAX_FRAME_SIZE",
  MAX_HEADER_LIST_SIZE = "MAX_HEADER_LIST_SIZE",
}

export enum Http2FrameTypes {
  DATA = "DATA",
  HEADERS = "HEADERS",
  PRIORITY = "PRIORITY",
  RST_STREAM = "RST_STREAM",
  SETTINGS = "SETTINGS",
  PUSH_PROMISE = "PUSH_PROMISE",
  PING = "PING",
  GOAWAY = "GOAWAY",
  WINDOW_UPDATE = "WINDOW_UPDATE",
  CONTINUATION = "CONTINUATION",
}

export enum Http2FrameFlags {
  ACK = "ACK",
  END_STREAM = "END_STREAM",
  END_HEADERS = "END_HEADERS",
  PADDED = "PADDED",
  PRIORITY = "PRIORITY",
}

export enum Http2ErrorCodes {
  NO_ERROR = "NO_ERROR",
  PROTOCOL_ERROR = "PROTOCOL_ERROR",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  FLOW_CONTROL_ERROR = "FLOW_CONTROL_ERROR",
  SETTINGS_TIMEOUT = "SETTINGS_TIMEOUT",
  STREAM_CLOSED = "STREAM_CLOSED",
  FRAME_SIZE_ERROR = "FRAME_SIZE_ERROR",
  REFUSED_STREAM = "REFUSED_STREAM",
  CANCEL = "CANCEL",
  COMPRESSION_ERROR = "COMPRESSION_ERROR",
  CONNECT_ERROR = "CONNECT_ERROR",
  ENHANCE_YOUR_CALM = "ENHANCE_YOUR_CALM",
  INADEQUATE_SECURITY = "INADEQUATE_SECURITY",
  HTTP_1_1_REQUIRED = "HTTP_1_1_REQUIRED",
}

export enum Http2SettingsFlags {
  ACK = "ACK",
}

export enum Http2PriorityFlags {
  EXCLUSIVE = "EXCLUSIVE",
  DEPENDENCY = "DEPENDENCY",
}

export enum Http2PushPromiseFlags {
  END_HEADERS = "END_HEADERS",
  PADDED = "PADDED",
}

export enum Http2PingFlags {
  ACK = "ACK",
}

export enum Http2GoawayFlags {
  NONE = "NONE",
}

export enum Http2WindowUpdateFlags {
  NONE = "NONE",
}

export enum Http2ContinuationFlags {
  END_HEADERS = "END_HEADERS",
}

export enum Http2ConnectionStates {
  IDLE = "IDLE",
  RESERVED_LOCAL = "RESERVED_LOCAL",
  RESERVED_REMOTE = "RESERVED_REMOTE",
  OPEN = "OPEN",
  HALF_CLOSED_LOCAL = "HALF_CLOSED_LOCAL",
  HALF_CLOSED_REMOTE = "HALF_CLOSED_REMOTE",
  CLOSED = "CLOSED",
}

export enum Http2StreamStates {
  IDLE = "IDLE",
  OPEN = "OPEN",
  RESERVED_LOCAL = "RESERVED_LOCAL",
  RESERVED_REMOTE = "RESERVED_REMOTE",
  HALF_CLOSED_LOCAL = "HALF_CLOSED_LOCAL",
  HALF_CLOSED_REMOTE = "HALF_CLOSED_REMOTE",
  CLOSED = "CLOSED",
}

export enum Http2StreamPriorities {
  PRIORITY = "PRIORITY",
}

export enum Http2StreamDependencyTypes {
  ROOT = "ROOT",
  STREAM = "STREAM",
}

export enum Http2StreamDependencyFlags {
  EXCLUSIVE = "EXCLUSIVE",
}

export enum Http2StreamDependencyWeights {
  MAX = "MAX",
  MIN = "MIN",
}

export enum Http2StreamDependencyPriorities {
  MAX = "MAX",
  MIN = "MIN",
}
