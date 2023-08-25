import './App.css'
import JobDescription from './components/JobDescription';
import JobListingCard from './components/JobListingCard';
import { jobs } from './constants';

export default function App() {
  return (
    <>
      <div className="w-screen lg:w-full flex-row flex">
        <div className="flex-col">
          {jobs?.map((job) => (
            <JobListingCard 
              employer={job.employer} 
              jobTitle={job.jobTitle} 
              postingTime={job.postingTime}
              location={job.location}
              techStack={job.techStack}
              field={job.field}
              rating={job.rating}
              logo={job.logo}
            />
          ))}
        </div>
        <JobDescription />
      </div>
    </>
  )
}

