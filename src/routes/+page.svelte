<title>Yoru Alptraum</title>

<script>
    import Cube from './cube.svelte';
    import './style.css';
    let width = window.innerWidth;
    let height = window.innerHeight;
    window.onresize = () => {
        width = window.outerWidth;
        height = window.outerHeight;
    };
</script>

<div class="hero">
    <div class="info">
        <h1>Yoru Alptraum</h1>
        <h2>Software Developer w{width}h{height}</h2>
    </div>
    <div id="anim">
        <Cube w={width*0.4} h={height*0.4} color="#6900FD"/>
    </div>
</div>
