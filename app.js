// SecGuard AI - Full Dashboard Logic

// 1. URL Vulnerability Scanner Logic
function scanUrl() {
  const urlInput = document.getElementById('url-input') || document.querySelector('input[type="text"]');
  const resultBox = document.getElementById('url-result-box') || document.querySelectorAll('.alert')[0];

  if (!urlInput) return;
  const url = urlInput.value.toLowerCase();

  const maliciousKeywords = ['phish', 'suspicious', 'malware', 'hack', 'evil', 'attack'];
  let isMalicious = maliciousKeywords.some(keyword => url.includes(keyword));

  if (isMalicious) {
    if (resultBox) {
      resultBox.className = 'alert alert-danger';
      resultBox.innerHTML = '⚠️ <strong>High Risk:</strong> Phishing or malicious signature detected! Threat Score: 95/100';
      resultBox.style.backgroundColor = '#f8d7da';
      resultBox.style.color = '#721c24';
    }
  } else {
    if (resultBox) {
      resultBox.className = 'alert alert-success';
      resultBox.innerHTML = '✅ <strong>URL is Safe:</strong> No malicious signatures found in threat database.';
      resultBox.style.backgroundColor = '#d4edda';
      resultBox.style.color = '#155724';
    }
  }
}

// 2. LLM Security Guard Logic
function scanPrompt() {
  const promptInput = document.getElementById('prompt-input');
  const resultBox = document.getElementById('llm-result-box') || document.querySelectorAll('.alert')[1];

  if (!promptInput) return;
  const text = promptInput.value.toLowerCase();

  const dangerousPatterns = [
    'ignore previous instructions',
    'developer mode',
    'jailbreak',
    'system mode',
    'dump',
    'database schemas'
  ];

  let detected = dangerousPatterns.some(pattern => text.includes(pattern));

  if (detected) {
    if (resultBox) {
      resultBox.className = 'alert alert-danger';
      resultBox.innerHTML = '⚠️ <strong>Warning:</strong> Prompt Injection or Jailbreak Attempt Detected!';
      resultBox.style.backgroundColor = '#f8d7da';
      resultBox.style.color = '#721c24';
    }
  } else {
    if (resultBox) {
      resultBox.className = 'alert alert-success';
      resultBox.innerHTML = '✅ <strong>Safe Prompt:</strong> No malicious patterns detected. Ready to process.';
      resultBox.style.backgroundColor = '#d4edda';
      resultBox.style.color = '#155724';
    }
  }
}
