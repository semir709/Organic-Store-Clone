import React, { useEffect, useState } from "react";
import SectionMessage from "../components/SectionMessage";
import { getContact } from "../utils";
import sanityClient from "../client";
import "react-loading-skeleton/dist/skeleton.css";
import { ContactInfoSection, FreqAskQuesSection } from "../sections/index";

const ContactUs = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(null);
    sanityClient.fetch(getContact).then((data) => setData(data[0]));
  }, []);

  const { contact, questions } = data || {};

  return (
    <div>
      {/* {/* <SectionMessage title={"Get In Touch"} /> */}
      <ContactInfoSection data={contact} />
      <FreqAskQuesSection data={questions} />
    </div>
  );
};

export default ContactUs;
