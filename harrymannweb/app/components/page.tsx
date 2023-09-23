"use client";
import { useEffect, useState } from 'react';
// import { fetchRealtorToken, fetchOpenHouseData } from '../utils/apiCall'; 
// Adjust the import path as needed
import styles from './page.module.css';

export default function RealtorData() {
  const [openHouseData, setOpenHouseData] = useState(null);

  useEffect(() => {
    // Inside an async function to use await
    async function fetchData() {
      try {
        // Step 1: Fetch the Realtor token
        // const tokenData = await fetchRealtorToken();

        // Extract the access token from the tokenData response
        // const accessToken = tokenData.access_token;

        // Step 2: Use the access token to fetch OpenHouse data
        // const data = await fetchOpenHouseData(accessToken);

        // Update the state with the OpenHouse data
        // setOpenHouseData(data);
      } catch (error) {
        // Handle errors here or throw them further if needed
        console.error('Error:', error);
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <main className="grid grid-cols-2 grid-rows-2 gap-x-1/2 gap-y-1/2">
      {/* Your other grid items */}
      <div className=" relative bg-slate-300">
        business
      </div>
      {/* Display the OpenHouse data in this div */}
      <div className=" relative">
        {openHouseData ? (
          <pre>{JSON.stringify(openHouseData, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {/* Your other grid items */}
    </main>
  );
}

