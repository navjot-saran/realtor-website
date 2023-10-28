// api/getAccessToken.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getAccessToken } from './realtorApi';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const accessToken = await getAccessToken();
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error('Error in getAccessToken:', error);
    res.status(500).json({ error: 'Failed to get access token' });
  }
};

