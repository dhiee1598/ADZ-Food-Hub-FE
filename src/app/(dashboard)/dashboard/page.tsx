"use client";

import api from "@/utilities/axios";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();

  const handleSubmit = async () => {
    console.log("LOGOUT");

    await api.post("/api/users/auth/sign-out");
    localStorage.removeItem("accessToken");
    router.push("/sign-in");
  };
  return (
    <div className="pt-14 bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen">
      <h1>Dashboard</h1> <button onClick={() => handleSubmit()}>Logout</button>
    </div>
  );
};

export default DashboardPage;
