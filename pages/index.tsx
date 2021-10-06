import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const Home: NextPage = () => {
  return (
    <div className="prose prose-sm lg:prose-lg mx-auto p-4">
      <h1>This is header</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat velit,
        sequi dignissimos reiciendis a iusto, voluptatem quasi quod quaerat
        nostrum tenetur perspiciatis vel ipsam corrupti dolor quidem asperiores,
        nostrum tenetur perspiciatis vel ipsam corrupti dolor quidem asperiores
        fugit laborum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe
        reiciendis odio, accusantium consequuntur, doloremque aliquid nam
        eligendi placeat quas voluptates earum rem autem! Praesentium eligendi
        animi nemo molestiae debitis.
      </p>
      <HiChevronDown className="w-6 h-6" aria-hidden="true" />
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="0.00"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
