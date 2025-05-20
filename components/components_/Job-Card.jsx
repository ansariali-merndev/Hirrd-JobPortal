"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Hiring } from "./CheckHiring";
import { getJobByEmail } from "@/api/axios";

export const JobCard = ({ emailId }) => {
  const [allJob, setAllJob] = useState([]);

  useEffect(() => {
    if (emailId) {
      async function fetchJobs() {
        try {
          const res = await getJobByEmail({ email: emailId });
          console.log(res);
          if (res.message === "success") {
            setAllJob(res.job);
          }
        } catch (error) {
          console.error(error);
        }
      }
      fetchJobs();
    }
  }, [emailId]);

  if (allJob.length > 0) {
    return allJob.map((job, index) => (
      <Card key={index}>
        <CardHeader>
          <CardTitle>{job.title}</CardTitle>
          <CardDescription>{job.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-gray-300 capitalize text-[13px]">
            <span>{job.city}</span>
            <span>{job.applicants} Applicant</span>
            <span>Amazon</span>
          </div>
        </CardContent>
        <CardFooter>
          <Hiring />
        </CardFooter>
      </Card>
    ));
  } else {
    return (
      <div>
        <h2 className="text-4xl my-8 font-bold text-gray-300 capitalize">
          No Posted Job
        </h2>
      </div>
    );
  }
};
