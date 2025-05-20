import { getJobId } from "@/api/axios";
import { ApplyJob } from "@/components/components_/ApplyJob";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function JobPage({ params }) {
  const { job_id } = await params;
  const { job } = await getJobId(job_id);
  const { title, city, company, description, skills, applicants } = job;
  const data = skills.split(".");
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2 className="text-2xl md:text-4xl">{title}</h2>
            <div className="flex justify-between my-4">
              <span className="text-gray-400 text-xs">
                Company Name: {company}
              </span>
              <span className="text-gray-400 text-xs">
                {applicants} Applicant
              </span>
              <span className="text-gray-400 text-xs">Location: {city}</span>
            </div>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2 text-gray-400">
            {data.map((item, index) => (
              <p key={index} className="text-xs sm:text-base">
                {item}
              </p>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <ApplyJob id={job_id} />
        </CardFooter>
      </Card>
    </div>
  );
}
