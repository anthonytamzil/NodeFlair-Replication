import './App.css'
import JobListingCard from './components/jobListingCard'

export default function App() {
  return (
    <>
      <div>
        <JobListingCard 
          employer='Henan Putihrai Asset Management' 
          jobTitle='Software Engineer' 
          postingTime={3} 
          location='Indonesia' 
          techStack={["HTTP", "MVC", "Rest API", "Linus", "PostgreSQL", "Docker"]}
          field='Fullstack'
          rating={null}
          logo="https://nodeflair.com/companies/8933.png"
        />
      </div>
    </>
  )
}

