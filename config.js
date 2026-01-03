const CONFIG = {
  API_BASE_URL: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec',
  DEMO_MODE: false
};

async function apiGet(path, params = {}) {
  const url = new URL(CONFIG.API_BASE_URL);
  url.searchParams.set('path', path);
  Object.keys(params).forEach(k => url.searchParams.set(k, params[k]));
  try {
    const res = await fetch(url.toString());
    return res.json();
  } catch(err) {
    console.error('API error:', err);
    return {error: err.message};
  }
}

async function apiPost(path, payload) {
  const url = `${CONFIG.API_BASE_URL}?path=${encodeURIComponent(path)}`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });
    return res.json();
  } catch(err) {
    console.error('API error:', err);
    return {error: err.message};
  }
}

function showNotification(msg, type = 'info') {
  const div = document.createElement('div');
  div.className = `fixed top-4 right-4 p-4 rounded text-white z-50 bg-${type === 'error' ? 'red' : 'green'}-600`;
  div.textContent = msg;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 3000);
}
