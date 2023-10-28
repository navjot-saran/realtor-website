// /api/realtorApi.ts

import axios from 'axios';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// Create a new interface in your TypeScript file (e.g., realtorApi.ts)

export interface OpenHouseData {
  ListingId: string;
  OpenHouseDate: string;
  OpenHouseRemarks: string;
  // Add other properties as needed
}

const getAccessToken = async () => {
  try {
    const response = await axios.post('https://identity.crea.ca/connect/token', null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        scope: 'DDFApi_Read',
      },
    });

    const accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    // Handle errors here
    console.error('Error getting access token:', error);
    return null;
  }
};

const getOpenHouses = async (accessToken: string): Promise<OpenHouseData[]> => {
  try {
    const response = await axios.get('https://ddfapi.realtor.ca/odata/v1/OpenHouse', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.value as OpenHouseData[];
  } catch (error) {
    console.error('Error fetching OpenHouse data:', error);
    return [];
  }
};

export { getAccessToken, getOpenHouses };

