const axios = require('axios'); // make sure axios is installed
const { mode } = require('crypto-js');

const getCountryByIP = async (ip) => {
  const apiKey = 'ebd13d6f8d3b43eea545ba519254b2bf'; // Replace with your actual IP geolocation API key
  try {
    const response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`);
    return response.data.country_name; // Adjust based on the API response structure
  } catch (error) {
    console.error('Error retrieving country by IP:', error);
    return null; // Return null or a default value if the country can't be determined
  }
};


module.exports = getCountryByIP;