<style>
    .title-disp{
        pointer-events: none;
        cursor: none;
        
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }
    
    h2{
        font-size: 3vw;
    }
</style>

<script>
    import { onMount } from 'svelte';
    let title_list = ['Software development','Web development','Web scraping'];
    let cur_title = 0;

    let title = title_list[0];
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
            title = title_list[cur_title%title_list.length];
            cur_title += 1;
        }
        
        requestAnimationFrame(loop);
    }
</script>

<h2 class='title-disp'>{titleDisp + '|'}</h2>