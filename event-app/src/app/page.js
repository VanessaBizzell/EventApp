

"use client";
import Login from "@/Login";
import { ApiClient } from "../../apiclient/client";
import { useEffect, useState } from "react";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const [token, setToken] = useState(null);

  const login = (newToken) => {
    window.localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const client = new ApiClient(() => token, logout);

  return (
    <div>
      {token ? <Dashboard
        client={client}
        />:<Login client={client} login={login} />}
    </div>
  );
}