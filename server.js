const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')

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
  