import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userAPI } from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await userAPI.login(formData);
      localStorage.setItem('token', data.key || data.token || data.access);
      navigate('/profile');
    } catch (err) {
      setError(err.message || 'Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col lg:flex-row pt-24 lg:pt-0">
        {/* Visual Side */}
        <section className="hidden lg:flex w-1/2 h-screen sticky top-0 items-center justify-center bg-surface-container-low p-20">
          <div className="relative w-full max-w-lg aspect-[3/4]">
            <div className="editorial-arch w-full h-full overflow-hidden shadow-2xl relative z-10">
              <img 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" 
                src="https://images.unsplash.com/photo-1515562141207-7a88fb0ce33e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="A pair of elegant gold earrings displayed on a marble plinth with soft morning shadows" 
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </section>

        {/* Form Side */}
        <section className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 min-h-[calc(100vh-6rem)] lg:min-h-screen">
          <div className="w-full max-w-md">
            <header className="mb-12">
              <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">Welcome Back</p>
              <h1 className="font-headline text-5xl md:text-6xl tracking-tight mb-4">Access the <br /><span className="italic">Aura</span></h1>
              <p className="text-on-surface-variant font-light">Signed in members enjoy curated experiences and priority access to new collections.</p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Email or Username</label>
                <input 
                  required
                  name="username"
                  type="text"
                  placeholder="name@example.com"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none border-b border-outline-variant/30 focus:border-primary focus:ring-0 py-4 px-0 font-body text-on-surface transition-all placeholder:text-outline-variant"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Password</label>
                  <button type="button" className="font-label text-[10px] uppercase tracking-widest text-primary hover:opacity-70 transition-opacity">Forgot?</button>
                </div>
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

              {error && (
                <div className="p-4 bg-error/5 border border-error/20 rounded text-error text-xs font-label uppercase tracking-wider">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-on-surface text-surface py-5 rounded-full font-label text-xs uppercase tracking-[0.2em] transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-on-surface/10 disabled:opacity-50"
              >
                {loading ? 'Authenticating...' : 'Sign In'}
              </button>

              <div className="text-center pt-8 border-t border-outline-variant/10">
                <p className="text-on-surface-variant font-body text-sm">
                  New to the Aura? <Link to="/signup" className="text-primary font-bold hover:underline">Create an account</Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
