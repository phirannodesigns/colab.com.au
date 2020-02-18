import React from 'react';
import Wrapper from '../wrapper';

import chevronLeft from '../../images/chevron-left.svg';

import useGraphql from '../../hooks/use-graphql';

const DesktopBooking = () => {
  const data = useGraphql();

  return (
    <Wrapper isDesktopOnly>
      <div className="relative w-1/2 p-6 mx-6 mt-20 border-2 border-gray-600">
        <h2 className="text-4xl leading-none uppercase text-fuschia font-display">
          It only takes <br /> 3 Easy Steps <br />
          To book any <br /> Space
        </h2>

        <p className="text-left">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data.site.siteMetadata.booking}
            className="inline-block w-48 py-2 mt-6 text-center text-white uppercase bg-fuschia font-display"
          >
            Click to book
          </a>
        </p>
      </div>
      <div className="relative float-right w-1/2 mt-4 -mt-56 bg-fuschia">
        <img
          src={chevronLeft}
          alt=""
          className="absolute inset-y-0 left-0 h-12 my-auto ml-px transform -translate-x-full"
        />
        <div className="flex justify-center">
          <ul className="p-6 text-white">
            <li className="leading-none">
              <strong className="font-display">STEP 1.</strong> Click on the{' '}
              <br /> book button
            </li>
            <li className="mt-2 leading-none">
              <strong className="font-display">STEP 2.</strong> Select the
              <br />
              membership you are
              <br /> after
            </li>
            <li className="mt-2 leading-none">
              <strong className="font-display">STEP 3.</strong> Make payment
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default DesktopBooking;
