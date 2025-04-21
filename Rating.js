const movies = [
    {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010, 
    ratings: [5, 4, 5, 5] 
    },
    { 
    title: "Titanic",
    director: "James Cameron",
    releaseYear: 1997,
    ratings: [4, 4, 3, 2, 5]
    },
    {
    title: "The Matrix",
    director: "The Wachowskis",
    releaseYear: 1999,
    ratings: [5, 5, 5, 5]
    },
    { 
    title: "Avatar",
    director: "James Cameron",
    releaseYear: 2009, ratings: [3, 2, 4, 3]
    }
  ];
  
  function calculateAverage(movie) {
    const total = movie.ratings.reduce((sum, rating) => sum+rating, 0);
    return total/movie.ratings.length;
  }
  
  console.log("Average Rating:");
  const averageRating = movies.map(movie => {
    const avg = calculateAverage(movie);
    console.log(`${movie.title}: ${avg.toFixed(2)}`);
    return { ...movie, avgRating: avg};
  });
  
  const highestRated = averageRating.reduce((max,movie) => {
    return movie.avgRating > max.avgRating ? movie : max;
  });
  console.log(`\nMovie with highest average rating: "${highestRated.title}" (avg: ${highestRated.avgRating})`);
  
  const lowRatedMovies = averageRatings
  .filter (movie => movie.avgRating < 3)
  .map(movie => movie.title);
  console.og(`\nMovie with low rating: ${JSON.stringify(lowRatedMovies)}`)