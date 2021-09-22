import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen text-white bg-black">
      <Head>
        <title>Next.js Conf Ticket</title>
        <link rel="icon" href="https://www.creative-tim.com/assets/frameworks/icon-nextjs-552cecd0240ba0ae7b5fbf899c1ee10cd66f8c38ea6fe77233fd37ad1cff0dca.png" />
      </Head>
      <div className="flex flex-col items-center justify-center hover:animate-shake">
        <div className="relative z-50 w-20 h-80 -mb-28">
          <Image layout="fill" objectFit="contain" src="/tag.svg" />
        </div>
        <div
          style={{
            background:
              "url(https://res.cloudinary.com/dssvrf9oz/image/upload/v1632305278/bg_zhs6oa.png)",
          }}
          className="w-72  border-4 relative !bg-no-repeat !bg-cover !bg-center border-pink rounded-[40px] overflow-hidden"
        >
          <div className="w-2/5 h-3 mx-auto mt-5 border-2 rounded-full border-pink"></div>
          <div className="p-1">
            <div className="flex items-center gap-5 mt-5 ml-5 ">
              <Image
                width={75}
                height={75}
                className="object-cover w-48 rounded-full"
                src="https://github.com/avneesh0612.png"
                alt=""
              />
              <div className="flex flex-col justify-around">
                <h1 className="text-xl font-bold">Avneesh</h1>
                <h1 className="-mt-2 text-xl font-bold">Agarwal</h1>
                <p className="text-sm ">@avneesh0612</p>
              </div>
            </div>

            <div className="relative h-24 mx-auto w-60">
              <Image
                layout="fill"
                objectFit="contain"
                src="https://raw.githubusercontent.com/gist/avneesh0612/c14a081aabda6b920df747da83919a16/raw/51f06024134c0e26ceb24e1214f511c263a81c82/next.svg"
                alt="next"
              />
            </div>
            <div className="-mt-2">
              <div className="flex flex-col items-center justify-center">
                <p className="text-base font-bold">October 26, 2021</p>
                <p className="text-sm font-medium text-center">
                  9a-1p PT Online
                </p>
              </div>

              <div className="flex items-center px-20 mx-auto mt-10 mb-5">
                <h1 className="text-base font-medium text-center">Hosted by</h1>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 25 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path
                    d="M12.5 0L24.1913 22.5H0.808657L12.5 0Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{
              background:
                "url(https://res.cloudinary.com/dssvrf9oz/image/upload/v1632305277/id-bg_obziaz.png)",
            }}
            className="!bg-cover flex items-center justify-center py-8 -mb-1 text-center relative"
          >
            <span className="font-mono text-4xl font-medium">#001755</span>
          </div>
        </div>
      </div>
    </div>
  );
}
