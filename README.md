edgeone 两个 `setCookie` 最终返回只有第二次的一个。

```bash
npx edgeone pages dev . -n edgeone-hono-app -t xxx
```

curl 命令结果如下:
```bash
curl -v http://localhost:8088/hello
* Host localhost:8088 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
*   Trying [::1]:8088...
* Connected to localhost (::1) port 8088
> GET /hello HTTP/1.1
> Host: localhost:8088
> User-Agent: curl/8.7.1
> Accept: */*
>
* Request completely sent off
< HTTP/1.1 200 OK
< content-type: text/plain; charset=UTF-8
< set-cookie: test2=test2; Max-Age=2592000; Path=/hello; HttpOnly
< functions-request-id:
< eo-pages-inner-scf-status: 200
< eo-pages-inner-status-intercept: false
< date: Fri, 05 Jun 2026 02:51:34 GMT
< connection: close
< transfer-encoding: chunked
<
* Closing connection
Hello World%
```

使用 `bootstrap.js` 启动。

curl 命令结果如下:
```bash
curl -v http://localhost:3000/hello
* Host localhost:3000 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
*   Trying [::1]:3000...
* Connected to localhost (::1) port 3000
> GET /hello HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.7.1
> Accept: */*
>
* Request completely sent off
< HTTP/1.1 200 OK
< content-type: text/plain; charset=UTF-8
< set-cookie: test=test; Max-Age=2592000; Path=/; HttpOnly
< set-cookie: test2=test2; Max-Age=2592000; Path=/hello; HttpOnly
< Content-Length: 11
< Date: Fri, 05 Jun 2026 02:52:40 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
<
* Connection #0 to host localhost left intact
Hello World%
```