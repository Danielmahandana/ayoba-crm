import React, { useState, useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const AddDeal: React.FC = () => {
  const context = useContext(StoreContext);

  if (!context) {
    return null; // or handle the context being undefined appropriately
  }

  const { addDeal, customers } = context;
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [stage, setStage] = useState('Lead');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDeal = { title, value: parseFloat(value), customerId, stage };
    addDeal(newDeal);
    // Clear form fields
    setTitle('');
    setValue('');
    setCustomerId('');
    setStage('Lead');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-semibold">Add New Deal</h3>
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Deal Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="value" className="block text-sm font-medium text-gray-700">Deal Value</label>
        <input
          type="number"
          id="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="customer" className="block text-sm font-medium text-gray-700">Customer</label>
        <select
          id="customer"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select a customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>{customer.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="stage" className="block text-sm font-medium text-gray-700">Stage</label>
        <select
          id="stage"
          value={stage}
          onChange={(e) => setStage(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="Lead">Lead</option>
          <option value="Qualified">Qualified</option>
          <option value="Proposal">Proposal</option>
          <option value="Negotiation">Negotiation</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Add Deal
      </button>
    </form>
  );
};

export default AddDeal;