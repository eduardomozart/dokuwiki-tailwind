/**
 * Script to handle the DokuWiki core code-copy-btn styling and icons.
 * Adds classes based on the inner text (success, error, etc.) so we can style the SVG background.
 */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof LANG === 'undefined') return;

    let tooltipIdCounter = 0;

    // We observe the body for newly added pre blocks with the copy button
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                document.querySelectorAll('button.code-copy-btn:not(.is-observed)').forEach(btn => {
                    btn.classList.add('is-observed');

                    tooltipIdCounter++;
                    const tooltipId = 'tooltip-code-copy-' + tooltipIdCounter;
                    btn.setAttribute('data-tooltip-target', tooltipId);
                    btn.setAttribute('data-tooltip-placement', 'bottom');

                    const tooltipText = btn.textContent.trim();

                    // Create tooltip element
                    const tooltip = document.createElement('div');
                    tooltip.id = tooltipId;
                    tooltip.setAttribute('role', 'tooltip');
                    tooltip.className = 'tooltip-container opacity-0 invisible';

                    const textNode = document.createTextNode(tooltipText);
                    tooltip.appendChild(textNode);

                    const arrow = document.createElement('div');
                    arrow.className = 'tooltip-arrow';
                    arrow.setAttribute('data-popper-arrow', '');
                    tooltip.appendChild(arrow);

                    // Insert into document.body to avoid inheriting <pre> monospace font
                    document.body.appendChild(tooltip);

                    // Re-initialize flowbite tooltips if the function is globally available
                    if (typeof initTooltips === 'function') {
                        initTooltips();
                    }

                    const btnObserver = new MutationObserver(() => {
                        const text = btn.textContent.trim();

                        if (text === LANG["clipboard_success"]) {
                            btn.classList.remove('is-error');
                            btn.classList.add('is-success');
                        } else if (text === LANG["clipboard_error"]) {
                            btn.classList.remove('is-success');
                            btn.classList.add('is-error');
                        } else {
                            btn.classList.remove('is-success', 'is-error');
                        }
                    });

                    btnObserver.observe(btn, { childList: true, characterData: true, subtree: true });
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
