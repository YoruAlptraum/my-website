<script>
    import './style.css';
    import Navbar from './navbar.svelte';
	import Hero from './hero.svelte';
	import About from './about.svelte';
	import Icons from './icons.svelte';
    import Chars from './chars.svelte';
    import Projects from './projects.svelte';
    let name = "Thiago Ozawa";
</script>

<title>{name}</title>

<div class="wrapper" >
    <Navbar />
    <Chars />
    <Hero name={name} />
    <About />
    <Projects />
    <Icons />
</div>
