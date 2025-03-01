import Link from 'next/link';
import { Facebook, Github, Instagram, Twitter } from 'lucide-react';
import { transformSlug } from '@/lib/utils';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="w-full max-w-screen-2xl mx-auto mt-8 px-4 py-6 sm:px-6 lg:px-12"
      style={{
        background: 'linear-gradient(180deg, rgba(231,232,253,1) 0%, rgba(255,255,255,1) 100%)',
        backgroundColor: 'rgb(231,232,253)',
      }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="space-y-4 md:col-span-3">
          <Link href="/" className="text-2xl font-bold text-custom-purple">
            <Image src="/Synnestra-logo.png" alt="Website Logo" width={170} height={170} />
          </Link>
          <p className="text-sm text-gray-600 max-w-xs">
            Empowering Your Digital Dreams with Innovation and Expertise.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-custom-black-light hover:text-custom-purple">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-custom-black-light hover:text-custom-purple">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-custom-black-light hover:text-custom-purple">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-custom-black-light hover:text-custom-purple">
              <Github size={20} />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-custom-purple mb-4">COMPANY</h3>
          <ul className="space-y-2">
            {['about', 'projects'].map((item) => (
              <li key={item}>
                <Link href={`/${item}`} className="text-sm text-gray-600 hover:text-custom-purple">
                  {transformSlug(item)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-custom-purple mb-4">HELP</h3>
          <ul className="space-y-2">
            {['terms-and-conditions', 'privacy-policy', 'FAQs'].map((item) => (
              <li key={item}>
                <Link href={`/${item}`} className="text-sm text-gray-600 hover:text-custom-purple">
                  {transformSlug(item)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-center text-sm text-custom-black-light">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by Synnestra
        </p>
      </div>
    </footer>
  );
}
