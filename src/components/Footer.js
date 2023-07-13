import React from "react";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { quickLinks, quickLinks2, siteLinksfooter } from "../utils";
import appStore from "../img/app-store.png";
import googlePlay from "../img/googlePlay.png";

const Footer = () => {
  return (
    <footer className="pt-[75px] bg-global-color-6 ">
      <div className="max-w-[1200px] mx-auto text-white px-5 pb-[50px]">
        <div className="grid sm:grid-cols-4 sm:justify-items-start justify-items-center sm:text-left text-center">
          <div className="w-[70%] sm:col-span-2 ">
            <aside className="">
              <section className="mb-[50px]">
                <a href="/" className="text-4xl ">
                  LOGO
                </a>
              </section>
              <section>
                <p>
                  <strong>
                    <em className="opacity-70">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id neque aspernatur maiores optio saepe. Aut ipsum ipsam,
                      vero accusantium sapiente saepe nobis voluptatem quas fuga
                      consequuntur a corporis nulla. Modi.
                    </em>
                  </strong>
                </p>
              </section>
            </aside>
          </div>
          <div>
            <aside className="mt-5 sm:mt-0">
              <section className="mb-[40px]">
                <h4 className="text-2xl font-semibold">Quick Links</h4>
              </section>
              <section className="mb-[40px]">
                <ul>
                  {quickLinks.map(({ text, url }) => (
                    <li className="mb-1">
                      <a
                        href={url}
                        className=" opacity-70 hover:opacity-100 transition duration-300"
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-[40px]">Site Links</h2>
                <nav className=" ">
                  <ul>
                    {siteLinksfooter.map(({ text, url }) => (
                      <li className="mb-1">
                        <a
                          href={url}
                          className=" opacity-70 hover:opacity-100 transition duration-300"
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </section>
            </aside>
          </div>
          <div>
            <aside className="mt-5 sm:mt-0">
              <section className="mb-[40px]">
                <h2 className="text-2xl font-semibold mb-[40px]">
                  Download Our Mobile App
                </h2>
                <div>
                  <p className="opacity-70">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dignissimos fugiat cumque eius in fugit harum voluptatem,
                    esse iste quis consectetur laudantium porro temporibus
                    aspernatur omnis est dolorem culpa, illum ipsa.
                  </p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-[40px]">
                  Quick Links
                </h2>
                <nav className=" ">
                  <ul>
                    {quickLinks2.map(({ text, url }) => (
                      <li className="mb-1">
                        <a
                          href={url}
                          className=" opacity-100 hover:opacity-70 transition duration-300 text-global-color-0"
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </section>

              <div className="mt-5">
                <section className="flex items-center justify-between gap-6 sm:mx-0 mx-[60px]">
                  <figure className=" sm:w-[70%] ">
                    <div>
                      <img
                        src={googlePlay}
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                  </figure>
                  <figure className="sm:w-[70%] ">
                    <div>
                      <img
                        src={appStore}
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                  </figure>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div className="py-[25px] border-t-[1px] border-gray-700 ">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center px-2 sm:flex-row flex-col">
            <div className="sm:mb-0 mb-5">
              <p className="opacity-70 text-white">
                Copyright © 2023 | Organic Store
              </p>
            </div>
            <div className="flex items-center">
              <a href="/" className="mx-2">
                <BsFacebook color="white" opacity={"0.7"} fontSize={20} />
              </a>
              <a href="/" className="mx-2">
                <AiFillTwitterCircle
                  color="white"
                  opacity={"0.7"}
                  fontSize={25}
                />
              </a>
              <a href="/" className="mx-2">
                <AiOutlineInstagram
                  color="white"
                  opacity={"0.7"}
                  fontSize={25}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
