import { ParsedResume } from '@/lib/openai';
import { motion } from 'framer-motion';
import { Badge } from '@nextui-org/react';

export function ParsedResumeDisplay({ data }: { data: ParsedResume }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="glass-card">
        <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
        <div className="space-y-6">
          {data.jobs.map((job, index) => (
            <div key={index} className="glass p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">{job.job_title}</h4>
                  <p className="text-sm text-gray-300">{job.company}</p>
                </div>
                <span className="text-sm text-gray-300">
                  {job.start_date} - {job.end_date}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <Badge key={index} color="primary" variant="flat">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {data.certifications.length > 0 && (
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <ul className="space-y-2">
            {data.certifications.map((cert, index) => (
              <li key={index} className="glass p-3 rounded-lg">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.awards.length > 0 && (
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-4">Awards</h3>
          <ul className="space-y-2">
            {data.awards.map((award, index) => (
              <li key={index} className="glass p-3 rounded-lg">
                {award}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}