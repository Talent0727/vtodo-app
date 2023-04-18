import metaObjects from "./metaobject/metaobject.js";
import graphQL from './graphql.js';
import fs from 'fs';

const shopGraphQl = `https://{YOUR_DOMAIN_HERE}/admin/api/2023-01/graphql.json`;
const accessToken = `YOUR_TOKEN_HERE`;

metaObjects.forEach((item, ind, obj) => {
    
    const fields = new Map();

    item.metaobject.fields.forEach((field, index, arr) => {
        
        if (field.value == 'NC') arr[index].value = "";
        if (field.value == 'NS') arr[index].value = "";
        if (field.value == '.') arr[index].value = "";
        if (field.key == 'distance') {
            const splitArr = field.value.split('/');
            if (splitArr.length > 0) {
                arr[index].value = splitArr[0];
            }
        }
        if (field.key == 'denivelee_positive') {
          const splitArr = field.value.split('/');
          if (splitArr.length > 0) {
              arr[index].value = splitArr[0];
          }
        }    
    
    });
    
    obj[ind].metaobject = item.metaobject;
});

let errorIndexs = [];

console.log('Total number : ', metaObjects.length);

async function createMetaObject(indexOfMetaObjectArray, debug) {
    /**
     * Create log file once function ended.
     */
    if (metaObjects.length == indexOfMetaObjectArray) {
        
        var stream = fs.createWriteStream("log.txt");
        
        stream.once('open', function() {
            stream.write("[\n");
            errorIndexs.map(item => stream.write(`${JSON.stringify(item)}\n,`));
            stream.write("]\n");
            stream.end();
        });

        /**
         * Exit function after creating log file
         */
        return;
    }

    /**
     * output index
     */
    console.log('index => ', indexOfMetaObjectArray);

    /**
     * Create metaobject
     */
    await fetch(shopGraphQl, {
        method: "POST",
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": accessToken
        },
        body: JSON.stringify({
            "query": graphQL,
            "variables": metaObjects[indexOfMetaObjectArray]
        })
    })
    .then(res => res.json())
    .then(res => {
        console.log(res.data);
        /**
         * if error occured add error message ot errorIndexs array
         */
        if (res.data?.metaobjectCreate.userErrors.length > 0) errorIndexs.push(
            {
                index: indexOfMetaObjectArray,
                errorMessage: res.data.metaobjectCreate.userErrors,
                object: metaObjects[indexOfMetaObjectArray]
            }
        );

        /**
         * Index increase
         */
        indexOfMetaObjectArray++;

        /**
         * Execute next index
         */
        if (!debug) createMetaObject(indexOfMetaObjectArray);
    }).catch(err => {
        console.log(err)
    });
}

await createMetaObject(0);
