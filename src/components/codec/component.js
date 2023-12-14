import { getCodecs } from "@/services/api";

export const Codec = async ({ codecId }) => {
  const codecs = await getCodecs();
  const codec = codecs.find(({ id }) => id === codecId);

  return <div>{codec?.type}</div>;
};
