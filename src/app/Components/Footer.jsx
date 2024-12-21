import React from "react";

function Footer() {
    return (
        <footer className="bg-black text-white p-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Seo Ranking Section */}
                <div>
                    <h1 className="text-xl font-semibold mb-4">Seo Ranking</h1>
                    <ul className="space-y-2">
                        <li>Pricing</li>
                        <li>Affiliate Program</li>
                        <li>Developer API</li>
                        <li>Support</li>
                        <li>Video Tutorials</li>
                    </ul>
                </div>
                {/* Main Tools Section */}
                <div>
                    <h1 className="text-xl font-semibold mb-4">Main Tools</h1>
                    <ul className="space-y-2">
                        <li>Rank Tracker</li>
                        <li>Backlink Checker</li>
                        <li>Keyword Generator</li>
                        <li>Serp Checker</li>
                        <li>Site Audit</li>
                    </ul>
                </div>
                {/* Blog Section */}
                <div>
                    <h1 className="text-xl font-semibold mb-4">Blog</h1>
                    <ul className="space-y-2">
                        <li>Get High Quality Backlinks</li>
                        <li>Top Google Searches</li>
                        <li>Avoid Google Penalties</li>
                        <li>White Hat SEO Tips</li>
                        <li>Google Trends</li>
                    </ul>
                </div>
                {/* Company Section */}
                <div>
                    <h1 className="text-xl font-semibold mb-4">Company</h1>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur scelerisque, tortor nec mattis feugiat, velit
                        purus euismod odio, quis vulputate velit urna.
                    </p>
                    <p>Siddharth_7m</p>
                </div>
            </div>
        </footer>
    );
}

export {Footer};
