// Import the functions from apiUtils.ts
import { fetchRealtorToken, fetchOpenHouseData } from './apiUtils'; // Adjust the import path as needed


// Example usage
async function main() {
  try {
    
    // Step 1: Fetch the Realtor token
    const tokenData = await fetchRealtorToken();

    // Extract the access token from the tokenData response
    const accessToken = tokenData.access_token;

    // Step 2: Use the access token to fetch OpenHouse data
    const openHouseData = await fetchOpenHouseData(accessToken);

    // Now you can work with the OpenHouse data
    console.log('OpenHouse Data:', openHouseData);
  } catch (error) {
    // Handle errors here or throw them further if needed
    console.error('Error:', error);
  }
}



// Call the main function to start the process
main();
