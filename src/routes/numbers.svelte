<style>
    #numbers {
        --x: 0px;
        --y: 0px;
        --csize: 45vw;
        position: absolute;
        word-wrap: break-word;
        left: 0px;
        top: 0px;
        width: 101vw;
        height: 100vh;
        overflow: hidden;
        transition: opacity 400ms;
        -webkit-mask-image: radial-gradient(
            var(--csize) circle at var(--x) var(--y), 
            #fff 20%, 
            #ffffff25, 
            transparent
        );
        mask-image: radial-gradient(
            var(--csize) circle at var(--x) var(--y), 
            #fff 20%, 
            #ffffff25, 
            transparent
        );
        opacity: 0;
        z-index: 1;
        transition: opacity 1s;
    }
    
    #gradient {
        left: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        position: absolute;
        background: radial-gradient(
            var(--bg-light) 30%, 
            var(--radial1) 50%, 
            var(--radial2),
            var(--radial3)
        );
        mix-blend-mode: darken; 
        z-index: 2;
    }

</style>

<script>
	import { onMount } from "svelte";
    let nums;
    
    const chars = "01";

    const randChar = () => chars[Math.floor(Math.random() * (chars.length))],
    randStr = length => Array(length).fill(undefined).map(randChar).join('');

    onMount(()=>{
        nums = document.querySelector('#numbers');
        nums.innerText = randStr(9999);
        
        const htmelement = document.querySelector('html');
        htmelement.addEventListener('mousemove', handleMove);
        htmelement.addEventListener('mouseenter',()=>{
            nums.style.opacity = '1';
        });
        htmelement.addEventListener('mouseleave',()=>{
            nums.style.opacity = '0';
        });
    })

    const handleMove = e =>{
        // the rect constant makes sure the coordinates are relative to the element, this is noticeable when the element is not fullscreen size
        const rect = nums.getBoundingClientRect(),
            x = e.clientX, 
            y = e.clientY;

        nums.style.setProperty("--x", `${x}px`);
        nums.style.setProperty("--y", `${y}px`);
        nums.innerText = randStr(9999);

    };

</script>

<div id="gradient"></div>
<div role="presentation" bind:this={nums} id='numbers'></div>