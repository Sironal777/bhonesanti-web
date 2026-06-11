import localFont from 'next/font/local';
import './globals.css';

const burma015 = localFont({ src: './fonts/Burma015-Regular.ttf', variable: '--font-title-main' });
const burma010 = localFont({ src: './fonts/Burma010-Bold(3).ttf', variable: '--font-title-sub' });
const z09 = localFont({ src: './fonts/Z09-LatYaySat-Regular.ttf', variable: '--font-note' });
const mmHandwriting = localFont({ src: './fonts/Uni-Burmese Handwriting 01_Style 01_Regular.ttf', variable: '--font-reading' });
const aka02 = localFont({ src: './fonts/Aka02-Regular.ttf', variable: '--font-warning' });

export const metadata = {
  title: 'Bhone Santi - ဘုန်းသန္တိ',
  description: 'Personal and Professional Space',
};

export default function RootLayout({ children }) {
  return (
    <html lang="my">
      <body className={`${burma015.variable} ${burma010.variable} ${z09.variable} ${mmHandwriting.variable} ${aka02.variable}`}>
        {children}
      </body>
    </html>
  );
}