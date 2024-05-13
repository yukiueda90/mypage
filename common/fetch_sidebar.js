fetch('common/side.html')
            .then(response => response.text())
            .then(html => {
                document.querySelector("#sidebar").innerHTML = html;
            })
            .catch(error => console.error('Error loading sidebar:', error));