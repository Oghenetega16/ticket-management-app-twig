import { escapeHtml } from '../utils/helpers.js';

export function renderToast(toast) {
    if (!toast) return '';
    
    const icon = toast.type === 'error' 
        ? `<svg viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
        : `<svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
    
    return `
        <div class="toast toast-${toast.type}">
            ${icon}
            <span>${escapeHtml(toast.message)}</span>
        </div>
    `;
}