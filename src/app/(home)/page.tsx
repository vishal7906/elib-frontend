import Loader from "@/components/Loader";
import Banner from "./components/Banner";
import BookList from "./components/BookList";
import { Suspense } from "react";


export default async function Home() { 
  return (
    <>
    <Banner />
    <Suspense fallback={<Loader/>}>
      <BookList />
    </Suspense>
    
    </>
  );
}
