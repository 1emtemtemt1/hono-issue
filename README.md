## 你们的打包工具不能直接运行

`直接报错目录` 运行访问接口直接报错 `stdin_default is not defined`

```
npx edgeone pages dev . -n edgeone-hono-app -t xxx
```

## 使用 tsup 打包可以正常工作

可以运行然后非 GET method 的接口 404