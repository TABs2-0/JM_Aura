import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userAPI } from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({ 
    username: '', 
    email: '', 
    password: '', 
    confirm_password: '',
    full_name: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const data = await userAPI.signup(formData);
      localStorage.setItem('token', data.key || data.token || data.access);
      navigate('/profile');
    } catch (err) {
      setError(err.message || 'Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col lg:flex-row pt-24 lg:pt-0">
        {/* Form Side */}
        <section className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 min-h-[calc(100vh-6rem)] lg:min-h-screen order-2 lg:order-1">
          <div className="w-full max-w-md">
            <header className="mb-12">
              <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">Create Account</p>
              <h1 className="font-headline text-5xl md:text-6xl tracking-tight mb-4 italic">Join the <br />Curator’s Circle</h1>
              <p className="text-on-surface-variant font-light leading-relaxed">Gain access to exclusive collections, track your history, and experience jewelry as art.</p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Full Name</label>
                <input 
                  required
                  name="full_name"
                  type="text"
                  placeholder="Alexander Moretti"
                  value={formData.full_name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none border-b border-outline-variant/30 focus:border-primary focus:ring-0 py-4 px-0 font-body text-on-surface transition-all placeholder:text-outline-variant"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Username</label>
                <input 
                  required
                  name="username"
                  type="text"
                  placeholder="TheMoretti"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none border-b border-outline-variant/30 focus:border-primary focus:ring-0 py-4 px-0 font-body text-on-surface transition-all placeholder:text-outline-variant"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Email Address</label>
                <input 
                  required
                  name="email"
                  type="email"
                  placeholder="alexander@aura.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none border-b border-outline-variant/30 focus:border-primary focus:ring-0 py-4 px-0 font-body text-on-surface transition-all placeholder:text-outline-variant"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Password</label>
                  <input 
                    required
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none border-b border-outline-variant/30 focus:border-primary focus:ring-0 py-4 px-0 font-body text-on-surface transition-all placeholder:text-outline-variant"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Confirm</label>
                  <input 
                    required
                    name="confirm_password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none border-b border-outline-variant/30 focus:border-primary focus:ring-0 py-4 px-0 font-body text-on-surface transition-all placeholder:text-outline-variant"
                  />
                </div>
              </div>

              {error && (
                <div className="p-4 bg-error/5 border border-error/20 rounded text-error text-xs font-label uppercase tracking-wider">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-on-surface text-surface py-5 rounded-full font-label text-xs uppercase tracking-[0.2em] transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-on-surface/10 disabled:opacity-50 mt-8"
              >
                {loading ? 'Creating Account...' : 'Continue to the Aura'}
              </button>

              <div className="text-center pt-8 border-t border-outline-variant/10">
                <p className="text-on-surface-variant font-body text-sm">
                  Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link>
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Visual Side */}
        <section className="hidden lg:flex w-1/2 h-screen sticky top-0 items-center justify-center bg-surface-container-low p-20 order-1 lg:order-2">
          <div className="relative w-full max-w-lg aspect-[3/4]">
            <div className="editorial-arch w-full h-full overflow-hidden shadow-2xl relative z-10">
              <img 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" 
                src="https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80" 
                alt="Detailed shot of an artisan's workshop with gold dust and delicate silver wire being formed into a ring" 
              />
            </div>
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
