'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [send, setSend] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;

  const createFeedback = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({ name: '', email: '', message: '' });

    if (send.name === '') {
      setError({
        ...error,
        name: 'name is required',
      });
      setLoading(false);
      return;
    }
    if (!emailRegex.test(send.email)) {
      setError({
        ...error,
        email: 'email is invalid',
      });
      setLoading(false);
      return;
    }
    if (send.message.length < 10) {
      setError({
        ...error,
        message: 'the message must contain at least 10 characters',
      });
      setLoading(false);
      return;
    }

    try {
      await fetch('/api/feedbacks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: send.name,
          email: send.email,
          message: send.message,
        }),
      });
      alert('Feedback submitted successfully!');

      router.push('/listfeedbacks');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setSend({ name: '', email: '', message: '' });
    }
  };

  console.log('errornya', error.name);
  console.log('send nya', send.name);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-50">
      <form
        onSubmit={createFeedback}
        className="flex flex-col w-full h-full gap-3 px-5 py-8 bg-white border shadow-lg sm:max-w-lg rounded-xl sm:h-fit"
      >
        <div className="flex flex-col items-center gap-3.5">
          <Image src="/logoipsum.svg" alt="Logo ipsum" width={50} height={50} />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-blue-500">
              Feedback Client
            </h1>
            <p className="text-xs text-slate-500">
              Your feedback means a lot to us
            </p>
          </div>
        </div>

        <div className="flex flex-col text-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">
              Name <span className="text-base font-bold text-red-500">*</span>
            </h2>
            {error.name !== '' && send.name === '' && (
              <p className="text-xs text-red-500">{error.name}</p>
            )}
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            value={send.name}
            onChange={(e) => setSend({ ...send, name: e.target.value })}
            className="py-1.5 px-2.5 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col text-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">
              Email <span className="text-base font-bold text-red-500">*</span>
            </h2>
            {!emailRegex.test(send.email) && (
              <p className="text-xs text-red-500">{error.email}</p>
            )}
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            value={send.email}
            onChange={(e) => setSend({ ...send, email: e.target.value })}
            className="py-1.5 px-2.5 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col text-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">
              Message{' '}
              <span className="text-base font-bold text-red-500">*</span>
            </h2>
            {send.message.length < 10 && (
              <p className="text-xs text-red-500">{error.message}</p>
            )}
          </div>
          <textarea
            type="text"
            placeholder="Enter your message"
            value={send.message}
            rows={4}
            onChange={(e) => setSend({ ...send, message: e.target.value })}
            className="py-1.5 px-2.5 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 my-2 text-white border rounded-lg bg-gradient-to-r from-blue-500 to-blue-200 hover:scale-[1.01]"
        >
          {loading ? 'Loading...' : 'Send'}
        </button>

        <p className="text-xs text-center text-slate-500">
          Thank you for your{' '}
          <Link href={'/listfeedbacks'} className="text-blue-500 underline">
            feedbacks
          </Link>
        </p>
      </form>
    </div>
  );
}
