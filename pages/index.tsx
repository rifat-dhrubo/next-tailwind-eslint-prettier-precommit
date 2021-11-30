import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { MultiSelect } from 'react-multi-select-component';
import Select, { components } from 'react-select';

const Input = (props: any) => (
  <components.Input
    {...props}
    inputClassName="outline-none border-none shadow-none focus:ring-transparent"
  />
);

const options = [
  { label: 'Grapes 🍇', value: 'grapes' },
  { label: 'Mango 🥭', value: 'mango' },
  { label: 'Strawberry 🍓', value: 'strawberry' },
  { label: 'Watermelon 🍉', value: 'watermelon' },
  { label: 'Pear 🍐', value: 'pear', disabled: true },
  { label: 'Apple 🍎', value: 'apple' },
  { label: 'Tangerine 🍊', value: 'tangerine' },
  { label: 'Pineapple 🍍', value: 'pineapple' },
  { label: 'Peach 🍑', value: 'peach' },
];

const Home: NextPage = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div className="p-4 mx-auto">
      <h1 className="mb-12 text-4xl font-bold text-gray-700">This is header</h1>
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
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
            placeholder="0.00"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full py-0 pl-2 text-gray-500 bg-transparent border-transparent rounded-md focus:ring-indigo-500 focus:border-indigo-500 pr-7 sm:text-sm"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>
      <Select className="border-red-700" components={{ Input }} />
      <div>
        <h1>Select Fruits</h1>
        <pre>{JSON.stringify(selected)}</pre>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy={'Select'}
        />
      </div>
    </div>
  );
};

export default Home;
