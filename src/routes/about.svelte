<style>
    #about {
        background: radial-gradient(var(--bg-color) 30%, transparent, transparent);
    }

    .inner-wrapper {
        margin: auto;
        padding-top: 15vh;
        padding-bottom: 20vh;
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
        width: 50vw;
    }

    .left {
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        justify-content: space-evenly;
    }
    
    .right {
        text-align: justify;
    }

    a {
        text-decoration: none;
        width: 70%;
    }

    a p {        
        transition: all 400ms cubic-bezier(.1,.76,.83,.67);
        fill: #fff;
        text-wrap: nowrap;
    }

    a:active{
        scale: .95;
    }

    a:hover p{
        transform: translateX(10%);
        scale: 1.1;
        color: var(--radial3);
        fill: var(--radial3);
    }

    a::after {
        margin: .3rem auto;
        content: "";
        display: block;
        width: 100%;
        height: 2px; /* Adjust the height of the line as needed */
        background-color: var(--radial3); /* Adjust the color of the line as needed */
    }

    @media only screen and (max-width: 990px) {
        /* Styles for tablets */  
        .inner-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

    @media only screen and (min-width: 991px) {
        a:hover p{
            transform: translateX(5%);
            scale: 1.05;
        }

    }

    .icon {
        aspect-ratio: 1;
        width: 1rem;
    }

</style>

<section class='section' id="about">
    <div class="inner-wrapper">
        <div class="left">
            <h3 class='highlight'>About me</h3>
            <h2>Full stack <br> Software Developer</h2>
            <a href="https://github.com/YoruAlptraum" target="_blank">
                <p>Take a look at my github
                    <svg class="icon" viewBox="0 0 100 100" title="a">
                        <path  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                    </svg>
                </p>

            </a>
        </div>
        <div class="right">
            <p>Hi, I'm Thiago Ozawa, <br><br>
            I'm a brazilian Software Engineering student passionate about tasks automation, data and details. 
            Some of my other interests include games, mangas, animes, behavioural biology and A.I.<br><br>
            It always fascinated me to see and try to understand how things work. How they move, develop, and interact with the world around them. I'ts always a sight to see the incredible things that can emerge from the smallest of details.
        </div>
    </div>
</section>