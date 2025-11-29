function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

   // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


//  document.querySelectorAll(".readBtn").forEach(function(btn) {
//   btn.addEventListener("click", function() {
//     let moreText = this.parentNode.querySelector(".more");

//     if (moreText.style.display === "" || moreText.style.display === "none") {
//       moreText.style.display = "inline";
//       this.textContent = "Read less";
//     } else {
//       moreText.style.display = "none";
//       this.textContent = "Read more";
//     }
//   });
// });



//  const moreText = document.getElementById("moreText");
//   const readBtn = document.getElementById("readBtn");

//   readBtn.addEventListener("click", () => {
//     if (moreText.style.display === "none" || moreText.style.display === "") {
//       moreText.style.display = "inline";
//       readBtn.textContent = "Read less";
//     } else {
//       moreText.style.display = "none";
//       readBtn.textContent = "Read more";
//     }
//   });

  const btn = document.getElementById("readBtn");
  const more = document.getElementById("more");

  btn.addEventListener("click", function() {
    if (more.style.display === "none") {
      more.style.display = "inline";
      btn.textContent = "Read less";
    } else {
      more.style.display = "none";
      btn.textContent = "Read more";
    }
  });
  
  <script>
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
</script>

$(document).ready(function () {

    // ==================================
    // 1. Sticky Navbar (Ultra Fast)
    // ==================================
    $(window).on('scroll', function () {
        $('.sticky-top').css(
            'top',
            window.scrollY > 150 ? '0' : '-100px'
        );
    });

    // =======================================================
    // 2. Instant Smooth Scroll (Fastest — No heavy animate)
    // =======================================================
    $('.nav-links a').on('click', function (e) {
        e.preventDefault();

        const target = $(this).attr('href');
        const top = $(target).offset().top - 50;

        // Ultra-fast scroll
        window.scrollTo({
            top: top,
            behavior: "smooth"  // this is native → 5X faster than jQuery animate()
        });

        $('.nav-links a').removeClass('active');
        $(this).addClass('active');
    });

    // ===========================================================
    // 3. Scroll Spy (Most optimized version)
    //    — no loop, no heavy calculations
    // ===========================================================
    const menu = $('.nav-links a');
    const sectionList = [];

    menu.each(function () {
        sectionList.push({
            link: $(this),
            section: $($(this).attr('href'))
        });
    });

    $(window).on('scroll', function () {
        const scrollY = window.scrollY + 120;

        for (let i = 0; i < sectionList.length; i++) {
            const s = sectionList[i].section;

            if (scrollY >= s.offset().top &&
                scrollY < s.offset().top + s.outerHeight()) {

                menu.removeClass('active');
                sectionList[i].link.addClass('active');
                break;
            }
        }
    });

});
