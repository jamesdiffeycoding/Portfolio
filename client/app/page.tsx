"use client";
import Image from "next/image";
import useFetchData from "./useFetchData";  // Adjust the path as needed

export default function Home() {
  const ruby = useFetchData("http://127.0.0.1:8080/api/ruby");
  const awesun = useFetchData("http://127.0.0.1:8080/api/awesun");
  const shelter = useFetchData("http://127.0.0.1:8080/api/shelter");
  const mathemagical = useFetchData("http://127.0.0.1:8080/api/mathemagical");
  const quizzer = useFetchData("http://127.0.0.1:8080/api/quizzer");

  return (
    <main className="h-screen p-12 bg-black text-white">
      <div className="p-4 border border-white">
        Ruby: {ruby}
      </div>
      <div className="p-4 border border-white">
        Awesun: {awesun}
      </div>
      <div className="p-4 border border-white">
        Shelter: {shelter}
      </div>
      <div className="p-4 border border-white">
        Mathemagical: {mathemagical}
      </div>
      <div className="p-4 border border-white">
        Quizzer: {quizzer}
      </div>
    </main>
  );
}
