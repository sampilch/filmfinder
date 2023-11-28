/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
var currentIndex = 0;
  var totalItems = document.querySelectorAll('.carousel-item').length;
  var carousel = document.getElementById('carousel');

  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalItems - 1;
    } else if (index >= totalItems) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    var translateValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
  }

  function goToSlide(index) {
    showSlide(index);
  }

  function sortItems() {
    var select = document.getElementById('sort');
    var selectedValue = select.value;
    
    var container = document.getElementById('itemsContainer');
    var items = Array.from(container.getElementsByClassName('item'));

    items.sort(function(a, b) {
      var aValue = a.getAttribute('data-' + selectedValue);
      var bValue = b.getAttribute('data-' + selectedValue);

      if (selectedValue === 'default') {
        return 0; // No sorting needed
      } else {
        return aValue.localeCompare(bValue);
      }
    });

    // Clear the container and append the sorted items
    container.innerHTML = '';
    items.forEach(function(item) {
      container.appendChild(item);
    });
  }