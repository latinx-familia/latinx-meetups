import Hero from '@/components/Hero'
import ContentSlide from '@/components/ContentSlide'
import ContactForm from '@/components/ContactForm'

const hero = {
  title: 'Let\'s come together to connect ❤️',
  description: 'We\'re hosting get-togethers all over the world on May 28, 2024, to celebrate the Latinx Tech Community 🌍🚀💫',
  buttons: [
    { label: 'BE A SPONSOR', href: 'https://forms.gle/S6GjZFbeLUUGkBJu5', title: 'Sponsor Lantinx Community', isButton: 'true', icon: 'heart' },
    { label: 'RSVP FOR MAY 28', href: 'https://app.getriver.io/latinx', title: 'Latinx Meetup May 28, 2024 ', isButton: 'true', icon: 'check' },
  ],
};

const block = {
  description: [
    'Latinx Tech Group is a community of VC and Angel investors and Startup Founders all over the world supporting each other to thrive.',
    'Founded by Latinx founders in Silicon Valley in 2021, we are currently +1,700 members from 100 cities in 30 countries and want to invite you to join.'],
  buttons: [
    { label: 'Join the WhatsApp Community', href: 'https://chat.whatsapp.com/INP8jx2vnjVLCFRBzOrOMo', title: 'Join the Latinx Tech Group WhatsApp Community', icon: 'whatsapp', style: "secondary" }
  ],
};

const slide1 = {
  images: [
    { alt: 'Image 2', src: '/img/PastEvents/2.jpg' },
    { alt: 'Image 3', src: '/img/PastEvents/3.jpg' },
    { alt: 'Image 4', src: '/img/PastEvents/4.jpg' },
    { alt: 'Image 5', src: '/img/PastEvents/5.jpg' },
    { alt: 'Image 6', src: '/img/PastEvents/6.jpg' },
    { alt: 'Image 7', src: '/img/PastEvents/7.jpg' },
    { alt: 'Image 8', src: '/img/PastEvents/8.jpg' },
    { alt: 'Image 1', src: '/img/PastEvents/1.jpg' },
  ],
  content: {
    title: 'FROM SEED TO IPO, TOGETHER WE ARE #STRONG',
    subtitle: 'Founders from our community already raised over $400M in venture capital in aggregate.',
    description: ['The magic of attending a Latinx meetup is that people come together to listen, connect, and grow. No one wants to impress anyone. Not needing to pitch is the ultimate flex.', 'Latinx founders supporting each other to thrive.'],
    buttons: [
      { label: 'BE A SPONSOR', href: 'https://forms.gle/S6GjZFbeLUUGkBJu5', title: 'Sponsor Lantinx Community', isButton: 'true', icon: 'heart' },
      { label: 'RSVP FOR MAY 28', href: 'https://app.getriver.io/latinx', title: 'Latinx Meetup May 28, 2024 ', isButton: 'true', icon: 'check' },
    ],
  },
};

const slide2 = {
  images: [
    { alt: 'Image 9', src: '/img/PastEvents/9.jpg' },
    { alt: 'Image 10', src: '/img/PastEvents/10.jpg' },
    { alt: 'Image 11', src: '/img/PastEvents/11.jpg' },
    { alt: 'Image 12', src: '/img/PastEvents/12.jpg' },
    { alt: 'Image 13', src: '/img/PastEvents/13.jpg' },
    { alt: 'Image 14', src: '/img/PastEvents/14.jpg' },
    { alt: 'Image 15', src: '/img/PastEvents/15.jpg' },
  ],
  content: {
    title: 'LATINX FOUNDERS AND INVESTORS, SUPPORTING EACH OTHER TO THRIVE',
    subtitle: 'From aspiring investors to experienced GPs; working at the most established Silicon Valley venture funds, or at non-traditional, or emerging firms.',
    description: 'We are the global open source community of Latinx founders and funders',
    des: '',
    buttons: [
      { label: 'BE A SPONSOR', href: 'https://forms.gle/S6GjZFbeLUUGkBJu5', title: 'Sponsor Lantinx Community', isButton: 'true', icon: 'heart' },
      { label: 'RSVP FOR MAY 28', href: 'https://app.getriver.io/latinx', title: 'Latinx Meetup May 28, 2024 ', isButton: 'true', icon: 'check' },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero {...hero} />

      <ContentSlide
        {...slide1}
        layout="content-image"
        wide={true}
      />

      <Hero {...block} style={'secondary'} />

      <ContentSlide
        {...slide2}
        layout="image-content"
        wide={true}
      />

      {/* Demo white background */}
      <Hero {...block} style={'white-background'} />

      <ContactForm />
    </>
  );
}
