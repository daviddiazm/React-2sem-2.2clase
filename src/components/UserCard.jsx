import React from 'react';

const UserCard = ({ user }) => {
  const userFullname = `${user.name.title} ${user.name.first} ${user.name.last}`;

  return (
    <div>
      <h2 className=" text-white">{`user ${userFullname}`}</h2>
      <img src={user.picture.large} alt={`user ${userFullname}`} />
      <p className=" text-white">{user.email}</p>
      <p className=" text-white">{user.gender}</p>
    </div>
  );
};

export default UserCard;
