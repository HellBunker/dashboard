import '@/app/ui/global.css';
import Inter from '@/app/ui/acme-logo'
import { inter } from './ui/font';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className= {`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
