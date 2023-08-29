import { createClient } from "@sanity/client";

export default createClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  dataset: "production",
  useCdn: false,
});
