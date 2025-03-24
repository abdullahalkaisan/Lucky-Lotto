

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item, index) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector("p");
        const icon = item.querySelector("svg");

        // Set initial styles without transitions
        answer.style.display = index === 0 ? "block" : "none"; // Show first item by default
        answer.style.maxHeight = index === 0 ? answer.scrollHeight + "px" : "0";
        answer.style.opacity = index === 0 ? "1" : "0";
        question.style.borderBottom = index === 0 ? "none" : "1px solid #ffffff20";
        icon.style.transform = index === 0 ? "rotate(0deg)" : "rotate(-90deg)"; // Rotate active icon for first item

        question.addEventListener("click", function () {
            const isVisible = answer.style.display === "block";
            
            // Close all other answers
            faqItems.forEach((faq) => {
                const faqAnswer = faq.querySelector("p");
                const faqQuestion = faq.querySelector(".faq-question");
                const faqIcon = faq.querySelector("svg");

                faqAnswer.style.display = "none";
                faqAnswer.style.maxHeight = "0";
                faqAnswer.style.opacity = "0";
                faqQuestion.style.borderBottom = "1px solid #ffffff20";
                faqIcon.style.transform = "rotate(-90deg)"; // Reset icon rotation
            });

            // Toggle the clicked item
            if (!isVisible) {
                answer.style.display = "block";
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.opacity = "1";
                question.style.borderBottom = "none"; // Remove border when open
                icon.style.transform = "rotate(0deg)"; // Rotate icon for active state
            }
        });
    });
});





