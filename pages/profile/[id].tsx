// pages/profile/[id].tsx

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { getCustomerProfile } from '../../lib/ayobaApi';

const CustomerProfile: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getCustomerProfile(id as string)
        .then(setProfile)
        .catch(console.error);
    }
  }, [id]);

  if (!profile) return <Layout>Loading...</Layout>;

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Customer Profile</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold">{profile.name}</h3>
        <p className="text-gray-600">{profile.email}</p>
        <p className="text-gray-600">{profile.phone}</p>
        {/* Add more profile details as needed */}
      </div>
    </Layout>
  );
};

export default CustomerProfile;