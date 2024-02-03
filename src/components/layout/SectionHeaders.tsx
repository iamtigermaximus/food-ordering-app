import React, { FC } from 'react';

interface SectionHeadersProps {
  subHeader: string;
  mainHeader: string;
}

const SectionHeaders: FC<SectionHeadersProps> = ({ subHeader, mainHeader }) => {
  return (
    <>
      <h3 className="uppercase text-gray-400 font-semibold">{subHeader}</h3>
      <h2 className="text-primary font-bold text-4xl">{mainHeader}</h2>
    </>
  );
};

export default SectionHeaders;
