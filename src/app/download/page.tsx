'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const DownloadPage = () => {
  const [selectedQuality, setSelectedQuality] = useState('');
  const [downloading, setDownloading] = useState(false);
  
  // Mock data - replace with actual data from your API
  const reelData = {
    title: "Summer Vibes Reel",
    thumbnail: "/reel-thumbnail.jpg", // Add a default thumbnail in public folder
    author: "@travelgram",
    duration: "0:30",
    qualities: [
      { label: "HD (1080p)", size: "12.5 MB", quality: "1080p" },
      { label: "SD (720p)", size: "8.2 MB", quality: "720p" },
      { label: "Low (480p)", size: "4.1 MB", quality: "480p" }
    ]
  };

  const handleQualitySelect = (quality: string) => {
    setSelectedQuality(quality);
  };

  const handleDownload = async () => {
    if (!selectedQuality) return;
    
    setDownloading(true);
    try {
      // Simulate download delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Add actual download logic here
      console.log(`Downloading ${selectedQuality} quality video`);
      
      // Simulate successful download
      alert('Download completed successfully!');
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] pt-20">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Video Info */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{reelData.title}</h1>
            <span className="text-gray-500">{reelData.author}</span>
          </div>

          {/* Thumbnail with Play Icon */}
          <div className="relative w-full aspect-[9/16] mb-8 rounded-lg overflow-hidden bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 px-2 py-1 rounded bg-black/50 text-white text-sm">
              {reelData.duration}
            </div>
          </div>

          {/* Quality Selection */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Select Quality
            </h2>
            <div className="grid gap-3">
              {reelData.qualities.map((quality) => (
                <button
                  key={quality.quality}
                  onClick={() => handleQualitySelect(quality.quality)}
                  className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all
                    ${selectedQuality === quality.quality 
                      ? 'border-[#0061FE] bg-blue-50' 
                      : 'border-gray-200 hover:border-[#0061FE]'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900">{quality.label}</span>
                    <span className="text-sm text-gray-500">({quality.size})</span>
                  </div>
                  {selectedQuality === quality.quality && (
                    <svg className="w-5 h-5 text-[#0061FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            disabled={!selectedQuality || downloading}
            className={`w-full mt-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2
              ${!selectedQuality || downloading
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-[#0061FE] text-white hover:bg-blue-700'
              }`}
          >
            {downloading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Reel
              </>
            )}
          </button>

          {/* Download Tips */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Download Tips:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• HD quality provides the best viewing experience</li>
              <li>• Lower quality options are ideal for saving storage space</li>
              <li>• Downloads are for personal use only</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage; 