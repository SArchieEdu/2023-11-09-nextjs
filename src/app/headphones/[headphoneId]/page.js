import { Headphone } from "@/components/headphone/component";
import { getCodecs, getHeadphone } from "@/services/api";
import React from "react";

// export function generateStaticParams() {
//   return ["MLXJ2LLA", "HTCIA62"].map((headphoneId) => ({
//     headphoneId,
//   }));
// }

const HeadphonePage = async ({ params: { headphoneId } }) => {
  const headphone = await getHeadphone(headphoneId);
  await getCodecs();

  return <Headphone headphone={headphone} />;
};
export default HeadphonePage;
