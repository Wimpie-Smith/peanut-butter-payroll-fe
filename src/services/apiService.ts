export const getEmployeeProfile = async() => {
    
    try {
        const response = await fetch('http://localhost:3001/api/getEmployeeProfile');
        if (!response.ok) {
          throw new Error('Failed to fetch employee profiles');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
}

export const createOrUpdateUserProfile = async(req:any)=> {

  try {
    const response = await fetch('http://localhost:3001/api/createOrUpdateProfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req)
    });
    if (!response.ok) {
      throw new Error('Failed to create or update profile');
    }
    const result = await response.json();
    console.log('Profile created/updated successfully:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}