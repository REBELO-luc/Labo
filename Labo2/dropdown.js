document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('dropdown-search');
    const clearBtn = document.getElementById('clear-search');
    const dropdownList = document.getElementById('dropdown-list');
    const noResults = document.getElementById('no-results');
    const items = document.querySelectorAll('.dropdown-item');

    function updateDisplay(filter) {
        let matchCount = 0;
        clearBtn.style.display = filter ? 'inline' : 'none';
        dropdownList.style.display = filter ? 'block' : 'none';

        items.forEach(item => {
            const isVisible = item.textContent.toLowerCase().includes(filter);
            item.style.display = isVisible ? 'block' : 'none';
            if (isVisible) matchCount++;
        });

        noResults.style.display = matchCount === 0 ? 'block' : 'none';
    }

    searchInput.addEventListener('input', function () {
        updateDisplay(searchInput.value.toLowerCase());
    });

    clearBtn.addEventListener('click', function () {
        searchInput.value = '';
        updateDisplay('');
        items.forEach(item => item.style.display = 'block');
    });

    items.forEach(item => {
        item.addEventListener('click', function () {
            searchInput.value = item.textContent;
            clearBtn.style.display = 'inline';
            dropdownList.style.display = 'none';
            noResults.style.display = 'none';
        });
    });
});
