"use client";
import { useEffect, useState } from 'react';
import { OpenHouseData } from './api/realtorApi';

const YourComponent = () => {
  const [data, setData] = useState<OpenHouseData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getOpenHouses');
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Network error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Property Listings</h1>
      <ul>
        {data.map((listing, index) => (
          <li key={index}>
            <h2>Listing ID: {listing.ListingId}</h2>
            <p>Open House Date: {listing.OpenHouseDate}</p>
            <p>Open House Remarks: {listing.OpenHouseRemarks}</p>
            {/* Add more listing details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
