export function checkAuth() {
    const session = localStorage.getItem('ticketapp_session');
    if (session) {
        try {
            return JSON.parse(session);
        } catch (e) {
            localStorage.removeItem('ticketapp_session');
            return null;
        }
    }
    return null;
}

export function login(email, password) {
    const userData = {
        email,
        name: email.split('@')[0]
    };
    localStorage.setItem('ticketapp_session', JSON.stringify(userData));
    return userData;
}

export function signup(email, password) {
    const userData = {
        email,
        name: email.split('@')[0]
    };
    localStorage.setItem('ticketapp_session', JSON.stringify(userData));
    return userData;
    }

export function logout() {
    localStorage.removeItem('ticketapp_session');
}