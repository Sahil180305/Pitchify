import SearchForm from "@/components/SearchForm";
import Image from "next/image";

export default async function Home({searchParams,}:{searchParams:Promise<{query?:string}>}) {
  const query = (await searchParams).query;

  const posts=[{
    _id:"1"
  }]

  return (
    <>
      <section className="pink_container">
         <h1 className="heading">
           Pitch Your Startup,<br/>
           Connect With Entrepreneurs 
         </h1>
         <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and   Get Noticed in Virtual Competitions.
         </p>
         <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p>
          {query?`Search results for "${query}`:"All Startups"}
        </p>
        <ul className="mt-7 card_grit">
          {posts.map((post:StartupTypeCard)=>(<StartupCard key={post?._id} post={post}/>))}
        </ul>
      </section>
    </>
  );
}
