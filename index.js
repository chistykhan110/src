const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/db', (req, res) => {
  const data = req.body.sent_data
   //console.log(data);
   // Respond with a confirmation message
   const response = {
    message: 'Data received successfully!',
    res: data*2 || "Only Numbers"
  }
   res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
