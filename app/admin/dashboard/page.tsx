"use client";
import { Button } from "@/components/ui/button";
import { Loader2, LogOut, Trash2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import { logout } from "@/lib/action";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

const Dashboard = () => {
  const router = useRouter();
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [uid, setUid] = useState<string | null>(null);
  const supabase = createClient();

  // Fetch contacts data from Supabase
  useEffect(() => {
    const fetchContacts = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
      setUid(user?.id || null); // Set the user ID
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false }); // Fetch and order by created_at

      console.log(data, error); // Log the data and error for debugging
      if (data) {
        setContacts(data);
        setLoading(false);
      }
      if (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Handle logout
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

  // Handle delete contact
  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("contacts").delete().eq("id", id);
    if (!error) {
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== id)
      );
    } else {
      console.error(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-10 lg:px-0 min-h-screen flex flex-col py-20">
      <div className="w-full flex items-center justify-between">
        {" "}
        <div className="text-3xl font-bold">
          Dashboard{" "}
          <span className="text-sm font-semibold">admin id: {uid}</span>
        </div>
        <Button
          onClick={handleLogout}
          className="bg-red-500 text-white"
          variant={"outline"}
          size={"icon"}
          disabled={logoutLoading}
        >
          {logoutLoading ? <Loader2 className="animate-spin" /> : <LogOut />}
        </Button>
      </div>

      <div className="mt-10 w-full">
        <h2 className="text-xl font-semibold mb-4">Contact List</h2>
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Mobile Number</th>
                <th className="border px-4 py-2">Message</th>
                <th className="border px-4 py-2">Country</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="border px-4 py-2">{contact.name}</td>
                  <td className="border px-4 py-2">
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-blue-500"
                    >
                      {contact.email}
                    </a>
                  </td>
                  <td className="border px-4 py-2">{contact.mobilenumber}</td>
                  <td className="border px-4 py-2">{contact.message}</td>
                  <td className="border px-4 py-2">{contact.country}</td>
                  <td className="border px-4 py-2">
                    <Button
                      onClick={() => handleDelete(contact.id)}
                      className="bg-red-500 text-white"
                      variant={"outline"}
                      size={"icon"}
                    >
                      <Trash2 />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
