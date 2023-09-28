
import Image from "next/image";
import Head from "next/head";
import { Icon } from '@iconify/react';
import { Inter } from 'next/font/google'
import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"
import Hero from "../components/ui/Hero"
import Link from "next/link";
import ContactForm from "../components/ui/ContactForm"
import SectionLeft from "../components/ui/SectionLeft"
import SectionRight from "../components/ui/SectionRight"
import GeneralDescription from "../components/ui/GeneralDescription"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <>
            <Head>
              <title>Latinx Meetups</title>
            </Head>
            <Header />
            <Hero />
            <SectionLeft />
            <SectionRight />
            <GeneralDescription />
            <ContactForm />
            <Footer />
            
        </>
  )
}
