
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoginForm from "@/components/auth/LoginForm";
import FarmerDashboard from "@/components/farmer/FarmerDashboard";

export default function Account() {
  // Simulate authenticated user state (in a real app, this would come from authentication context)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<"farmer" | "buyer" | null>(null);

  // Function to handle successful login
  const handleLoginSuccess = (isFarmer: boolean) => {
    setIsLoggedIn(true);
    setUserType(isFarmer ? "farmer" : "buyer");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-16 px-4">
        {!isLoggedIn ? (
          <div className="flex items-center justify-center">
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </div>
        ) : userType === "farmer" ? (
          <FarmerDashboard />
        ) : (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">My Account</h1>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Customer Dashboard</h2>
              <p className="text-gray-600 mb-4">
                Welcome back! Here you can view your orders, manage your profile, and more.
              </p>
              {/* Customer dashboard content would go here */}
              <button 
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-gray-700"
                onClick={() => {
                  setIsLoggedIn(false);
                  setUserType(null);
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
