document.addEventListener("DOMContentLoaded", function() {
    const dropdownSearch = document.getElementById("dropdown-search");
    const dropdownList = document.getElementById("dropdown-list");
    const items = dropdownList.getElementsByClassName("dropdown-item");
    const noResults = document.getElementById("no-results");
    const clearSearch = document.getElementById("clear-search");

    // Show all items when dropdown is focused
    dropdownSearch.addEventListener("focus", function() {
        filterItems("");
        dropdownList.style.display = "block";
    });

    // Filter items as the user types
    dropdownSearch.addEventListener("input", function() {
        const filter = dropdownSearch.value.toLowerCase();
        filterItems(filter);
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", function(e) {
        if (!dropdownSearch.contains(e.target) && !dropdownList.contains(e.target)) {
            dropdownList.style.display = "none";
        }
    });

    // Clear the search input
    clearSearch.addEventListener("click", function() {
        dropdownSearch.value = "";
        filterItems("");
        dropdownList.style.display = "block";
    });

    // Function to filter the dropdown items
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

        // Show or hide the 'No results' message
        noResults.style.display = visibleItems === 0 ? "block" : "none";
    }
});