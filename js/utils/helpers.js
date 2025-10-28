export function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}

export function getStatusColor(status) {
    switch (status) {
        case 'open': return 'badge-green';
        case 'in_progress': return 'badge-amber';
        case 'closed': return 'badge-gray';
        default: return 'badge-gray';
    }
}

export function getStatusLabel(status) {
    switch (status) {
        case 'open': return 'Open';
        case 'in_progress': return 'In Progress';
        case 'closed': return 'Closed';
        default: return status;
    }
}

export function getStats(tickets) {
    return {
        total: tickets.length,
        open: tickets.filter(t => t.status === 'open').length,
        resolved: tickets.filter(t => t.status === 'closed').length
    };
}