const {OperationHelper} = require('apac');
var convert = require('xml-js');

const opHelper = new OperationHelper({
    awsId:     'AKIAJQ5RKL6KV5BPK56Q',
    awsSecret: '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',
    assocId:   'sahm0fe-20',
    maxRequestsPerSecond: 1
});

opHelper.execute('ItemSearch', {
  'SearchIndex': 'All',
  'Keywords': 'xbox',
  'ResponseGroup': 'Images,ItemAttributes,Offers'
}).then((response) => {
    let result = JSON.parse(convert.xml2json(response.responseBody, {compact: true, spaces: 4}));
    console.log("Results object: ", result.ItemSearchResponse.Items.Item[0].ItemAttributes.Title._text, result.ItemSearchResponse.Items.Item[0].MediumImage.URL._text);
    console.log("Results object: ", result.ItemSearchResponse.Items.Item[1].ItemAttributes.Title._text);
    console.log("Results object: ", result.ItemSearchResponse.Items.Item[2].ItemAttributes.Title._text);
    //console.log("Raw response body: ", response.responseBody);
}).catch((err) => {
    console.error("Something went wrong! ", err);
});