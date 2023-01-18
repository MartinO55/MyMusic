## Challenge: Rendering planet data

### Data:

```js
const planets = [
    {
        planetName: "Mercury",
        image: "https://space-facts.com/wp-content/uploads/mercury-v2.jpg",
        distanceFromSun: "57,909,227 km",
        diameterInKm: 4879,
        numberOfMoons: 0,
        lengthOfYear: "88 Earth days",
    },
    {
        planetName: "Venus",
        image: "https://space-facts.com/wp-content/uploads/venus-v2.jpg",
        distanceFromSun: "108,209,475 km",
        diameterInKm: 12104,
        numberOfMoons: 0,
        lengthOfYear: "225 Earth days",
    },
    {
        planetName: "Earth",
        image: "https://space-facts.com/wp-content/uploads/earth-v2.jpg",
        distanceFromSun: "149,598,262 km",
        diameterInKm: 12742,
        numberOfMoons: 1,
        lengthOfYear: "365.24 days",
    },
    {
        planetName: "Mars",
        image: "https://space-facts.com/wp-content/uploads/mars-v2.jpg",
        distanceFromSun: "227,943,824 km",
        diameterInKm: 6779,
        numberOfMoons: 2,
        lengthOfYear: "1.9 Earth years",
    },
    {
        planetName: "Jupiter",
        image: "https://space-facts.com/wp-content/uploads/jupiter-v2.jpg",
        distanceFromSun: "778,340,821 km",
        diameterInKm: 139822,
        numberOfMoons: 79,
        lengthOfYear: "11.9 Earth years",
    },
    {
        planetName: "Saturn",
        image: "https://space-facts.com/wp-content/uploads/saturn-v2.jpg",
        distanceFromSun: "1,426,666,422 km",
        diameterInKm: 116464,
        numberOfMoons: 82,
        lengthOfYear: "29.5 Earth years",
    },
    {
        planetName: "Uranus",
        image: "https://space-facts.com/wp-content/uploads/uranus-v2.jpg",
        distanceFromSun: "2,870,658,186 km",
        diameterInKm: 50724,
        numberOfMoons: 27,
        lengthOfYear: "84 Earth years",
    },
    {
        planetName: "Neptune",
        image: "https://space-facts.com/wp-content/uploads/neptune-v2.jpg",
        distanceFromSun: "4,498,396,441 km",
        diameterInKm: 49244,
        numberOfMoons: 5,
        lengthOfYear: "164.8 Earth years",
    },
];

export default planets;
```

### MVP

1.  Render a list of planets to the page using provided data. Each planet should have its own card with the following information:

    -   Image
    -   Name
    -   Diameter
    -   Distance from Sun
    -   Number of Moons
    -   Length of Year

2.  Planets with zero moons should be displayed on a light grey background with black text, the rest of the planets should be displayed on a black background with white text.

### BONUS

Display the planets on the page in order based on their diameter, from the smallest to the largest.
