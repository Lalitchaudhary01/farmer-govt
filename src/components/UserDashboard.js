import React, { useEffect, useState } from "react";
import { db } from "./Firebase";
import { collection, onSnapshot } from "firebase/firestore";

const UserDashboard = () => {
  const [cropDetails, setCropDetails] = useState("");
  const [schemeDetails, setSchemeDetails] = useState("");

  useEffect(() => {
    const unsubscribeCrop = onSnapshot(
      collection(db, "cropDetails"),
      (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setCropDetails(doc.data().details);
        });
      }
    );
    const unsubscribeScheme = onSnapshot(
      collection(db, "govtSchemes"),
      (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setSchemeDetails(doc.data().details);
        });
      }
    );

    return () => {
      unsubscribeCrop();
      unsubscribeScheme();
    };
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">User Dashboard</h2>
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Crop Details</h3>
        <p>{cropDetails}</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Govt Schemes</h3>
        <p>{schemeDetails}</p>
      </div>
    </div>
  );
};

export default UserDashboard;
