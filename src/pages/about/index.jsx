import Image from "next/image";
import { Inter } from "next/font/google";
import {Header} from"../../components/Header/Header"
import {Footer} from"../../components/Footer/Footer"
import {Card} from '../../components/Card/Card'

const inter = Inter({ subsets: ["latin"] });
const mainStyle =`flex min-h-screen flex-col items-center   justify-between p-24 ${inter.className}`


export default function Home() {
  return (
    <main
    className={mainStyle}
  >
    <Header/>
   Aboutページ
      <Card title="タイトル" bg='bg-yellow-500' text="テキストが入ります。テキストが入ります。テキストが入ります。"/>
    <Footer/>
  </main>
  );
}
