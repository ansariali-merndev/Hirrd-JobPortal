"use client";

import { incrementApplicant } from "@/api/axios";
import { Button } from "../ui/button";
import { useState } from "react";
import Swal from "sweetalert2";

export const ApplyJob = ({ id }) => {
  const [isApply, setIsApply] = useState(false);
  async function increment(id) {
    if (isApply) {
      Swal.fire({
        icon: "warning",
        title: "You Already Applied this Job",
        timer: 2000,
        background: "#333",
        color: "#fff",
      });
    } else {
      const res = await incrementApplicant(id);
      console.log(res.message);
      setIsApply(true);
    }
  }

  return (
    <Button variant={"outline"} onClick={() => increment(id)}>
      Apply Job
    </Button>
  );
};
