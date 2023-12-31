const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by adsoft');
});


app.get('/header', (req, res, next) => {
  res.sendfile("assets/header.json");
});

app.listen(port,  () => 
	console.log('listening on port ' + port
));



app.get('/work', (req, res, next) => {
	res.sendfile("assets/work.json");
  });

  
  
app.get('/skills', (req, res, next) => {
	res.sendfile("assets/skills.json");
  });
  
  
   
app.get('/certification', (req, res, next) => {
	res.sendfile("assets/certifications.json");
  });
  

  app.get('/interest', (req, res, next) => {
	res.sendfile("assets/interest.json");
  });
  