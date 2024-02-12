const { LandTypeValueMap } = require('./data/types');

const govukPrototypeKit = require('govuk-prototype-kit');
const addFilter = govukPrototypeKit.views.addFilter;

addFilter('toLandTypeValue', function (content) {
  if (!content) {
    return '';
  }

  let output = '';

  for (const [index, landType] of content.entries()) {
    output += LandTypeValueMap.get(landType);

    if (index + 1 !== content.length) {
      output += ', ';
    }
  }

  return output;
});
