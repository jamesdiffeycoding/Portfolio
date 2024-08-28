"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Card({ name, description, features, url }) {
  const [fetchStatus, setFetchStatus] = useState(null);
  async function checkUrl(url) {
    try {
      const response = await fetch(
        `/api/check-url?url=${encodeURIComponent(url)}`
      );
      const data = await response.json();
      return data.valid; // true or false based on the API response
    } catch (error) {
      console.error("Error in checkUrl:", error);
      return false; // In case of network errors or other issues, return false
    }
  }

  useEffect(() => {
    const fetchStatus = async (url) => {
      const status = await checkUrl(url);
      setFetchStatus(status);
    };
    fetchStatus(url);
  }, []);

  return (
    <>
      <Link href={url} passHref legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <div className="p-2 mt-4 mb-4 w-[250px] bg-black bg-opacity-30 duration-500 hover:bg-opacity-60 rounded-xl text-white">
            <div className="flex justify-between">
              <h2 className="font-bold"> {name} </h2>
              <div>
                {fetchStatus ? (
                  <div
                    className="animate-wiggle w-6 h-6 bg-cover"
                    style={{ backgroundImage: "url('../loaded.png')" }}
                  ></div>
                ) : (
                  <div
                    className="animate-spin-slow w-6 h-6 bg-cover"
                    style={{ backgroundImage: "url('../loading.png')" }}
                  ></div>
                )}
              </div>
            </div>
            <div className="text-[10px]">
              <p> {description}</p>
            </div>
            <ol className="text-[10px]">
              {features.map((feature, index) => {
                return (
                  <li key={index} className="m-[1px] ml-4 mb-0 list-disc">
                    {feature}
                  </li>
                );
              })}
            </ol>
          </div>
        </a>
      </Link>
    </>
  );
}

///* Small screen iPhone SE type devices can't fit much on the screen. */
// @media only screen and (min-width: 400px) and (min-height: 840px) {
//     .lilypad-and-water-background {
//       height: 100vh;
//       position: absolute
//     }

//     .lilypad-overlay {
//       height: 100vh;
//       position: absolute
//     }
//   }
