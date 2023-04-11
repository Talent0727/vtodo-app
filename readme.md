## Vtopo Metaobject App
---

**Export your metaobjects as JSON in this file `./metaobject/metaobject.js` **

```javascript
export default [
    {
        ...
    },
    {
        ...
    },
    {
        ...
    }
]
```

**Replace with your accessToken in `createObject.js` file**
```javascript
const shopGraphQl = "https://vtopo.myshopify.com/admin/api/2023-01/graphql.json";
const accessToken = `YOUR_TOKEN_HERE`; // format : 'shpat_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
```

**Create Metaobjects**
```shell
npm run create-metaobject
```
<span>You can find occured errors in `log.txt` file.</span>

**Create JSON**
```shell
npm run create-json
```
<span>You can find copy json data in `metaobjects-json.txt` file.</span>