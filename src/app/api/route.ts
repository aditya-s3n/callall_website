import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Securely use the API key
});

export async function POST(request: Request) {
    const response = await request.json()
    const message = response.message

    try {
      const stream = await openai.beta.threads.createAndRun({
        assistant_id: 'asst_KALTCQrKd5aKMv9LLVgoyJF5',
        thread: {
          messages: [
            { role: 'user', content: message },
          ],
        },
        stream: true,
      });

      let ai_message = '';
      for await (const event of stream) {
        if (event.event === 'thread.message.delta' && event.data.delta.content !== undefined) {
          const content_arr = event.data.delta.content;
          for (const content of content_arr) {
            if ('text' in content) {
              ai_message += content.text?.value;
            }
          }
        }
      }

      return Response.json({ message: ai_message });
    } catch (error) {
      console.error('Error communicating with OpenAI:', error);
      return Response.json({ error: 'Failed to communicate with OpenAI.' });
    }
}
