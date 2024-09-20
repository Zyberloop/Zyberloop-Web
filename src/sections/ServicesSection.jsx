import React from "react";
import ServiceCard from "../components/ServiceCard";

export default function ServicesSection() {
  return (
    <div className="flex items-center justify-center z-20">
      <div className="flex flex-col justify-center items-center mt-16 space-y-5 px-0 max-w-[1600px]">
        <div className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center max-w-6xl">
          Our Services
        </div>

        <div className="flex flex-col gap-8 px-10 ">
          <ServiceCard
            imageSrc="/development.webp"
            title="Web Development"
            description="Zyberloop specializes in developing robust, user-friendly websites that are tailored to meet the unique needs of local markets. Our websites are designed to enhance your business's online presence, drive user engagement, and convert visitors into customers. Whether you need a sleek portfolio site or a complex e-commerce platform, we deliver custom solutions that stand out in the digital landscape."
            flipped={false}
          />

          <ServiceCard
            imageSrc="/mobile.webp"
            title="Mobile App Development"
            description="We create innovative mobile applications that boost customer engagement and drive business growth. Our development process focuses on delivering seamless usability, advanced functionality, and exceptional performance across all mobile devices. From concept to launch, we ensure that your app meets the highest standards and provides a compelling user experience."
            flipped={true}
          />

          <ServiceCard
            imageSrc="/erpsystem.webp"
            title="ERP Solutions"
            description="Zyberloop offers tailored ERP solutions designed to optimize your business processes and improve overall efficiency. Our customized ERP systems help streamline operations, enhance data management, and integrate various functions within your organization. With our solutions, you can achieve greater operational control, better decision-making, and increased productivity."
            flipped={false}
          />

          <ServiceCard
            imageSrc="/cloudComputing.webp"
            title="Cloud Solutions"
            description="Zyberloop provides scalable cloud solutions that enhance your data security, accessibility, and overall business agility. Our cloud services are designed to support your growing needs, offering flexible and reliable solutions that ensure your data is safe and easily accessible from anywhere. Experience the benefits of cloud technology with tailored solutions that align with your business goals."
            flipped={true}
          />
          <ServiceCard
            imageSrc="/logodesign.webp"
            title="Logos & Brand Designing"
            description="Our team excels in creating impactful logos and brand designs that establish a memorable and distinctive identity for your business. We work closely with you to understand your brand vision and translate it into compelling visual elements that resonate with your target audience. Let us help you build a brand that stands out and makes a lasting impression."
            flipped={false}
          />

          <ServiceCard
            imageSrc="/socialmedia.webp"
            title="Social Media Management"
            description="Our social media management services are designed to enhance your brand's online presence and foster meaningful engagement with your audience. We manage your social media platforms with a strategic approach to boost brand visibility, drive interaction, and support your business objectives. Let us handle the complexities of social media so you can focus on what you do best."
            flipped={true}
          />
        </div>
      </div>
    </div>
  );
}
