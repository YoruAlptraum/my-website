<style>
    #nav-bar {
        position: fixed;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 80vw;
        gap: 1vw;
        justify-content: space-around;
        text-align: center;
        z-index: 5;
        padding: 1vh;
        margin: .5vw;
        left: 50%;
        transform: translateX(-50%);

        backdrop-filter: blur(16px) saturate(200%);
        -webkit-backdrop-filter: blur(16px) saturate(200%);
        background-color: #02061730;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.125);
    }

    .active,
    .nav-icon:hover {
        color: var(--radial2);
    }

    a {
        text-decoration: none;
        font-weight: 400;
    }
</style>

<nav id='nav-bar'>
    <a href="#hero" class="nav-icon active">Thiago Ozawa</a>
    <a href="#about" class="nav-icon">About</a>
    <a href="#projects" class="nav-icon">Projects</a>
    <a href="#contact-me" class="nav-icon">Contact me</a>
</nav>