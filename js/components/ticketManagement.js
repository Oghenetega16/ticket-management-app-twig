import { escapeHtml, getStatusColor, getStatusLabel } from '../utils/helpers.js';
import { renderFooter } from './footer.js';

export function renderTicketManagement(tickets) {
    const ticketsHtml = tickets.length === 0 
        ? `
        <div class="empty-state">
            <div class="empty-icon">
                <svg viewBox="0 0 24 24"><path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
            </div>
            <p class="text-lg text-gray-600">No tickets yet. Create your first ticket!</p>
        </div>
        `
        : `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${tickets.map(ticket => {
            const ticketJSON = JSON.stringify(ticket).replace(/'/g, "\\'").replace(/"/g, '&quot;');
            return `
                <div class="ticket-card">
                    <div class="ticket-header">
                        <h3 class="ticket-title">${escapeHtml(ticket.title)}</h3>
                        <span class="badge ${getStatusColor(ticket.status)}">${getStatusLabel(ticket.status)}</span>
                    </div>

                    ${ticket.description ? `<p class="ticket-description">${escapeHtml(ticket.description)}</p>` : ''}
                    <div class="ticket-actions">
                        <button onclick='openEditModal(${ticketJSON})' class="btn btn-sm btn-edit">
                            <svg viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            Edit
                        </button>

                        <button onclick="openDeleteConfirm('${ticket.id}')" class="btn btn-sm btn-delete">
                            <svg viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            Delete
                        </button>
                    </div>
                </div>
            `;
            }).join('')}
        </div>
        `;

    return `
        <div class="bg-gradient">
            <div class="container py-8" style="flex: 1;">
                <div class="flex justify-between items-center mb-8 gap-8">
                    <div>
                        <h1 class="text-4xl">Ticket Management</h1>
                        <span onclick="navigateTo('dashboard')" class="link mt-2" style="display: inline-block; cursor: pointer;">
                        ← Back to Dashboard
                        </span>
                    </div>
                    <div class="flex gap-4">
                        <button onclick="openCreateModal()" class="btn btn-primary">
                            <svg viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"></path></svg>
                            New Ticket
                        </button>  

                        <button onclick="handleLogout()" class="btn btn-danger">
                            <svg viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                            Logout
                        </button>
                    </div>
                </div>

                ${ticketsHtml}
            </div>

            ${renderFooter()}
        </div>
    `;
}