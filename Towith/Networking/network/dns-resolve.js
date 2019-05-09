var dns = require('dns');

dns.resolve('orientsoftware.net', function(err, addresses) { 
  if (err) {
    console.error(err);
  }

  console.log('Addresses:', addresses);
});
