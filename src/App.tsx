import './App.css'
import JobListingCard from './components/jobListingCard';

export default function App() {
  return (
    <>
      <div className="w-full flex-row flex items-start">
        <JobListingCard 
          employer='Henan Putihrai Asset Management' 
          jobTitle='Software Engineer' 
          postingTime={3} 
          location='Indonesia' 
          techStack={["HTTP", "MVC", "Rest API", "Linus", "PostgreSQL", "Docker", "C++"]}
          field='Fullstack'
          rating={null}
          logo="https://nodeflair.com/companies/8933.png"
        />
        <div className='text-black bg-white w-[683px] p-[5px]'>
          hi
        </div>
      </div>
    </>
  )
}

