import React, { useState } from 'react'
import data from '../fakeData/fakeData';
import Course from '../components/Course';
import '../assets/css/Courses.css'

function Courses() {
    const [courses, setCourses] = useState(data)

    return (
        <section className='conurse-container'>
            <div className="all-course">
                {
                    courses.map((course, i) =>
                        <Course
                            key={i}
                            course={course}
                        />
                    )
                }
            </div>
        </section>
    )
}

export default Courses