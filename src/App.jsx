import React from 'react';
import { useState } from 'react';

import users from './assets/json/users.json';
import { getRandomNumber as random } from './assets/utils/getRandomNumber';

const App = () => {
  const [userIndex, setUserIndex] = useState(random(0, users.length - 1));
  const user = users[userIndex];

  const changeUser = () => {
    let newUser=useState(random(0, users.length - 1);
    while (newUser === userIndex) {
      
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-10">
      
    </div>
  );
};

export default App;