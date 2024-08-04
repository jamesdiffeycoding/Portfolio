"use client"
import useFetchData from "../useFetchData";  // Adjust the path as needed
import Link from "next/link";

export default function Card({name, description, fetchStatus, features, url}) {
  
    return (
        <>
        <Link href={url} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
                <div className="p-2 mt-4 mb-4 w-[250px] bg-white bg-opacity-10 hover:bg-black hover:bg-opacity-50 hover:transition-all rounded-xl text-white">
                    <div className="flex justify-between">
                        <h2 className="font-bold"> {name} </h2>
                        <div>
                                {fetchStatus == "success" ? <div className="animate-wiggle w-6 h-6 bg-cover" style={{backgroundImage: "url('../loaded.png')" }}></div> : <div className="animate-spin-slow w-6 h-6 bg-cover" style={{backgroundImage: "url('../loading.png')" }}></div>}
                        </div>
                    </div>
                    <div className="text-[10px]">
                        <p> {description}</p>
                    </div>
                    <ol className="text-[10px]">
                        {features.map((feature, index) => {
                            return (
                                <li key={index} className="m-[1px] ml-4 mb-0 list-disc">{feature}</li>
                            )
                        })}
                    </ol>
                </div>
            </a>
        </Link>
        </>
    )
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