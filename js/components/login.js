import { escapeHtml } from '../utils/helpers.js';

export function renderLoginPage(loginForm, loginErrors) {
    return `
        <div class="auth-container">
            <div class="auth-card">
                <h2 class="text-3xl text-center mb-8">Login to TicketFlow</h2>
                
                <form onsubmit="handleLogin(event)" class="flex flex-col gap-6">
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input 
                            type="email" 
                            value="${escapeHtml(loginForm.email)}" 
                            oninput="state.loginForm.email = this.value" 
                            class="form-input"
                        >
                        ${loginErrors.email ? `<p class="form-error">${escapeHtml(loginErrors.email)}</p>` : ''}
                    </div>

                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input 
                            type="password" 
                            value="${escapeHtml(loginForm.password)}" 
                            oninput="state.loginForm.password = this.value" 
                            class="form-input"
                        >
                        ${loginErrors.password ? `<p class="form-error">${escapeHtml(loginErrors.password)}</p>` : ''}
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-center" style="width: 100%;">
                        Login
                    </button>
                </form>
                <p class="text-center mt-4 text-gray-600">
                Don't have an account? 
                <span onclick="navigateTo('signup')" class="link">Sign up</span>
                </p>
            </div>
        </div>
    `;
}