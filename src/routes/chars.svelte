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
        font-size: 35px;
        line-height: 40px;
        font-weight: 350;
        opacity: 0;
        z-index: -2;
        transition: opacity 1s;
        scale: 1.1;
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
    let strSize = 1;
    let screenWidth;
    let screenHeight;
    
    const charsList = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンヴガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";

    const randChar = () => charsList[Math.floor(Math.random() * (charsList.length))],
    randStr = length => Array(length).fill(undefined).map(randChar).join('');

    onMount(()=>{
        chars = document.querySelector('#chars');
        updateSize();

        const randomizeBg = () => {chars.innerText = randStr(strSize)}
        randomizeBg();
        const htmelement = document.querySelector('html');

        window.addEventListener('resize', updateSize);
        window.addEventListener('resize', randomizeBg);
        // randomize bg on scroll
        document.addEventListener('scroll', randomizeBg);

        htmelement.addEventListener('pointermove', handleMove);
        htmelement.addEventListener('pointermove',dispchars);
        // mobile event listeners
        if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            htmelement.addEventListener('touchmove', handleMove, { passive: false });            
            htmelement.addEventListener('touchend', hidechars);
        } else{
            htmelement.addEventListener('pointerleave', hidechars);
        }
        
        // randomize bg on set interval
        const stringRandomizer = setInterval(randomizeBg, 1000);
        
        return () => {
            window.removeEventListener('resize', updateSize);
            window.removeEventListener('resize', randomizeBg);
            document.removeEventListener('scroll', randomizeBg);

            htmelement.removeEventListener('pointermove', handleMove);
            htmelement.removeEventListener('pointermove', dispchars);
            htmelement.removeEventListener('pointerleave', hidechars);

            htmelement.removeEventListener('touchmove', handleMove, { passive: false });
            htmelement.removeEventListener('touchend', hidechars);

            clearInterval(stringRandomizer);

        };
    })

    function updateSize(){
            // calculate window size
            screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            // calc aprox how many chars fit in the screen height and width
            strSize = (Math.round(screenHeight / 35) + 1)  * (Math.round(screenWidth/35) + 1);
            // console.log(screenHeight,screenWidth,strSize);
    }    

    function dispchars (){
        if (chars) {
            chars.style.opacity = '1';
        }
    }

    function hidechars(){
        if (chars) {
            chars.style.opacity = '0';
        }
    }

    const handleMove = e =>{
        if (chars) {
            const rect = chars.getBoundingClientRect()
            let x = 0
            let y = 0;
            
            if(e.touches) {
                x = e.touches[0].clientX - rect.x, 
                y = e.touches[0].clientY - rect.y;
            }
            else {
                x = e.clientX - rect.x, 
                y = e.clientY - rect.y;
            }

            chars.style.setProperty("--x", `${x}px`);
            chars.style.setProperty("--y", `${y}px`);
        }
    };

</script>

<div id='effect'>
    <div id="gradient"></div>
    <div role="presentation" bind:this={chars} id='chars'></div>
</div>
