import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { image } from "@/assets/companies";
import { Carousells } from "./Carousel";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import faq from "../../data/faq.json";

export const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center text-2xl sm:text-4xl lg:text-8xl font-extrabold bg-gradient-to-br from-green-500 via-gray-200 to-white text-transparent bg-clip-text capitalize">
          Find your Dream Job{" "}
          <span className="flex items-center gap-3">
            {" "}
            and get
            <Image src={image.logo} alt="" width={120} />
          </span>
        </h1>
        <p className="text-gray-300 text-xs sm:mt-4 sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex justify-center gap-2 sm:gap-6 items-center">
        <Link href="/jobs">
          <Button variant="ghost" size="xl">
            Find Job
          </Button>
        </Link>
        <Link href="/post-job">
          <Button variant="blue" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousells />
      <Image src={image.banner} alt="" className="w-full" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.{" "}
          </CardContent>
        </Card>
      </section>

      <Accordion type="multiple" className="w-full">
        {faq.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};
