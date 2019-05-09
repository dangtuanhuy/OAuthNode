var dns = require('dns');

dns.lookup('orientsoftware.net', function(err, address) {

  if (err) {
    console.error('Error:', err);
  }
  console.log('Addresses:', address);
});
