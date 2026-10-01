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
             "I am Zein, a Full-Stack Software Engineer specializing in architecting secure, high-performance web and mobile ecosystems. Leveraging advanced expertise in the MERN stack, TypeScript, and React Native, I engineer scalable platforms designed to handle complex business logic and real-time data flows. From implementing robust security architectures to orchestrating seamless real-time infrastructure with WebSockets, my focus is on delivering enterprise-grade solutions. Whether building comprehensive luxury e-commerce architectures or cross-platform operational applications, I transform ambitious technical requirements into flawlessly executed digital products."
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