import { Circle, Facebook, Heart, Instagram, Linkedin, Mail, Map, Phone, Twitter } from 'lucide-react'
import React from 'react'



const getYear=()=>{
    return new Date().getFullYear();
    }

const Footer = () => {

    const socialLinks =  [
        {
        icon : Facebook,
        href : '#',
        color: 'hover:bg-pink-600'
        },
        {
        icon : Twitter ,
        href : '#',
        color: 'hover:bg-pink-600'
        },
        {
        icon : Instagram,
        href : '#',
        color: 'hover:bg-pink-600'
        },
        {
        icon : Linkedin,
        href : '#',
        color: 'hover:bg-pink-600'
        },
    ]

    const quicklinks = [
        {label: "Home", href: "#"},
        {label: "About Us", href: "#"},
        {label: "Company", href: "#"},
        {label: "Services", href: "#"},
        {label: "Contact", href: "#"},
    ]
    const services = [
        {label: "UI/UX Design", href: "#"},
        {label: "Web Development", href: "#"},
        {label: "Photography", href: "#"},
        {label: "Branding", href: "#"},
        {label: "Digital Marketing", href: "#"},
        {label: "Home", href: "#"},
    ]
    const contactInfo = [ 
        {icon:Phone, text:'+123 456 7890',color:'text-indigo-500'},
        {icon:Mail, text:'realemma4@gmail.com',color:'text-yellow-500'},
        {
            icon:Map,
            text:'Block 4 success avenue brooks estate Ajah Lagos',
            color: 'text-green-500',
            multiline: true,
        },
    ];
    const decorativeDots = [
        {color: 'text-indigo-500'},
        {color: 'text-yellow-500'},
        {color: 'text-green-500'},
    ]   
  return (
    <footer className='relative overflow-hidden bg-gradient-to-br
     from-gray-900 to-gray-800 text-white py-12 px-4 sm:py-16
     md:py-20 md:px-12 lg:px-20'>
    <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
            gap-8 md:gap-12 mb-12'>
            <div className='space-y-6'>
                <div className='flex items-center text-2xl font-bold'>
                    <div className='w-10 h-10 flex items-center
                    justify-center rounded-full border-4
                    border-indigo-600 text-indigo-600 mr-1'>
                        E    
                    </div>
                    <span>
                        code<span className='text-yellow-500'>Service</span> 
                    </span>
                </div>
                <p className='text-gray-300 leading-relaxed'>
                    We deliver impactful digital solutions—from photography to full-stack web services—designed to elevate your brand and build long-lasting value.
                </p>
                <div className='flex gap-4'>
                    {socialLinks.map((social, idx) => (
                        <a key={idx} href={social.href}
                        className={`bg-gray-700 flex items-center justify-around
                            transition-colors ${social.color}`}>
                                <social.icon className='w-5 h-5'/>
                        </a>
                    ))}

                </div>
            </div>
            <div className='space-y-6'>
                <h3 className='text-xl font-semibold border-b-2
                border-indigo-600
                pb-2 inline-block'>
                      Quick Links
                </h3>
                <ul className='space-y-3'>
                    {quicklinks.map((link,index)=>(
                        <li key={index}>
                            <a 
                            href={link.href}
                            className='text-gray-300 hover:text-indigo-500
                            transition-colors'>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='space-y-6'>
                <h3 className='text-xl font-semibold border-b-2
                border-yellow-600
                pb-2 inline-block'>
                    Our Services
                </h3>
                <ul className='space-y-3'>
                    {services.map((service,index)=>(
                        <li key={index}>
                            <a 
                            href={service.href}
                            className='text-gray-300 hover:text-indigo-500
                            transition-colors'>
                                {service.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='space-y-6'>
                <h3 className='text-xl font-semibold border-b-2
                 border-green-600
                pb-2 inline-block'>
                      Contact Info
                </h3>
                <ul className='space-y-3'>
                    {contactInfo.map((contact,idx)=>(
                        <div key={idx} className={`flex items-center 
                        gap-3 ${contactInfo.multiline}? 'items-start'
                        :'' `}>
                            <div className='w-10 h-10 rounded-full
                            bg-gray-700 flex items-center justify-center
                            flex-shrink-0'>
                                <contact.icon 
                                className={`w-5 h-5
                                ${contact.color}`}/>
                            </div>
                            <div>
                                <p className='text-gray-300
                                whitespace-pre-line'>
                                    {contact.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>      
        </div>
        <div className='flex justify-center gap-3 mb-8'>
            {decorativeDots.map((dot, idx)=>(
                <Circle key={idx} className={`${dot.color} w-4 h-4`} />
            ))}
        </div>
        <div className='border-t border-gray-700 pt-8 text-center'>
            <p className='text-gray-400 flex items-center
                justify-center gap-1'>
                © Powered  by ecode service  from 2022 to {getYear()}
                <Heart className='w-4 h-4 text-indigo-500
                fill-current'/>
            </p>
        </div>
    </div>   
    <div className='absolute border-2 border-indigo-500 button-20 left-10
    w-16 h-16 rounded-full opacity-20'></div>
    <div className='absolute border-2 border-yellow-500 top-20 right-10
    w-16 h-16 rounded-full opacity-20'></div>

    </footer>
  )
}

export default Footer