import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'antialiased'}>
        <div className="text-xl mb-5">
          <Link href={'/'} className="mr-5">
            홈
          </Link>
          <Link href={'/champions'} className="mr-5">
            챔피언 목록
          </Link>
          <Link href={'/items'} className="mr-5">
            아이템 목록
          </Link>
          <Link href={'/rotation'} className="mr-5">
            로테이션 정보 페이지
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
