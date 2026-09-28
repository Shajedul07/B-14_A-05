export function Footer() {
    return (
        <footer className="bg-white">

            {/* Main Footer */}
            <div className="container mx-auto px-6 py-12">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Logo + Description */}
                    <div>
                        <div className="flex items-center gap-2">

                            <div className="bg-purple-500 text-white text-xs font-bold rounded px-1.5 py-1">
                                DS
                            </div>

                            <h2 className="font-semibold">
                                Dev Stack
                            </h2>

                        </div>

                        <p className="text-sm text-gray-400 mt-4 max-w-xs">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-5 text-sm">
                            <a
                                href="#"
                                className="hover:text-black"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="hover:text-black"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="hover:text-black"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>


                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-sm">
                            PRODUCT
                        </h3>

                        <ul className="mt-4 space-y-2 text-sm text-gray-400">

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black"
                                >
                                    Projects
                                </a>
                            </li>

                        </ul>
                    </div>


                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-sm">
                            COMPANY
                        </h3>

                        <ul className="mt-4 space-y-2 text-sm text-gray-400">

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black"
                                >
                                    Careers
                                </a>
                            </li>

                        </ul>
                    </div>


                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-sm">
                            LEGAL
                        </h3>

                        <ul className="mt-4 space-y-2 text-sm text-gray-400">

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black"
                                >
                                    Terms of Service
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>


                {/* Divider + Bottom Section */}
                <div className="border-t border-gray-200 mt-10 pt-6">

                    <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-400">

                        {/* Copyright */}
                        <p>
                            © 2026 Dev Stack. All rights reserved.
                        </p>

                        {/* Bottom Links */}
                        <div className="flex gap-5">

                            <a
                                href="#"
                                className="hover:text-black"
                            >
                                Privacy
                            </a>

                            <a
                                href="#"
                                className="hover:text-black"
                            >
                                Terms
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}