import * as React from 'react';
import LinearProgressSection from './LinearProgress';
import CircularProgressSection from './CircularProgress';
import CircularProfSkillsSection from "./CircularProfSkills"

export default function Skills() {
    return (
        <>


            <div className="container skillsmargin">
                <div className="row g-4 justify-content-center">
                    <div className="mt-5 mb-5 skillmid ">
                        <h2>
                            My <span>Skills</span>
                        </h2>
                    </div>
                    <div className="col-12 col-lg-6 mb-5 skillshover">
                        <LinearProgressSection title="TechnicaL Skills" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row skillshover">
                            <CircularProgressSection title="MERN Stack" />
                        </div>
                        <div className="row mt-5 skillshover">
                            <CircularProfSkillsSection title="Professional Skills" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}