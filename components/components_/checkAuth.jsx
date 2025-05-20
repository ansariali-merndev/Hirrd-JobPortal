"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const CheckAuth = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      Swal.fire({
        icon: "warning",
        title: "Access Denied",
        text: "You must be logged in to post a job. Please log in to continue.",
        confirmButtonText: "Please Login",
        background: "black",
        color: "#fff",
      }).then(() => {
        router.push("/");
      });
    }
  }, [isSignedIn, isLoaded, router]);

  return null;
};
