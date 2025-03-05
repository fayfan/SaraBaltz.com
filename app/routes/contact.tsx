import type { Route } from "./+types/about";
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Sara Baltz - Contact" },
        { name: "description", content: "Let's get in touch!" },
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
            href: 'https://www.linkedin.com/in/sarabaltz/',
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
    ],
};

export default function Contact() {
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
                            <Bars3Icon aria-hidden="true" className="size-6 hover:text-blue-400" />
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
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6 hover:text-blue-400" />
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
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                            <h1 style={{ color: 'cornflowerblue' }} className="max-w-2xl text-5xl font-semibold tracking-tight text-balance sm:text-7xl lg:col-span-2 xl:col-auto">
                                Contact
                            </h1>
                            <div className="mt-6 lg:mt-0 xl:col-end-1 xl:row-start-1">
                                <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                    {/* Logo cloud */}
                                    <div className="mx-auto max-w-7xl">
                                        <div className="relative isolate overflow-hidden bg-blue-200 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
                                            <p className="text-white mx-auto max-w-2xl text-xl font-bold tracking-tight sm:text-2xl">
                                                LinkedIn: <a href="https://www.linkedin.com/in/sarabaltz/" className="hover:text-blue-50" >linkedin.com/in/sarabaltz</a>
                                            </p>
                                            <p className="text-white mt-6 mx-auto max-w-2xl text-xl font-bold tracking-tight sm:text-2xl">
                                                Email: <a href="mailto:sara@sarabaltz.com" className="hover:text-blue-50">sara@sarabaltz.com</a>
                                            </p>
                                            <p className="text-white mt-6 mx-auto max-w-2xl text-xl font-bold tracking-tight sm:text-2xl">
                                                Phone: <a href="tel:+17655056148" className="hover:text-blue-50">(765) 505-6148</a>
                                            </p>
                                            <div
                                                aria-hidden="true"
                                                className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
                                            >
                                                <div
                                                    style={{
                                                        clipPath:
                                                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                                                    }}
                                                    className="aspect-1404/767 w-[87.75rem] bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                                className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                            />
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
                </div>
            </main>

            {/* Footer */}
            <footer className="mx-auto mt-24 max-w-7xl px-6 sm:mt-30 lg:px-8">
                <div className="border-t border-gray-900/10 pt-20 pb-8 sm:pt-24">
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
                    </div>
                    <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-15 md:flex md:items-center md:justify-between lg:mt-18">
                        <div className="flex gap-x-6 md:order-2">
                            {footerNavigation.social.map(item => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    className="text-blue-300 hover:text-blue-200"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon aria-hidden="true" className="size-6" />
                                </a>
                            ))}
                        </div>
                        <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
                            &copy; 2025 Sara Baltz. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer >
        </div >
    );
}
