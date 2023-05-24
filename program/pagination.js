const express = require('express');
const app = express();
const PORT = 4000;

// Dummy data
const data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Jack' },
  { id: 4, name: 'Jill' },
  { id: 5, name: 'Jim' },
  { id: 6, name: 'Jenny' },
  { id: 7, name: 'Jacob' },
  { id: 8, name: 'Jessica' },
  { id: 9, name: 'Jeremy' },
  { id: 10, name: 'Jared' },
  { id: 11, name: 'Joan' },
  { id: 12, name: 'Julia' },
  { id: 13, name: 'Justin' },
  { id: 14, name: 'Jordan' },
  { id: 15, name: 'Jeffrey' }
];

// Route to get paginated data
app.get('/data/:page', (req, res) => {
  const page = req.params.page;
  const limit = 5; // Number of items per page
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};

  if (endIndex < data.length) {
    results.next = {
      page: parseInt(page) + 1,
      limit: limit
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: parseInt(page) - 1,
      limit: limit
    };
  }
   
  results.results = data.slice(2,5);
  console.log("results===",results,startIndex,endIndex);
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
