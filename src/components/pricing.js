import React from 'react';

import Wrapper from './wrapper';

const Pricing = () => {
  return (
    <Wrapper>
      <div className="relative p-6 mx-6 mt-20 border-2 border-gray-600">
        <h2 className="text-4xl leading-none uppercase text-fuschia font-display">
          CoLab <br className="md:hidden" />
          Pricing Rates
        </h2>

        <div className="flex flex-wrap mt-4 -mx-3 md:justify-between">
          <div className="w-full px-3 mt-4 md:border-l-2 md:border-gray-600 md:first:border-0 md:mt-0 md:w-1/3">
            <h3 className="text-xl leading-none uppercase md:text-2xl text-fuschia font-display">
              Day <br className="hidden md:inline" />
              Rates
              <span className="ml-2 md:block md:text-lg md:ml-0">
                (Mon - Fri)
              </span>
            </h3>
            <div className="flex text-xs text-black md:text-base md:block">
              <p className="ml-2 md:ml-0 first:ml-0 md:mt-2">
                <strong>Half Day</strong> $19
              </p>
              <p className="ml-2 md:ml-0 first:ml-0">
                <strong>One Day</strong> $29
              </p>
              <p className="ml-2 md:ml-0 first:ml-0">
                <strong>5 Full Days</strong> $79
              </p>
            </div>
          </div>
          <div className="w-full px-3 mt-4 md:border-l-2 md:border-gray-600 md:first:border-0 md:mt-0 md:w-1/3">
            <h3 className="text-xl leading-none uppercase md:text-2xl text-fuschia font-display">
              Monthly <br className="hidden md:inline" />
              Rates
              <span className="ml-2 md:block md:text-lg md:ml-0">
                (Mon - Fri)
              </span>
            </h3>
            <div className="flex text-xs text-black md:text-base md:block">
              <p className="ml-2 md:ml-0 first:ml-0 md:mt-2">
                <strong>Part Time (2 Days)</strong> $79
              </p>
              <p className="ml-2 md:ml-0 first:ml-0">
                <strong>Full Time</strong> $179
              </p>
            </div>
          </div>
          <div className="w-full px-3 mt-4 md:border-l-2 md:border-gray-600 md:first:border-0 md:mt-0 md:w-1/3">
            <h3 className="text-xl leading-none uppercase md:text-2xl text-fuschia font-display">
              Venue <br className="hidden md:inline" />
              Hire
              <span className="ml-2 md:block md:text-lg md:ml-0">
                (After hours)
              </span>
            </h3>
            <div className="flex text-xs text-black md:text-base md:block">
              <p className="ml-2 md:ml-0 first:ml-0 md:mt-2">
                <strong>Weekdays</strong> $29 <sup>ph*</sup>
              </p>
              <p className="ml-2 md:ml-0 first:ml-0">
                <strong>Weekends</strong> $49 <sup>ph*</sup>
              </p>
            </div>
            <p className="-mt-4 text-xs font-light md:mt-2">
              <br className="md:hidden" />
              *Per Hour
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Pricing;