document.addEventListener("DOMContentLoaded", function() {
    const url = "https://www.randyconnolly.com/funwebdev/3rd/api/colors/sample-colors.php";

    const loader = document.getElementById("loader");
    const article = document.querySelector("article");
    const aside = document.querySelector("aside");

    let data = [];

    loader.style.display = "block";

    fetch(url)
        .then(response => response.json())
        .then(responseData => {
            loader.style.display = "none";
            console.log("Data fetched successfully:", responseData);
            data = responseData;
            renderColors(data);
        })
        .catch(error => console.error("Error fetching data:", error));

    function renderColors(data) {
        if (Array.isArray(data)) {
            console.log("Rendering colors:", data);
            data.forEach(scheme => {
                const h3 = document.createElement("h3");
                h3.textContent = scheme.name;

                const section = document.createElement("section");
                section.classList.add("color-section");

                if (Array.isArray(scheme.colors)) {
                    console.log("Scheme colors:", scheme.colors);
                    scheme.colors.forEach(color => {
                        const div = document.createElement("div");
                        div.style.backgroundColor = color.code;
                        div.textContent = color.name;
                        section.appendChild(div);
                    });
                }

                const viewButton = document.createElement("button");
                viewButton.textContent = "View";
                viewButton.dataset.id = scheme.id;

                viewButton.addEventListener("click", function() {
                    showSelection(scheme);
                });

                article.appendChild(h3);
                article.appendChild(section);
                article.appendChild(viewButton);
            });
        } else {
            console.log("Data is not in the expected format:", data);
        }
    }

    function showSelection(selectedScheme) {
        aside.innerHTML = "";
        const h2 = document.createElement("h2");
        h2.textContent = selectedScheme.name;
        aside.appendChild(h2);

        if (selectedScheme.colors && Array.isArray(selectedScheme.colors)) {
            selectedScheme.colors.forEach(color => {
                const div = document.createElement("div");
                div.style.backgroundColor = color.code;
                div.textContent = color.name;
                aside.appendChild(div);
            });
        }
    }

});