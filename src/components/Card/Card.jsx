import Image from "next/image";
export function Card({title,text,bg,children}){

    return<>
    <div className={`${bg} p-4 max-w-80`}>
        <h1 className="mb-4 text-lg">{title}</h1>
        <p className="mb-4">{text}</p>

          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
          {children}
          </div>
    </>
}