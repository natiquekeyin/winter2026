import React from "react";

function Application() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="">Job Location</label>
        <select id="job-location">
          <option value="">Select the Country</option>
          <option value="CA">Canada</option>
          <option value="AU">Australia</option>
          <option value="GB">United Kingdom</option>
        </select>
      </div>

      <div>
        <label htmlFor="bio">Bio</label>
        <textarea name="bio" id="bio"></textarea>
      </div>

      <input type="submit" />
    </form>
  );
}

export default Application;
