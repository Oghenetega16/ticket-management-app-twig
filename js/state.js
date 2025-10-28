export const state = {
    currentPage: 'landing',
    user: null,
    tickets: [],
    toast: null,
    showModal: false,
    editingTicket: null,
    deleteConfirmId: null,
    loginForm: { email: '', password: '' },
    loginErrors: {},
    signupForm: { email: '', password: '', confirmPassword: '' },
    signupErrors: {},
    ticketForm: { title: '', description: '', status: 'open' },
    ticketErrors: {}
};