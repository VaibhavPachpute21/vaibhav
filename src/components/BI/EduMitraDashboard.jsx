import React from 'react'

const EduMitraDashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className='container py-md-5 my-md-5 text-white py-5 my-5'>
                <h2>EduMitra Analytical Dashboard</h2>
                <div className="container p-2 text-center bg-white rounded mb-3">
                    <iframe className='dashboard' title="EduMitra" src="https://app.powerbi.com/view?r=eyJrIjoiZDVlOWM5MzctZWJjYS00OThjLWE4MTItY2EyM2NkZjhlMzQ2IiwidCI6ImUzNzJhNzI2LTNiYzMtNDdiOS05MWU0LWE0M2E5ZmU2YzQ2YyJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
                </div>

                <div className='container'>
                    <p>I'm excited to introduce the powerful new addition to Edumitra – our custom-built
                        Power BI dashboard. This dynamic tool provides an in-depth and visual exploration
                        of the impact and engagement on our centralized education platform. </p>
                    <p><strong>Key visualizations:</strong>
                        <ul style={{listStyleType:'square'}}>
                            <li>User Engagement Trends</li>
                            <li>Project Submission Dynamics</li>
                            <li>Top Skill Distributions</li>
                            <li>Geographic User Distribution</li>
                            <li>Project Comments and Feedback</li>
                            <li>Collaboration Insights</li>
                            <li>Platform Activity Over Time</li>
                        </ul>
                    </p>
                    <p>
                        Users can seamlessly navigate through these insights, gaining valuable data-driven perspectives
                        on the contributions of our vibrant community of students and industry experts. Explore the
                        dashboard above for a sneak peek into the compelling analytics that shape the future of
                        education on Edumitra.</p>
                </div>
            </div></div>
    )
}

export default EduMitraDashboard