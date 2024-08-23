# how to reproduce

```bash
# instal deps
pnpm i
# start project
pnpm dev

# serarch scopeToSharingDataMapping in dist/remoteEntry.js:
```js
        __webpack_require__.initializeSharingData = {
            scopeToSharingDataMapping: {
                "default": [{
                    name: "external-package-version-display-2",
                    version: "1.0.0",
                    factory: () => xxxxx,
                    eager: 0,
                    requiredVersion: "1.0.0"
                }, {
                    name: "external-package-version-display-2",
                    version: "1.0.1",
                    factory: () => xxx,
                    eager: 0,
                    // FIXME: This should be `^1.0.1`
                    requiredVersion: "1.0.0"
                }, {
                    name: "external-package-version-display",
                    version: "2.1.4",
                    factory: () =>xxx,
                    eager: 0,
                    requiredVersion: "2.1.4"
                }]
            },
            uniqueName: "modernjs-ssr-host"
        };
```


```
