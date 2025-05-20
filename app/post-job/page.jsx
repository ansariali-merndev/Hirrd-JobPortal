"use client";

import { CheckAuth } from "@/components/components_/checkAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { postJob } from "@/api/axios";
import Swal from "sweetalert2";
import { Title } from "@/components/components_/Title";

export default function PostJob() {
  const { user, isLoaded } = useUser();

  const [inputValue, setInputValue] = useState({
    recruiterEmail: "",
    recruiterClerkId: "",
    title: "",
    description: "",
    city: "",
    company: "",
    skills: "",
  });

  useEffect(() => {
    if (isLoaded && user) {
      const email = user?.emailAddresses?.[0]?.emailAddress || "";
      const id = user?.id || "";

      setInputValue((prev) => ({
        ...prev,
        recruiterEmail: email,
        recruiterClerkId: id,
      }));
    }
  }, [isLoaded, user]);

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await postJob(inputValue);
    if (response.message === "success") {
      Swal.fire({
        icon: "success",
        title: "Job Posted Successfully",
        timer: 1000,
      });
    }
    setInputValue((prev) => ({
      recruiterEmail: prev.recruiterEmail,
      recruiterClerkId: prev.recruiterClerkId,
      title: "",
      description: "",
      city: "",
      company: "",
      skills: "",
    }));
  };

  return (
    <section>
      <CheckAuth />
      <div className="my-8">
        <Title title={"Post Job"} />
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <Input
            type={"text"}
            placeholder="Job Title"
            value={inputValue.title}
            onChange={handleInputValue}
            className={"w-full"}
            name="title"
          />
          <Textarea
            placeholder="Type your Job Description here."
            className={"w-full"}
            value={inputValue.description}
            onChange={handleInputValue}
            name="description"
          />
          <section className="grid grid-cols-2 w-full gap-2">
            {/* First Section */}
            <Select
              onValueChange={(value) =>
                setInputValue((prev) => ({ ...prev, city: value }))
              }
            >
              <SelectTrigger className={"w-full"}>
                <SelectValue placeholder="Select City Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="New Delhi">New Delhi</SelectItem>
                  <SelectItem value="Noida UP">Noida UP</SelectItem>
                  <SelectItem value="Bangalore">Bangalore</SelectItem>
                  <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="Pune">Pune</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* Second Section */}
            <Select
              className="w-full"
              onValueChange={(value) =>
                setInputValue((prev) => ({ ...prev, company: value }))
              }
            >
              <SelectTrigger className={"w-full"}>
                <SelectValue placeholder="Company Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Adobe">Adobe</SelectItem>
                  <SelectItem value="Amazon">Amazon</SelectItem>
                  <SelectItem value="Atlassian">Atlassian</SelectItem>
                  <SelectItem value="Deloitte">Deloitte</SelectItem>
                  <SelectItem value="Google">Google</SelectItem>
                  <SelectItem value="Jira">Jira</SelectItem>
                  <SelectItem value="Tcs">Tcs</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </section>
          <Textarea
            placeholder="Skills Required and Responsibility"
            rows={6}
            className={"h-90"}
            value={inputValue.skills}
            onChange={handleInputValue}
            name="skills"
          />
          <Button
            type="submit"
            variant={"secondary"}
            className={"cursor-pointer"}
          >
            Post Job
          </Button>
        </form>
      </div>
    </section>
  );
}
