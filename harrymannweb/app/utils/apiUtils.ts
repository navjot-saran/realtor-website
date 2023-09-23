// utils/apiUtils.ts

export async function fetchRealtorToken() {
    const url = 'https://identity.crea.ca/connect/token';
  
    const formData = new URLSearchParams();
    formData.append('grant_type', 'client_credentials');
    formData.append('client_id', 'harrymann54@gmail.com'); // Replace with your client_id
    formData.append('client_secret', 'Aatishanish@73'); // Replace with your client_secret
    formData.append('scope', 'DDFApi_Read');
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch Realtor token');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      // You can handle errors here, e.g., log the error or throw it further
      console.error('Error:', error);
      throw error;
    }
  }

export async function fetchOpenHouseData(accessToken: string) {
    const url = 'https://ddfapi.realtor.ca/odata/v1/OpenHouse';
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch OpenHouse data');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle errors here or throw them further if needed
      console.error('Error:', error);
      throw error;
    }
  }
  
  