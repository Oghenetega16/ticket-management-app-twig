export function loadTickets() {
    const saved = localStorage.getItem('ticketapp_tickets');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Error loading tickets');
            return [];
        }
    }
    return [];
}

export function saveTickets(tickets) {
    localStorage.setItem('ticketapp_tickets', JSON.stringify(tickets));
}

export function createTicket(ticketData) {
    return {
        ...ticketData,
        id: Date.now().toString()
    };
}

export function updateTicket(tickets, ticketId, ticketData) {
    return tickets.map(t => 
        t.id === ticketId ? { ...ticketData, id: ticketId } : t
    );
}

export function deleteTicket(tickets, ticketId) {
    return tickets.filter(t => t.id !== ticketId);
}