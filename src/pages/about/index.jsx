import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Card } from "../../components/Card/Card";
import useCounter from "@/hooks/useCounter";

const inter = Inter({ subsets: ["latin"] });
const mainStyle = `min-h-screen  p-16 ${inter.className}`;

export default function Home() {
  const { number, array, handleAdd } = useCounter();
  return (
    <main className={mainStyle}>
      <Header />
      <h1 className="text-3xl mb-10">Aboutページ</h1>
      <div className="mb-10">
        <button
          className="border p-1"
          onClick={() => {
            handleAdd();
          }}
        >
          ArrayButton
        </button>
        <ul>
          {array.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Card
        title="ABOUTページ"
        bg="bg-yellow-500"
        text="テキストが入ります。テキストが入ります。テキストが入ります。"
      />
      <Footer />
    </main>
  );
}
