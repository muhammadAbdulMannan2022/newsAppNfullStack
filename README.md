<h1 align="center">This is a practice project</h1>
<ul>
    <li>all data gatting from a local server</li>
</ul>
<hr/>
<div style="display:flex; align-items:center;">
  <code style="flex:1;">npm run dev</code>
  <button onclick="copyToClipboard('npm run dev')">Copy</button>
</div>

<script>
function copyToClipboard(text) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('Copied to clipboard: ' + text);
}
</script>
