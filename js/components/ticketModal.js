import { escapeHtml } from '../utils/helpers.js';

export function renderTicketModal(showModal, editingTicket, ticketForm, ticketErrors) {
    if (!showModal) return '';
    
    return `
        <div class="modal-overlay" onclick="if(event.target === this) closeModal()">
            <div class="modal">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl">${editingTicket ? 'Edit Ticket' : 'Create Ticket'}</h2>
                    <button onclick="closeModal()" class="close-btn">
                        <svg style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24">
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <form onsubmit="handleSaveTicket(event)" class="flex flex-col gap-6">
                    <div class="form-group">
                        <label class="form-label">Title *</label>
                        <input 
                            type="text" 
                            value="${escapeHtml(ticketForm.title)}" 
                            oninput="state.ticketForm.title = this.value" 
                            class="form-input"
                        >
                        ${ticketErrors.title ? `<p class="form-error">${escapeHtml(ticketErrors.title)}</p>` : ''}
                    </div>

                    <div class="form-group">
                        <label class="form-label">Description</label>
                        <textarea 
                            rows="4" 
                            oninput="state.ticketForm.description = this.value" 
                            class="form-textarea"
                        >
                            ${escapeHtml(ticketForm.description)}
                        </textarea>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Status *</label>
                        <select 
                            onchange="state.ticketForm.status = this.value" 
                            class="form-select"
                        >
                            <option value="open" ${ticketForm.status === 'open' ? 'selected' : ''}>Open</option>
                            <option value="in_progress" ${ticketForm.status === 'in_progress' ? 'selected' : ''}>In Progress</option>
                            <option value="closed" ${ticketForm.status === 'closed' ? 'selected' : ''}>Closed</option>
                        </select>
                        ${ticketErrors.status ? `<p class="form-error">${escapeHtml(ticketErrors.status)}</p>` : ''}
                    </div>

                    <div class="flex gap-4">
                        <button type="submit" class="btn btn-primary btn-center" style="flex: 1;">
                            ${editingTicket ? 'Update' : 'Create'}
                        </button>
                        
                        <button type="button" onclick="closeModal()" class="btn btn-center" style="flex: 1; background: #e5e7eb; color: #374151;">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
}