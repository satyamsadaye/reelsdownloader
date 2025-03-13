'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ServerIcon, ShieldIcon, QualityIcon } from './components/Icons';

// Component definitions first
const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  highlight 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  highlight: string;
}) => (
  <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 group">
    <div className="text-[#0061FE] mb-4 transform group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <span className="inline-block px-3 py-1 bg-blue-50 text-[#0061FE] text-sm font-medium rounded-full">
      {highlight}
    </span>
  </div>
);

const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="text-center">
    <div className="w-12 h-12 bg-[#0061FE]/10 rounded-full flex items-center justify-center text-[#0061FE] font-bold text-xl mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Main component
export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  const handleDownload = async () => {
    setLoading(true);
    try {
      router.push('/download');
    } catch (error) {
      console.error('Download error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Navigation */}
        <nav className="bg-white/70 backdrop-blur-lg border-b border-gray-200/80 fixed w-full top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0061FE] to-blue-600">
                  ReelsDownloader
                </span>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-6">
                <a href="#how-to" className="text-gray-600 hover:text-gray-900 transition-colors">
                  How to Guide
                </a>
                <a 
                  href="#premium" 
                  className="bg-gradient-to-r from-[#0061FE] to-blue-600 text-white px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
                >
                  Premium
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              <a
                href="#how-to"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How to Guide
              </a>
              <a
                href="#premium"
                className="block px-3 py-2 rounded-md text-base font-medium bg-[#0061FE] text-white hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Premium
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 pt-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/50 text-[#0061FE] text-sm font-medium border border-blue-100 shadow-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Fast & Secure Downloads
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Download Instagram Reels{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0061FE] to-blue-600">
                Effortlessly
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Download your favorite Instagram Reels quickly and easily. Save your favorite Reels videos in high quality directly to your device.
            </p>

            {/* Download Form - Updated */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl shadow-gray-200/70 p-8 mb-8 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter Reel URL.."
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white/80 focus:border-[#0061FE] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-lg shadow-sm"
                  />
                </div>
                <button
                  onClick={handleDownload}
                  disabled={loading || !url}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 
                    ${loading || !url 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-[#0061FE] to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]'
                    }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Now
                    </span>
                  )}
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                By using our service you accept our{' '}
                <a href="/terms" className="text-[#0061FE] hover:underline">
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Feature Pills Section - Now outside the hero container */}
        <div className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group hover:scale-[1.02] transition-all duration-300">
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                  <div className="text-[#0061FE] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <ServerIcon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
                  <p className="text-gray-600 mb-4 text-base leading-relaxed">
                    Download your reels instantly with our optimized servers
                  </p>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/50 text-[#0061FE] text-sm font-medium border border-blue-100">
                    Up to 10x faster
                  </span>
                </div>
              </div>

              <div className="group hover:scale-[1.02] transition-all duration-300">
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                  <div className="text-[#0061FE] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <ShieldIcon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Safe & Private</h3>
                  <p className="text-gray-600 mb-4 text-base leading-relaxed">
                    Your data is safe and we don't store any personal information
                  </p>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/50 text-[#0061FE] text-sm font-medium border border-blue-100">
                    HTTPS Secured
                  </span>
                </div>
              </div>

              <div className="group hover:scale-[1.02] transition-all duration-300">
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                  <div className="text-[#0061FE] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <QualityIcon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">HD Quality</h3>
                  <p className="text-gray-600 mb-4 text-base leading-relaxed">
                    Get the highest quality version available
                  </p>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/50 text-[#0061FE] text-sm font-medium border border-blue-100">
                    4K Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section - Full Width */}
        <div className="w-full bg-[#F7F5F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-8">
              <p className="text-gray-700 leading-relaxed text-lg font-[450] tracking-wide">
                In today's digital age, social media platforms like{' '}
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#0061FE] hover:underline font-medium"
                >
                  Instagram
                </a>{' '}
                have become a hub for creativity and entertainment. Among its many features, Instagram Reels stands out as a popular way for users to share short, engaging videos. However, Instagram does not provide a direct way to download these reels for offline viewing or sharing outside the app. This is where our Reels Downloader tool comes into play.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg font-[450] tracking-wide">
                Our Reels Downloader is a user-friendly tool designed to help you download
                Instagram Reels effortlessly. With just a few clicks, you can save your favorite
                reels directly to your device, allowing you to enjoy them anytime, anywhere,
                without the need for an internet connection. Whether you're a content creator
                looking to save your work, a marketer gathering inspiration, or simply a fan of
                entertaining videos, our tool caters to all your needs.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg font-[450] tracking-wide">
                Key features of our Reels Downloader include high-speed downloads, support for
                multiple video formats, and compatibility with various devices. The tool is
                designed with simplicity in mind, ensuring that even those with minimal technical
                skills can use it with ease. Additionally, we prioritize user privacy and
                security, ensuring that your data remains safe throughout the download process.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg font-[450] tracking-wide">
                By using our Reels Downloader, you can build your personal collection of
                Instagram Reels, share them with friends, or use them for educational and
                creative purposes. Experience the convenience and efficiency of our tool today
                and never miss out on your favorite Instagram content again.
              </p>
            </div>
          </div>
        </div>

        {/* Updated FAQ Section */}
        <div className="w-full bg-white">
          <div className="max-w-3xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <FaqItem
                question="Is the Reels Downloader tool free to use?"
                answer="Yes, our Reels Downloader tool is completely free to use. There are no hidden charges or subscription fees. You can download as many Reels as you like without any cost."
              />
              <FaqItem
                question="Can I download Reels from private Instagram accounts?"
                answer="No, our tool respects user privacy and can only download Reels from public Instagram accounts. If a Reel is from a private account, you will not be able to download it using our tool."
              />
              <FaqItem
                question="What devices are compatible with the Reels Downloader?"
                answer="Our Reels Downloader is compatible with a wide range of devices, including smartphones, tablets, and computers. Whether you're using an Android, iOS, Windows, or Mac device, you can easily access and use our tool through a web browser."
              />
              <FaqItem
                question="In what format are the downloaded Reels saved?"
                answer="The downloaded Reels are typically saved in MP4 format, which is widely supported across various devices and media players. This ensures that you can easily view and share the downloaded content."
              />
              <FaqItem
                question="Is it legal to download Instagram Reels?"
                answer="Downloading Instagram Reels for personal use is generally considered legal. However, it is important to respect copyright laws and the intellectual property rights of content creators. Always seek permission if you intend to use the downloaded content for commercial purposes."
              />
              <FaqItem
                question="How can I ensure the safety of my data while using the Reels Downloader?"
                answer="We prioritize user privacy and security. Our website uses secure connections (HTTPS) to protect your data during the download process. We do not store any personal information or download history."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <a href="/privacy" className="text-gray-600 hover:text-[#0061FE] transition-colors">
                Privacy Policy
              </a>
              <a href="/contact" className="text-gray-600 hover:text-[#0061FE] transition-colors">
                Contact
              </a>
            </div>
            <p className="text-gray-600">
              © 2025 Reels Downloader. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}