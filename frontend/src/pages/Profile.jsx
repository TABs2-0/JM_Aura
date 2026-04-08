import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userAPI, orderAPI } from '../services/api';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saveStatus, setSaveStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [profileData, ordersData] = await Promise.all([
          userAPI.getProfile(),
          orderAPI.getHistory()
        ]);
        
        setProfile(profileData);
        // Handle paginated orders if necessary
        setOrders(ordersData.results || (Array.isArray(ordersData) ? ordersData : []));
        setError(null);
      } catch (err) {
        console.error('Failed to fetch profile info:', err);
        setError('Please sign in to view your profile.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      setSaveStatus('Saving...');
      await userAPI.updateProfile(profile);
      setSaveStatus('Profile updated successfully.');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (err) {
      console.error('Failed to update profile:', err);
      setSaveStatus('Failed to save changes.');
    }
  };

  const handleInputChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 px-6 text-center">
        <div className="max-w-md">
          <h2 className="text-3xl font-headline mb-4 italic">Authentication Required</h2>
          <p className="text-on-surface-variant mb-8 font-body leading-relaxed">{error}</p>
          <Link to="/login" className="px-8 py-3 bg-primary text-on-primary rounded-full font-label uppercase tracking-widest text-xs transition-opacity hover:opacity-90">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen">
      {/* Profile Header */}
      <section className="mb-20 flex flex-col md:flex-row items-center md:items-end gap-8">
        <div className="relative group">
          <div className="w-40 h-52 rounded-t-full overflow-hidden editorial-shadow bg-surface-container-high">
            <img className="w-full h-full object-cover" src={profile.avatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuAzH1L2fnjqJdBU1ySVnKnVQqf1eQ2FEbSyTJoa43M3R8hbeCPDkNH9HWbrndPy5TtmxRBbTTsucCoPiw0Dy5WDYI6YSV27p9rpcTVyxpuAegl09JuG0LaJ-hd8FXFK-QDSx4eQT2c3eCsOAg6NYax0Rhn4hwq10rMag-CHnuqbLotD9lmnERTHpL6nqLG6VRTFi5_4KqHds1NxD3g9CxBJ5cZFRsWDbWdW4CWa463DwW5cMpK72qvIi_p7hrn9GI1cmvdYiu_mAjM"} alt={profile.full_name || "Profile"} />
          </div>
        </div>
        <div className="text-center md:text-left">
          <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2">Member since {new Date(profile.date_joined).getFullYear() || '2024'}</p>
          <h1 className="font-headline text-5xl md:text-7xl tracking-tighter text-on-surface">{profile.full_name || 'Valued Curator'}</h1>
          <p className="font-body text-on-surface-variant mt-2 italic">{profile.membership_tier || "Aura Member"}</p>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <nav className="flex flex-col space-y-2">
            <a className="group flex items-center justify-between py-4 border-b border-outline-variant/30 text-[#79542e] dark:text-[#a67c52]" href="#account">
              <span className="font-label text-xs uppercase tracking-[0.15em] font-semibold">My Account</span>
              <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
            </a>
            <a className="group flex items-center justify-between py-4 border-b border-outline-variant/30 text-on-surface/60 hover:text-primary transition-colors" href="#orders">
              <span className="font-label text-xs uppercase tracking-[0.15em]">Order History</span>
              <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward_ios</span>
            </a>
            <button 
              onClick={() => { localStorage.removeItem('token'); window.location.href = '/'; }}
              className="mt-8 flex items-center space-x-2 text-on-surface/40 hover:text-error transition-colors"
            >
              <span className="material-symbols-outlined text-sm">logout</span>
              <span className="font-label text-xs uppercase tracking-[0.15em]">Sign Out</span>
            </button>
          </nav>
        </aside>

        {/* Content Area */}
        <div className="flex-grow space-y-24">
          {/* My Account Section */}
          <section id="account">
            <h2 className="font-headline text-3xl mb-10 border-b border-outline-variant/20 pb-4">Personal Details</h2>
            <form onSubmit={handleUpdateProfile} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-70">Full Name</label>
                  <input 
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary rounded-none py-3 px-0 border-b border-outline-variant/40 font-body text-on-surface focus:bg-surface transition-all" 
                    type="text" 
                    value={profile.full_name || ''}
                    onChange={(e) => handleInputChange('full_name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-70">Email Address</label>
                  <input 
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary rounded-none py-3 px-0 border-b border-outline-variant/40 font-body text-on-surface focus:bg-surface transition-all" 
                    type="email" 
                    value={profile.email || ''}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <button type="submit" className="bg-gradient-to-tr from-primary to-primary-container text-on-primary px-10 py-4 rounded-full font-label text-xs uppercase tracking-[0.2em] editorial-shadow hover:scale-[1.02] active:scale-95 transition-all">
                  Save Changes
                </button>
                {saveStatus && <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">{saveStatus}</span>}
              </div>
            </form>
          </section>

          {/* Order History Section */}
          <section id="orders">
            <div className="flex items-baseline justify-between mb-10 border-b border-outline-variant/20 pb-4">
              <h2 className="font-headline text-3xl">Recent Orders</h2>
            </div>
            <div className="space-y-6">
              {orders.length > 0 ? orders.map(order => (
                <div key={order.id} className="group flex items-center p-6 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-colors">
                  <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Order ID</p>
                      <p className="font-body font-bold">#{order.order_number || order.id.slice(0, 8)}</p>
                    </div>
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Amount</p>
                      <p className="font-body text-on-surface">${parseFloat(order.total_amount).toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Status</p>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${order.status === 'delivered' ? 'bg-emerald-500' : 'bg-primary animate-pulse'}`}></span>
                        <p className="font-body text-on-surface capitalize">{order.status}</p>
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </div>
              )) : (
                <p className="font-body text-on-surface-variant italic">You haven't placed any orders yet.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Profile;

