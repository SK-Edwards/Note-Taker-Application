const express = require('express');
const htmlRoutes = require('./Develop/htmlRoutes.js')
const apiRoutes = require('./Develop/apiRoutes.js')

const PORT = process.env.PORT || 3001;

const app = express();
// Sets up express to handle data parsing.

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes)








app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });
  