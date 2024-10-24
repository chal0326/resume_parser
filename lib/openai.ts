import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export type ParsedResume = {
  jobs: {
    job_title: string;
    company: string;
    start_date: string;
    end_date: string;
    description: string[];
  }[];
  skills: string[];
  certifications: string[];
  awards: string[];
};

export async function parseResume(text: string): Promise<ParsedResume> {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "system",
        content: "You are a professional resume parser. Extract and structure the following information from the resume text: work history (including job title, company, dates, and description points), skills, certifications, and awards. Return the data in a strict JSON format."
      },
      {
        role: "user",
        content: text
      }
    ],
    response_format: { type: "json_object" },
    temperature: 0.3,
  });

  const content = response.choices[0].message.content;
  if (!content) {
    throw new Error("Response content is null or undefined");
  }
  return JSON.parse(content) as ParsedResume;
}
