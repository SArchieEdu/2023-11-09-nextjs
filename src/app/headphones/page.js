import { Headphones } from "@/components/headphones/component";
import { getHeadphones } from "@/services/api";

const HeadphonesPage = async () => {
  const headphones = await getHeadphones();

  return <Headphones headphones={headphones} />;
};

export default HeadphonesPage;
