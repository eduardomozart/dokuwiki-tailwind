try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
        document.documentElement.classList.add('os-macos')
    }
} catch (_) {}

document.addEventListener('keydown', (event) => {
    const searchInput = document.getElementsByName('q')[0];

    const isCmdK = event.metaKey && event.key === 'k';
    const isCtrlK = event.ctrlKey && event.key === 'k';

    if (isCmdK || isCtrlK) {
        event.preventDefault();
        searchInput.focus();
    }
});
