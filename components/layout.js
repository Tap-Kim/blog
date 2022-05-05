import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PROFILE_IMG_URL } from "../enums/profile";
const name = "Taehyun Kim";
export const siteTitle = "Tap-Kim's Develop Life";

function Layout({ children, home }) {
  return (
    <div className="maxw-36rem px-0 py-4 ml-12 my-auto mr-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Next.js 연습용 이력서 페이지입니다."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src={PROFILE_IMG_URL}
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />
          <h1 className="text-3xl font-extrabold tracking-tighter my-3">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src={PROFILE_IMG_URL}
                  className="rounded-full"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-4xl leading-normal mx-4 my-0">
                <Link href="/">
                    <a className="text-inherit">{name}</a>
                </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {
          !home && (
              <div className="mt-12 ">
                  <Link href="/">
                      <a>← Back to home</a>
                  </Link>
              </div>
          )
      }
    </div>
  );
}

export default Layout;
