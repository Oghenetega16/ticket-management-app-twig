import { renderFooter } from './footer.js';

export function renderLandingPage() {
    return `
        <div class="bg-gradient">
            <div class="hero">
                <svg class="hero-bg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#4F46E5" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                
                <div class="circle-1"></div>
                <div class="circle-2"></div>
                
                <div class="container" style="position: relative; z-index: 10;">
                    <div class="text-center">
                        <h1 class="text-6xl text-gray-900">TicketFlow</h1>
                        <p class="text-xl text-gray-600 max-w-2xl mt-4 mb-8" style="margin-left: auto; margin-right: auto;">
                        Streamline your support workflow with our powerful ticket management system. Track, manage, and resolve tickets efficiently.
                        </p>

                        <div class="flex justify-center gap-4">
                            <button onclick="navigateTo('login')" class="btn btn-primary">
                                Login
                            </button>
                            <button onclick="navigateTo('signup')" class="btn btn-secondary">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container py-20">
                <div class="grid gap-8">
                    <div class="card">
                        <div class="icon icon-indigo">
                            <svg viewBox="0 0 24 24"><path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                        </div>
                        <h3 class="text-xl mb-2">Easy Ticket Management</h3>
                        <p class="text-gray-600">Create, update, and track tickets with an intuitive interface designed for efficiency.</p>
                    </div>

                    <div class="card">
                        <div class="icon icon-green">
                            <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 class="text-xl mb-2">Real-time Updates</h3>
                        <p class="text-gray-600">Stay informed with instant notifications and status updates on all your tickets.</p>
                    </div>

                    <div class="card">
                        <div class="icon icon-amber">
                            <svg viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 class="text-xl mb-2">Smart Prioritization</h3>
                        <p class="text-gray-600">Organize tickets by priority and status to focus on what matters most.</p>
                    </div>
                </div>
            </div>

            ${renderFooter()}
        </div>
    `;
}