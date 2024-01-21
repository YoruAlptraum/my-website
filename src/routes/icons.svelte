<style>

    #contact-me {
        height: 100vh;
    }

    .icons{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        z-index: 2;
        
        position: fixed;
        padding: 1vw;
        left: 3%;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 12px;
        align-items: center;
        justify-content: center;
        
        backdrop-filter: blur(16px) saturate(200%);
        -webkit-backdrop-filter: blur(16px) saturate(200%);
        background-color: #02061730;
        border: 1px solid rgba(255, 255, 255, 0.125);
    }

    :global(.lateral) {
        animation: retractIcons 1s;
        animation-fill-mode: forwards;
    }

    :global(.footer) {
        animation: expandIcons 2s ;
        animation-fill-mode: forwards;
    }

    @keyframes expandIcons {
        0% {
            left: 3%;
            width: 5vw;
            height: 5vw;
            transform: translate(0, -50%);
        }
        10%{            
            transform: translate(-50%, -50%);
        }
        50% {
            width: 5vw;
        }
        70%{    
            width: 80vw;
            height: 5vw;
        }
        100% {
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80vw;
            height: 80vh;
        }
    }

    @keyframes retractIcons {
        0% {
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80vw;
            height: 80vh;
        }
        99% {
            width: 6vw;
            height: 9vw;
        }
        100% {
            left: 3%;
            width: auto;
            height: auto;
            transform: translate(0%, -50%);
        }
    }

    .icon {
        display: flex;
        gap: 1rem;
        color: #ccc;
        text-decoration: none;
    }

    .icon svg {        
        min-width: 25px;
        width: 2vw;
        aspect-ratio: 1/1;
    }

    .icon:hover {
        transform: scale(1.1);
        transition: .1s ease-in-out;
        color: #fff;
    }

    .icon:active {
        transform: scale(.9);
    }

    .noDisp {
        animation: hide .5s;
        display: none;
    }

    .disp {
        animation: showUp 2s;
    }

    @keyframes showUp {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

    @keyframes hide {
        100%{
            opacity: 0;
            display: none;
        }
        0%{
            opacity: 1;
            display: block;
        }
    }

    h3 {
        text-wrap: nowrap;
    }
    
    .note {
        text-wrap: nowrap;
        position: absolute;
        bottom: 5px;
        text-align: center;
        color: #666;
        animation: fade-in 3s;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        70% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

</style>

<script>
    import { onMount } from 'svelte';
    let isBottomTouching;
    
    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        let bottomTouched = false;

        function handleScroll() {
            const icons = document.querySelector('.icons')

            const scrollPosition = window.scrollY - document.querySelector('#projects').clientHeight - window.outerHeight;
            const elementRect = document.querySelector('#projects').getBoundingClientRect();
            
            isBottomTouching = elementRect.bottom <= scrollPosition;

            // Check if the user has scrolled to the bottom of the page
            if (isBottomTouching) {
                icons.classList.add('footer');
                icons.classList.remove('lateral');
                bottomTouched = true;
            } 
            else if (bottomTouched) {
                icons.classList.add('lateral');
                icons.classList.remove('footer');
            }
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    $: noDisp = isBottomTouching ? 'disp' : 'noDisp';
</script>

<div class='section' id="contact-me">
</div>

<ul class=" icons">
    <h3 class="{noDisp} highlight">You can find me at:</h3>    
    <li>
        <a class='icon' href="https://github.com/YoruAlptraum" target="_blank" title="Github link">
            <svg viewBox="0 0 100 100" title="a">
                <path  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill='currentcolor'/>
            </svg>
            <span class="{noDisp}">Github</span>

        </a>
    </li>
    <li>
        <a class='icon' href="https://www.linkedin.com/in/thiago-ozawa-5b79a3194/" target="_blank" title="Linkedin link">
            <svg viewBox='0 0 50 50'>
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" fill='currentcolor'/>
            </svg>
            <span class="{noDisp}">Linkedin</span>
        </a>
    </li>
    <li  class="{noDisp}">
        <a class='icon' href="mailto:ozawathiago@gmail.com" target="_blank" title="Linkedin link">
            <svg  viewBox="0 0 30 30">
                <path d="M 4 5 C 2.9069372 5 2 5.9069372 2 7 L 2 23 C 2 24.093063 2.9069372 25 4 25 L 26 25 C 27.093063 25 28 24.093063 28 23 L 28 7 C 28 5.9069372 27.093063 5 26 5 L 4 5 z M 6.6992188 7 L 23.300781 7 L 15 13.134766 L 6.6992188 7 z M 5 9.4746094 L 15 16.865234 L 25 9.4746094 L 25 23 L 5 23 L 5 9.4746094 z" fill='currentcolor'></path>
                </svg>
            <span>ozawathiago@gmail.com</span>
        </a>
    </li>
    
    <p class='note {noDisp}'>This website was made using js framework svelte</p>
</ul>