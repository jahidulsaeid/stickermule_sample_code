import '@/styles/globals.scss';
import { Inter } from 'next/font/google';
import { Providers } from '@/redux/provider';
import AuthCheck from './auth-check';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Giordano - Bangladesh',
  description: 'Best World Brand in Apparel Retailing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AuthCheck>{children}</AuthCheck>
        </Providers>
      </body>
    </html>
  );
}
