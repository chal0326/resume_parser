import { ResumeParser } from '@/components/ResumeParser';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="glass-card text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            AI Resume Parser
          </h1>
          <p className="text-gray-300">
            Transform your resume into structured data with our AI-powered parser
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold">Work Experience</h2>
            </div>
            <p className="text-gray-300">
              Extract detailed work history with job titles, companies, and dates
            </p>
          </div>

          <div className="glass-card">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-purple-400" />
              <h2 className="text-xl font-semibold">Skills & Certifications</h2>
            </div>
            <p className="text-gray-300">
              Identify key skills and professional certifications
            </p>
          </div>

          <div className="glass-card">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-pink-400" />
              <h2 className="text-xl font-semibold">Awards & Achievements</h2>
            </div>
            <p className="text-gray-300">
              Highlight your accomplishments and recognition
            </p>
          </div>
        </div>

        <ResumeParser />
      </div>
    </main>
  );
}