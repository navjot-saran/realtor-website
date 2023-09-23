// pages/api/realtorApi.ts

import { fetchRealtorToken } from './apiUtils';

export async function getRealtorToken() {
  try {
    const tokenData = await fetchRealtorToken();
    return tokenData;
  } catch (error) {
    // Handle errors or throw them further if needed
    throw error;
  }
}

import { fetchOpenHouseData } from './apiUtils';

export async function getOpenHouseData(accessToken: string) {
  try {
    const openHouseData = await fetchOpenHouseData(accessToken);
    return openHouseData;
  } catch (error) {
    // Handle errors or throw them further if needed
    throw error;
  }
}

