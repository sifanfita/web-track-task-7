"use client";
import React, { useState } from "react";
import { Job } from "@/types/job";
import Dashboard from "@/components/Dashboard";
import { useEffect } from "react";
import axios from "axios";

const API_ENDPOINT = "https://akil-backend.onrender.com/opportunities/";

interface props {
  params: { id: string };
}

const JobPost = ({ params }: props) => {
  const { id } = params;

  const [allposts, setAllposts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://akil-backend.onrender.com/opportunities/${id}`
        );
        const posts = response.data;
        console.log(posts.data);
        setAllposts(posts.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        return undefined;
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Dashboard
        id={allposts.id}
        title={allposts.title}
        requirements={allposts.requirements}
        description={allposts.description}
        responsibilities={allposts.responsibilities}
        idealCandidate={allposts.idealCandidate}
        whenAndWhere={allposts.whenAndWhere}
        location={allposts.location}
        datePosted={allposts.datePosted}
        startDate={allposts.startDate}
        endDate={allposts.endDate}
        deadline={allposts.deadline}
        categories={allposts.categories}
        requiredSkills={allposts.requiredSkills}
      />
    </div>
  );
};

export default JobPost;
