"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export const Hiring = () => {
  const [isHiring, setIsHiring] = useState(true);
  return (
    <>
      <Button
        variant={"secondary"}
        className={"cursor-pointer"}
        onClick={() => setIsHiring((prev) => !prev)}
      >
        {isHiring ? "Currently Hiring" : "Not Hiring"}
      </Button>
    </>
  );
};
