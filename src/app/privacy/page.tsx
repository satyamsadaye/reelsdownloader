'use client';
import React from 'react';
import Link from 'next/link';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-semibold text-[#0061FE]">
            ReelsDownloader
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12 pt-24">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <div className="space-y-4">
              <p className="leading-relaxed">
                We collect minimal information necessary to provide our service:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Instagram Reel URLs that you provide for downloading</li>
                <li>Basic usage statistics to improve our service</li>
                <li>Temporary technical data required for downloads</li>
              </ul>
              <p className="leading-relaxed">
                We do not collect or store any personal information, download history, or user credentials.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed">
              The URL you provide is used solely for the purpose of downloading the requested content. We do not:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Store your download history</li>
              <li>Track your usage patterns</li>
              <li>Share any information with third parties</li>
              <li>Use your data for marketing purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Data Security</h2>
            <p className="leading-relaxed">
              We prioritize the security of your data through:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>HTTPS encryption for all data transmission</li>
              <li>Secure server infrastructure</li>
              <li>Regular security updates and monitoring</li>
              <li>Immediate data deletion after download completion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Cookies and Tracking</h2>
            <p className="leading-relaxed">
              We use only essential cookies necessary for the website's functionality. We do not use:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Tracking cookies</li>
              <li>Advertising cookies</li>
              <li>Third-party analytics</li>
              <li>User profiling tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Third-Party Services</h2>
            <p className="leading-relaxed">
              Our service is self-contained and does not share information with third parties. We do not integrate with advertising networks, analytics services, or other tracking systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. User Rights</h2>
            <p className="leading-relaxed">
              Since we don't store personal data, there's typically no user data to manage. However, you have the right to:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Request information about our data practices</li>
              <li>Opt out of any future communications</li>
              <li>Report privacy concerns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about our Privacy Policy, please contact us through our{' '}
              <Link href="/contact" className="text-[#0061FE] hover:underline">
                contact page
              </Link>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            Last updated: February 14, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage; 