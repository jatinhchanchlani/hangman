const MIN = 0;
const MAX = 24;
const cities = {
    0: "Mumbai",
    1: "New Delhi",
    2: "Chennai",
    3: "Hyderabad",
    4: "Bengaluru",
    5: "Ahmedabad",
    6: "Jaipur",
    7: "Kolkata",
    8: "Lucknow",
    9: "Bhopal",
    10: "Chandigarh",
    11: "Patna",
    12: "Jabalpur",
    13: "Pune",
    14: "Surat",
    15: "Indore",
    16: "Kanpur",
    17: "Visakhapatnam",
    18: "Agra",
    19: "Varanasi",
    20: "Amritsar",
    21: "Udaipur",
    22: "Noida",
    23: "Ludhiana",
    24: "Gwalior",
}

// Returns a random number between min and max. Min and max are both inclusive
export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomCity() {
    return cities[getRandomIntInclusive(MIN, MAX)];
}