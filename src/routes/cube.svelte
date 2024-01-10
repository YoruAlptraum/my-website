<script>
    import { onMount } from 'svelte';

    export let w = 400;
    export let h = 400;
    export let color = "purple";

    // constants
    const SPEED_X = 0.05; // rps
    const SPEED_Y = 0.05; // rps
    const SPEED_Z = 0.06; // rps
    const POINT3D = function(x, y, z) { this.x = x; this.y = y; this.z = z; };

    // cube parameters

    let canvas;
    let ctx;
    let color_rotation;

    // cube parameters
    let cx, cy, cz, size, vertices, edges;

    // set up the animation loop
    let timeDelta, timeLast = 0;
    onMount(() => {
        canvas = canvas;
        ctx = canvas.getContext("2d");
        cx = w / 2;
        cy = h / 2;
        cz = 0;
        color_rotation = 0;
        size = h / 4;
        vertices = [
            new POINT3D(cx - size, cy - size, cz - size),
            new POINT3D(cx + size, cy - size, cz - size),
            new POINT3D(cx + size, cy + size, cz - size),
            new POINT3D(cx - size, cy + size, cz - size),
            new POINT3D(cx - size, cy - size, cz + size),
            new POINT3D(cx + size, cy - size, cz + size),
            new POINT3D(cx + size, cy + size, cz + size),
            new POINT3D(cx - size, cy + size, cz + size)
        ];
        edges = [
            [0, 1], [1, 2], [2, 3], [3, 0], // back face
            [4, 5], [5, 6], [6, 7], [7, 4], // front face
            [0, 4], [1, 5], [2, 6], [3, 7] // connecting sides
        ];
        
        ctx.strokeStyle = color;
        ctx.lineWidth = w / 100;
        ctx.lineCap = "round";
        requestAnimationFrame(loop);
    });

    function loop(timeNow) {
        // calculate the time difference
        timeDelta = timeNow - timeLast;
        timeLast = timeNow;
        
        // background
        ctx.clearRect(0, 0, w, h);

        // rotate the cube along the z axis
        let angle = timeDelta * 0.001 * SPEED_Z * Math.PI * 2;
        for (let v of vertices) {
            let dx = v.x - cx;
            let dy = v.y - cy;
            let x = dx * Math.cos(angle) - dy * Math.sin(angle);
            let y = dx * Math.sin(angle) + dy * Math.cos(angle);
            v.x = x + cx;
            v.y = y + cy;
        }

        // rotate the cube along the x axis
        angle = timeDelta * 0.001 * SPEED_X * Math.PI * 2;
        for (let v of vertices) {
            let dy = v.y - cy;
            let dz = v.z - cz;
            let y = dy * Math.cos(angle) - dz * Math.sin(angle);
            let z = dy * Math.sin(angle) + dz * Math.cos(angle);
            v.y = y + cy;
            v.z = z + cz;
        }

        // rotate the cube along the y axis
        angle = timeDelta * 0.001 * SPEED_Y * Math.PI * 2;
        for (let v of vertices) {
            let dx = v.x - cx;
            let dz = v.z - cz;
            let x = dz * Math.sin(angle) + dx * Math.cos(angle);
            let z = dz * Math.cos(angle) - dx * Math.sin(angle);
            v.x = x + cx;
            v.z = z + cz;
        }

        color_rotation += 0.25;
        color_rotation = (color_rotation % 360 + 360) % 360;

        // h: 0-360, s: 0-100%, l:0-100%        
        let hsl_color = `hsl(${color_rotation},${80}%,${50}%)`

        // console.log(color_rotation)
        ctx.strokeStyle = hsl_color;

        // draw each edge
        for (let edge of edges) {
            ctx.beginPath();
            ctx.moveTo(vertices[edge[0]].x, vertices[edge[0]].y);
            ctx.lineTo(vertices[edge[1]].x, vertices[edge[1]].y);
            ctx.stroke();
        }

        // call the next frame
        requestAnimationFrame(loop);
    }
</script>

<style>    
    #cube {
        width: 40vw;
        aspect-ratio: 1;
    }
</style>

<canvas id='cube' bind:this={canvas} width={w} height={h}></canvas>
