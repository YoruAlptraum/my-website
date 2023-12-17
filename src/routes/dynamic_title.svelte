
<script>
    import { onMount } from 'svelte';

    export let title = 'Title goes here!';
    let titleDisp = '';
    let timeLast = 0;
    let count = 1;
    let waitTime = 20;

    onMount(() => {
        requestAnimationFrame(loop);
    })

    function loop(timeNow) {
        if(timeNow > timeLast+55){
            count += 1;
            timeLast = timeNow;
        }
        
        if(count <= title.length){
            titleDisp = title.slice(0,count)
        }
        else if(count > title.length + waitTime){
            titleDisp = title.slice(0,title.length + waitTime - count)
        }

        if(count > (title.length * 2) + waitTime * 2){
            count = 1;
        }
        
        requestAnimationFrame(loop);
    }
</script>

<h2 class='title_disp'>{titleDisp + '|'}</h2>