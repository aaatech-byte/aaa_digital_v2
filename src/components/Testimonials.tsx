import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Define Testimonial Type
interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  category: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Emily R.",
    role: "CEO, LearnSphere Inc.",
    content:
      "They built a high-performing website for us, and engagement has increased. The design perfectly matches our vision.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    category: "Web Development",
  },
  {
    name: "Jason T.",
    role: "Co-Founder, EcoVolt Systems",
    content:
      "Their work on our renewable energy website was exceptional. It’s sleek, responsive, and showcases our services well.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    category: "Web Development",
  },
  {
    name: "Sarah K.",
    role: "Owner, HandyNest",
    content:
      "The mobile app they developed exceeded expectations. It’s smooth, user-friendly, and loved by our customers.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    category: "Mobile App Development",
  },
  {
    name: "David M.",
    role: "CTO, RideWave Rentals",
    content:
      "Our bike rental app is now more intuitive and feature-rich. Bookings have improved, and customers love it!",
    image:
      "https://media.istockphoto.com/id/1476171646/photo/young-woman-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=DaYoIWA0PemBp_gwRflBhZH193puk3z-chb7N12adfY=",
    category: "Mobile App Development",
  },
  {
    name: "Lisa P.",
    role: "Founder, RadiantGlow Skincare",
    content:
      "They built a stunning Shopify store for us, and sales have been growing. Their work made a big difference!",
    image:
      "https://www.shutterstock.com/image-photo/confident-smiling-middle-aged-business-600nw-2451544833.jpg",
    category: "E-Commerce Solutions",
  },
  {
    name: "Ryan S.",
    role: "Manager, HavenLiving Interiors",
    content:
      "Our online store’s redesign has improved speed, security, and sales. Their expertise really delivered results.",
    image:
      "https://www.shutterstock.com/image-photo/headshot-smiling-handsome-hindu-man-260nw-2115297203.jpg",
    category: "E-Commerce Solutions",
  },
  {
    name: "Olivia W.",
    role: "Marketing Director, UrbanScape Designs",
    content:
      "Their SEO efforts boosted our rankings and traffic by 40%. We now appear on the first page for key searches!",
    image:
      "https://img.freepik.com/free-photo/portrait-businesswoman-window-2_1262-1491.jpg",
    category: "SEO & Digital Marketing",
  },
  {
    name: "Brian L.",
    role: "Owner, FlexPro Fitness",
    content:
      "Thanks to their social media strategies, our lead generation has improved drastically. The results speak volumes.",
    image:
      "https://i.pinimg.com/originals/37/4c/c0/374cc0b39ee69f4f2b3eb29de7aea684.jpg",
    category: "SEO & Digital Marketing",
  },
  {
    name: "Natalie H.",
    role: "Product Manager, StreamView Media",
    content:
      "Our app’s redesign significantly improved retention. The interface is now intuitive, engaging, and visually appealing.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtFvVKz3jmx8wSX7U5WiK-g6tN7pVr4lkCA&s",
    category: "UI/UX Design",
  },
  {
    name: "Kevin D.",
    role: "CEO, BistroCraft",
    content:
      "Our website now has a modern, sleek look, making navigation seamless for customers. The improvement is incredible!",
    image:
      "https://www.shutterstock.com/image-photo/headshot-satisfied-cheerful-handsome-man-260nw-793117360.jpg",
    category: "UI/UX Design",
  }
];


export default function Testimonials() {

  return (
    <main className="bg-cover relative bg-gradient-primary">
      <section className="mx-2 sm:mx-10 py-7">
      <div className="text-center">
          <h2 className=" text-2xl md:text-5xl font-orbitron font-semibold text-white mb-4">
          What Our <span className="text-yellow">Clients Say</span>
          </h2>
          <p className="text-base sm:textlg text-[#FFFFFF] max-w-3xl mx-auto">
          Don't just take our word for it - hear from some of our satisfied clients.
          </p>
        </div>

        <div className="w-full container mx-auto pt-12">
          <Swiper
            spaceBetween={1}
            centeredSlides
            loop
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: { slidesPerView: 1 },
              740: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialsCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}

interface TestimonialsCardProps {
  testimonial: Testimonial;
}

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({ testimonial }) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-primary rounded-xl p-3 sm:p-6 h-full sm:h-[21rem] shadow-lg">
          <div className="flex items-center mb-4 gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <img src="/icons/star.png" className="w-6" alt="" />
            ))}
          </div>
          <p className="text-gray-200 text-left text-base pt-3 pb-6">{testimonial.content}</p>
          <div className="flex items-center text-left pt-3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <code className="font-semibold text-white">{testimonial.name}</code>
              <div>
                <code className="text-white text-sm">{testimonial.role}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};