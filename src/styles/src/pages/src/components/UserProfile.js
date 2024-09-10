// src/components/UserProfile.js
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const UserProfile = ({ userId }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error);
      } else {
        setUserProfile(data);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img
        src={userProfile.avatar_url || '/default-avatar.png'}
        alt={userProfile.username}
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold text-center mb-2">{userProfile.username}</h2>
      <p className="text-gray-600 text-center">{userProfile.bio}</p>
    </div>
  );
};

export default UserProfile;