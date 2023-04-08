import metaObjects from "./metaobject/metaobject.js";
import graphQL from './graphql.js';
import fs from 'fs';

const shopGraphQl = "https://vtopo.myshopify.com/admin/api/2023-01/graphql.json"; // VTOPO
const accessToken = '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'; // VTOPO

// const shopGraphQl = "https://reima-benson.myshopify.com/admin/api/2023-01/graphql.json"; // Reima Benson
// const accessToken = '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'; // Reima Benson

/**
 * Mapping metaobject for validation NC replace to "" blank value
 */

/**
    value: `{{ itineraire.titre.value }}`
    value: `{{ itineraire.discipline.value }}`
    value: `{{ itineraire.niveau.value }}`
    value: `{{ itineraire.distance.value }} km`
    value: `{{ itineraire.denivelee_positive.value }}m`
    value: `{{ itineraire.horaire.value }}`
    value: `{{ itineraire.pays.value }}`
    value: `{{ itineraire.region.value }}`
    value: `{{ itineraire.departement.value }}`
*/

const handleArr = [];

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

async function createMetaObject(indexOfMetaObjectArray, debug) {
    /**
     * Create log file once function ended.
     */
    if (metaObjects.length == indexOfMetaObjectArray) {
        var stream = fs.createWriteStream("log.txt");
        stream.once('open', function(fd) {
            stream.write("[\n");
            errorIndexs.map(item => {
                stream.write(`${JSON.stringify(item)}\n,`);
            });
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

await createMetaObject(59);