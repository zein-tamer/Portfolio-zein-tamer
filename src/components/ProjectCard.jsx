import React from 'react';

const ProjectCard = ({ title, description, imgSrc, href }) => {
  return (
    // الكلاس h-100 يضمن أن كل البطاقات في نفس الصف تأخذ نفس الارتفاع الكلي
    <div className="card bg-transparent project-card-custom p-3 h-100">
      <a href={href} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-3">
        <img 
          src={imgSrc} 
          alt={title} 
          className="card-img-top rounded-3 custom-img-hover custom-card-img"
        />
      </a>
      
      {/* أضفنا d-flex flex-column لنجعل المحتوى يتوزع عمودياً */}
      <div className="card-body px-0 pt-4 pb-1 d-flex flex-column">
        <h3 className="card-title h4 fw-bold mb-3">
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-decoration-none custom-title-link">
            {title}
          </a>
        </h3>
        
        {/* أضفنا mb-4 لإبعاد النص عن الزر قليلاً */}
        <p className="card-text project-description mb-4" style={{ lineHeight: '1.7' }}>
          {description}
        </p>
        
        {/* السر هنا: mt-auto تقوم بدفع هذا العنصر إلى أقصى الأسفل دائماً */}
        <div className="mt-auto">
           <a href={href} target="_blank" rel="noopener noreferrer" className="text-decoration-none custom-learn-more fw-bold">
             Learn more &rarr;
           </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;