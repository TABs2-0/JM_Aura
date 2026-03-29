import React from 'react';

const Profile = () => {
  return (
    <main className="pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen">
      {/* Profile Header */}
      <section className="mb-20 flex flex-col md:flex-row items-center md:items-end gap-8">
        <div className="relative group">
          <div className="w-40 h-52 rounded-t-full overflow-hidden editorial-shadow bg-surface-container-high">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzH1L2fnjqJdBU1ySVnKnVQqf1eQ2FEbSyTJoa43M3R8hbeCPDkNH9HWbrndPy5TtmxRBbTTsucCoPiw0Dy5WDYI6YSV27p9rpcTVyxpuAegl09JuG0LaJ-hd8FXFK-QDSx4eQT2c3eCsOAg6NYax0Rhn4hwq10rMag-CHnuqbLotD9lmnERTHpL6nqLG6VRTFi5_4KqHds1NxD3g9CxBJ5cZFRsWDbWdW4CWa463DwW5cMpK72qvIi_p7hrn9GI1cmvdYiu_mAjM" alt="Julianne Moore Profile" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-full text-on-primary editorial-shadow cursor-pointer hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-sm">edit</span>
          </div>
        </div>
        <div className="text-center md:text-left">
          <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2">Member since 2022</p>
          <h1 className="font-headline text-5xl md:text-7xl tracking-tighter text-on-surface">Julianne Moore</h1>
          <p className="font-body text-on-surface-variant mt-2 italic">Aura Inner Circle Member</p>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <nav className="flex flex-col space-y-2">
            <a className="group flex items-center justify-between py-4 border-b border-outline-variant/30 text-[#79542e] dark:text-[#a67c52]" href="#">
              <span className="font-label text-xs uppercase tracking-[0.15em] font-semibold">My Account</span>
              <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
            </a>
            <a className="group flex items-center justify-between py-4 border-b border-outline-variant/30 text-on-surface/60 hover:text-primary transition-colors" href="#">
              <span className="font-label text-xs uppercase tracking-[0.15em]">Order History</span>
              <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward_ios</span>
            </a>
            <a className="group flex items-center justify-between py-4 border-b border-outline-variant/30 text-on-surface/60 hover:text-primary transition-colors" href="#">
              <span className="font-label text-xs uppercase tracking-[0.15em]">Wishlist</span>
              <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward_ios</span>
            </a>
            <a className="group flex items-center justify-between py-4 border-b border-outline-variant/30 text-on-surface/60 hover:text-primary transition-colors" href="#">
              <span className="font-label text-xs uppercase tracking-[0.15em]">Saved Addresses</span>
              <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward_ios</span>
            </a>
            <button className="mt-8 flex items-center space-x-2 text-on-surface/40 hover:text-error transition-colors">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="space-y-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-70">Full Name</label>
                <input className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary rounded-none py-3 px-0 border-b border-outline-variant/40 font-body text-on-surface focus:bg-surface transition-all" type="text" defaultValue="Julianne Moore"/>
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-70">Email Address</label>
                <input className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary rounded-none py-3 px-0 border-b border-outline-variant/40 font-body text-on-surface focus:bg-surface transition-all" type="email" defaultValue="j.moore@aura.com"/>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-70">Password</label>
                <div className="flex items-center justify-between border-b border-outline-variant/40 py-3">
                  <span className="font-body text-on-surface">••••••••••••</span>
                  <button className="text-xs uppercase tracking-widest text-primary font-bold hover:underline underline-offset-4">Change Password</button>
                </div>
              </div>
            </div>
            <button className="mt-12 bg-gradient-to-tr from-primary to-primary-container text-on-primary px-10 py-4 rounded-full font-label text-xs uppercase tracking-[0.2em] editorial-shadow hover:scale-[1.02] active:scale-95 transition-all">
              Save Changes
            </button>
          </section>

          {/* Order History Section */}
          <section id="orders">
            <div className="flex items-baseline justify-between mb-10 border-b border-outline-variant/20 pb-4">
              <h2 className="font-headline text-3xl">Recent Orders</h2>
              <a className="font-label text-[10px] uppercase tracking-widest text-primary font-bold" href="#">View All</a>
            </div>
            <div className="space-y-6">
              <div className="group flex items-center p-6 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-colors">
                <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Order ID</p>
                    <p className="font-body font-bold">#7731</p>
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Item</p>
                    <p className="font-body text-on-surface">Aurelia Gold Necklace</p>
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Status</p>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <p className="font-body text-on-surface">Delivered</p>
                    </div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </div>
              <div className="group flex items-center p-6 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-colors">
                <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Order ID</p>
                    <p className="font-body font-bold">#7654</p>
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Item</p>
                    <p className="font-body text-on-surface">Faceted Stone Vessel</p>
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Status</p>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      <p className="font-body text-on-surface">In Transit</p>
                    </div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </div>
            </div>
          </section>

          {/* Wishlist Section */}
          <section id="wishlist">
            <div className="flex items-baseline justify-between mb-10 border-b border-outline-variant/20 pb-4">
              <h2 className="font-headline text-3xl">Curated Wishlist</h2>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">3 Items</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              <div className="group">
                <div className="aspect-[3/4] rounded-t-full overflow-hidden mb-6 editorial-shadow relative bg-surface-container-high">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA15ipNNb98Cze4_OUV8Jev6GbYl1VpXbZYYKyDra4apzYBxIjUuprvoyH_lmjNHqemVoTOqPSxuuDTn_vYacL0ljh7_y7IDjEQpviQp1R_wKAaVQe4YxvRYJbLVNGMgG60TjwWx43NqPWnPeYrxORAxVYbqe_Fr_V9DTrA2pWptWDlY0y3pmKLvhYaVGxIAoKzKylKgyGYSavR5ZrIDRXFLBpQM5IFZ1W3ruhmAh7egtJ0AZNtLybjtm7FDaVXyA4wLWqcKx_AzsU" alt="Horizon Band Ring" />
                  <button className="absolute top-4 right-4 text-primary bg-surface/80 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                  </button>
                </div>
                <h3 className="font-body text-lg text-on-surface">Horizon Band Ring</h3>
                <p className="font-label text-xs tracking-widest text-primary mt-1">$1,250</p>
                <button className="mt-4 font-label text-[10px] uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/40 pb-1 hover:text-primary transition-colors">Add to Bag</button>
              </div>
              <div className="group">
                <div className="aspect-[3/4] rounded-t-full overflow-hidden mb-6 editorial-shadow relative bg-surface-container-high">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS-IUV4ooDRoZvBRz1gdkRtSQr7EfbJsiSwQJRrhoogph4KfuXdoTOBDB630TwzOhgzHlfh2-ZtstdjSTmzRQUpQKIxZFv624Z1EwT0sEnesndQIWCbX3Lm5aazx6ajqHoljWB0_5Y5WcVdVM3y2ODIss8nD9gK5bQOvPOGs1DBQmgWv1Kwh-5zRZchSgHxjBXTctfSwWGAL_YtPM6X_7o5hqBILjzWUkBhH6otDyurLI-gvlCNbphmqrwt4nyM42j8qUil1-PMuw" alt="Aura Cuff" />
                  <button className="absolute top-4 right-4 text-primary bg-surface/80 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                  </button>
                </div>
                <h3 className="font-body text-lg text-on-surface">Aura Cuff</h3>
                <p className="font-label text-xs tracking-widest text-primary mt-1">$2,800</p>
                <button className="mt-4 font-label text-[10px] uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/40 pb-1 hover:text-primary transition-colors">Add to Bag</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Profile;
