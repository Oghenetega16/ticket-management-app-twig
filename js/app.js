import { state } from './state.js';
import { checkAuth, login, signup, logout } from './services/auth.js';
import { loadTickets, saveTickets, createTicket, updateTicket, deleteTicket } from './services/tickets.js';
import { validateLogin, validateSignup, validateTicket } from './utils/validation.js';
import { renderLandingPage } from './components/landing.js';
import { renderLoginPage } from './components/login.js';
import { renderSignupPage } from './components/signup.js';
import { renderDashboard } from './components/dashboard.js';
import { renderTicketManagement } from './components/ticketManagement.js';
import { renderTicketModal } from './components/ticketModal.js';
import { renderDeleteConfirm } from './components/deleteConfirm.js';
import { renderToast } from './components/toast.js';

function init() {
    state.user = checkAuth();
    state.tickets = loadTickets();
    if (state.user && state.currentPage === 'landing') {
        state.currentPage = 'dashboard';
    }
    render();
}

function showToast(message, type = 'success') {
    state.toast = { message, type };
    render();
    setTimeout(() => {
        state.toast = null;
        render();
    }, 3000);
}

window.navigateTo = function(page) {
    if (['dashboard', 'tickets'].includes(page) && !state.user) {
        state.currentPage = 'login';
        render();
        return;
    }
    state.currentPage = page;
    render();
};

window.handleLogin = function(e) {
    e.preventDefault();
    state.loginErrors = validateLogin(state.loginForm.email, state.loginForm.password);
    
    if (Object.keys(state.loginErrors).length > 0) {
        render();
        return;
    }
    
    state.user = login(state.loginForm.email, state.loginForm.password);
    showToast('Login successful!');
    setTimeout(() => {
        navigateTo('dashboard');
    }, 1000);
};

window.handleSignup = function(e) {
    e.preventDefault();
    state.signupErrors = validateSignup(
        state.signupForm.email,
        state.signupForm.password,
        state.signupForm.confirmPassword
    );
    
    if (Object.keys(state.signupErrors).length > 0) {
        render();
        return;
    }
    
    state.user = signup(state.signupForm.email, state.signupForm.password);
    showToast('Account created successfully!');
    setTimeout(() => {
        navigateTo('dashboard');
    }, 1000);
};

window.handleLogout = function() {
    logout();
    state.user = null;
    navigateTo('landing');
};

window.openCreateModal = function() {
    state.editingTicket = null;
    state.ticketForm = { title: '', description: '', status: 'open' };
    state.ticketErrors = {};
    state.showModal = true;
    render();
};

window.openEditModal = function(ticket) {
    state.editingTicket = ticket;
    state.ticketForm = {
        title: ticket.title,
        description: ticket.description,
        status: ticket.status
    };
    state.ticketErrors = {};
    state.showModal = true;
    render();
};

window.closeModal = function() {
    state.showModal = false;
    state.editingTicket = null;
    state.ticketForm = { title: '', description: '', status: 'open' };
    state.ticketErrors = {};
    render();
};

window.handleSaveTicket = function(e) {
    e.preventDefault();
    state.ticketErrors = validateTicket(state.ticketForm.title, state.ticketForm.status);
    
    if (Object.keys(state.ticketErrors).length > 0) {
        render();
        return;
    }
    
    if (state.editingTicket) {
        state.tickets = updateTicket(state.tickets, state.editingTicket.id, state.ticketForm);
        showToast('Ticket updated successfully!');
    } else {
        const newTicket = createTicket(state.ticketForm);
        state.tickets.push(newTicket);
        showToast('Ticket created successfully!');
    }
    
    saveTickets(state.tickets);
    closeModal();
};

window.openDeleteConfirm = function(id) {
    state.deleteConfirmId = id;
    render();
    };

    window.closeDeleteConfirm = function() {
    state.deleteConfirmId = null;
    render();
    };

    window.handleDeleteTicket = function() {
    state.tickets = deleteTicket(state.tickets, state.deleteConfirmId);
    saveTickets(state.tickets);
    showToast('Ticket deleted successfully!');
    state.deleteConfirmId = null;
    render();
};

function render() {
    let pageContent = '';
    
    switch (state.currentPage) {
        case 'landing':
            pageContent = renderLandingPage();
        break;
        case 'login':
            pageContent = renderLoginPage(state.loginForm, state.loginErrors);
        break;
        case 'signup':
            pageContent = renderSignupPage(state.signupForm, state.signupErrors);
        break;
        case 'dashboard':
            pageContent = state.user ? renderDashboard(state.user, state.tickets) : renderLoginPage(state.loginForm, state.loginErrors);
        break;
        case 'tickets':
            pageContent = state.user ? renderTicketManagement(state.tickets) : renderLoginPage(state.loginForm, state.loginErrors);
        break;
        default:
            pageContent = renderLandingPage();
    }

    document.getElementById('app').innerHTML = `
        ${renderToast(state.toast)}
        ${pageContent}
        ${renderTicketModal(state.showModal, state.editingTicket, state.ticketForm, state.ticketErrors)}
        ${renderDeleteConfirm(state.deleteConfirmId)}
    `;
}

window.state = state;
init();