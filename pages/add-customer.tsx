// pages/add-customer.tsx

import React from 'react';
import Layout from '../components/Layout';
import AddCustomerForm from '../components/AddCustomerForm';

const AddCustomer: React.FC = () => {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6">Add New Customer</h2>
      <AddCustomerForm />
    </Layout>
  );
};

export default AddCustomer;