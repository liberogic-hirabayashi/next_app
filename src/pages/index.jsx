import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Card } from "@/components/Card/Card";
import Timer from "@/components/Timer/Timer";
import useCounter from "@/hooks/useCounter";
import Counter from "@/components/Counter/Counter";

const inter = Inter({ subsets: ["latin"] });
const mainStyle = `min-h-screen  p-16 ${inter.className}`;
const bg = { red: "bg-red-500", blue: "bg-blue-500", green: "bg-green-500" };

export default function Home(props) {
  const { number, array, handleAdd } = useCounter();
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  const countUp = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  const show = () => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }

    console.log(isShow);
  };

  const changeText = (e) => {
    setText(e.target.value);
  };

  const add = () => {
    if (text !== "") {
      setTodos([...todos, text]);
      setText("");
      console.log(todos);
    }
  };

  return (
    <main className={mainStyle}>
      <Header />
      <h1 className="text-3xl mb-10">Topページ</h1>
      <Timer />
      <div className="mb-10 mt-10">
        <p>{items}</p>
        <button
          className="border p-1"
          onClick={() => {
            handleReduce();
          }}
        >
          Reduce Button
        </button>
      </div>
      <div className="mb-10">
        <div className="flex items-center ">
          <input
            className="text-black p-1"
            type="text"
            value={text}
            placeholder="入力してください"
            onChange={changeText}
          />
          <button
            className="border p-1 ml-1"
            onClick={() => {
              add();
            }}
          >
            Add
          </button>
        </div>
        <ul className="mt-4 list-disc pl-4">
          {todos.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex items-center mb-10">
        <button
          className="border p-1"
          onClick={() => {
            show();
          }}
        >
          ToggleButton
        </button>
        <p className="ml-4">{isShow ? "表示" : "非表示"}</p>
      </div>
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

      <div className="flex gap-10">
        <Card
          title="タイトルA"
          bg={bg.red}
          text="テキストが入ります。テキストが入ります。テキストが入ります。"
        />
        <Card
          title="タイトルB"
          bg={bg.blue}
          text="テキストが入ります。テキストが入ります。テキストが入ります。"
        />
        <Card
          title="タイトルC"
          bg={bg.green}
          text="テキストが入ります。テキストが入ります。テキストが入ります。"
        />
      </div>
      <div className="flex mt-10">
        <Counter
          count={count}
          countUp={() => {
            countUp();
          }}
        />
        <Counter
          count={count}
          countUp={() => {
            countUp();
          }}
        />
      </div>
      <Footer />
    </main>
  );
}
