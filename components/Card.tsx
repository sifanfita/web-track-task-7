import Link from "next/link"; 
import React from "react"; 
 
interface cardProps { 
  id:string
  orgId: string;
  title: string; 
  orgName: string;
  description: string; 
  location: string;  
  logoUrl: string;
} 
 
const Card = ({ id,title,orgName,logoUrl, description, location }: cardProps) => { 
  return ( 
    <Link href={`/posts/${id}`}> 
      <div className="flex items-start gap-4 mt-4 border rounded-2xl p-4 mb-4 font-paras"> 
        {/* image */} 
        <div className="rounded-full items-start w-3/12 ">
          <img
            className="h-[100px] "
            src={logoUrl}
            alt={orgName}
          />
        </div>
 
        {/* content */} 
        <div className="w-9/12"> 
            <h1>{title}</h1> 
            <h1 className="my-4 text-gray-400">{orgName} . {location}</h1>  
            <p className="font-headers "> {description}</p> 

        </div> 
      </div> 
    </Link> 
  ); 
}; 
 
export default Card; 
 
 