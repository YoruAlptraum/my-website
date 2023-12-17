
<script>
    import Cube from './cube.svelte';
    import './style.css';
    import Title from './dynamic_title.svelte';
    let name = "Thiago Ozawa"
</script>

<title>{name}</title>

<div class="hero">
    <div class="info">
        <h1>{name}</h1>
        <Title title='Software Developer' />
    </div>
    <div id="anim">
        <Cube w={500} h={500} color="#6900FD"/>
    </div>
</div>

<div class="contact_me">  
    <a href="https://github.com/YoruAlptraum"><img class='icon' src="./github-mark.svg" alt="github link"></a>
    <a href="https://www.linkedin.com/in/thiago-ozawa-5b79a3194/"><img class='icon' src="./icons8-linkedin.svg" alt="linkedin link"></a>
</div>

<div class="about_me">
    
</div>

<div class="projects">
    
</div>
