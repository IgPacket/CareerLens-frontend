import { useEffect, useState } from 'react';
import JobList from '../components/JobList';
import jobService from '../services/jobService';

export default function Home() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        jobService.getAllJobs().then(data => setJobs(data));
    }, []);

    return (
        <div>
            <h1>Welcome to CareerLens</h1>
            <JobList jobs={jobs} />
        </div>
    );
}
