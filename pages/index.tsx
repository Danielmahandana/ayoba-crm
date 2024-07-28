// pages/index.tsx

import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => (
  <Link href={link} className="block">
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Link>
);

const Home: React.FC = () => {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6 text-primary-dark">
        Welcome to Ayoba CRM
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Customer Profiles"
          description="View and manage customer information"
          link="/customers"
        />
        <Card
          title="Sales Pipeline"
          description="Track and manage your deals"
          link="/pipeline"
        />
        <Card
          title="Add Customer"
          description="Create a new customer profile"
          link="/add-customer"
        />
        <Card
          title="Add Deal"
          description="Create a new deal in the sales pipeline"
          link="/add-deal"
        />
        <Card
          title="Messaging"
          description="Communicate with customers via Ayoba"
          link="/messaging"
        />
        <Card
          title="Analytics"
          description="View CRM analytics and reports"
          link="/analytics"
        />
      </div>
    </Layout>
  );
};

export default Home;