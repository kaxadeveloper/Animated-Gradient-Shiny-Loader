let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let percent = document.querySelector("span");

let count = 0;
let loading = null;

/* START LOADER ON CLICK */
inner.addEventListener("click", function () {
    if (loading) return; // prevent multiple intervals

    outer.classList.add("active-loader");

    loading = setInterval(() => {
        if (count === 100) {
            clearInterval(loading);
            loading = null;

            outer.classList.remove("active-loader");
            outer.classList.add("active-loader-2");
        } else {
            count++;
            percent.textContent = count + "%";
        }
    }, 200);
});

/* RESET LOADER ON DOUBLE CLICK */
inner.addEventListener("dblclick", function () {
    // stop any running interval
    if (loading) {
        clearInterval(loading);
        loading = null;
    }

    // reset values
    count = 0;
    percent.textContent = "0%";

    // reset animations
    outer.classList.remove("active-loader", "active-loader-2");

    // force reflow to restart animation cleanly
    void outer.offsetWidth;
});