
<script>
    import Cube from './cube.svelte';
    import './style.css';
    import Title from './dynamic_title.svelte';
    let name = "Thiago Ozawa"
</script>

<title>{name}</title>

<!-- <nav>
    <button>
        <svg style="color: white" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
            <path d="M3 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="white"></path> 
            <path d="M3 12H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="white"></path> 
            <path d="M3 19H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="white"></path> 
        </svg>
    </button>
</nav> -->

<div class="wrapper">
    <div id="hero">
        <div class="center-piece">
            <div class="info">
                <h1>{name}</h1>
                <Title/>
            </div>
            <div id="anim">
                <Cube w={500} h={500} color="#6900FD"/>
            </div>
        </div>
    </div>
</div>

<div class="contact_me">  
    <a href="https://github.com/YoruAlptraum" target="_blank"><img class='icon' src="./github-mark.svg" alt="github link"></a>
    <a href="https://www.linkedin.com/in/thiago-ozawa-5b79a3194/" target="_blank"><img class='icon' src="./icons8-linkedin.svg" alt="linkedin link"></a>
</div>