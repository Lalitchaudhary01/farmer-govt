import React, { useState } from "react";
import { db } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";

const AdminDashboard = () => {
  const [cropDetails, setCropDetails] = useState("");
  const [schemeDetails, setSchemeDetails] = useState("");

  const postCropDetails = async () => {
    try {
      await addDoc(collection(db, "cropDetails"), { details: cropDetails });
      alert("Crop details posted successfully");
    } catch (error) {
      console.error("Error posting crop details", error);
      alert("Failed to post crop details");
    }
  };

  const postSchemeDetails = async () => {
    try {
      await addDoc(collection(db, "govtSchemes"), { details: schemeDetails });
      alert("Scheme details posted successfully");
    } catch (error) {
      console.error("Error posting scheme details", error);
      alert("Failed to post scheme details");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h2>
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Post Crop Details</h3>
        <textarea
          className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={cropDetails}
          onChange={(e) => setCropDetails(e.target.value)}
          placeholder="Enter crop details..."
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={postCropDetails}
        >
          Post Crop Details
        </button>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Post Govt Schemes</h3>
        <textarea
          className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={schemeDetails}
          onChange={(e) => setSchemeDetails(e.target.value)}
          placeholder="Enter government scheme details..."
        />
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={postSchemeDetails}
        >
          Post Scheme Details
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
