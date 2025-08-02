const express = require('express');
const cors = require('cors');
const demoRoutes = require('./routes/demo');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/demo', demoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
