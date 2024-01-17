<style>

    #chars {
        --x: 0px;
        --y: 0px;
        --csize: 45vw;
        position: fixed;
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
        font-size: 1.7rem;
        font-weight: 350;
        opacity: 0;
        z-index: -2;
        transition: opacity 1s;
    }

    #gradient {
        left: 0;
        top: 0;
        height: 100vh;
        width: 100%;
        position: fixed;
        background: radial-gradient(
            var(--bg-light) 30%, 
            var(--radial1) 50%, 
            var(--radial2),
            var(--radial3)
        );
        z-index: -1;
        mix-blend-mode: darken;
    }


</style>

<script>
	import { onMount } from "svelte";
    let chars;
    let strSize = 8000;
    
    const charsList = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンヴガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";

    const randChar = () => charsList[Math.floor(Math.random() * (charsList.length))],
    randStr = length => Array(length).fill(undefined).map(randChar).join('');

    onMount(()=>{
        chars = document.querySelector('#chars');
        chars.innerText = randStr(strSize);
        const randomizeBg = () => {chars.innerText = randStr(strSize)}
        
        const htmelement = document.querySelector('html');
        htmelement.addEventListener('mousemove', handleMove);
        htmelement.addEventListener('mousemove',dispnum);
        htmelement.addEventListener('mouseleave',hidenum);
        // handle touch for mobile devices
        htmelement.addEventListener('touchmove', handleTouch, { passive: false });
        htmelement.addEventListener('touchstart',dispnum); 
        htmelement.addEventListener('touchend',hidenum);
        // randomize bg on scroll
        document.addEventListener('scroll', randomizeBg);
        // randomize bg on set interval
        setInterval(function() {
            randomizeBg();
        }, 500);

        function dispnum (){
            if (chars) {
                chars.style.opacity = '1';
            }
        }

        function hidenum(){
            if (chars) {
                chars.style.opacity = '0';
            }
        }
    })

    const handleMove = e =>{
        // the rect constant makes sure the coordinates are relative to the element, this is noticeable when the element is not fullscreen size
        if (chars) {
            const rect = chars.getBoundingClientRect(),
                x = e.clientX - rect.x, 
                y = e.clientY - rect.y;

            chars.style.setProperty("--x", `${x}px`);
            chars.style.setProperty("--y", `${y}px`);
        }
    };
    
    const handleTouch = e =>{
        e.preventDefault();
        // the rect constant makes sure the coordinates are relative to the element, this is noticeable when the element is not fullscreen size
        if (nums) {
            const rect = nums.getBoundingClientRect(),
                x = e.touches[0].clientX - rect.x, 
                y = e.touches[0].clientY - rect.y;

            nums.style.setProperty("--x", `${x}px`);
            nums.style.setProperty("--y", `${y}px`);
        }

    };

</script>

<div id='effect'>
    <div id="gradient"></div>
    <div role="presentation" bind:this={chars} id='chars'></div>
</div>
