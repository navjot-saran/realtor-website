// api/getOpenHouses.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getAccessToken, getOpenHouses } from './realtorApi';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const accessToken = await getAccessToken();
    if (accessToken) {
      const openHouses = await getOpenHouses(accessToken);
      res.status(200).json(openHouses);
    } else {
      console.error('Failed to obtain access token');
      res.status(500).json({ error: 'Failed to get access token' });
    }
  } catch (error) {
    console.error('Error in getOpenHouses:', error);
    res.status(500).json({ error: 'Failed to fetch OpenHouse data' });
  }
};

