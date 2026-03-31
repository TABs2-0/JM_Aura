// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const handleResponse = async (response) => {
  if (response.status === 204) return null;
  
  const data = await response.json().catch(() => ({}));
  
  if (!response.ok) {
    // Django REST Framework often returns errors as an object with field names as keys, 
    // or a 'detail' key for general errors.
    const errorMessage = data.detail || data.message || `Error ${response.status}: ${response.statusText}`;
    const error = new Error(errorMessage);
    error.status = response.status;
    error.data = data; // Store full error data for form validation handling
    throw error;
  }
  
  return data;
};

const apiRequest = async (endpoint, options = {}) => {
  // Ensure endpoint starts with / and ends with / for Django compatibility
  const normalizedEndpoint = `${endpoint.startsWith('/') ? '' : '/'}${endpoint}${endpoint.endsWith('/') ? '' : '/'}`;
  
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }), // Using Bearer (JWT) by default
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${normalizedEndpoint}`, {
    ...options,
    headers,
  });

  return handleResponse(response);
};

// Product Services
export const productAPI = {
  // DRF List views often have pagination
  getAll: (params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) query.append(key, value);
    });
    const queryString = query.toString() ? `?${query.toString()}` : '';
    return apiRequest(`/products/${queryString}`);
  },
  getById: (id) => apiRequest(`/products/${id}/`),
  getCategories: () => apiRequest('/products/categories/'),
};

// Order Services
export const orderAPI = {
  create: (orderData) => apiRequest('/orders/', {
    method: 'POST',
    body: JSON.stringify(orderData),
  }),
  getHistory: () => apiRequest('/orders/history/'),
  getById: (id) => apiRequest(`/orders/${id}/`),
};

// User Profile Services
export const userAPI = {
  getProfile: () => apiRequest('/profile/'),
  updateProfile: (userData) => apiRequest('/profile/', {
    method: 'PUT',
    body: JSON.stringify(userData),
  }),
};

export default apiRequest;

