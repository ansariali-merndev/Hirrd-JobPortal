"use client";

import { JobCard } from "@/components/components_/Job-Card";
import { Title } from "@/components/components_/Title";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

export default function MyJob() {
  const { isLoaded, user } = useUser();
  const [emailId, setEmailId] = useState("");

  useEffect(() => {
    if (user) {
      const email = user.emailAddresses[0].emailAddress;
      setEmailId(email);
    }
  }, [isLoaded, user]);

  return (
    <div>
      <div>
        <Title title={"Posted Job"} />

        {isLoaded ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <JobCard emailId={emailId} />
          </div>
        ) : (
          <BarLoader color="#2563eb" width={"100%"} />
        )}
      </div>
    </div>
  );
}
