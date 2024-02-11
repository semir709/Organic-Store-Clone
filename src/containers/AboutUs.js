import { useEffect, useState } from "react";
import SectionMessage from "../components/SectionMessage";
import LeafCenter from "../components/LeafCenter";
import { getAbout } from "../utils";
import sanityClient from "../client";
import {
  AboutInfoSection,
  CertifedSection,
  NumStatsSection,
} from "../sections/index";

const AboutUs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    sanityClient.fetch(getAbout).then((data) => setData(data[0]));
  }, []);

  const { sectionMoreinfo, sectionNumber, sectionInfo } = data || {};

  return (
    <div>
      <SectionMessage title={"About Us"} />
      <section className="bg-global-color-4">
        <LeafCenter />
      </section>
      <AboutInfoSection data={sectionInfo} />
      <NumStatsSection data={sectionNumber} />
      <CertifedSection data={sectionMoreinfo} />
    </div>
  );
};

export default AboutUs;
