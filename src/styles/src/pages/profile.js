// src/pages/profile.js
import UserProfile from '../components/UserProfile';

const ProfilePage = () => {
  // Assuming you have the current user's ID available
  const currentUserId = 'user123';

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <UserProfile userId={currentUserId} />
    </div>
  );
};

export default ProfilePage;