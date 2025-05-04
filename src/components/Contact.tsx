
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, Clock, Globe, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Have questions or want to join our community? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass rounded-xl p-6 md:p-8 animate-fade-in">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background text-white border-white/20 focus:border-dot-cyan focus:ring-1 focus:ring-dot-cyan"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background text-white border-white/20 focus:border-dot-cyan focus:ring-1 focus:ring-dot-cyan"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background text-white border-white/20 focus:border-dot-cyan focus:ring-1 focus:ring-dot-cyan resize-none"
                    required
                  />
                </div>
                
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-dot-cyan to-dot hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="glass rounded-xl p-6 md:p-8 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-dot-cyan mt-0.5" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-white/70">Tech Innovation Hub<br />123 Future Ave, Suite 42<br />San Francisco, CA 94103</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 text-dot mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-white/70">hello@developersoftomorrow.org</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-dot-cyan mt-0.5" />
                  <div>
                    <h4 className="font-medium">Office Hours</h4>
                    <p className="text-white/70">Monday - Friday<br />9:00 AM - 6:00 PM</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-dot mt-0.5" />
                  <div>
                    <h4 className="font-medium">Community Space</h4>
                    <p className="text-white/70">Open Coworking<br />Wednesday & Thursday<br />12:00 PM - 8:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass rounded-xl p-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  className="neon-border hover:bg-white/5"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                  </svg>
                  Discord
                </Button>
                
                <Button 
                  variant="outline" 
                  className="neon-border hover:bg-white/5"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.077.622.007.901c.117.388.324.666.55.886.274.27.7.4 1.212.516.952.214 3.17.615 3.395.66.223.244.447.91.618 1.2.243.403.516.772.756 1.113.157.222.313.407.92.533.6.126.126.212.207.247.145.06.297.017.438-.069.469-.284 2.886-1.801 4.53-2.867 2.012 1.507 4.53 3.458 4.777 3.655.236.19.491.275.756.275.267 0 .543-.087.79-.256.244-.17.515-.43.724-.9.156-.347.223-.679.223-.808 0-.025-.004-.816-.016-1.647l-.031-8.865c-.01-.585-.037-1.162-.08-1.583-.083-.803-.268-1.436-.534-1.899-.235-.41-.56-.731-.92-.92-.36-.189-.75-.27-1.136-.287zm-.753 1.982c.06-.04.123-.06.196-.06h.015c.065 0 .192.033.32.177.145.16.265.562.33 1.223.04.392.065.936.074 1.486l.031 8.865c.01.723.014 1.464.014 1.53v.036c-.28.195-.195.395-.32.395-.096 0-.175-.04-.235-.85-.28-.21-2.833-2.17-4.97-3.797-.33-.248-.647-.202-.736-.15-.176.128-.354.247-.534.377l-4.37 3.18c-.022-.35-.057-.83-.097-.155-.242-.375-.5-.714-.757-1.142-.144-.237-.275-.485-.4-.72-.157-.3-.31-.624-.43-.973-.23-.67-.843-1.94-1.115-2.345-.128-.192-.3-.29-.468-.34-.103-.03-.196-.037-.284-.037-.17 0-.336.035-.5.083-.51.14-.606.182-.785.243l-.017.005c-.312.063-2.175.396-3.324.643-.08.017-.241.042-.371-.04-.135-.082-.2-.224-.236-.342-.04-.12-.06-.236-.054-.288.014-.126.09-.21.17-.292.18-.189 1.008-.546 1.725-.81 1.3-.51 3.56-1.394 5.817-2.27 2.256-.876 4.51-1.751 6.283-2.448 1.772-.696 2.866-1.12 3.044-1.191.176-.074.236-.113.236-.113z" />
                  </svg>
                  Telegram
                </Button>
                
                <Button 
                  variant="outline" 
                  className="neon-border hover:bg-white/5"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </Button>
                
                <Button 
                  variant="outline" 
                  className="neon-border hover:bg-white/5"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 11.5c0-6.63-5.37-12-12-12s-12 5.37-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.64c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                  </svg>
                  Facebook
                </Button>
                
                <Button 
                  variant="outline" 
                  className="neon-border hover:bg-white/5"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background element */}
      <div className="absolute bottom-0 left-0 w-full max-w-4xl h-full max-h-96 bg-gradient-to-t from-dot/20 to-dot-cyan/10 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Contact;
