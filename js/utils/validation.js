export function validateLogin(email, password) {
    const errors = {};
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    return errors;
}

export function validateSignup(email, password, confirmPassword) {
    const errors = {};
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    if (!confirmPassword) errors.confirmPassword = 'Please confirm your password';
    if (password && confirmPassword && password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
}

export function validateTicket(title, status) {
    const errors = {};
    if (!title.trim()) errors.title = 'Title is required';
    if (!status) errors.status = 'Status is required';
    if (!['open', 'in_progress', 'closed'].includes(status)) {
        errors.status = 'Status must be open, in_progress, or closed';
    }
    return errors;
}