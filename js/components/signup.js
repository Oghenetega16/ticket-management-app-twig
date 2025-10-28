import { escapeHtml } from '../utils/helpers.js';

export function renderSignupPage(signupForm, signupErrors) {
    return `
        <div class="auth-container">
            <div class="auth-card">
                <h2 class="text-3xl text-center mb-8">Create Account</h2>
                
                <form onsubmit="handleSignup(event)" class="flex flex-col gap-6">
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input 
                            type="email" 
                            value="${escapeHtml(signupForm.email)}" 
                            oninput="state.signupForm.email = this.value" 
                            class="form-input"
                        >
                        ${signupErrors.email ? `<p class="form-error">${escapeHtml(signupErrors.email)}</p>` : ''}
                    </div>

                    <div class="form-group">
                        <label class="form-label">Password</label>
                            <input 
                            type="password" 
                            value="${escapeHtml(signupForm.password)}" 
                            oninput="state.signupForm.password = this.value" 
                            class="form-input"
                        >
                        ${signupErrors.password ? `<p class="form-error">${escapeHtml(signupErrors.password)}</p>` : ''}
                    </div>

                    <div class="form-group">
                        <label class="form-label">Confirm Password</label>
                        <input 
                            type="password" 
                            value="${escapeHtml(signupForm.confirmPassword)}" 
                            oninput="state.signupForm.confirmPassword = this.value" 
                            class="form-input"
                        >
                        ${signupErrors.confirmPassword ? `<p class="form-error">${escapeHtml(signupErrors.confirmPassword)}</p>` : ''}
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-center" style="width: 100%;">
                        Sign Up
                    </button>
                </form>

                <p class="text-center mt-4 text-gray-600">
                    Already have an account? 
                    <span onclick="navigateTo('login')" class="link">Login</span>
                </p>
            </div>
        </div>
    `;
}