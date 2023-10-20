"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [userName, setUserName] = React.useState("nothing");
  const [userEmail, setUserEmail] = React.useState("nothing");

  const handleLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully!");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {}, [userEmail, setUserEmail]);

  const handleGetUserDetails = async () => {
    const userDetailsData = await axios.get("/api/users/me");

    if (userDetailsData.data && userDetailsData.data.user.username) {
      setUserName(userDetailsData.data.user.username);
    }
    if (userDetailsData.data && userDetailsData.data.user.email) {
      setUserEmail(userDetailsData.data.user.email);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Logout
      </button>
      <button
        onClick={handleGetUserDetails}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Get User Details
      </button>

      {
        <div className="mt-5">
          <h2 className="text-xl font-bold mb-2">User Details</h2>
          <p>
            <strong>Name:</strong> {userName}
          </p>
          <p>
            <strong>Email:</strong> {userEmail}
          </p>
        </div>
      }
      <Toaster />
    </div>
  );
}
