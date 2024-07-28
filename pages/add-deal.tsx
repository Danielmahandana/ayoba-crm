// pages/add-deal.tsx

import React from 'react';
import Layout from '../components/Layout';
import AddDealForm from '../components/AddDealForm';

const AddDeal: React.FC = () => {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6">Add New Deal</h2>
      <AddDealForm />
    </Layout>
  );
};

export default AddDeal;