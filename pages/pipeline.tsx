// pages/pipeline.tsx
import React from 'react';
import Layout from '../components/Layout';

const SalesPipeline: React.FC = () => {
  // This is a placeholder. You'll need to implement the actual pipeline logic.
  const stages = ['Lead', 'Qualified', 'Proposal', 'Negotiation', 'Closed'];

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Sales Pipeline</h2>
      <div className="grid grid-cols-5 gap-4">
        {stages.map((stage) => (
          <div key={stage} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{stage}</h3>
            {/* Add drag-and-drop functionality for deals */}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default SalesPipeline;