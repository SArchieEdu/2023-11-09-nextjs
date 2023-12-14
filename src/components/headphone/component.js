/* eslint-disable react/jsx-key */
import { Codec } from "@/components/codec/component";
import { Counter } from "@/components/counter/component";

export const Headphone = ({ headphone }) => {
  return (
    <div>
      <h3>{headphone.name}</h3>
      <div>
        {headphone.codecs.map((codecId) => (
          <Codec codecId={codecId} />
        ))}
      </div>
      <Counter />
    </div>
  );
};
