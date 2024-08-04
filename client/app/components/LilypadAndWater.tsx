"use client"
import $ from 'jquery';
import 'jquery.ripples';
import { useEffect } from "react";
import useFetchData from "../useFetchData"; 
import Overlay from './Overlay';

export default function LilypadAndWater() {
    useEffect(() => {
        $('.custom-ripple-effect').ripples({
          resolution: 600,
          perturbance: 0.001,
          dropRadius: 50,
        });
        // Cleanup to destroy the ripple effect on unmount
    return () => {
      $('.custom-ripple-effect').ripples('destroy');
    };
  }, []);

    const ruby = useFetchData("http://127.0.0.1:8080/api/ruby");
    const awesun = useFetchData("http://127.0.0.1:8080/api/awesun");
    const shelter = useFetchData("http://127.0.0.1:8080/api/shelter");
    const mathemagical = useFetchData("http://127.0.0.1:8080/api/mathemagical");
    const quizzer = useFetchData("http://127.0.0.1:8080/api/quizzer");


    return ( // LILYPAD AND WATER BACKGROUDN
        <section className="w-full h-full bg-cover" style={{ backgroundImage: "url('../lilypad.png')" }}>
            <div className="custom-ripple-effect w-full h-full">

            {/* LILYPAD OVERLAY ---- and ----- BLACK MENU PLACEMENT STYLES */}
            <div className="w-full h-full bg-cover z-10" style={{ backgroundImage: "url('../lilypadoverlay.png')" }}>
                <Overlay></Overlay>
            </div>
            </div>
        </section>
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