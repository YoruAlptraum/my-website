<style>
    #about {
        height: 80vh;
        align-items: center;
    }

    .inner-wrapper {
        position: relative;
        display: grid;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
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
    }

    a:active{
        scale: .95;
    }

    a::after {
        margin: .3rem auto;
        content: "";
        display: block;
        width: 100%;
        height: 2px; /* Adjust the height of the line as needed */
        background-color: var(--radial3); /* Adjust the color of the line as needed */
    }

    .section {
        background: radial-gradient(var(--bg-color) 30%, transparent, transparent);
    }

    @media only screen and (max-width: 990px) {
        /* Styles for tablets */  
        .inner-wrapper {
            grid-template-columns: 1fr;
            gap: 4rem;
        }

        .left {
            text-align: center;    
            align-items: center;        
        }
    }

    @media only screen and (min-width: 991px) {
        a:hover p{
            transform: translateX(5%);
            scale: 1.05;
        }

    }

</style>

<script>


</script>

<section class='section' id="about">
    <div class="inner-wrapper">
        <!-- add a good morning/afternoon/evening depending on user clock -->
        <div class="left">
            <strong style='color: var(--radial3)'>About me</strong>
            <h2>Full stack <br> Software Developer</h2>
            <a href="https://github.com/YoruAlptraum" target="_blank">
                <p>Take a look at my github</p>
            </a>
        </div>
        <div class="right">
            <p>Hi, I'm Thiago Ozawa, <br><br>
            I'm a brazilian Software Engineering student passionate about tasks automation, data and details. Some of my other interests include games, mangas, animes, behavioural biology and A.I.<br><br>
            It always fascinated me to see and try to understand how things work. How they move, develop, and interact with the world around them. I'ts always a sight to see the incredible things that can emerge from the smallest of details.
        </div>
    </div>
</section>