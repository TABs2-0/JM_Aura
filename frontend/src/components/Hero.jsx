import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center pt-24 pb-20 px-12 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-12 gap-8 items-end w-full">
        <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0 z-10">
          <p className="font-label tracking-[0.2em] uppercase text-xs text-primary mb-6">Atelier Since 1992</p>
          <h1 className="font-headline text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] text-on-surface mb-8">
            Wearable <span className="italic font-light">Poetry</span>
          </h1>
          <p className="max-w-md text-lg text-on-surface-variant font-light leading-relaxed mb-10">
            Hand-sculpted in our heritage atelier, each piece is a celebration of organic forms and the quiet strength of precious metals.
          </p>
          <div className="flex gap-4">
            <Link to="/collections" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-full font-label text-xs tracking-widest uppercase hover:opacity-90 transition-all">
              Explore Collection
            </Link>
            <Link to="/about" className="px-10 py-4 rounded-full border border-outline-variant/40 font-label text-xs tracking-widest uppercase hover:bg-surface-container-low transition-all">
              Our Story
            </Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 relative">
          <div className="grid grid-cols-2 gap-6 items-end">
            <div className="editorial-arch overflow-hidden aspect-[3/4] shadow-2xl">
              <img className="w-full h-full object-cover" alt="Close-up of a sophisticated woman wearing layered gold necklaces and minimal earrings in soft morning sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTTPkhENTqPeP-guPbUdibufvk2VnMa_344uAaxRuC-mC3vRmV3JeKOu_LUujGT7Az-aWcI5CkjMBvrMFZLkJpk4LrH88M37KDiEUdvXsUHOjx65_MPgHl7uMg7vGs3lweYXp8HJbUVMSSsBhS6FjyoNleDgsOjc0r_KbiQaS6xuxTEDYRMKMrdZY0JIXWLNM9QrGNCRvGmMLkGB82S3ytk6fVZXo0Hmp-Yp3YOaoLWWZL9nEkO8F_w1qgeIOtPMHBQV4BoSapRqI" />
            </div>
            <div className="editorial-arch overflow-hidden aspect-[4/5] scale-90 -translate-y-12">
              <img className="w-full h-full object-cover" alt="Artistic macro shot of a gold ring being carefully polished by hand in a sunlit artisan workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn71WUJq0ZOUNANduOeh9RqO7371210m7omGm-O6lbJfcP_A0FynFQAAV-LQcgyPduhpf7IIHvgl4I4aBA0eltBCrWleH3sYRb3mLR3UwD-wvsQU1X63trr4eY4GZ2uuStxB7Nl8wRfg-1DHneR_dOtiLGbpYPTCRZ9ys6TZce0zPG3r79yMausIcqmiwJkdbvYcxyMOU89w-z43T-QtctvItPKXd-3REBNlYd39M-zlGYymcE_afudso6W0qhbIcEUz-bqNKEj5k" />
            </div>
          </div>
          {/* Editorial Accent */}
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden xl:block">
            <span className="text-vertical text-xs tracking-[0.5em] uppercase text-outline font-label">Aura Collection № 04</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
