document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            let valid = true;
            let inputs = this.querySelectorAll("input, textarea");
            
            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    valid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "1px solid gold";
                }
            });
            
            if (valid) {
                alert("Form submitted successfully!");
                this.reset();
            } else {
                alert("Please fill all required fields!");
            }
        });
    });
});
