import React from 'react';

const Navbar = ({ getUsers }) => {
  return (
    <nav>
        <div className="brand">LGM USERS</div>
        <button onClick={getUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;
