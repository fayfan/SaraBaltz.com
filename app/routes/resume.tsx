import type { Route } from "./+types/about";
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Sara Baltz - Resume" },
        { name: "description", content: "Have a look at my resume!" },
        { property: "og:title", content: "Sara Baltz - Full-Stack Software Engineer" },
        { property: "og:description", content: "I am a software engineer & former clinical researcher with a proven aptitude for teamwork & problem solving. I am eager to leverage my driven, detail-oriented mindset & passion for continuous learning to build robust & user-friendly applications, contribute to innovative teams, and deliver high-quality, impactful software solutions that enhance user experiences." },
        { property: "og:url", content: "https://sarabaltz.com/resume" },
    ];
}

const navigation = [
    { name: 'About', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
];
const footerNavigation = {
    company: [
        { name: 'About', href: '/#top' },
        { name: 'Projects', href: '/projects' },
        { name: 'Resume', href: '/resume' },
        { name: 'Contact', href: '/contact' },
    ],
    social: [
        {
            name: 'GitHub',
            href: 'https://github.com/fayfan',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/sarabaltz',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="-147 100 512 600" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Wellfound',
            href: 'https://wellfound.com/u/sarabaltz',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="-18 -18 285 285" {...props}>
                    <path
                        d="M 125 0 A 125 125 0 0 0 0 125 A 125 125 0 0 0 125 250 A 125 125 0 0 0 250 125 A 125 125 0 0 0 125 0 z M 181.56445 92.4375 C 187.25676 92.314896 192.9634 97.078533 192.68555 103.15625 C 192.93375 111.50557 182.80876 116.87461 176.03906 112.01172 C 169.46113 107.9838 169.97906 97.141109 176.91797 93.767578 C 178.37785 92.888918 179.97061 92.471829 181.56445 92.4375 z M 57.304688 93.205078 L 75.677734 93.205078 L 87.333984 138.93359 L 99.998047 93.205078 L 118.42773 93.205078 L 131.08789 138.93359 L 142.73633 93.205078 L 161.11133 93.205078 L 141.14062 156.80469 L 121.55859 156.80469 C 117.44038 141.49957 113.32371 126.19548 109.2168 110.88477 L 96.619141 156.80469 L 77.048828 156.80469 L 77.037109 156.80469 L 57.304688 93.205078 z M 181.56445 136.14258 C 187.25676 136.0202 192.9634 140.78312 192.68555 146.86523 C 192.92878 155.21117 182.80716 160.5842 176.03906 155.7168 C 169.46113 151.68888 169.97906 140.84619 176.91797 137.47266 C 178.37785 136.594 179.97061 136.17684 181.56445 136.14258 z " />
                </svg>
            ),
        },
        {
            name: 'Email',
            href: 'mailto:sara@sarabaltz.com',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 -1 20 22" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM6.231 7h7.52c.399 0 .193.512-.024.643-.217.13-3.22 1.947-3.333 2.014s-.257.1-.403.1a.793.793 0 0 1-.402-.1L6.255 7.643C6.038 7.512 5.833 7 6.231 7zM14 12.5c0 .21-.252.5-.444.5H6.444C6.252 13 6 12.71 6 12.5V8.853c0-.092-.002-.211.172-.11l3.417 2.015a.69.69 0 0 0 .402.1c.146 0 .252-.011.403-.1l3.434-2.014c.174-.102.172.018.172.11V12.5z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Phone',
            href: 'tel:+17655056148',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 1 55 55" {...props}>
                    <path xmlns="http://www.w3.org/2000/svg" d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 21.8827 33.8360 C 16.0702 28.0469 12.3671 20.6640 16.7499 16.2813 C 17.0077 16.0234 17.2890 15.7656 17.5468 15.5078 C 18.8827 14.2422 20.1718 14.3125 21.3202 15.9297 L 24.3671 20.2656 C 25.3983 21.7656 25.1405 22.6094 24.0390 23.7813 L 23.0780 24.8360 C 22.7265 25.1640 22.8671 25.6094 23.0312 25.8906 C 23.4765 26.7344 24.7421 28.2344 26.1014 29.5938 C 27.5077 31.0000 28.9374 32.1953 29.8280 32.6875 C 30.1562 32.875 30.6249 32.9219 30.9296 32.6406 L 31.9374 31.6797 C 33.0624 30.5781 33.9765 30.2969 35.4296 31.3281 C 37.4452 32.7578 38.6640 33.6016 39.8593 34.4219 C 41.3358 35.5000 41.6874 36.8360 40.1874 38.1953 C 39.9296 38.4531 39.6952 38.7344 39.4374 38.9922 C 35.0546 43.3516 27.6952 39.6484 21.8827 33.8360 Z" />
                </svg>
            ),
        },
    ],
};
const pdfUrl = "../Sara_Baltz_Resume.pdf"

export default function Resume() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-white">
            {/* Header */}
            <header className="absolute inset-x-0 top-0 z-50">
                <nav
                    aria-label="Global"
                    className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                >
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Sara Baltz</span>
                            <img
                                alt="Logo"
                                src="../personal-logo.png"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6 hover:text-blue-400 hover:cursor-pointer" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map(item => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm/6 font-semibold text-gray-900 hover:text-blue-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    </div>
                </nav>
                <Dialog
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                    className="lg:hidden"
                >
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Sara Baltz</span>
                                <img
                                    alt="Logo"
                                    src="../personal-logo.png"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close main menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6 hover:text-blue-400 hover:cursor-pointer" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map(item => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-blue-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <main className="isolate">
                {/* Hero section */}
                <div className="relative isolate -z-10 overflow-hidden bg-linear-to-b from-blue-100/20 pt-14">
                    <div
                        aria-hidden="true"
                        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-blue-600/10 ring-blue-50 sm:-mr-80 lg:-mr-96"
                    />
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-30 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                            <h1 style={{ color: 'cornflowerblue' }} className="max-w-2xl text-5xl font-semibold tracking-tight text-balance sm:text-7xl ">
                                Resume
                            </h1>
                            <iframe className='mx-auto mt-8' src={pdfUrl} width="100%" height="1125px" style={{ resize: "both", overflow: "auto" }} ></iframe>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
                </div>
            </main>

            {/* Footer */}
            < footer className="mx-auto max-w-7xl px-6 lg:px-8" >
                <div className="border-t border-gray-900/10 pt-15 pb-8">
                    <div className="xl:grid xl:grid-cols-1 xl:gap-8">
                        <div className="grid grid-cols-1 gap-8 xl:col-span-2">
                            <div className="md:grid md:grid-cols-1 md:gap-8">
                                <div>
                                    <h3 style={{ color: 'cornflowerblue' }} className="text-sm/6 font-semibold">
                                        Sara Baltz
                                    </h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {footerNavigation.company.map(item => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className="text-sm/6 text-gray-600 hover:text-blue-300"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className="mt-10 xl:mt-0">
              <h3 className="text-sm/6 font-semibold text-gray-900">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-sm/6 text-gray-600">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form className="mt-6 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="w-full min-w-0 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:w-64 sm:text-sm/6 xl:w-full"
                />
                <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div> */}
                    </div>
                    <div className="mt-15 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
                        <div className="flex gap-x-6 md:order-2">
                            {footerNavigation.social.map(item => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    className="text-blue-400 hover:text-blue-300"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon aria-hidden="true" className="size-6" />
                                </a>
                            ))}
                        </div>
                        <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
                            &copy;2025 Sara Baltz. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer >
        </div >
    );
}