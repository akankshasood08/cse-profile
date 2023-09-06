function initWindowBehavior(windowEl, closeBtnEl, buttonEl, minBtnEl, maxBtnEl) {
    // Close action
    closeBtnEl.addEventListener('click', (e) => {
        e.stopPropagation();
        windowEl.classList.toggle('hide');
        windowEl.classList.remove('mini', 'max');
    });

    // Toggle display action
    buttonEl.addEventListener('click', (e) => {
        e.stopPropagation();

        if (windowEl.classList.contains('mini')) {
            windowEl.classList.remove('mini');
            return;
        }

        windowEl.classList.toggle('hide');
        windowEl.classList.remove('mini', 'max');
        buttonEl.classList.toggle('show');
    });

    // Minimise action
    minBtnEl.addEventListener('click', (e) => {
        e.stopPropagation();
        windowEl.classList.remove('max');
        windowEl.classList.toggle('mini');
    });
    console.log("Something");
    // Maximise action
    // If maxBtnEl is provided, attach Maximise action
    if (maxBtnEl) {
        maxBtnEl.addEventListener('click', (e) => {
            e.stopPropagation();
            windowEl.classList.toggle('max');
        });
    }
}

// Initialising Netflix behavior
initWindowBehavior(
    document.querySelector('.netflix'),
    document.querySelector('.netflix_bar_btn_close'),
    document.querySelector('.netflix_button'),
    document.querySelector('.netflix_bar_btn_mini'),
    document.querySelector('.netflix_bar_btn_resize')
);

// Initialising About Me behavior
initWindowBehavior(
    document.querySelector('.aboutme'),
    document.querySelector('.aboutme_bar_btn_close'),
    document.querySelector('.aboutme_button'),
    document.querySelector('.aboutme_bar_btn_mini'),
    document.querySelector('.aboutme_bar_btn_resize')
);

// Initialising Books behavior
initWindowBehavior(
    document.querySelector('.bookshelf'),
    document.querySelector('.bookshelf_bar_btn_close'),
    document.querySelector('.books_button'),
    document.querySelector('.bookshelf_bar_btn_mini'),
    document.querySelector('.bookshelf_bar_btn_resize')
);

// Initialising Cafe Pic behavior
initWindowBehavior(
    document.querySelector('.cafe'),
    document.querySelector('.cafe_bar_btn_close'),
    document.querySelector('.cafe_button'),
    document.querySelector('.cafe_bar_btn_mini')
);

// Initialising Sky Pic behavior
initWindowBehavior(
    document.querySelector('.sky'),
    document.querySelector('.sky_bar_btn_close'),
    document.querySelector('.sky_button'),
    document.querySelector('.sky_bar_btn_mini')
);