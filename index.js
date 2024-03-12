const genId1 = require('qdgd_xid');
const genId2 = require('kbui_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|bAS6aG09yD|' + genId2()).digest('base64');
}


module.exports = generateKey;
