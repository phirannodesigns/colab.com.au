import React from 'react';

import Wrapper from './wrapper';
import chevronRight from '../images/chevron-right.svg';

const Pricing = () => {
  return (
    <Wrapper id="pricing">
      <div className="pt-20">
        <div className="relative p-6 mx-6 border-2 border-gray-600">
          <img
            src={chevronRight}
            alt=""
            className="absolute top-0 left-0 h-16 mt-6 transform -translate-x-full md:mt-2 md:-ml-3"
          />
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
                  <strong>Half Day</strong>{' '}
                  <span className="text-gray-700">$19</span>
                </p>
                <p className="ml-2 md:ml-0 first:ml-0">
                  <strong>One Day</strong>{' '}
                  <span className="text-gray-700">$29</span>
                </p>
                <p className="ml-2 md:ml-0 first:ml-0">
                  <strong>5 Full Days</strong>{' '}
                  <span className="text-gray-700">$79</span>
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
                  <strong>Part Time (2 Days)</strong>{' '}
                  <span className="text-gray-700">$79</span>
                </p>
                <p className="ml-2 md:ml-0 first:ml-0">
                  <strong>Full Time</strong>{' '}
                  <span className="text-gray-700">$179</span>
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
                  <strong>Weekdays</strong>{' '}
                  <span className="text-gray-700">$29</span> <sup>ph*</sup>
                </p>
                <p className="ml-2 md:ml-0 first:ml-0">
                  <strong>Weekends</strong>{' '}
                  <span className="text-gray-700">$49</span> <sup>ph*</sup>
                </p>
              </div>
              <p className="-mt-4 text-xs font-light md:mt-2">
                <br className="md:hidden" />
                *Per Hour
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Pricing;
