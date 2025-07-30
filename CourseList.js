import React from 'react';

const courses = [
  { title: "Intro to Python", progress: 70 },
  { title: "Web Development", progress: 40 },
  { title: "Machine Learning", progress: 90 },
  { title: "Cloud Basics", progress: 20 },
];

function CourseList() {
  return (
    <section className="courses">
      <h2>Available Courses</h2>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
            </div>
            <p>{course.progress}% completed</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseList;
