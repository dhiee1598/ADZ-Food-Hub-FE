"use client";

import api from "@/utilities/axios";

const HomePage = () => {
  const handleSubmit = async () => {
    console.log("LOGOUT");

    await api.post("/api/users/auth/sign-out");
  };

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => handleSubmit()}>Logout</button>
    </div>
  );
};

export default HomePage;
