"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getToken, removeToken } from "@/utils/auth";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/admin/login");
    }
  }, [router]);

  const handleLogout = () => {
    removeToken();
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[500px] text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome Admin 🎉</h1>
        <p className="mb-6">This is your protected dashboard.</p>
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
