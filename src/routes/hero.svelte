<script>    
    import Cube from './cube.svelte';
    import Title from './dynamic_title.svelte';
    export let name;

</script>

<style>
    /* hero section */
    #hero {
        height: 100vh;
    }

    .center-piece {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 3;
    }

    h1{
        font-size: 5vw;
        pointer-events: none;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }

    #anim {
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
</style>

<section class='section' id="hero">
    <div class="center-piece">
        <h1>{name}</h1>
        <Title/>
        <div id="anim">
            <Cube w={500} h={500} color="#6900FD"/>
        </div>
    </div>
</section>