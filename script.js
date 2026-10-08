/* =========================
   PROJECT DATA
========================= */

const projectData = {

    1: {
        title: "Intramurals Launch Teaser",
        category: "TEASER",
        format: "Landscape",
        description:
            "A high-energy launch teaser designed to build excitement and anticipation for an intramurals event.",
        video:
            "https://drive.google.com/file/d/19s3mFlKS0QQ4-uugUFNiIj54HCN1sVWC/preview"
    },

    2: {
        title: "Singing & Dance Contest Teaser",
        category: "TEASER",
        format: "Landscape",
        description:
            "A promotional teaser created to generate excitement for a singing and dance competition.",
        video:
            "https://drive.google.com/file/d/1TLtu64lup-QXWA4L-roH5deokILN4tsr/preview"
    },

    3: {
        title: "Panalangin Music Video",
        category: "MUSIC VIDEO",
        format: "Landscape",
        description:
            "A music video project focused on visual storytelling, rhythm, atmosphere, and synchronized editing.",
        video:
            "https://drive.google.com/file/d/1Ey7eBUJ8K3yFMxyFvyp0ZUVsdDekCYjY/preview"
    },

    4: {
        title: "Tingin Music Video",
        category: "MUSIC VIDEO",
        format: "Landscape",
        description:
            "A creative music video combining footage, music, pacing, and visual storytelling.",
        video:
            "https://drive.google.com/file/d/1hm22Xmg5VDuENQIrtvUhzDq5iBdfZvrT/preview"
    },

    5: {
        title: "Aerobics Exercise Informative Video",
        category: "EDUCATIONAL",
        format: "Landscape",
        description:
            "An informative exercise video designed to communicate movement and instructions in a clear and engaging format.",
        video:
            "https://drive.google.com/file/d/1In6aIHFPx6aDUhbq1r4Ox-8gjl_CADgf/preview"
    },

    6: {
        title: "Basic Exercise Informative Video",
        category: "EDUCATIONAL",
        format: "Landscape",
        description:
            "An educational video presenting basic exercise information through clear visuals and structured editing.",
        video:
            "https://drive.google.com/file/d/10RbrONq-44PK54PxenMKjl4xbDWbQL1p/preview"
    },

    7: {
        title: "Teachers' Day Tribute Video",
        category: "EDUCATIONAL",
        format: "Landscape",
        description:
            "A tribute video created to celebrate teachers through meaningful visuals, music, and storytelling.",
        video:
            "https://drive.google.com/file/d/1dPWPbdB_kRSC-gRb9rCo66tjUiSbzGO3/preview"
    },

    8: {
        title: "Oolong Tea Ad Video",
        category: "PROMOTIONAL",
        format: "Portrait",
        description:
            "A vertical promotional advertisement created for social media, focusing on product presentation and visual appeal.",
        video:
            "https://drive.google.com/file/d/1_tVAXgc0kBxpoxlaKkBctNDhpol0UqOS/preview"
    },

    9: {
        title: "Oolong Tea Promotion Video",
        category: "PROMOTIONAL",
        format: "Portrait",
        description:
            "A vertical promotional video designed for social media product marketing and audience engagement.",
        video:
            "https://drive.google.com/file/d/1iIqXADmOieHUuVvnz-W0meVlhz0izxA9/preview"
    }

};


/* =========================
   NAVBAR
========================= */

const navbar =
    document.getElementById("navbar");

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon =
        menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon =
                menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


/* =========================
   PROJECT FILTERS
========================= */

const filters =
    document.querySelectorAll(".filter");

const projectCards =
    document.querySelectorAll(".project-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item => {

            item.classList.remove("active");

        });

        filter.classList.add("active");

        const category =
            filter.dataset.filter;


        projectCards.forEach(card => {

            const cardCategory =
                card.dataset.category;


            if (
                category === "all" ||
                cardCategory === category
            ) {

                card.style.display = "";

                setTimeout(() => {

                    card.style.opacity = "1";

                }, 10);

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================
   PROJECT MODAL
========================= */

const modal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalVideo =
    document.getElementById("modalVideo");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalDescription =
    document.getElementById("modalDescription");

const modalFormat =
    document.getElementById("modalFormat");

const modalCategoryText =
    document.getElementById("modalCategoryText");


const viewButtons =
    document.querySelectorAll(".view-project");


function openProject(projectID) {

    const project =
        projectData[projectID];


    if (!project) return;


    modalTitle.textContent =
        project.title;


    modalCategory.textContent =
        project.category;


    modalDescription.textContent =
        project.description;


    modalFormat.textContent =
        project.format;


    modalCategoryText.textContent =
        project.category;


    modalVideo.innerHTML = `

        <iframe
            src="${project.video}"
            allow="autoplay"
            allowfullscreen>
        </iframe>

    `;


    modal.classList.add("active");

    document.body.classList.add("modal-open");

}


viewButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.stopPropagation();

        const card =
            button.closest(".project-card");

        const projectID =
            card.dataset.project;

        openProject(projectID);

    });

});


function closeProject() {

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

    setTimeout(() => {

        modalVideo.innerHTML = "";

    }, 300);

}


modalClose.addEventListener(
    "click",
    closeProject
);


modal.addEventListener("click", event => {

    if (event.target === modal) {

        closeProject();

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeProject();

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   SMOOTH SCROLL
========================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", event => {

            const target =
                document.querySelector(
                    anchor.getAttribute("href")
                );


            if (!target) return;


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });