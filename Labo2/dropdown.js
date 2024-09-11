document.addEventListener("DOMContentLoaded", function() {
    const dropdownSearch = document.getElementById("dropdown-search");
    const dropdownList = document.getElementById("dropdown-list");
    const items = dropdownList.getElementsByClassName("dropdown-item");
    const noResults = document.getElementById("no-results");
    const clearSearch = document.getElementById("clear-search");
    
    dropdownSearch.addEventListener("focus", function() {
        filterItems("");
        dropdownList.style.display = "block";
    });

    dropdownSearch.addEventListener("input", function() {
        const filter = dropdownSearch.value.toLowerCase();
        filterItems(filter);
    });

    document.addEventListener("click", function(e) {
        if (!dropdownSearch.contains(e.target) && !dropdownList.contains(e.target)) {
            dropdownList.style.display = "none";
        }
    });

    clearSearch.addEventListener("click", function() {
        dropdownSearch.value = "";
        filterItems("");
        dropdownList.style.display = "block";
    });

    function filterItems(filter) {
        let visibleItems = 0;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = "block";
                visibleItems++;
            } else {
                item.style.display = "none";
            }
        }

        noResults.style.display = visibleItems === 0 ? "block" : "none";
    }
});