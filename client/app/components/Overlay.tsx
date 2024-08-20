"use client"
import useFetchData from "../useFetchData";  // Adjust the path as needed
import Card from "./Card";
import Links from "./Links";
export default function Overlay() {
    const awesun = useFetchData("http://127.0.0.1:8080/api/awesun");
    const shelter = useFetchData("http://localhost:8080/api/shelter");
    const mathemagical = useFetchData("http://127.0.0.1:8080/api/mathemagical");
    const quizzer = useFetchData("http://127.0.0.1:5000/api/quizzer");
  
    return (
        <>
            <section className="absolute z-10 top-0 w-full h-full flex flex-col align-center justify-between text-center items-center">
                <div className="flex align-center justify-center items-center w-full">
                    <Links/>
                </div>
                <section className="text-black h-full w-full text-left flex flex-col justify-center items-center">
                    <Card name="Awesun Solar Visualiser" description="View the UK's latest solar energy production statistics" fetchStatus={awesun} features={["Fetch API", "Weekly, monthly and yearly views", "CSS Animations"]} url="https://awesun-solar-visualiser.vercel.app/"></Card>
                    <Card name="Mathemagical" description="View my latest Math projects: Calculapp, Spiraliser and Create" fetchStatus={mathemagical} features={["End-to-end testing", "Keyboard hotkeys", "Canvas Animations"]} url="https://mathemagical.vercel.app/"></Card>
                    <Card name="Night Quizzer" description="Create your own quizzes and test yourself" fetchStatus={quizzer} features={["Authentication", "Authorisation", "Supabase/SQL backend"]} url="https://night-quizzer.vercel.app/yourspace"></Card>
                    <Card name="Shelter Database" description="View dummy data for an application built for a homeless shelter client" fetchStatus={shelter} features={["CRUD functionality", "Authentication / Authorisation", "Supabase/SQL backend"]} url="https://secure-nextjs-homeless-shelter-database.vercel.app/"></Card>
                    {/* <Card name="Ruby on Rails Pokedex" description="" fetchStatus={ruby} features={["CRUD functionality", "Periodic reset script"]} url="https://www.google.com"></Card> */}
                </section>
            </section>

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