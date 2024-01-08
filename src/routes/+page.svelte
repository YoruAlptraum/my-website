
<script>
    import Cube from './cube.svelte';
    import './style.css';
    import Title from './dynamic_title.svelte';
    import Numbers from './numbers.svelte';
    import Navbar from './navbar.svelte';
    let name = "Thiago Ozawa";
</script>

<title>{name}</title>

<div class="wrapper" >
    <!-- <Navbar /> -->
    <section id="hero">
        <div class="center-piece">
            <div class="info">
                <h1>{name}</h1>
                <Title/>
            </div>
            <div id="anim">
                <Cube w={500} h={500} color="#6900FD"/>
            </div>
        </div>
        <Numbers />
    </section>
    <section id="about">
        <div class="info">
            <!-- add a good morning/afternoon/evening depending on user clock -->
            <h2>Hi, wellcome to my about section</h2>
            <p>I'm a brazilian software engineering student passionate about automation and A.I.</p>
            <p>My primary technologies are python, javascript and MySQL</p>
            <p>This site was made with js framework sveltekit</p>
        </div>
    </section>
    <section id="projects">
        <h2>My main projects</h2>

    </section>
    <section id="contact-me">
        <h2>You can contact me via</h2>

    </section>
</div>

<div class="icons">
    <a class='icon' href="https://github.com/YoruAlptraum" target="_blank">
        <svg viewBox="0 0 100 100" title="a">
            <path  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill='currentcolor'/>
        </svg>
    </a>
    <a class='icon' href="https://www.linkedin.com/in/thiago-ozawa-5b79a3194/" target="_blank">
        <svg viewBox='0 0 50 50'>
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" fill='currentcolor'/>
        </svg>
    </a>
</div>