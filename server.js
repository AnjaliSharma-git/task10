const express = require('express');
const app = express();
const recipeRoutes = require('./routes/recipeRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Recipes App API');
});

app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
