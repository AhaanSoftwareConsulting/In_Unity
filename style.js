document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    let started = false;

    const formatNumber = (value, format) => {
        if (format === "k+") {
            return (value / 1000).toFixed(1).replace(".0", "") + "k+";
        }
        if (format === "+") {
            return value + "+";
        }
        return value.toString();
    };

    const runCounter = () => {
        counters.forEach(counter => {
            const target = +counter.dataset.target;
            const format = counter.dataset.format;
            let count = 0;
            const increment = target / 80;

            const update = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.floor(count);
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = formatNumber(target, format);
                }
            };
            update();
        });
    };

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !started) {
            started = true;
            runCounter();
        }
    }, { threshold: 0.4 });

    observer.observe(document.querySelector(".impact-section"));
});