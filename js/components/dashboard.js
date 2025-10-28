import { escapeHtml, getStats } from '../utils/helpers.js';
import { renderFooter } from './footer.js';

export function renderDashboard(user, tickets) {
    const stats = getStats(tickets);
    
    return `
        <div class="bg-gradient">
            <div class="container py-8">
                <div class="flex justify-between items-center mb-8">
                    <div>
                        <h1 class="text-4xl">Dashboard</h1>
                        <p class="text-gray-600 mt-2">Welcome back, ${escapeHtml(user?.name || '')}!</p>
                    </div>
                    <button onclick="handleLogout()" class="btn btn-danger">
                        <svg viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        Logout
                    </button>
                </div>

                <div class="grid gap-6 mb-8">
                    <div class="stat-card">
                        <div class="flex justify-between items-center">
                            <div>
                                <p class="text-gray-600 text-sm">Total Tickets</p>
                                <p class="stat-value text-gray-900">${stats.total}</p>
                            </div>
                            <div class="icon icon-sm icon-indigo">
                                <svg viewBox="0 0 24 24"><path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="flex justify-between items-center">
                            <div>
                                <p class="text-gray-600 text-sm">Open Tickets</p>
                                <p class="stat-value stat-green">${stats.open}</p>
                            </div>
                            <div class="icon icon-sm icon-green">
                                <svg viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="flex justify-between items-center">
                            <div>
                                <p class="text-gray-600 text-sm">Resolved Tickets</p>
                                <p class="stat-value text-gray-600">${stats.resolved}</p>
                            </div>
                            <div class="icon icon-sm icon-gray">
                                <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <button onclick="navigateTo('tickets')" class="btn btn-primary">
                        Manage Tickets
                    </button>
                </div>
            </div>

            ${renderFooter()}
        </div>
    `;
}