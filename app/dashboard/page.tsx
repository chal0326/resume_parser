import { Navbar } from '@/components/Navbar';
import { ResumeParser } from '@/components/ResumeParser';
import { Clock, FileText, CheckCircle } from 'lucide-react';

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Recent Parses</h3>
                  <p className="text-sm text-gray-300">5 resumes this week</p>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-purple-400" />
                <div>
                  <h3 className="font-semibold">Total Resumes</h3>
                  <p className="text-sm text-gray-300">12 processed</p>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="font-semibold">Success Rate</h3>
                  <p className="text-sm text-gray-300">98% accuracy</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <h2 className="text-2xl font-bold mb-6">Parse New Resume</h2>
            <ResumeParser />
          </div>
        </div>
      </main>
    </>
  );
}