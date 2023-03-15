import Image from 'next/image';
import { Inter } from 'next/font/google';
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <h1 className="text-3xl font-semibold  text-red-500">Just a Page</h1>
            <h1 className="text-blue-500 font-normal text-1xl">Just a Subheading</h1>
            <main>
                <p>and some text here for good measure.</p>
            </main>
        </>
    );
}
