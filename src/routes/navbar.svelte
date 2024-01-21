<style>
    #nav-bar {
        position: fixed;
        display: flex;
        gap: 1vw;
        justify-content: space-between;
        text-align: center;
        width: 80vw;
        z-index: 5;
        padding: 1vh 4vw;
        margin: .5vw;
        left: 50%;
        transform: translateX(-50%);

        backdrop-filter: blur(16px) saturate(200%);
        -webkit-backdrop-filter: blur(16px) saturate(200%);
        background-color: #02061730;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.125);
    }

    .nav-icon {
        color: #ddd;
    }

    .active,
    .nav-icon:hover{
        color: var(--radial3);
        background-color: transparent;
    }

    .nav-icon:active {
        transform: scale(.95);
    }

    a {
        text-decoration: none;
        font-weight: 400;
    }
</style>

<script>
	import { onMount } from "svelte";

    onMount(()=>{
        const menuLinks = document.querySelectorAll('#nav-bar a[href^="#"]');
        
        menuLinks.forEach((link) => {
            link.addEventListener("click", scrollToSection);
        });

        // highlight current nav icon
        let sections = document.querySelectorAll('.section');
        let navLinks = document.querySelectorAll('#nav-bar a');
        window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 200;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('#nav-bar a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    };
    })

    function getDistanceFromTheTop(element) {
        const id = element.getAttribute("href");
        return document.querySelector(id).offsetTop;
    }

    function scrollToSection(event) {
        event.preventDefault();
        const distanceFromTheTop = getDistanceFromTheTop(event.target);
        smoothScrollTo(0, distanceFromTheTop);
    }

    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX;
        const startY = window.scrollY;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();

        duration = typeof duration !== "undefined" ? duration : 400;

        const easeInOutQuart = (time, from, distance, duration) => {
            if ((time /= duration / 2) < 1)
            return (distance / 2) * time * time * time * time + from;
            return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
        };

        const timer = setInterval(() => {
            const time = new Date().getTime() - startTime;
            const newX = easeInOutQuart(time, startX, distanceX, duration);
            const newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                clearInterval(timer);
            }
            window.scroll(newX, newY);
        }, 1000 / 60);
    }



</script>

<nav id='nav-bar'>
    <a href="#hero" class="nav-icon active">Thiago Ozawa</a>
    <a href="#about" class="nav-icon">About</a>
    <a href="#projects" class="nav-icon">Projects</a>
    <a href="#contact-me" class="nav-icon">Contact me</a>
</nav>