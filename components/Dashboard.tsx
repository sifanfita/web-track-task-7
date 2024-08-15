import {
  AnotherCalendar,
  CalendarIcon,
  FireIcon,
  LocationIcon,
  PlusIcon,
} from "@/lib/icons";

interface DashboardProps {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  whenAndWhere: string;
  location: string;
  datePosted: string;
  startDate: string;
  endDate: string;
  deadline: string;
  requiredSkills: string[];
  logoUrl: string;
}

const Dashboard = ({
  id,
  title,
  description = "No description available",
  responsibilities = "No responsibilities listed",
  idealCandidate = "No ideal candidate profile provided",
  whenAndWhere = "Location details not provided",
  location,
  datePosted = "Date not available",
  startDate = "Start date not available",
  endDate = "End date not available",
  deadline = "Deadline not specified",
  categories = ["No categories listed"],
  requiredSkills = ["No skills specified"],
}: DashboardProps) => {
  return (
    <div className="grid grid-cols-3">
      <div className="w-[70%]  col-span-2 mb-2 p-12">
        <div className=" m-3">
          <h1 className="font-bold text-2xl">Description</h1>
          <p className="font-headers">{description}</p>
        </div>
        <div className="m-3 mt-2">
          <h1 className="font-bold text-2xl">Responsibilities</h1>
          <ul className="font-headers">{responsibilities}</ul>
        </div>

        <div className="m-3">
          <h1 className="font-bold text-2xl">Ideal Candidate we want</h1>
          <h3 className="font-headers">{idealCandidate}</h3>
        </div>
        <div className="m-3">
          <h1 className="font-bold text-2xl">When & Where</h1>
          <div className="flex items-start">
            <LocationIcon />
            <p className="font-headers ">{whenAndWhere}</p>
          </div>
        </div>
      </div>
      <div className=" mt-3 rounded-2xl space-x-6 col-span-1 p-12">
        <div className="mb-3">
          <h1 className="font-bold p-2">About</h1>
          <div className="flex items-start gap-3 mb-2 ">
            <PlusIcon />
            <div>
              <h3 className="text-gray-400">Posted on:</h3>
              <h3 className="font-light">{datePosted}</h3>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <FireIcon />
            <div>
              <h3 className="text-gray-400">Deadline on:</h3>
              <h3 className="font-light">{deadline}</h3>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-2 ">
            <LocationIcon />
            <div className="m-1">
              <h3 className="text-gray-400">Location:</h3>
              <h3 className="font-light">{location}</h3>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <CalendarIcon />
            <div>
              <h3 className="text-gray-400">Start Date:</h3>
              <h3 className="font-light">{startDate}</h3>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <AnotherCalendar />
            <div>
              <h3 className="text-gray-400">End Date:</h3>
              <h3 className="font-light">{endDate}</h3>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-3 ">Categories</h1>
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-[#FFB836] text-[#FFB836] bg-opacity-25 font-semibold py-1 px-2 rounded-full text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-3">Required Skills</h1>
          <div className="flex flex-wrap gap-2">
            {requiredSkills.map((skill, index) => (
              <button
                key={index}
                className="bg-[#4640DE] text-black font-light bg-opacity-20 py-1 px-2 rounded-md text-sm"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
