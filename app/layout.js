import TopNav from '@/components/TopNav';
import './globals.css'
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";


export const metadata = {
  title: 'Blogz',
  description: 'A blog about stuff written with Next.js 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" ">
        <TopNav />
        {children}
        </body>
    </html>
  )
}
