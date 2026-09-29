import React from 'react';
import ProjectCard from '../components/ProjectCard'; 
import projectsData from '../data/projectsData'; 

const Projects = () => {
  return (
    // 1. تقليل المسافة العلوية الكلية للصفحة من py-5 إلى pt-2 (حشوة علوية خفيفة فقط)
    <section className="min-vh-100 pt-2 pb-5">
      <div className="container px-0" style={{ maxWidth: '960px' }}>
        
        {/* 2. تقليل المسافة أسفل ترويسة الصفحة من mb-4 إلى mb-2 */}
        <div className="mb-2">
          {/* 3. تقليل المسافة أسفل العنوان الرئيسي من mb-3 إلى mb-1 لجعل النص الوصفي يقترب منه */}
          <h1 className="display-4 fw-bold mb-1">Projects</h1>
          <p className="text-secondary fs-5 mb-0">
            A collection of web and mobile applications I have built.
          </p>
        </div>

        {/* 4. تقليل المسافة أسفل الخط الفاصل من mb-5 إلى mb-4 لتقريب البطاقات */}
        <hr className="border-secondary opacity-25 mt-3 mb-4" />

        <div className="row g-4"> {/* 5. تقليل المسافة بين البطاقات من g-5 إلى g-4 */}
          {projectsData.map((project, index) => (
            <div className="col-12 col-md-6" key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                href={project.href}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;