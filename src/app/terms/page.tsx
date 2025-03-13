'use client';
import React from 'react';
import Link from 'next/link';

const TermsPage = () => {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using ReelsDownloader, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
            <p className="leading-relaxed">
              ReelsDownloader provides a service that allows users to download Instagram Reels for personal use. Our service is provided "as is" and is subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <div className="space-y-4">
              <p className="leading-relaxed">
                When using ReelsDownloader, you agree to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Use the service for personal, non-commercial purposes only</li>
                <li>Respect intellectual property rights and copyright laws</li>
                <li>Not use the service to download unauthorized or illegal content</li>
                <li>Not attempt to manipulate or abuse the service</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="leading-relaxed">
              Users must ensure they have the right to download and use the content. ReelsDownloader does not claim ownership of any downloaded content. All trademarks, service marks, and logos are the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Limitations of Liability</h2>
            <p className="leading-relaxed">
              ReelsDownloader shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our service. We make no warranties regarding the reliability, availability, or performance of the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Service Modifications</h2>
            <p className="leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any part of our service at any time without prior notice. We may also update these terms periodically, and continued use of the service constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Governing Law</h2>
            <p className="leading-relaxed">
              These terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="leading-relaxed">
              For any questions regarding these Terms of Service, please contact us through our{' '}
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

export default TermsPage; 