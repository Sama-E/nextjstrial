import './globals.css';
import { Inter, Roboto, Poppins } from 'next/font/google';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';


const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'] , weight:'400' });
const poppins = Poppins({ subsets: ['latin'] , weight:'200' });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <div className="container">
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      
    </html>
  )
}
