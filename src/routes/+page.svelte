
<script>
    import './style.css';
    import Navbar from './navbar.svelte';
	import Hero from './hero.svelte';
	import About from './about.svelte';
	import Icons from './icons.svelte';
    let name = "Thiago Ozawa";
</script>

<title>{name}</title>

<div class="wrapper" >
    <Navbar />
    <Hero name={name} />
    <About />
    <section id="projects">
        <h2>My main projects</h2>

    </section>
    <section id="contact-me">
        <h2>You can contact me via</h2>

    </section>
</div>
<Icons />
