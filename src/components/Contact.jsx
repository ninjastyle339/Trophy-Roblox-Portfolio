import { Twitter,  } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";
const socialLinks = [
    {
        href: 'https://x.com/TR0PHYA',
        icon: <Twitter />,
        alt: 'Twitter X'
    },
    {
        href: 'https://discord.gg/T7aNKzhd',
        icon: <FaDiscord className="h-7 w-7" />,
        alt: 'Discord'
    }
]


const Contact = () => {

    return (
        <section id="contact" className="section">
            <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
                <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
                    <h2 className="headline-2 lg:max-w-[12ch]">
                        Contact me for collaboration
                    </h2>
                    <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[50ch]">
                        Reach out today to discuss your project needs
                        and start collaborating on something amazing!
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                        {
                            socialLinks.map(({href, icon, alt}, key) => (
                                <a href={href}
                                target="_blank" 
                                className="w-12 h-12 grid place-items-center"
                                key={key}
                                >
                                {icon}
                                </a>
                            ))
                        }
                    </div>
                </div>

                <form action="https://getform.io/f/bejlexga" method="POST" className="xl:pl-10 2xl:pl-20">
                    <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                        <div className="mb-4">
                            <label htmlFor="name" className="label">
                                Name
                            </label>
                            <input type="text" name="name" id="name" 
                            autoComplete="name"
                            required
                            placeholder="Dimitrije Pesic"
                            className="text-field" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="label">
                                Email
                            </label>
                            <input type="email" name="email" id="email" 
                            autoComplete="email"
                            required
                            placeholder="Dim@example.com"
                            className="text-field" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label 
                        htmlFor="message" 
                        className="label">
                            Message
                        </label>
                        <textarea name="message" 
                        id="message"
                        placeholder="Hi!" 
                        required
                        className="text-field resize-y min-h-32 max-h-80"></textarea>
                    </div>
                    <button 
                    
                    type="submit" 
                    className="btn btn-primary [&]:max-w-full w-full justify-center">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;