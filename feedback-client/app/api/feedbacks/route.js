import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const feedbacks = await prisma.feedback.findMany();
    return new Response(JSON.stringify(feedbacks), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch feedbacks', { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    const feedback = await prisma.feedback.create({
      data: { name, email, message },
    });
    return new Response(JSON.stringify(feedback), { status: 201 });
  } catch (error) {
    return new Response('Failed to create feedback', { status: 500 });
  }
}
