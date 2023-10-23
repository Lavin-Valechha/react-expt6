import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('Your Name');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>Your Personal Profile</h2>
      <form>
        <label>Your Name: </label>
        <input type="text" value={name} onChange={handleNameChange} />
      </form>
      <p>Welcome, {name}! Edit your details and upload a profile picture.</p>
    </div>
  );
};

export default Profile;
