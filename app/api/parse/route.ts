import { NextResponse } from 'next/server';
import { parseResume } from '@/lib/openai';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/lib/supabase/types';

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient<Database>({ cookies });
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { text } = await request.json();

    if (!text) {
      return NextResponse.json({ error: 'No resume text provided' }, { status: 400 });
    }

    const parsedResume = await parseResume(text);

    // Start a transaction by creating the resume entry first
    const { data: resumeData, error: resumeError } = await supabase
      .from('parsed_resumes')
      .insert({
        user_id: session.user.id,
      })
      .select()
      .single();

    if (resumeError) throw resumeError;

    // Insert work experiences and their descriptions
    for (const job of parsedResume.jobs) {
      const { data: workExp, error: workError } = await supabase
        .from('work_experiences')
        .insert({
          resume_id: resumeData.id,
          job_title: job.job_title,
          company: job.company,
          start_date: job.start_date,
          end_date: job.end_date,
        })
        .select()
        .single();

      if (workError) throw workError;

      // Insert job descriptions
      for (const desc of job.description) {
        const { error: descError } = await supabase
          .from('job_descriptions')
          .insert({
            work_experience_id: workExp.id,
            description: desc,
          });

        if (descError) throw descError;
      }
    }

    // Insert skills
    for (const skill of parsedResume.skills) {
      const { error: skillError } = await supabase
        .from('skills')
        .insert({
          resume_id: resumeData.id,
          skill: skill,
        });

      if (skillError) throw skillError;
    }

    // Insert certifications
    for (const cert of parsedResume.certifications) {
      const { error: certError } = await supabase
        .from('certifications')
        .insert({
          resume_id: resumeData.id,
          certification: cert,
        });

      if (certError) throw certError;
    }

    // Insert awards
    for (const award of parsedResume.awards) {
      const { error: awardError } = await supabase
        .from('awards')
        .insert({
          resume_id: resumeData.id,
          award: award,
        });

      if (awardError) throw awardError;
    }

    return NextResponse.json(parsedResume);
  } catch (error: any) {
    console.error('Resume parsing error:', error);
    return NextResponse.json(
      { error: 'Failed to parse resume' },
      { status: 500 }
    );
  }
}