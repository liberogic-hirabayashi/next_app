import Image from "next/image";
import { Inter } from "next/font/google";
import {Header} from "@/components/Header/Header"
import {Footer} from "@/components/Footer/Footer"
import { Card } from "@/components/Card/Card";
import Timer from "@/components/Timer/Timer";

const inter = Inter({ subsets: ["latin"] });
const mainStyle =`flex min-h-screen flex-col items-center   justify-between p-24 ${inter.className}`
const bg={red:'bg-red-500',blue:'bg-blue-500',green:'bg-green-500'}

export default function Home() {
  return (
    <main
      className={mainStyle}
    >
      <Header/>
      Topページ
      <div className="flex gap-10">
        <Card title="タイトルA" bg={bg.red} text="テキストが入ります。テキストが入ります。テキストが入ります。"/>
        <Card title="タイトルB" bg={bg.blue} text="テキストが入ります。テキストが入ります。テキストが入ります。"/>
        <Card title="タイトルC" bg={bg.green} text="テキストが入ります。テキストが入ります。テキストが入ります。"/>
        </div>
        <Timer/>
      <Footer/>
    </main>
  )
}
