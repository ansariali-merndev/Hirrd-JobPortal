import { CheckAuth } from "@/components/components_/checkAuth";
import { LatestJob } from "@/components/components_/LatestJob";
import { Title } from "@/components/components_/Title";

export default function JobListing() {
  return (
    <>
      <CheckAuth />
      <div>
        <Title title={"Latest Job"} />
        <LatestJob />
      </div>
    </>
  );
}
