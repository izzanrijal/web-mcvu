"use client";

import React, { useState, useEffect } from 'react';
import { X, Download, FileText, ChevronRight } from 'lucide-react';

interface BookletFile {
  name: string;
  path: string;
  id: string;
}

const bookletFiles: BookletFile[] = [
  { name: "Booklet Abstract MCVU XXIII 2025", path: "/booklets/BOOKLET ABSTRACT MCVU XXIII 2025.pdf", id: "abstract" },
  { name: "Final Announcement MCVU 2025", path: "/booklets/Final Announcement MCVU 2025.pdf", id: "announcement" },
  { name: "MCVU XXIII 2025 Daily Program Board", path: "/booklets/MCVU XXIII 2025 DAILY PROGRAM BOARD.pdf", id: "program" },
  { name: "Panduan Plataran Sehat MCVU 2025", path: "/booklets/PANDUAN PLATARAN SEHAT MCVU 2025.pdf", id: "panduan" }
];

interface BookletsDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookletsDownloadModal({ isOpen, onClose }: BookletsDownloadModalProps) {
  const [downloadCounts, setDownloadCounts] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Fetch initial download counts from the API
  useEffect(() => {
    if (isOpen) {
      const fetchCounts = async () => {
        try {
          setIsLoading(true);
          const response = await fetch('/api/downloads');
          if (!response.ok) {
            throw new Error('Failed to fetch download counts');
          }
          const data = await response.json();
          setDownloadCounts(data);
        } catch (error) {
          console.error(error);
          // Initialize with zeros on error
          const initialCounts = bookletFiles.reduce((acc, file) => {
            acc[file.id] = 0;
            return acc;
          }, {} as Record<string, number>);
          setDownloadCounts(initialCounts);
        } finally {
          setIsLoading(false);
        }
      };
      fetchCounts();
    }
  }, [isOpen]);

  // Function to handle the download action
  const handleDownload = async (fileId: string, filePath: string) => {
    // Optimistically update the UI
    setDownloadCounts(prevCounts => ({
      ...prevCounts,
      [fileId]: (prevCounts[fileId] || 0) + 1,
    }));

    // Open the file in a new tab
    window.open(filePath, '_blank');

    // Trigger the API call to increment the count on the backend
    try {
      await fetch(`/api/downloads/${fileId}`, { method: 'POST' });
    } catch (error) {
      console.error('Failed to update download count:', error);
      // Revert the optimistic update if the API call fails
      setDownloadCounts(prevCounts => ({
        ...prevCounts,
        [fileId]: (prevCounts[fileId] || 1) - 1,
      }));
    }
  };
  
  // Handle backdrop click to close modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking the backdrop itself, not its children
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-2xl p-0 max-w-2xl w-full mx-auto overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-xl font-bold text-mocha-dark flex items-center gap-2">
            <FileText className="h-5 w-5 text-accent-teal" />
            <span>MCVU Booklets</span>
          </h3>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-center">
            Select a document to download
          </p>
          
          <div className="space-y-2">
            {bookletFiles.map((file, index) => (
              <div 
                key={index}
                className="group rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <div 
                  onClick={(e) => {
                    e.preventDefault();
                    handleDownload(file.id, file.path);
                  }}
                  className="flex items-center justify-between p-4 bg-white border border-gray-100 group-hover:border-accent-teal/30 group-hover:bg-accent-teal/5 transition-all cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-accent-teal/10 rounded mr-3 flex-shrink-0">
                      <FileText className="h-6 w-6 text-accent-teal" />
                    </div>
                    <div>
                      <span className="font-medium text-mocha-dark block">{file.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">PDF Document</span>
                                                <span className="text-xs font-medium py-0.5 px-2 bg-accent-teal/10 text-accent-teal rounded-full">
                          {isLoading ? '...' : (downloadCounts[file.id] || 0)} downloads
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-accent-teal opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download className="h-5 w-5" />
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex justify-end p-4 bg-gray-50 border-t border-gray-100">
          <button
            onClick={onClose}
            className="bg-accent-teal text-white py-2 px-5 rounded-md hover:bg-accent-teal-dark transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
