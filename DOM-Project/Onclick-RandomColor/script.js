
    document.addEventListener("DOMContentLoaded", function () {
        document.addEventListener("click", function (e) {
            createCircle(e.clientX, e.clientY);
        });

        function createCircle(x, y) {
            const circle = document.createElement("div");
            circle.className = "circle";

            // Set the position of the circle at the click coordinates
            circle.style.left = x - 25 + "px";
            circle.style.top = y - 25 + "px";

            // Generate a random color
            const randomColor = getRandomColor();
            circle.style.backgroundColor = randomColor;

            document.body.appendChild(circle);
        }

        function getRandomColor() {
            // Generate a random hexadecimal color code
            let letters = "0123456789ABCDEF";
            let color = "#";
            for (i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    });