import React from "react";

function Application() {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>For internal applicants</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter something here"
            value="Alan"
            title="Something"
          />
        </div>
        <div>
          <label htmlFor="">Job Location</label>
          <select id="job-location" data-testid="options">
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
        <div>
          <label htmlFor="terms">Terms</label>
          <input type="checkbox" id="terms" name="terms" value="ABC" />
        </div>

        <input type="submit" />
      </form>
    </>
  );
}

export default Application;
