"use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/config/queryClient";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />

      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};
