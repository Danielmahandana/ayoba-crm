// pages/index.tsx
import Layout from '../components/Layout';

const Home: React.FC = ({ children }) => {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6 text-primary-dark">
        Welcome to Ayoba CRM
      </h2>
      <p className="text-gray-700 mb-4">
        Manage your customer relationships efficiently with our CRM system integrated
        with the Ayoba Business Chat API.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold">Customer Profiles</h3>
          <p>Manage and view detailed profiles of your customers.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Sales Pipeline</h3>
          <p>Track and manage your sales process efficiently.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
