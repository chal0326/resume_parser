'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { ParsedResume } from '@/lib/openai';
import { ParsedResumeDisplay } from './ParsedResumeDisplay';
import { toast } from 'sonner';

export function ResumeParser() {
  const [resume, setResume] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [parsedData, setParsedData] = useState<ParsedResume | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: resume }),
      });

      if (!response.ok) {
        throw new Error('Failed to parse resume');
      }

      const data = await response.json();
      setParsedData(data);
      toast.success('Resume parsed successfully!');
    } catch (error) {
      toast.error('Failed to parse resume. Please try again.');
      console.error('Error parsing resume:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      
        <form onSubmit={handleSubmit}>
          <textarea
            className="glass-input min-h-[200px]"
            placeholder="Paste your resume text here..."
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          />
          <button
            type="submit"
            disabled={isLoading || !resume}
            className="glass-button mt-4 flex items-center gap-2"
          >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            {isLoading ? 'Parsing...' : 'Parse Resume'}
          </button>
        </form>

      {parsedData && <ParsedResumeDisplay data={parsedData} />}
    </div>
  );
}