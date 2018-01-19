const {OperationHelper} = require('apac');
var convert = require('xml-js');

const opHelper = new OperationHelper({
    awsId:     'AKIAJQ5RKL6KV5BPK56Q',
    awsSecret: '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',
    assocId:   'sahm0fe-20',
    maxRequestsPerSecond: 1
});

exports.apac = () =>
{
    const returnResults =[];
    opHelper.execute('ItemSearch', {
    'SearchIndex': 'All',
    'ItemPage' : 1,
    'Keywords': "xbox",
    'ResponseGroup': 'Images,ItemAttributes,Offers'
  }).then((response) => {
      let result = JSON.parse(convert.xml2json(response.responseBody, {compact: true, spaces: 4}));
      const Item = result.ItemSearchResponse.Items.Item;
      for(let x in Item){
          returnResults.push({
            title : Item[x].ItemAttributes.Title._text,
            price : Item[x].OfferSummary.LowestNewPrice.FormattedPrice._text,
            image : Item[x].MediumImage.URL._text
          });
      }
  }).catch((err) => {
      console.error("Something went wrong! ", err);
  });
    return returnResults;
};