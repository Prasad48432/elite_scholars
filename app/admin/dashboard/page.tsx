"use client";
import { Button } from "@/components/ui/button";
import { Loader2, LogOut } from "lucide-react";
import React, { useState } from "react";
import { logout } from "@/lib/action";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [logoutLoading, setLogoutLoading] = useState(false);

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      const response = await logout();

      if (response.success) {
        setLogoutLoading(false);
        router.refresh();
        router.push("/admin/login");
      }
    } catch (error) {
      setLogoutLoading(false);
    }
  };
  return (
    <>
      <div>Dashboard</div>
      <Button
        onClick={() => handleLogout()}
        className="bg-red-500 text-white"
        variant={"outline"}
        size={"icon"}
        disabled={logoutLoading}
      >
        {logoutLoading ? <Loader2 className="animate-spin" /> : <LogOut />}
      </Button>
    </>
  );
};

export default Dashboard;
