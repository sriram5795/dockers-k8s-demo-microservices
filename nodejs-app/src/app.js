// Import the installed modules.
const express = require('express');
const responseTime = require('response-time');
const redis = require('redis');
const cors = require('cors');

const app = express();

// create and connect redis client to local instance.
const client = redis.createClient({host : 'redis', port : 6379});

// Print redis errors to the console
client.on('error', (err) => {
  console.log("Error " + err);
});

app.use(cors());

app.use(responseTime((req, res, time) => {
    console.log(req.method, req.url, time + ' ms');
}));

app.get("/all",(req, res) => {
    let pattern = '*';
    if(req.query.pattern)
        pattern = (req.query.pattern).trim();
    return client.keys(pattern, (err, result) => {
      if (result) {
          return res.status(200).send(JSON.stringify(result));
      } else { 
          if(err)
              console.log(`Searching Key Error: ${JSON.stringify(err)}`);            
          return res.status(404).send("Cound not find key");
      }
    });
});

app.get("/get",(req, res) => {
  if(!(req.query.key))
    return res.status(404).send("Enter valid key");
  const key = (req.query.key).trim();
  return client.get(`${key}`, (err, result) => {
    if (result) {
        return res.status(200).send(JSON.stringify(result));
    } else { 
        if(err)
            console.log(`Searching Key Error: ${JSON.stringify(err)}`);            
        return res.status(404).send("Cound not find key");
    }
  });
});

app.get("/set",(req, res) => {
    if(!(req.query.key) && !(req.query.value))
        return res.status(404).send("Enter valid key and value");
    const key = (req.query.key).trim();
    const value = (req.query.value).trim();
    return client.set(`${key}`,`${value}`, (err, result) => {
      if (result) {
          return res.status(200).send(JSON.stringify(result));
      } else { 
          if(err)
            console.log(`Create/Update Key Error: ${JSON.stringify(err)}`);        
          return res.status(500).send("Cound not set value to key");
      }
    });
});

app.get("/delete",(req, res) => {
    if(!(req.query.key) && !(req.query.value))
        return res.status(404).send("Enter valid key and value");
    const key = (req.query.key).trim();
    return client.del(`${key}`, (err, result) => {
      if (result) {
          return res.status(200).send(JSON.stringify(result));
      } else { 
            if(err)
                console.log(`Delete Key Error: ${JSON.stringify(err)}`);        
            return res.status(500).send("Cound not delete key");
      }
    });
});

app.listen(3000, () => {
  console.log('Server listening on port: ', 3000);
});