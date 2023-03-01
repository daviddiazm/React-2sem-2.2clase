import React from 'react';
import { useState } from 'react';

import users from './assets/json/users.json';
import { getRandomNumber as random } from './assets/utils/getRandomNumber';
import UserCard from './components/UserCard';

const App = () => {
  const [userIndex, setUserIndex] = useState(random(0, users.length - 1));
  const user = users[userIndex];

  const changeUser = () => {
    let newUser = random(0, users.length - 1);
    while (newUser === userIndex) {
      newUser = random(0, users.length - 1);
    }
    setUserIndex(newUser);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-10">
      <UserCard user={user} />
      <button changeUser={changeUser}>a</button>
    </div>
  );
};

export default App;
