import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Users, Target, Lightbulb, TrendingUp, Phone } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-gradient">
              Delivering World-Class Solutions
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              The leading Systems Integrator providing end-to-end solutions in Qatar. Empowering businesses with innovative technology, strategic expertise, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                Explore Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="px-8 py-4 rounded-full glass text-gray-800 font-semibold text-lg hover:bg-white/80 transition-all transform hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                Get in Touch
                <Phone className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-orange-500/30 text-orange-600 text-xs md:text-sm font-semibold uppercase tracking-wider mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Empowering Your Business
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to elevate your workforce and enhance customer experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* HRO Card */}
            <div className="glass rounded-2xl p-8 hover:transform hover:-translate-y-3 transition-all duration-300 border border-transparent hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gradient">Human Resource Outsourcing</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                Maximize your team's potential with our adaptable HRO services, designed to meet evolving business needs. From staffing to strategic HR support, we provide the flexibility to help your workforce thrive.
              </p>
              <Link href="/solutions/bpo" className="text-orange-600 font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Consumer Tech Card */}
            <div className="glass rounded-2xl p-8 hover:transform hover:-translate-y-3 transition-all duration-300 border border-transparent hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gradient">Consumer Technology</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                At the forefront of mobile innovation, we take pride in delivering cutting-edge smartphone technology that shapes the future. Empower your lifestyle with devices designed for performance and connectivity.
              </p>
              <Link href="/solutions/consumer-tech" className="text-orange-600 font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Contact Center Card */}
            <div className="glass rounded-2xl p-8 hover:transform hover:-translate-y-3 transition-all duration-300 border border-transparent hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gradient">Contact Center Outsourcing</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                Enhance customer satisfaction with our tailored contact center solutions designed to provide seamless, personalized support. Let us handle your customer interactions while you focus on business growth.
              </p>
              <Link href="/solutions/bpo" className="text-orange-600 font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/5 rounded-full blur-3xl"></div>

            < div className="relative z-10">
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-orange-500/30 text-orange-600 text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 md:mb-6">
                Leadership Message
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8">Trusted Business Partner</h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
                With over 24 years of experience in the telecom and ICT sectors, Cyril brings a proven track record in strategic leadership and digital transformation. His expertise will guide us into our next phase of growth, enhancing both our innovative solutions and customer experiences. We look forward to strengthening our market position under his leadership.
              </p>
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-orange-500/20">
                  <Image
                    src="/images/ceo.jpg"
                    alt="Cyril Anand - CEO"
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-gradient">Cyril Anand</h4>
                  <p className="text-gray-600 uppercase tracking-wider text-xs md:text-sm">Chief Executive Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-orange-500/30 text-orange-600 text-xs md:text-sm font-semibold uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Our Advantages
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:border-orange-500/50 border border-transparent">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Integrated Innovation</h3>
              <p className="text-sm md:text-base text-gray-600">Seamlessly blending technology and strategy to drive transformative business solutions.</p>
            </div>

            <div className="glass rounded-xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:border-orange-500/50 border border-transparent">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborative Culture</h3>
              <p className="text-gray-600">Fostering innovation and excellence through teamwork and shared vision.</p>
            </div>

            <div className="glass rounded-xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:border-orange-500/50 border border-transparent">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Team</h3>
              <p className="text-gray-600">Delivering expertise and excellence in every project we undertake.</p>
            </div>

            <div className="glass rounded-xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 hover:border-orange-500/50 border border-transparent">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Always Researching</h3>
              <p className="text-gray-600">Constantly exploring the latest advancements to drive your business forward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-24 relative" style={{ backgroundImage: 'url(/images/backgrounds/team-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-white/90"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-orange-500/30 text-orange-600 text-xs md:text-sm font-semibold uppercase tracking-wider mb-4">
              Meet Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Our Experts
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Led by industry veterans with decades of combined experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: 'Thomas Andrew Davidson', position: 'Vice President, BPO', image: '/images/team/team1.jpg' },
              { name: 'Rajesh Bansal', position: 'Vice President, Finance', image: '/images/team/team2.jpg' },
              { name: 'Taiyab Ghafoor', position: 'VP of Consumer Technology', image: '/images/team/team3.jpg' },
              { name: 'Benish Peter Jacob', position: 'Vice President, ICT', image: '/images/team/team4.jpg' },
              { name: 'Aoife Smith', position: 'Senior Consultant', image: '/images/team/team5.jpg' },
              { name: 'Salman Ahmed', position: 'Operations Manager', image: '/images/team/team6.jpg' }
            ].map((leader, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden hover:transform hover:-translate-y-3 transition-all duration-300 cursor-pointer hover:border-orange-500/50 border border-transparent group bg-white shadow-lg">
                <div className="relative h-48 md:h-56 bg-gray-200">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm md:text-base font-bold mb-1 group-hover:text-gradient transition-all">{leader.name}</h3>
                  <p className="text-xs text-gray-600 uppercase tracking-wider">{leader.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/leadership" className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-gray-800 font-semibold text-lg hover:bg-white/80 transition-all transform hover:-translate-y-1">
              View All Leaders
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-orange-500/30 text-orange-600 text-xs md:text-sm font-semibold uppercase tracking-wider mb-4">
              Trusted & Certified
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Industry Certifications
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Committed to excellence through international standards and strategic partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass rounded-xl p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center">
                <div className="text-2xl font-bold text-white">ISO</div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">ISO 9001:2015</h3>
              <p className="text-sm md:text-base text-gray-600">Quality Management System</p>
            </div>

            <div className="glass rounded-xl p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center">
                <div className="text-2xl font-bold text-white">ISO</div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">ISO 27001:2013</h3>
              <p className="text-sm md:text-base text-gray-600">Information Security</p>
            </div>

            <div className="glass rounded-xl p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center">
                <div className="text-2xl font-bold text-white">QR</div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Qatar Registry</h3>
              <p className="text-sm md:text-base text-gray-600">Authorized Service Provider</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm md:text-base text-gray-600 mb-4">Proud Partner of</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="glass px-8 py-4 rounded-xl">
                <p className="text-xl md:text-2xl font-bold text-gradient">Ooredoo Group</p>
              </div>
              <div className="glass px-8 py-4 rounded-xl">
                <p className="text-lg md:text-xl font-semibold text-gray-700">Qatar Chamber</p>
              </div>
              <div className="glass px-8 py-4 rounded-xl">
                <p className="text-lg md:text-xl font-semibold text-gray-700">QICCA Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-orange-500/30 text-orange-600 text-xs md:text-sm font-semibold uppercase tracking-wider mb-4">
              Client Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                "Starlink World has been instrumental in transforming our HR operations. Their BPO solutions have significantly improved our efficiency and allowed us to focus on core business activities."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mohammed Al-Rashid</p>
                  <p className="text-sm text-gray-600">HR Director, Manufacturing Sector</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                "The ICT infrastructure solutions provided by Starlink World exceeded our expectations. Their team's professionalism and technical expertise is outstanding."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center text-white font-bold">
                  F
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Fatima Al-Kuwari</p>
                  <p className="text-sm text-gray-600">CTO, Financial Services</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                "We've partnered with Starlink World for over 5 years. Their contact center solutions have consistently delivered exceptional customer satisfaction rates for our business."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-white font-bold">
                  K
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Khalid Al-Thani</p>
                  <p className="text-sm text-gray-600">Operations Manager, Retail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="py-24 relative" style={{ backgroundImage: 'url(/images/backgrounds/cta-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-900/70"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8">
              Let's discuss how our innovative solutions can help you achieve your goals
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:-translate-y-1">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
