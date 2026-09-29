import React from 'react';

const About = () => {
  return (
    <section className="py-5 min-vh-100">
      <div className="container" style={{ maxWidth: '960px' }}>
        
        {/* 1. إضافة عنوان الصفحة والخط الفاصل */}
        <div className="mb-4 pt-3">
          <h1 className="display-4 fw-bold">About</h1>
        </div>
        <hr className="border-secondary opacity-25 mb-5" />

        <div className="row">
          {/* العمود الأول: الصورة الشخصية، الاسم، والمسمى الوظيفي */}
          <div className="col-md-4 text-center mb-5 mb-md-0">
            
            {/* 2. وسم الصورة الحقيقي (تأكد من وضع صورتك في هذا المسار) */}
            <img 
              src="/static/images/11.jpg" /* 👈 غير هذا المسار لاسم صورتك الفعلية */
              alt="Zein Tamer"
              className="rounded-circle mb-4"
              style={{ width: '190px', height: '190px', objectFit: 'cover', border: '2px solid var(--card-border)' }}
            />
            
            <h3 className="fw-bold mb-2">Zein Tamer</h3>
            <p className="text-secondary small mb-3">
              Full-Stack Software Engineer<br />
              Latakia, Syria
            </p>

            {/* يمكنك إضافة أيقونات التواصل الاجتماعي هنا (اختياري) */}
          </div>

          {/* العمود الثاني: النبذة التعريفية */}
          <div className="col-md-8">
            <p className="fs-5 project-description" style={{ lineHeight: '1.8' }}>
              Hello! I am Zein, a passionate developer specializing in building robust web and mobile applications. 
              With a strong foundation in the MERN stack (MongoDB, Express, React, Node.js) and cross-platform mobile development using React Native.
            </p>
            
            <p className="project-description mt-4" style={{ lineHeight: '1.8' }}>
              I focus on writing clean, elegant, and efficient code. Whether it's architecting a luxury e-commerce platform with real-time sockets or building seamless task management mobile apps, I am dedicated to delivering high-quality software solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;