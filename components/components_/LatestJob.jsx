"use client";

import { getAllJob } from "@/api/axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { BarLoader } from "react-spinners";
import Link from "next/link";
import { Heart } from "lucide-react";

export const LatestJob = () => {
  const [allJob, setAllJob] = useState([]);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    async function getJob() {
      const res = await getAllJob();
      if (res.message === "success") {
        setAllJob(res.job);
      }
    }
    getJob();
  }, []);

  return (
    <div>
      {allJob.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {allJob.map((job, index) => (
            <div key={index}>
              <Card>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 text-center text-gray-300 text-[13px]">
                    <span>{job.city}</span>
                    <span>{job.applicants} Applicant</span>
                    <span>{job.company}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-3">
                  <Link href={`/jobs/${job._id}`}>
                    <Button variant={"outline"} className={"cursor-pointer"}>
                      View More Detail
                    </Button>
                  </Link>
                  <Heart
                    onClick={() => setIsFav((prev) => !prev)}
                    className={`${
                      isFav ? "fill-red-600 text-red-600" : ""
                    } w-6`}
                  />
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <BarLoader color="blue" width={"100%"} />
        </div>
      )}
    </div>
  );
};
