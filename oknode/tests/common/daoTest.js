const assert = require('assert');
const dao = require('../../routes/common/dao');

it('async dao', async () => {
    var data = await dao.query('select 1 + 1 as result');
    assert.equal(2, data[0].result);
});