const graphQL = "mutation CreateMetaobject($metaobject: MetaobjectCreateInput!) { metaobjectCreate(metaobject: $metaobject) { metaobject { handle, type } userErrors { field, message, code } } }";

export default graphQL;