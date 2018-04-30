var friends = [
    {
      name: "Dr. Emmett Brown",
      pictureUrl: "http://images.needcoffee.com/doc-brown.jpg",
      scores: [3, 5, 2, 4, 2, 1, 2, 5, 3, 5],
    },
    {
      name: "Taylor Swift",
      pictureUrl: "https://media.wmagazine.com/photos/5853f7a9d3b7a5db18f3d81f/4:3/w_1536/swift-gigi-bfa.jpg",
      scores: [1, 5, 4, 4, 2, 1, 2, 5, 3, 5],
    },
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;