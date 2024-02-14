import React from "react";

const EditUserName = () => {
  return (
    <div className="edit-form">
      <h2>Edit User Info</h2>
      <div>
        <label htmlFor="newUserName">User Name :</label>
        <input type="text" id="newUserName" placeholder="Enter New Username" value="" />
      </div>
      <div>
        <label htmlFor="firstName">First Name :</label>
        <input type="text" id="firstName" value="" disabled className="text_input" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name :</label>
        <input type="text" id="lastName" value="" disabled className="text_input" />
        <div className="buttons-form">
          <button onClick="">Save</button>
          <button onClick="">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditUserName;
