"use client"

import { SessionProvider } from "next-auth/react";
import React from "react";

//Created to provide Auth to session without compromising ContextApi and metadata
const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;