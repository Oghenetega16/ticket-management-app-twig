export function renderDeleteConfirm(deleteConfirmId) {
    if (!deleteConfirmId) return '';
    
    return `
        <div class="modal-overlay" onclick="if(event.target === this) closeDeleteConfirm()">
            <div class="modal">
                <h3 class="text-xl mb-4">Confirm Delete</h3>
                <p class="text-gray-600 mb-6">Are you sure you want to delete this ticket? This action cannot be undone.</p>
                
                <div class="flex gap-4">
                    <button onclick="handleDeleteTicket()" class="btn btn-danger" style="flex: 1;">
                        Delete
                    </button>
                    
                    <button onclick="closeDeleteConfirm()" class="btn" style="flex: 1; background: #e5e7eb; color: #374151;">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    `;
}