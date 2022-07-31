import Layout from "components/layout"
import { Container } from "theme-ui"
import PageTitle from "components/PageTitle"
import JobSummary from "components/JobSummary"
import JobResponsibilities from "components/JobResponsibilities"
import Requirements from "components/Requirements"
import Benefits from "components/Benefits"
import ApplyButton from "components/ApplyButton"

 const ror = () => {
    return (
        <Layout>
            <Container>
                <PageTitle
                    title={"Ruby On Rails Engineer"}
                    text={"100% remote"}/>
                <JobSummary summary={data.jobSummary}/>
                <Requirements requirements={data.requirements}/>
                <Benefits benefits={data.benefits}/>
                <ApplyButton/>
            </Container>
        </Layout>
    )
}

const data = {
    jobSummary: 
                `
                We are looking for Software Engineers to build 
                high-quality software for both internal products 
                and clients. In this role, you will be working 
                alongside developers, designers, and QAs to solve 
                problems. You will have the opportunity to deliver
                 high-quality work with clients ranging from fast-growing 
                 startups to big enterprise companies while developing 
                 and building your own skill set.
                `
                ,
    
    requirements: [
        `Located India.`,
        `Fluent in English.`,
        `2+ years of experience with building and deploying production software in Ruby on Rails.`,
        `Expertise in Git, GitHub and Docker.`,
        `Ability to learn and write production-ready code.`,
        `Attention to details.`,
        `Strong problem-solving capabilities.`,
        `Experience with ReactJS or React Native is a major plus.`
    
    ],
    benefits: [
        `The position is fully remote.`,
        `Competitive salary.`,
        `No micro management.`,
        `Flat organizational structure.`,
        `Work at a sustainable pace, with realistic targets.`,
        `Encouraged to contribute to open source projects.`,
        `Participate in a culture of learning and sharing learnings.`
    ],
    
        
    
}


export default ror