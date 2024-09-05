import Image from 'next/image';

export function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6">

      <div className="flex mb-10">
        <div className="w-24 h-24 bg-white flex items-center justify-center rounded-full">
          <Image
            src="/path/to/your/logo.png"
            alt="CallAll.AI Logo"
            width={50}
            height={50}
          />
        </div>

        <div className="mt-10">
          <span className="border border-time px-6 py-3 rounded-md text-lg">
            Launch 9.21.2024
          </span>
        </div>
      </div>

      <div className="text-left">
        <h1 className="text-5xl font-semibold mb-1">AI Driven.</h1>
        <h1 className="text-5xl font-semibold mb-1">Inbound. Outbound.</h1>
        <p className="text-green-400 text-lg">Because AIs Don’t Make Excuses</p>
      </div>

      
    </div>
  );
}


export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <div className='flex justify-between'>
          <Image
            className="absolute top-5 left-5"
            src="https://callall.ai/images/0fccd9ecc10b8a5caf02ed206ace22aa.png"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <span className="absolute top-10 right-10 border border-time px-6 py-3 rounded-md text-lg">
              Launch 9.21.2024
            </span>
        </div>
        

        <div>
          <h1 className="text-5xl font-semibold mb-1">AI Driven.</h1>
          <h1 className="text-5xl font-semibold mb-1">Inbound. Outbound.</h1>
          <p className="text-green-400 text-lg">Because AIs Don’t Make Excuses</p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Testimonals
        </a>
      </footer>
    </div>
  );
}
