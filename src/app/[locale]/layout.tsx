import { routing } from '@/src/i18n/routing';
import Navbar from '../../../components/Navbar'
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import { notFound } from 'next/navigation';

 
type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html>
      <body>
        <NextIntlClientProvider>
        <Navbar /> 
        {children}  
        </NextIntlClientProvider>
      </body>
    </html>
  )
}