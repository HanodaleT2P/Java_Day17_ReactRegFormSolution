import React from 'react';

function DisplayInfo({ data }) {
  if (!data) return null;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Submitted Information:</h2>
      <p><strong>Full Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Gender:</strong> {data.gender}</p>
      <p><strong>Course:</strong> {data.course}</p>
    </div>
  );
}

export default DisplayInfo;
